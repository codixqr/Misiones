
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section1() {
	const { t } = useLanguage()

	return (
		<>
			<section className="s-why-choose-4 tf-spacing-3" style={{ background: '#fff' }}>
				<div className="content-wrap tf-spacing-3">
					<div className="content-left">
						<p className="s-sub-title mb-15" style={{ color: '#C8232C' }}>
							<i className="icon-angles-right moveLeftToRight" />
							{t('s2Subtitle')}
						</p>
						<p className="s-title mb-40 text-anime-wave" style={{ color: '#1B2F5E' }}>
							{t('s2Title')}
							<span style={{ color: '#C8232C', marginLeft: '10px' }}>
								{t('s2TitleSpan')}
							</span>
						</p>
						<p className="text" style={{ color: '#505878' }}>
							{t('s2Desc')}
						</p>
						<ul className="benefit-list style-2">
							<li>
								<div className="icon" style={{ background: '#1B2F5E10', color: '#1B2F5E' }}>
									<i className="icon-check-2" />
								</div>
								<p style={{ color: '#333' }}>
									{t('s2Item1')}
								</p>
							</li>
							<li>
								<div className="icon" style={{ background: '#C8232C10', color: '#C8232C' }}>
									<i className="icon-check-2" />
								</div>
								<p style={{ color: '#333' }}>
									{t('s2Item2')}
								</p>
							</li>
						</ul>
						<Link href="/our-service" className="tf-btn style-3 text-anime-style-1" style={{ background: '#1B2F5E', color: '#fff' }}>
							{t('s2Explore')}
							<i className="icon-chevron-right" />
						</Link>
					</div>
					<div className="image-right">
						<div className="image" style={{ borderRadius: '20px', overflow: 'hidden' }}>
							<Image
								width="600"
								height="500"
								src="/images/section/neden-bizi-secmelisiniz-yeni.jpg" 
								alt="Misiones Strategy" 
								style={{ width: "100%", height: "auto", objectFit: 'cover' }}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
