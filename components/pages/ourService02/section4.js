'use client'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section4() {
	const { t } = useLanguage()
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	const faqs = [
		{ id: 1, q: t('s2Faq1Q'), a: t('s2Faq1A') },
		{ id: 2, q: t('s2Faq2Q'), a: t('s2Faq2A') },
		{ id: 3, q: t('s2Faq3Q'), a: t('s2Faq3A') },
		{ id: 4, q: t('s2Faq4Q'), a: t('s2Faq4A') },
	]

	return (
		<>
			<section className="s-faq-2 tf-spacing-1" style={{ background: '#fdfdfd' }}>
				<div className="tf-container">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<div className="content">
								<p className="s-sub-title" style={{ color: '#C8232C' }}>
									<i className="icon-angles-right moveLeftToRight" />
									{t('s2FaqSubtitle')}
								</p>
								<p className="s-title mb-40 text-anime-wave" style={{ color: '#1B2F5E' }}>
									{t('s2FaqTitle')}
									<span style={{ color: '#C8232C', marginLeft: '10px' }}>
										{t('s2FaqTitleSpan')}
									</span>
								</p>
								<div className="tf-accordion style-3 accordion" id="accordionExample">
									{faqs.map((faq) => (
										<div className="accordion-item" key={faq.id} style={{ border: 'none', marginBottom: '15px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.03)' }}>
											<h2 className="accordion-header" onClick={() => handleAccordion(faq.id)}>
												<button 
													className={isAccordion === faq.id ? "accordion-button" : "accordion-button collapsed"} 
													type="button" 
													style={{ 
														background: isAccordion === faq.id ? '#1B2F5E' : '#fff',
														color: isAccordion === faq.id ? '#fff' : '#1B2F5E',
														fontWeight: '700',
														padding: '20px 25px'
													}}
												>
													{faq.q}
												</button>
											</h2>
											<div className={isAccordion === faq.id ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
												<div className="accordion-body" style={{ background: '#fff', color: '#505878', padding: '20px 25px', lineHeight: '1.8' }}>
													{faq.a}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="col-lg-6 offset-lg-1">
							<div className="image-wrap" style={{ position: 'relative' }}>
								<div className="image" style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
									<Image
										width="600"
										height="700"
										src="/images/section/faq-2.jpg" 
										alt="Misiones FAQ" 
										style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div className="item-customer style-3 rellax default" data-rellax-speed="0.3" style={{ background: '#fff', borderRadius: '20px', padding: '30px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}>
									<h5 className="mb-15" style={{ color: '#1B2F5E', fontWeight: '800' }}>{t('s2SatisfiedCustomer')}</h5>
									<ul className="list-author mb-40">
										<li><Image width="50" height="50" src="/images/avatar/testimonial-author-1.jpg" alt="" style={{ borderRadius: '50%' }} /></li>
										<li><Image width="50" height="50" src="/images/avatar/customer-1.jpg" alt="" style={{ borderRadius: '50%' }} /></li>
										<li><Image width="50" height="50" src="/images/avatar/customer-3.jpg" alt="" style={{ borderRadius: '50%' }} /></li>
										<li><Image width="50" height="50" src="/images/avatar/customer-4.jpg" alt="" style={{ borderRadius: '50%' }} /></li>
									</ul>
									<span className="line mb-30" style={{ background: '#eee' }} />
									<div className="wg-counter style-6">
										<div className="odometer style-6" style={{ color: '#C8232C' }}><CounterUp count={99} /></div>
										<span className="sub-odo" style={{ color: '#C8232C' }}>%</span>
									</div>
									<p style={{ color: '#505878', fontSize: '1rem', fontWeight: '600' }}>
										{t('s2SatisfiedDesc')}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
