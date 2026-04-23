'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section1() {
	const { t } = useLanguage()
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	const faqs = [
		{ q: t('faqPageQ1'), a: t('faqPageA1') },
		{ q: t('faqPageQ2'), a: t('faqPageA2') },
		{ q: t('faqPageQ3'), a: t('faqPageA3') },
		{ q: t('faqPageQ4'), a: t('faqPageA4') },
		{ q: t('faqPageQ5'), a: t('faqPageA5') },
		{ q: t('faqPageQ6'), a: t('faqPageA6') },
		{ q: t('faqPageQ7'), a: t('faqPageA7') },
		{ q: t('faqPageQ8'), a: t('faqPageA8') },
	]

	return (
		<>
			<section className="s-page-faq">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="content">
								<p className="s-sub-title">
 									<i className="icon-angles-right moveLeftToRight" />
 									{t('navFaqs')}
 								</p>
 								<p className="s-title mb-50 text-anime-wave">
 									{t('faqPageTitle').split(' ').slice(0, -1).join(' ')}
 									<span>
 										 {t('faqPageTitle').split(' ').slice(-1)}
 									</span>
 								</p>
 								<span className="line" />
 								<p className="title text-anime-style-2">
 									{t('faqPageSub')}
 								</p>
 								<div className="tf-accordion style-4 style-2 accordion mb-70" id="accordionExample">
									{faqs.map((faq, index) => (
										<div className="accordion-item" key={index}>
											<h2 className="accordion-header" onClick={() => handleAccordion(index + 1)}>
												<button className={`accordion-button ${isAccordion === index + 1 ? 'collapsed' : ''}`} type="button">
													{faq.q}
												</button>
											</h2>
											<div className={`accordion-collapse collapse ${isAccordion === index + 1 ? 'show' : ''}`}>
												<div className="accordion-body">
													{faq.a}
												</div>
											</div>
										</div>
									))}
 								</div>
 							</div>
 						</div>
 						<div className="col-lg-4">
 							<div className="tf-sidebar">
 								<div className="sb-item sb-contact mb-30">
 									<div className="sb-content">
 										<p className="s-title style-2 mb-30 text-anime-wave">
 											{t('faqPageFormTitle')} <br />
 											<span>
 												{t('faqPageFormSub')}
 											</span>
 										</p>
 										<form action="#" className="form-contact bg-transparent style-3">
 											<div className="cols mb-10">
 												<fieldset>
 													<input type="text" placeholder={t('formName').replace(' *', '')} required />
 												</fieldset>
 											</div>
 											<div className="cols mb-10">
 												<fieldset>
 													<input type="email" placeholder={t('formEmail').replace(' *', '')} required />
 												</fieldset>
 											</div>
 											<div className="cols mb-10">
 												<fieldset>
 													<input type="text" placeholder={t('formSubject')} required />
 												</fieldset>
 											</div>
 											<div className="cols mb-10">
 												<fieldset>
 													<textarea className="h-100px" placeholder={t('formMsg')} />
 												</fieldset>
 											</div>
 											<button type="submit" className="tf-btn full text-anime-style-1">
 												{t('faqPageFormBtn')}
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
 											{t('faqPageSidebarImgText').split(' ').slice(0, -1).join(' ')}
 											<span>
 												 {t('faqPageSidebarImgText').split(' ').slice(-1)}
 											</span>
 										</p>
 										<Link href="/our-service" className="tf-btn text-anime-style-1">
 											{t('faqPageSidebarBtn')}
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
