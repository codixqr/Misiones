'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'
import { getServiceData2 } from '@/utils/serviceData2'

export default function Section3() {
	const { t } = useLanguage()
	const services = getServiceData2(t)

	return (
		<>
			<section className="s-service-4 tf-spacing-1">
				<div className="tf-overlay" />
				<div className="bg-image">
					<div className="rellax" data-rellax-speed="0.4">
						<Image
							width="1920"
							height="800"
							src="/images/section/bg-service.jpg" 
							alt="Misiones Services Background" 
							style={{ width: "100%", height: "auto" }}
						/>
					</div>
				</div>
				<div className="relative z-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-12">
								<div className="heading mb-70">
									<p className="s-sub-title mb-15 justify-center text-white">
										<i className="icon-angles-right moveLeftToRight" />
										{t('s2ConsultingSubtitle')}
									</p>
									<p className="s-title text-center text-white text-anime-wave">
										{t('s2ConsultingTitle')}
										<span style={{ color: '#fff' }}>
											<br />{t('s2ConsultingTitleSpan')}
										</span>
									</p>
								</div>
								<div className="grid-layout-3">
									{services.map((service) => (
										<div className="card-service-2 style-2 tf-hover-icon wow fadeInUp" data-wow-delay={service.delay} key={service.id}>
											<div className="content" style={{ background: '#fff', borderRadius: '20px', padding: '40px' }}>
												<div className="icon hover-icon-2" style={{ color: '#C8232C' }}>
													<i className={service.icon} />
												</div>
												<Link href={service.link} className="title fw-7" style={{ color: '#1B2F5E', fontSize: '1.5rem' }}>
													{service.title}
												</Link>
												<p className="text" style={{ color: '#505878' }}>
													{service.desc}
												</p>
												<Link href={service.link} className="tf-btn-readmore style-3" style={{ color: '#C8232C' }}>
													{t('readMore')}
													<i className="icon-chevron-right" />
												</Link>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				.card-service-2:hover {
					transform: translateY(-10px);
					transition: all 0.3s ease;
				}
				.card-service-2:hover .title {
					color: #C8232C !important;
				}
			`}</style>
		</>
	)
}
