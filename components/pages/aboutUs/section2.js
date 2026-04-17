'use client'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section2() {
  const { lang } = useLanguage()

  const values = lang === 'en'
    ? [
        { icon: 'flaticon-chart', title: 'Wisdom', desc: 'We talk about measurable realities, not assumptions.' },
        { icon: 'flaticon-handshake', title: 'Authenticity', desc: 'We put field-tested experience above theory.' },
        { icon: 'flaticon-leaf', title: 'Sustainability', desc: 'We consider environmental, social, and economic balance.' },
        { icon: 'flaticon-rocket', title: 'Innovation', desc: 'We lead the market rather than just react to it.' },
        { icon: 'flaticon-team', title: 'People First', desc: 'We empower teams and put the guest experience at the center.' },
      ]
    : [
        { icon: 'flaticon-chart', title: 'Bilgelik', desc: 'Varsayımları değil, ölçülebilir gerçekleri konuşuruz.' },
        { icon: 'flaticon-handshake', title: 'Sahicilik', desc: 'Sahadan gelen deneyimi, teoriden üstün tutarız.' },
        { icon: 'flaticon-leaf', title: 'Sürdürülebilirlik', desc: 'Çevresel, sosyal ve ekonomik dengeleri gözetiriz.' },
        { icon: 'flaticon-rocket', title: 'Yenilik', desc: 'Pazara tepki vermek yerine pazarı yönlendiririz.' },
        { icon: 'flaticon-team', title: 'İnsana Değer', desc: 'Ekipleri güçlendirir, misafir deneyimini merkeze alırız.' },
      ]

  return (
    <section style={{ background: '#f5f8fd', padding: '80px 0' }}>
      <div className="tf-container">
        {/* Values */}
        <div className="row">
          <div className="col-12 text-center mb-48">
            <p style={{ color: '#C8232C', fontWeight: '600', marginBottom: '8px', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
              <i className="icon-angles-right moveLeftToRight" style={{ marginRight: '6px' }} />
              {lang === 'en' ? 'What Drives Us' : 'Bizi Harekete Geçiren'}
            </p>
            <h2 style={{ color: '#1B2F5E', fontSize: '2rem', fontWeight: '700' }}>
              {lang === 'en' ? 'Our Values' : 'Değerlerimiz'}
            </h2>
          </div>
          {values.map((v, i) => (
            <div className="col-lg-4 col-md-6 mb-24" key={i}>
              <div style={{
                background: '#fff', borderRadius: '14px', padding: '32px 28px',
                display: 'flex', gap: '18px', alignItems: 'flex-start',
                boxShadow: '0 2px 16px rgba(27,47,94,0.06)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(27,47,94,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 16px rgba(27,47,94,0.06)'
                }}
              >
                <div style={{
                  minWidth: '44px', height: '44px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #1B2F5E15, #1B2F5E25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <i className={v.icon} style={{ color: '#1B2F5E', fontSize: '1.3rem' }} />
                </div>
                <div>
                  <h5 style={{ color: '#1B2F5E', fontWeight: '700', marginBottom: '8px' }}>{v.title}</h5>
                  <p style={{ color: '#606580', lineHeight: '1.7', margin: '0', fontSize: '0.94rem' }}>{v.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
