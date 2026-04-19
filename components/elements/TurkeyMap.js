'use client'
import { useState } from 'react'

/* Çalışılan şehirler – kırmızı */
const WORKED_CITIES = [
	{
		id: 'istanbul',
		name: 'İstanbul',
		x: 128, y: 80,
		hotels: [
			'Princess Hotels – Kumburgaz',
			'Ramada By Wyndham Asia Business Hotel – Altunizade',
			'Steigenberger Airport Hotel – Güneşli',
			'Beyazıt Antik Hotel',
		],
	},
	{
		id: 'bursa',
		name: 'Bursa',
		x: 148, y: 112,
		hotels: ['İnegöl Marrion Hotel'],
	},
	{
		id: 'ankara',
		name: 'Ankara',
		x: 328, y: 118,
		hotels: ['Hattuşa Vacation Thermal Club – Ayaş'],
	},
	{
		id: 'antalya',
		name: 'Antalya Resort & HV',
		x: 218, y: 340,
		hotels: [
			'Sultan Palace Hotel – Kemer',
			'Mary Palace Resort – Side',
			'Naturland Eco Park & Resort',
			'Pegasos Hotels',
			'Lyra Resort Hotel',
			'Maya World Hotels',
		],
	},
	{
		id: 'van',
		name: 'Van',
		x: 675, y: 195,
		hotels: ['Merit Şahmaran Hotel – Edremit'],
	},
]

/* Diğer şehirler – lacivert */
const CONTEXT_CITIES = [
	{ id: 'izmir',     name: 'İzmir',     x: 58,  y: 230 },
	{ id: 'samsun',   name: 'Samsun',    x: 442, y: 68  },
	{ id: 'trabzon',  name: 'Trabzon',   x: 580, y: 88  },
	{ id: 'konya',    name: 'Konya',     x: 315, y: 215 },
	{ id: 'gaziantep',name: 'Gaziantep', x: 528, y: 318 },
	{ id: 'diyarbakir',name:'Diyarbakır',x: 600, y: 240 },
]

/* ─────────────────────────────────────────────────────────────
   Türkiye outline: viewBox="0 0 820 420"
   Koordinatlar yaklaşık lat/lon → SVG dönüşümüne göre
   x = (lon − 25.8) × 42.6
   y = (42.2 − lat) × 68
   ───────────────────────────────────────────────────────────── */
const TURKEY_PATH = `
  M 8,85
  L 8,60
  L 30,40
  L 52,30
  L 80,28
  L 115,45
  L 132,75
  L 148,108
  L 182,92
  L 225,52
  L 268,44
  L 310,36
  L 365,15
  L 402,18
  L 438,65
  L 488,88
  L 540,95
  L 578,88
  L 624,72
  L 652,62
  L 658,80
  L 700,118
  L 730,140
  L 755,180
  L 788,272
  L 758,305
  L 728,320
  L 710,340
  L 680,355
  L 645,360
  L 618,368
  L 576,372
  L 545,385
  L 528,412
  L 508,395
  L 475,385
  L 432,382
  L 382,372
  L 355,370
  L 330,378
  L 295,365
  L 268,355
  L 238,365
  L 212,345
  L 188,352
  L 162,382
  L 140,380
  L 118,360
  L 100,352
  L 85,338
  L 72,308
  L 65,278
  L 60,248
  L 55,215
  L 48,182
  L 38,155
  L 30,128
  L 20,108
  L 8,85
  Z
`

