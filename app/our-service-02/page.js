'use client'
import Layout from "@/components/layout/Layout"
import OurService02 from "@/components/pages/ourService02"
import { useLanguage } from "@/utils/LanguageContext"

export default function Home() {
	const { t } = useLanguage()

	return (
		<>
			<Layout breadcrumbTitle={t('navOurService2')}>
				<OurService02 />
			</Layout>
		</>
	)
}