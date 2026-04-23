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

const STATIC_ARTICLES = []

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

const TURKISH_MONTHS = {
	'ocak': 0, 'şubat': 1, 'mart': 2, 'nisan': 3, 'mayıs': 4, 'haziran': 5,
	'temmuz': 6, 'ağustos': 7, 'eylül': 8, 'ekim': 9, 'kasım': 10, 'aralık': 11
}

function parseTimestamp(item) {
	const raw = item.pubDate || item.isoDate || item.date || ''
	if (!raw) return 0

	// Try standard parsing first
	let ts = Date.parse(raw)
	if (!Number.isNaN(ts)) return ts

	// Try Turkish date parsing (e.g. "16 Nisan 2026")
	try {
		const parts = raw.toLowerCase().split(/\s+/)
		if (parts.length >= 3) {
			const day = parseInt(parts[0], 10)
			const month = TURKISH_MONTHS[parts[1]]
			const year = parseInt(parts[2], 10)
			if (!Number.isNaN(day) && month !== undefined && !Number.isNaN(year)) {
				return new Date(year, month, day).getTime()
			}
		}
	} catch (e) {
		console.error('Error parsing Turkish date:', raw, e)
	}

	return 0
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

	const localArticles = getLocalArticles().map(article => ({
		...article,
		timestamp: parseTimestamp({ date: article.date })
	}))

	const combined = [...dynamicArticles, ...staticWithImages, ...localArticles]

	// Deduplicate
	const dedupedMap = new Map()
	for (const article of combined) {
		const key = (article.url || article.title || article.id).toLowerCase()
		if (!dedupedMap.has(key)) dedupedMap.set(key, article)
	}

	let allArticles = [...dedupedMap.values()]
		.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
		.slice(0, 32) // Get a bit more for enrichment

	// Enrich any article missing an image
	allArticles = await Promise.all(allArticles.map(async (article, idx) => {
		if ((!article.img || article.img === "") && article.url) {
			try {
				const ogImg = await fetchOgImage(article.url)
				return {
					...article,
					img: sanitizeImageUrl(ogImg) || FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length]
				}
			} catch (err) {
				return {
					...article,
					img: FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length]
				}
			}
		}
		return article
	}))

	const finalArticles = allArticles
		.slice(0, 24)
		.map(({ timestamp, ...rest }) => rest)

	return NextResponse.json(finalArticles, {
		headers: {
			'Cache-Control': `public, s-maxage=${WEEK_IN_SECONDS}, stale-while-revalidate=86400`,
		},
	})
}
