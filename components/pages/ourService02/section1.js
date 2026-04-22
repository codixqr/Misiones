
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
			icon: 'flaticon-chart',
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
			<section className="s-why-choose-4 tf-spacing-3" style={{ background: '#fff' }}>
				<div className="tf-container">
					<div style={{ maxWidth: '980px', margin: '0 auto' }}>
						<p className="s-sub-title mb-15" style={{ color: '#C8232C' }}>
							<i className="icon-angles-right moveLeftToRight" />
							{t('s2Subtitle')}
						</p>
						<p className="s-title mb-40 text-anime-wave" style={{ color: '#1B2F5E' }}>
							{t('s2Title')}
							<span style={{ color: '#C8232C', marginLeft: '10px' }}>
								{t('s2TitleSpan')}
							</span>
						</p>
						<p className="text" style={{ color: '#505878' }}>
							{t('s2Desc')}
						</p>
						<ul className="benefit-list style-2">
							<li>
								<div className="icon" style={{ background: '#1B2F5E10', color: '#1B2F5E' }}>
									<i className="icon-check-2" />
								</div>
								<p style={{ color: '#333' }}>
									{t('s2Item1')}
								</p>
							</li>
							<li>
								<div className="icon" style={{ background: '#C8232C10', color: '#C8232C' }}>
									<i className="icon-check-2" />
								</div>
								<p style={{ color: '#333' }}>
									{t('s2Item2')}
								</p>
							</li>
						</ul>
						<Link href="/our-service" className="tf-btn style-3 text-anime-style-1" style={{ background: '#1B2F5E', color: '#fff' }}>
							{t('s2Explore')}
							<i className="icon-chevron-right" />
						</Link>
						<div className="row mt-40">
							{valueCards.map((card, idx) => (
								<div className="col-md-4 mb-20" key={idx}>
									<div style={{ border: '1px solid #e7eef9', borderRadius: '14px', padding: '24px', height: '100%', background: '#f8fbff' }}>
										<div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#1B2F5E12', color: '#1B2F5E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
											<i className={card.icon} />
										</div>
										<h4 style={{ color: '#1B2F5E', fontSize: '1.15rem', fontWeight: '700', marginBottom: '8px' }}>{card.title}</h4>
										<p style={{ color: '#505878', margin: 0, lineHeight: '1.75' }}>{card.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
