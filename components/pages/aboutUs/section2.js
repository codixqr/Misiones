'use client'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section2() {
  const { lang } = useLanguage()

  const values = [
    {
      id: 1,
      svg: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      title: lang === 'en' ? 'Wisdom' : lang === 'ar' ? 'الحكمة' : lang === 'ru' ? 'Мудрость' : 'Bilgelik',
      desc: lang === 'en' 
        ? 'We talk about measurable realities, not assumptions. Data-driven wisdom leads our path.' 
		: lang === 'ar' ? 'نتحدث عن الحقائق القابلة للقياس، وليس الافتراضات.' : lang === 'ru' ? 'Мы говорим об измеримых реалиях, а не о предположениях.'
        : 'Varsayımları değil, ölçülebilir gerçekleri konuşuruz. Veriye dayalı bilgelik yolumuza yön verir.',
      color: '#1B2F5E'
    },
    {
      id: 2,
      svg: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <line x1="16" y1="8" x2="2" y2="22" />
          <line x1="17.5" y1="15" x2="9" y2="15" />
        </svg>
      ),
      title: lang === 'en' ? 'Authenticity' : lang === 'ar' ? 'الأصالة' : lang === 'ru' ? 'Аутентичность' : 'Sahicilik',
      desc: lang === 'en' 
        ? 'We put field-tested experience above theory. Real solutions for real operation problems.' 
		: lang === 'ar' ? 'نحن نضع الخبرة الميدانية فوق النظرية.' : lang === 'ru' ? 'Мы ставим практический опыт выше теории.'
        : 'Sahadan gelen deneyimi, teoriden üstün tutarız. Operasyonel sorunlara gerçek çözümler.',
      color: '#C8232C'
    },
    {
      id: 3,
      svg: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12s4-10 10-10z" />
          <path d="M12 6a6 6 0 0 1 6 6" />
          <path d="M12 18a6 6 0 0 1-6-6" />
        </svg>
      ),
      title: lang === 'en' ? 'Sustainability' : lang === 'ar' ? 'الاستدامة' : lang === 'ru' ? 'Устойчивость' : 'Sürdürülebilirlik',
      desc: lang === 'en' 
        ? 'We consider environmental, social, and economic balance in every strategic decision.' 
		: lang === 'ar' ? 'نحن نأخذ بعين الاعتبار التوازن البيئي والاجتماعي.' : lang === 'ru' ? 'Мы учитываем экологический, социальный и экономический баланс.'
        : 'Sürdürülebilir başarı için çevresel, sosyal ve ekonomik tüm dengeleri gözetiriz.',
      color: '#1B2F5E'
    },
    {
      id: 4,
      svg: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m13 2-2 2.5h3L12 7" />
          <path d="m10 11 2-2.5h-3L11 6" />
          <path d="M6.5 10h11" />
          <path d="M6 14h12" />
          <path d="M5.5 18h13" />
        </svg>
      ),
      title: lang === 'en' ? 'Innovation' : lang === 'ar' ? 'الابتكار' : lang === 'ru' ? 'Инновации' : 'Yenilik',
      desc: lang === 'en' 
        ? 'We lead the market rather than just react to it. Pioneering new concepts in hospitality.' 
		: lang === 'ar' ? 'نحن نقود السوق بدلاً من الرد عليه.' : lang === 'ru' ? 'Мы ведем рынок, а не просто реагируем на него.'
        : 'Pazara tepki vermek yerine pazarı yönlendiririz. Otelcilikte yeni konseptlerin öncüsü.',
      color: '#C8232C'
    },
    {
      id: 5,
      svg: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: lang === 'en' ? 'People Value' : lang === 'ar' ? 'قيمة الإنسان' : lang === 'ru' ? 'Ценность человека' : 'İnsana Değer',
      desc: lang === 'en' 
        ? 'We empower teams and put the guest experience at the heart of our strategy.' 
		: lang === 'ar' ? 'نحن نمكن الفرق ونضع تجربة الضيف في جوهر استراتيجيتنا.' : lang === 'ru' ? 'Мы расширяем возможности команд и ставим опыт гостей в центр.'
        : 'Ekipleri güçlendirir, misafir deneyimini stratejimizin merkezine alırız.',
      color: '#1B2F5E'
    }
  ]

  return (
    <section className="s-values" style={{ background: '#fcfdff', padding: '100px 0' }}>
      <div className="tf-container">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-8 text-center">
            <span style={{ color: '#C8232C', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}>
              {lang === 'en' ? 'WHAT DRIVES US' : lang === 'ar' ? 'ما يحركنا' : lang === 'ru' ? 'ЧТО НАМИ ДВИЖЕТ' : 'BİZİ HAREREKETE GEÇİREN'}
            </span>
            <h2 style={{ color: '#1B2F5E', fontSize: '3rem', fontWeight: '900', letterSpacing: '-1px' }}>
              {lang === 'en' ? 'Our Values' : lang === 'ar' ? 'قيمنا' : lang === 'ru' ? 'Наши ценности' : 'Değerlerimiz'}
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {values.map((v) => (
            <div key={v.id} className="value-card-premium" style={{
              background: '#fff',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid #eef2fa',
              boxShadow: '0 8px 32px rgba(27,47,94,0.04)',
              transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '70px', height: '70px', borderRadius: '18px',
                background: `${v.color}08`, color: v.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1px solid ${v.color}15`,
                transition: 'all 0.3s ease'
              }} className="icon-box">
                {v.svg}
              </div>
              <div>
                <h4 style={{ color: '#1B2F5E', fontSize: '1.6rem', fontWeight: '800', marginBottom: '14px', letterSpacing: '-0.5px' }}>
                  {v.title}
                </h4>
                <p style={{ color: '#505878', lineHeight: '1.8', fontSize: '1.1rem', margin: '0', fontWeight: '500' }}>
                  {v.desc}
                </p>
              </div>
              <div style={{ 
                position: 'absolute', bottom: 0, left: 0, width: '100%', height: '4px',
                background: v.color, opacity: 0, transition: 'opacity 0.3s'
              }} className="card-accent" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .value-card-premium:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(27,47,94,0.1);
          border-color: #C8232C22;
        }
        .value-card-premium:hover .icon-box {
          background: #C8232C;
          color: #fff;
          transform: scale(1.1);
        }
        .value-card-premium:hover .card-accent {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
