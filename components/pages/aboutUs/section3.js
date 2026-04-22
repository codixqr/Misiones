'use client'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section3() {
  const { lang } = useLanguage()

  const audiences = [
    { 
      id: 1,
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: lang === 'en' ? 'Hotel Investors & Entrepreneurs' : lang === 'ar' ? 'مستثمرون ورواد أعمال في الفنادق' : lang === 'ru' ? 'Инвесторы и предприниматели отелей' : 'Otel Yatırımcıları & Girişimciler', 
      desc: lang === 'en' ? 'Those who want to maximize returns on their hotel investments.' : lang === 'ar' ? 'أولئك الذين يرغبون في تحقيق أقصى عائد على استثماراتهم.' : lang === 'ru' ? 'Те, кто хочет получить максимальную отдачу от своих инвестиций.' : 'Otel yatırımlarından maksimum getiri elde etmek isteyen vizyonerler.' 
    },
    { 
      id: 2,
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: lang === 'en' ? 'Global & Local Hotel Brands' : lang === 'ar' ? 'علامات فندقية عالمية ومحلية' : lang === 'ru' ? 'Глобальные и местные бренды' : 'Global & Yerel Otel Markaları', 
      desc: lang === 'en' ? 'International and domestic brands seeking operational excellence.' : lang === 'ar' ? 'العلامات التي تبحث عن التميز التشغيلي.' : lang === 'ru' ? 'Бренды, стремящиеся к операционному совершенству.' : 'Operasyonel mükemmelliği ve marka standartlarını arayan markalar.' 
    },
    { 
      id: 3,
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: lang === 'en' ? 'Tourism Businesses' : lang === 'ar' ? 'شركات السياحة' : lang === 'ru' ? 'Туристический бизнес' : 'Turizm İşletmeleri', 
      desc: lang === 'en' ? 'Companies seeking growth in the tourism sector.' : lang === 'ar' ? 'الشركات التي تسعى للنمو في قطاع السياحة.' : lang === 'ru' ? 'Компании, стремящиеся к росту в секторе туризма.' : 'Turizm sektöründe ölçeklenmek ve sürdürülebilir büyümek isteyen şirketler.' 
    },
    { 
      id: 4,
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: lang === 'en' ? 'Operational Excellence Seekers' : lang === 'ar' ? 'الباحثون عن التميز التشغيلي' : lang === 'ru' ? 'Искатели операционного совершенства' : 'Operasyonel Mükemmellik', 
      desc: lang === 'en' ? 'Investors aiming for peak performance in hotel management.' : lang === 'ar' ? 'المستثمرون الذين يهدفون إلى أعلى أداء في الإدارة.' : lang === 'ru' ? 'Инвесторы, стремящиеся к максимальной производительности.' : 'Otel yönetiminde en üst performansı ve kaliteyi hedefleyen yatırımcılar.' 
    },
  ]

  return (
    <section className="s-targets" style={{ background: '#fff', padding: '100px 0' }}>
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-40">
            <span style={{ color: '#C8232C', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}>
              <i className="icon-angles-right moveLeftToRight" style={{ marginRight: '8px' }} />
              {lang === 'en' ? 'Who We Serve' : lang === 'ar' ? 'من نخدم' : lang === 'ru' ? 'Кого мы обслуживаем' : 'Kime Hizmet Ediyoruz'}
            </span>
            <h2 style={{ color: '#1B2F5E', fontSize: '3rem', fontWeight: '900', marginBottom: '30px', lineHeight: '1.1' }}>
              {lang === 'en' ? <>Our Target <span>Audience</span></> : lang === 'ar' ? <>جمهورنا <span>المستهدف</span></> : lang === 'ru' ? <>Наша целевая <span>аудитория</span></> : <>Hedef <span>Kitlemiz</span></>}
            </h2>
            <p style={{ color: '#505878', lineHeight: '1.85', marginBottom: '32px', fontSize: '1.2rem', fontWeight: '500' }}>
              {lang === 'en'
                ? 'Our clients are not just investors seeking financial returns; they are visionaries who want to elevate the guest experience into a meaningful stage. For them, we are a strategic intellectual partner guiding them on the field.'
				: lang === 'ar'
				? 'عملاؤنا ليسوا مجرد مستثمرين؛ بل هم أصحاب رؤى يرغبون في الارتقاء بتجربة الضيف.'
				: lang === 'ru'
				? 'Наши клиенты — это не просто инвесторы; это дальновидные люди, которые хотят поднять качество обслуживания на новый уровень.'
                : 'Müşterilerimiz, yalnızca finansal geri dönüş arayan yatırımcılar değil; aynı zamanda misafir deneyimini anlamlı bir sahneye taşımak isteyen vizyonerlerdir. Onlar için biz, sahada yol gösteren stratejik bir akıl ortağıyız.'}
            </p>
            <div style={{
              background: 'linear-gradient(135deg, #1B2F5E 0%, #0f1e3e 100%)',
              borderRadius: '24px', padding: '36px',
              boxShadow: '0 20px 48px rgba(27,47,94,0.15)'
            }}>
              <p style={{ color: '#C8232C', fontSize: '0.85rem', marginBottom: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                {lang === 'en' ? 'Our Sector' : lang === 'ar' ? 'قطاعنا' : lang === 'ru' ? 'Наш сектор' : 'Mensubu Olduğumuz Sektör'}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.92)', lineHeight: '1.8', fontSize: '1.1rem', margin: '0', fontWeight: '400' }}>
                {lang === 'en'
                  ? 'We operate in the most dynamic area of the tourism and hospitality sector - investment and management consultancy, creating sustainable value.'
				  : lang === 'ar'
				  ? 'نحن نعمل في المجال الأكثر ديناميكية في قطاع السياحة - استشارات الاستثمار والإدارة.'
				  : lang === 'ru'
				  ? 'Мы работаем в самой динамичной сфере туризма – инвестиционный и управленческий консалтинг.'
                  : 'Turizm ve otelcilik sektörünün en dinamik alanında; yatırım ve yönetim danışmanlığı ile sürdürülebilir değer yaratan bir ekosistemde faaliyet gösteriyoruz.'}
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              {audiences.map((a, i) => (
                <div className="col-md-6" key={a.id}>
                  <div className="target-card-premium" style={{
                    background: '#f8fafc', borderRadius: '20px', padding: '32px',
                    height: '100%', border: '1px solid #eef2fa',
                    transition: 'all 0.4s ease',
                    display: 'flex', flexDirection: 'column', gap: '18px'
                  }}>
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '12px',
                      background: '#fff', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', color: '#C8232C',
                      boxShadow: '0 4px 12px rgba(27,47,94,0.06)'
                    }}>
                      {a.svg}
                    </div>
                    <div>
                      <h5 style={{ color: '#1B2F5E', fontWeight: '800', fontSize: '1.25rem', marginBottom: '12px', letterSpacing: '-0.4px' }}>{a.title}</h5>
                      <p style={{ color: '#64748b', lineHeight: '1.65', margin: '0', fontSize: '1.05rem', fontWeight: '500' }}>{a.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .target-card-premium:hover {
          background: #fff !important;
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(27,47,94,0.08);
          border-color: #C8232C33;
        }
      `}</style>
    </section>
  )
}
