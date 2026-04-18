'use client'
import { useState } from 'react'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section1() {
	const [isAccordion, setIsAccordion] = useState(1)
	const { lang, t } = useLanguage()

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<>
			<section className="s-service-detail tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="content">
								<div className="entry-image tf-hover mb-40">
									<div className="hover-1">
										<Image
											width="1200"
											height="600"
											src="/images/section/service-detail.jpg" 
											alt="Misiones Hizmet Detayı" 
											className="lazyload" 
											style={{ width: "100%", height: "auto", borderRadius: '20px' }}
										/>
									</div>
								</div>
								<p className="title s1 mb-20 text-anime-wave" style={{ color: '#1B2F5E', fontWeight: '800', fontSize: '2.5rem' }}>
									{lang === 'tr' ? 'Otel Yatırım ve Yönetiminde Stratejik Bilgelik' : 'Strategic Wisdom in Hotel Investment & Management'}
								</p>
								<p className="text s1 mb-25" style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>
									{lang === 'tr' 
										? 'Misiones olarak, markanızı yükseltmek, misafir bağlılığını artırmak ve ölçülebilir iş büyümesi sağlamak için tasarlanmış kapsamlı danışmanlık hizmetleri sunuyoruz.' 
										: 'At Misiones, we offer comprehensive consulting services designed to elevate your brand, enhance guest loyalty, and drive measurable business growth.'}
								</p>
								<p className="text s2 mb-40">
									{lang === 'tr'
										? 'Hedef pazarınızı, endüstri trendlerini ve misafir davranışlarını anlıyoruz. Bu, büyüme fırsatlarını, piyasadaki boşlukları ve rekabetçi konumlandırmayı belirleyerek daha etkili stratejiler geliştirmemize yardımcı olur.'
										: 'We understand your target market, industry trends, and guest behavior. This helps us identify growth opportunities and competitive positioning to craft more effective strategies.'}
								</p>
								
								<h3 className="title-2 s1 text-anime-wave" style={{ color: '#C8232C' }}>
									{lang === 'tr' ? 'Temel Uzmanlık Alanlarımız:' : 'Our Core Areas of Expertise:'}
								</h3>
								<ul className="list-1 mb-40">
									<li>
										<div className="number" style={{ background: '#1B2F5E' }}><p>1</p></div>
										<div>
											<h6 className="fw-7">
												{lang === 'tr' ? 'Pazar Araştırması ve Rakip Analizi' : 'Market Research & Competitor Analysis'}
											</h6>
											<p>
												{lang === 'tr' 
													? 'Sektörel ortamı ve hedef kitlenizi derinlemesine analizlerle anlıyoruz. Rakiplerinizi inceliyoruz.' 
													: 'We understand the industry environment and your target audience through in-depth analysis.'}
											</p>
										</div>
									</li>
									<li>
										<div className="number" style={{ background: '#1B2F5E' }}><p>2</p></div>
										<div>
											<h6 className="fw-7">
												{lang === 'tr' ? 'Marka Stratejisi Geliştirme' : 'Brand Strategy Development'}
											</h6>
											<p>
												{lang === 'tr'
													? 'Global zincirlerle entegrasyon veya özgün marka kimliği oluşturma süreçlerinde rehberlik ediyoruz.'
													: 'We guide integration with global chains or creation of unique brand identities.'}
											</p>
										</div>
									</li>
									<li>
										<div className="number" style={{ background: '#1B2F5E' }}><p>3</p></div>
										<div>
											<h6 className="fw-7">
												{lang === 'tr' ? 'Gelir Yönetimi & Dijital Satış' : 'Revenue Management & Digital Sales'}
											</h6>
											<p>
												{lang === 'tr'
													? 'Fiyatlandırma stratejileri, kanal yönetimi ve doğrudan satış kanallarınızı optimize ediyoruz.'
													: 'We optimize pricing strategies, channel management, and direct sales channels.'}
											</p>
										</div>
									</li>
								</ul>

								<div className="entry-image-2 mb-40" style={{ position: 'relative' }}>
									<div className="image">
										<Image
											width="800"
											height="500"
											src="/images/section/service-detail-2.jpg" 
											alt="Misiones Ekip" 
											className="lazyload" 
											style={{ width: "100%", height: "auto", borderRadius: '20px' }}
										/>
									</div>
									<div className="experience" style={{ background: '#C8232C' }}>
										<div className="wg-counter style-9">
											<div className="odometer style-9"><CounterUp count={20} /></div>
											<span className="sub-odo">+</span>
										</div>
										<h4 className="sub-exp">
											{lang === 'tr' ? 'Yıllık Sektörel' : 'Years of Sector'} <br />
											{lang === 'tr' ? 'Tecrübe' : 'Experience'}
										</h4>
									</div>
								</div>

								<h3 className="title-2 s2 mb-15 text-anime-wave" style={{ color: '#1B2F5E' }}>
									{lang === 'tr' ? 'Çalışma Sürecimiz' : 'Our Working Process'}
								</h3>
								<p className="text s4 mb-50">
									{lang === 'tr'
										? 'Veriye dayalı, şeffaf ve sonuç odaklı bir yaklaşımla projelerinizi hayata geçiriyoruz.'
										: 'We implement your projects with a data-driven, transparent, and results-oriented approach.'}
								</p>
								<ul className="list-2 mb-70">
									<li>
										<p className="step-number" style={{ color: '#C8232C' }}>01</p>
										<h6 className="caption">{lang === 'tr' ? 'Keşif' : 'Discovery'}</h6>
										<div className="icon"><i className="icon-check-2" style={{ color: '#C8232C' }} /></div>
										<p className="text">{lang === 'tr' ? 'Mevcut durumu analiz ediyoruz.' : 'We analyze the current situation.'}</p>
									</li>
									<li>
										<p className="step-number" style={{ color: '#C8232C' }}>02</p>
										<h6 className="caption">{lang === 'tr' ? 'Strateji' : 'Strategy'}</h6>
										<div className="icon"><i className="icon-check-2" style={{ color: '#C8232C' }} /></div>
										<p className="text">{lang === 'tr' ? 'Size özel kâr odaklı planlar.' : 'Custom profit-oriented plans.'}</p>
									</li>
									<li>
										<p className="step-number" style={{ color: '#C8232C' }}>03</p>
										<h6 className="caption">{lang === 'tr' ? 'Uygulama' : 'Execution'}</h6>
										<div className="icon"><i className="icon-check-2" style={{ color: '#C8232C' }} /></div>
										<p className="text">{lang === 'tr' ? 'Sürekli takip ve optimizasyon.' : 'Continuous monitoring and optimization.'}</p>
									</li>
								</ul>

								<h3 className="title-2 s3 mb-15 text-anime-wave">
									{lang === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
								</h3>
								<div className="tf-accordion style-4 style-2 accordion" id="accordionExample">
									{[1, 2, 3, 4].map((i) => (
										<div className="accordion-item" key={i}>
											<h2 className="accordion-header" onClick={() => handleAccordion(i)}>
												<button className={`accordion-button ${isAccordion === i ? '' : 'collapsed'}`} type="button">
													{t(`s2Faq${i}Q`)}
												</button>
											</h2>
											<div className={`accordion-collapse collapse ${isAccordion === i ? 'show' : ''}`}>
												<div className="accordion-body">
													{t(`s2Faq${i}A`)}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tf-sidebar">
								<div className="sb-item mb-20">
									<div className="sb-title">
										<i className="icon-repair fs-20 color-main-black" />
										<h5 className="title">{lang === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}</h5>
									</div>
									<div className="sb-content sb-category">
										<ul className="category-list">
											<li style={{ borderLeft: '4px solid #C8232C', paddingLeft: '15px' }}>
												<Link href="/our-service" style={{ color: '#1B2F5E', fontWeight: '800' }}>
													{lang === 'tr' ? 'Otel Yatırım Danışmanlığı' : 'Hotel Investment Consulting'}
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/our-service">
													{lang === 'tr' ? 'Marka Entegrasyonu' : 'Brand Integration'}
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/our-service">
													{lang === 'tr' ? 'Gelir Yönetimi' : 'Revenue Management'}
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/our-service">
													{lang === 'tr' ? 'Hotel Improvement Plan' : 'Hotel Improvement Plan'}
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/our-service">
													{lang === 'tr' ? 'Hotel Broker' : 'Hotel Broker'}
													<i className="icon-chevron-right" />
												</Link>
											</li>
										</ul>
									</div>
								</div>
								
								<div className="sb-item sb-contact" style={{ background: '#1B2F5E' }}>
									<div className="sb-content">
										<p className="s-title style-2 mb-30 text-white">
											{lang === 'tr' ? 'Ücretsiz Danışmanlık' : 'Free Consultation'} <br />
											<span style={{ color: '#C8232C' }}>{lang === 'tr' ? 'Almaya Hazır mısınız?' : 'Ready to Start?'}</span>
										</p>
										<form className="form-contact bg-transparent style-3">
											<div className="cols mb-10">
												<fieldset><input type="text" placeholder={lang === 'tr' ? 'Ad Soyad' : 'Full Name'} required style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }} /></fieldset>
											</div>
											<div className="cols mb-10">
												<fieldset><input type="email" placeholder="Email" required style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }} /></fieldset>
											</div>
											<div className="cols mb-10">
												<fieldset><textarea className="h-100px" placeholder={lang === 'tr' ? 'Mesajınız' : 'Message'} style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }} /></fieldset>
											</div>
											<button type="submit" className="tf-btn full" style={{ background: '#C8232C', border: 'none' }}>
												{lang === 'tr' ? 'Gönder' : 'Send'}
												<i className="icon-chevron-right" />
											</button>
										</form>
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
