'use client'
import { sliderProject } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import { useLanguage } from '@/utils/LanguageContext'

export default function Section5() {
	const { t } = useLanguage()
	const projects = [
		{ img: '/images/widget/box-project-1.jpg' },
		{ img: '/images/widget/box-project-2.jpg' },
		{ img: '/images/widget/box-project-3.jpg' },
		{ img: '/images/widget/box-project-2.jpg' },
	]
	return (
		<>
			<section className="s-slider-project">
				<Swiper {...sliderProject} className="swiper-container slider-project">
					<div className="swiper-wrapper">
						{projects.map((proj, i) => (
							<SwiperSlide key={i}>
								<div className="box-project tf-hover hover-fade-text">
									<div className="image hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src={proj.img}
											alt={t('project1Title')}
											className="lazyload"
										/>
									</div>
									<div className="tf-overlay" />
									<div className="content">
										<div>
											<Link href="/case-details" className="title fw-7 font-main-2 text-anime-wave-2">
												{t('project1Title')}
											</Link>
											<div className="tag-text-wrap">
												<div className="tf-fade-item fade-1">
													<Link href="/#"> {t('projectTag1')}</Link>
												</div>
												<div className="tf-fade-item fade-2">
													<Link href="/#">, {t('projectTag2')}</Link>
												</div>
												<div className="tf-fade-item fade-3">
													<Link href="/#">, {t('projectTag3')}</Link>
												</div>
											</div>
										</div>
										<Link href="/case-details" className="btn-view icon style-circle">
											<i className="icon-arrow-top-right" />
										</Link>
									</div>
								</div>
							</SwiperSlide>
						))}
					</div>
					<div className="swiper-pagination tf-pagination" />
				</Swiper>
			</section>
		</>
	)
}
