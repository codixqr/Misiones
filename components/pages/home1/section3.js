'use client'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section3() {
	const { t } = useLanguage()
	return (
		<>
			<section className="s-service tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-6">
							<div className="content">
								<p className="s-sub-title mb-17" style={{ fontSize: '15px', letterSpacing: '2px' }}>
									<i className="icon-angles-right moveLeftToRight" />
									{t('servicesSubtitle')}
								</p>
								<p className="s-title mb-70 text-anime-wave-right" style={{ fontSize: 'clamp(38px, 4.1vw, 58px)', lineHeight: '1.12' }}>
									{t('servicesTitle')}
								</p>
								<div className="image tf-hover mb-40">
									<div className="hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto", borderRadius: '12px' }}
											src="/images/section/otel-yonetim-danismanligi.jpg"
											alt="MISIONES otelcilik danışmanlığı"
											className="lazyload tf-animate-2"
										/>
									</div>
								</div>
								<p className="text mb-30" style={{ fontSize: 'clamp(20px, 1.4vw, 24px)', lineHeight: '1.7', color: '#59617D' }}>
									{t('servicesDesc')}
								</p>
								<div className="bot">
									<div className="counter-wrap">
										<div className="wg-counter">
											<div className="odometer"><CounterUp count={50} /></div>
											<span className="sub-odo">+</span>
										</div>
										<p className="sub-counter font-main-3 lh-21">
											{t('satisfiedClients')}
										</p>
									</div>
									<span className="line style-stand" />
									<Link href="/our-service" className="tf-btn style-3">
										{t('exploreServices')} <i className="icon-chevron-right" />
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5 offset-lg-1">
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
								<div className="icon hover-icon-2">
									<i className="flaticon-data-management" />
								</div>
								<Link href="/our-service?cat=yatirim" className="title fw-7" style={{ fontSize: 'clamp(23px, 1.65vw, 30px)', lineHeight: '1.3' }}>
									{t('service1Title')}
								</Link>
								<p className="text" style={{ fontSize: '18px', lineHeight: '1.7' }}>
									{t('service1Desc')}
								</p>
								<Link href="/our-service?cat=yatirim" className="tf-btn-readmore style-3">
									{t('readMore')}
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0.1s">
								<div className="icon hover-icon-2">
									<i className="flaticon-human-resources" />
								</div>
								<Link href="/our-service?cat=marka" className="title fw-7" style={{ fontSize: 'clamp(23px, 1.65vw, 30px)', lineHeight: '1.3' }}>
									{t('service2Title')}
								</Link>
								<p className="text" style={{ fontSize: '18px', lineHeight: '1.7' }}>
									{t('service2Desc')}
								</p>
								<Link href="/our-service?cat=marka" className="tf-btn-readmore style-3">
									{t('readMore')}
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0.2s">
								<div className="icon hover-icon-2">
									<i className="flaticon-target-1" />
								</div>
								<Link href="/our-service?cat=gelir" className="title fw-7" style={{ fontSize: 'clamp(23px, 1.65vw, 30px)', lineHeight: '1.3' }}>
									{t('service3Title')}
								</Link>
								<p className="text" style={{ fontSize: '18px', lineHeight: '1.7' }}>
									{t('service3Desc')}
								</p>
								<Link href="/our-service?cat=gelir" className="tf-btn-readmore style-3">
									{t('readMore')}
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0.3s">
								<div className="icon hover-icon-2">
									<i className="flaticon-target" />
								</div>
								<Link href="/our-service?cat=hip" className="title fw-7" style={{ fontSize: 'clamp(23px, 1.65vw, 30px)', lineHeight: '1.3' }}>
									{t('service4Title')}
								</Link>
								<p className="text" style={{ fontSize: '18px', lineHeight: '1.7' }}>
									{t('service4Desc')}
								</p>
								<Link href="/our-service?cat=hip" className="tf-btn-readmore style-3">
									{t('readMore')}
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0.4s">
								<div className="icon hover-icon-2">
									<i className="flaticon-building" />
								</div>
								<Link href="/our-service?cat=broker" className="title fw-7" style={{ fontSize: 'clamp(23px, 1.65vw, 30px)', lineHeight: '1.3' }}>
									{t('service5Title')}
								</Link>
								<p className="text" style={{ fontSize: '18px', lineHeight: '1.7' }}>
									{t('service5Desc')}
								</p>
								<Link href="/our-service?cat=broker" className="tf-btn-readmore style-3">
									{t('readMore')}
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
