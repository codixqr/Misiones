'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/utils/LanguageContext'

const serviceCategories = [
  {
    id: 'yonetim',
    icon: 'flaticon-chart',
    image: '/images/section/service-yonetim-danis.jpg',
    titleTr: 'Otel Yönetim Danışmanlığı',
    titleEn: 'Hotel Management Consulting',
    descTr: 'Otelin açılışından operasyonel mükemmelliğe, gelir yönetiminden insan kaynaklarına kadar tüm yönetim süreçlerinde stratejik destek sunuyoruz.',
    descEn: 'We provide strategic support in all management processes from hotel opening to operational excellence, from revenue management to human resources.',
    items: [
      { titleTr: 'Açılış Öncesi ve Açılış Hizmetleri', titleEn: 'Pre-Opening & Opening Services', descTr: 'Bir otelin kaderi daha kapıları açılmadan belirlenir. Konsept, konumlandırma, operasyonel hazırlık ve ilk izlenim, uzun vadeli başarı için kritiktir.', descEn: 'The fate of a hotel is determined before its doors open. Concept, positioning, operational readiness and first impression are critical for long-term success.' },
      { titleTr: 'Otel Gelir Yönetimi Danışmanlığı', titleEn: 'Hotel Revenue Management Consulting', descTr: 'Piyasa koşullarında rekabet avantajı yaratmanın en güçlü aracıdır. Talep tahmini, fiyatlandırma stratejileri ve kanal yönetimi, sürdürülebilir kârlılığın kalbidir.', descEn: 'It is the most powerful tool for creating competitive advantage in market conditions. Demand forecasting, pricing strategies and channel management are the heart of sustainable profitability.' },
      { titleTr: 'Satış ve Pazarlama Danışmanlığı', titleEn: 'Sales & Marketing Consulting', descTr: 'Doğru hedef kitleye ulaşmak, marka bilinirliği ve satış kanallarının etkin kullanımı, otelin görünürlüğünü ve doluluk oranını belirler.', descEn: 'Reaching the right target audience, brand awareness and effective use of sales channels determines the hotel\'s visibility and occupancy rate.' },
      { titleTr: 'Finansal Bütçeleme Danışmanlığı', titleEn: 'Financial Budgeting Consulting', descTr: 'Stratejk planlamanın omurgasıdır. Kaynakların doğru dağıtımı, yatırım geri dönüşü ve krizlere karşı dayanıklılık için vazgeçilmezdir.', descEn: 'It is the backbone of strategic planning. Essential for proper allocation of resources, return on investment and resilience against crises.' },
      { titleTr: 'Operasyon İyileştirme ve Geliştirme', titleEn: 'Operations Improvement & Development', descTr: 'Günlük işleyişin verimliliği, misafir memnuniyetini ve maliyet kontrolünü doğrudan etkiler. Küçük iyileştirmeler bile büyük fark yaratır.', descEn: 'The efficiency of daily operations directly affects guest satisfaction and cost control. Even small improvements make a big difference.' },
      { titleTr: 'Kalite Oluşturma ve Geliştirme Danışmanlığı', titleEn: 'Quality Creation & Development Consulting', descTr: 'Misafir deneyimini standardize eder ve markanın uzun vadeli itibarı için temel oluşturur. Kalite, sadakat ve tekrar eden misafir demektir.', descEn: 'Standardizes the guest experience and forms the foundation for the long-term reputation of the brand. Quality means loyalty and repeat guests.' },
      { titleTr: 'İnsan Kaynakları Eğitim Danışmanlığı', titleEn: 'HR Training Consulting', descTr: 'Otelin ruhunu oluşturan ekiptir. Doğru eğitim, motivasyon ve kültür, operasyonel mükemmelliğin sürdürülebilirliğini sağlar.', descEn: 'It is the team that forms the soul of the hotel. Proper training, motivation and culture ensures the sustainability of operational excellence.' },
      { titleTr: 'Otel Yönetimi Danışmanlığı', titleEn: 'Hotel Management Consulting', descTr: 'Genel stratejik yönlendirmedir. Yönetim ekibine rehberlik ederek tüm fonksiyonların uyum içinde çalışmasını sağlar.', descEn: 'General strategic direction. Guides the management team and ensures all functions work in harmony.' },
      { titleTr: 'Otel Varlık Yönetimi Danışmanlığı', titleEn: 'Hotel Asset Management Consulting', descTr: 'Yatırımcı perspektifinden bakıldığında, varlığın değerini korumak ve artırmak için kritiktir. Uzun vadeli sürdürülebilirlik ve Return on Investment - Yatırım Getirisi odaklıdır.', descEn: 'From an investor perspective, it is critical to preserve and increase the value of the asset. Focused on long-term sustainability and Return on Investment.' },
      { titleTr: 'Otel Yeniden Yapılandırma Yönetimi Danışmanlığı', titleEn: 'Hotel Restructuring Management Consulting', descTr: 'Kriz veya başarısızlık durumunda devreye girer. Yeniden konumlandırma, finansal ve operasyonel rehabilitasyon ile oteli ikinci bir hayata taşır.', descEn: 'It comes into play in case of crisis or failure. Repositioning, financial and operational rehabilitation brings the hotel to a second life.' },
      { titleTr: 'Ürün Geliştirme Danışmanlığı', titleEn: 'Product Development Consulting', descTr: 'Yenilikçi hizmetler ve konseptler ile rekabet avantajı sağlar. Temel yapı oturduktan sonra öncelik kazanır.', descEn: 'Provides competitive advantage with innovative services and concepts. Gains priority after the basic structure is established.' },
    ],
  },
  {
    id: 'marka',
    icon: 'flaticon-market',
    image: '/images/section/service-marka-integ.jpg',
    titleTr: 'Otel Marka Entegrasyonu Danışmanlığı',
    titleEn: 'Hotel Brand Integration Consulting',
    descTr: 'Markanın kimliği, ruhu ve geleceğini doğru şekillendirmek; rekabette farklılaşmayı ve sürdürülebilir büyümeyi sağlamak için stratejik marka yönetimi hizmetleri sunuyoruz.',
    descEn: 'We provide strategic brand management services to correctly shape the identity, soul and future of the brand; to ensure differentiation in competition and sustainable growth.',
    items: [
      {
        titleTr: 'Marka Belirleme',
        titleEn: 'Brand Definition',
        descTr: 'Marka bir otelin kimliği, ruhu ve gelecekteki tüm stratejilerinin temelini oluşturur. Rekabetin yoğun olduğu turizm sektöründe, farklılaşma ve özgünlük markanın belirlenmesiyle başlar.',
        descEn: 'Brand forms the foundation of a hotel\'s identity, soul and all future strategies. In the highly competitive tourism sector, differentiation and authenticity begin with brand definition.',
      },
      {
        titleTr: 'Marka Alma',
        titleEn: 'Brand Acquisition',
        descTr: 'Belirlenen markanın hukuki olarak korunması, sürdürülebilirlik ve yatırım güvenliği açısından kritik önem arz eder. Markanın tescili rekabet avantajını korur ve olası taklitleri engeller.',
        descEn: 'Legal protection of the determined brand is critically important for sustainability and investment security. Brand registration protects competitive advantage and prevents possible imitations.',
      },
      {
        titleTr: 'Uluslararası Marka Franchising Alımı',
        titleEn: 'International Brand Franchising',
        descTr: 'Eğer otel global bir zincirin gücünü kullanmak istiyorsa, franchising alımı marka belirlemenin hemen ardından gelir. Global zincirlerin tanınırlığı, dağıtım kanalları ve sadakat programları sayesinde otel hızla uluslararası görünürlük kazanır.',
        descEn: 'If the hotel wants to use the power of a global chain, franchising acquisition comes immediately after brand definition. Thanks to global chain recognition, distribution channels and loyalty programs, the hotel quickly gains international visibility.',
      },
      {
        titleTr: 'Marka İçin Stratejik İlişkiler Danışmanlığı',
        titleEn: 'Strategic Relations Consulting for Brand',
        descTr: 'Marka kimliği ve hukuki güvence sağlandıktan sonra, onu büyütecek ve güçlendirecek olan şey stratejik ilişkilerdir (uluslararası zincirlerle işbirliği, OTA\'lar, tur operatörleri, yatırımcılar, medya).',
        descEn: 'After brand identity and legal security are established, what will grow and strengthen it are strategic relationships (partnerships with international chains, OTAs, tour operators, investors, media).',
      },
    ],
  },
  {
    id: 'yatirim',
    icon: 'flaticon-building',
    image: '/images/section/service-yatirim-analiz.jpg',
    titleTr: 'Otel Yatırım Danışmanlığı',
    titleEn: 'Hotel Investment Consulting',
    descTr: 'Doğru yatırım kararları, projenin başından itibaren sahadan gelen veriler ve deneyimle şekillendirilmelidir. Fizibilite analizinden proje yönetimine, teşvik belgelerinden mimari danışmanlığa kadar yatırımın her aşamasında yanınızdayız.',
    descEn: 'Correct investment decisions must be shaped from the beginning of the project with data and experience from the field. We are with you at every stage of your investment.',
    items: [
      {
        titleTr: 'Yatırım Fizibilitesi',
        titleEn: 'Investment Feasibility',
        descTr: 'Piyasa koşullarını, talep projeksiyonlarını, finansal geri dönüşleri ve riskleri analiz etmeden hiçbir yatırım doğru yönlenemez. Yanlış fizibilite, en mükemmel mimari projeyi bile başarısız kılar. Yatırımın var olup olmayacağını belirleyen olmazsa olmaz aşamadır.',
        descEn: 'No investment can be directed correctly without analyzing market conditions, demand projections, financial returns and risks. Incorrect feasibility can even make the most perfect architectural project fail.',
      },
      {
        titleTr: 'Teşvik Belgelendirme',
        titleEn: 'Incentive Documentation',
        descTr: 'Türkiye\'de ve globalde otel yatırımlarının finansal sürdürülebilirliği büyük ölçüde devlet teşvikleri, vergi avantajları ve finansal desteklerle sağlanır. Doğru belgelendirme, yatırımın geri dönüş süresini dramatik biçimde kısaltır.',
        descEn: 'The financial sustainability of hotel investments in Turkey and globally is largely provided by government incentives, tax advantages and financial supports. Correct documentation dramatically shortens the return on investment period.',
      },
      {
        titleTr: 'Proje Planlama',
        titleEn: 'Project Planning',
        descTr: 'İş akışları, zaman çizelgesi, bütçe kontrolü ve kaynak yönetimi burada şekillenir. Yatırımın yol haritasıdır; doğru planlama olmadan proje yönetimi kaosa sürüklenir.',
        descEn: 'Business processes, timeline, budget control and resource management are shaped here. It is the roadmap of the investment; without proper planning, project management descends into chaos.',
      },
      {
        titleTr: 'Proje Yönetimi',
        titleEn: 'Project Management',
        descTr: 'Planın hayata geçirilmesi, sahadaki uygulama, koordinasyon ve kriz yönetimi bu aşamada yapılır. Piyasa koşullarındaki dalgalanmalara adaptasyon da proje yönetiminin becerisidir.',
        descEn: 'Implementation of the plan, field application, coordination and crisis management are done at this stage. Adaptation to fluctuations in market conditions is also a skill of project management.',
      },
      {
        titleTr: 'Proje Danışmanlığı',
        titleEn: 'Project Consulting',
        descTr: 'Yatırımcıya sürekli rehberlik, piyasa trendleriyle uyum, risklerin önceden görülmesi ve stratejik karar desteği sağlar. Yatırımcının yanında duran sektörel akıl hocasıdır.',
        descEn: 'Provides continuous guidance to the investor, alignment with market trends, foresight of risks and strategic decision support. It is the sectoral mentor standing by the investor\'s side.',
      },
      {
        titleTr: 'Mimari Tasarım ve Proje Tasarımı',
        titleEn: 'Architectural Design & Project Design',
        descTr: 'Mimari tasarım, otelin kimliğini ve misafir deneyimini belirler. Finansal ve operasyonel temeller oturmadan mimari tasarımın değeri sınırlı kalır. Yatırımın yüzü ve ruhudur; doğru konsept, pazarda farklılaşmayı sağlar.',
        descEn: 'Architectural design determines the identity of the hotel and the guest experience. Without financial and operational foundations in place, the value of architectural design remains limited.',
      },
      {
        titleTr: 'Sertifikasyon',
        titleEn: 'Certification',
        descTr: 'Sertifikasyon (sürdürülebilirlik, kalite, güvenlik belgeleri) yatırımın değerini artırır, pazarlama gücünü yükseltir. Yatırımın prestij ve güven damgasıdır.',
        descEn: 'Certification (sustainability, quality, security certificates) increases the value of the investment and increases marketing power. It is the prestige and trust stamp of the investment.',
      },
    ],
  },
  {
    id: 'denetim',
    icon: 'flaticon-inspect',
    image: '/images/section/service-denetim.jpg',
    titleTr: 'Otel Denetim Danışmanlığı',
    titleEn: 'Hotel Audit Consulting',
    descTr: 'Mali şeffaflıktan operasyonel verimliliğe, kalite standartlarından gizli misafir uygulamalarına kadar kapsamlı denetim hizmetleri sunuyoruz.',
    descEn: 'We provide comprehensive audit services from financial transparency to operational efficiency, from quality standards to mystery guest applications.',
    items: [
      { titleTr: 'Mali İşler Denetimi Danışmanlığı', titleEn: 'Financial Affairs Audit Consulting', descTr: 'Finansal sürdürülebilirlik, otelin varlığını devam ettirmesinin temelidir. Gelir-gider dengesi, nakit akışı, maliyet kontrolü ve kârlılık analizleri olmadan diğer denetimlerin anlamı kalmaz.', descEn: 'Financial sustainability is the foundation for the hotel\'s continued existence. Without income-expense balance, cash flow, cost control and profitability analyses, other audits have no meaning.' },
      { titleTr: 'Operasyon Denetimi Danışmanlığı', titleEn: 'Operations Audit Consulting', descTr: 'Günlük işleyişin verimliliği, hem mali sonuçları hem de misafir deneyimini doğrudan etkiler. Personel yönetimi, süreç optimizasyonu, stok kontrolü ve hizmet akışı burada değerlendirilir.', descEn: 'The efficiency of daily operations directly affects both financial results and the guest experience. Staff management, process optimization, inventory control and service flow are evaluated here.' },
      { titleTr: 'Kalite Denetimi Danışmanlığı', titleEn: 'Quality Audit Consulting', descTr: 'Misafir memnuniyeti ve marka itibarı kalite standartlarının korunmasına bağlıdır. ISO, HACCP gibi uluslararası standartlara uyum, otelin pazardaki konumunu güçlendirir.', descEn: 'Guest satisfaction and brand reputation depend on maintaining quality standards. Compliance with international standards such as ISO and HACCP strengthens the hotel\'s position in the market.' },
      { titleTr: 'Gizli Misafir Hizmetleri Danışmanlığı', titleEn: 'Mystery Guest Services Consulting', descTr: 'Gizli misafir uygulamaları, kalite ve operasyon denetimlerinin sahadaki doğrulamasıdır. Artan misafir beklentileri ve rekabet nedeniyle otellerin kendilerini dış gözle değerlendirmesi önemlidir.', descEn: 'Mystery guest applications are field verification of quality and operations audits. It is important for hotels to evaluate themselves with an external eye due to increasing guest expectations and competition.' },
    ],
  },
  {
    id: 'strateji',
    icon: 'flaticon-rocket',
    image: '/images/section/service-strateji.jpg',
    titleTr: 'Otel Stratejik Planlama ve Konsept Danışmanlığı',
    titleEn: 'Hotel Strategic Planning & Concept Consulting',
    descTr: 'İşletmenin ruhunu piyasa gerçekleri ile buluşturan vizyoner bir yol haritası çizerek sürdürülebilir başarıyı garanti altına almak için, veriyi ve deneyimi estetik bir hikayeye dönüştürerek, markanın kimliğini güçlendirerek, misafir deneyimini anlamlı bir sahneye taşımaya odaklanır.',
    descEn: 'Focuses on drawing a visionary roadmap that brings the spirit of the business together with market realities, transforming data and experience into an aesthetic story, strengthening the brand\'s identity, and elevating the guest experience to a meaningful stage.',
    items: [
      { titleTr: 'Vizyon ve Strateji Geliştirme', titleEn: 'Vision & Strategy Development', descTr: 'Otelin uzun vadeli yönünü belirleyen, piyasa koşullarını ve rekabeti göz önünde bulunduran kapsamlı bir vizyon ve strateji çerçevesi oluşturulur.', descEn: 'A comprehensive vision and strategy framework is created that determines the long-term direction of the hotel, taking market conditions and competition into account.' },
      { titleTr: 'Konsept Tasarımı', titleEn: 'Concept Design', descTr: 'Hedef kitleye ve konuma uygun özgün bir konsept tasarlanarak otelin pazarda farklılaşması ve hatırlanabilir bir deneyim sunması sağlanır.', descEn: 'An original concept tailored to the target audience and location is designed, enabling the hotel to differentiate in the market and offer a memorable experience.' },
      { titleTr: 'Piyasa Konumlandırma', titleEn: 'Market Positioning', descTr: 'Rekabet analizi, tüketici davranışları ve piyasa trendleri gözetilerek otelin en doğru konumda yer alması için stratejiler geliştirilir.', descEn: 'Strategies are developed for the hotel to be positioned in the most appropriate position, taking into account competitive analysis, consumer behavior and market trends.' },
    ],
  },
  {
    id: 'surdurulebilirlik',
    icon: 'flaticon-leaf',
    image: '/images/section/service-surdurulebilirlik.jpg',
    titleTr: 'Otel Sürdürülebilirlik Danışmanlığı',
    titleEn: 'Hotel Sustainability Consulting',
    descTr: 'Çevresel, sosyal ve ekonomik dengeleri gözeterek otelin uzun vadeli verimliliğini artıran stratejiler geliştirerek, kaynak kullanımını optimize ederken misafir deneyimini ve marka değerini güçlendirmeyi hedefler.',
    descEn: 'Aims to develop strategies that increase the long-term efficiency of the hotel by taking into account environmental, social and economic balances, while optimizing resource use and strengthening the guest experience and brand value.',
    items: [
      { titleTr: 'Çevre Yönetim Sistemi', titleEn: 'Environmental Management System', descTr: 'Enerji verimliliği, su yönetimi, atık azaltma ve karbon ayak izi hesaplama ile çevresel etkinin minimize edilmesi için kapsamlı sistemler kurulur.', descEn: 'Comprehensive systems are established to minimize environmental impact through energy efficiency, water management, waste reduction and carbon footprint calculation.' },
      { titleTr: 'Sürdürülebilirlik Sertifikasyonu', titleEn: 'Sustainability Certification', descTr: 'Green Key, EarthCheck, ISO 14001 gibi uluslararası sürdürülebilirlik sertifikaları için danışmanlık ve başvuru süreçleri yönetilir.', descEn: 'Consulting and application processes for international sustainability certificates such as Green Key, EarthCheck, ISO 14001 are managed.' },
      { titleTr: 'Sosyal Sorumluluk Programları', titleEn: 'Social Responsibility Programs', descTr: 'Yerel topluma katkı, çalışan refahı ve kültürel mirasın korunması konularında sürdürülebilir programlar tasarlanır ve uygulanır.', descEn: 'Sustainable programs are designed and implemented in areas of contribution to the local community, employee welfare and cultural heritage preservation.' },
    ],
  },
  {
    id: 'broker',
    icon: 'flaticon-rocket',
    image: '/images/section/our-service-01.jpg',
    titleTr: 'Hotel Broker',
    titleEn: 'Hotel Broker',
    descTr: 'Otelcilik sektöründe yatırımcı ile otel sahibi arasındaki kritik köprüyü kuruyoruz. Otel satışları, kiralamaları ve işletme devri gibi tüm süreçlerde uzman aracılık hizmeti sunarak taraflar için en uygun zemini hazırlıyoruz.',
    descEn: 'Establishing a critical bridge between investors and hotel owners. Expert brokerage in hotel sales, leases and business transfers.',
    items: [
      { titleTr: 'Otel Satış Aracılığı', titleEn: 'Hotel Sales Brokerage', descTr: 'Doğru alıcı ve satıcıyı buluşturarak mülkün gerçek değerinde el değiştirmesini sağlarız.', descEn: 'Matching the right buyers and sellers to ensure property changes hands at its true value.' },
      { titleTr: 'Kiralama & İşletme Devri', titleEn: 'Lease & Management Transfer', descTr: 'Kiralama ve işletme haklarının devri süreçlerinde hukuki ve stratejik danışmanlık.', descEn: 'Legal and strategic consulting during the transfer of leasing and management rights.' },
      { titleTr: 'Yatırımcı Buluşmaları', titleEn: 'Investor Matchmaking', descTr: 'Yeni projeler için sermaye ve vizyon sahibi yatırımcılarla mülk sahiplerini bir araya getiriyoruz.', descEn: 'Bringing together property owners with capital-ready and visionary investors for new projects.' },
    ],
  },
]

