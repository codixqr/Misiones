import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

const AUTHOR_NAME = 'Nevzat'

const STATIC_ARTICLES = [
	{
		id: 'nevzat-otelpostasi-1',
		title: 'Yerli Otel Markaları Neden Fark Yaratamıyor?',
		description: 'Türk otelcilik sektöründe yerli markaların fark yaratamamasının ardındaki zihinsel model eksikliği ve 3F Modeli (Farklı Düşün, Farklı Konuş, Farklı Görün) ile geleceğe bakış.',
		url: 'https://otelpostasi.com/kose-yazisi/yerli-otel-markalari-neden-fark-yaratamiyor',
		source: 'Otel Postası',
		date: '13 Nisan 2026',
		cat: 'Köşe Yazısı',
		img: null,
	},
	{
		id: 'nevzat-gmtourism-1',
		title: 'Oda Değil, Erişilebilirlik Satıyoruz',
		description: 'Erişilebilir lüks ile değer odaklı konaklama arasındaki ince çizgi. Otelcilik artık yalnızca oda satışı değil; erişilebilirlik, güven, esneklik ve değer satışıdır.',
		url: 'https://gmtourism.com/nevzat-celebi-oda-degil-erisilebilirlik-satiyoruz',
		source: 'GM Tourism',
		date: '16 Nisan 2026',
		cat: 'Turizm Röportajları',
		img: null,
	},
	{
		id: 'nevzat-tourismtoday-1',
		title: 'Otelcilik Sektöründe Uygulanan Stratejilere Derin Bir Bakış',
		description: 'Otelcilik sektörü krizleri tek başına aşmakla değil, birlikte yeni sahneler kurarak aşar. Kolektif dayanışma, sürdürülebilirlik ve ortaklık stratejileri.',
		url: 'https://www.tourismtoday.net/TR/2025/3940/Otelcilik-sektorunde-uygulanan-stratejilere-derin-bir-bakis',
		source: 'Tourism Today',
		date: '9 Nisan 2026',
		cat: 'Köşe Yazısı',
		img: null,
	},
]

const RSS_SOURCES = [
	{
		name: 'GM Tourism',
		feeds: [
			'https://gmtourism.com/feed',
			'https://gmtourism.com/rss.xml',
			'https://gmtourism.com/feed.xml',
		],
	},
	{
		name: 'Otel Postası',
		feeds: [
			'https://otelpostasi.com/feed',
			'https://otelpostasi.com/rss.xml',
			'https://otelpostasi.com/feed.xml',
		],
	},
	{
		name: 'Tourism Today',
		feeds: [
			'https://tourismtoday.net/feed',
			'https://tourismtoday.net/rss.xml',
			'https://www.tourismtoday.net/TR/feed',
		],
	},
]

const FALLBACK_IMAGES = [
	'/images/blog/card-blog-item-1.jpg',
	'/images/blog/card-blog-item-2.jpg',
	'/images/blog/card-blog-item-3.jpg',
	'/images/blog/card-blog-item-4.jpg',
	'/images/blog/card-blog-item-5.jpg',
]

function sanitizeImageUrl(url) {
	if (!url || typeof url !== 'string') return null
	const candidate = url.trim()
	if (!candidate) return null
	const normalized = candidate.startsWith('//') ? `https:${candidate}` : candidate
	const lower = normalized.toLowerCase()

	// Avoid logo/icon like assets that break card design
	if (lower.endsWith('.svg') || lower.includes('logo') || lower.includes('favicon') || lower.includes('icon')) {
		return null
	}
	return normalized
}

function stripHtml(html) {
	if (!html) return ''
	return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').trim()
}

function formatDate(dateStr) {
	if (!dateStr) return ''
	try {
		const d = new Date(dateStr)
		return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
	} catch {
		return dateStr
	}
}

