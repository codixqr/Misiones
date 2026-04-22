'use client'
import Layout from "@/components/layout/Layout"
import { useLanguage } from "@/utils/LanguageContext"

const content = {
	tr: {
		title: "Gizlilik Politikası",
		lastUpdate: "Son Güncelleme: 20 Nisan 2026",
		intro: "Misiones Danışmanlık ('Misiones' veya 'Şirket') olarak, müşterilerimizin, web sitemizi ziyaret eden kişilerin ve tüm paydaşlarımızın gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz. Bu Gizlilik Politikası, Misiones'in kişisel verilerinizi nasıl topladığını, işlediğini, sakladığını ve koruduğunu açıklamaktadır.",
		sections: [
			{
				title: "1. Toplanan Kişisel Veriler",
				text: "Sitemizi ziyaret ettiğinizde veya hizmetlerimizden yararlanmak için bizimle iletişime geçtiğinizde (iletişim formları, e-posta talepleri vb. aracılığıyla) adınız, soyadınız, e-posta adresiniz, telefon numaranız, çalıştığınız şirket ve IP adresiniz gibi kişisel verileriniz rızanız doğrultusunda toplanabilir."
			},
			{
				title: "2. Verilerin İşlenme Amaçları",
				text: "Topladığımız kişisel veriler; sizlere sunduğumuz hizmetleri iyileştirmek, talep ettiğiniz danışmanlık hizmetlerine dair iletişimi sağlamak, istatistiksel analizler yapmak, web sitesinin güvenliğini sağlamak ve hukuki yükümlülüklerimizi yerine getirmek amacıyla işlenmektedir."
			},
			{
				title: "3. Kişisel Verilerin Üçüncü Kişilerle Paylaşımı",
				text: "Kişisel verileriniz, açık rızanız olmaksızın hiçbir kişi, kurum veya üçüncü taraf firmayla ticari amaçlarla paylaşılmaz. Yalnızca yasal zorunluluklar gerektirdiğinde yetkili kamu kurum ve kuruluşları ile paylaşılabilir."
			},
			{
				title: "4. Veri Güvenliği ve Saklama",
				text: "Kişisel verilerinizin yetkisiz erişime, kaybolmaya, çalınmaya veya değiştirilmeye karşı korunması için endüstri standartlarında uygun olan tüm idari ve teknik güvenlik tedbirlerini almaktayız. Verileriniz, işlenme amacının gerektirdiği süre boyunca güvenle saklanmaktadır."
			},
			{
				title: "5. Çerez (Cookie) Kullanımı",
				text: "Web sitemizdeki kullanıcı deneyimini artırmak ve analiz yapmak amacıyla çerezler kullanılmaktadır. Çerezler, web sitemizi ziyaretlerinizde tarayıcınız aracılığıyla cihazınıza küçük veri dosyaları yerleştirir. Tarayıcı ayarlarınızı değiştirerek çerez kullanımını kısıtlayabilir veya reddedebilirsiniz."
			},
			{
				title: "6. Kullanıcı Hakları",
				text: "İlgili veri koruma kanunları uyarınca kişiler (KVKK ve GDPR dahilinde); verilerinin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, eksik veya yanlış verilerin düzeltilmesini isteme, verilerin silinmesini (unutulma hakkı) talep etme hakkına sahiptirler."
			}
		],
		contact: "Gizlilik ve güvenlik haklarınız ile veri işleme politikamız hakkında sorularınız için bize şu adresten ulaşabilirsiniz: info@misiones.com.tr"
	},
	en: {
		title: "Privacy Policy",
		lastUpdate: "Last Update: April 20, 2026",
		intro: "At Misiones Consulting ('Misiones' or 'Company'), we attach great importance to the privacy and personal data protection of our customers, website visitors, and stakeholders. This Privacy Policy explains how Misiones collects, processes, stores, and protects your personal data.",
		sections: [
			{
				title: "1. Collected Personal Data",
				text: "When you visit our site or contact us to benefit from our services (via contact forms, email requests, etc.), personal data such as your name, surname, email address, phone number, company, and IP address may be collected with your consent."
			},
			{
				title: "2. Purposes of Data Processing",
				text: "The personal data we collect is processed to improve the services we offer, facilitate communication regarding the consulting services you requested, conduct statistical analyses, ensure website security, and fulfill our legal obligations."
			},
			{
				title: "3. Sharing Data with Third Parties",
				text: "Your personal data will not be shared with any person, institution, or third-party for commercial purposes without your explicit consent. It may only be shared with authorized public institutions when required by legal obligations."
			},
			{
				title: "4. Data Security and Retention",
				text: "We take all appropriate administrative and technical industry-standard security measures to protect your personal data against unauthorized access, loss, theft, or alteration. Your data is safely stored for the duration required by its processing purpose."
			},
			{
				title: "5. Use of Cookies",
				text: "Cookies are used to improve user experience and conduct analysis on our website. Cookies place small data files on your device via your browser. You can restrict or reject cookies by changing your browser settings."
			},
			{
				title: "6. User Rights",
				text: "Under applicable data protection laws (including KVKK and GDPR), individuals have the right to learn whether their data is processed, request information if processed, request correction of incomplete/incorrect data, and request the deletion of data (right to be forgotten)."
			}
		],
		contact: "For questions about your privacy rights and our data processing policy, please contact us at: info@misiones.com.tr"
	},
	ar: {
		title: "سياسة الخصوصية",
		lastUpdate: "تحديث الأخير: 20 أبريل 2026",
		intro: "في ميسيونيز للاستشارات، نولي أهمية كبيرة لخصوصية وحماية البيانات الشخصية لعملائنا وزوار موقعنا. تشرح سياسة الخصوصية هذه كيفية جمع بياناتك الشخصية ومعالجتها وتخزينها وحمايتها.",
		sections: [
			{
				title: "1. البيانات الشخصية المجمعة",
				text: "عند زيارة موقعنا أو التواصل معنا (عبر نماذج الاتصال وغيرها)، قد يتم جمع بيانات مثل اسمك وبريدك الإلكتروني ورقم هاتفك وعنوان IP بموافقتك."
			},
			{
				title: "2. أغراض معالجة البيانات",
				text: "تتم معالجة بياناتك لتحسين الخدمات، والتواصل بشأن الاستشارات التي طلبتها، وإجراء التحليلات الإحصائية، وضمان أمان الموقع."
			},
			{
				title: "3. مشاركة البيانات",
				text: "لن تتم مشاركة بياناتك الشخصية مع أي طرف ثالث لأغراض تجارية دون موافقتك الصريحة. قد تتم مشاركتها فقط مع الجهات الحكومية لمتطلبات قانونية."
			},
			{
				title: "4. أمن البيانات والاحتفاظ بها",
				text: "نتخذ جميع التدابير الأمنية الإدارية والتقنية لحماية بياناتك من الوصول غير المصرح به أو الفقدان أو التعديل."
			},
			{
				title: "5. استخدام ملفات تعريف الارتباط",
				text: "نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم. يمكنك تقييد أو رفض ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك."
			},
			{
				title: "6. حقوق المستخدم",
				text: "يحق للأفراد معرفة ما إذا كانت بياناتهم قيد المعالجة، وطلب تصحيح البيانات غير المكتملة، وطلب حذف البيانات."
			}
		],
		contact: "لأية أسئلة حول سياسة معالجة البيانات الخاصة بنا، يرجى الاتصال بنا على: info@misiones.com.tr"
	},
	ru: {
		title: "Политика конфиденциальности",
		lastUpdate: "Последнее обновление: 20 апреля 2026 г.",
		intro: "В Misiones Consulting мы придаем большое значение защите персональных данных наших клиентов и посетителей сайта. В настоящей Политике описывается, как Misiones собирает, обрабатывает, хранит и защищает ваши данные.",
		sections: [
			{
				title: "1. Сбор данных",
				text: "При посещении сайта или обращении к нам через формы связи мы можем собирать с вашего согласия такие данные, как ваше имя, адрес электронной почты, номер телефона и IP-адрес."
			},
			{
				title: "2. Цели обработки данных",
				text: "Собранные данные используются для улучшения оказываемых услуг, обратной связи, статистического анализа и обеспечения безопасности веб-сайта."
			},
			{
				title: "3. Передача данных третьим лицам",
				text: "Ваши личные данные не будут передаваться компаниям или лицам в коммерческих целях без вашего явного согласия, за исключением случаев, когда этого требует закон."
			},
			{
				title: "4. Безопасность данных",
				text: "Мы принимаем все необходимые технические меры для защиты ваших данных от несанкционированного доступа, утери или изменения."
			},
			{
				title: "5. Использование файлов cookie",
				text: "Файлы cookie используются для улучшения взаимодействия с пользователем на нашем сайте. Вы можете ограничить файлы cookie в настройках вашего браузера."
			},
			{
				title: "6. Права пользователя",
				text: "В соответствии с применимым законодательством лица имеют право запрашивать информацию о своих данных, требовать их исправления или удаления (право на забвение)."
			}
		],
		contact: "По вопросам нашей политики конфиденциальности обращайтесь по адресу: info@misiones.com.tr"
	}
}

