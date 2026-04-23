'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/utils/LanguageContext'

const FALLBACK_ARTICLES = [

	{
		id: 'nevzat-gmtourism-1',
		title: 'Oda Değil, Erişilebilirlik Satıyoruz',
		description: 'Erişilebilir lüks ile değer odaklı konaklama arasındaki ince çizgi. Otelcilik artık yalnızca oda satışı değil; erişilebilirlik, güven, esneklik ve değer satışıdır.',
		url: 'https://gmtourism.com/nevzat-celebi-oda-degil-erisilebilirlik-satiyoruz',
		source: 'GM Tourism',
		date: '16 Nisan 2026',
		cat: 'Turizm Röportajları',
		img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
	},
	{
		id: 'nevzat-tourismtoday-1',
		title: 'Otelcilik Sektöründe Uygulanan Stratejilere Derin Bir Bakış',
		description: 'Otelcilik sektörü krizleri tek başına aşmakla değil, birlikte yeni sahneler kurarak aşar. Kolektif dayanışma, sürdürülebilirlik ve ortaklık stratejileri.',
		url: 'https://www.tourismtoday.net/TR/2025/3940/Otelcilik-sektorunde-uygulanan-stratejilere-derin-bir-bakis',
		source: 'Tourism Today',
		date: '9 Nisan 2026',
		cat: 'Köşe Yazısı',
		img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
	},
	{
		id: 'nevzat-otelpostasi-1',
		title: 'Yerli Otel Markaları Neden Fark Yaratamıyor?',
		description: 'Türk otelcilik sektöründe yerli markaların fark yaratamamasının ardındaki zihinsel model eksikliği ve 3F Modeli (Farklı Düşün, Farklı Konuş, Farklı Görün) ile geleceğe bakış.',
		url: 'https://otelpostasi.com/kose-yazisi/yerli-otel-markalari-neden-fark-yaratamiyor',
		source: 'Otel Postası',
		date: '13 Nisan 2026',
		cat: 'Köşe Yazısı',
		img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
	},
]

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800'

function normalizeImageUrl(value) {
	if (!value || typeof value !== 'string') return FALLBACK_IMG
	const src = value.trim()
	if (!src) return FALLBACK_IMG
	if (src.startsWith('//')) return `https:${src}`
	return src
}

function ArticleImage({ src, alt }) {
	const [imgSrc, setImgSrc] = useState(normalizeImageUrl(src))

	useEffect(() => {
		setImgSrc(normalizeImageUrl(src))
	}, [src])

	return (
		<div style={{ width: '100%', aspectRatio: '16 / 9', background: '#eef2f8' }}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={imgSrc}
				alt={alt}
				onError={() => setImgSrc(FALLBACK_IMG)}
				loading="lazy"
				style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
			/>
		</div>
	)
}

