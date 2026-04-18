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
			<li className={`item ${isParentActive(["/our-service", "/our-service-02", "/service-details"])}`}>
				<Link href="/our-service"><span>{t('navServices')}</span></Link>
				<ul className="sub-menu">
					<li className={isActive("/our-service")}><Link href="/our-service">{t('navOurService')}</Link></li>
					<li className={isActive("/our-service-02")}><Link href="/our-service-02">{t('navOurService2')}</Link></li>
					<li className={isActive("/service-details")}><Link href="/service-details">{t('navServiceDetails')}</Link></li>
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