async function fetchOgImage(url) {
	try {
		const controller = new AbortController()
		const timeout = setTimeout(() => controller.abort(), 6000)
		const res = await fetch(url, {
			signal: controller.signal,
			headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Misiones-Bot/1.0)' },
			next: { revalidate: 86400 },
		})
		clearTimeout(timeout)
		if (!res.ok) return null
		const html = await res.text()
		const match = html.match(/<meta[^>]+(?:property="og:image"|name="og:image")[^>]+content="([^"]+)"/i)
			|| html.match(/<meta[^>]+content="([^"]+)"[^>]+(?:property="og:image"|name="og:image")/i)
			|| html.match(/<meta[^>]+property="og:image"\s+content="([^"]+)"/i)
			|| html.match(/og:image.*?content="([^"]+)"/i)
		return match ? match[1] : null
	} catch {
		return null
	}
}

async function fetchRSSFeed(parser, url) {
	try {
		const controller = new AbortController()
		const timeout = setTimeout(() => controller.abort(), 8000)
		const res = await fetch(url, {
			signal: controller.signal,
			headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Misiones-Bot/1.0)' },
			next: { revalidate: 3600 },
		})
		clearTimeout(timeout)
		if (!res.ok) return null
		const text = await res.text()
		return await parser.parseString(text)
	} catch {
		return null
	}
}

function extractImageFromItem(item) {
	// Try enclosure (RSS 2.0)
	if (item.enclosure && item.enclosure.url && item.enclosure.type && item.enclosure.type.startsWith('image')) {
		return item.enclosure.url
	}
	// Try media:content
	if (item['media:content'] && item['media:content'].$ && item['media:content'].$.url) {
		return item['media:content'].$.url
	}
	// Try media:thumbnail
	if (item['media:thumbnail'] && item['media:thumbnail'].$ && item['media:thumbnail'].$.url) {
		return item['media:thumbnail'].$.url
	}
	// Try to extract from content:encoded HTML
	const content = item['content:encoded'] || item.content || ''
	const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i)
	if (imgMatch) return imgMatch[1]
	return null
}

export async function GET() {
	const parser = new Parser({
		customFields: {
			item: [
				'dc:creator', 'author', 'content:encoded',
				['media:content', 'media:content', { keepArray: false }],
				['media:thumbnail', 'media:thumbnail', { keepArray: false }],
			],
		},
	})

	const dynamicArticles = []
	let fallbackIndex = 0

	for (const source of RSS_SOURCES) {
		let feed = null
		for (const feedUrl of source.feeds) {
			feed = await fetchRSSFeed(parser, feedUrl)
			if (feed) break
		}

		if (!feed || !feed.items) continue

		for (const item of feed.items) {
			const creator = item['dc:creator'] || item.author || item.creator || ''
			const isNevzat = creator.toLowerCase().includes(AUTHOR_NAME.toLowerCase())
			if (!isNevzat) continue

			const alreadyExists = STATIC_ARTICLES.some(
				(a) => a.url === item.link || a.title === item.title
			)
			if (alreadyExists) continue

			const rawDesc = item.contentSnippet || stripHtml(item['content:encoded'] || item.content || item.summary || '')
			const shortDesc = rawDesc.slice(0, 200).trim() + (rawDesc.length > 200 ? '…' : '')

			const imgFromFeed = item.enclosure?.url || item['media:content']?.url || item['content:encoded']?.match(/<img[^>]+src="([^"]+)"/i)?.[1]
			const safeImg = sanitizeImageUrl(imgFromFeed)

			dynamicArticles.push({
				id: `dynamic-${source.name}-${item.guid || item.link}`,
				title: stripHtml(item.title || ''),
				description: shortDesc,
				url: item.link || '',
				source: source.name,
				date: formatDate(item.pubDate || item.isoDate),
				cat: 'Köşe Yazısı',
				img: safeImg || FALLBACK_IMAGES[fallbackIndex % FALLBACK_IMAGES.length],
			})
			fallbackIndex++
		}
	}

	// Fetch og:images for static articles in parallel
	const staticWithImages = await Promise.all(
		STATIC_ARTICLES.map(async (article, idx) => {
			let ogImg = null
			try {
				ogImg = sanitizeImageUrl(await fetchOgImage(article.url))
			} catch (err) {
				console.error(`Error fetching OG image for ${article.url}:`, err)
			}
			
			return {
				...article,
				img: ogImg || FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length],
			}
		})
	)

	const allArticles = [...dynamicArticles, ...staticWithImages]

	return NextResponse.json(allArticles, {
		headers: {
			'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
		},
	})
}
