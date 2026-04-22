'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/utils/LanguageContext'

const HIP_GAINS = [
	{
		iconTr: 'Fiyatlandırma Hatalarının Düzeltilmesi',
		iconEn: 'Fixing Pricing Mistakes',
		iconAr: 'إصلاح أخطاء التسعير',
		iconRu: 'Исправление ошибок ценообразования',
		icon: 'icon-tag',
	},
	{
		iconTr: 'OTA Bağımlılığının Azaltılması',
		iconEn: 'Reducing OTA Dependency',
		iconAr: 'تقليل الاعتماد على وكالات السفر عبر الإنترنت',
		iconRu: 'Снижение зависимости от OTA',
		icon: 'icon-chart-line',
	},
	{
		iconTr: 'Operasyonel Kayıpların Giderilmesi',
		iconEn: 'Eliminating Operational Losses',
		iconAr: 'القضاء على الخسائر التشغيلية',
		iconRu: 'Устранение операционных потерь',
		icon: 'icon-gears',
	},
	{
		iconTr: 'Marka Konumlandırmasının Netleşmesi',
		iconEn: 'Clarifying Brand Positioning',
		iconAr: 'توضيح مكانة العلامة التجارية',
		iconRu: 'Разъяснение позиционирования бренда',
		icon: 'icon-bullseye',
	},
	{
		iconTr: 'Sürdürülebilir Kârlılık',
		iconEn: 'Sustainable Profitability',
		iconAr: 'الربحية المستدامة',
		iconRu: 'Устойчивая прибыльность',
		icon: 'icon-leaf',
	},
	{
		iconTr: 'Doğrudan Satışların Artması',
		iconEn: 'Increasing Direct Sales',
		iconAr: 'زيادة المبيعات المباشرة',
		iconRu: 'Увеличение прямых продаж',
		icon: 'icon-arrow-trend-up',
	},
]

const HIP_LEVELS = [
	{
		nameTr: 'Tam HIP',
		nameEn: 'Full HIP',
		nameAr: 'خطة التحسين الكاملة (Full HIP)',
		nameRu: 'Полный HIP',
		subtitleTr: 'Komple Dönüşüm Programı',
		subtitleEn: 'Complete Transformation Program',
		subtitleAr: 'برنامج التحول الكامل',
		subtitleRu: 'Программа полной трансформации',
		descTr: 'PMS, RMS, CRM, web sitesi, satış & pazarlama yapısı, dağıtım kanalları ve organizasyon yapısının tamamının yeniden kurgulanması.',
		descEn: 'Restructuring of PMS, RMS, CRM, website, sales & marketing structure, distribution channels and full organizational design.',
		descAr: 'إعادة هيكلة كاملة لنظام PMS، وRMS، وCRM، والموقع الإلكتروني، وهيكل المبيعات والتسويق.',
		descRu: 'Полная реструктуризация PMS, RMS, CRM, веб-сайта, структуры продаж и маркетинга.',
		badge: '#1B2F5E',
	},
	{
		nameTr: 'Odaklanmış HIP',
		nameEn: 'Focused HIP',
		nameAr: 'خطة التحسين المركزة',
		nameRu: 'Целенаправленный HIP',
		subtitleTr: 'Hedefli Müdahale',
		subtitleEn: 'Targeted Intervention',
		subtitleAr: 'تدخل مستهدف',
		subtitleRu: 'Целенаправленное вмешательство',
		descTr: 'Gelir yönetimi, dijital satış, teknoloji altyapısı veya operasyonel verimlilik gibi tek bir kritik alana yoğunlaşan, hızlı ve yüksek etkili müdahale.',
		descEn: 'Fast, high-impact intervention focused on one critical area: revenue management, digital sales, tech infrastructure or operational efficiency.',
		descAr: 'تدخل سريع وعالي التأثير يركز على مجال حيوي واحد مثل إدارة الإيرادات أو المبيعات الرقمية.',
		descRu: 'Быстрое и эффективное вмешательство, ориентированное на одну критическую область: управление доходами или цифровые продажи.',
		badge: '#C8232C',
	},
]

