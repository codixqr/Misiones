'use client'
import { useLanguage } from '@/utils/LanguageContext'
import CounterUp from '@/components/elements/CounterUp'
import Link from 'next/link'
import Image from 'next/image'

export default function Section1() {
  const { lang } = useLanguage()

  return (
    <section className="s-about-hero tf-spacing-7" style={{ background: '#fff' }}>
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div style={{ paddingRight: '40px' }}>
              <p className="s-sub-title mb-16" style={{ color: '#C8232C' }}>
                <i className="icon-angles-right moveLeftToRight" />
                {lang === 'en' ? 'Who We Are' : 'Biz Kimiz?'}
              </p>
              <h2 className="s-title mb-30 text-anime-wave" style={{ color: '#1B2F5E', fontSize: '2rem', lineHeight: '1.3' }}>
                {lang === 'en'
                  ? 'A Transformation Manifesto for the Hospitality Industry'
                  : 'Otelcilik Sektörü İçin Bir Dönüşüm Manifestosu'}
              </h2>
              <p style={{ color: '#505878', lineHeight: '1.85', marginBottom: '24px', fontSize: '1.02rem' }}>
                {lang === 'en'
                  ? 'We are the wise voice shaped by the realities of the hospitality industry – a companion who shapes investment, management, and guest experience not just with numbers, but with meaning. MISIONES Hotel Industry Experience Consulting is a transformation manifesto that strengthens hotels against today\'s competition and tomorrow\'s uncertainty, bringing together data with wisdom, strategy with storytelling, and operations with artistry.'
                  : 'Biz, otelcilik sektörünün sahadan gelen gerçekleriyle yoğrulmuş bilge sesi; yatırımı, yönetimi ve misafir deneyimini yalnızca rakamlarla değil, anlamla şekillendiren bir yol arkadaşıyız. MISIONES Hotel Industry Experience Consulting, otelleri bugünün rekabetinden çıkarıp yarının belirsizliğine karşı güçlendiren; veriyi bilgelikle, stratejiyi hikâyeyle, operasyonu sanatla buluşturan bir dönüşüm manifestosudur.'}
              </p>
              <p style={{ color: '#505878', lineHeight: '1.85', marginBottom: '36px', fontSize: '1.02rem' }}>
                {lang === 'en'
                  ? 'We are not just consultants in hospitality; we are representatives of a vision that unites the spirit of the industry with the dynamics of the times to build the future and leave a lasting mark.'
                  : 'Biz, otelcilikte yalnızca danışman değil; sektörün ruhunu ve zamanın dinamiklerini birleştirerek geleceği inşa eden, kalıcı iz bırakan bir vizyonun temsilcisiyiz.'}
              </p>
              <div className="row" style={{ gap: '0' }}>
                {[
                  { count: 20, label: lang === 'en' ? 'Years Experience' : 'Yıl Deneyim' },
                  { count: 150, label: lang === 'en' ? 'Projects Completed' : 'Tamamlanan Proje' },
                  { count: 12, label: lang === 'en' ? 'Cities' : 'Şehir' },
                ].map((item, i) => (
                  <div className="col-4" key={i}>
                    <div style={{ textAlign: 'center', padding: '16px 8px', background: i % 2 === 0 ? '#f5f8fd' : '#fff', borderRadius: '10px' }}>
                      <div style={{ color: '#C8232C', fontSize: '2rem', fontWeight: '700', lineHeight: '1' }}>
                        <CounterUp count={item.count} /><span>+</span>
                      </div>
                      <p style={{ color: '#1B2F5E', fontSize: '0.82rem', marginTop: '6px', fontWeight: '600' }}>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
			<div className="col-lg-6">
            <div style={{ position: 'relative' }}>
              {/* Portrait photo */}
              <div style={{ borderRadius: '20px', overflow: 'hidden', position: 'relative', boxShadow: '0 16px 48px rgba(27,47,94,0.18)' }}>
                <Image
                  src="/images/section/nevzat-celebi.jpg"
                  alt="Nevzat Çelebi – Misiones"
                  width={700}
                  height={700}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', objectPosition: 'center top', aspectRatio: '1/1' }}
                  priority
                />
                {/* Name card overlay at bottom */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(15,30,62,0.95) 0%, rgba(15,30,62,0.6) 70%, transparent 100%)',
                  padding: '40px 32px 28px',
                }}>
                  <p style={{ color: '#C8232C', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {lang === 'en' ? 'Founder & Principal Consultant' : 'Kurucu & Baş Danışman'}
                  </p>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '800', margin: '0 0 6px' }}>Nevzat Çelebi</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: 0 }}>MISIONES Hotel Industry Experience Consulting</p>
                </div>
              </div>

              {/* Core question card */}
              <div style={{
                background: 'linear-gradient(135deg, #1B2F5E 0%, #0f1e3e 100%)',
                borderRadius: '16px', padding: '28px 32px', marginTop: '16px',
              }}>
                <div style={{ width: '40px', height: '3px', background: '#C8232C', borderRadius: '2px', marginBottom: '14px' }} />
                <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '14px', fontWeight: '700' }}>
                  {lang === 'en' ? 'Our Core Question' : 'Temel Sorumuz'}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '18px' }}>
                  {[
                    lang === 'en' ? 'Is it making money?' : 'Para kazanıyor mu?',
                    lang === 'en' ? 'How much is it earning?' : 'Ne kadar kazanıyor?',
                    lang === 'en' ? 'If not – we show why.' : 'Kazanmıyorsa, nedenini gösteririz.',
                  ].map((q, i) => (
                    <span key={i} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '7px',
                      background: 'rgba(255,255,255,0.07)', borderRadius: '8px',
                      padding: '8px 14px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.88)'
                    }}>
                      <span style={{ color: '#C8232C', fontWeight: '800', fontSize: '1rem' }}>→</span>
                      {q}
                    </span>
                  ))}
                </div>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#C8232C', color: '#fff', padding: '10px 24px',
                  borderRadius: '50px', fontSize: '0.88rem', fontWeight: '600',
                  textDecoration: 'none',
                }}>
                  {lang === 'en' ? 'Get in Touch' : 'Bize Ulaşın'}
                  <i className="icon-chevron-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
