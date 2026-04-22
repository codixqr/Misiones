'use client'
import { useState } from 'react'
import { useLanguage } from '@/utils/LanguageContext'

export default function Section4() {
  const { lang } = useLanguage()
  const [activeRegion, setActiveRegion] = useState(0)

  const referenceData = [
    {
      id: 0,
      regionTr: 'Avrupa & Uluslararası',
      regionEn: 'Europe & International',
      regionAr: 'أوروبا ودولي',
      regionRu: 'Европа и международный',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      introTr: 'Avrupa’nın seçkin otellerinde kültürel çeşitliliği ve üst düzey hizmet anlayışını özümsedik.',
      introEn: 'Absorbed cultural diversity and high-level service in elite European hotels.',
      introAr: 'استوعبنا التنوع الثقافي والخدمة عالية المستوى في فنادق النخبة الأوروبية.',
      introRu: 'Мы впитали культурное разнообразие и высокий уровень обслуживания в элитных европейских отелях.',
      hotels: [
        'Germany Berlin California Hotel',
        'Austria Vienna Kaiserhof Wien Hotel',
        'Switzerland Zurich Grand Zürichberg Otel',
        'Kazakhstan Aktau Victoria Hotels',
        'Astana Radisson Blu Hotel'
      ],
      color: '#1B2F5E',
      mapFocus: 'world'
    },
    {
      id: 1,
      regionTr: 'İstanbul',
      regionEn: 'Istanbul',
      regionAr: 'إسطنبول',
      regionRu: 'Стамбул',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M19 21v-4" />
          <path d="M15 21v-10" />
          <path d="M11 21v-6" />
          <path d="M7 21v-2" />
          <path d="M15 6h.01" />
          <path d="M10 6h.01" />
          <path d="M15 2h.01" />
        </svg>
      ),
      introTr: 'Metropol otelciliğinde operasyonel mükemmellik ve iş dünyası odaklı projeler.',
      introEn: 'Operational excellence and business-oriented projects in metropolitan hospitality.',
      introAr: 'التميز التشغيلي والمشاريع الموجهة للأعمال في الضيافة الحضرية.',
      introRu: 'Операционное совершенство и бизнес-ориентированные проекты в столичном гостиничном бизнесе.',
      hotels: [
        'Steigenberger Airport Hotel - Güneşli',
        'Ramada By Wyndham Asia Business Hotel - Altunizade',
        'Princess Hotel - Kumburgaz',
        'Antik Hotel - Beyazıt',
        'Best Western President Hotel - Beyazıt',
        'Etap Hotel - Taksim',
        'Hilton Hotel - Harbiye'
      ],
      color: '#C8232C',
      mapFocus: 'city'
    },
    {
      id: 2,
      regionTr: 'Antalya Resort & HV',
      regionEn: 'Antalya Resort & HV',
      regionAr: 'منتجع أنطاليا',
      regionRu: 'Курорт Анталия',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="m4.93 19.07 1.41-1.41" />
          <path d="M12 20v2" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M20 12h2" />
          <path d="m17.66 6.34 1.41-1.41" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      introTr: 'Resort otelciliğinde geniş kapsamlı yönetim ve misafir deneyimi mimarisi.',
      introEn: 'comprehensive management and guest experience architecture in resort hospitality.',
      introAr: 'إدارة شاملة وهندسة لتجربة الضيوف في المنتجعات السياحية.',
      introRu: 'Комплексное управление и архитектура гостевого опыта в курортном гостеприимстве.',
      hotels: [
        'Maya World Hotels - Antalya',
        'Mary Palace Resort - Side',
        'Onkel Resort - Kemer',
        'Lyra Resort Hotel - Kızılağaç',
        'Pegasos Hotels - İncekum',
        'Naturland Eco Park - Çamyuva',
        'Talya Hotel - Antalya',
        'Club Aldiana HV Kemer',
        'Club Med HV Kemer',
        'Club Salima HV Kemer'
      ],
      color: '#1B2F5E',
      mapFocus: 'resort'
    },
    {
      id: 3,
      regionTr: 'Anadolu Şehirleri',
      regionEn: 'Anatolian Cities',
      regionAr: 'المدن الأناضولية',
      regionRu: 'Анатолийские города',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z" />
          <circle cx="11" cy="10" r="3" />
        </svg>
      ),
      introTr: 'Anadolu’nun dört bir yanında, butik ve termal otelcilikte değer yaratan dokunuşlar.',
      introEn: 'Value-creating touches in boutique and thermal hospitality across Anatolia.',
      introAr: 'لمسات تخلق قيمة في الضيافة البوتيكية والحرارية في جميع أنحاء الأناضول.',
      introRu: 'Ценные штрихи в бутик- и термальных отелях по всей Анатолии.',
      hotels: [
        'Bursa Marrion Hotel - İnegöl',
        'Ankara Hattuşa Thermal Club - Ayaş',
        'Samsun Turban Büyük Samsun Otel',
        'Sivas Termal Suit Hotel',
        'Sivas Bilici Termal'
      ],
      color: '#C8232C',
      mapFocus: 'tr'
    }
  ]

  const current = referenceData[activeRegion]

  return (
    <section className="s-footprint" style={{ background: '#fff', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '60%',
        background: 'radial-gradient(circle, rgba(27,47,94,0.03) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <div className="tf-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center mb-70">
          <div className="col-lg-8 text-center">
            <span style={{ color: '#C8232C', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}>
              <i className="icon-angles-right" style={{ marginRight: '10px' }} />
              {lang === 'en' ? 'OUR GLOBAL FOOTPRINT' : lang === 'ar' ? 'بصمتنا العالمية' : lang === 'ru' ? 'НАШ ГЛОБАЛЬНЫЙ СЛЕД' : 'KÜRESEL AYAK İZİMİZ'}
            </span>
            <h2 style={{ color: '#1B2F5E', fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-1.5px', lineHeight: '1.1' }}>
              {lang === 'en' ? <>Places Where We <span>Left Our Mark</span></> : lang === 'ar' ? <>أماكن تركنا فيها <span>بصمتنا</span></> : lang === 'ru' ? <>Места, где мы <span>оставили след</span></> : <>İz <span>Bıraktığımız</span> Yerler</>}
            </h2>
          </div>
        </div>

        <div className="row g-5">
          {/* Left: Interactive Regions List */}
          <div className="col-lg-5">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {referenceData.map((region, i) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '20px',
                    padding: '24px 30px', borderRadius: '18px', border: '1px solid',
                    textAlign: 'left', transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                    background: activeRegion === i ? region.color : '#f8fafc',
                    borderColor: activeRegion === i ? region.color : '#eef2fa',
                    color: activeRegion === i ? '#fff' : '#1B2F5E',
                    boxShadow: activeRegion === i ? `0 12px 30px ${region.color}30` : 'none',
                    cursor: 'pointer'
                  }}
                  className="region-btn"
                >
                  <div style={{
                    minWidth: '48px', height: '48px', borderRadius: '12px',
                    background: activeRegion === i ? 'rgba(255,255,255,0.15)' : '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: activeRegion === i ? 'none' : '0 4px 12px rgba(27,47,94,0.06)'
                  }}>
                    {region.icon}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800' }}>
                      {lang === 'en' ? region.regionEn : lang === 'ar' ? region.regionAr : lang === 'ru' ? region.regionRu : region.regionTr}
                    </h4>
                    <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: activeRegion === i ? 0.8 : 0.6 }}>
                      {region.hotels.length} {lang === 'en' ? 'Projects' : lang === 'ar' ? 'مشاريع' : lang === 'ru' ? 'проектов' : 'Proje'}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Display Card with Map Visual and Hotel List */}
          <div className="col-lg-7">
            <div style={{
              background: '#f8fafc', borderRadius: '32px', padding: '50px',
              height: '100%', position: 'relative', overflow: 'hidden',
              border: '1px solid #eef2fa', boxShadow: '0 24px 64px rgba(27,47,94,0.08)'
            }}>
              {/* Map SVG Background Visual */}
              <div style={{
                position: 'absolute', top: '10%', right: '-10%', width: '80%', opacity: 0.07,
                pointerEvents: 'none'
              }}>
                <svg viewBox="0 0 1000 500" fill="currentColor">
                  {/* Simplified World/Region Path Concept */}
                  <path d="M150,200 Q400,100 850,250 T950,400 T600,450 T150,350 Z" />
                </svg>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '35px' }}>
                  <h3 style={{ color: '#1B2F5E', fontSize: '2rem', fontWeight: '900', marginBottom: '15px' }}>
                    {lang === 'en' ? current.regionEn : lang === 'ar' ? current.regionAr : lang === 'ru' ? current.regionRu : current.regionTr}
                  </h3>
                  <p style={{ color: '#505878', fontSize: '1.15rem', lineHeight: '1.7', fontStyle: 'italic', maxWidth: '90%' }}>
                    &ldquo;{lang === 'en' ? current.introEn : lang === 'ar' ? current.introAr : lang === 'ru' ? current.introRu : current.introTr}&rdquo;
                  </p>
                </div>

                <div style={{ 
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                  gap: '15px 30px' 
                }}>
                  {current.hotels.map((hotel, idx) => (
                    <div key={idx} style={{ 
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '14px 0', borderBottom: '1px solid rgba(27,47,94,0.06)'
                    }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: current.color }} />
                      <span style={{ color: '#1B2F5E', fontWeight: '600', fontSize: '1.05rem' }}>{hotel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .region-btn:hover:not(:disabled) {
          transform: translateX(10px);
        }
        @media (max-width: 991px) {
          .s-footprint { padding: 80px 0; }
        }
      `}</style>
    </section>
  )
}
