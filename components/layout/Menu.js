'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/utils/LanguageContext'

export default function Menu() {
	const pathname = usePathname()
	const { t } = useLanguage()

	const isActive = (path) => pathname === path ? "current" : ""
	const isParentActive = (paths) => paths.some(path => pathname.startsWith(path)) ? "current" : ""

	return (
		<ul className="nav-list">
			<li className={`item ${isActive("/")}`}>
				<Link href="/"><span>{t('navHome')}</span></Link>
			</li>
			<li className={`item ${isActive("/about-us")}`}>
				<Link href="/about-us"><span>{t('navAbout')}</span></Link>
			</li>
			<li className={`item ${isActive("/our-service")}`}>
				<Link href="/our-service"><span>{t('navOurService')}</span></Link>
			</li>
			<li className={`item ${isActive("/our-service-02")}`}>
				<Link href="/our-service-02"><span>{t('navOurService2')}</span></Link>
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
