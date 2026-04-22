import { NextResponse } from 'next/server'
import Parser from 'rss-parser'
import fs from 'fs'
import path from 'path'

const AUTHOR_NAME = 'nevzat'
const WEEK_IN_SECONDS = 604800

function getLocalArticles() {
	try {
		const filePath = path.join(process.cwd(), 'content', 'blog-posts.json')
		if (fs.existsSync(filePath)) {
			const data = fs.readFileSync(filePath, 'utf8')
			return JSON.parse(data)
		}
	} catch (error) {
		console.error('Error reading local articles:', error)
	}
	return []
}

const STATIC_ARTICLES = [
	{
		id: 'otelcilikte-markanin-derin-anlami-ve-gucu',
		title: 'Otelcilikte Markanın Derin Anlamı Ve Gücü',
		description: 'Otelcilikte Markanın Derin Anlamı Ve Gücü. Marka, otelcilik sektöründe yalnızca bir isim ya da logo değildir; bir işletmenin ruhunu, vizyonunu ve sahadaki gerçekliğini misafirin zihnine ve kalbine nakşeden en güçlü araçtır.',
		url: 'https://otelpostasi.com/kose-yazisi/otelcilikte-markanin-derin-anlami-ve-gucu',
		source: 'Otel Postası',
		date: '20 Nisan 2026',
		cat: 'Köşe Yazısı',
		img: '/images/blog/blog-20260422-0.png',
	},
	{
		id: 'yerli-otel-markalari-neden-fark-yaratamiyor',
		title: 'Yerli Otel Markaları Neden Fark Yaratamıyor?',
		description: 'Yerli Otel Markaları Neden Fark Yaratamıyor? 3F Modeli ile Geleceğe Bakış. Türk otelcilik sektöründe yerli markaların yıllardır süregelen bir açmazı var: fark yaratamamak.',
		url: 'https://otelpostasi.com/kose-yazisi/yerli-otel-markalari-neden-fark-yaratamiyor',
		source: 'Otel Postası',
		date: '13 Nisan 2026',
		cat: 'Köşe Yazısı',
		img: '/images/blog/blog-20260422-1.png',
	},
	{
		id: 'otelcilikte-dijital-donusumun-nabzi-roomxqr',
		title: 'Otelcilikte Dijital Dönüşümün Nabzı RoomXQR',
		description: 'Otelcilikte Dijital Dönüşümün Nabzı RoomXQR Ve RestXQR. Bir otelin kalbi hâlâ lobide atar; fakat artık aklı, dijital zekâsını RoomXQR ve RestXQR yazılımlarında çalıştırıyor.',
		url: 'https://otelpostasi.com/kose-yazisi/otelcilikte-dijital-donusumun-nabzi-roomxqr',
		source: 'Otel Postası',
		date: '06 Nisan 2026',
		cat: 'Köşe Yazısı',
		img: '/images/blog/blog-20260422-2.png',
	},
	{
		id: 'otelcilikte-karar-vermemenin-gizli-maliyeti',
		title: 'Otelcilikte Karar Vermemenin Gizli Maliyeti',
		description: 'Otelcilikte Karar Vermemenin Gizli Maliyeti. Güvendeyim Derken Patronajın Kaybettikleri. Sektörde yıllarını vermiş olan herkes bilir: otelcilikte en pahalı karar, aslında verilmeyen karardır.',
		url: 'https://otelpostasi.com/kose-yazisi/otelcilikte-karar-vermemenin-gizli-maliyeti-guvendeyim-derken-patronajin-kaybettikleri',
		source: 'Otel Postası',
		date: '30 Mart 2026',
		cat: 'Köşe Yazısı',
		img: '/images/blog/blog-20260422-3.png',
	},
	{
		id: 'turkiye-otelcilik-sektorunde-yatirimci-profili-ve-zihinsel-yapi',
		title: 'Türkiye Otelcilik Sektöründe Yatırımcı Profili Ve Zihinsel Yapı',
		description: 'Türkiye Otelcilik Sektöründe Yatırımcı Profili Ve Zihinsel Yapı. Türkiye’de otelcilik sektörünün yatırımcı profili, yalnızca sermaye gücüyle değil, zihinsel yapısıyla da şekillenen çok katmanlı bir olgudur.',
		url: 'https://otelpostasi.com/kose-yazisi/turkiye-otelcilik-sektorunde-yatirimci-profili-ve-zihinsel-yapi',
		source: 'Otel Postası',
		date: '22 Mart 2026',
		cat: 'Köşe Yazısı',
		img: '/images/blog/blog-20260422-4.png',
	},
	{
		id: 'benden-bize-otelcilikte-takim-ruhu-ve-ortak-basari',
		title: 'Ben’den Biz’e Otelcilikte Takım Ruhu Ve Ortak Başarı',
		description: 'Ben’den Biz’e Otelcilikte Takım Ruhu Ve Ortak Başarı. Otelcilik sektörü, tek başına parlayan yıldızların değil, birlikte ışıldayan takımların sahnesidir.',
		url: 'https://otelpostasi.com/kose-yazisi/benden-bize-otelcilikte-takim-ruhu-ve-ortak-basari',
		source: 'Otel Postası',
		date: '16 Mart 2026',
		cat: 'Köşe Yazısı',
		img: '/images/blog/blog-20260422-5.png',
	},
	{
		id: 'odaklanamayan-otellerin-sessiz-cokusu-dikkat-sermayesinin-gucu',
		title: 'Odaklanamayan Otellerin Sessiz Çöküşü Dikkat Sermayesinin Gücü',
		description: 'Odaklanamayan Otellerin Sessiz Çöküşü. Dikkat Sermayesinin Gücü. Otelcilik sektörü, yıllardır teknoloji yatırımlarını “kurtarıcı” olarak gördü.',
		url: 'https://otelpostasi.com/kose-yazisi/odaklanamayan-otellerin-sessiz-cokusu-dikkat-sermayesinin-gucu',
		source: 'Otel Postası',
		date: '08 Mart 2026',
		cat: 'Köşe Yazısı',
		img: '/images/blog/blog-20260422-6.png',
	},
	{
		id: 'otelcilikte-liderlik-ve-yoneticilik-sektorun-kalbine-dokunan-bir-gercek',
		title: 'Otelcilikte Liderlik Ve Yöneticilik Sektörün Kalbine Dokunan Bir Gerçek',
		description: 'Otelcilikte Liderlik Ve Yöneticilik. Sektörün Kalbine Dokunan Bir Gerçek. Konaklama sektöründe yıllarını sahada geçirmiş herkes bilir.',
		url: 'https://otelpostasi.com/kose-yazisi/otelcilikte-liderlik-ve-yoneticilik-sektorun-kalbine-dokunan-bir-gercek',
		source: 'Otel Postası',
		date: '02 Mart 2026',
		cat: 'Köşe Yazısı',
		img: '/images/blog/blog-20260422-7.png',
	},
	{
		id: 'awards-me-masters-of-excellence',
		title: 'AWARDS ME – Masters of Excellence',
		description: 'AWARDS ME – Masters of Excellence Turizmde Mükemmelliği Onurlandıran Prestijli Dijital Oylama Bu Yıl İlk Kez Düzenleniyor.',
		url: 'https://otelpostasi.com/kose-yazisi/awards-me-masters-of-excellence',
		source: 'Otel Postası',
		date: '18 Aralık 2025',
		cat: 'Köşe Yazısı',
		img: '/images/blog/blog-20260422-8.png',
	},
	{
		id: '2026ya-girerken-sessiz-cagri',
		title: '2026’ya Girerken Sessiz Çağrı',
		description: '2026’ya Girerken Sessiz Çağrı Yapmak Değil, Anlamak Kazandırır Yolculuğu. Yapmak Değil, Anlamak Kazandırır Yolculuğu.',
		url: 'https://otelpostasi.com/kose-yazisi/2026ya-girerken-sessiz-cagri-yapmak-degil-anlamak-kazandirir-yolculugu',
		source: 'Otel Postası',
		date: '29 Aralık 2025',
		cat: 'Köşe Yazısı',
		img: '/images/blog/blog-20260422-9.png',
	},
	{
		id: 'otellerde-yerel-dokunuslar',
		title: 'Otellerde Yerel Dokunuşlar',
		description: 'Bugün 2026 yılındayız ve hala şuna şaşırıyorum; neden bazı oteller kapıdan içeri girdiğiniz an dünyanın her yerindeki o birbirinin kopyası “soğuk” yapılara benziyor?',
		url: 'https://otelpostasi.com/kose-yazisi/otellerde-yerel-dokunuslar-2026nin-rekabet-araci',
		source: 'Otel Postası',
		date: '06 Ocak 2026',
		cat: 'Köşe Yazısı',
		img: '/images/blog/blog-20260422-10.png',
	},
	{
		id: 'genel-muduru-on-buro-muduru-secerse',
		title: 'Genel Müdürü Ön Büro Müdürü Seçerse…',
		description: 'Bir süredir içimde biriken bir konuyu artık dillendirme ihtiyacı hissediyorum. Bu bir sitem mi, bir uyarı mı, yoksa sektöre küçük bir ayna tutma çabası mı… Bunu okuyan karar versin.',
		url: 'https://otelpostasi.com/kose-yazisi/genel-muduru-on-buro-muduru-secerse',
		source: 'Otel Postası',
		date: '24 Ocak 2026',
		cat: 'Köşe Yazısı',
		img: '/images/blog/blog-20260422-11.png',
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
			next: { revalidate: WEEK_IN_SECONDS },
		})
		clearTimeout(timeout)
		if (!res.ok) return null
		const text = await res.text()
		return await parser.parseString(text)
	} catch {
		return null
	}
}