export default function Section13() {
	const { lang } = useLanguage()
	const [activeLevel, setActiveLevel] = useState(0)

	return (
		<section style={{ background: '#f8f9fb', padding: '90px 0' }}>
			<div className="tf-container">

				{/* Üst başlık */}
				<div className="row mb-60">
					<div className="col-lg-7">
						<p className="s-sub-title mb-17">
							<i className="icon-angles-right moveLeftToRight" />
							{lang === 'tr' ? 'otel geliştirme planı' : lang === 'ar' ? 'خطة تحسين الفندق' : lang === 'ru' ? 'план улучшения отеля' : 'hotel improvement plan'}
						</p>
						<p className="s-title text-anime-wave" style={{ color: '#1B2F5E' }}>
							{lang === 'tr'
								? <>HIP – Otelinizi <span>Kâra Dönüştüren</span> Yol Haritası</>
								: lang === 'ar'
								? <>HIP – خارطة الطريق التي <span>تحول فندقك إلى عمل مربح</span></>
								: lang === 'ru'
								? <>HIP – Дорожная карта, которая <span>сделает ваш отель прибыльным</span></>
								: <>HIP – The Roadmap That <span>Turns Your Hotel Profitable</span></>
							}
						</p>
					</div>
					<div className="col-lg-5 d-flex align-items-end justify-content-lg-end">
						<Link href="/hip" className="tf-btn style-3">
							{lang === 'tr' ? 'HIP Detayları' : lang === 'ar' ? 'تفاصيل خطة HIP' : lang === 'ru' ? 'Подробности HIP' : 'HIP Details'}
							<i className="icon-chevron-right" />
						</Link>
					</div>
				</div>

				<div className="row g-5">
					{/* Sol: görsel + felsefe */}
					<div className="col-lg-5">
						<div style={{
							borderRadius: '20px',
							overflow: 'hidden',
							marginBottom: '20px',
							background: '#fff',
							border: '1px solid #e4e9f2',
							boxShadow: '0 8px 32px rgba(27,47,94,0.08)',
						}}>
							<Image
								width={1400}
								height={788}
								sizes="(max-width: 768px) 100vw, 540px"
								style={{ width: '100%', height: 'auto', display: 'block' }}
								src="/images/section/misiones-hip-infographic.png"
								alt={lang === 'tr' ? 'HIP Otel Geliştirme Planı yol haritası' : 'HIP Hotel Improvement Plan roadmap'}
							/>
						</div>
						<div style={{
							background: 'linear-gradient(135deg, #C8232C 0%, #a51c24 100%)',
							borderRadius: '14px',
							padding: '18px 22px',
							marginBottom: '28px',
						}}>
							<p style={{ color: '#fff', fontWeight: '700', fontSize: '14px', margin: '0 0 6px', letterSpacing: '0.02em' }}>
								{lang === 'tr' ? 'Bizim Sorumuz:' : lang === 'ar' ? 'سؤالنا:' : lang === 'ru' ? 'Наш вопрос:' : 'Our Question:'}
							</p>
							<p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '17px', fontWeight: '800', margin: 0, fontStyle: 'italic', lineHeight: 1.35 }}>
								{lang === 'tr' ? '"Para kazanıyor mu? Ne kadar?"' : lang === 'ar' ? '"هل يدر المال؟ كم؟"' : lang === 'ru' ? '"Она приносит деньги? Сколько?"' : '"Is it making money? How much?"'}
							</p>
						</div>

						{/* Felsefe maddeleri */}
						<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
							{[
								{ tr: 'Varsayımları değil, ölçülebilir gerçekleri konuşur', en: 'Speaks measurable facts, not assumptions', ar: 'يتحدث بحقائق قابلة للقياس، وليس افتراضات', ru: 'Говорит измеримыми фактами, а не предположениями' },
								{ tr: 'KPI\'ları stratejik pusulaya dönüştürür', en: 'Turns KPIs into a strategic compass', ar: 'يحول مؤشرات الأداء الرئيسية إلى بوصلة استراتيجية', ru: 'Превращает KPI в стратегический компас' },
								{ tr: 'Pazara tepki değil, pazarı yönlendirme', en: 'Not reacting to market, but leading it', ar: 'ليس رد فعل على السوق، بل قيادته', ru: 'Не реагирует на рынок, а ведет его' },
							].map((item, i) => (
								<div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
									<span style={{
										width: '24px', height: '24px', borderRadius: '50%',
										background: '#C8232C', display: 'flex', alignItems: 'center',
										justifyContent: 'center', flexShrink: 0, marginTop: '2px',
									}}>
										<i className="icon-check" style={{ fontSize: '10px', color: '#fff' }} />
									</span>
									<p style={{ color: '#444', fontSize: '15px', lineHeight: '1.65', margin: 0 }}>
										{lang === 'tr' ? item.tr : lang === 'ar' ? item.ar : lang === 'ru' ? item.ru : item.en}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Sağ: Seviyeler + kazanımlar */}
					<div className="col-lg-7">
						{/* HIP seviyeleri tab */}
						<div style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
							{HIP_LEVELS.map((level, i) => (
								<button
									key={i}
									onClick={() => setActiveLevel(i)}
									style={{
										flex: 1,
										padding: '14px 20px',
										borderRadius: '10px',
										border: `2px solid ${activeLevel === i ? level.badge : '#e0e0e0'}`,
										background: activeLevel === i ? level.badge : '#fff',
										color: activeLevel === i ? '#fff' : '#555',
										fontWeight: '700',
										fontSize: '14px',
										cursor: 'pointer',
										transition: 'all 0.2s',
										textAlign: 'left',
									}}
								>
									<span style={{ display: 'block', fontSize: '11px', opacity: 0.8, fontWeight: '500', marginBottom: '2px' }}>
										{lang === 'tr' ? level.subtitleTr : lang === 'ar' ? level.subtitleAr : lang === 'ru' ? level.subtitleRu : level.subtitleEn}
									</span>
									{lang === 'tr' ? level.nameTr : lang === 'ar' ? level.nameAr : lang === 'ru' ? level.nameRu : level.nameEn}
								</button>
							))}
						</div>

						{/* Aktif seviye açıklaması */}
						<div style={{
							background: '#fff',
							borderRadius: '14px',
							padding: '24px',
							border: `1px solid ${HIP_LEVELS[activeLevel].badge}30`,
							marginBottom: '28px',
							boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
						}}>
							<p style={{ color: '#333', fontSize: '16px', lineHeight: '1.75', margin: 0 }}>
								{lang === 'tr' ? HIP_LEVELS[activeLevel].descTr : lang === 'ar' ? HIP_LEVELS[activeLevel].descAr : lang === 'ru' ? HIP_LEVELS[activeLevel].descRu : HIP_LEVELS[activeLevel].descEn}
							</p>
						</div>

						{/* HIP ile kazanacaklarınız */}
						<p style={{ fontWeight: '700', fontSize: '15px', color: '#1B2F5E', marginBottom: '16px' }}>
							{lang === 'tr' ? 'HIP ile Kazanacaklarınız:' : lang === 'ar' ? 'ما تكسبه مع HIP:' : lang === 'ru' ? 'Что вы получаете с HIP:' : 'What You Gain with HIP:'}
						</p>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
							{HIP_GAINS.map((gain, i) => (
								<div key={i} style={{
									display: 'flex', gap: '10px', alignItems: 'flex-start',
									background: '#fff', borderRadius: '10px', padding: '14px 16px',
									border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
								}}>
									<i className={gain.icon} style={{ fontSize: '18px', color: '#C8232C', flexShrink: 0, marginTop: '2px' }} />
									<p style={{ color: '#333', fontSize: '14px', fontWeight: '600', lineHeight: '1.45', margin: 0 }}>
										{lang === 'tr' ? gain.iconTr : lang === 'ar' ? gain.iconAr : lang === 'ru' ? gain.iconRu : gain.iconEn}
									</p>
								</div>
							))}
						</div>

						<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
							<Link href="/hip" className="tf-btn">
								{lang === 'tr' ? 'HIP\'i Keşfet' : lang === 'ar' ? 'استكشاف HIP' : lang === 'ru' ? 'Изучить HIP' : 'Explore HIP'}
								<i className="icon-chevron-right" />
							</Link>
							<Link href="/hip" className="tf-btn style-3">
								{lang === 'tr' ? 'HIP Detayları' : lang === 'ar' ? 'تفاصيل HIP' : lang === 'ru' ? 'Сведения о HIP' : 'HIP Details'}
								<i className="icon-chevron-right" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
