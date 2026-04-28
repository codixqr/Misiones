
'use client'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section1() {
	const { t, lang } = useLanguage()

	const valueCards = [
		{
			icon: 'flaticon-target',
			title: lang === 'en' ? 'Strategic Clarity' : lang === 'ar' ? 'وضوح استراتيجي' : lang === 'ru' ? 'Стратегическая ясность' : 'Stratejik Netlik',
			desc: lang === 'en' ? 'Every recommendation is tied to measurable business impact.' : lang === 'ar' ? 'كل توصية مرتبطة بتأثير تجاري قابل للقياس.' : lang === 'ru' ? 'Каждая рекомендация связана с измеримым бизнес-эффектом.' : 'Her öneri ölçülebilir iş sonucuna bağlanır.',
		},
		{
			icon: 'flaticon-data-management',
			title: lang === 'en' ? 'Data + Field Experience' : lang === 'ar' ? 'البيانات + الخبرة الميدانية' : lang === 'ru' ? 'Данные + полевой опыт' : 'Veri + Saha Deneyimi',
			desc: lang === 'en' ? 'We combine KPI analysis with real operational know-how.' : lang === 'ar' ? 'نجمع بين تحليل مؤشرات الأداء والخبرة التشغيلية.' : lang === 'ru' ? 'Мы объединяем KPI-анализ с реальным операционным опытом.' : 'KPI analizi ile sahadaki operasyon bilgisini birlikte kullanırız.',
		},
		{
			icon: 'flaticon-rocket',
			title: lang === 'en' ? 'Sustainable Growth' : lang === 'ar' ? 'نمو مستدام' : lang === 'ru' ? 'Устойчивый рост' : 'Sürdürülebilir Büyüme',
			desc: lang === 'en' ? 'We design systems that keep performance strong over time.' : lang === 'ar' ? 'نصمم أنظمة تحافظ على الأداء القوي على المدى الطويل.' : lang === 'ru' ? 'Мы строим системы, поддерживающие высокий результат в долгую.' : 'Performansı uzun vadede güçlü tutacak sistemler kurarız.',
		},
	]

	return (
		<>
			<section className="s-why-choose-4 tf-spacing-3" style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
				{/* Background decoration */}
				<div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(27,47,94,0.03) 0%, rgba(27,47,94,0) 70%)', zIndex: 0 }} />
				<div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(200,35,44,0.03) 0%, rgba(200,35,44,0) 70%)', zIndex: 0 }} />

				<div className="tf-container" style={{ position: 'relative', zIndex: 1 }}>
					<div style={{ maxWidth: '1000px', margin: '0 auto' }}>
						<div className="text-center mb-50">
							<p className="s-sub-title mb-15 justify-center" style={{ color: '#C8232C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
								<i className="icon-angles-right moveLeftToRight" />
								{t('s2Subtitle')}
							</p>
							<h2 className="s-title mb-20 text-anime-wave" style={{ color: '#1B2F5E', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '900', lineHeight: '1.1' }}>
								{t('s2Title')}
								<span style={{ color: '#C8232C', marginLeft: '12px' }}>
									{t('s2TitleSpan')}
								</span>
							</h2>
							<div style={{ width: '80px', height: '4px', background: '#C8232C', margin: '0 auto 30px', borderRadius: '2px' }} />
							<p className="text" style={{ color: '#505878', fontSize: '1.15rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto 40px' }}>
								{t('s2Desc')}
							</p>
						</div>

						<div className="row align-items-center mb-60">
							<div className="col-lg-7">
								<ul className="benefit-list style-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
									<li style={{ background: '#f8faff', padding: '20px', borderRadius: '12px', border: '1px solid #eef2fa', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
										<div className="icon" style={{ background: '#1B2F5E', color: '#fff', boxShadow: '0 4px 12px rgba(27,47,94,0.2)' }}>
											<i className="icon-check-2" />
										</div>
										<p style={{ color: '#1B2F5E', fontWeight: '600', fontSize: '1.05rem', margin: 0 }}>
											{t('s2Item1')}
										</p>
									</li>
									<li style={{ background: '#fff9f9', padding: '20px', borderRadius: '12px', border: '1px solid #ffeded', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
										<div className="icon" style={{ background: '#C8232C', color: '#fff', boxShadow: '0 4px 12px rgba(200,35,44,0.2)' }}>
											<i className="icon-check-2" />
										</div>
										<p style={{ color: '#1B2F5E', fontWeight: '600', fontSize: '1.05rem', margin: 0 }}>
											{t('s2Item2')}
										</p>
									</li>
								</ul>
							</div>
							<div className="col-lg-5 text-lg-end mt-30 mt-lg-0">
								<Link href="/our-service" className="tf-btn style-3 text-anime-style-1" style={{ background: '#1B2F5E', color: '#fff', padding: '16px 40px', borderRadius: '50px', boxShadow: '0 10px 25px rgba(27,47,94,0.15)' }}>
									{t('s2Explore')}
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>

						<div className="row g-4">
							{valueCards.map((card, idx) => (
								<div className="col-md-4" key={idx}>
									<div 
										style={{ 
											border: '1px solid #eef2fa', 
											borderRadius: '20px', 
											padding: '40px 30px', 
											height: '100%', 
											background: '#fff',
											boxShadow: '0 10px 40px rgba(27,47,94,0.04)',
											transition: 'all 0.4s ease',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											textAlign: 'center'
										}}
										className="value-card-hover"
									>
										<div style={{ 
											width: '70px', 
											height: '70px', 
											borderRadius: '20px', 
											background: idx === 1 ? 'linear-gradient(135deg, #C8232C 0%, #a01c23 100%)' : 'linear-gradient(135deg, #1B2F5E 0%, #122040 100%)', 
											color: '#fff', 
											display: 'flex', 
											alignItems: 'center', 
											justifyContent: 'center', 
											marginBottom: '25px',
											fontSize: '24px',
											boxShadow: idx === 1 ? '0 8px 20px rgba(200,35,44,0.2)' : '0 8px 20px rgba(27,47,94,0.2)'
										}}>
											<i className={card.icon} />
										</div>
										<h4 style={{ color: '#1B2F5E', fontSize: '1.4rem', fontWeight: '800', marginBottom: '15px' }}>{card.title}</h4>
										<p style={{ color: '#606580', margin: 0, lineHeight: '1.8', fontSize: '1.05rem' }}>{card.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<style jsx>{`
					.value-card-hover:hover {
						transform: translateY(-10px);
						box-shadow: 0 20px 50px rgba(27,47,94,0.08) !important;
						border-color: #1B2F5E20 !important;
					}
				`}</style>
			</section>
		</>
	)
}
