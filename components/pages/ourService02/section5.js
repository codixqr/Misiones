'use client'
import { sliderTestimonial2 } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import { useLanguage } from '@/utils/LanguageContext'

export default function Section5() {
	const { t } = useLanguage()

	return (
		<>
			<section className="s-process-2 style-2 tf-spacing-6">
				<div className="bg-image">
					<div className="rellax" data-rellax-speed="0.5" data-bleed={5}>
						<Image
							width="1920"
							height="800"
							src="/images/section/process-2.jpg" 
							alt="Misiones Process" 
							style={{ width: "100%", height: "auto" }}
						/>
					</div>
				</div>
				<div className="tf-overlay" />
				<div className="relative z-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-5">
								<div className="content">
									<p className="s-sub-title mb-15" style={{ color: '#fff' }}>
										<i className="icon-angles-right moveLeftToRight" />
										{t('s2TestimonialSubtitle')}
									</p>
									<p className="s-title mb-40 text-anime-wave text-white">
										{t('s2TestimonialTitle')}
										<span style={{ color: '#C8232C', marginLeft: '10px' }}>
											{t('s2TestimonialTitleSpan')}
										</span>
									</p>
									<p className="text mb-40 text-white" style={{ opacity: 0.8 }}>
										{t('s2TestimonialDesc')}
									</p>
									<div className="bot">
										<div className="btn-slider-tesimonial btn-slide btn-prev style-4" style={{ background: '#C8232C', border: 'none' }}>
											<i className="icon-arrow-left" />
										</div>
										<div className="btn-slider-tesimonial btn-slide btn-next style-4" style={{ background: '#C8232C', border: 'none' }}>
											<i className="icon-arrow-right" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<Swiper {...sliderTestimonial2} className="swiper-container slider-testimonial-2 overflow-hidden">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="wg-testimonial bg-white" style={{ borderRadius: '20px', padding: '40px' }}>
												<div className="icon style-circle mb-40" style={{ color: '#C8232C', background: '#C8232C10' }}>
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30" style={{ color: '#1B2F5E', fontStyle: 'italic', fontSize: '1.2rem' }}>
													"Misiones ekibiyle çalışmak şirketimiz için tam bir dönüm noktası oldu. Operasyonlarımızı hızla analiz ettiler ve verimliliğimizi artırmamıza yardımcı oldular."
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7" style={{ color: '#1B2F5E' }}> Ahmet Yılmaz </Link>
													<p className="duty" style={{ color: '#C8232C' }}>Otel Yatırımcısı</p>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="wg-testimonial bg-white" style={{ borderRadius: '20px', padding: '40px' }}>
												<div className="icon style-circle mb-40" style={{ color: '#C8232C', background: '#C8232C10' }}>
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30" style={{ color: '#1B2F5E', fontStyle: 'italic', fontSize: '1.2rem' }}>
													"Pazarlama stratejimizi Misiones ile yeniden yapılandırdıktan sonra satışlarımızda %30 artış gözlemledik. Profesyonel yaklaşımları takdire şayan."
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7" style={{ color: '#1B2F5E' }}> Mehmet Demir </Link>
													<p className="duty" style={{ color: '#C8232C' }}>Genel Müdür</p>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
