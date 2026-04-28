'use client'
import { useState } from 'react'
import { useLanguage } from '@/utils/LanguageContext'

const WHY_ITEMS = [
	{
		icon: 'flaticon-target',
		titleTr: 'Sahadaki Gerçek Deneyim',
		titleEn: 'Real Field Experience',
		key: 'whyField',
	},
	{
		icon: 'flaticon-return-of-investment',
		titleTr: 'Sonuç Odaklı Yaklaşım',
		titleEn: 'Results-Oriented Approach',
		key: 'whyResults',
	},
	{
		icon: 'flaticon-human-resources',
		titleTr: 'Kapsamlı Hizmet Yelpazesi',
		titleEn: 'Comprehensive Service Range',
		key: 'whyService',
	},
	{
		icon: 'flaticon-data-management',
		titleTr: 'Global & Yerel Perspektif',
		titleEn: 'Global & Local Perspective',
		key: 'whyGlobal',
	},
]

const FAQS = [
	{ key: 1, transKey: 'faq1' },
	{ key: 2, transKey: 'faq2' },
	{ key: 3, transKey: 'faq3' },
	{ key: 4, transKey: 'faq4' },
	{ key: 5, transKey: 'faq5' },
	{ key: 6, transKey: 'faq6' },
]

export default function Section7() {
	const [isAccordion, setIsAccordion] = useState(1)
	const [showFullPerspective, setShowFullPerspective] = useState(false)
	const { lang, t } = useLanguage()
	const perspectiveContent = {
		global: [
			'Trendler ve donusum: Surdurulebilirlik, dijitallesme, yapay zeka destekli operasyonlar, deneyim ekonomisi.',
			'Benchmarking: Dunya capinda basarili otel zincirlerinden alinan ornekler, KPI karsilastirmalari.',
			'Risk ve firsatlar: Jeopolitik gelismeler, turizm akimlarindaki degisim, kuresel krizlere hazirlik.',
			'Marka vizyonu: Uluslararasi misafir beklentilerini karsilayan, kulturler arasi uyumlu kimlik tasarimi.',
		],
		local: [
			'Kulturel dokunus: Bolgenin gastronomisi, mimarisi, misafirperverlik gelenegi.',
			'Pazar gercekligi: Yerel rekabet, fiyatlandirma dinamikleri, sezonluk dalgalanmalar.',
			'Insan kaynagi: Calisanlarin egitimi, motivasyonu, yerel is gucunun otelin ruhuna katkisi.',
			'Toplumsal bag: Otelin bulundugu sehirle kurdugu iliski, sosyal sorumluluk projeleri, yerel halkin gozundeki deger.',
		]
	}

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	const counters = [
		{ count: 20, suffix: '+', labelKey: 'statsYears' },
		{ count: 50, suffix: '+', labelKey: 'statsProjects' },
		{ count: 8, suffix: '', labelKey: 'statsCountries' },
	]

	return (
		<>
			<section className="s-faq-redesign tf-spacing-1 bg-white" style={{ background: '#ffffff', position: 'relative', zIndex: 1 }}>
				<div className="tf-container">
					<div className="row mb-60">
						<div className="col-lg-12">
							<div className="content text-center">
								<p className="s-sub-title justify-center mb-20" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800' }}>
									<i className="icon-angles-right moveLeftToRight" style={{ color: '#C8232C' }} />
									{t('navFaqs')}
								</p>
								<h2 className="s-title" style={{ color: '#1B2F5E', fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: '1.1', fontWeight: '900', letterSpacing: '-1px' }}>
									{lang === 'tr'
										? <>Sahadan Gelen Bilgelik,<br /><span style={{ color: '#C8232C' }}>Ölçülebilir Sonuçlar</span></>
                    : lang === 'ar' ? <>حكمة من الميدان،<br /><span style={{ color: '#C8232C' }}>نتائج قابلة للقياس</span></>
                    : lang === 'ru' ? <>Мудрость с полей,<br /><span style={{ color: '#C8232C' }}>измеримые результаты</span></>
										: <>Field-Tested Wisdom,<br /><span style={{ color: '#C8232C' }}>Measurable Results</span></>
									}
								</h2>
							</div>
						</div>
					</div>

					<div className="row g-4">
						{/* Left: Why Us Grid */}
						<div className="col-lg-6">
							<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
								{WHY_ITEMS.map((item, i) => (
									<div key={i} className="why-item-card" style={{
										background: '#fff',
										border: '1px solid #eef2fa',
										borderRadius: '24px',
										padding: '32px 28px',
										transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
										boxShadow: '0 10px 30px rgba(27,47,94,0.04)',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden'
									}}>
										<div style={{
											width: '56px', height: '56px', borderRadius: '16px',
											background: 'linear-gradient(135deg, #1B2F5E 0%, #2A4685 100%)',
											display: 'flex', alignItems: 'center', justifyContent: 'center',
											marginBottom: '20px',
                      boxShadow: '0 8px 20px rgba(27,47,94,0.2)'
										}}>
											<i className={item.icon} style={{ fontSize: '24px', color: '#ffffff' }} />
										</div>
										<h4 style={{ color: '#1B2F5E', fontWeight: '800', fontSize: '18px', marginBottom: '12px', lineHeight: '1.3' }}>
											{t(item.key + 'Title')}
										</h4>
										{item.key === 'whyGlobal' && lang === 'tr' ? (
											<div style={{ color: '#606580', fontSize: '14px', lineHeight: '1.6', margin: 0, opacity: 0.95 }}>
												<p style={{ marginBottom: '10px', fontWeight: '700', color: '#1B2F5E' }}>
													Buyuk vizyonu yerel hikayelerle bulusturmak.
												</p>
												{showFullPerspective ? (
													<>
														<p style={{ marginBottom: '8px', fontWeight: '700', color: '#1B2F5E' }}>Kuresel Perspektif</p>
														<ul style={{ margin: '0 0 10px 18px', padding: 0 }}>
															{perspectiveContent.global.map((line, idx) => (
																<li key={`g-${idx}`} style={{ marginBottom: '6px' }}>{line}</li>
															))}
														</ul>
														<p style={{ marginBottom: '8px', fontWeight: '700', color: '#1B2F5E' }}>Yerel Perspektif</p>
														<ul style={{ margin: '0 0 0 18px', padding: 0 }}>
															{perspectiveContent.local.map((line, idx) => (
																<li key={`l-${idx}`} style={{ marginBottom: '6px' }}>{line}</li>
															))}
														</ul>
													</>
												) : (
													<p style={{ margin: 0 }}>
														Kuresel ve yerel karar perspektifini birlestiren ozet yaklasim.
													</p>
												)}
												<button
													type="button"
													onClick={() => setShowFullPerspective(prev => !prev)}
													style={{
														marginTop: '10px',
														border: 'none',
														background: '#1B2F5E',
														color: '#fff',
														padding: '8px 14px',
														borderRadius: '999px',
														fontSize: '12px',
														fontWeight: '700',
														cursor: 'pointer',
													}}
												>
													{showFullPerspective ? 'Daha Az Goster' : 'Devamini Oku'}
												</button>
											</div>
										) : (
											<p style={{ color: '#606580', fontSize: '15px', lineHeight: '1.6', margin: 0, opacity: 0.9 }}>
												{t(item.key + 'Desc')}
											</p>
										)}
									</div>
								))}
							</div>

							{/* Stats */}
							<div style={{ 
                display: 'flex', 
                gap: '24px', 
                flexWrap: 'wrap', 
                padding: '35px', 
                background: 'linear-gradient(135deg, #1B2F5E 0%, #0f1e3e 100%)', 
                borderRadius: '30px', 
                boxShadow: '0 20px 40px rgba(15,30,62,0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'rgba(200,35,44,0.1)', borderRadius: '50%', filter: 'blur(50px)' }} />
								{counters.map((c, i) => (
									<div key={i} style={{ flex: 1, minWidth: '120px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
										<div style={{ color: '#fff', fontSize: '40px', fontWeight: '900', marginBottom: '6px', letterSpacing: '-1px' }}>
											{c.count}<span style={{ color: '#C8232C' }}>{c.suffix}</span>
										</div>
										<p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', margin: 0 }}>
											{t(c.labelKey)}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Right: Accordion */}
						<div className="col-lg-6">
							<div style={{ background: '#f8f9fd', borderRadius: '32px', padding: '32px', border: '1px solid #eef2fa' }}>
								<div className="tf-accordion-redesign">
									{FAQS.map((faq) => (
										<div key={faq.key} style={{
											marginBottom: '16px',
											borderRadius: '20px',
											overflow: 'hidden',
											border: '1px solid',
											borderColor: isAccordion === faq.key ? '#C8232C' : 'transparent',
											background: isAccordion === faq.key ? '#fff' : '#fff',
											transition: 'all 0.3s ease',
                      boxShadow: isAccordion === faq.key ? '0 15px 35px rgba(200,35,44,0.08)' : '0 4px 15px rgba(27,47,94,0.02)'
										}}>
											<div
												onClick={() => handleAccordion(faq.key)}
												style={{
													padding: '24px 30px',
													cursor: 'pointer',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'space-between',
													gap: '20px'
												}}
											>
												<span style={{
													color: isAccordion === faq.key ? '#1B2F5E' : '#505878',
													fontWeight: '800',
													fontSize: '18px',
													transition: 'color 0.3s',
                          lineHeight: '1.4'
												}}>
													{t(faq.transKey + 'Q')}
												</span>
												<div style={{
													width: '32px', height: '32px', borderRadius: '10px',
													background: isAccordion === faq.key ? '#C8232C' : '#f0f4fb',
													color: isAccordion === faq.key ? '#fff' : '#1B2F5E',
													display: 'flex', alignItems: 'center', justifyContent: 'center',
													fontSize: '14px',
													transition: 'all 0.3s',
                          flexShrink: 0
												}}>
													<i className={isAccordion === faq.key ? 'icon-minus' : 'icon-plus'} />
												</div>
											</div>
											<div style={{
												maxHeight: isAccordion === faq.key ? '500px' : '0',
												overflow: 'hidden',
												transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
												background: '#fff'
											}}>
												<div style={{ padding: '0 30px 30px 30px', color: '#606580', fontSize: '16px', lineHeight: '1.8', opacity: 0.9 }}>
													{t(faq.transKey + 'A')}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
        <style jsx>{`
          .why-item-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(27,47,94,0.08) !important;
            border-color: #1B2F5E !important;
          }
        `}</style>
			</section>
		</>
	)
}

