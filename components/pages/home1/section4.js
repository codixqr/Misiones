'use client'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section4() {
	const { t } = useLanguage()

	const steps = [
		{
			key: 1,
			stepLabel: t('step1'),
			title: t('step1Title'),
			desc: t('step1Desc'),
			items: [t('step1Item1'), t('step1Item2')],
			icon: 'icon-search',
			color: '#1B2F5E'
		},
		{
			key: 2,
			stepLabel: t('step2'),
			title: t('step2Title'),
			desc: t('step2Desc'),
			items: [t('step2Item1'), t('step2Item2')],
			icon: 'icon-bolt',
			color: '#C8232C'
		},
		{
			key: 3,
			stepLabel: t('step3'),
			title: t('step3Title'),
			desc: t('step3Desc'),
			items: [t('step3Item1'), t('step3Item2')],
			icon: 'icon-check-2',
			color: '#1B2F5E'
		},
		{
			key: 4,
			stepLabel: t('step4'),
			title: t('step4Title'),
			desc: t('step4Desc'),
			items: [t('step4Item1'), t('step4Item2')],
			icon: 'icon-star',
			color: '#C8232C'
		},
	]

	return (
		<section className="s-working misiones-process-clean" style={{ padding: '100px 0', background: '#fdfdfd', borderTop: '1px solid #eee' }}>
			<div className="tf-container">
				<div className="row justify-content-center">
					<div className="col-lg-8 text-center mb-60">
						<p className="s-sub-title mb-15 justify-center" style={{ color: '#C8232C', letterSpacing: '2px', fontWeight: '700' }}>
							<i className="icon-angles-right moveLeftToRight" />
							{t('processSubtitle')}
						</p>
						<h2 className="title" style={{ color: '#1B2F5E', fontSize: '2.5rem', fontWeight: '800' }}>
							{t('processTitle')} <span style={{ color: '#C8232C' }}>{t('processTitleSpan')}</span>
						</h2>
					</div>
				</div>

				<div className="row g-4">
					{steps.map((step, index) => (
						<div className="col-lg-3 col-md-6" key={step.key}>
							<div className="process-card-clean" style={{ 
								background: '#fff', 
								padding: '40px 30px', 
								borderRadius: '20px', 
								height: '100%', 
								boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
								border: '1px solid #f0f0f0',
								transition: 'all 0.3s ease',
								position: 'relative',
								textAlign: 'center'
							}}>
								<div className="step-badge" style={{ 
									position: 'absolute', 
									top: '-15px', 
									left: '50%', 
									transform: 'translateX(-50%)',
									padding: '5px 20px',
									background: step.color,
									color: '#fff',
									borderRadius: '20px',
									fontSize: '12px',
									fontWeight: '700',
									letterSpacing: '1px'
								}}>
									{step.stepLabel}
								</div>
								
								<div className="icon-wrap mb-25" style={{ 
									width: '70px', 
									height: '70px', 
									background: `${step.color}10`,
									color: step.color,
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									margin: '0 auto',
									fontSize: '28px'
								}}>
									<i className={step.icon} />
								</div>

								<h3 className="mb-20" style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1B2F5E' }}>{step.title}</h3>
								
								<p style={{ color: '#505878', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '20px' }}>
									{step.desc}
								</p>

								<ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
									{step.items.map((item, idx) => (
										<li key={idx} style={{ 
											fontSize: '1.1rem', 
											color: '#333', 
											marginBottom: '8px',
											display: 'flex',
											alignItems: 'center',
											gap: '10px'
										}}>
											<i className="icon-check" style={{ color: step.color }} />
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>

			<style jsx>{`
				.process-card-clean:hover {
					transform: translateY(-10px);
					box-shadow: 0 20px 50px rgba(0,0,0,0.08);
					border-color: transparent;
				}
				.process-card-clean:hover .icon-wrap {
					background: #C8232C !important;
					color: #fff !important;
				}
			`}</style>
		</section>
	)
}
