'use client'
import Image from 'next/image'

const globalBrands = [
	{ name: 'Marriott', logo: '/images/brands/official/marriott.svg' },
	{ name: 'Hilton', logo: '/images/brands/official/hilton.svg' },
	{ name: 'IHG', logo: '/images/brands/official/ihg.svg' },
	{ name: 'Accor', logo: '/images/brands/official/accor.svg' },
	{ name: 'Hyatt', logo: '/images/brands/official/hyatt.svg' },
	{ name: 'Kempinski', logo: '/images/brands/official/kempinski.svg' },
	{ name: 'Radisson', logo: '/images/brands/official/radisson.svg' },
	{ name: 'Wyndham', logo: '/images/brands/official/wyndham.svg' },
	{ name: 'Ascott', logo: '/images/brands/ascott.png' },
	{ name: 'Golden Tulip', logo: '/images/brands/golden-tulip.png' },
	{ name: 'BWH', logo: '/images/brands/bwh.png' },
	{ name: 'Roof', logo: '/images/brands/roof.png' },
]

const localBrands = [
	{ name: 'Divan', logo: '/images/brands/divan.png' },
	{ name: 'Dedeman', logo: '/images/brands/dedeman.png' },
	{ name: 'Elite World', logo: '/images/brands/elite-world.png' },
	{ name: 'Anemon', logo: '/images/brands/anemon.png' },
]

export default function FranchiseCollaborations({ topSpacing = '90px' }) {
	return (
		<div className="row" style={{ marginTop: topSpacing }}>
			<div className="col-12">
				<div style={{ background: '#f8f9fd', border: '1px solid #eef2fa', borderRadius: '28px', padding: '34px' }}>
					<div style={{ marginBottom: '36px' }}>
						<h3 style={{ color: '#1B2F5E', fontWeight: '900', fontSize: 'clamp(24px, 2.8vw, 34px)', marginBottom: '8px' }}>
							Global Franchise Isbirliklerimiz
						</h3>
						<p style={{ color: '#606580', marginBottom: '18px', fontSize: '1.05rem' }}>
							Akredite oldugumuz uluslararasi otel markalari
						</p>
						<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
							{globalBrands.map((brand) => (
								<div key={brand.name} style={{ background: '#fff', border: '1px solid #e5eaf5', borderRadius: '12px', padding: '14px 12px', textAlign: 'center', color: '#1B2F5E', fontWeight: '700' }}>
									<div style={{ height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
										<Image
											src={brand.logo}
											alt={`${brand.name} logosu`}
											width={180}
											height={52}
											style={{ width: '100%', maxWidth: '150px', height: '100%', objectFit: 'contain' }}
										/>
									</div>
									<span style={{ fontSize: '13px' }}>{brand.name}</span>
								</div>
							))}
						</div>
					</div>

					<div>
						<h3 style={{ color: '#1B2F5E', fontWeight: '900', fontSize: 'clamp(24px, 2.8vw, 34px)', marginBottom: '8px' }}>
							Yerel Franchise Isbirliklerimiz
						</h3>
						<p style={{ color: '#606580', marginBottom: '18px', fontSize: '1.05rem' }}>
							Akredite oldugumuz yerel otel markalari
						</p>
						<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px' }}>
							{localBrands.map((brand) => (
								<div key={brand.name} style={{ background: '#fff', border: '1px solid #e5eaf5', borderRadius: '12px', padding: '14px 12px', textAlign: 'center', color: '#1B2F5E', fontWeight: '700' }}>
									<div style={{ height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
										<Image
											src={brand.logo}
											alt={`${brand.name} logosu`}
											width={180}
											height={52}
											style={{ width: '100%', maxWidth: '150px', height: '100%', objectFit: 'contain' }}
										/>
									</div>
									<span style={{ fontSize: '13px' }}>{brand.name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
