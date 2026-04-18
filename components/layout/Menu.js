'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/utils/LanguageContext'
import { useState } from 'react'

export default function Menu() {
	const pathname = usePathname()
	const { t } = useLanguage()
	const [servicesOpen, setServicesOpen] = useState(false)

	const isActive = (path) => pathname === path ? "current" : ""
	const isServicesActive = () => ["/our-service", "/our-service-02", "/service-details"].includes(pathname) ? "current" : ""

	return (
		<ul className="nav-list">
			<li className={`item ${isActive("/")}`}>
				<Link href="/"><span>{t('navHome')}</span></Link>
			</li>
			<li className={`item ${isActive("/about-us")}`}>
				<Link href="/about-us"><span>{t('navAbout')}</span></Link>
			</li>
			<li className={`item menu-item-has-children ${isServicesActive()}`}>
				<a href="#!" onClick={(e) => { e.preventDefault(); setServicesOpen(!servicesOpen); }}>
					<span>{t('navOurService')}</span>
					<i className="icon-chevron-down" style={{fontSize: '11px', marginLeft: '6px', opacity: 0.8}} />
				</a>
				<ul className="sub-menu" style={{ display: servicesOpen ? 'block' : 'none' }}>
					<li className={isActive("/our-service")}>
						<Link href="/our-service" onClick={() => setServicesOpen(false)}>{t('navOurService')}</Link>
					</li>
					<li className={isActive("/our-service-02")}>
						<Link href="/our-service-02" onClick={() => setServicesOpen(false)}>{t('navOurService2')}</Link>
					</li>
					<li className={isActive("/service-details")}>
						<Link href="/service-details" onClick={() => setServicesOpen(false)}>{t('navServiceDetails')}</Link>
					</li>
				</ul>
			</li>
			<li className={`item ${isActive("/blog-standard")}`}>
				<Link href="/blog-standard"><span>{t('navBlog')}</span></Link>
			</li>
			<li className={`item ${isActive("/contact")}`}>
				<Link href="/contact"><span>{t('navContact')}</span></Link>
			</li>
		</ul>
	)
}
