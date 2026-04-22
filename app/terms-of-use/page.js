'use client'
import Layout from "@/components/layout/Layout"
import { useLanguage } from "@/utils/LanguageContext"

const content = {
	tr: {
		title: "Kullanım Koşulları",
		lastUpdate: "Son Güncelleme: 20 Nisan 2026",
		sections: [
			{
				title: "1. Taraflar ve Kapsam",
				text: "Bu Web Sitesi Kullanım Koşulları ('Koşullar'), Misiones Otelcilik İnovasyon & Danışmanlık ('Misiones' veya 'Şirket') tarafından işletilen web sitesine ('Site') erişim sağlayan ve Site'yi kullanan tüm gerçek ve tüzel kişiler ('Kullanıcı') için geçerlidir. Site'yi ziyaret ederek veya hizmetlerimizden yararlanarak bu Koşullar'ı peşinen, eksiksiz ve koşulsuz olarak kabul etmiş sayılırsınız. Eğer bu Koşullar'ı kabul etmiyorsanız, Site'yi kullanmayı derhal bırakmalısınız."
			},
			{
				title: "2. Hizmetlerin Tanımı",
				text: "Misiones, otelcilik ve turizm sektöründe yatırım, marka entegrasyonu, gelir yönetimi, stratejik danışmanlık ve Hotel Improvement Plan (HIP) gibi yelpazelerde profesyonel hizmetler sunan bir danışmanlık firmasıdır. Site üzerinde yer alan bilgiler genel bilgilendirme amacı taşımakta olup, yasal, finansal veya bağlayıcı bir profesyonel tavsiye hükmünde değildir. Misiones, sağlanan bilgilerin doğruluğu için makul çabayı gösterir ancak hatalar veya eksikliklerden sorumlu tutulamaz."
			},
			{
				title: "3. Fikri Mülkiyet Hakları",
				text: "Sitede yer alan tüm metinler, grafikler, logolar, buton ikonları, resimler, ses klipleri, dijital indirmeler, veri derlemeleri ve yazılımlar dahil ancak bunlarla sınırlı olmamak üzere tüm içerik Misiones'in veya içerik sağlayıcılarının mülkiyetindedir ve uluslararası telif hakkı yasalarıyla korunmaktadır. Misiones'in önceden yazılı izni olmaksızın hiçbir içerik tamamen veya kısmen kopyalanamaz, çoğaltılamaz, dağıtılamaz veya ticari amaçlarla kullanılamaz."
			},
			{
				title: "4. Kullanıcı Yükümlülükleri",
				text: "Kullanıcılar, Site'yi yalnızca yasal ve hukuka uygun amaçlarla kullanmayı kabul eder. Site'nin güvenliğini tehdit edecek, sunuculara aşırı yük bindirecek, virüs vb. zararlı yazılımlar taşıyan içerikler göndermek, diğer kullanıcıların verilerine izinsiz erişim sağlamaya çalışmak veya haksız rekabet oluşturabilecek eylemlerde bulunmak kesinlikle yasaktır."
			},
			{
				title: "5. Sorumluluğun Sınırlandırılması",
				text: "Misiones, Site'nin kesintisiz veya hatasız çalışacağını garanti etmez. Site'nin kullanımından doğabilecek doğrudan, dolaylı, özel veya cezai zararlardan (veri kaybı, kâr kaybı dahil) hiçbir şekilde sorumlu tutulamaz. Dış bağlantılar (üçüncü taraf siteleri) üzerinde Misiones'in hiçbir kontrolü veya sorumluluğu bulunmamaktadır."
			},
			{
				title: "6. Değişiklik Hakları",
				text: "Misiones, bu Kullanım Koşulları'nı bildirimde bulunmaksızın dilediği zaman tek taraflı olarak güncelleme veya değiştirme hakkını saklı tutar. Güncellenmiş Koşullar, Site'de yayınlandığı andan itibaren geçerli sayılır. Kullanıcıların periyodik olarak bu sayfayı ziyaret etmeleri tavsiye edilir."
			},
			{
				title: "7. Uyuşmazlıkların Çözümü",
				text: "Bu Koşullar'ın uygulanmasından ve yorumlanmasından doğabilecek her türlü ihtilafta Türkiye Cumhuriyeti yasaları uygulanacaktır. Uyuşmazlıkların çözümünde Antalya Mahkemeleri ve İcra Daireleri münhasıran yetkilidir."
			}
		],
		contact: "Herhangi bir soru, öneri veya şikayetiniz için bizimle iletişime geçebilirsiniz: contact@misiones.com.tr"
	},
	en: {
		title: "Terms of Use",
		lastUpdate: "Last Update: April 20, 2026",
		sections: [
			{
				title: "1. Parties and Scope",
				text: "These Website Terms of Use ('Terms') apply to all real and legal persons ('User') accessing and using the website ('Site') operated by Misiones Hospitality Innovation & Consultancy ('Misiones' or 'Company'). By visiting the Site or using our services, you accept these Terms in advance, completely, and unconditionally. If you do not agree to these Terms, you must stop using the Site immediately."
			},
			{
				title: "2. Description of Services",
				text: "Misiones is a consulting firm providing professional services in the hospitality and tourism sector, including investment, brand integration, revenue management, strategic consulting, and Hotel Improvement Plan (HIP). The information on the Site is for general informational purposes and does not constitute legal, financial, or binding professional advice. Misiones makes reasonable efforts to ensure accuracy but cannot be held responsible for errors or omissions."
			},
			{
				title: "3. Intellectual Property Rights",
				text: "All content on the Site, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Misiones or its content suppliers and is protected by international copyright laws. No content may be copied, reproduced, distributed, or used for commercial purposes without prior written consent."
			},
			{
				title: "4. User Obligations",
				text: "Users agree to use the Site only for lawful purposes. It is strictly prohibited to compromise the Site's security, overload servers, send harmful content like viruses, attempt unauthorized access to other users' data, or engage in actions constituting unfair competition."
			},
			{
				title: "5. Limitation of Liability",
				text: "Misiones does not guarantee that the Site will operate uninterrupted or error-free. It shall not be held liable for any direct, indirect, special, or punitive damages (including loss of data or profit) arising from the use of the Site. Misiones has no control or responsibility over external links (third-party sites)."
			},
			{
				title: "6. Right to Modifications",
				text: "Misiones reserves the right to unilaterally update or change these Terms of Use at any time without notice. Updated Terms are effective upon publication on the Site. Users are advised to visit this page periodically."
			},
			{
				title: "7. Dispute Resolution",
				text: "The laws of the Republic of Turkey shall apply to any disputes arising from the implementation and interpretation of these Terms. Antalya Courts and Execution Offices are exclusively authorized to resolve disputes."
			}
		],
		contact: "For any questions, suggestions, or complaints, you can contact us at: contact@misiones.com.tr"
	},
	ar: {
		title: "شروط الاستخدام",
		lastUpdate: "تحديث الأخير: 20 أبريل 2026",
		sections: [
			{
				title: "1. الأطراف والنطاق",
				text: "تنطبق شروط الاستخدام هذه على جميع الأشخاص الطبيعيين والاعتباريين ('المستخدم') الذين يصلون إلى ويستخدمون الموقع الإلكتروني ('الموقع') الذي تديره شركة ميسيونيز لابتكار واستشارات الضيافة ('ميسيونيز' أو 'الشركة'). بزيارتك للموقع، فإنك توافق على هذه الشروط مسبقًا وبشكل كامل. إذا كنت لا توافق، يجب عليك التوقف عن استخدام الموقع."
			},
			{
				title: "2. وصف الخدمات",
				text: "ميسيونيز هي شركة استشارية تقدم خدمات احترافية في قطاع الضيافة والسياحة، بما في ذلك الاستثمار ودمج العلامات التجارية وإدارة الإيرادات وخطة تحسين الفنادق (HIP). المعلومات الموجودة على الموقع لأغراض إعلامية عامة ولا تشكل نصيحة مهنية ملزمة."
			},
			{
				title: "3. حقوق الملكية الفكرية",
				text: "جميع المحتويات على الموقع، بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات والشعارات وأيقونات الأزرار والصور والبرامج، هي ملك لميسيونيز ومحمية بموجب قوانين حقوق الطبع والنشر. لا يجوز نسخ أو استخدام أي محتوى لأغراض تجارية دون موافقة خطية مسبقة."
			},
			{
				title: "4. التزامات المستخدم",
				text: "يوافق المستخدمون على استخدام الموقع للأغراض المشروعة فقط. يُحظر بشدة المساس بأمن الموقع، أو إرسال محتوى ضار، أو محاولة الوصول غير المصرح به، أو المشاركة في منافسة غير عادلة."
			},
			{
				title: "5. حدود المسؤولية",
				text: "لا تضمن ميسيونيز أن الموقع سيعمل دون انقطاع. ولن تكون مسؤولة عن أي أضرار ناجمة عن استخدام الموقع. لا تتحمل الشركة أي مسؤولية عن الروابط الخارجية."
			},
			{
				title: "6. الحق في التعديل",
				text: "تحتفظ ميسيونيز بالحق في تحديث شروط الاستخدام هذه في أي وقت دون إشعار. تصبح الشروط المحدثة سارية المفعول عند نشرها."
			},
			{
				title: "7. تسوية المنازعات",
				text: "تطبق قوانين جمهورية تركيا على أي نزاعات. ومحاكم أنطاليا هي المختصة حصرياً."
			}
		],
		contact: "لأية أسئلة، يمكنك الاتصال بنا على: contact@misiones.com.tr"
	},
	ru: {
		title: "Условия использования",
		lastUpdate: "Последнее обновление: 20 апреля 2026 г.",
		sections: [
			{
				title: "1. Стороны и сфера применения",
				text: "Настоящие Условия использования применяются ко всем физическим и юридическим лицам («Пользователь»), получающим доступ к сайту («Сайт») Misiones Hospitality Innovation & Consultancy («Компания»). Посещая Сайт, вы безоговорочно принимаете эти Условия."
			},
			{
				title: "2. Описание услуг",
				text: "Misiones предоставляет профессиональные консалтинговые услуги в сфере гостеприимства и туризма, включая инвестиции, интеграцию брендов, управление доходами и План Улучшения Отеля (HIP). Информация на Сайте носит общий характер и не является юридической или финансовой консультацией."
			},
			{
				title: "3. Права на интеллектуальную собственность",
				text: "Весь контент на Сайте, включая тексты, графику, логотипы и изображения, является собственностью Misiones и защищен законами об авторских правах. Никакой контент не может быть скопирован или использован в коммерческих целях без предварительного письменного согласия."
			},
			{
				title: "4. Обязанности пользователя",
				text: "Пользователь обязуется использовать Сайт только в законных целях. Категорически запрещено подвергать риску безопасность Сайта, передавать вредоносный контент или пытаться получить несанкционированный доступ."
			},
			{
				title: "5. Ограничение ответственности",
				text: "Misiones не гарантирует, что Сайт будет работать без сбоев. Компания не несет ответственности за любые убытки, возникшие в результате использования Сайта и его внешних ссылок."
			},
			{
				title: "6. Право на модификацию",
				text: "Misiones оставляет за собой право в любое время изменять настоящие Условия без предварительного уведомления. Обновленные Условия вступают в силу после их публикации."
			},
			{
				title: "7. Разрешение споров",
				text: "К спорам применяются законы Турецкой Республики. Суды Антальи имеют исключительную юрисдикцию."
			}
		],
		contact: "С вопросами и предложениями вы можете обращаться по адресу: contact@misiones.com.tr"
	}
}

export default function TermsOfUse() {
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
								<p style={{ color: '#999', fontSize: '14px', marginBottom: '40px' }}>{data.lastUpdate}</p>
								
								<div style={{ color: '#505878', lineHeight: '1.9', fontSize: '1.05rem' }}>
									{data.sections.map((section, index) => (
										<div key={index} style={{ marginBottom: '35px' }}>
											<h4 style={{ color: '#C8232C', marginBottom: '15px', fontWeight: '700', fontSize: '1.3rem' }}>{section.title}</h4>
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
