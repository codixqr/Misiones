'use client'
import Layout from "@/components/layout/Layout"
import { useLanguage } from "@/utils/LanguageContext"

export default function TermsOfUse() {
	const { t, lang } = useLanguage()

	return (
		<Layout breadcrumbTitle={t('footerTerms')}>
			<section className="tf-space"
				style={{ padding: '100px 0', background: '#fff' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div style={{ maxWidth: '800px', margin: '0 auto' }}>
								<h2 style={{ color: '#1B2F5E', marginBottom: '30px' }}>{t('footerTerms')}</h2>
								<div style={{ color: '#505878', lineHeight: '1.8' }}>
									<p style={{ marginBottom: '20px' }}>
										{lang === 'tr' ? '1. Misiones web sitesine hoş geldiniz. Web sitemizi kullanarak aşağıdaki kullanım koşullarını kabul etmiş olursunuz.' : 
										 lang === 'en' ? '1. Welcome to the Misiones website. By using our website, you agree to the following terms of use.' :
										 lang === 'ar' ? '1. مرحبا بكم في موقع Misiones. باستخدام موقعنا، فإنك توافق على شروط الاستخدام التالية.' :
										 '1. Добро пожаловать на сайт Misiones. Используя наш сайт, вы соглашаетесь со следующими условиями использования.'}
									</p>
									<p style={{ marginBottom: '20px' }}>
										{lang === 'tr' ? '2. Sitede yer alan tüm içerik ve materyaller, önceden yazılı izin alınmaksızın çoğaltılamaz, dağıtılamaz veya ticari amaçlarla kullanılamaz.' : 
										 lang === 'en' ? '2. All content and materials on the site may not be reproduced, distributed, or used for commercial purposes without prior written permission.' :
										 lang === 'ar' ? '2. لا يجوز استنساخ أو توزيع أو استخدام جميع المحتويات والمواد الموجودة على الموقع لأغراض تجارية دون إذن كتابي مسبق.' :
										 '2. Весь контент и материалы на сайте не могут быть воспроизведены, распространены или использованы в коммерческих целях без предварительного письменного разрешения.'}
									</p>
									<p style={{ marginBottom: '20px' }}>
										{lang === 'tr' ? '3. Sözleşmenin güncellenmesinden firmamız sorumludur ve değişiklikler yayınlandığı andan itibaren geçerli sayılır.' : 
										 lang === 'en' ? '3. Our company is responsible for updating the agreement, and changes are effective immediately upon publication.' :
										 lang === 'ar' ? '3. شركتنا مسؤولة عن تحديث الاتفاقية، وتكون التغييرات سارية المفعول فور نشرها.' :
										 '3. Наша компания несет ответственность за обновление соглашения, и изменения вступают в силу сразу после публикации.'}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