function isNevzatArticle(item) {
	const creator = `${item['dc:creator'] || ''} ${item.author || ''} ${item.creator || ''}`.toLowerCase()
	const title = `${item.title || ''}`.toLowerCase()
	const content = `${item['content:encoded'] || item.content || item.contentSnippet || ''}`.toLowerCase()
	const link = `${item.link || ''}`.toLowerCase()

	return (
		creator.includes(AUTHOR_NAME) ||
		title.includes('çelebi') ||
		title.includes('celebi') ||
		content.includes('nevzat') ||
		content.includes('çelebi') ||
		link.includes('nevzat') ||
		link.includes('celebi')
	)
}

function parseTimestamp(item) {
	const raw = item.pubDate || item.isoDate || item.date
	const ts = Date.parse(raw || '')
	return Number.isNaN(ts) ? 0 : ts
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
			if (!isNevzatArticle(item)) continue

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
				timestamp: parseTimestamp(item),
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
				timestamp: parseTimestamp({ date: article.date }),
			}
		})
	)

	const localArticles = getLocalArticles()
	const deduped = [...dynamicArticles, ...staticWithImages, ...localArticles].reduce((acc, article) => {
		const key = (article.url || article.title || article.id).toLowerCase()
		if (!acc.has(key)) acc.set(key, article)
		return acc
	}, new Map())

	const allArticles = [...deduped.values()]
		.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
		.slice(0, 24)
		.map(({ timestamp, ...rest }) => rest)

	return NextResponse.json(allArticles, {
		headers: {
			'Cache-Control': `public, s-maxage=${WEEK_IN_SECONDS}, stale-while-revalidate=86400`,
		},
	})
}
