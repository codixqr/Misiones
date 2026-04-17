'use client'
import { useLanguage } from '@/utils/LanguageContext'
import TurkeyMap from '@/components/elements/TurkeyMap'

export default function Section4() {
  const { lang } = useLanguage()

  return (
    <section style={{ background: '#f5f8fd', padding: '80px 0' }}>
      <div className="tf-container">
        <div className="row">
          <div className="col-12 text-center mb-48">
            <p style={{ color: '#C8232C', fontWeight: '600', marginBottom: '8px', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
              <i className="icon-angles-right moveLeftToRight" style={{ marginRight: '6px' }} />
              {lang === 'en' ? 'Our Footprint' : 'İz Bıraktığımız Yerler'}
            </p>
            <h2 style={{ color: '#1B2F5E', fontSize: '2rem', fontWeight: '700', marginBottom: '16px' }}>
              {lang === 'en' ? 'Experience Across Turkey' : 'Türkiye Genelinde Deneyim'}
            </h2>
            <p style={{ color: '#505878', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              {lang === 'en'
                ? 'Click on any city marker to see the companies and hotels we have worked with in that region.'
                : 'Çalıştığımız firmaları ve otelleri görmek için harita üzerindeki şehir işaretlerine tıklayın.'}
            </p>
          </div>
        </div>
        <TurkeyMap lang={lang} />
      </div>
    </section>
  )
}
