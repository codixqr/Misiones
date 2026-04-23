'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'

const serviceCategories = [
  {
    id: 'yatirim',
    icon: 'flaticon-building',
    image: '/images/section/service-yatirim-analiz.jpg',
    titleTr: 'Otel Yatırım Danışmanlığı',
    titleEn: 'Hotel Investment Consulting',
    titleAr: 'استشارات الاستثمار الفندقي',
    titleRu: 'Инвестиционный консалтинг',
    descTr: 'Doğru yatırım kararları, projenin başından itibaren sahadan gelen veriler ve deneyimle şekillendirilmelidir. Fizibilite analizinden proje yönetimine, teşvik belgelerinden mimari danışmanlığa kadar yatırımın her aşamasında yanınızdayız.',
    descEn: 'Correct investment decisions must be shaped from the beginning of the project with data and experience from the field. We are with you at every stage of your investment.',
    descAr: 'يجب أن تتشكل قرارات الاستثمار الصحيحة منذ بداية المشروع ببيانات وخبرات ميدانية. نحن معك في كل مرحلة من مراحل استثمارك.',
    descRu: 'Правильные инвестиционные решения должны формироваться с самого начала проекта на основе данных и опыта. Мы с вами на каждом этапе.',
    items: [
      {
        titleTr: 'Yatırım Fizibilitesi',
        titleEn: 'Investment Feasibility',
        titleAr: 'جدوى الاستثمار',
        titleRu: 'ТЭО инвестиций',
        descTr: 'Piyasa koşullarını, talep projeksiyonlarını, finansal geri dönüşleri ve riskleri analiz etmeden hiçbir yatırım doğru yönlenemez. Yanlış fizibilite, en mükemmel mimari projeyi bile başarısız kılar. Yatırımın var olup olmayacağını belirleyen olmazsa olmaz aşamadır.',
        descEn: 'No investment can be directed correctly without analyzing market conditions, demand projections, financial returns and risks. Incorrect feasibility can even make the most perfect architectural project fail.',
        descAr: 'لا يمكن توجيه أي استثمار بشكل صحيح دون تحليل ظروف السوق وتوقعات الطلب والعوائد المالية والمخاطر.',
        descRu: 'Никакие инвестиции не могут быть направлены правильно без анализа рыночных условий, прогнозов спроса и рисков.',
      },
      {
        titleTr: 'Teşvik Belgelendirme',
        titleEn: 'Incentive Documentation',
        titleAr: 'توثيق الحوافز',
        titleRu: 'Документация по льготам',
        descTr: 'Türkiye\'de ve globalde otel yatırımlarının finansal sürdürülebilirliği büyük ölçüde devlet teşvikleri, vergi avantajları ve finansal desteklerle sağlanır. Doğru belgelendirme, yatırımın geri dönüş süresini dramatik biçimde kısaltır.',
        descEn: 'The financial sustainability of hotel investments in Turkey and globally is largely provided by government incentives, tax advantages and financial supports. Correct documentation dramatically shortens the return on investment period.',
        descAr: 'يتم توفير الاستدامة المالية للاستثمارات الفندقية من خلال الحوافز الحكومية والمزايا الضريبية.',
        descRu: 'Финансовая устойчивость гостиничных инвестиций обеспечивается государственными стимулами и налоговыми льготами.',
      },
      {
        titleTr: 'Proje Planlama',
        titleEn: 'Project Planning',
        titleAr: 'تخطيط المشروع',
        titleRu: 'Планирование проекта',
        descTr: 'İş akışları, zaman çizelgesi, bütçe kontrolü ve kaynak yönetimi burada şekillenir. Yatırımın yol haritasıdır; doğru planlama olmadan proje yönetimi kaosa sürüklenir.',
        descEn: 'Business processes, timeline, budget control and resource management are shaped here. It is the roadmap of the investment; without proper planning, project management descends into chaos.',
        descAr: 'يتم تشكيل عمليات الأعمال والجدول الزمني ومراقبة الميزانية هنا. إنها خارطة طريق الاستثمار.',
        descRu: 'Здесь формируются бизнес-процессы, сроки, контроль бюджета и управление ресурсами. Это дорожная карта.',
      },
    ],
  },
  {
    id: 'marka',
    icon: 'flaticon-market',
    image: '/images/section/service-marka-integ.jpg',
    titleTr: 'Otel Marka Entegrasyonu Danışmanlığı',
    titleEn: 'Hotel Brand Integration Consulting',
    titleAr: 'استشارات دمج العلامة التجارية',
    titleRu: 'Консалтинг по интеграции бренда',
    descTr: 'Markanın kimliği, ruhu ve geleceğini doğru şekillendirmek; rekabette farklılaşmayı ve sürdürülebilir büyümeyi sağlamak için stratejik marka yönetimi hizmetleri sunuyoruz.',
    descEn: 'We provide strategic brand management services to correctly shape the identity, soul and future of the brand; to ensure differentiation in competition and sustainable growth.',
    descAr: 'نحن نقدم خدمات إدارة العلامة التجارية الاستراتيجية لتشكيل هوية العلامة التجارية وروحها ومستقبلها بشكل صحيح.',
    descRu: 'Мы предоставляем услуги стратегического управления брендом для формирования его идентичности и будущего.',
    items: [
      {
        titleTr: 'Marka Belirleme',
        titleEn: 'Brand Definition',
        titleAr: 'تحديد العلامة التجارية',
        titleRu: 'Определение бренда',
        descTr: 'Marka bir otelin kimliği, ruhu ve gelecekteki tüm stratejilerinin temelini oluşturur. Rekabetin yoğun olduğu turizm sektöründe, farklılaşma ve özgünlük markanın belirlenmesiyle başlar.',
        descEn: 'Brand forms the foundation of a hotel\'s identity, soul and all future strategies. In the highly competitive tourism sector, differentiation and authenticity begin with brand definition.',
        descAr: 'تشكل العلامة التجارية أساس هوية الفندق وروحه وجميع الاستراتيجيات المستقبلية.',
        descRu: 'Бренд формирует основу идентичности отеля и всех будущих стратегий.',
      },
      {
        titleTr: 'Marka Alma',
        titleEn: 'Brand Acquisition',
        titleAr: 'الاستحواذ على العلامة التجارية',
        titleRu: 'Приобретение бренда',
        descTr: 'Belirlenen markanın hukuki olarak korunması, sürdürülebilirlik ve yatırım güvenliği açısından kritik önem arz eder. Markanın tescili rekabet avantajını korur ve olası taklitleri engeller.',
        descEn: 'Legal protection of the determined brand is critically important for sustainability and investment security. Brand registration protects competitive advantage and prevents possible imitations.',
        descAr: 'تعد الحماية القانونية للعلامة التجارية المحددة أمرًا بالغ الأهمية للاستدامة وأمن الاستثمار.',
        descRu: 'Юридическая защита бренда критически важна для устойчивости и безопасности инвестиций.',
      },
    ],
  },
  {
    id: 'yonetim',
    icon: 'flaticon-chart',
    image: '/images/section/service-yonetim.jpg',
    titleTr: 'Otel Yönetim Danışmanlığı',
    titleEn: 'Hotel Management Consulting',
    titleAr: 'استشارات إدارة الفنادق',
    titleRu: 'Управленческий консалтинг',
    descTr: 'Otelin açılışından operasyonel mükemmelliğe, gelir yönetiminden insan kaynaklarına kadar tüm yönetim süreçlerinde stratejik destek sunuyoruz.',
    descEn: 'We provide strategic support in all management processes from hotel opening to operational excellence, from revenue management to human resources.',
    descAr: 'نحن نقدم الدعم الاستراتيجي في جميع عمليات الإدارة من افتتاح الفندق إلى التميز التشغيلي.',
    descRu: 'Мы предоставляем стратегическую поддержку во всех процессах управления: от открытия до операционной эффективности.',
    items: [
      { titleTr: 'Açılış Öncesi Hizmetleri', titleEn: 'Pre-Opening Services', titleAr: 'خدمات ما قبل الافتتاح', titleRu: 'Предпусковые услуги', descTr: 'Bir otelin kaderi daha kapıları açılmadan belirlenir. Konsept ve operasyonel hazırlık kritiktir.', descEn: 'The fate of a hotel is determined before its doors open. Concept and operational readiness are critical.', descAr: 'يتحدد مصير الفندق قبل فتح أبوابه. المفهوم والجاهزية التشغيلية أمران حاسمان.', descRu: 'Судьба отеля определяется до открытия. Концепция и готовность критически важны.' },
      { titleTr: 'Gelir Yönetimi', titleEn: 'Revenue Management', titleAr: 'إدارة الإيرادات', titleRu: 'Управление доходами', descTr: 'Piyasa koşullarında rekabet avantajı yaratmanın en güçlü aracıdır.', descEn: 'It is the most powerful tool for creating competitive advantage in market conditions.', descAr: 'إنها أقوى أداة لخلق ميزة تنافسية في ظروف السوق.', descRu: 'Самый мощный инструмент для создания конкурентного преимущества.' },
      { titleTr: 'Satış ve Pazarlama', titleEn: 'Sales & Marketing', titleAr: 'المبيعات والتسويق', titleRu: 'Продажи и Маркетинг', descTr: 'Doğru hedef kitleye ulaşmak otelin doluluk oranını belirler.', descEn: 'Reaching the right target audience determines the hotel\'s occupancy rate.', descAr: 'الوصول إلى الجمهور المستهدف الصحيح يحدد معدل إشغال الفندق.', descRu: 'Охват правильной целевой аудитории определяет заполняемость отеля.' },
    ],
  },
  {
    id: 'hip',
    icon: 'flaticon-rocket',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    titleTr: 'HIP - Hotel Improvement Plan',
    titleEn: 'HIP - Hotel Improvement Plan',
    titleAr: 'HIP - خطة تحسين الفندق',
    titleRu: 'HIP - План улучшения отеля',
    descTr: 'HIP, otelinizin performansını KPI bazlı analiz ederek gelir, operasyon ve maliyet tarafında ölçülebilir iyileştirme sunan dönüşüm programımızdır.',
    descEn: 'HIP is our transformation program that analyzes your hotel with KPI-based metrics and delivers measurable improvements in revenue, operations, and cost control.',
    descAr: 'HIP هو برنامج التحول الخاص بنا الذي يحلل فندقك بمقاييس تعتمد على مؤشرات الأداء الرئيسية.',
    descRu: 'HIP — это наша программа трансформации, которая анализирует ваш отель на основе KPI.',
    items: [
      { titleTr: 'KPI Tabanlı Analiz', titleEn: 'KPI-Based Analysis', titleAr: 'التحليل القائم على مؤشرات الأداء', titleRu: 'Анализ на основе KPI', descTr: 'Otelinizin güçlü ve zayıf alanlarını netleştiririz.', descEn: 'We identify strengths and weaknesses.', descAr: 'نحدد نقاط القوة والضعف.', descRu: 'Мы выявляем сильные и слабые стороны.' },
    ],
    ctaHref: '/hip',
    ctaTr: 'HIP Detaylarına Git',
    ctaEn: 'Go to HIP Details',
    ctaAr: 'اذهب إلى تفاصيل HIP',
    ctaRu: 'Перейти к деталям HIP',
  },
  {
    id: 'denetim',
    icon: 'flaticon-inspect',
    image: '/images/section/service-denetim.jpg',
    titleTr: 'Otel Denetim Danışmanlığı',
    titleEn: 'Hotel Audit Consulting',
    titleAr: 'استشارات تدقيق الفنادق',
    titleRu: 'Аудит и контроль',
    descTr: 'Mali şeffaflıktan operasyonel verimliliğe, kalite standartlarından gizli misafir uygulamalarına kadar kapsamlı denetim hizmetleri sunuyoruz.',
    descEn: 'We provide comprehensive audit services from financial transparency to operational efficiency, from quality standards to mystery guest applications.',
    descAr: 'نحن نقدم خدمات تدقيق شاملة من الشفافية المالية إلى الكفاءة التشغيلية.',
    descRu: 'Мы предоставляем комплексные услуги аудита: от финансовой прозрачности до операционной эффективности.',
    items: [
      { titleTr: 'Mali Denetim', titleEn: 'Financial Audit', titleAr: 'التدقيق المالي', titleRu: 'Финансовый аудит', descTr: 'Finansal sürdürülebilirlik, otelin varlığının temelidir.', descEn: 'Financial sustainability is the foundation for the hotel\'s existence.', descAr: 'الاستدامة المالية هي أساس وجود الفندق.', descRu: 'Финансовая устойчивость — основа существования отеля.' },
    ],
  },
  {
    id: 'strateji',
    icon: 'flaticon-rocket',
    image: '/images/section/service-strateji.jpg',
    titleTr: 'Otel Stratejik Planlama ve Konsept Danışmanlığı',
    titleEn: 'Hotel Strategic Planning & Concept Consulting',
    titleAr: 'التخطيط الاستراتيجي وتصميم المفهوم',
    titleRu: 'Стратегическое планирование и концепция',
    descTr: 'İşletmenin ruhunu piyasa gerçekleri ile buluşturan vizyoner bir yol haritası çizerek sürdürülebilir başarıyı garanti altına almak için, veriyi ve deneyimi estetik bir hikayeye dönüştürerek, markanın kimliğini güçlendirerek, misafir deneyimini anlamlı bir sahneye taşımaya odaklanır.',
    descEn: 'Focuses on drawing a visionary roadmap that brings the spirit of the business together with market realities, transforming data and experience into an aesthetic story, strengthening the brand\'s identity, and elevating the guest experience to a meaningful stage.',
    descAr: 'يركز على رسم خارطة طريق رؤيوية تجمع بين روح العمل وحقائق السوق، وتحويل البيانات والخبرة إلى قصة جمالية.',
    descRu: 'Создание визионерской дорожной карты, объединяющей дух бизнеса с реалиями рынка, превращая данные и опыт в эстетическую историю.',
    items: [
      { titleTr: 'Vizyon ve Strateji Geliştirme', titleEn: 'Vision & Strategy Development', titleAr: 'تطوير الرؤية والاستراتيجية', titleRu: 'Разработка видения и стратегии', descTr: 'Otelin uzun vadeli yönünü belirleyen, piyasa koşullarını ve rekabeti göz önünde bulunduran kapsamlı bir vizyon ve strateji çerçevesi oluşturulur.', descEn: 'A comprehensive vision and strategy framework is created that determines the long-term direction of the hotel, taking market conditions and competition into account.', descAr: 'يتم إنشاء إطار شامل للرؤية والاستراتيجية يحدد الاتجاه طويل المدى للفندق.', descRu: 'Создается комплексная система видения и стратегии, определяющая долгосрочное направление отеля.' },
      { titleTr: 'Konsept Tasarımı', titleEn: 'Concept Design', titleAr: 'تصميم المفهوم', titleRu: 'Концептуальный дизайн', descTr: 'Hedef kitleye ve konuma uygun özgün bir konsept tasarlanarak otelin pazarda farklılaşması ve hatırlanabilir bir deneyim sunması sağlanır.', descEn: 'An original concept tailored to the target audience and location is designed, enabling the hotel to differentiate in the market and offer a memorable experience.', descAr: 'يتم تصميم مفهوم أصيل مصمم للجمهور المستهدف والموقع.', descRu: 'Разрабатывается оригинальная концепция, адаптированная к целевой аудитории и местоположению.' },
      { titleTr: 'Piyasa Konumlandırma', titleEn: 'Market Positioning', titleAr: 'تحديد المواقع في السوق', titleRu: 'Позиционирование на рынке', descTr: 'Rekabet analizi, tüketici davranışları ve piyasa trendleri gözetilerek otelin en doğru konumda yer alması için stratejiler geliştirilir.', descEn: 'Strategies are developed for the hotel to be positioned in the most appropriate position, taking into account competitive analysis, consumer behavior and market trends.', descAr: 'يتم تطوير استراتيجيات لوضع الفندق في الموقع الأنسب مع مراعاة التحليل التنافسي.', descRu: 'Разрабатываются стратегии для оптимального позиционирования отеля с учетом конкурентного анализа.' },
    ],
  },
  {
    id: 'gelir',
    icon: 'flaticon-return-of-investment',
    image: '/images/section/service-yonetim.jpg',
    titleTr: 'Gelir Yönetimi & Satış-Pazarlama Danışmanlığı',
    titleEn: 'Revenue Management & Sales-Marketing Consulting',
    titleAr: 'إدارة الإيرادات واستشارات المبيعات والتسويق',
    titleRu: 'Управление доходами и маркетинг',
    descTr: 'Fiyatlandırma stratejileri, kanal karması optimizasyonu, RMS/CRM uyumu ve doğrudan satış artışı ile sürdürülebilir kârlılık sağlıyoruz.',
    descEn: 'We deliver sustainable profitability through pricing strategies, channel mix optimization, RMS/CRM alignment and direct booking growth.',
    descAr: 'نحقق الربحية المستدامة من خلال استراتيجيات التسعير وتحسين مزيج القنوات ونمو الحجز المباشر.',
    descRu: 'Обеспечиваем устойчивую прибыльность через стратегии ценообразования, оптимизацию каналов и рост прямых бронирований.',
    items: [
      { titleTr: 'Fiyatlandırma & Gelir Optimizasyonu', titleEn: 'Pricing & Revenue Optimization', titleAr: 'تحسين التسعير والإيرادات', titleRu: 'Оптимизация ценообразования и доходов', descTr: 'Talep tahmini, dinamik fiyatlandırma ve segment bazlı stratejilerle gelir performansını maksimize ediyoruz.', descEn: 'We maximize revenue performance through demand forecasting, dynamic pricing and segment-based strategies.', descAr: 'نعمل على تعظيم أداء الإيرادات من خلال التنبؤ بالطلب والتسعير الديناميكي.', descRu: 'Максимизируем доходы через прогнозирование спроса, динамическое ценообразование и сегментные стратегии.' },
      { titleTr: 'Kanal Yönetimi & Dijital Satış', titleEn: 'Channel Management & Digital Sales', titleAr: 'إدارة القنوات والمبيعات الرقمية', titleRu: 'Управление каналами и цифровые продажи', descTr: 'OTA bağımlılığını azaltarak doğrudan satışları artırıyor, kanal dağılımını optimize ediyoruz.', descEn: 'We reduce OTA dependency, increase direct sales and optimize channel distribution.', descAr: 'نقلل الاعتماد على وكالات السفر عبر الإنترنت ونزيد المبيعات المباشرة.', descRu: 'Снижаем зависимость от OTA, увеличиваем прямые продажи и оптимизируем каналы.' },
      { titleTr: 'Satış & Pazarlama Stratejisi', titleEn: 'Sales & Marketing Strategy', titleAr: 'استراتيجية المبيعات والتسويق', titleRu: 'Стратегия продаж и маркетинга', descTr: 'Doğru hedef kitleye ulaşmak, marka bilinirliği ve satış kanallarının etkin kullanımı ile otelin görünürlüğünü ve doluluk oranını belirleriz.', descEn: 'We determine the hotel\'s visibility and occupancy through reaching the right target audience, brand awareness and effective channel usage.', descAr: 'نحدد رؤية الفندق ومعدل الإشغال من خلال الوصول للجمهور المستهدف الصحيح.', descRu: 'Определяем видимость и заполняемость отеля через правильную целевую аудиторию и эффективное использование каналов.' },
    ],
  },
  {
    id: 'surdurulebilirlik',
    icon: 'flaticon-leaf',
    image: '/images/section/service-surdurulebilirlik.jpg',
    titleTr: 'Otel Sürdürülebilirlik Danışmanlığı',
    titleEn: 'Hotel Sustainability Consulting',
    titleAr: 'استشارات الاستدامة الفندقية',
    titleRu: 'Консалтинг по устойчивому развитию',
    descTr: 'Çevresel, sosyal ve ekonomik dengeleri gözeterek otelin uzun vadeli verimliliğini artıran stratejiler geliştiriyoruz.',
    descEn: 'We develop strategies that increase the long-term efficiency of the hotel by taking into account environmental and social balances.',
    descAr: 'نطور استراتيجيات تزيد من كفاءة الفندق على المدى الطويل من خلال مراعاة التوازنات البيئية والاجتماعية.',
    descRu: 'Мы разрабатываем стратегии, повышающие долгосрочную эффективность отеля с учетом экологических балансов.',
    items: [
      { titleTr: 'Çevre Yönetimi', titleEn: 'Environmental Management', titleAr: 'الإدارة البيئية', titleRu: 'Экологический менеджмент', descTr: 'Enerji verimliliği ve atık azaltma sistemleri kurulur.', descEn: 'Energy efficiency and waste reduction systems are established.', descAr: 'يتم إنشاء أنظمة كفاءة الطاقة وتقليل النفايات.', descRu: 'Создаются системы энергоэффективности и сокращения отходов.' },
    ],
  },
  {
    id: 'broker',
    icon: 'flaticon-building',
    image: '/images/section/service-broker.jpg',
    titleTr: 'Otel Alım/Satım/Kiralama Aracılık Danışmanlığı',
    titleEn: 'Hotel Acquisition / Sale / Lease Brokerage',
    titleAr: 'وساطة بيع وشراء وتأجير الفنادق',
    titleRu: 'Брокеридж (Покупка/Продажа/Аренда)',
    descTr: 'Otelcilik sektöründe yatırımcı ile otel sahibi arasındaki kritik köprüyü kuruyoruz.',
    descEn: 'Establishing a critical bridge between investors and hotel owners in the hospitality sector.',
    descAr: 'تأسيس جسر حيوي بين المستثمرين وأصحاب الفنادق في قطاع الضيافة.',
    descRu: 'Создание критически важного моста между инвесторами и владельцами отелей.',
    items: [
      { titleTr: 'Satış Aracılığı', titleEn: 'Sales Brokerage', titleAr: 'وساطة المبيعات', titleRu: 'Посредничество в продажах', descTr: 'Doğru alıcı ve satıcıyı buluşturarak mülkün değerinde el değiştirmesini sağlarız.', descEn: 'Matching the right buyers and sellers to ensure property changes hands at its true value.', descAr: 'الجمع بين المشترين والبائعين المناسبين لضمان انتقال ملكية العقار بقيمته الحقيقية.', descRu: 'Подбор покупателей и продавцов для передачи собственности по ее истинной стоимости.' },
    ],
  },
]

