'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<section className="s-page-faq">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="content">
								<p className="s-sub-title">
									<i className="icon-angles-right moveLeftToRight" />
									sss
								</p>
								<p className="s-title mb-50 text-anime-wave">
									Sık Sorulan
									<span>
										Sorular
									</span>
								</p>
								<span className="line" />
								<p className="title text-anime-style-2">
									Hizmetlerimiz Hakkında
								</p>
								<div className="tf-accordion style-4 style-2 accordion mb-70" id="accordionExample">
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
											<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												Hangi tür otel projeleriyle çalışıyorsunuz?
											</button>
										</h2>
										<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Şehir oteli, resort, butik otel, dönüşüm projeleri ve yeni yatırım
												girişimleri dahil olmak üzere otelcilik değer zincirinin tamamında
												yatırımcılar ve işletmecilerle çalışıyoruz.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
											<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												Otel yatırım ve fizibilite danışmanlığında neler sunuyorsunuz?
											</button>
										</h2>
										<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Pazar analizi, talep projeksiyonu, rekabet değerlendirmesi, finansal
												modelleme, geri dönüş süresi analizi ve yatırım senaryolarını birlikte
												ele alarak karar sürecini veriye dayalı yönetiyoruz.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
											<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												Marka entegrasyonu ve franchising desteğiniz nasıl ilerliyor?
											</button>
										</h2>
										<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Otele uygun marka konumlandırmasını belirliyor, ulusal/uluslararası
												marka alternatiflerini değerlendiriyor ve sözleşme sürecinde teknik
												danışmanlık vererek doğru entegrasyonu sağlıyoruz.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
											<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												Gelir yönetimi danışmanlığı hangi alanları kapsıyor?
											</button>
										</h2>
										<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Fiyatlandırma stratejisi, kanal karması, segment bazlı gelir analizi,
												rezervasyon penceresi yönetimi, direkt satış optimizasyonu ve ekip
												eğitimleri ile sürdürülebilir karlılık hedeflenir.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(5)}>
											<button className={`accordion-button ${isAccordion === 5 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
												HIP (Hotel Improvement Plan) nedir, nasıl uygulanır?
											</button>
										</h2>
										<div id="collapseFive" className={`accordion-collapse collapse ${isAccordion === 5 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												HIP, operasyonel ve finansal performansı iyileştirmek için hazırlanan
												kademeli bir gelişim planıdır. Mevcut durum analizi sonrası KPI’lar,
												aksiyonlar ve takip planı netleştirilerek sahada uygulanır.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(6)}>
											<button className={`accordion-button ${isAccordion === 6 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
												Danışmanlık süreciniz kaç aşamadan oluşuyor?
											</button>
										</h2>
										<div id="collapseOne1" className={`accordion-collapse collapse ${isAccordion === 6 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Süreç 4 temel aşamada ilerler: keşif ve analiz, strateji geliştirme,
												uygulama ve performans izleme. Her aşamada raporlama ve karar desteği
												verilerek ilerlenir.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(7)}>
											<button className={`accordion-button ${isAccordion === 7 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
												Danışmanlık süresi ne kadar?
											</button>
										</h2>
										<div id="collapseTwo1" className={`accordion-collapse collapse ${isAccordion === 7 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Projenin kapsamına göre değişmekle birlikte kısa danışmanlık paketleri
												4-8 hafta, kapsamlı dönüşüm projeleri ise 3-6 ay aralığında planlanır.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(8)}>
											<button className={`accordion-button ${isAccordion === 8 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
												Danışmanlık ücretlendirmesi nasıl yapılıyor?
											</button>
										</h2>
										<div id="collapseThree1" className={`accordion-collapse collapse ${isAccordion === 8 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Ücretlendirme; proje kapsamı, hedeflenen çıktı, süre ve saha
												ihtiyacına göre teklif bazlı yapılır. Dilerseniz aylık danışmanlık
												aboneliği veya proje bazlı model seçebilirsiniz.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tf-sidebar">
								<div className="sb-item sb-contact mb-30">
									<div className="sb-content">
										<p className="s-title style-2 mb-30 text-anime-wave">
											Sorunuz mu var? <br />
											<span>
												Hemen yazın!
											</span>
										</p>
										<form action="#" className="form-contact bg-transparent style-3">
											<div className="cols mb-10">
												<fieldset>
													<input type="text" placeholder="Ad Soyad" required />
												</fieldset>
											</div>
											<div className="cols mb-10">
												<fieldset>
													<input type="email" placeholder="E-posta" required />
												</fieldset>
											</div>
											<div className="cols mb-10">
												<fieldset>
													<input type="text" placeholder="Konu" required />
												</fieldset>
											</div>
											<div className="cols mb-10">
												<fieldset>
													<textarea className="h-100px" placeholder="Mesajınızı yazın" />
												</fieldset>
											</div>
											<button type="submit" className="tf-btn full text-anime-style-1">
												Danışmanlık Talebi Gönder
												<i className="icon-chevron-right" />
											</button>
										</form>
									</div>
								</div>
								<div className="sb-item sb-service">
									<div className="tf-overlay" />
									<div className="image">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/otel-yonetim-danismanligi.jpg" alt="Otel danışmanlığı" />
									</div>
									<div className="content">
										<p className="font-main-2 text-anime-wave">
											Profesyonel Otelcilik
											<span>
												Danışmanlığı
											</span>
										</p>
										<Link href="/our-service" className="tf-btn text-anime-style-1">
											Hizmetleri Keşfet
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