function ServiceAccordion({ service, lang }) {
  const [openItem, setOpenItem] = useState(null)

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
          <Image
            src={service.image}
            alt={lang === 'en' ? service.titleEn : service.titleTr}
            fill
            sizes="420px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* Right: accordion items */}
        <div style={{ flex: 1, minWidth: '320px', padding: '0' }}>
          <div style={{ padding: '35px 40px 25px', borderBottom: '1px solid #f0f4fb' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
              <div style={{ width: '6px', alignSelf: 'stretch', background: '#C8232C', borderRadius: '4px', flexShrink: 0 }} />
              <div>
                <h3 style={{ color: '#1B2F5E', fontSize: '2.5rem', fontWeight: '900', margin: 0, lineHeight: 1.1, letterSpacing: '-1px' }}>
                  {lang === 'en' ? service.titleEn : service.titleTr}
                </h3>
                <p style={{ color: '#505878', fontSize: '1.3rem', margin: '15px 0 0', lineHeight: 1.6, fontWeight: '500', opacity: 0.9 }}>
                  {lang === 'en' ? service.descEn : service.descTr}
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
                    {lang === 'en' ? item.titleEn : item.titleTr}
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
                      {lang === 'en' ? item.descEn : item.descTr}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}



function HipSection({ lang }) {
  const [activeLevel, setActiveLevel] = useState('tam')

  return (
    <section style={{ background: 'linear-gradient(135deg, #1B2F5E 0%, #0f1e3e 100%)', padding: '80px 0', marginTop: '60px' }}>
      <div className="tf-container">
        <div className="row mb-48">
          <div className="col-12 text-center">
            <span style={{ color: '#C8232C', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>HOTEL IMPROVEMENT PLAN</span>
            <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: '800', marginBottom: '16px' }}>HIP – Otelinizi Geliştirme Planımız</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
              Modern otelcilik için bilgece hazırlanmış bir yol haritasıdır. Otelcilik artık yalnızca misafir ağırlamak değil; veriyi anlamak, stratejiyi yönetmek ve geleceği öngörmek sanatıdır.
            </p>
          </div>
        </div>

        {/* Philosophy cards */}
        <div className="row mb-48">
          {[
            { icon: 'flaticon-chart', title: lang === 'en' ? 'Measurable Realities' : 'Ölçülebilir Gerçekler', desc: lang === 'en' ? 'We talk about measurable realities, not assumptions.' : 'Varsayımları değil, ölçülebilir gerçekleri konuşur.' },
            { icon: 'flaticon-target', title: lang === 'en' ? 'Strategic Compass' : 'Stratejik Pusula', desc: lang === 'en' ? 'KPIs are not just reported — they become a strategic compass.' : 'KPI\'ları yalnızca raporlamaz, stratejik pusulaya dönüştürür.' },
            { icon: 'flaticon-rocket', title: lang === 'en' ? 'Market Leader' : 'Piyasa Yönlendirici', desc: lang === 'en' ? 'Does not react to the market — leads it.' : 'Pazara tepki vermez, pazarı yönlendirir.' },
          ].map((card, i) => (
            <div className="col-md-4 mb-24" key={i}>
              <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '14px', padding: '28px 24px', textAlign: 'center', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', height: '100%' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(200,35,44,0.15)', border: '1.5px solid rgba(200,35,44,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <i className={card.icon} style={{ color: '#C8232C', fontSize: '1.3rem' }} />
                </div>
                <h5 style={{ color: '#fff', fontWeight: '700', marginBottom: '10px' }}>{card.title}</h5>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image + KPIs */}
        <div className="row mb-48 align-items-center">
          <div className="col-lg-6 mb-32">
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
              <Image src="/images/section/misiones-hip-infographic.png" alt="HIP Otel Geliştirme Planı" width={1400} height={788} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
          <div className="col-lg-6">
            <p style={{ color: '#C8232C', fontWeight: '600', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
              {lang === 'en' ? 'What We Measure' : 'Neleri Ölçeriz'}
            </p>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '20px', fontWeight: '700' }}>
              {lang === 'en' ? 'HIP Scans Your Hotel Like an X-Ray' : 'HIP Otelinizi Röntgen Gibi Tarar'}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
              {['RevPAR', 'ADR', 'Doluluk', 'Kanal Karışımı', 'Doğrudan Rezervasyon', 'Maliyet Yapısı', 'Personel Verimliliği', 'Marka Gücü'].map((kpi, i) => (
                <span key={i} style={{ background: 'rgba(200,35,44,0.15)', border: '1px solid rgba(200,35,44,0.3)', color: '#fff', padding: '6px 14px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: '600' }}>{kpi}</span>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                lang === 'en' ? 'Correcting wrong pricing strategies' : 'Yanlış fiyatlandırma stratejilerinin düzeltilmesi',
                lang === 'en' ? 'Reducing OTA dependency, increasing direct sales' : 'OTA bağımlılığının azaltılması, doğrudan satışların artması',
                lang === 'en' ? 'Eliminating operational losses' : 'Operasyonel kayıpların ortadan kaldırılması',
                lang === 'en' ? 'Clarifying brand and market positioning' : 'Marka ve pazar konumlandırmasının netleşmesi',
                lang === 'en' ? 'Making profitability sustainable' : 'Karlılığın sürdürülebilir hale gelmesi',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(200,35,44,0.2)', border: '1.5px solid #C8232C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="icon-check" style={{ color: '#C8232C', fontSize: '9px' }} />
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two levels */}
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '36px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ color: '#fff', textAlign: 'center', fontSize: '1.4rem', fontWeight: '700', marginBottom: '8px' }}>
            {lang === 'en' ? 'Two-Level HIP Application' : 'İki Seviyeli HIP Uygulaması'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', fontSize: '0.9rem', marginBottom: '28px' }}>
            {lang === 'en' ? 'Choose the level suitable for your hotel' : 'Otelinize uygun seviyeyi seçin'}
          </p>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[{ id: 'tam', label: lang === 'en' ? 'Full HIP – Complete Transformation' : 'Tam HIP – Komple Dönüşüm' },
              { id: 'odak', label: lang === 'en' ? 'Focused HIP – Targeted Intervention' : 'Odaklanmış HIP – Hedefli Müdahale' }].map(btn => (
              <button key={btn.id} onClick={() => setActiveLevel(btn.id)} style={{
                padding: '10px 24px', borderRadius: '50px', border: '1.5px solid',
                borderColor: activeLevel === btn.id ? '#C8232C' : 'rgba(255,255,255,0.2)',
                background: activeLevel === btn.id ? '#C8232C' : 'transparent',
                color: '#fff', fontWeight: '600', fontSize: '0.88rem', cursor: 'pointer',
                transition: 'all 0.2s',
              }}>{btn.label}</button>
            ))}
          </div>
          {activeLevel === 'tam' ? (
            <div className="row">
              <div className="col-lg-6">
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.8', marginBottom: '20px' }}>
                  {lang === 'en' ? 'A radical revision that restructures all the hotel\'s systems. A complete rebirth program for hotels adopting new brands, repositioning in the market, or underperforming financially.' : 'Otelin tüm sistemlerini yeniden yapılandıran köklü bir revizyondur. Yeni marka benimseyen, pazarda yeniden konumlanan veya finansal olarak düşük performans gösteren oteller için tam bir yeniden doğuş programıdır.'}
                </p>
              </div>
              <div className="col-lg-6">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['PMS / RMS / CRM', lang === 'en' ? 'Website & Digital Presence' : 'Web Sitesi & Dijital Görünürlük', lang === 'en' ? 'Sales & Marketing' : 'Satış & Pazarlama', lang === 'en' ? 'Distribution Channels' : 'Dağıtım Kanalları', lang === 'en' ? 'Pricing & Revenue Mgmt' : 'Fiyatlandırma & Gelir Yönetimi', lang === 'en' ? 'Organization & Departments' : 'Organizasyon & Departmanlar'].map((item, i) => (
                    <span key={i} style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', padding: '7px 14px', borderRadius: '8px', fontSize: '0.83rem', border: '1px solid rgba(255,255,255,0.12)' }}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-6">
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.8', marginBottom: '20px' }}>
                  {lang === 'en' ? 'Sometimes the problem is clear: wrong pricing, weak digital sales, incompatible systems or operational losses. Focused HIP concentrates on one of these critical areas.' : 'Bazen sorun bellidir: yanlış fiyatlandırma, zayıf dijital satışlar, uyumsuz sistemler veya operasyonel kayıplar. Odaklanmış HIP, bu kritik alanlardan birine yoğunlaşır.'}
                </p>
              </div>
              <div className="col-lg-6">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {[lang === 'en' ? 'Revenue Management' : 'Gelir Yönetimi', lang === 'en' ? 'Digital Sales & Marketing' : 'Dijital Satış & Pazarlama', lang === 'en' ? 'Technology Infrastructure' : 'Teknoloji Altyapısı', lang === 'en' ? 'Operational Efficiency' : 'Operasyonel Verimlilik'].map((item, i) => (
                    <span key={i} style={{ background: 'rgba(200,35,44,0.15)', color: 'rgba(255,255,255,0.9)', padding: '7px 14px', borderRadius: '8px', fontSize: '0.83rem', border: '1px solid rgba(200,35,44,0.3)' }}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '700', marginBottom: '8px' }}>
            {lang === 'en' ? 'Is your hotel making money?' : 'Oteliniz para kazanıyor mu?'}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>
            {lang === 'en' ? 'If not — we show you why and how to fix it.' : 'Kazanmıyorsa, nedenini ve nasıl düzelteceğinizi gösteriyoruz.'}
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C8232C', color: '#fff', padding: '14px 36px', borderRadius: '50px', fontWeight: '700', fontSize: '1rem', textDecoration: 'none' }}>
            {lang === 'en' ? 'Start with HIP' : 'HIP ile Başlayın'}
            <i className="icon-chevron-right" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function OurService() {
  const { lang } = useLanguage()
  const [openCat, setOpenCat] = useState(0)

	return (
		<>
      {/* Page Header */}
      <section style={{ background: '#f5f8fd', padding: '60px 0 40px' }}>
        <div className="tf-container">
          <div className="row">
            <div className="col-12 text-center">
              <p style={{ color: '#C8232C', fontWeight: '600', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                <i className="icon-angles-right moveLeftToRight" style={{ marginRight: '6px' }} />
                {lang === 'en' ? 'Our Services' : 'Hizmetlerimiz'}
              </p>
              <h1 style={{ color: '#1B2F5E', fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: '900', marginBottom: '20px', lineHeight: 1.1 }}>
                {lang === 'en' ? 'Hotel Investment & Management Consulting' : 'Otel Yatırım ve Yönetim Danışmanlığı'}
              </h1>
              <p style={{ color: '#3d4a63', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.45rem', fontWeight: '500' }}>
                {lang === 'en'
                  ? 'From investment feasibility to brand integration, management to audit — comprehensive consulting services for the hospitality industry.'
                  : 'Yatırım fizibilitesinden marka entegrasyonuna, yönetimden denetime — otelcilik sektörü için kapsamlı danışmanlık hizmetleri.'}
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
                {lang === 'en' ? cat.titleEn : cat.titleTr}
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