function ServiceAccordion({ service, lang }) {
  const [openItem, setOpenItem] = useState(null)

  const getTitle = (obj) => {
    if (lang === 'tr') return obj.titleTr
    if (lang === 'en') return obj.titleEn
    if (lang === 'ar') return obj.titleAr || obj.titleEn
    if (lang === 'ru') return obj.titleRu || obj.titleEn
    return obj.titleEn
  }

  const getDesc = (obj) => {
    if (lang === 'tr') return obj.descTr
    if (lang === 'en') return obj.descEn
    if (lang === 'ar') return obj.descAr || obj.descEn
    if (lang === 'ru') return obj.descRu || obj.descEn
    return obj.descEn
  }

  const getCta = (obj) => {
    if (lang === 'tr') return obj.ctaTr
    if (lang === 'en') return obj.ctaEn
    if (lang === 'ar') return obj.ctaAr || obj.ctaEn
    if (lang === 'ru') return obj.ctaRu || obj.ctaEn
    return obj.ctaEn
  }

  return (
    <div style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 48px rgba(27,47,94,0.06)', marginBottom: '32px', border: '1px solid #f0f4fb' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Left: Image Container - Fixed Aspect Ratio and Constrained Size */}
        <div style={{ 
          width: 'min(100%, 420px)', 
          height: 'min(100vw, 320px)', 
          margin: '35px auto 14px', 
          marginLeft: '40px',
          borderRadius: '16px', 
          overflow: 'hidden', 
          flexShrink: 0,
          position: 'relative',
          alignSelf: 'flex-start'
        }} className="service-image-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt={getTitle(service)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
        </div>
        {/* Right: accordion items */}
        <div style={{ flex: 1, minWidth: '320px', padding: '0' }}>
          <div style={{ padding: '35px 40px 25px', borderBottom: '1px solid #f0f4fb' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
              <div style={{ width: '6px', alignSelf: 'stretch', background: '#C8232C', borderRadius: '4px', flexShrink: 0 }} />
              <div>
                <h3 style={{ color: '#1B2F5E', fontSize: '2.5rem', fontWeight: '900', margin: 0, lineHeight: 1.1, letterSpacing: '-1px' }}>
                  {getTitle(service)}
                </h3>
                <p style={{ color: '#505878', fontSize: '1.3rem', margin: '15px 0 0', lineHeight: 1.6, fontWeight: '500', opacity: 0.9 }}>
                  {getDesc(service)}
                </p>
              </div>
            </div>
          </div>
          <div style={{ maxHeight: '550px', overflowY: 'auto', padding: '5px 0' }}>
            {service.items.map((item, idx) => (
              <div key={idx} style={{ borderBottom: idx < service.items.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                <button
                  onClick={() => setOpenItem(openItem === idx ? null : idx)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '18px 40px', background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', gap: '16px',
                    background: openItem === idx ? '#fcfdff' : 'transparent',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span style={{ color: openItem === idx ? '#C8232C' : '#1B2F5E', fontWeight: '800', fontSize: '1.35rem', lineHeight: 1.4, display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#C8232C', minWidth: '32px', fontSize: '0.85rem', fontWeight: '900', opacity: 0.8 }}>{String(idx + 1).padStart(2, '0')}</span>
                    {getTitle(item)}
                  </span>
                  <div style={{ 
                    width: '24px', height: '24px', borderRadius: '50%', border: '1.2px solid',
                    borderColor: openItem === idx ? '#C8232C' : '#e2e8f0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    transition: 'all 0.3s'
                  }}>
                    <span style={{ color: openItem === idx ? '#C8232C' : '#8a94b2', fontSize: '1rem', fontWeight: '700', transform: openItem === idx ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>+</span>
                  </div>
                </button>
                {openItem === idx && (
                  <div style={{ padding: '0 40px 24px 72px' }}>
                    <p style={{ color: '#64748b', lineHeight: '1.75', fontSize: '1.15rem', margin: '0', fontWeight: '500' }}>
                      {getDesc(item)}
                    </p>
                  </div>
                )}
              </div>
            ))}
            {service.ctaHref && (
              <div style={{ padding: '20px 40px 28px' }}>
                <Link href={service.ctaHref} className="tf-btn style-3">
                  {getCta(service)}
                  <i className="icon-chevron-right" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OurService() {
  const { lang, t } = useLanguage()
  const [openCat, setOpenCat] = useState(0)

  const getTitle = (obj) => {
    if (lang === 'tr') return obj.titleTr
    if (lang === 'en') return obj.titleEn
    if (lang === 'ar') return obj.titleAr || obj.titleEn
    if (lang === 'ru') return obj.titleRu || obj.titleEn
    return obj.titleEn
  }

	return (
		<>
      {/* Page Header */}
      <section style={{ background: '#f5f8fd', padding: '60px 0 40px' }}>
        <div className="tf-container">
          <div className="row">
            <div className="col-12 text-center">
              <p style={{ color: '#C8232C', fontWeight: '600', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                <i className="icon-angles-right moveLeftToRight" style={{ marginRight: '6px' }} />
                {t('navOurService')}
              </p>
              <h1 style={{ color: '#1B2F5E', fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: '900', marginBottom: '20px', lineHeight: 1.1 }}>
                {getTitle(serviceCategories[0])} & {getTitle(serviceCategories[2])}
              </h1>
              <p style={{ color: '#3d4a63', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.45rem', fontWeight: '500' }}>
                {lang === 'tr' ? 'Yatırım fizibilitesinden marka entegrasyonuna, yönetimden denetime — otelcilik sektörü için kapsamlı danışmanlık hizmetleri.' : 
                 lang === 'ar' ? 'من دراسة جدوى الاستثمار إلى دمج العلامة التجارية ، ومن الإدارة إلى التدقيق - خدمات استشارية شاملة لقطاع الضيافة.' :
                 lang === 'ru' ? 'От ТЭО инвестиций до интеграции бренда, от управления до аудита — комплексные консалтинговые услуги для индустрии гостеприимства.' :
                 'From investment feasibility to brand integration, management to audit — comprehensive consulting services for the hospitality industry.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs + Accordion */}
      <section style={{ background: '#fff', padding: '48px 0' }}>
        <div className="tf-container">
          {/* Category selector */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px', justifyContent: 'center' }}>
            {serviceCategories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setOpenCat(i)}
                style={{
                  padding: '10px 20px', borderRadius: '50px', border: '1.5px solid',
                  borderColor: openCat === i ? '#C8232C' : '#dce8f7',
                  background: openCat === i ? '#C8232C' : '#fff',
                  color: openCat === i ? '#fff' : '#1B2F5E',
                  fontWeight: '600', fontSize: '1.07rem', cursor: 'pointer',
                  transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '7px',
                }}
              >
                <i className={cat.icon} style={{ fontSize: '0.9rem' }} />
                {getTitle(cat)}
              </button>
            ))}
          </div>

          {/* Active category accordion */}
          <ServiceAccordion service={serviceCategories[openCat]} lang={lang} />
        </div>
      </section>
		</>
	)
}
