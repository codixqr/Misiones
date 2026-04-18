'use client'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section2() {
	const { t } = useLanguage()

	return (
		<>
			<section className="s-break style-2" style={{ background: '#1B2F5E', padding: '15px 0' }}>
				<div className="tf-marquee type-2 default text-run">
					<div className="wrap-marquee">
						{[1, 2, 3, 4, 5].map((i) => (
							<div key={i} style={{ display: 'inline-flex' }}>
								<div className="marquee-item">
									<div className="s1">
										<p style={{ color: '#fff', fontSize: '1.2rem' }}>
											{t('s2Marquee1')}
											<Link href="/contact" style={{ color: '#C8232C', marginLeft: '10px', textDecoration: 'underline' }}>
												{t('s2MarqueeContact')}
											</Link>
										</p>
									</div>
								</div>
								<div className="marquee-item">
									<div className="s2">
										<p style={{ color: '#fff', fontSize: '1.2rem' }}>
											{t('s2Marquee2')}
											<Link href="/contact" style={{ color: '#C8232C', marginLeft: '10px', textDecoration: 'underline' }}>
												{t('s2MarqueeJoin')}
											</Link>
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