export default function TurkeyMap({ lang }) {
	const [active, setActive] = useState(null)

	const toggle = (city) => setActive(active?.id === city.id ? null : city)

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
			{/* Harita */}
			<div style={{ position: 'relative', background: '#f0f5fc', borderRadius: '16px', overflow: 'hidden', border: '1px solid #d5e3f5' }}>
				<svg
					viewBox="0 0 820 430"
					xmlns="http://www.w3.org/2000/svg"
					style={{ width: '100%', height: 'auto', display: 'block' }}
					preserveAspectRatio="xMidYMid meet"
				>
					<defs>
						<filter id="mapShadow">
							<feDropShadow dx="2" dy="3" stdDeviation="5" floodColor="#1B2F5E" floodOpacity="0.15" />
						</filter>
						<filter id="glowRed">
							<feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#C8232C" floodOpacity="0.6" />
						</filter>
					</defs>

					{/* Türkiye kara kütlesi */}
					<path
						d={TURKEY_PATH}
						fill="#cfe2f8"
						stroke="#8ab4d8"
						strokeWidth="1.2"
						filter="url(#mapShadow)"
					/>

					{/* Deniz etiketleri */}
					<text x="22"  y="395" fill="#8ab4d8" fontSize="9" fontFamily="sans-serif">Ege Denizi</text>
					<text x="340" y="410" fill="#8ab4d8" fontSize="9" fontFamily="sans-serif">Akdeniz</text>
					<text x="310" y="20"  fill="#8ab4d8" fontSize="9" fontFamily="sans-serif">Karadeniz</text>

					{/* Bağlam şehirleri (lacivert) */}
					{CONTEXT_CITIES.map((c) => (
						<g key={c.id}>
							<circle cx={c.x} cy={c.y} r="5.5" fill="white" stroke="#1B2F5E" strokeWidth="1.2" opacity="0.85" />
							<circle cx={c.x} cy={c.y} r="2.5" fill="#1B2F5E" />
							<text x={c.x + 8} y={c.y + 4} fill="#1B2F5E" fontSize="8.5" fontFamily="sans-serif" fontWeight="500">{c.name}</text>
						</g>
					))}

					{/* Çalışılan şehirler (kırmızı – tıklanabilir) */}
					{WORKED_CITIES.map((city) => {
						const isActive = active?.id === city.id
						return (
							<g
								key={city.id}
								onClick={() => toggle(city)}
								style={{ cursor: 'pointer' }}
							>
								{isActive && (
									<circle cx={city.x} cy={city.y} r="18" fill="#C8232C" opacity="0.15" />
								)}
								<circle
									cx={city.x} cy={city.y}
									r={isActive ? 12 : 9}
									fill={isActive ? '#C8232C' : 'white'}
									stroke="#C8232C"
									strokeWidth="2"
									filter={isActive ? 'url(#glowRed)' : undefined}
								/>
								<circle
									cx={city.x} cy={city.y}
									r={isActive ? 5 : 3.5}
									fill={isActive ? 'white' : '#C8232C'}
								/>
								<text
									x={city.x + (city.id === 'istanbul' ? -6 : 14)}
									y={city.id === 'istanbul' ? city.y - 14 : city.y + 4}
									fill="#C8232C"
									fontSize="9.5"
									fontWeight="700"
									fontFamily="sans-serif"
								>
									{city.name}
								</text>
							</g>
						)
					})}
				</svg>

				{/* Açıklama */}
				<div style={{ position: 'absolute', top: '12px', right: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.9)', borderRadius: '6px', padding: '5px 10px', fontSize: '11px' }}>
						<span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#C8232C', flexShrink: 0 }} />
						<span style={{ color: '#333' }}>{lang === 'en' ? 'Worked Here' : 'Çalıştığım Şehir'}</span>
					</div>
					<div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.9)', borderRadius: '6px', padding: '5px 10px', fontSize: '11px' }}>
						<span style={{ width: '10px', height: '10px', borderRadius: '50%', border: '1.5px solid #1B2F5E', flexShrink: 0 }} />
						<span style={{ color: '#333' }}>{lang === 'en' ? 'Other City' : 'Diğer Şehir'}</span>
					</div>
				</div>
			</div>

			{/* Şehir detay paneli */}
			{active ? (
				<div style={{
					background: '#fff', border: '1px solid #e0eaf5', borderRadius: '14px',
					padding: '20px 24px', boxShadow: '0 4px 20px rgba(27,47,94,0.1)',
					animation: 'fadeIn 0.2s ease',
				}}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
							<span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#C8232C', flexShrink: 0 }} />
							<h4 style={{ color: '#1B2F5E', margin: '0', fontSize: '1rem', fontWeight: '700' }}>{active.name}</h4>
						</div>
						<button
							onClick={() => setActive(null)}
							style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '18px', lineHeight: 1, padding: '0 4px' }}
						>×</button>
					</div>
					<p style={{ color: '#888', fontSize: '12px', marginBottom: '12px', margin: '0 0 12px' }}>
						{lang === 'en' ? 'Hotels I worked at:' : 'Görev yaptığım oteller:'}
					</p>
					<ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
						{active.hotels.map((h, i) => (
							<li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
								<span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C8232C', flexShrink: 0, marginTop: '6px' }} />
								<span style={{ color: '#333', fontSize: '0.9rem' }}>{h}</span>
							</li>
						))}
					</ul>
				</div>
			) : (
				<div style={{
					background: '#fff', border: '1px dashed #c8d8ec', borderRadius: '14px',
					padding: '18px 24px', textAlign: 'center', color: '#8a9bb5', fontSize: '0.9rem',
				}}>
					{lang === 'en'
						? '🔴 Click on a red city marker to see the hotels.'
						: '🔴 Kırmızı şehirlere tıklayarak çalıştığım otelleri görün.'}
				</div>
			)}
		</div>
	)
}
