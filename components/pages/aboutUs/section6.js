'use client'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section6() {
	const { lang } = useLanguage()

	const labels = {
		subtitle: lang === 'tr' ? 'iletişim' : 'contact us',
		title: lang === 'tr' ? <>Ücretsiz <span>Danışmanlık</span> Alın</> : <>Get a Free <span>Consultation</span></>,
		address: lang === 'tr' ? 'Adres' : 'Address',
		addressVal: 'Yeşilbahçe Mah. 1456 Sok. No: 26 İ. Özalp Apt. Kat: 4 Daire: 11 07160 Muratpaşa ANTALYA',
		contact: lang === 'tr' ? 'İletişim' : 'Contact',
		contactVal: <>nevzat@misiones.com.tr<br />+90 532 323 17 54</>,
		formTitle: lang === 'tr' ? 'Bize Ulaşın' : 'Send a Message',
		namePh: lang === 'tr' ? 'Ad Soyad' : 'Full Name',
		phonePh: lang === 'tr' ? 'Telefon' : 'Phone',
		emailPh: lang === 'tr' ? 'E-posta' : 'Email',
		subjectPh: lang === 'tr' ? 'Konu' : 'Subject',
		messagePh: lang === 'tr' ? 'Mesajınızı yazın...' : 'Write your message...',
		submit: lang === 'tr' ? 'Danışmanlık Talebi Gönder' : 'Send Consultation Request',
	}

	return (
		<>
			<section className="s-contact tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrap">
								<div className="content-left">
									<p className="s-sub-title">
										<i className="icon-angles-right moveLeftToRight" />
										{labels.subtitle}
									</p>
									<p className="s-title text-anime-wave">
										{labels.title}
									</p>
									<ul className="list">
										<li className="wow fadeInUp" data-wow-delay="0s">
											<p className="cap">{labels.address}</p>
											<p className="infor">{labels.addressVal}</p>
										</li>
										<li className="wow fadeInUp" data-wow-delay="0.1s">
											<p className="cap">{labels.contact}</p>
											<p className="infor">{labels.contactVal}</p>
										</li>
									</ul>
								</div>
								<div className="content-right">
									<p className="title mb-30 text-center font-main-2">
										{labels.formTitle}
									</p>
									<form action="#" className="form-contact style-3">
										<div className="cols mb-20">
											<fieldset>
												<input type="text" placeholder={labels.namePh} required />
											</fieldset>
											<fieldset>
												<input type="text" placeholder={labels.phonePh} required />
											</fieldset>
										</div>
										<div className="cols mb-20">
											<fieldset>
												<input type="email" placeholder={labels.emailPh} required />
											</fieldset>
											<fieldset>
												<input type="text" placeholder={labels.subjectPh} required />
											</fieldset>
										</div>
										<div className="cols mb-20">
											<fieldset>
												<textarea className="h-100px" placeholder={labels.messagePh} />
											</fieldset>
										</div>
										<button type="submit" className="tf-btn full text-anime-style-1">
											{labels.submit}
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
