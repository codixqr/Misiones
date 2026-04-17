'use client'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section3() {
  const { lang } = useLanguage()

  const audiences = lang === 'en'
    ? [
        { icon: 'flaticon-building', title: 'Hotel Investors & Entrepreneurs', desc: 'Those who want to maximize returns on their hotel investments.' },
        { icon: 'flaticon-globe', title: 'Global & Local Hotel Brands', desc: 'International and domestic brands seeking operational excellence.' },
        { icon: 'flaticon-growing', title: 'Tourism Businesses', desc: 'Companies seeking growth in the tourism sector.' },
        { icon: 'flaticon-target', title: 'Operational Excellence Seekers', desc: 'Investors aiming for peak performance in hotel management.' },
      ]
    : [
        { icon: 'flaticon-building', title: 'Otel Yatırımcıları & Girişimciler', desc: 'Otel yatırımlarından maksimum getiri elde etmek isteyenler.' },
        { icon: 'flaticon-globe', title: 'Global & Yerel Otel Markaları', desc: 'Operasyonel mükemmelliği arayan uluslararası ve ulusal markalar.' },
        { icon: 'flaticon-growing', title: 'Turizm İşletmeleri', desc: 'Turizm sektöründe büyümek isteyen şirketler.' },
        { icon: 'flaticon-target', title: 'Operasyonel Mükemmellik', desc: 'Otel yönetiminde en üst performansı hedefleyen yatırımcılar.' },
      ]

  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-40">
            <p style={{ color: '#C8232C', fontWeight: '600', marginBottom: '8px', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
              <i className="icon-angles-right moveLeftToRight" style={{ marginRight: '6px' }} />
              {lang === 'en' ? 'Who We Serve' : 'Kime Hizmet Ediyoruz'}
            </p>
            <h2 style={{ color: '#1B2F5E', fontSize: '2rem', fontWeight: '700', marginBottom: '24px' }}>
              {lang === 'en' ? 'Target Audience' : 'Hedef Kitlemiz'}
            </h2>
            <p style={{ color: '#505878', lineHeight: '1.85', marginBottom: '24px' }}>
              {lang === 'en'
                ? 'Our clients are not just investors seeking financial returns; they are visionaries who want to elevate the guest experience to a meaningful stage. For them, we are not a consultant, but an intellectual partner guiding them on the field.'
                : 'Müşterilerimiz, yalnızca finansal geri dönüş arayan yatırımcılar değil; aynı zamanda misafir deneyimini anlamlı bir sahneye taşımak isteyen vizyonerlerdir. Onlar için biz, bir danışman değil, sahada yol gösteren bir akıl ortağıyız.'}
            </p>
            <div style={{
              background: 'linear-gradient(135deg, #1B2F5E 0%, #0f1e3e 100%)',
              borderRadius: '14px', padding: '28px 32px',
            }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {lang === 'en' ? 'Our Sector' : 'Mensubu Olduğumuz Sektör'}
              </p>
              <p style={{ color: '#fff', lineHeight: '1.8', fontSize: '0.96rem', margin: '0' }}>
                {lang === 'en'
                  ? 'We operate in the most dynamic area of the tourism and hospitality sector – investment and management consultancy. This sector is an ecosystem that not only hosts guests but also brings cultures together, strengthens economies, and creates sustainable value.'
                  : 'Biz, turizm ve otelcilik sektörünün en dinamik alanında faaliyet gösteriyoruz. Bu sektör, yalnızca misafir ağırlayan değil; aynı zamanda kültürleri buluşturan, ekonomileri güçlendiren ve sürdürülebilir değer yaratan bir ekosistemdir.'}
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              {audiences.map((a, i) => (
                <div className="col-md-6 mb-24" key={i}>
                  <div style={{
                    background: '#f5f8fd', borderRadius: '14px', padding: '28px 24px',
                    height: '100%', borderLeft: '3px solid',
                    borderColor: i % 2 === 0 ? '#1B2F5E' : '#C8232C',
                    transition: 'transform 0.2s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      width: '46px', height: '46px', borderRadius: '10px',
                      background: '#fff', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', marginBottom: '16px',
                      boxShadow: '0 2px 12px rgba(27,47,94,0.1)'
                    }}>
                      <i className={a.icon} style={{ color: '#1B2F5E', fontSize: '1.25rem' }} />
                    </div>
                    <h5 style={{ color: '#1B2F5E', fontWeight: '700', fontSize: '0.98rem', marginBottom: '10px' }}>{a.title}</h5>
                    <p style={{ color: '#606580', lineHeight: '1.65', margin: '0', fontSize: '0.9rem' }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
