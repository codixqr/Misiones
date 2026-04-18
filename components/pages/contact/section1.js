'use client'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'

const CONTACT_INFO = {
	address: 'Yeşilbahçe Mah. 1456 Sok. No: 26\nİ. Özalp Apt. Kat: 4 Daire: 11\n07160 Muratpaşa / ANTALYA',
	addressMapUrl: 'https://maps.google.com/?q=Yeşilbahçe+Mahallesi+1456+Sokak+Muratpaşa+Antalya',
	phone: '+90 532 323 17 54',
	phoneUrl: 'tel:+905323231754',
	email1: 'info@misiones.com.tr',
	instagram: 'https://www.instagram.com/misionescom?igsh=MW15OXdqZWl1cXE2aQ==',
	linkedin: 'https://www.linkedin.com/company/misionestr/',
	facebook: 'https://www.facebook.com/share/1B2Wt8rAwu/',
}

export default function Section1() {
	const { lang } = useLanguage()

	const cards = [
		{
			svgIcon: (
				<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
					<circle cx="12" cy="10" r="3" />
				</svg>
			),
			titleTr: 'Adresimiz',
			titleEn: 'Our Address',
			content: (
				<Link
					href={CONTACT_INFO.addressMapUrl}
					target="_blank"
					rel="noopener noreferrer"
					style={{ lineHeight: '1.85', fontSize: '1.35rem', color: '#4a5568', display: 'block', textDecoration: 'none', fontWeight: '500' }}
				>
					Yeşilbahçe Mah. 1456 Sok. No: 26<br />
					İ. Özalp Apt. Kat: 4 Daire: 11<br />
					07160 Muratpaşa / ANTALYA
				</Link>
			),
		},
		{
			svgIcon: (
				<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
					<polyline points="22,6 12,13 2,6" />
				</svg>
			),
			titleTr: 'Telefon & E-posta',
			titleEn: 'Phone & Email',
			content: (
				<>
					<Link href={CONTACT_INFO.phoneUrl} style={{ display: 'block', marginBottom: '8px', fontSize: '1.5rem', color: '#1B2F5E', fontWeight: '800', textDecoration: 'none' }}>
						{CONTACT_INFO.phone}
					</Link>
					<Link href={`mailto:${CONTACT_INFO.email1}`} style={{ display: 'block', fontSize: '1.4rem', color: '#C8232C', fontWeight: '600', textDecoration: 'none' }}>
						{CONTACT_INFO.email1}
					</Link>
				</>
			),
		},
		{
			svgIcon: (
				<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<circle cx="18" cy="5" r="3" />
					<circle cx="6" cy="12" r="3" />
					<circle cx="18" cy="19" r="3" />
					<line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
					<line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
				</svg>
			),
			titleTr: 'Sosyal Medya',
			titleEn: 'Social Media',
			content: (
				<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '4px' }}>
					<Link href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.3rem', color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>
						<i className="icon-instagram" style={{ color: '#E1306C', fontSize: '1.4rem' }} />
						@misionescom
					</Link>
					<Link href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.3rem', color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>
						<i className="icon-linkedin" style={{ color: '#0077b5', fontSize: '1.4rem' }} />
						misionestr
					</Link>
					<Link href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.3rem', color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>
						<i className="icon-facebook" style={{ color: '#1877F2', fontSize: '1.4rem' }} />
						Misiones
					</Link>
				</div>
			),
		},
	]

	return (
		<section className="s-page-contact tf-spacing-1" style={{ background: '#fcfdff' }}>
			<div className="tf-container">
				<div className="row mb-60">
					<div className="col-lg-12 text-center">
						<p className="s-sub-title justify-center mb-17">
							<i className="icon-angles-right moveLeftToRight" />
							{lang === 'tr' ? 'iletişim bilgileri' : 'contact information'}
						</p>
						<h2 className="s-title" style={{ color: '#1B2F5E', fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: '900' }}>
							{lang === 'tr' ? <>Bize <span>Ulaşın</span></> : <>Get in <span>Touch</span></>}
						</h2>
					</div>
				</div>

				<div className="row g-4">
					{cards.map((card, i) => (
						<div key={i} className="col-lg-4 col-md-6">
							<div style={{
								background: '#fff',
								border: '1px solid #eef2fa',
								borderRadius: '24px',
								padding: '54px 40px',
								height: '100%',
								boxShadow: '0 12px 48px rgba(27,47,94,0.06)',
								transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
								display: 'flex',
								flexDirection: 'column',
								gap: '30px',
								position: 'relative',
								overflow: 'hidden'
							}}
							className="contact-card-premium"
							>
								<div style={{
									width: '72px', height: '72px', borderRadius: '20px',
									background: 'rgba(200,35,44,0.08)', color: '#C8232C',
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontSize: '32px',
									border: '1px solid rgba(200,35,44,0.15)'
								}}>
									{card.svgIcon}
								</div>
								<div>
									<h4 style={{
										fontSize: '1.75rem',
										fontWeight: '900',
										color: '#1B2F5E',
										marginBottom: '18px',
										letterSpacing: '-0.8px'
									}}>
										{lang === 'tr' ? card.titleTr : card.titleEn}
									</h4>
									{card.content}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<style jsx>{`
				.contact-card-premium:hover {
					transform: translateY(-8px);
					box-shadow: 0 24px 64px rgba(27,47,94,0.12);
					border-color: #C8232C44;
				}
				.contact-card-premium:hover i {
					transform: scale(1.1);
				}
			`}</style>
		</section>
	)
}
