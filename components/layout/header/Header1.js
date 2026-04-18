'use client'
import Image from "next/image"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import LanguageSwitcher from "@/components/elements/LanguageSwitcher"
import { useLanguage } from "@/utils/LanguageContext"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleWelcomeBox, isWelcomeBox }) {
	const { t } = useLanguage()
	return (
		<>
			<div className="tf-topbar">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="topbar-inner">
								<div className="topbar-left">
									<div className="icon">
										<i className="flaticon-tag" />
									</div>
									<p>{t('topbarWelcome')}</p>
								</div>
								<div className="topbar-right">
									<ul className="infor-list">
										<li>
											<div className="icon">
												<i className="flaticon-open-mail" />
											</div>
										<Link href="mailto:contact@misiones.com.tr">
											contact@misiones.com.tr
										</Link>
									</li>
									<li>
										<div className="icon">
											<i className="flaticon-phone-call" />
										</div>
										<p>
											{t('call')} :<Link href="tel:+905323231754"> +90 532 323 17 54
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="flaticon-clock" />
										</div>
										<a>{t('workingHours')}</a>
									</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<header className={`tf-header${scroll ? " is-fixed" : ""}`}>
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="header-inner">
								<div className="header-left">
									<div className="logo-site">
										<Link href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
											<div style={{ background: '#ffffff', borderRadius: '10px', padding: '4px 10px', display: 'inline-flex', alignItems: 'center' }}>
												<Image
													width="320"
													height="74"
													id="logo_header"
													src="/images/logo/misiones-logo-full.png"
													alt="Misiones"
													style={{
														height: '58px',
														width: 'auto',
														objectFit: 'contain',
														display: 'block',
													}}
												/>
											</div>
										</Link>
									</div>
								</div>
								<div className="header-center">
									<nav className="main-nav">
										<Menu />
									</nav>
								</div>
								<div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
									<Link href="/contact" className="tf-btn small">
										{t('getInTouch')}
										<i className="icon-chevron-right" />
									</Link>
									<LanguageSwitcher />
									<div className="union mobile-button" onClick={handleMobileMenu}>
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div>
									<div className="union btn-open-welcome" onClick={handleWelcomeBox}>
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div>
								</div>
							</div>
							<div className={isMobileMenu ? "mobile-nav-wrap active" : "mobile-nav-wrap"}>
								<div className="overlay-mobile-nav" onClick={handleMobileMenu} />
								<div className="inner-mobile-nav overflow-y-auto">
									<div className="top">
									<div className="logo">
										<Link href="/" rel="home" className="main-logo" style={{ display: 'inline-flex', textDecoration: 'none' }}>
											<div style={{ background: '#ffffff', borderRadius: '8px', padding: '4px 10px', display: 'inline-flex', alignItems: 'center' }}>
												<Image
													width="260"
													height="60"
													id="mobile-logo_header"
													alt="Misiones"
													src="/images/logo/misiones-logo-full.png"
													style={{
														height: '48px',
														width: 'auto',
														objectFit: 'contain',
														display: 'block',
													}}
												/>
											</div>
										</Link>
											<div className="mobile-nav-close" onClick={handleMobileMenu}>
												<i className="icon-xmark" />
											</div>
										</div>
										<nav id="mobile-main-nav" className="mobile-main-nav">
											<MobileMenu />
										</nav>
									</div>
									<div className="bottom">
										<div className="wrap">
											<p className="title">
												{t('contactUs')}
											</p>
											<ul className="contact-list mb-20">
												<li>
													<p>
														{t('address')}: <Link href="https://maps.google.com/?q=Yeşilbahçe+Mah.+1456+Sok.+No:26+Muratpaşa+Antalya" target="_blank">
															Yeşilbahçe Mah. 1456 Sok. No: 26<br />07160 Muratpaşa, ANTALYA
														</Link>
													</p>
												</li>
												<li>
													<p>
														{t('email')}: <Link href="mailto:info@misiones.com.tr">
															info@misiones.com.tr
														</Link>
													</p>
												</li>
												<li>
													<p>
														{t('call')}: <Link href="tel:+905323231754">
															+90 532 323 17 54
														</Link>
													</p>
												</li>
											</ul>
											<ul className="social-list">
												<li>
													<Link href="/#">
														<i className="icon-facebook" />
													</Link>
												</li>
												<li>
													<Link href="/#">
														<i className="icon-twitter" />
													</Link>
												</li>
												<li>
													<Link href="/#">
														<i className="icon-linkedin" />
													</Link>
												</li>
												<li>
													<Link href="/#">
														<i className="icon-youtube" />
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
