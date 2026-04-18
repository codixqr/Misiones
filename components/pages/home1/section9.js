'use client'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section9() {
	const { t, lang } = useLanguage()
	return (
		<>
			<section className="s-contact">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrap">
								<div className="content-left">
									<p className="s-sub-title mb-17">
										<i className="icon-angles-right moveLeftToRight" />
										{lang === 'tr' ? 'danışmanlık alın' : 'need consultations'}
									</p>
									<p className="s-title text-anime-wave-right" style={{ fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: '1.15' }}>
										{lang === 'tr'
											? <>Ücretsiz <span>Danışmanlık</span> Almak İster misiniz?</>
											: <>Ready to Get Free <span>Consultation?</span></>
										}
									</p>
									<ul className="list">
										<li className="wow fadeInUp" data-wow-delay="0s">
											<p className="cap" style={{ fontSize: 'clamp(24px, 1.9vw, 30px)', marginBottom: '12px' }}>{lang === 'tr' ? 'Adresimiz' : 'Our Address'}</p>
											<p className="infor" style={{ fontSize: 'clamp(20px, 1.35vw, 25px)', lineHeight: '1.75' }}>
												Yeşilbahçe Mah. 1456 Sok. No: 26<br />
												İ. Özalp Apt. Kat: 4 Daire: 11<br />
												07160 Muratpaşa, ANTALYA
											</p>
										</li>
										<li className="wow fadeInUp" data-wow-delay="0.2s">
											<p className="cap" style={{ fontSize: 'clamp(24px, 1.9vw, 30px)', marginBottom: '12px' }}>{lang === 'tr' ? 'İletişim' : 'Contact Us'}</p>
											<p className="infor" style={{ fontSize: 'clamp(20px, 1.35vw, 25px)', lineHeight: '1.75' }}>
												info@misiones.com.tr<br />
												+90 532 323 17 54
											</p>
										</li>
									</ul>
								</div>
								<div className="content-right">
									<p className="title mb-30 text-center font-main-2">
										{lang === 'tr' ? 'Ücretsiz Danışmanlık Alın' : 'Get Free Consultation'}
									</p>
									<form action="#" className="form-contact style-3">
										<div className="cols mb-20">
											<fieldset>
												<input type="text" placeholder={lang === 'tr' ? 'Ad Soyad' : 'Full Name'} required />
											</fieldset>
											<fieldset>
												<input type="text" placeholder={lang === 'tr' ? 'Telefon' : 'Phone'} required />
											</fieldset>
										</div>
										<div className="cols mb-20">
											<fieldset>
												<input type="email" placeholder={lang === 'tr' ? 'E-posta' : 'Email'} required />
											</fieldset>
											<fieldset>
												<input type="text" placeholder={lang === 'tr' ? 'Konu' : 'Subject'} required />
											</fieldset>
										</div>
										<div className="cols mb-20">
											<fieldset>
												<textarea className="h-100px" placeholder={lang === 'tr' ? 'Mesajınızı yazın' : 'Write message'} />
											</fieldset>
										</div>
										<button type="submit" className="tf-btn full">
											{lang === 'tr' ? 'Danışmanlık Talebi Gönder' : 'Get Consultation'}
											<i className="icon-chevron-right" />
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
