'use client'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'

const ctaCards = [
	{
		icon: 'icon-handshake',
		titleTr: 'Ücretsiz Danışmanlık Alın',
		descTr: 'Otel yatırımı, marka entegrasyonu veya operasyon iyileştirmesi için sahadan gelen deneyimle yanınızdayız.',
		btnTr: 'Danışmanlık Talebi',
		titleEn: 'Get Free Consultation',
		descEn: 'For hotel investment, brand integration or operations improvement — expert guidance from field experience.',
		btnEn: 'Request Consultation',
		href: '/contact',
		delay: '0s',
	},
	{
		icon: 'icon-lightbulb',
		titleTr: 'Hizmetlerimizi Keşfedin',
		descTr: 'HIP, gelir yönetimi, yatırım fizibilitesi ve daha fazlası — otelcilik sektöründe kapsamlı danışmanlık çözümleri.',
		btnTr: 'Hizmetleri Gör',
		titleEn: 'Explore Our Services',
		descEn: 'HIP, revenue management, investment feasibility and more — comprehensive consulting solutions in hospitality.',
		btnEn: 'View Services',
		href: '/our-service',
		delay: '0.1s',
	},
	{
		icon: 'icon-envelope',
		titleTr: 'Hemen İletişime Geçin',
		descTr: 'Projenizi konuşmak veya sektörel sorularınız için bize yazın. En kısa sürede dönüş yaparız.',
		btnTr: 'İletişim',
		titleEn: 'Contact Us Now',
		descEn: 'Write to us to discuss your project or industry questions. We\'ll get back to you promptly.',
		btnEn: 'Contact',
		href: '/contact',
		delay: '0.2s',
	},
]

export default function CtaSection() {
	const { lang } = useLanguage()

	return (
		<section style={{
			background: 'linear-gradient(135deg, #1B2F5E 0%, #0f1e3e 100%)',
			padding: '88px 0 80px',
		}}>
			<div className="tf-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="row g-4">
							{ctaCards.map((card, i) => (
								<div key={i} className="col-lg-4 col-md-6">
									<div
										className="wow fadeInUp"
										data-wow-delay={card.delay}
										style={{
											background: 'rgba(255,255,255,0.06)',
											border: '1px solid rgba(255,255,255,0.12)',
											borderRadius: '16px',
											padding: '40px 32px',
											height: '100%',
											display: 'flex',
											flexDirection: 'column',
											gap: '22px',
											transition: 'background 0.3s, transform 0.3s',
											cursor: 'default',
										}}
									>
										<div style={{
											width: '56px',
											height: '56px',
											borderRadius: '12px',
											background: 'rgba(200,35,44,0.15)',
											border: '1px solid rgba(200,35,44,0.4)',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
										}}>
											<i className={card.icon} style={{ fontSize: '22px', color: '#C8232C' }} />
										</div>
										<p style={{
											fontSize: '20px',
											fontWeight: '700',
											color: '#ffffff',
											lineHeight: '1.3',
											fontFamily: "'Barlow', sans-serif",
											margin: 0,
										}}>
											{lang === 'tr' ? card.titleTr : card.titleEn}
										</p>
										<p style={{
											fontSize: '14px',
											color: 'rgba(255,255,255,0.72)',
											lineHeight: '1.7',
											margin: 0,
											flex: 1,
										}}>
											{lang === 'tr' ? card.descTr : card.descEn}
										</p>
										<div>
											<Link
												href={card.href}
												className="tf-btn style-10 small"
												style={{ display: 'inline-flex' }}
											>
												{lang === 'tr' ? card.btnTr : card.btnEn}
												<i className="icon-chevron-right" style={{ marginLeft: '6px' }} />
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
