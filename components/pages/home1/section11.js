'use client'
import { useLanguage } from '@/utils/LanguageContext'

const hotels = [
	{ name: 'Princess Hotels', location: 'İstanbul Kumburgaz', stars: 5 },
	{ name: 'Beyazıt Antik Hotel', location: 'İstanbul', stars: 4 },
	{ name: 'California Hotel', location: 'Berlin, Almanya', stars: 4 },
	{ name: 'Kaiserhof Wien Hotel', location: 'Viyana, Avusturya', stars: 5 },
	{ name: 'Grand Zürichberg', location: 'Zürih, İsviçre', stars: 5 },
	{ name: 'Sultan Palace Hotel', location: 'Kemer, Antalya', stars: 5 },
	{ name: 'Naturland Eco Park & Resort', location: 'Antalya', stars: 5 },
	{ name: 'Pegasos Hotels', location: 'Antalya', stars: 5 },
	{ name: 'Lyra Resort Hotel', location: 'Antalya', stars: 5 },
	{ name: 'Victoria Hotels', location: 'Aktau, Kazakistan', stars: 5 },
	{ name: 'Radisson Blu Hotel', location: 'Astana, Kazakistan', stars: 5 },
	{ name: 'Merit Şahmaran Hotel', location: 'Van Edremit', stars: 5 },
	{ name: 'Ramada By Wyndham', location: 'İstanbul Altunizade', stars: 4 },
	{ name: 'Marrion Hotel', location: 'Bursa İnegöl', stars: 4 },
	{ name: 'Steigenberger Airport Hotel', location: 'İstanbul Güneşli', stars: 5 },
	{ name: 'Hattuşa Vacation Thermal Club', location: 'Ankara Ayaş', stars: 5 },
	{ name: 'Mary Palace Resort', location: 'Antalya Side', stars: 5 },
	{ name: 'Maya World Hotels', location: 'Antalya', stars: 5 },
]

export default function Section11() {
	const { lang } = useLanguage()

	return (
		<section className="s-partner" style={{ background: '#f8f9fc', padding: '50px 0', overflow: 'hidden' }}>
			<div style={{ textAlign: 'center', marginBottom: '30px' }}>
				<p style={{ color: '#C8232C', fontWeight: '600', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
					{lang === 'tr' ? 'Referanslarımız' : 'Our References'}
				</p>
				<p style={{ color: '#1B2F5E', fontWeight: '700', fontSize: '22px' }}>
					{lang === 'tr' ? 'Hizmet Verdiğimiz Markalar' : 'Brands We Served'}
				</p>
			</div>
			<div className="misiones-hotel-ticker">
				<div className="misiones-hotel-ticker-inner">
					{[...hotels, ...hotels].map((hotel, i) => (
						<div key={i} className="misiones-hotel-card">
							<div className="misiones-hotel-stars">
								{Array.from({ length: hotel.stars }).map((_, s) => (
									<span key={s} style={{ color: '#C8232C', fontSize: '10px' }}>★</span>
								))}
							</div>
							<p className="misiones-hotel-name">{hotel.name}</p>
							<p className="misiones-hotel-loc">{hotel.location}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
