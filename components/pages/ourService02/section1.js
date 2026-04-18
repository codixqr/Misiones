
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
								src="/images/section/service-yatirim.jpg" 
								alt="Misiones Strategy" 
								style={{ width: "100%", height: "auto", objectFit: 'cover' }}
							/>
						</div>
					</div>
				</div>
				<div className="content-wrap wrap-2">
					<div className="image-left relative">
						<div className="image" style={{ borderRadius: '20px', overflow: 'hidden' }}>
							<Image
								width="600"
								height="500"
								src="/images/section/service-marka.jpg" 
								alt="Misiones Excellence" 
								style={{ width: "100%", height: "auto", objectFit: 'cover' }}
							/>
						</div>
					</div>
					<div className="content-right">
						<p className="s-title text-anime-wave" style={{ color: '#1B2F5E' }}>
							{t('s2SmartChoice')}
						</p>
						<ul className="list">
							<li className="wow fadeInUp" data-wow-delay="0s">
								<div className="number" style={{ background: '#1B2F5E', color: '#fff' }}>
									<p>1</p>
								</div>
								<div>
									<h4 className="title" style={{ color: '#1B2F5E', fontWeight: '700' }}>
										{t('s2Solution1Title')}
									</h4>
									<p style={{ color: '#505878' }}>
										{t('s2Solution1Desc')}
									</p>
								</div>
							</li>
							<li className="wow fadeInUp" data-wow-delay="0.1s">
								<div className="number" style={{ background: '#C8232C', color: '#fff' }}>
									<p>2</p>
								</div>
								<div>
									<h4 className="title" style={{ color: '#1B2F5E', fontWeight: '700' }}>
										{t('s2Solution2Title')}
									</h4>
									<p style={{ color: '#505878' }}>
										{t('s2Solution2Desc')}
									</p>
								</div>
							</li>
							<li className="wow fadeInUp" data-wow-delay="0.2s">
								<div className="number" style={{ background: '#1B2F5E', color: '#fff' }}>
									<p>3</p>
								</div>
								<div>
									<h4 className="title" style={{ color: '#1B2F5E', fontWeight: '700' }}>
										{t('s2Solution3Title')}
									</h4>
									<p style={{ color: '#505878' }}>
										{t('s2Solution3Desc')}
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}
