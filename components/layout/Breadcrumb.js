import Image from "next/image"
import Link from "next/link"

const BRAND = "Misiones Danışmanlık"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbAlt }) {
	const words = breadcrumbTitle?.split(" ")
	const formattedTitle = words?.length > 1 ? (
		<>
			{words[0]} <span>{words?.slice(1).join(" ")}</span>
		</>
	) : (
		breadcrumbTitle
	)

	const MarqueeBar = ({ style = {} }) => (
		<div className="tf-marquee slider-saylo mt-65" style={{ background: '#1B2F5E', ...style }}>
			<div className="wrap-marquee">
				{Array(10).fill(BRAND).map((text, i) => (
					<div className="marquee-item" key={i}>
						<p className="font-main-2 text" style={{ color: '#fff' }}>{text}</p>
					</div>
				))}
			</div>
		</div>
	)

	return (
		<>
			{breadcrumbTitle &&
				<div className="tf-page-title">
					<div className="content-wrap">
						<div className="bg-image">
							<div className="rellax" data-rellax-speed={-10}>
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/page-title/page-title.jpg"
									alt=""
								/>
							</div>
						</div>
						<div className="tf-overlay" />
						<div className="content">
							<div className="tf-container">
								<div className="row">
									<div className="col-lg-12">
										<p className="title">{formattedTitle}</p>
										<div className="breadcrums">
											<Link href="/">Ana Sayfa</Link>
											<div className="icon">
												<i className="icon-chevron-r" />
											</div>
											<Link href="/#" className="current">
												{formattedTitle}
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<MarqueeBar />
				</div>
			}

			{breadcrumbAlt === 1 &&
				<div className="tf-page-title style-2">
					<div className="content-wrap">
						<div className="bg-image">
							<div className="rellax" data-rellax-speed={-10}>
								<img src="/images/page-title/page-title.jpg" alt="" />
							</div>
						</div>
						<div className="tf-overlay" />
						<div className="content">
							<div className="tf-container">
								<div className="row">
									<div className="col-lg-12">
										<div className="breadcrums">
											<Link href="/">Ana Sayfa</Link>
											<div className="icon"><i className="icon-chevron-r" /></div>
											<Link href="#" className="current">Blog Detayı</Link>
										</div>
										<h2>
											Danışmanlık Ajansının İş Dünyasında<br />
											Yeniliği Sürüklemedeki Rolü
										</h2>
										<div className="entry-meta style-2">
											<ul className="meta-list">
												<li className="entry author">
													<div className="icon"><i className="icon-user" /></div>
													<Link href="#">Misiones Ekibi</Link>
												</li>
												<li className="entry date">
													<div className="icon"><i className="icon-calendar-days" /></div>
													<Link href="#">Nisan 2026</Link>
												</li>
												<li className="entry comment">
													<div className="icon"><i className="icon-comments" /></div>
													<Link href="#">Yorumlar (05)</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<MarqueeBar style={{ marginTop: 0 }} />
				</div>
			}

			{breadcrumbAlt === 2 &&
				<div className="tf-page-title">
					<div className="content-wrap">
						<div className="bg-image">
							<div className="rellax" data-rellax-speed={-10}>
								<img src="/images/page-title/page-title-2.jpg" alt="" />
							</div>
						</div>
						<div className="tf-overlay" />
						<div className="content">
							<div className="tf-container">
								<div className="row">
									<div className="col-lg-12">
										<p className="title mb-30">
											Pazarlama <span className="ms-2">Danışmanlığı</span>
										</p>
										<div className="breadcrums">
											<Link href="/">Ana Sayfa</Link>
											<div className="icon"><i className="icon-chevron-r" /></div>
											<Link href="/our-service">Hizmetlerimiz</Link>
											<div className="icon"><i className="icon-chevron-r" /></div>
											<Link href="#" className="current">Pazarlama Danışmanlığı</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<MarqueeBar style={{ marginTop: 0 }} />
				</div>
			}
		</>
	)
}
