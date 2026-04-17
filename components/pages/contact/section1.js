'use client'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'

const CONTACT_INFO = {
	address: 'Yeşilbahçe Mah. 1456 Sok. No: 26\nİ. Özalp Apt. Kat: 4 Daire: 11\n07160 Muratpaşa / ANTALYA',
	addressMapUrl: 'https://maps.google.com/?q=Yeşilbahçe+Mahallesi+1456+Sokak+Muratpaşa+Antalya',
	phone: '+90 532 323 17 54',
	phoneUrl: 'tel:+905323231754',
	email1: 'nevzat@misiones.com.tr',
	email2: 'newzat@misiones.tr',
	instagram: 'https://www.instagram.com/misionescom?igsh=MW15OXdqZWl1cXE2aQ==',
	linkedin: 'https://www.linkedin.com/company/misionestr/',
	facebook: 'https://www.facebook.com/share/1B2Wt8rAwu/',
}

const iconStyle = {
	width: '48px',
	height: '48px',
	borderRadius: '50%',
	background: 'linear-gradient(135deg, #1B2F5E, #2a4a8e)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexShrink: 0,
}

export default function Section1() {
	const { lang } = useLanguage()

	const cards = [
		{
			icon: 'icon-location-dot',
			titleTr: 'Adresimiz',
			titleEn: 'Our Address',
			content: (
				<Link
					href={CONTACT_INFO.addressMapUrl}
					className="infor"
					target="_blank"
					rel="noopener noreferrer"
					style={{ lineHeight: '1.75', fontSize: 'clamp(20px, 1.25vw, 24px)' }}
				>
					Yeşilbahçe Mah. 1456 Sok. No: 26<br />
					İ. Özalp Apt. Kat: 4 Daire: 11<br />
					07160 Muratpaşa / ANTALYA
				</Link>
			),
		},
		{
			icon: 'icon-phone',
			titleTr: 'Telefon & E-posta',
			titleEn: 'Phone & Email',
			content: (
				<>
					<Link href={CONTACT_INFO.phoneUrl} className="infor" style={{ display: 'block', marginBottom: '6px', fontSize: 'clamp(20px, 1.25vw, 24px)' }}>
						{CONTACT_INFO.phone}
					</Link>
					<Link href={`mailto:${CONTACT_INFO.email1}`} className="infor" style={{ display: 'block', marginBottom: '4px', fontSize: 'clamp(20px, 1.25vw, 24px)' }}>
						{CONTACT_INFO.email1}
					</Link>
					<Link href={`mailto:${CONTACT_INFO.email2}`} className="infor" style={{ display: 'block', fontSize: 'clamp(20px, 1.25vw, 24px)' }}>
						{CONTACT_INFO.email2}
					</Link>
				</>
			),
		},
		{
			icon: 'icon-share-nodes',
			titleTr: 'Sosyal Medya',
			titleEn: 'Social Media',
			content: (
				<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
					<Link href={CONTACT_INFO.instagram} className="infor" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'clamp(20px, 1.25vw, 24px)' }}>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
						@misionescom
					</Link>
					<Link href={CONTACT_INFO.linkedin} className="infor" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'clamp(20px, 1.25vw, 24px)' }}>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
						misionestr
					</Link>
					<Link href={CONTACT_INFO.facebook} className="infor" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'clamp(20px, 1.25vw, 24px)' }}>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
						Misiones
					</Link>
				</div>
			),
		},
	]

	return (
		<>
			<section className="s-page-contact tf-spacing-1">
				<div className="tf-container">
					<div className="row mb-50">
						<div className="col-lg-12 text-center">
							<p className="s-sub-title justify-center mb-17">
								<i className="icon-angles-right moveLeftToRight" />
								{lang === 'tr' ? 'iletişim bilgileri' : 'contact information'}
							</p>
							<p className="s-title text-anime-wave" style={{ color: '#1B2F5E' }}>
								{lang === 'tr'
									? <>Bize <span>Ulaşın</span></>
									: <>Get in <span>Touch</span></>
								}
							</p>
						</div>
					</div>

					<div className="row">
						{cards.map((card, i) => (
							<div key={i} className="col-lg-4 col-md-6 mb-30">
								<div style={{
									background: '#fff',
									border: '1px solid #e8e8e8',
									borderRadius: '16px',
									padding: '36px 28px',
									height: '100%',
									boxShadow: '0 4px 24px rgba(27,47,94,0.07)',
									transition: 'box-shadow 0.3s',
								}}>
									<div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
										<div style={iconStyle}>
											<i className={card.icon} style={{ fontSize: '20px', color: '#fff' }} />
										</div>
										<div>
											<p style={{
												fontSize: 'clamp(25px, 1.7vw, 32px)',
												fontWeight: '700',
												color: '#1B2F5E',
												marginBottom: '12px',
												fontFamily: "'Barlow', sans-serif",
											}}>
												{lang === 'tr' ? card.titleTr : card.titleEn}
											</p>
											{card.content}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
