'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section4() {
	const [isAccordion, setIsAccordion] = useState(1)
	const { t } = useLanguage()

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	const steps = [
		{
			key: 1,
			id: 'collapseOne',
			stepLabel: t('step1'),
			title: t('step1Title'),
			desc: t('step1Desc'),
			items: [t('step1Item1'), t('step1Item2')],
			img: '/images/section/working-s2-1.jpg',
		},
		{
			key: 2,
			id: 'collapseTwo',
			stepLabel: t('step2'),
			title: t('step2Title'),
			desc: t('step2Desc'),
			items: [t('step2Item1'), t('step2Item2')],
			img: '/images/section/process.jpg',
		},
		{
			key: 3,
			id: 'collapseThree',
			stepLabel: t('step3'),
			title: t('step3Title'),
			desc: t('step3Desc'),
			items: [t('step3Item1'), t('step3Item2')],
			img: '/images/section/process-2.jpg',
		},
		{
			key: 4,
			id: 'collapseFour',
			stepLabel: t('step4'),
			title: t('step4Title'),
			desc: t('step4Desc'),
			items: [t('step4Item1'), t('step4Item2')],
			img: '/images/section/working-s2-2.jpg',
			last: true,
		},
	]

	return (
		<>
			<section className="s-working tf-spacing-1 misiones-process-section">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<p className="s-sub-title mb-18 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									{t('processSubtitle')}
								</p>
								<p className="s-title mb-70 text-center text-anime-wave">
									{t('processTitle')} <br />
									<span>{t('processTitleSpan')}</span>
								</p>
								<div className="tf-accordion-type-3 accordion" id="accordionExample">
									{steps.map((step) => (
										<div
											key={step.key}
											className={`accordion-item${step.last ? ' last' : ''}${isAccordion === step.key ? ' active' : ''}`}
											onClick={() => handleAccordion(step.key)}
										>
											<h2 className="accordion-header">
												<button
													className={`accordion-button ${isAccordion === step.key ? '' : 'collapsed'}`}
													type="button"
												>
													<span className="step">{step.stepLabel}</span>
													<span>{step.title}</span>
												</button>
											</h2>
											<div className={`accordion-collapse collapse${isAccordion === step.key ? ' show' : ''}`}>
												<div className="accordion-body">
													<p className="title">{step.title}</p>
													<p className="text mb-25 tf-fade-item fade-1">{step.desc}</p>
													<ul className="benefit-list">
														{step.items.map((item, idx) => (
															<li key={idx} className={`tf-fade-item fade-${idx + 2}`}>
																<div className="icon">
																	<i className="flaticon-check-mark" />
																</div>
																<p>{item}</p>
															</li>
														))}
													</ul>
												</div>
											</div>
											<div className="image tf-hover">
												<div className="hover-1">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src={step.img}
														alt={step.title}
														className="lazyload"
													/>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
