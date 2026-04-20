'use client'
import Layout from "@/components/layout/Layout"
import { useLanguage } from "@/utils/LanguageContext"

export default function PrivacyPolicy() {
	const { t, lang } = useLanguage()

	return (
		<Layout breadcrumbTitle={t('footerPrivacy')}>
			<section className="tf-space"
				style={{ padding: '100px 0', background: '#fff' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div style={{ maxWidth: '800px', margin: '0 auto' }}>
								<h2 style={{ color: '#1B2F5E', marginBottom: '30px' }}>{t('footerPrivacy')}</h2>
								<div style={{ color: '#505878', lineHeight: '1.8' }}>
									<p style={{ marginBottom: '20px' }}>
										{lang === 'tr' ? '1. Gizliliğiniz bizim için önemlidir. Bu gizlilik politikası, web sitemiz üzerinden topladığımız verilerin nasıl kullanıldığını açıklar.' : 
										 lang === 'en' ? '1. Your privacy is important to us. This privacy policy explains how data collected through our website is used.' :
										 lang === 'ar' ? '1. خصوصيتك مهمة بالنسبة لنا. تشرح سياسة الخصوصية هذه كيفية استخدام البيانات التي يتم جمعها من خلال موقعنا.' :
										 '1. Ваша конфиденциальность важна для нас. Настоящая политика конфиденциальности объясняет, как используются данные, собранные через наш веб-сайт.'}
									</p>
									<p style={{ marginBottom: '20px' }}>
										{lang === 'tr' ? '2. Toplanan kişisel verileriniz hiçbir kurum veya kişiyle paylaşılmaz; yalnızca hizmetlerimizi geliştirmek için analiz edilir.' : 
										 lang === 'en' ? '2. Your collected personal data is not shared with any institution or person; it is analyzed only to improve our services.' :
										 lang === 'ar' ? '2. لا تتم مشاركة بياناتك الشخصية المجمعة مع أي مؤسسة أو شخص؛ يتم تحليلها فقط لتحسين خدماتنا.' :
										 '2. Ваши собранные личные данные не передаются никакому учреждению или лицу; они анализируются только для улучшения наших услуг.'}
									</p>
									<p style={{ marginBottom: '20px' }}>
										{lang === 'tr' ? '3. Çerez kullanımı (Cookies) aracılığıyla site trafiğini izler ve ziyaretçilerimize daha iyi bir kullanıcı deneyimi sunarız.' : 
										 lang === 'en' ? '3. We monitor site traffic using cookies and offer a better user experience to our visitors.' :
										 lang === 'ar' ? '3. نحن نراقب حركة المرور على الموقع باستخدام ملفات تعريف الارتباط ونقدم تجربة مستخدم أفضل لزوارنا.' :
										 '3. Мы отслеживаем трафик сайта с помощью файлов cookie и предлагаем лучший пользовательский интерфейс для наших посетителей.'}
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