export default function PrivacyPolicy() {
	const { t, lang } = useLanguage()
	const data = content[lang] || content['tr']

	return (
		<Layout breadcrumbTitle={data.title}>
			<section className="tf-space" style={{ padding: '80px 0', background: '#fdfdfd' }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-9">
							<div style={{ background: '#fff', borderRadius: '16px', padding: '50px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #f0f0f0' }}>
								<h2 style={{ color: '#1B2F5E', marginBottom: '15px', fontWeight: '800', fontSize: '2.5rem' }}>{data.title}</h2>
								<div style={{ color: '#C8232C', fontSize: '15px', fontWeight: 'bold', marginBottom: '25px' }}>{data.lastUpdate}</div>
								
								<p style={{ color: '#505878', fontSize: '1.15rem', fontStyle: 'italic', marginBottom: '40px', lineHeight: '1.8' }}>
									{data.intro}
								</p>
								
								<div style={{ color: '#505878', lineHeight: '1.9', fontSize: '1.05rem' }}>
									{data.sections.map((section, index) => (
										<div key={index} style={{ marginBottom: '35px' }}>
											<h4 style={{ color: '#1B2F5E', marginBottom: '15px', fontWeight: '700', fontSize: '1.3rem' }}>{section.title}</h4>
											<p style={{ margin: 0, textAlign: 'justify' }}>{section.text}</p>
										</div>
									))}
								</div>
								
								<hr style={{ margin: '40px 0', borderColor: '#eee' }} />
								<p style={{ color: '#1B2F5E', fontWeight: '600' }}>{data.contact}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