export default function Section1() {
	const { lang } = useLanguage()
	const [articles, setArticles] = useState(FALLBACK_ARTICLES)
	const [loading, setLoading] = useState(true)

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

	const labels = {
		author: lang === 'tr' ? 'Yazar' : lang === 'ar' ? 'الكاتب' : lang === 'ru' ? 'Автор' : 'Author',
		readMore: lang === 'tr' ? 'Devamını Oku' : lang === 'ar' ? 'اقرأ المزيد' : lang === 'ru' ? 'Читать далее' : 'Read More',
		loading: lang === 'tr' ? 'Makaleler yükleniyor...' : lang === 'ar' ? 'يتم تحميل المقالات...' : lang === 'ru' ? 'Загрузка статей...' : 'Loading articles...',
		search: lang === 'tr' ? 'Ara...' : lang === 'ar' ? 'بحث...' : lang === 'ru' ? 'Поиск...' : 'Search...',
		categories: lang === 'tr' ? 'Kategoriler' : lang === 'ar' ? 'الفئات' : lang === 'ru' ? 'Категории' : 'Categories',
		recentPosts: lang === 'tr' ? 'Son Yazılar' : lang === 'ar' ? 'أحدث المقالات' : lang === 'ru' ? 'Последние статьи' : 'Recent Posts',
		tags: lang === 'tr' ? 'Etiketler' : lang === 'ar' ? 'الوسوم' : lang === 'ru' ? 'Теги' : 'Tags',
		consultation: lang === 'tr' ? 'Danışmanlık Al' : lang === 'ar' ? 'احصل على استشارة' : lang === 'ru' ? 'Получить консультацию' : 'Get Consultation',
		serviceTitle: lang === 'tr' ? 'Otelcilik Danışmanlığı & Yönetim Hizmetleri' : lang === 'ar' ? 'خدمات استشارات وإدارة الضيافة' : lang === 'ru' ? 'Консалтинг и управление в гостеприимстве' : 'Hospitality Consulting & Management Services',
		subtitle: lang === 'tr' ? 'haberler & makaleler' : lang === 'ar' ? 'أخبار ومقالات' : lang === 'ru' ? 'новости и статьи' : 'news & articles',
		headerTitle: lang === 'tr' ? "Nevzat Ahmet Çelebi'nin" : lang === 'ar' ? 'أحدث مقالات' : lang === 'ru' ? 'Последние статьи' : 'Latest Articles by',
		headerTitleSpan: lang === 'tr' ? 'Güncel Yazıları' : lang === 'ar' ? 'Nevzat Ahmet Çelebi' : lang === 'ru' ? 'Nevzat Ahmet Çelebi' : 'Nevzat Ahmet Çelebi',

	}

	const categoryList = lang === 'tr'
		? ['Otel Yatırım Danışmanlığı', 'Marka Entegrasyonu', 'Gelir Yönetimi', 'Operasyon Danışmanlığı', 'HIP – Otel Geliştirme Planı']
		: lang === 'ar'
			? ['استشارات الاستثمار الفندقي', 'دمج العلامة التجارية', 'إدارة الإيرادات', 'الاستشارات التشغيلية', 'HIP – خطة تطوير الفندق']
			: lang === 'ru'
				? ['Инвестиционный консалтинг для отелей', 'Интеграция бренда', 'Управление доходами', 'Операционный консалтинг', 'HIP – План развития отеля']
				: ['Hotel Investment Consulting', 'Brand Integration', 'Revenue Management', 'Operations Consulting', 'HIP – Hotel Improvement Plan']

	const tagList = lang === 'tr'
		? ['Otelcilik', 'Danışmanlık', 'Turizm', 'Gelir Yönetimi', 'Yatırım', 'Marka', 'Strateji', 'HIP']
		: lang === 'ar'
			? ['الضيافة', 'الاستشارات', 'السياحة', 'الإيرادات', 'الاستثمار', 'العلامة التجارية', 'الاستراتيجية', 'HIP']
			: lang === 'ru'
				? ['Гостеприимство', 'Консалтинг', 'Туризм', 'Доход', 'Инвестиции', 'Бренд', 'Стратегия', 'HIP']
				: ['Hospitality', 'Consulting', 'Tourism', 'Revenue', 'Investment', 'Brand', 'Strategy', 'HIP']

	return (
		<>
			<section className="s-blog-standard" style={{ padding: '80px 0' }}>
				<div className="tf-container">

					{/* Page Header */}
					<div className="row mb-60">
						<div className="col-lg-12 text-center">
							<p className="s-sub-title justify-center mb-17">
								<i className="icon-angles-right moveLeftToRight" />
								{labels.subtitle}
							</p>
							<p className="s-title text-anime-wave" style={{ color: '#1B2F5E' }}>
								<>{labels.headerTitle} <span>{labels.headerTitleSpan}</span></>
							</p>
						</div>
					</div>

					<div className="row">
						{/* Main Content */}
						<div className="col-lg-8">
							<div className="content-section">
								{loading ? (
									<div style={{ textAlign: 'center', padding: '60px 0', color: '#888' }}>
										<i className="icon-clock" style={{ marginRight: '8px', fontSize: '24px' }} />
										<p style={{ marginTop: '16px' }}>{labels.loading}</p>
									</div>
								) : (
									articles.map((article, idx) => (
										<div key={article.id} className="article-blog-item mb-50 tf-hover">
											<div className="entry-image hover-14 hover-1" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', border: '1px solid #e9edf5' }}>
												<Link href={article.url} target="_blank" rel="noopener noreferrer">
													<ArticleImage src={article.img} alt={article.title} />
												</Link>
											</div>

											<div className="entry-meta" style={{ marginTop: '20px', marginBottom: '12px' }}>
												<ul className="meta-list">
													<li className="entry author">
														<div className="icon">
															<i className="icon-user" />
														</div>
														<span>Nevzat Ahmet Çelebi</span>
													</li>
													<li className="entry date">
														<div className="icon">
															<i className="icon-calendar-days" />
														</div>
														<span>{article.date}</span>
													</li>
													<li className="entry">
														<div className="icon">
															<i className="icon-tag" />
														</div>
														<span>{article.cat}</span>
													</li>
												</ul>
											</div>

											<div className="entry-title" style={{ marginBottom: '12px' }}>
												<Link
													href={article.url}
													target="_blank"
													rel="noopener noreferrer"
													className="font-main-2"
													style={{ fontSize: '22px', fontWeight: '700', color: '#1B2F5E', lineHeight: '1.4', display: 'block' }}
												>
													{article.title}
												</Link>
											</div>

											<div className="entry-text" style={{ marginBottom: '20px' }}>
												<p style={{ color: '#666', lineHeight: '1.7' }}>{article.description}</p>
											</div>

											<div className="entry-btn">
												<Link
													href={article.url}
													target="_blank"
													rel="noopener noreferrer"
													className="tf-btn small text-anime-style-1"
												>
													{labels.readMore}
													<i className="icon-chevron-right" />
												</Link>
											</div>

											{idx < articles.length - 1 && (
												<hr style={{ margin: '50px 0 0', borderColor: '#e8e8e8' }} />
											)}
										</div>
									))
								)}
							</div>
						</div>

						{/* Sidebar */}
						<div className="col-lg-4">
							<div className="tf-sidebar">
								{/* Search */}
								<div className="sb-item sb-search mb-30">
									<form action="#" className="form-sb-search">
										<fieldset>
											<input type="text" placeholder={labels.search} />
										</fieldset>
										<button type="submit" className="btn-search">
											<i className="icon-search" />
										</button>
									</form>
								</div>

								{/* Categories */}
								<div className="sb-item mb-30">
									<div className="sb-title">
										<i className="icon-bolt fs-20 color-main-black" />
										<h5 className="title">{labels.categories}</h5>
									</div>
									<div className="sb-content sb-category">
										<ul className="category-list">
											{categoryList.map((cat, i) => (
												<li key={i}>
													<Link href="/our-service">
														{cat}
														<i className="icon-chevron-right" />
													</Link>
												</li>
											))}
										</ul>
									</div>
								</div>

								{/* Recent Posts */}
								{articles.length > 0 && (
									<div className="sb-item mb-30">
										<div className="sb-title">
											<i className="icon-bolt fs-20 color-main-black" />
											<h5 className="title">{labels.recentPosts}</h5>
										</div>
										<div className="sb-content sb-news">
											<ul className="news-list">
												{articles.slice(0, 4).map((article) => (
													<li key={article.id} className="tf-hover">
														<div className="image hover-1" style={{ overflow: 'hidden', borderRadius: '6px', flexShrink: 0, width: '70px', height: '60px' }}>
															<ArticleImage src={article.img} alt={article.title} />
														</div>
														<div className="content">
															<div className="caption">
																<Link
																	href={article.url}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="font-main-2"
																	style={{ fontSize: '13px', lineHeight: '1.4' }}
																>
																	{article.title.slice(0, 55)}{article.title.length > 55 ? '...' : ''}
																</Link>
															</div>
															<p className="date">{article.date}</p>
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>
								)}

								{/* Tags */}
								<div className="sb-item sb-tag mb-30">
									<div className="sb-title">
										<i className="icon-bolt fs-20 color-main-black" />
										<h5 className="title">{labels.tags}</h5>
									</div>
									<div className="sb-content sb-tag">
										<ul className="tag-popular-list">
											{tagList.map((tag, i) => (
												<li key={i}><Link href="/our-service">{tag}</Link></li>
											))}
										</ul>
									</div>
								</div>

								{/* CTA Sidebar */}
								<div className="sb-item sb-service">
									<div className="tf-overlay" />
									<div className="image">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src="/images/section/otel-yonetim-danismanligi.jpg"
											alt="Konaklama danışmanlığı"
											loading="lazy"
											style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
										/>
									</div>
									<div className="content">
										<p className="font-main-2 text-anime-wave">
											{lang === 'tr'
												? <>Profesyonel Otelcilik <span>Danışmanlığı</span></>
												: <>Professional Hospitality <span>Consulting</span></>
											}
										</p>
										<Link href="/contact" className="tf-btn text-anime-style-1">
											{labels.consultation}
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
