'use client'
import { useState } from 'react'
import { useLanguage } from '@/utils/LanguageContext'

const WHY_ITEMS = [
	{
		icon: 'flaticon-target',
		titleTr: 'Sahadaki Gerçek Deneyim',
		titleEn: 'Real Field Experience',
		descTr: 'Yalnızca teoriden değil; 20+ yıllık gerçek otel yönetimi ve yatırım süreçlerinden süzülmüş bilgelikle danışmanlık yapıyoruz.',
		descEn: 'Consulting from 20+ years of real hotel management and investment processes — not just theory.',
	},
	{
		icon: 'flaticon-return-of-investment',
		titleTr: 'Sonuç Odaklı Yaklaşım',
		titleEn: 'Results-Oriented Approach',
		descTr: '"Otel iyi görünüyor mu?" sorusunu değil, "Para kazanıyor mu?" sorusunu sorarız. Her adım ölçülebilir ve kârlılığa yöneliktir.',
		descEn: 'We don\'t ask "Does the hotel look good?" but "Is it making money?" Every step is measurable and profit-oriented.',
	},
	{
		icon: 'flaticon-human-resources',
		titleTr: 'Kapsamlı Hizmet Yelpazesi',
		titleEn: 'Comprehensive Service Range',
		descTr: 'Yatırım fizibilitesinden marka entegrasyonuna, gelir yönetiminden HIP\'e kadar otelciliğin tüm boyutlarında yanınızdayız.',
		descEn: 'From investment feasibility to brand integration, revenue management to HIP — we\'re with you across all dimensions of hospitality.',
	},
	{
		icon: 'flaticon-data-management',
		titleTr: 'Global & Yerel Perspektif',
		titleEn: 'Global & Local Perspective',
		descTr: 'Avrupa\'dan Orta Asya\'ya, butik otellerden uluslararası zincirlere kadar çok katmanlı bir deneyim perspektifi sunuyoruz.',
		descEn: 'From Europe to Central Asia, boutique hotels to international chains — we offer a multi-layered experience perspective.',
	},
]

const FAQS = [
	{
		key: 1,
		qTr: 'MISIONES kiminle çalışır?',
		qEn: 'Who does MISIONES work with?',
		aTr: 'Otel yatırımcıları, girişimciler, mevcut otel işletmecileri ve uluslararası marka almak isteyen tüm paydaşlarla çalışıyoruz. Yeni yatırımdan mevcut otelin dönüşümüne kadar her aşamada destek veriyoruz.',
		aEn: 'We work with hotel investors, entrepreneurs, existing hotel operators and all stakeholders seeking international brands. We provide support at every stage from new investment to transformation of existing hotels.',
	},
	{
		key: 2,
		qTr: 'HIP nedir ve kime göre tasarlanmıştır?',
		qEn: 'What is HIP and who is it designed for?',
		aTr: 'HIP (Hotel Improvement Plan), mevcut otellerin gelir kayıplarını, operasyonel verimsizliklerini ve pazar konumlandırma sorunlarını tespit edip çözen özel bir danışmanlık paketidir. Düşük performanslı her otel için idealdir.',
		aEn: 'HIP (Hotel Improvement Plan) is a specialized consulting package that identifies and resolves revenue losses, operational inefficiencies and market positioning problems of existing hotels. Ideal for any underperforming hotel.',
	},
	{
		key: 3,
		qTr: 'Danışmanlık süreci nasıl başlar?',
		qEn: 'How does the consulting process begin?',
		aTr: 'Ücretsiz bir ön görüşmeyle başlarız. Otelin veya yatırımın mevcut durumunu, hedeflerini ve sorunlarını dinler; ardından kapsamlı bir analiz ve yol haritası sunarız.',
		aEn: 'We start with a free initial consultation. We listen to the current situation, goals and problems of the hotel or investment; then provide a comprehensive analysis and roadmap.',
	},
	{
		key: 4,
		qTr: 'Uluslararası otel markalarıyla çalışma deneyiminiz var mı?',
		qEn: 'Do you have experience with international hotel brands?',
		aTr: 'Evet. Radisson Blu, Marriott, Steigenberger, Wyndham gibi uluslararası zincirlerle ve Avrupa, Orta Asya\'daki seçkin otellerle doğrudan çalışma deneyimlerimiz bulunmaktadır.',
		aEn: 'Yes. We have direct working experience with international chains such as Radisson Blu, Marriott, Steigenberger, Wyndham and distinguished hotels in Europe and Central Asia.',
	},
	{
		key: 5,
		qTr: 'Yalnızca otellerle mi çalışıyorsunuz?',
		qEn: 'Do you work only with hotels?',
		aTr: 'Ana uzmanlığımız otelcilik ve konaklama sektörüdür. Ancak resort, apart, tatil köyü ve konaklama odaklı karma projelerde de stratejik danışmanlık veriyoruz.',
		aEn: 'Our core expertise is hospitality and accommodation. We also provide strategic consulting for resorts, serviced apartments and mixed-use accommodation projects.',
	},
	{
		key: 6,
		qTr: 'Danışmanlık sonrası uygulama takibi yapıyor musunuz?',
		qEn: 'Do you provide post-consulting implementation follow-up?',
		aTr: 'Evet. Yol haritası tesliminden sonra KPI takibi, periyodik değerlendirme toplantıları ve saha geri bildirimleriyle uygulamanın sonuç üretmesini aktif olarak izliyoruz.',
		aEn: 'Yes. After delivering the roadmap, we actively monitor results through KPI tracking, periodic review meetings and field feedback.',
	},
]

