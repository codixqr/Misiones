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
		{ count: 20, suffix: '+', labelTr: 'Yıl Deneyim', labelEn: 'Years Experience', odoClass: 'style-5' },
		{ count: 50, suffix: '+', labelTr: 'Proje & Otel', labelEn: 'Projects & Hotels', odoClass: 'style-5-2' },
		{ count: 8, suffix: '', labelTr: 'Ülke', labelEn: 'Countries', odoClass: 'style-5-3' },
	]

	return (
		<>
			<section
				className="s-working-2 tf-spacing-3"
				style={{
					background: 'linear-gradient(180deg, #2b427d 0%, #243a73 55%, #1f3367 100%)',
				}}
			>
				<div className="tf-container">
					<div className="row">
						{/* Başlık */}
						<div className="col-lg-12">
							<div className="content text-center mb-70">
								<p className="s-sub-title mb-17 text-white justify-center" style={{ color: 'rgba(255,255,255,0.9)' }}>
									<i className="icon-angles-right moveLeftToRight" />
									{lang === 'tr' ? 'SSS' : 'FAQ'}
								</p>
								<p className="s-title text-white letter-space-0 text-anime-wave">
									{lang === 'tr'
										? <>Sahadan Gelen Bilgelik,<br /><span>Ölçülebilir Sonuçlar</span></>
										: <>Field-Tested Wisdom,<br /><span>Measurable Results</span></>
									}
								</p>
							</div>
						</div>

						{/* Sol: 4 kart neden MISIONES */}
						<div className="col-lg-6">
							<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
								{WHY_ITEMS.map((item, i) => (
									<div key={i} style={{
										background: 'rgba(255,255,255,0.13)',
										border: '1px solid rgba(255,255,255,0.2)',
										borderRadius: '14px',
										padding: '24px 20px',
									}}>
										<div style={{
											width: '44px', height: '44px', borderRadius: '10px',
											background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.35)',
											display: 'flex', alignItems: 'center', justifyContent: 'center',
											marginBottom: '14px',
										}}>
											<i className={item.icon} style={{ fontSize: '20px', color: '#ffffff' }} />
										</div>
										<p style={{ color: '#fff', fontWeight: '700', fontSize: '14px', marginBottom: '8px', lineHeight: '1.4' }}>
											{lang === 'tr' ? item.titleTr : item.titleEn}
										</p>
										<p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '14px', lineHeight: '1.62', margin: 0 }}>
											{lang === 'tr' ? item.descTr : item.descEn}
										</p>
									</div>
								))}
							</div>

							{/* Sayaçlar */}
							<div className="bot" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
								{counters.map((c, i) => (
									<div key={i} className="counter-wrap style-2">
										<div className="relative mb-20">
											<div className="circle-container">
												<div
													style={{
														width: '110px',
														height: '110px',
														borderRadius: '50%',
														background: 'linear-gradient(145deg, #36589f, #2c4b8a)',
														border: '3px solid rgba(186, 205, 245, 0.75)',
														boxShadow: '0 8px 18px rgba(15,30,62,0.28)',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
													}}
												>
													<div
														style={{
															color: '#ffffff',
															fontSize: '34px',
															fontWeight: 700,
															lineHeight: 1,
															fontFamily: '"Public Sans", Arial, sans-serif',
															letterSpacing: '0.5px',
														}}
													>
														{c.count}
														<span style={{ color: '#ffd9de', fontSize: '20px', marginLeft: '2px' }}>{c.suffix}</span>
													</div>
												</div>
											</div>
										</div>
										<p className="sub-counter" style={{ color: '#f1f5ff', fontSize: '15px', fontWeight: '600' }}>
											{lang === 'tr' ? c.labelTr : c.labelEn}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Sağ: SSS */}
						<div className="col-lg-6">
							<div className="content-left tab-links" style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '8px', border: '1px solid rgba(255,255,255,0.2)' }}>
								<div className="tf-accordion accordion" id="accordionWhy">
									{FAQS.map((faq) => (
										<div key={faq.key} className={`accordion-item${faq.key === FAQS.length ? ' item-last' : ''}`}>
											<h2
												className={`accordion-header item-link${isAccordion === faq.key ? ' current' : ''}`}
												onClick={() => handleAccordion(faq.key)}
											>
												<button
													className={isAccordion === faq.key ? 'accordion-button' : 'accordion-button collapsed'}
													type="button"
												>
													{lang === 'tr' ? faq.qTr : faq.qEn}
												</button>
											</h2>
											<div className={isAccordion === faq.key ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}>
												<div className="accordion-body">
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
