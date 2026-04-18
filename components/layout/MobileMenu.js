'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useLanguage } from "@/utils/LanguageContext"

export default function MobileMenu() {
	const [activeAccordion, setActiveAccordion] = useState(null)
	const pathname = usePathname()
	const { t } = useLanguage()

	const toggleAccordion = (key) => {
		setActiveAccordion((prev) => (prev === key ? null : key))
	}

	const isActive = (path) => (pathname === path ? "current" : "")
	const isParentActive = (paths = []) => paths.some((path) => pathname.startsWith(path)) ? "active" : ""

	const menuItems = [
		{ title: t('navHome'), path: "/" },
		{ title: t('navAbout'), path: "/about-us" },
		{
			title: t('navOurService'),
			path: "/our-service",
			subMenu: [
				{ title: t('navOurService'), path: "/our-service" },
				{ title: t('navOurService2'), path: "/our-service-02" },
				{ title: t('navServiceDetails'), path: "/service-details" },
			]
		},
		{
			title: t('navBlog'),
			path: "/blog-standard",
		},
		{ title: t('navContact'), path: "/contact" },
	]

	return (
		<ul id="menu-mobile-menu" className="menu">
			{menuItems.map((item, index) => {
				const parentActiveClass = isParentActive(item.subMenu?.map(i => i.path) || [])
				const isSubmenuActive = item.subMenu?.some((sub) => isActive(sub.path) === "current")
				const isOpen = activeAccordion === index || isSubmenuActive

				return (
					<li key={index} className={`menu-item ${item.subMenu ? "menu-item-has-children-mobile" : ""} ${parentActiveClass}`}>
						<Link className={`item-menu-mobile ${isActive(item.path)}`} href={item.path || "#"}>
							{item.title}
							{item.subMenu && (
								<i className={`icon-chevron-down ${isOpen ? "open" : ""}`} onClick={(e) => { e.preventDefault(); toggleAccordion(index) }} />
							)}
						</Link>
						{item.subMenu && (
							<ul className="sub-menu-mobile" style={{ display: isOpen ? "block" : "none" }}>
								{item.subMenu.map((sub, subIndex) => (
									<li key={subIndex} className={`menu-item ${isActive(sub.path)}`}>
										<Link href={sub.path}>{sub.title}</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				)
			})}
		</ul>
	)
}
