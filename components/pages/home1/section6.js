'use client'
import { sliderTeam } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import { useLanguage } from '@/utils/LanguageContext'

const teamMembers = [
	{ name: 'Daniel L. Braddock', img: '/images/avatar/team-member-1.jpg', first: true },
	{ name: 'Michael B. Reader', img: '/images/avatar/team-member-2.jpg' },
	{ name: 'Robert M. Carlson', img: '/images/avatar/team-member-3.jpg' },
	{ name: 'Jonathon D. Foutch', img: '/images/avatar/team-member-4.jpg', last: true },
	{ name: 'Robert M. Carlson', img: '/images/avatar/team-member-3.jpg' },
	{ name: 'Jonathon D. Foutch', img: '/images/avatar/team-member-4.jpg', last: true },
]

export default function Section6() {
	const { t } = useLanguage()
	return (
		<>
			<section className="s-team">
				<div className="tf-marquee slider-saylo style-2">
					<div className="wrap-marquee">
						{[...Array(10)].map((_, i) => (
							<div className="marquee-item" key={i}>
								<p className="font-main-2 text">
									{t('teamMarquee')}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="flex justify-space-between item-center mb-70">
								<div className="content">
									<p className="s-sub-title mb-17">
										<i className="icon-angles-right moveLeftToRight" />
										{t('teamSubtitle')}
									</p>
									<p className="s-title letter-space-0 text-anime-wave-right">
										{t('teamTitle')} <span>{t('teamTitleSpan')}</span>
									</p>
								</div>
								<Link href="/team-member" className="tf-btn style-3">
									{t('exploreTeam')}
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<Swiper {...sliderTeam} className="swiper-container slider-team">
					<div className="swiper-wrapper">
						{teamMembers.map((member, i) => (
							<SwiperSlide key={i}>
								<div className={`card-member tf-hover${member.first ? ' first' : ''}${member.last ? ' last' : ''}`}>
									<Link href="/team-details">
										<div className="image hover-14 hover-1">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src={member.img}
												alt={member.name}
												className="lazyload"
											/>
										</div>
									</Link>
									<div className="content">
										<Link href="/team-details" className="name">{member.name}</Link>
										<p className="duty">{t('consultant')}</p>
										<ul className="social-list style-5 style-4">
											<li><Link href="/team-details"><i className="icon-facebook" /></Link></li>
											<li><Link href="/team-details"><i className="icon-twitter" /></Link></li>
											<li><Link href="/team-details"><i className="icon-linkedin" /></Link></li>
											<li><Link href="/team-details"><i className="icon-youtube" /></Link></li>
										</ul>
									</div>
								</div>
							</SwiperSlide>
						))}
					</div>
					<div className="tf-overlay" />
				</Swiper>
			</section>
		</>
	)
}
