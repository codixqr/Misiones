'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { TypeAnimation } from "react-type-animation"
import { useLanguage } from '@/utils/LanguageContext'

function CircularBadge() {
	const text = 'HOSPITALITY INNOVATION & CONSULTANCY • '
	const chars = text.split('')
	const numChars = chars.length
	const radius = 76
	const cx = 100
	const cy = 100

	return (
		<div className="misiones-circle-badge">
			{/* SVG'nin kendisi DÖNSÜN, içindeki her şey döner — ama logo kontr-dönüşle sabitlenir */}
			<svg
				viewBox="0 0 200 200"
				xmlns="http://www.w3.org/2000/svg"
				className="misiones-circle-svg"
				style={{ overflow: 'visible' }}
			>
				{/* 1. Statik: kırmızı dış daire */}
				<circle cx={cx} cy={cy} r="99" fill="#C8232C" />
				{/* 2. Statik: beyaz iç daire */}
				<circle cx={cx} cy={cy} r="54" fill="white" />

				{/* 3. SADECE yazılar dönen grup (SVG animateTransform) */}
				<g>
					<animateTransform
						attributeName="transform"
						attributeType="XML"
						type="rotate"
						from={`0 ${cx} ${cy}`}
						to={`360 ${cx} ${cy}`}
						dur="20s"
						repeatCount="indefinite"
					/>
					{chars.map((char, i) => {
						const angle = (360 / numChars) * i - 90
						const rad = (angle * Math.PI) / 180
						const x = cx + radius * Math.cos(rad)
						const y = cy + radius * Math.sin(rad)
						const rotation = angle + 90
						return (
							<text
								key={i}
								x={x}
								y={y}
								fill="white"
								fontSize="8.5"
								fontWeight="700"
								fontFamily="'Public Sans', Arial, sans-serif"
								textAnchor="middle"
								dominantBaseline="central"
								transform={`rotate(${rotation}, ${x}, ${y})`}
							>
								{char}
							</text>
						)
					})}
				</g>

				{/* 4. Statik merkez logo — animasyonun dışında */}
				<image
					href="/images/logo/misiones-icon-clean.png"
					x="60"
					y="60"
					width="80"
					height="80"
				/>
			</svg>
		</div>
	)
}

export default function Hero1() {
	const [isOpen, setOpen] = useState(false)
	const { t } = useLanguage()

	return (
		<>
		<div className="page-title-home-1" style={{ background: 'linear-gradient(135deg, #1B2F5E 0%, #0f1e3e 100%)', color: '#ffffff' }}>
			<div style={{ padding: '32px 0 56px' }}>
					<div className="tf-container w-1780">
						<div className="row misiones-hero-row" style={{ alignItems: 'stretch' }}>
							<div className="col-lg-6" style={{ display: 'flex' }}>
								<div className="content" style={{ width: '100%', padding: '48px 42px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
									<p className="s-sub-title mb-20" style={{ color: 'rgba(255,255,255,0.88)', letterSpacing: '2.6px', fontSize: '15px', lineHeight: '1.5', textTransform: 'uppercase' }}>
										<i className="icon-angles-right moveLeftToRight" style={{ color: '#C8232C' }} />
										{t('heroSubtitle')}
									</p>
									<p className="mb-28 fw-7" style={{ color: '#ffffff', lineHeight: 1.08, fontSize: 'clamp(44px, 5.3vw, 78px)' }}>
										{t('heroTitle')} <br />
										{t('heroTitleAnd')}
										<span style={{ color: '#C8232C', display: 'inline-block', marginLeft: '10px' }}>
											<TypeAnimation
												sequence={[
													t('heroWord1'),
													1200,
													t('heroWord2'),
													1200,
													t('heroWord3'),
													1200,
												]}
												wrapper="span"
												speed={50}
												repeat={Infinity}
											/>
										</span>
									</p>
									<span className="line" style={{ background: '#C8232C', display: 'block', height: '2px', width: '60px', marginBottom: '28px' }} />
									<p className="fw-5" style={{ color: 'rgba(255,255,255,0.92)', fontSize: 'clamp(19px, 1.45vw, 24px)', lineHeight: '1.65', maxWidth: '640px', marginBottom: 0 }}>
										{t('heroDesc')}
									</p>
									<div className="bot" style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '40px' }}>
										<Link href="/our-service" className="tf-btn" style={{ background: '#C8232C', color: '#fff' }}>
											{t('heroBtn')}
											<i className="icon-chevron-right" />
										</Link>
										<div className="video-wrap">
											<a onClick={() => setOpen(true)} className="popup-youtube fs-14 fw-7" style={{ color: 'rgba(255,255,255,0.9)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
												<span className="icon style-circle" style={{ background: '#C8232C' }}>
													<span className="bg" />
													<span className="wave-3" />
													<i className="icon-play fs-12" style={{ color: '#fff' }} />
												</span>
												{t('heroVideo')}
											</a>
										</div>
									</div>
								</div>
							</div>
						<div className="col-lg-6" style={{ display: 'flex' }}>
							<div className="image-wrap" style={{ position: 'relative', width: '100%', height: '100%' }}>
								<div className="image" style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.35)', height: '100%', minHeight: 'clamp(420px, 55vw, 640px)' }}>
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "100%", display: 'block', objectFit: 'cover' }}
										src="/images/section/misiones-hero.jpg"
										alt="Misiones Danışmanlık"
										priority
									/>
								</div>
						<CircularBadge />
								</div>
							</div>
						</div>
					</div>
				</div>
			<div className="tf-marquee slider-saylo hero-mini-marquee" style={{ background: '#C8232C', padding: '4px 0' }}>
				<div className="wrap-marquee">
					{[...Array(10)].map((_, i) => (
						<div className="marquee-item" key={i}>
							<p className="font-main-2 text" style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1', margin: 0 }}>
								{t('marqueeText')}
							</p>
						</div>
					))}
				</div>
			</div>
			</div>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