export default function Section7() {
	const [isAccordion, setIsAccordion] = useState(1)
	const { lang } = useLanguage()

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	const counters = [
		{ count: 20, suffix: '+', labelTr: 'Yıl Deneyim', labelEn: 'Years Experience' },
		{ count: 50, suffix: '+', labelTr: 'Proje & Otel', labelEn: 'Projects & Hotels' },
		{ count: 8, suffix: '', labelTr: 'Ülke', labelEn: 'Countries' },
	]

	return (
		<>
			<section className="s-faq-redesign tf-spacing-1 bg-white" style={{ background: '#ffffff', position: 'relative', zIndex: 1 }}>
				<div className="tf-container">
					<div className="row mb-50">
						<div className="col-lg-12">
							<div className="content text-center">
								<p className="s-sub-title justify-center mb-17">
									<i className="icon-angles-right moveLeftToRight" />
									{lang === 'tr' ? 'SSS' : 'FAQ'}
								</p>
								<p className="s-title" style={{ color: '#1B2F5E', fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: '1.2' }}>
									{lang === 'tr'
										? <>Sahadan Gelen Bilgelik,<br /><span style={{ color: '#C8232C' }}>Ölçülebilir Sonuçlar</span></>
										: <>Field-Tested Wisdom,<br /><span style={{ color: '#C8232C' }}>Measurable Results</span></>
									}
								</p>
							</div>
						</div>
					</div>

					<div className="row">
						{/* Left: Why Us Grid */}
						<div className="col-lg-6">
							<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
								{WHY_ITEMS.map((item, i) => (
									<div key={i} style={{
										background: '#f8f9fd',
										border: '1px solid #eef2fa',
										borderRadius: '16px',
										padding: '24px',
										transition: 'all 0.3s ease',
										boxShadow: '0 4px 15px rgba(27,47,94,0.03)'
									}}>
										<div style={{
											width: '48px', height: '48px', borderRadius: '12px',
											background: '#1B2F5E',
											display: 'flex', alignItems: 'center', justifyContent: 'center',
											marginBottom: '16px',
										}}>
											<i className={item.icon} style={{ fontSize: '22px', color: '#ffffff' }} />
										</div>
										<p style={{ color: '#1B2F5E', fontWeight: '800', fontSize: '15px', marginBottom: '10px', lineHeight: '1.4' }}>
											{lang === 'tr' ? item.titleTr : item.titleEn}
										</p>
										<p style={{ color: '#606580', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
											{lang === 'tr' ? item.descTr : item.descEn}
										</p>
									</div>
								))}
							</div>

							{/* Stats */}
							<div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '20px', background: '#1B2F5E', borderRadius: '20px', boxShadow: '0 10px 30px rgba(27,47,94,0.15)' }}>
								{counters.map((c, i) => (
									<div key={i} style={{ flex: 1, minWidth: '120px', textAlign: 'center' }}>
										<div style={{ color: '#fff', fontSize: '32px', fontWeight: '800', marginBottom: '4px' }}>
											{c.count}<span style={{ color: '#C8232C' }}>{c.suffix}</span>
										</div>
										<p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
											{lang === 'tr' ? c.labelTr : c.labelEn}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Right: Accordion */}
						<div className="col-lg-6">
							<div style={{ background: '#fff', borderRadius: '20px', padding: '10px' }}>
								<div className="tf-accordion-redesign">
									{FAQS.map((faq) => (
										<div key={faq.key} style={{
											marginBottom: '12px',
											borderRadius: '12px',
											overflow: 'hidden',
											border: '1px solid',
											borderColor: isAccordion === faq.key ? '#C8232C' : '#eef2fa',
											background: isAccordion === faq.key ? '#fff' : '#fcfdff',
											transition: 'all 0.3s ease'
										}}>
											<div
												onClick={() => handleAccordion(faq.key)}
												style={{
													padding: '20px 24px',
													cursor: 'pointer',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'space-between',
													gap: '15px'
												}}
											>
												<span style={{
													color: isAccordion === faq.key ? '#1B2F5E' : '#606580',
													fontWeight: '700',
													fontSize: '17px',
													transition: 'color 0.3s'
												}}>
													{lang === 'tr' ? faq.qTr : faq.qEn}
												</span>
												<div style={{
													width: '24px', height: '24px', borderRadius: '50%',
													background: isAccordion === faq.key ? '#C8232C' : '#eef2fa',
													color: isAccordion === faq.key ? '#fff' : '#1B2F5E',
													display: 'flex', alignItems: 'center', justifyContent: 'center',
													fontSize: '12px',
													transition: 'all 0.3s'
												}}>
													<i className={isAccordion === faq.key ? 'icon-minus' : 'icon-plus'} />
												</div>
											</div>
											<div style={{
												maxHeight: isAccordion === faq.key ? '300px' : '0',
												overflow: 'hidden',
												transition: 'max-height 0.4s ease',
												background: '#fff'
											}}>
												<div style={{ padding: '0 24px 20px 24px', color: '#606580', fontSize: '15px', lineHeight: '1.7' }}>
													{lang === 'tr' ? faq.aTr : faq.aEn}
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
