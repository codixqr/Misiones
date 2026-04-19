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
			<li className={`item ${isActive("/our-service")}`}>
				<Link href="/our-service">
					<span>{t('navOurService')}</span>
				</Link>
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
