'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section8() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const { t, lang } = useLanguage()

	const mainSwiperOptions = {
		spaceBetween: 0,
		slidesPerView: 1,
		observer: true,
		observeParents: true,
		simulateTouch: true,
		pagination: {
			el: ".swiper-pagination.style-2.tf-pagination",
			clickable: true,
		},
		thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
		modules: [FreeMode, Navigation, Thumbs],
	}

	const thumbnailSwiperOptions = {
		freeMode: true,
		watchSlidesProgress: true,
		modules: [FreeMode, Navigation, Thumbs],
		spaceBetween: 30,
		slidesPerView: 1,
		direction: "horizontal",
		simulateTouch: false,
	}

	const testimonials = lang === 'tr'
		? [
			{
				say: '"Misiones ile çalışmak şirketimiz için gerçek bir dönüm noktası oldu. Ekipleri operasyonlarımızdaki verimsizlikleri hızla tespit etti ve süreçlerimizi iyileştirmemize yardımcı oldu."',
				name: 'Ahmet Y. Karahan',
				duty: 'Genel Müdür, Otelcilik Grubu',
			},
			{
				say: '"Misiones\'ın danışmanlığı sayesinde stratejik hedeflerimize çok daha hızlı ulaştık. Profesyonel yaklaşımları ve derin sektör bilgileri gerçekten etkileyici."',
				name: 'Selin M. Aydın',
				duty: 'CEO, Restoran Zinciri',
			},
		]
		: lang === 'ar' 
		? [
			{
				say: '"كان العمل مع ميسيونيز نقطة تحول حقيقية لشركتنا. لقد حدد فريقهم بسرعة أوجه القصور في عملياتنا وساعدنا في تبسيط عملياتنا."',
				name: 'أحمد ي. كاراهان',
				duty: 'المدير العام، مجموعة الضيافة',
			},
			{
				say: '"بفضل استشارات ميسيونيز، وصلنا إلى أهدافنا الاستراتيجية بشكل أسرع بكثير. إن نهجهم المهني ومعرفتهم العميقة بالصناعة مثيرة للإعجاب حقًا."',
				name: 'سيلين م. أيدين',
				duty: 'الرئيس التنفيذي، سلسلة مطاعم',
			},
		]
		: lang === 'ru'
		? [
			{
				say: '"Работа с Misiones стала переломным моментом для нашей компании. Их команда быстро выявила недостатки в нашей работе и помогла оптимизировать процессы."',
				name: 'Ахмет Ю. Карахан',
				duty: 'Генеральный менеджер, Hospitality Group',
			},
			{
				say: '"Благодаря консалтингу Misiones мы достигли своих стратегических целей гораздо быстрее. Их профессиональный подход и глубокие знания отрасли действительно впечатляют."',
				name: 'Селин М. Айдын',
				duty: 'Генеральный директор, сеть ресторанов',
			},
		]
		: [
			{
				say: '"Working with Misiones was a game changer for our company. Their team quickly identified inefficiencies in our operations and helped us streamline our processes."',
				name: 'Ahmet Y. Karahan',
				duty: 'General Manager, Hospitality Group',
			},
			{
				say: '"Thanks to Misiones\'s consulting, we reached our strategic goals much faster. Their professional approach and deep industry knowledge are truly impressive."',
				name: 'Selin M. Aydın',
				duty: 'CEO, Restaurant Chain',
			},
		]

	return (
		<>
			<section className="s-our-testimonial" style={{ paddingTop: '60px' }}>
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="testimonial-thumbs">
								<Swiper {...thumbnailSwiperOptions} onSwiper={setThumbsSwiper} className="swiper-container slider-testimonial-thumb">
									<div className="swiper-wrapper">
										{testimonials.map((_, i) => (
											<SwiperSlide key={i}>
												<div className="image">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/section/testimonial-thumbs.jpg"
														alt=""
														className="lazyload"
													/>
												</div>
											</SwiperSlide>
										))}
									</div>
								</Swiper>
								<Swiper {...mainSwiperOptions} className="swiper-container slider-testimonial">
									<div className="swiper-wrapper">
										{testimonials.map((item, i) => (
											<SwiperSlide key={i}>
												<div className="wg-testimonial default">
													<div className="icon style-circle mb-40">
														<i className="icon-quote-left-saying-speech" />
													</div>
													<p className="say font-main-2 mb-30 text-clamp-5">
														{item.say}
													</p>
													<div className="bot">
														<Link href="/#" className="name fw-7">{item.name}</Link>
														<p className="duty">{item.duty}</p>
													</div>
												</div>
											</SwiperSlide>
										))}
									</div>
								</Swiper>
								<div className="swiper-pagination tf-pagination style-2"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
