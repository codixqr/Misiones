'use client'
import { useLanguage } from '@/utils/LanguageContext'
import { useState } from 'react'

export default function Section2() {
	const { lang } = useLanguage()
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted(true)
		setTimeout(() => setSubmitted(false), 4000)
	}

	return (
		<>
			<section className="s-map">
				<div className="box-map">
					{/* Antalya Muratpaşa - Yeşilbahçe Mah. */}
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.8234!2d30.7065!3d36.8917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39f6c0b5f5555%3A0x1234567890abcdef!2zWWXFn2lsYmHEn8Onw6UgbWguIE11cmF0cGHFn2EsIEFudGFseWE!5e0!3m2!1str!2str!4v1713200000000!5m2!1str!2str"
						height={750}
						style={{ border: 0, width: '100%' }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="MISIONES Antalya Ofis"
					/>
				</div>
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-7 offset-lg-5">
								<div className="content">
									<div className="comment-wrap style-2">
										<h3 className="text-anime-wave">
											{lang === 'tr' ? 'Danışmanlık Talebi Gönderin' : 'Send a Consultation Request'}
										</h3>
										<p className="note mb-40">
											{lang === 'tr'
												? 'Projenizi, sorunuzu veya iş birliği teklifinizi bize iletin. En kısa sürede yanıt veririz.'
												: 'Share your project, question or collaboration offer. We\'ll respond as soon as possible.'
											}
										</p>

										{submitted ? (
											<div style={{
												background: 'linear-gradient(135deg, #1B2F5E, #2a4a8e)',
												borderRadius: '12px',
												padding: '32px',
												textAlign: 'center',
												color: '#fff',
											}}>
												<i className="icon-check-circle" style={{ fontSize: '48px', color: '#4caf50', marginBottom: '16px', display: 'block' }} />
												<p style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
													{lang === 'tr' ? 'Mesajınız Alındı!' : 'Message Received!'}
												</p>
												<p style={{ opacity: 0.85, fontSize: '15px' }}>
													{lang === 'tr'
														? 'En kısa sürede size geri döneceğiz.'
														: 'We will get back to you shortly.'
													}
												</p>
											</div>
										) : (
											<form onSubmit={handleSubmit} className="form-comment style-3">
												<div className="cols mb-20">
													<fieldset>
														<input type="text" placeholder={lang === 'tr' ? 'Ad Soyad *' : 'Full Name *'} required />
													</fieldset>
													<fieldset>
														<input type="tel" placeholder={lang === 'tr' ? 'Telefon *' : 'Phone *'} required />
													</fieldset>
												</div>
												<div className="cols mb-20">
													<fieldset>
														<input type="email" placeholder={lang === 'tr' ? 'E-posta *' : 'Email *'} required />
													</fieldset>
													<fieldset>
														<input type="text" placeholder={lang === 'tr' ? 'Konu' : 'Subject'} />
													</fieldset>
												</div>
												<div className="cols mb-20">
													<fieldset>
														<textarea
															rows={5}
															placeholder={lang === 'tr'
																? 'Mesajınızı buraya yazın...'
																: 'Write your message here...'
															}
														/>
													</fieldset>
												</div>
												<div className="bot">
													<button type="submit" className="tf-btn text-anime-style-1">
														{lang === 'tr' ? 'Mesajı Gönder' : 'Send Message'}
														<i className="icon-chevron-right" />
													</button>
													<p style={{ marginTop: '12px', fontSize: '13px', color: '#888' }}>
														{lang === 'tr'
															? 'veya doğrudan yazın: '
															: 'or write directly: '
														}
														<a href="mailto:info@misiones.com.tr" style={{ color: '#C8232C', fontWeight: '600' }}>
															info@misiones.com.tr
														</a>
													</p>
												</div>
											</form>
										)}
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
