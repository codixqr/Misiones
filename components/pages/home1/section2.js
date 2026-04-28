'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section2() {
	const { t } = useLanguage()
	const globalBrands = [
		{ name: 'Marriott', logo: '/images/brands/marriott.png' },
		{ name: 'Hilton', logo: '/images/brands/hilton.png' },
		{ name: 'IHGE', logo: '/images/brands/ihge.png' },
		{ name: 'Accor', logo: '/images/brands/accor.png' },
		{ name: 'Hyatt', logo: '/images/brands/hyatt.png' },
		{ name: 'Kempinski', logo: '/images/brands/kempinski.png' },
		{ name: 'Radisson', logo: '/images/brands/radisson.png' },
		{ name: 'Wyndham', logo: '/images/brands/wyndham.png' },
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
	return (
		<>
			<section className="s-about-company tf-spacing-2">
				<div className="relative z-5">
					<div className="tf-container">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="content-section">
									<p className="s-sub-title" style={{ fontSize: '15px', letterSpacing: '2px', marginBottom: '16px' }}>
										<i className="icon-angles-right moveLeftToRight" />
										{t('aboutSubtitle')}
									</p>
									<p className="s-title mb-60 text-anime-wave-right text-clamp-4" style={{ fontSize: 'clamp(36px, 4.2vw, 56px)', lineHeight: '1.15' }}>
										{t('aboutTitle')} <span>{t('aboutTitleSpan')}</span>
									</p>
									<ul className="list mb-50">
										<li>
											<p className="font-main-2" style={{ fontSize: 'clamp(34px, 3.7vw, 50px)', lineHeight: '1.12', color: '#1B2F5E', marginBottom: '12px' }}>
												{t('missionTitle')}
											</p>
											<p className="text" style={{ fontSize: '1.35rem', lineHeight: '1.75', color: '#59617D' }}>
												{t('missionText')}
											</p>
										</li>
										<li>
											<p className="font-main-2" style={{ fontSize: 'clamp(38px, 4vw, 54px)', lineHeight: '1.12', color: '#1B2F5E', marginBottom: '12px' }}>
												{t('visionTitle')}
											</p>
											<p className="text" style={{ fontSize: '1.35rem', lineHeight: '1.75', color: '#59617D' }}>
												{t('visionText')}
											</p>
										</li>
									</ul>
									<Link href="/about-us" className="tf-btn">
										{t('learnMore')}
										<i className="icon-chevron-right" />
									</Link>
								</div>
							</div>

							<div className="col-lg-5 offset-lg-1">
								{/* image-wrap: orijinal template tasarımı */}
								<div className="image-wrap" style={{ position: 'relative', paddingBottom: '60px' }}>
									{/* Dekoratif kırmızı yarım daire - sol alt */}
									<div style={{
										position: 'absolute',
										bottom: '-10px',
										left: '-30px',
										width: '180px',
										height: '180px',
										borderRadius: '50%',
										background: '#C8232C',
										zIndex: 1,
										clipPath: 'inset(0 50% 0 0)',
									}} />
									{/* Dekoratif lacivert tam daire - sağ alt */}
									<div style={{
										position: 'absolute',
										bottom: '-20px',
										right: '-20px',
										width: '200px',
										height: '200px',
										borderRadius: '50%',
										background: '#1B2F5E',
										zIndex: 1,
									}} />
									{/* Küçük kırmızı vurgu dairesi */}
									<div style={{
										position: 'absolute',
										bottom: '10px',
										right: '60px',
										width: '48px',
										height: '48px',
										borderRadius: '50%',
										background: '#C8232C',
										zIndex: 3,
									}} />
									{/* Portre fotoğraf - dairelerin üzerinde */}
									<div style={{
										position: 'relative',
										zIndex: 2,
										borderRadius: '20px',
										overflow: 'hidden',
										boxShadow: '0 20px 60px rgba(27,47,94,0.3)',
									}}>
										<Image
											width={600}
											height={680}
											sizes="(max-width: 768px) 100vw, 600px"
											style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', objectPosition: 'center top' }}
											src="/images/section/nevzat-celebi.jpg"
											alt="Nevzat Ahmet Çelebi – Misiones"
											priority
										/>
										{/* İsim overlay */}
										<div style={{
											position: 'absolute', bottom: 0, left: 0, right: 0,
											background: 'linear-gradient(to top, rgba(15,30,62,0.95) 0%, rgba(15,30,62,0.5) 70%, transparent 100%)',
											padding: '36px 28px 24px',
										}}>
											<p style={{ color: '#C8232C', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '5px' }}>
												Kurucu & Baş Danışman
											</p>
											<h3 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: '800', margin: '0 0 4px' }}>
												Nevzat Ahmet Çelebi
											</h3>
											<p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', margin: 0 }}>
												MISIONES Hotel Industry Experience Consulting
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-70">
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
													<Image
														src={brand.logo}
														alt={`${brand.name} logosu`}
														width={140}
														height={56}
														style={{ width: 'auto', height: '40px', objectFit: 'contain', margin: '0 auto 8px' }}
													/>
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
													<Image
														src={brand.logo}
														alt={`${brand.name} logosu`}
														width={140}
														height={56}
														style={{ width: 'auto', height: '40px', objectFit: 'contain', margin: '0 auto 8px' }}
													/>
													<span style={{ fontSize: '13px' }}>{brand.name}</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
