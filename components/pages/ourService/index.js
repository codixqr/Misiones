'use client'
import { useState, useEffect } from 'react'
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
      {
        titleTr: 'Proje Yönetimi',
        titleEn: 'Project Management',
        titleAr: 'إدارة المشروع',
        titleRu: 'Управление проектом',
        descTr: 'Planın hayata geçirilmesi, sahadaki uygulama, koordinasyon ve kriz yönetimi bu aşamada yapılır. Piyasa koşullarındaki dalgalanmalara adaptasyon da proje yönetiminin becerisidir.',
        descEn: 'Implementation of the plan, field application, coordination and crisis management are done at this stage. Adaptation to fluctuations in market conditions is also a skill of project management.',
        descAr: 'يتم تنفيذ الخطة والتطبيق الميداني والتنسيق وإدارة الأزمات في هذه المرحلة.',
        descRu: 'Реализация плана, полевое применение, координация и антикризисное управление на этом этапе.',
      },
      {
        titleTr: 'Proje Danışmanlığı',
        titleEn: 'Project Consulting',
        titleAr: 'استشارات المشروع',
        titleRu: 'Проектный консалтинг',
        descTr: 'Yatırımcıya sürekli rehberlik, piyasa trendleriyle uyum, risklerin önceden görülmesi ve stratejik karar desteği sağlar. Yatırımcının yanında duran sektörel akıl hocasıdır.',
        descEn: 'Provides continuous guidance to the investor, alignment with market trends, foresight of risks and strategic decision support. It is the sectoral mentor standing by the investor\'s side.',
        descAr: 'يوفر التوجيه المستمر للمستثمر والتوافق مع اتجاهات السوق والدعم الاستراتيجي.',
        descRu: 'Обеспечивает непрерывное руководство инвестору, соответствие рыночным трендам и стратегическую поддержку.',
      },
      {
        titleTr: 'Mimari Tasarım ve Proje Tasarımı',
        titleEn: 'Architectural Design & Project Design',
        titleAr: 'التصميم المعماري وتصميم المشروع',
        titleRu: 'Архитектурный и проектный дизайн',
        descTr: 'Mimari tasarım, otelin kimliğini ve misafir deneyimini belirler. Finansal ve operasyonel temeller oturmadan mimari tasarımın değeri sınırlı kalır. Yatırımın yüzü ve ruhudur; doğru konsept, pazarda farklılaşmayı sağlar.',
        descEn: 'Architectural design determines the identity of the hotel and the guest experience. Without financial and operational foundations in place, the value of architectural design remains limited.',
        descAr: 'يحدد التصميم المعماري هوية الفندق وتجربة الضيوف. بدون الأسس المالية والتشغيلية تبقى قيمة التصميم محدودة.',
        descRu: 'Архитектурный дизайн определяет идентичность отеля и гостевой опыт. Без финансовых и операционных основ его ценность ограничена.',
      },
      {
        titleTr: 'Sertifikasyon',
        titleEn: 'Certification',
        titleAr: 'الشهادات',
        titleRu: 'Сертификация',
        descTr: 'Sertifikasyon (sürdürülebilirlik, kalite, güvenlik belgeleri) yatırımın değerini artırır, pazarlama gücünü yükseltir. Yatırımın prestij ve güven damgasıdır.',
        descEn: 'Certification (sustainability, quality, security certificates) increases the value of the investment and increases marketing power. It is the prestige and trust stamp of the investment.',
        descAr: 'تزيد الشهادات من قيمة الاستثمار وقوته التسويقية. إنها ختم المكانة والثقة للاستثمار.',
        descRu: 'Сертификация повышает ценность инвестиций и маркетинговую силу. Это знак престижа и доверия.',
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
      {
        titleTr: 'Uluslararası Marka Franchising Alımı',
        titleEn: 'International Brand Franchising',
        titleAr: 'الامتياز التجاري الدولي',
        titleRu: 'Международный франчайзинг',
        descTr: 'Eğer otel global bir zincirin gücünü kullanmak istiyorsa, franchising alımı marka belirlemenin hemen ardından gelir. Global zincirlerin tanınırlığı, dağıtım kanalları ve sadakat programları sayesinde otel hızla uluslararası görünürlük kazanır.',
        descEn: 'If the hotel wants to use the power of a global chain, franchising acquisition comes immediately after brand definition. Thanks to global chain recognition, distribution channels and loyalty programs, the hotel quickly gains international visibility.',
        descAr: 'إذا أراد الفندق استخدام قوة سلسلة عالمية، فإن الامتياز التجاري يأتي مباشرة بعد تحديد العلامة التجارية.',
        descRu: 'Если отель хочет использовать силу глобальной сети, приобретение франшизы следует сразу после определения бренда.',
      },
      {
        titleTr: 'Marka İçin Stratejik İlişkiler Danışmanlığı',
        titleEn: 'Strategic Relations Consulting for Brand',
        titleAr: 'استشارات العلاقات الاستراتيجية للعلامة التجارية',
        titleRu: 'Консалтинг по стратегическим связям бренда',
        descTr: 'Marka kimliği ve hukuki güvence sağlandıktan sonra, onu büyütecek ve güçlendirecek olan şey stratejik ilişkilerdir (uluslararası zincirlerle işbirliği, OTA\'lar, tur operatörleri, yatırımcılar, medya).',
        descEn: 'After brand identity and legal security are established, what will grow and strengthen it are strategic relationships (partnerships with international chains, OTAs, tour operators, investors, media).',
        descAr: 'بعد تأسيس هوية العلامة التجارية والأمن القانوني، فإن ما سينميها ويقويها هو العلاقات الاستراتيجية.',
        descRu: 'После установления идентичности бренда и юридической защиты, стратегические связи обеспечивают рост и укрепление.',
      },
    ],
  },
  {
    id: 'yonetim',
    icon: 'flaticon-chart',
    image: '/images/section/custom/services-management.png',
    titleTr: 'Otel Yönetim Danışmanlığı',
    titleEn: 'Hotel Management Consulting',
    titleAr: 'استشارات إدارة الفنادق',
    titleRu: 'Управленческий консалтинг',
    descTr: 'Otelin açılışından operasyonel mükemmelliğe, gelir yönetiminden insan kaynaklarına kadar tüm yönetim süreçlerinde stratejik destek sunuyoruz.',
    descEn: 'We provide strategic support in all management processes from hotel opening to operational excellence, from revenue management to human resources.',
    descAr: 'نحن نقدم الدعم الاستراتيجي في جميع عمليات الإدارة من افتتاح الفندق إلى التميز التشغيلي.',
    descRu: 'Мы предоставляем стратегическую поддержку во всех процессах управления: от открытия до операционной эффективности.',
    items: [
      { titleTr: 'Açılış Öncesi Hizmetleri', titleEn: 'Pre-Opening Services', titleAr: 'خدمات ما قبل الافتتاح', titleRu: 'Предпусковые услуги', descTr: 'Bir otelin kaderi daha kapıları açılmadan belirlenir. Konsept, konumlandırma, operasyonel hazırlık ve ilk izlenim, uzun vadeli başarı için kritiktir.', descEn: 'The fate of a hotel is determined before its doors open. Concept, positioning, operational readiness and first impression are critical for long-term success.', descAr: 'يتحدد مصير الفندق قبل فتح أبوابه. المفهوم والجاهزية التشغيلية أمران حاسمان.', descRu: 'Судьба отеля определяется до открытия. Концепция и готовность критически важны.' },
      { titleTr: 'Otel Gelir Yönetimi Danışmanlığı', titleEn: 'Hotel Revenue Management Consulting', titleAr: 'استشارات إدارة إيرادات الفنادق', titleRu: 'Консалтинг по управлению доходами', descTr: 'Piyasa koşullarında rekabet avantajı yaratmanın en güçlü aracıdır. Talep tahmini, fiyatlandırma stratejileri ve kanal yönetimi, sürdürülebilir kârlılığın kalbidir.', descEn: 'It is the most powerful tool for creating competitive advantage. Demand forecasting, pricing strategies and channel management are the heart of sustainable profitability.', descAr: 'إنها أقوى أداة لخلق ميزة تنافسية في ظروف السوق.', descRu: 'Самый мощный инструмент для создания конкурентного преимущества.' },
      { titleTr: 'Satış ve Pazarlama Danışmanlığı', titleEn: 'Sales & Marketing Consulting', titleAr: 'استشارات المبيعات والتسويق', titleRu: 'Консалтинг по продажам и маркетингу', descTr: 'Doğru hedef kitleye ulaşmak, marka bilinirliği ve satış kanallarının etkin kullanımı, otelin görünürlüğünü ve doluluk oranını belirler.', descEn: 'Reaching the right target audience, brand awareness and effective use of sales channels determines the hotel\'s visibility and occupancy rate.', descAr: 'الوصول إلى الجمهور المستهدف يحدد معدل إشغال الفندق.', descRu: 'Охват правильной аудитории определяет видимость и заполняемость отеля.' },
      { titleTr: 'Finansal Bütçeleme Danışmanlığı', titleEn: 'Financial Budgeting Consulting', titleAr: 'استشارات الميزانية المالية', titleRu: 'Консалтинг по финансовому бюджетированию', descTr: 'Stratejik planlamanın omurgasıdır. Kaynakların doğru dağıtımı, yatırım geri dönüşü ve krizlere karşı dayanıklılık için vazgeçilmezdir.', descEn: 'It is the backbone of strategic planning. Essential for proper allocation of resources, return on investment and resilience against crises.', descAr: 'إنها العمود الفقري للتخطيط الاستراتيجي.', descRu: 'Основа стратегического планирования.' },
      { titleTr: 'Operasyon İyileştirme ve Geliştirme', titleEn: 'Operations Improvement & Development', titleAr: 'تحسين وتطوير العمليات', titleRu: 'Улучшение и развитие операций', descTr: 'Günlük işleyişin verimliliği, misafir memnuniyetini ve maliyet kontrolünü doğrudan etkiler. Küçük iyileştirmeler bile büyük fark yaratır.', descEn: 'The efficiency of daily operations directly affects guest satisfaction and cost control. Even small improvements make a big difference.', descAr: 'كفاءة العمليات اليومية تؤثر مباشرة على رضا الضيوف.', descRu: 'Эффективность ежедневных операций напрямую влияет на удовлетворенность гостей.' },
      { titleTr: 'Kalite Oluşturma ve Geliştirme Danışmanlığı', titleEn: 'Quality Creation & Development Consulting', titleAr: 'استشارات إنشاء وتطوير الجودة', titleRu: 'Консалтинг по созданию и развитию качества', descTr: 'Misafir deneyimini standardize eder ve markanın uzun vadeli itibarı için temel oluşturur. Kalite, sadakat ve tekrar eden misafir demektir.', descEn: 'Standardizes the guest experience and forms the foundation for the long-term reputation of the brand. Quality means loyalty and repeat guests.', descAr: 'يعمل على توحيد تجربة الضيوف. الجودة تعني الولاء.', descRu: 'Стандартизирует гостевой опыт. Качество означает лояльность и повторные визиты.' },
      { titleTr: 'İnsan Kaynakları Eğitim Danışmanlığı', titleEn: 'HR Training Consulting', titleAr: 'استشارات التدريب والموارد البشرية', titleRu: 'Консалтинг по обучению персонала', descTr: 'Otelin ruhunu oluşturan ekiptir. Doğru eğitim, motivasyon ve kültür, operasyonel mükemmelliğin sürdürülebilirliğini sağlar.', descEn: 'It is the team that forms the soul of the hotel. Proper training, motivation and culture ensures the sustainability of operational excellence.', descAr: 'الفريق هو الذي يشكل روح الفندق.', descRu: 'Команда формирует душу отеля. Обучение обеспечивает устойчивость операционного совершенства.' },
      { titleTr: 'Otel Yönetimi Danışmanlığı', titleEn: 'Hotel Management Consulting', titleAr: 'استشارات إدارة الفنادق', titleRu: 'Управленческий консалтинг', descTr: 'Genel stratejik yönlendirmedir. Yönetim ekibine rehberlik ederek tüm fonksiyonların uyum içinde çalışmasını sağlar.', descEn: 'General strategic direction. Guides the management team and ensures all functions work in harmony.', descAr: 'التوجيه الاستراتيجي العام. يوجه فريق الإدارة.', descRu: 'Общее стратегическое руководство. Обеспечивает гармоничную работу всех функций.' },
      { titleTr: 'Otel Varlık Yönetimi Danışmanlığı', titleEn: 'Hotel Asset Management Consulting', titleAr: 'استشارات إدارة أصول الفنادق', titleRu: 'Консалтинг по управлению активами', descTr: 'Yatırımcı perspektifinden bakıldığında, varlığın değerini korumak ve artırmak için kritiktir. Uzun vadeli sürdürülebilirlik ve yatırım getirisi odaklıdır.', descEn: 'From an investor perspective, it is critical to preserve and increase the value of the asset. Focused on long-term sustainability and Return on Investment.', descAr: 'من منظور المستثمر، من الضروري الحفاظ على قيمة الأصول وزيادتها.', descRu: 'С точки зрения инвестора, критически важно сохранять и увеличивать стоимость активов.' },
      { titleTr: 'Otel Yeniden Yapılandırma Yönetimi Danışmanlığı', titleEn: 'Hotel Restructuring Management Consulting', titleAr: 'استشارات إعادة هيكلة إدارة الفنادق', titleRu: 'Консалтинг по реструктуризации', descTr: 'Kriz veya başarısızlık durumunda devreye girer. Yeniden konumlandırma, finansal ve operasyonel rehabilitasyon ile oteli ikinci bir hayata taşır.', descEn: 'It comes into play in case of crisis or failure. Repositioning, financial and operational rehabilitation brings the hotel to a second life.', descAr: 'يدخل حيز التنفيذ في حالة الأزمة. إعادة التموضع تعيد الفندق إلى الحياة.', descRu: 'Вступает в действие в случае кризиса. Репозиционирование дает отелю вторую жизнь.' },
      { titleTr: 'Ürün Geliştirme Danışmanlığı', titleEn: 'Product Development Consulting', titleAr: 'استشارات تطوير المنتجات', titleRu: 'Консалтинг по развитию продукта', descTr: 'Yenilikçi hizmetler ve konseptler ile rekabet avantajı sağlar. Temel yapı oturduktan sonra öncelik kazanır.', descEn: 'Provides competitive advantage with innovative services and concepts. Gains priority after the basic structure is established.', descAr: 'يوفر ميزة تنافسية بالخدمات والمفاهيم المبتكرة.', descRu: 'Обеспечивает конкурентное преимущество через инновационные услуги и концепции.' },
    ],
  },
  {
    id: 'hip',
    icon: 'flaticon-rocket',
    image: '/images/section/custom/services-hip.png',
    titleTr: 'HIP - Hotel Improvement Plan',
    titleEn: 'HIP - Hotel Improvement Plan',
    titleAr: 'HIP - خطة تحسين الفندق',
    titleRu: 'HIP - План улучшения отеля',
    descTr: 'HIP, otelinizin performansını KPI bazlı analiz ederek gelir, operasyon ve maliyet tarafında ölçülebilir iyileştirme sunan dönüşüm programımızdır.',
    descEn: 'HIP is our transformation program that analyzes your hotel with KPI-based metrics and delivers measurable improvements in revenue, operations, and cost control.',
    descAr: 'HIP هو برنامج التحول الخاص بنا الذي يحلل فندقك بمقاييس تعتمد على مؤشرات الأداء الرئيسية.',
    descRu: 'HIP — это наша программа трансформации, которая анализирует ваш отель на основе KPI.',
    items: [
      { titleTr: 'KPI Tabanlı Durum Analizi', titleEn: 'KPI-Based Current State Analysis', titleAr: 'التحليل القائم على مؤشرات الأداء', titleRu: 'Анализ текущего состояния на основе KPI', descTr: 'RevPAR, ADR, doluluk, kanal dağılımı, maliyet ve ekip verimliliği göstergeleriyle otelinizin güçlü ve zayıf alanlarını netleştiririz.', descEn: 'We identify strengths and weaknesses through RevPAR, ADR, occupancy, channel mix, cost and team productivity metrics.', descAr: 'نحدد نقاط القوة والضعف من خلال مؤشرات الإيرادات والإشغال.', descRu: 'Выявляем сильные и слабые стороны через метрики RevPAR, ADR, загрузки и каналов.' },
      { titleTr: 'Odaklı İyileştirme Aksiyonları', titleEn: 'Focused Improvement Actions', titleAr: 'إجراءات التحسين المركزة', titleRu: 'Целевые действия по улучшению', descTr: 'Fiyatlandırma, satış kanalları, operasyonel süreçler ve personel verimliliği gibi kritik alanlarda hızlı uygulanabilir aksiyon planı çıkarırız.', descEn: 'We create fast, actionable plans for critical areas such as pricing, sales channels, operations, and team productivity.', descAr: 'نضع خطط عمل سريعة للمجالات الحرجة.', descRu: 'Создаем быстрые планы действий для критических областей.' },
      { titleTr: 'Performans Takibi ve Raporlama', titleEn: 'Performance Tracking and Reporting', titleAr: 'تتبع الأداء والتقارير', titleRu: 'Отслеживание и отчетность', descTr: 'Uygulama sonrasında KPI sonuçlarını düzenli takip eder, iyileştirmelerin sürdürülebilirliğini raporlarla güvence altına alırız.', descEn: 'After implementation, we monitor KPI outcomes regularly and ensure sustainability through reporting.', descAr: 'نراقب نتائج مؤشرات الأداء بانتظام بعد التنفيذ.', descRu: 'Регулярно отслеживаем KPI после внедрения и обеспечиваем устойчивость через отчетность.' },
      { titleTr: 'Detaylı HIP Yol Haritası', titleEn: 'Detailed HIP Roadmap', titleAr: 'خارطة طريق HIP التفصيلية', titleRu: 'Детальная дорожная карта HIP', descTr: 'Tam kapsamlı metodoloji, departman bazlı benchmark ve uygulama adımları için HIP detay sayfasını kullanabilirsiniz.', descEn: 'For full methodology, department-level benchmarks, and implementation steps, see the detailed HIP page.', descAr: 'للاطلاع على المنهجية الكاملة، راجع صفحة تفاصيل HIP.', descRu: 'Полная методология, бенчмарки по департаментам — на странице HIP.' },
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
      { titleTr: 'Mali İşler Denetimi Danışmanlığı', titleEn: 'Financial Affairs Audit Consulting', titleAr: 'استشارات التدقيق المالي', titleRu: 'Аудит финансовых операций', descTr: 'Finansal sürdürülebilirlik, otelin varlığını devam ettirmesinin temelidir. Gelir-gider dengesi, nakit akışı, maliyet kontrolü ve kârlılık analizleri olmadan diğer denetimlerin anlamı kalmaz.', descEn: 'Financial sustainability is the foundation for the hotel\'s continued existence. Without income-expense balance, cash flow, cost control and profitability analyses, other audits have no meaning.', descAr: 'الاستدامة المالية هي أساس استمرار وجود الفندق.', descRu: 'Финансовая устойчивость — основа существования отеля. Без баланса доходов и расходов другие аудиты теряют смысл.' },
      { titleTr: 'Operasyon Denetimi Danışmanlığı', titleEn: 'Operations Audit Consulting', titleAr: 'استشارات تدقيق العمليات', titleRu: 'Операционный аудит', descTr: 'Günlük işleyişin verimliliği, hem mali sonuçları hem de misafir deneyimini doğrudan etkiler. Personel yönetimi, süreç optimizasyonu, stok kontrolü ve hizmet akışı burada değerlendirilir.', descEn: 'The efficiency of daily operations directly affects both financial results and the guest experience. Staff management, process optimization, inventory control and service flow are evaluated here.', descAr: 'كفاءة العمليات اليومية تؤثر مباشرة على النتائج المالية وتجربة الضيوف.', descRu: 'Эффективность ежедневных операций напрямую влияет на финансовые результаты и гостевой опыт.' },
      { titleTr: 'Kalite Denetimi Danışmanlığı', titleEn: 'Quality Audit Consulting', titleAr: 'استشارات تدقيق الجودة', titleRu: 'Аудит качества', descTr: 'Misafir memnuniyeti ve marka itibarı kalite standartlarının korunmasına bağlıdır. ISO, HACCP gibi uluslararası standartlara uyum, otelin pazardaki konumunu güçlendirir.', descEn: 'Guest satisfaction and brand reputation depend on maintaining quality standards. Compliance with international standards such as ISO and HACCP strengthens the hotel\'s position in the market.', descAr: 'رضا الضيوف وسمعة العلامة التجارية تعتمد على الحفاظ على معايير الجودة.', descRu: 'Удовлетворенность гостей и репутация бренда зависят от поддержания стандартов качества.' },
      { titleTr: 'Gizli Misafir Hizmetleri Danışmanlığı', titleEn: 'Mystery Guest Services Consulting', titleAr: 'استشارات خدمات الضيف السري', titleRu: 'Консалтинг «Тайный гость»', descTr: 'Gizli misafir uygulamaları, kalite ve operasyon denetimlerinin sahadaki doğrulamasıdır. Artan misafir beklentileri ve rekabet nedeniyle otellerin kendilerini dış gözle değerlendirmesi önemlidir.', descEn: 'Mystery guest applications are field verification of quality and operations audits. It is important for hotels to evaluate themselves with an external eye due to increasing guest expectations and competition.', descAr: 'تطبيقات الضيف السري هي التحقق الميداني من عمليات تدقيق الجودة والعمليات.', descRu: 'Программа «Тайный гость» — полевая верификация качества и операционного аудита.' },
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
    image: '/images/section/custom/services-revenue-sales.png',
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
      { titleTr: 'Çevre Yönetim Sistemi', titleEn: 'Environmental Management System', titleAr: 'نظام الإدارة البيئية', titleRu: 'Система экологического менеджмента', descTr: 'Enerji verimliliği, su yönetimi, atık azaltma ve karbon ayak izi hesaplama ile çevresel etkinin minimize edilmesi için kapsamlı sistemler kurulur.', descEn: 'Comprehensive systems are established to minimize environmental impact through energy efficiency, water management, waste reduction and carbon footprint calculation.', descAr: 'يتم إنشاء أنظمة شاملة لتقليل التأثير البيئي من خلال كفاءة الطاقة وإدارة المياه.', descRu: 'Создаются комплексные системы для минимизации экологического воздействия.' },
      { titleTr: 'Sürdürülebilirlik Sertifikasyonu', titleEn: 'Sustainability Certification', titleAr: 'شهادة الاستدامة', titleRu: 'Сертификация устойчивости', descTr: 'Green Key, EarthCheck, ISO 14001 gibi uluslararası sürdürülebilirlik sertifikaları için danışmanlık ve başvuru süreçleri yönetilir.', descEn: 'Consulting and application processes for international sustainability certificates such as Green Key, EarthCheck, ISO 14001 are managed.', descAr: 'تتم إدارة عمليات الاستشارات والتقديم لشهادات الاستدامة الدولية.', descRu: 'Управляем процессами консалтинга и подачи заявок на международные сертификаты устойчивости.' },
      { titleTr: 'Sosyal Sorumluluk Programları', titleEn: 'Social Responsibility Programs', titleAr: 'برامج المسؤولية الاجتماعية', titleRu: 'Программы социальной ответственности', descTr: 'Yerel topluma katkı, çalışan refahı ve kültürel mirasın korunması konularında sürdürülebilir programlar tasarlanır ve uygulanır.', descEn: 'Sustainable programs are designed and implemented in areas of contribution to the local community, employee welfare and cultural heritage preservation.', descAr: 'يتم تصميم وتنفيذ برامج مستدامة للمساهمة في المجتمع المحلي ورفاهية الموظفين.', descRu: 'Разрабатываются устойчивые программы для местного сообщества, благополучия сотрудников и сохранения культурного наследия.' },
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
      { titleTr: 'Otel Satış Aracılığı', titleEn: 'Hotel Sales Brokerage', titleAr: 'وساطة مبيعات الفنادق', titleRu: 'Посредничество в продаже отелей', descTr: 'Doğru alıcı ve satıcıyı buluşturarak mülkün gerçek değerinde el değiştirmesini sağlarız. Piyasa fiyatını ve doğru zamanlamayı belirleyerek taraflar için optimum sonucu garanti ediyoruz.', descEn: 'Matching the right buyers and sellers to ensure property changes hands at its true value. We identify market pricing and optimal timing to guarantee the best outcome for all parties.', descAr: 'الجمع بين المشترين والبائعين لضمان انتقال ملكية العقار بقيمته الحقيقية.', descRu: 'Подбор покупателей и продавцов для передачи собственности по истинной стоимости с оптимальными сроками.' },
      { titleTr: 'Kiralama & İşletme Devri', titleEn: 'Lease & Management Transfer', titleAr: 'الإيجار ونقل الإدارة', titleRu: 'Аренда и передача управления', descTr: 'Kiralama ve işletme haklarının devri süreçlerinde hukuki ve stratejik danışmanlık. Sözleşme yapılarını, finansal koşulları ve operasyonel geçiş planlarını yönetiyoruz.', descEn: 'Legal and strategic consulting during the transfer of leasing and management rights. We manage contract structures, financial terms and operational transition plans.', descAr: 'الاستشارات القانونية والاستراتيجية أثناء نقل حقوق الإيجار والإدارة.', descRu: 'Юридический и стратегический консалтинг при передаче прав аренды и управления.' },
      { titleTr: 'Yatırımcı-Sahip Buluşturma', titleEn: 'Investor-Owner Matchmaking', titleAr: 'الجمع بين المستثمر والمالك', titleRu: 'Подбор инвестор-владелец', descTr: 'Yeni projeler için sermaye ve vizyon sahibi yatırımcılarla mülk sahiplerini bir araya getiriyoruz. Bölgesel piyasa analizleri ve yatırım potansiyeli değerlendirmeleriyle en uygun eşleşmeyi sağlıyoruz.', descEn: 'Bringing together property owners with capital-ready and visionary investors for new projects. Regional market analyses and investment potential assessments ensure the ideal match.', descAr: 'الجمع بين أصحاب العقارات والمستثمرين أصحاب الرؤية للمشاريع الجديدة.', descRu: 'Соединяем владельцев с инвесторами для новых проектов через региональный анализ.' },
      { titleTr: 'Değerleme & Piyasa Analizi', titleEn: 'Valuation & Market Analysis', titleAr: 'التقييم وتحليل السوق', titleRu: 'Оценка и анализ рынка', descTr: 'Otel varlıklarının gerçek piyasa değerini belirliyoruz. Rekabet analizi, gelir potansiyeli ve fiziksel durum değerlendirmeleriyle kapsamlı bir değerleme raporu sunuyoruz.', descEn: 'We determine the true market value of hotel assets through competitive analysis, revenue potential assessment and physical condition evaluation.', descAr: 'نحدد القيمة السوقية الحقيقية لأصول الفنادق من خلال التحليل التنافسي.', descRu: 'Определяем реальную рыночную стоимость активов через конкурентный анализ и оценку потенциала.' },
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

  useEffect(() => {
    // Handle category selection via URL query param
    const params = new URLSearchParams(window.location.search)
    const catId = params.get('cat')
    if (catId) {
      const index = serviceCategories.findIndex(c => c.id === catId)
      if (index !== -1) {
        setOpenCat(index)
        // Scroll to content if needed
        const el = document.getElementById('services-content')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  const getTitle = (obj) => {
    if (!obj) return ''
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
      <section id="services-content" style={{ background: '#fff', padding: '48px 0' }}>
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
