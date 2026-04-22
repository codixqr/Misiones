'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import { useLanguage } from '@/utils/LanguageContext'
import { useEffect, useState } from 'react'
import { sliderBlog } from "@/utils/swiperOptions"

const FALLBACK_ARTICLES = [
	{
		id: 'nevzat-otelpostasi-1',
		title: 'Yerli Otel Markaları Neden Fark Yaratamıyor?',
		description: 'Türk otelcilik sektöründe yerli markaların fark yaratamamasının ardındaki zihinsel model eksikliği ve 3F Modeli ile geleceğe bakış.',
		url: 'https://otelpostasi.com/kose-yazisi/yerli-otel-markalari-neden-fark-yaratamiyor',
		source: 'Otel Postası',
		date: '13 Nisan 2026',
		cat: 'Köşe Yazısı',
		img: '/images/blog/card-blog-item-1.jpg',
	},
	{
		id: 'nevzat-gmtourism-1',
		title: 'Oda Değil, Erişilebilirlik Satıyoruz',
		description: 'Erişilebilir lüks ile değer odaklı konaklama arasındaki ince çizgi. Otelcilik artık yalnızca oda satışı değil; erişilebilirlik, güven ve değer satışıdır.',
		url: 'https://gmtourism.com/nevzat-celebi-oda-degil-erisilebilirlik-satiyoruz',
		source: 'GM Tourism',
		date: '16 Nisan 2026',
		cat: 'Turizm Röportajları',
		img: '/images/blog/card-blog-item-2.jpg',
	},
	{
		id: 'nevzat-tourismtoday-1',
		title: 'Otelcilik Sektöründe Uygulanan Stratejilere Derin Bir Bakış',
		description: 'Otelcilik sektörü krizleri tek başına aşmakla değil, birlikte yeni sahneler kurarak aşar. Kolektif dayanışma ve sürdürülebilirlik stratejileri.',
		url: 'https://www.tourismtoday.net/TR/2025/3940/Otelcilik-sektorunde-uygulanan-stratejilere-derin-bir-bakis',
		source: 'Tourism Today',
		date: '9 Nisan 2026',
		cat: 'Köşe Yazısı',
		img: '/images/blog/card-blog-item-3.jpg',
	},
]

const FALLBACK_IMG = '/images/blog/card-blog-item-1.jpg'

function ArticleImg({ src, alt }) {
	const initialSrc = src || FALLBACK_IMG
	const [imgSrc, setImgSrc] = useState(initialSrc)
	const [hasError, setHasError] = useState(false)
	const isExternal = imgSrc && (imgSrc.startsWith('http') || imgSrc.startsWith('//'))

	useEffect(() => {
		setImgSrc(src || FALLBACK_IMG)
		setHasError(false)
	}, [src])

	const handleError = () => {
		if (!hasError) {
			setImgSrc(FALLBACK_IMG)
			setHasError(true)
		}
	}

	if (isExternal && !hasError) {
		return (
			// eslint-disable-next-line @next/next/no-img-element
			<img
				src={imgSrc}
				alt={alt}
				onError={handleError}
				style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
			/>
		)
	}
	return (
		<Image
			width={400}
			height={240}
			style={{ width: '100%', height: '240px', objectFit: 'cover' }}
			src={imgSrc || FALLBACK_IMG}
			alt={alt}
			className="lazyload"
		/>
	)
}

export default function Section10() {
	const { lang } = useLanguage()
	const [articles, setArticles] = useState(FALLBACK_ARTICLES)
	const [loading, setLoading] = useState(true)
	const labels = {
		subtitle: lang === 'tr' ? 'haberler & makaleler' : lang === 'ar' ? 'أخبار ومقالات' : lang === 'ru' ? 'новости и статьи' : 'news & articles',
		title: lang === 'tr' ? "Nevzat Ahmet Çelebi'nin" : lang === 'ar' ? 'أحدث مقالات' : lang === 'ru' ? 'Последние статьи' : 'Latest Articles by',
		titleSpan: lang === 'tr' ? 'Güncel Yazıları' : lang === 'ar' ? 'Nevzat Ahmet Çelebi' : lang === 'ru' ? 'Nevzat Ahmet Çelebi' : 'Nevzat Ahmet Çelebi',
		desc: lang === 'tr'
			? 'GM Tourism · Otel Postası · Tourism Today kaynaklarından otomatik olarak derlenmektedir.'
			: lang === 'ar'
				? 'يتم تجميع المحتوى تلقائيا من GM Tourism و Otel Postası و Tourism Today.'
				: lang === 'ru'
					? 'Материалы автоматически собираются из GM Tourism, Otel Postası и Tourism Today.'
					: 'Automatically curated from GM Tourism · Otel Postası · Tourism Today.',
		loading: lang === 'tr' ? 'Makaleler yükleniyor...' : lang === 'ar' ? 'يتم تحميل المقالات...' : lang === 'ru' ? 'Загрузка статей...' : 'Loading articles...',
		readMore: lang === 'tr' ? 'Devamını Oku' : lang === 'ar' ? 'اقرأ المزيد' : lang === 'ru' ? 'Читать далее' : 'Read More',
	}

	useEffect(() => {
		fetch('/api/blog-posts')
			.then((r) => r.json())
			.then((data) => {
				if (Array.isArray(data) && data.length > 0) {
					setArticles(data)
				}
			})
			.catch(() => {})
			.finally(() => setLoading(false))
	}, [])

	return (
		<section className="s-new-blog tf-spacing-1">
			<div className="tf-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="content text-center mb-70">
							<p className="s-sub-title justify-center mb-17">
								<i className="icon-angles-right moveLeftToRight" />
								{labels.subtitle}
							</p>
							<p className="s-title text-anime-wave">
								{<>{labels.title} <br /><span>{labels.titleSpan}</span></>}
							</p>
							<p style={{ color: '#888', fontSize: '13px', marginTop: '8px' }}>
								{labels.desc}
							</p>
						</div>

						{loading ? (
							<div style={{ textAlign: 'center', padding: '40px 0', color: '#888' }}>
								<i className="icon-clock" style={{ marginRight: '8px' }} />
								{labels.loading}
							</div>
						) : (
							<Swiper {...sliderBlog} className="swiper-container slider-blog overflow-hidden">
								<div className="swiper-wrapper">
									{articles.map((article) => (
										<SwiperSlide key={article.id}>
											<div className="card-blog-item tf-hover">
												<Link href={article.url} target="_blank" rel="noopener noreferrer">
						<div className="entry-image mb-30 hover-1 hover-14" style={{ position: 'relative' }}>
													<ArticleImg src={article.img} alt={article.title} />
													</div>
												</Link>
												<div className="entry-meta mb-20">
													<ul className="meta-list">
														<li><span>{article.cat}</span></li>
														<li><span className="line" /></li>
														<li><span>Nevzat Ahmet Çelebi</span></li>
														<li><span className="line" /></li>
														<li><span>{article.date}</span></li>
													</ul>
												</div>
												<Link
													href={article.url}
													target="_blank"
													rel="noopener noreferrer"
													className="title fw-7 mb-10 text-clamp-2"
												>
													{article.title}
												</Link>
												<p className="text mb-25">{article.description}</p>
												<Link
													href={article.url}
													target="_blank"
													rel="noopener noreferrer"
													className="tf-btn style-8 small type-2"
												>
													{labels.readMore}
													<i className="icon-chevron-right" />
												</Link>
											</div>
										</SwiperSlide>
									))}
								</div>
							</Swiper>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
