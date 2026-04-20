'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/utils/LanguageContext'

export default function Footer1() {
	const [isAccordion1, setIsAccordion1] = useState(0)
	const [isAccordion2, setIsAccordion2] = useState(0)
	const [isAccordion3, setIsAccordion3] = useState(0)
	const [isDesktop, setIsDesktop] = useState(false)
	const { t } = useLanguage()

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768)
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const handleAccordion1 = (key) => {
		if (!isDesktop) setIsAccordion1((prev) => (prev === key ? null : key))
	}
	const handleAccordion2 = (key) => {
		if (!isDesktop) setIsAccordion2((prev) => (prev === key ? null : key))
	}

	const getDisplayStyle1 = (key) => isDesktop ? 'block' : isAccordion1 === key ? 'block' : 'none'
	const getDisplayStyle2 = (key) => isDesktop ? 'block' : isAccordion2 === key ? 'block' : 'none'

	return (
		<>
		<footer className="tf-footer style-2">
			<div className="footer-inner-border">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-12">
								<div className="footer-inner">
									<div className="inner-left">
										<div className={`footer-inner-wrap footer-col-block ${isAccordion1 === 1 ? 'open' : ''}`}>
											<p className="footer-title footer-title-desktop">{t('footerServices')}</p>
											<p className="footer-title footer-title-mobile" onClick={() => handleAccordion1(1)}>{t('footerServices')}</p>
											<ul className="list tf-collapse-content" style={{ display: getDisplayStyle1(1) }}>
												<li><Link href="/our-service">{t('footerService1')}</Link></li>
												<li><Link href="/our-service">{t('footerService2')}</Link></li>
												<li><Link href="/our-service">{t('footerService3')}</Link></li>
												<li><Link href="/our-service">{t('footerService4')}</Link></li>
												<li><Link href="/hip">{t('footerService5')}</Link></li>
											</ul>
										</div>
										<div className={`footer-inner-wrap footer-col-block ${isAccordion2 === 1 ? 'open' : ''}`}>
											<p className="footer-title footer-title-desktop">{t('footerQuickLinks')}</p>
											<p className="footer-title footer-title-mobile" onClick={() => handleAccordion2(1)}>{t('footerQuickLinks')}</p>
											<ul className="list tf-collapse-content" style={{ display: getDisplayStyle2(1) }}>
												<li><Link href="/about-us">{t('footerLink1')}</Link></li>
												<li><Link href="/our-service">{t('footerLink3')}</Link></li>
												<li><Link href="/contact">{t('footerLink4')}</Link></li>
											</ul>
										</div>
									</div>
									<div className="inner-right">
										<div className="logo-site">
											<Link href="/" style={{ display: 'inline-flex', textDecoration: 'none' }}>
												<div style={{ background: '#ffffff', borderRadius: '10px', padding: '6px 12px', display: 'inline-flex', alignItems: 'center' }}>
													<Image
														width="320"
														height="74"
														id="logo_footer"
														src="/images/logo/misiones-logo-full.png"
														alt="Misiones"
														style={{
															height: '56px',
															width: 'auto',
															objectFit: 'contain',
															display: 'block',
														}}
													/>
												</div>
											</Link>
										</div>
										<p>{t('footerNewsletterDesc')}</p>
										<div className="footer-social-links">
											<Link href="https://www.instagram.com/misionescom?igsh=MW15OXdqZWl1cXE2aQ==" target="_blank" rel="noopener noreferrer" title="Instagram">
												<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
											</Link>
											<Link href="https://www.linkedin.com/company/misionestr/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
												<i className="icon-linkedin" />
											</Link>
											<Link href="https://www.facebook.com/share/1B2Wt8rAwu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" title="Facebook">
												<i className="icon-facebook" />
											</Link>
										</div>
										<form action="#" id="form-sub" className="form-sub style-4" style={{ marginTop: '16px' }}>
											<fieldset>
												<div className="icon">
													<i className="icon-envelope" />
												</div>
												<input type="text" placeholder={t('footerEmailPlaceholder')} required />
											</fieldset>
											<button type="submit" className="tf-btn">
												{t('footerSubscribe')}
												<i className="icon-chevron-right" />
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="footer-bottom">
								<Link href="/#" className="footer-go-top">
									<i className="icon-arrow-top fs-8"> </i>
								</Link>
								<p className="no-copy style-2">
									Copyright © {new Date().getFullYear()} <span> Misiones </span> — {t('footerCopyright')}.
								</p>
								<div className="policy-list">
									<ul className="list">
										<li><Link href="/terms-of-use">{t('footerTerms')}</Link></li>
										<li><span className="dot" /></li>
										<li><Link href="/privacy-policy">{t('footerPrivacy')}</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
