'use client'
import Image from 'next/image'
import { useLanguage } from '@/utils/LanguageContext'

export default function HipDetails() {
	const { lang } = useLanguage()
	const tr = lang === 'tr'
	const ar = lang === 'ar'
	const ru = lang === 'ru'

	return (
		<div className="hip-details-page bg-white tf-spacing-1">
			<div className="tf-container">
				{/* Başlık ve Felsefe */}
				<div className="row mb-50">
					<div className="col-lg-12">
						<div className="text-center mb-50">
							<p className="s-sub-title justify-center mb-17">
								<i className="icon-angles-right moveLeftToRight" />
								{tr ? 'HIP – Otelinizi Geliştirme Planımız' : ar ? 'HIP – خطة تطوير فندقك' : ru ? 'HIP – План развития вашего отеля' : 'HIP – Hotel Improvement Plan'}
							</p>
							<h2 className="s-title" style={{ color: '#1B2F5E', fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
								{tr ? 'Modern Otelcilik İçin Bilgece Hazırlanmış Bir Yol Haritasıdır' : ar ? 'خارطة طريق ذكية للفندقة الحديثة' : ru ? 'Умная дорожная карта для современного отеля' : 'A Wise Roadmap for Modern Hospitality'} <span style={{ color: '#C8232C' }}>HIP</span>
							</h2>
						</div>

						<div style={{ background: '#f8f9fd', borderRadius: '16px', padding: '40px', border: '1px solid #eef2fa', boxShadow: '0 4px 20px rgba(27,47,94,0.05)' }}>
							<p style={{ fontSize: '18px', color: '#1B2F5E', lineHeight: '1.8', fontWeight: '500', marginBottom: '20px' }}>
								Otelcilik artık yalnızca misafir ağırlamak değil; veriyi anlamak, stratejiyi yönetmek ve geleceği öngörmek sanatıdır.
								<br /><br />
								<strong>HIP – Hotel Improvement Plan (Otelinizi Geliştirme Planı)</strong>
								<br />
								Bu sanatın en rafine biçimde otelinizde uygulanması için tasarlanmış özel bir danışmanlık paketidir.
							</p>
							
							<h4 style={{ color: '#C8232C', marginBottom: '15px', fontWeight: '700' }}>{tr ? 'HIP’in Felsefesi' : ar ? 'فلسفة HIP' : ru ? 'Философия HIP' : 'HIP Philosophy'}</h4>
							<ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#606580', fontSize: '16px', lineHeight: '1.8' }}>
								<li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}><i className="icon-check" style={{ color: '#C8232C', marginRight: '10px' }}/> Varsayımları değil, ölçülebilir gerçekleri konuşur.</li>
								<li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}><i className="icon-check" style={{ color: '#C8232C', marginRight: '10px' }}/> KPI’ları yalnızca raporlamaz, onları stratejik bir pusulaya dönüştürür.</li>
								<li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}><i className="icon-check" style={{ color: '#C8232C', marginRight: '10px' }}/> Pazara tepki vermez, pazarı yönlendirir.</li>
							</ul>
							<p style={{ color: '#606580', fontSize: '16px', marginTop: '20px', lineHeight: '1.8' }}>
								RevPAR, ADR, doluluk, kanal karışımı, doğrudan rezervasyon oranı, maliyet yapısı, personel verimliliği ve marka gücü gibi göstergeler üzerinden otelinizi röntgen gibi tarar. 
								Ardından bu verileri sahadaki gerçeklerle birleştirerek net, uygulanabilir ve kârlılığı artıran bir yol haritası çıkarır.
							</p>
						</div>
					</div>
				</div>

				{/* İlk Görsel */}
				<div className="row mb-50 mt-50">
					<div className="col-12 text-center" style={{ display: 'flex', justifyContent: 'center' }}>
						<Image 
							src="/images/section/kpi-benchmark-1.jpg" 
							alt="Departman Bazlı KPI Benchmark" 
							width={800} 
							height={533} 
							style={{ maxWidth: '100%', width: 'auto', maxHeight: '600px', height: 'auto', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', objectFit: 'contain' }} 
						/>
					</div>
				</div>

				{/* Departman Bazlı Geliştirme Planı */}
				<div className="row mb-50">
					<div className="col-lg-12">
						<h3 style={{ color: '#1B2F5E', fontWeight: '800', marginBottom: '30px', textAlign: 'center' }}>{tr ? 'Departman Bazlı Geliştirme Planı' : ar ? 'خطة تطوير حسب الأقسام' : ru ? 'План улучшений по отделам' : 'Department-Based Improvement Plan'}</h3>
						<div className="row g-4">
							{/* Kart 1 */}
							<div className="col-md-6">
								<div style={{ background: '#fff', border: '1px solid #eee', padding: '30px', borderRadius: '12px', height: '100%', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
									<h4 style={{ color: '#C8232C', fontWeight: '700', marginBottom: '15px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>Satış ve Pazarlama</h4>
									<ul style={{ color: '#606580', paddingLeft: '15px' }}>
										<li style={{ marginBottom: '8px' }}><strong>Doğrudan Rezervasyonların Artırılması:</strong> OTA bağımlılığını azaltarak web sitesi ve CRM üzerinden misafir sadakatini güçlendirmek.</li>
										<li style={{ marginBottom: '8px' }}><strong>Kanal Yönetimi:</strong> Kanal karışımını optimize ederek yüksek komisyonlu satışlardan düşük maliyetli doğrudan satışlara geçiş.</li>
										<li><strong>Marka Konumlandırması:</strong> Dijital görünürlük, sosyal medya performansı ve içerik stratejisiyle güçlü bir ses kazanmak.</li>
									</ul>
								</div>
							</div>
							{/* Kart 2 */}
							<div className="col-md-6">
								<div style={{ background: '#fff', border: '1px solid #eee', padding: '30px', borderRadius: '12px', height: '100%', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
									<h4 style={{ color: '#C8232C', fontWeight: '700', marginBottom: '15px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>Gelir Yönetimi</h4>
									<ul style={{ color: '#606580', paddingLeft: '15px' }}>
										<li style={{ marginBottom: '8px' }}><strong>Fiyatlandırma Stratejisi:</strong> RevPAR ve ADR verilerini talep trendleriyle eşleştirerek dinamik fiyatlandırma.</li>
										<li style={{ marginBottom: '8px' }}><strong>Talep Tahmini:</strong> RMS ile sezonluk dalgalanmaları öngörmek, yüksek talep dönemlerinde kârı maksimize etmek.</li>
										<li><strong>Segment Analizi:</strong> Kurumsal, leisure ve grup misafirleri ayrı ayrı yönetip optimum gelir elde etmek.</li>
									</ul>
								</div>
							</div>
							{/* Kart 3 */}
							<div className="col-md-6">
								<div style={{ background: '#fff', border: '1px solid #eee', padding: '30px', borderRadius: '12px', height: '100%', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
									<h4 style={{ color: '#C8232C', fontWeight: '700', marginBottom: '15px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>Ön Büro & Guest Relations</h4>
									<ul style={{ color: '#606580', paddingLeft: '15px' }}>
										<li style={{ marginBottom: '8px' }}><strong>Verimlilik:</strong> Dijital çözümlerle bekleme sürelerini minimize etmek.</li>
										<li style={{ marginBottom: '8px' }}><strong>Gelir Odaklılık:</strong> Upselling ve cross-selling ile oda gelirlerini artırmak.</li>
										<li><strong>Deneyim:</strong> Geri bildirimleri stratejik gelişim aracına, misafir ilişkilerini uzun vadeli bağa dönüştürmek. Krizleri fırsata çevirmek.</li>
									</ul>
								</div>
							</div>
							{/* Kart 4 */}
							<div className="col-md-6">
								<div style={{ background: '#fff', border: '1px solid #eee', padding: '30px', borderRadius: '12px', height: '100%', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
									<h4 style={{ color: '#C8232C', fontWeight: '700', marginBottom: '15px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>F&B, Housekeeping & Çamaşırhane</h4>
									<ul style={{ color: '#606580', paddingLeft: '15px' }}>
										<li style={{ marginBottom: '8px' }}><strong>Maliyet ve Menü:</strong> Menü mühendisliği, kimyasal/deterjan kontrolü, enerji ve su tasarrufu sağlamak.</li>
										<li style={{ marginBottom: '8px' }}><strong>Operasyon:</strong> Temizlik sürelerini KPI ile ölçmek, restoranı marka deneyimi sunan bir sahneye dönüştürmek.</li>
										<li><strong>Standardizasyon:</strong> Misafir memnuniyetini doğrudan etkileyen hijyen kalitesini sürdürülebilir kılmak.</li>
									</ul>
								</div>
							</div>
							{/* Kart 5 */}
							<div className="col-md-6">
								<div style={{ background: '#fff', border: '1px solid #eee', padding: '30px', borderRadius: '12px', height: '100%', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
									<h4 style={{ color: '#C8232C', fontWeight: '700', marginBottom: '15px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>Maliyet, Muhasebe & Teknik Servis</h4>
									<ul style={{ color: '#606580', paddingLeft: '15px' }}>
										<li style={{ marginBottom: '8px' }}><strong>Proaktif Bakım:</strong> Arıza çıkmadan bakım yaparak kesintileri önlemek, akıllı enerji yönetimiyle maliyetleri düşürmek.</li>
										<li style={{ marginBottom: '8px' }}><strong>Satınalma:</strong> Tedarikçi ilişkilerini güçlendirip maliyet avantajı ve stok yönetimi sağlamak.</li>
										<li><strong>Cost Control:</strong> Gelir-gider dengesini izlemek, gereksiz harcamaları yok etmek.</li>
									</ul>
								</div>
							</div>
							{/* Kart 6 */}
							<div className="col-md-6">
								<div style={{ background: '#fff', border: '1px solid #eee', padding: '30px', borderRadius: '12px', height: '100%', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
									<h4 style={{ color: '#C8232C', fontWeight: '700', marginBottom: '15px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>İnsan Kaynakları & Kalite</h4>
									<ul style={{ color: '#606580', paddingLeft: '15px' }}>
										<li style={{ marginBottom: '8px' }}><strong>Performans:</strong> KPI bazlı değerlendirmelerle personel verimliliğini artırmak, turnover oranını düşürmek.</li>
										<li style={{ marginBottom: '8px' }}><strong>Standartlar:</strong> ISO ve kalite sertifikasyonlarına uyum, süreç iyileştirme projeleri.</li>
										<li><strong>Misafir Memnuniyeti Ölçümü:</strong> Anket ve dijital geri bildirimlerle sürekli gelişimi garanti altına almak.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row mb-50">
					<div className="col-lg-12">
						<div style={{ background: '#1B2F5E', color: '#fff', padding: '40px', borderRadius: '16px', textAlign: 'center' }}>
							<h3 style={{ color: '#fff', fontWeight: '800', marginBottom: '20px' }}>{tr ? 'HIP’in Sorduğu Tek Soru' : ar ? 'السؤال الأساسي في HIP' : ru ? 'Главный вопрос HIP' : 'The One Question HIP Asks'}</h3>
							<p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
								Biz otelin iyi görünüp görünmediğini sormuyoruz.<br />
								<strong style={{ color: '#C8232C', fontSize: '24px', display: 'block', margin: '15px 0' }}>Para kazanıyor mu? Ne kadar kazanıyor?</strong>
								Eğer kazanmıyorsa, size bunun nedenini ve nasıl düzelteceğinizi net, uygulanabilir ve sahadan beslenen stratejilerle gösteriyoruz.<br />
								HIP, otelinizi yalnızca bugünün rekabetine değil, yarının belirsizliğine karşı da güçlendirir.<br />
								<strong>HIP ile çalışan bir otel, pazara tepki vermez; pazarı kontrol eder.</strong>
							</p>
						</div>
					</div>
				</div>

				{/* İkinci Görsel */}
				<div className="row mb-50 mt-50">
					<div className="col-12 text-center" style={{ display: 'flex', justifyContent: 'center' }}>
						<Image 
							src="/images/section/kpi-benchmark-2.jpg" 
							alt="Departman Bazlı KPI Benchmark Tablosu" 
							width={800} 
							height={533} 
							style={{ maxWidth: '100%', width: 'auto', maxHeight: '600px', height: 'auto', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', objectFit: 'contain' }} 
						/>
					</div>
				</div>

				<div className="row mb-50">
					<div className="col-lg-12">
						<div style={{ borderLeft: '4px solid #C8232C', paddingLeft: '20px', marginBottom: '40px' }}>
							<h3 style={{ color: '#1B2F5E', fontWeight: '800', marginBottom: '15px' }}>{tr ? 'HIP ile Kazanacaklarınız' : ar ? 'ما الذي ستحققه مع HIP' : ru ? 'Что вы получите с HIP' : 'What You Gain with HIP'}</h3>
							<ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#606580', fontSize: '16px', lineHeight: '1.8' }}>
								<li><i className="icon-arrow-right" style={{ color: '#C8232C' }}/> Yanlış fiyatlandırma stratejilerinin düzeltilmesi</li>
								<li><i className="icon-arrow-right" style={{ color: '#C8232C' }}/> OTA bağımlılığının azaltılması, doğrudan satışların artması</li>
								<li><i className="icon-arrow-right" style={{ color: '#C8232C' }}/> Operasyonel kayıpların ortadan kaldırılması</li>
								<li><i className="icon-arrow-right" style={{ color: '#C8232C' }}/> Marka ve pazar konumlandırmasının netleşmesi</li>
								<li><i className="icon-arrow-right" style={{ color: '#C8232C' }}/> Karlılığın sürdürülebilir hale gelmesi</li>
							</ul>
						</div>

						<h3 style={{ color: '#1B2F5E', fontWeight: '800', marginBottom: '30px' }}>{tr ? 'İki Seviyeli HIP Uygulaması' : ar ? 'تطبيق HIP على مستويين' : ru ? 'Двухуровневое применение HIP' : 'Two-Level HIP Implementation'}</h3>
						<div className="row g-4 mb-50">
							<div className="col-md-6">
								<div style={{ background: '#fff', border: '1px solid #1B2F5E', padding: '30px', borderRadius: '12px' }}>
									<h4 style={{ color: '#1B2F5E', fontWeight: '700', marginBottom: '10px' }}>Tam HIP – Komple Dönüşüm Programı</h4>
									<p style={{ color: '#606580', marginBottom: '15px', fontSize: '15px' }}>Otelin tüm sistemlerini yeniden yapılandıran köklü bir revizyondur:</p>
									<ul style={{ fontSize: '14px', color: '#606580', paddingLeft: '20px' }}>
										<li>PMS, RMS, CRM ve BT altyapısı</li>
										<li>Web sitesi, dijital görünürlük ve marka iletişimi</li>
										<li>Satış ve pazarlama yapısı</li>
										<li>Dağıtım kanalları ve komisyon yükü</li>
										<li>Fiyatlandırma ve gelir yönetimi</li>
										<li>Organizasyon yapısı ve departman verimliliği</li>
									</ul>
									<p style={{ color: '#1B2F5E', marginTop: '15px', fontWeight: '600', fontSize: '14px' }}>Yeni marka benimseyen, pazarda yeniden konumlanan veya finansal olarak düşük performans gösteren oteller için tam bir yeniden doğuş programıdır.</p>
								</div>
							</div>
							<div className="col-md-6">
								<div style={{ background: '#fff', border: '1px solid #C8232C', padding: '30px', borderRadius: '12px', height: '100%' }}>
									<h4 style={{ color: '#C8232C', fontWeight: '700', marginBottom: '10px' }}>Odaklanmış HIP – Hedefli Müdahale</h4>
									<p style={{ color: '#606580', marginBottom: '15px', fontSize: '15px' }}>Bazen sorun bellidir: Yanlış fiyatlandırma, zayıf dijital satışlar, uyumsuz sistemler veya operasyonel kayıplar. Odaklanmış HIP bu alanlardan birine yoğunlaşır:</p>
									<ul style={{ fontSize: '14px', color: '#606580', paddingLeft: '20px' }}>
										<li>Gelir Yönetimi</li>
										<li>Dijital Satış ve Pazarlama</li>
										<li>Teknoloji Altyapısı</li>
										<li>Operasyonel Verimlilik</li>
									</ul>
									<p style={{ color: '#C8232C', marginTop: '15px', fontWeight: '700', fontSize: '15px' }}>Sonuç: hızlı, ölçülebilir ve yüksek etkili iyileştirme.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-12">
						<div style={{ background: '#f8f9fd', borderRadius: '16px', padding: '40px', border: '1px solid #eef2fa' }}>
							<h3 style={{ color: '#1B2F5E', fontWeight: '800', marginBottom: '20px', textAlign: 'center' }}>{tr ? 'HIP KPI Benchmark Raporu – Analitik Derinlik' : ar ? 'تقرير HIP KPI المعياري – عمق تحليلي' : ru ? 'Отчет HIP KPI Benchmark — аналитическая глубина' : 'HIP KPI Benchmark Report — Analytical Depth'}</h3>
							<p style={{ textAlign: 'center', fontSize: '16px', color: '#606580', marginBottom: '40px' }}>
								Otelinizin her departmanını ölçülebilir, kıyaslanabilir ve geliştirilebilir hale getirir. Bu bilgiler ve veriler otelinizi geliştirme planı’nın analitik omurgasını oluşturur.
							</p>

							<div className="row g-4">
								<div className="col-lg-4 col-md-6">
									<div className="benchmark-card" style={{ padding: '20px', background: '#fff', borderRadius: '10px', height: '100%' }}>
										<h5 style={{ color: '#C8232C', fontWeight: '700' }}>Gelir ve Satış</h5>
										<p style={{ fontSize: '14px', color: '#555', marginTop: '10px' }}>
											<strong>RevPAR:</strong> Şehir otelleri (65-85€), Resortlar (95-120€).<br />
											<strong>ADR:</strong> İst (110-130€), Antalya (150-180€).<br />
											<strong>Doğrudan Rez:</strong> Hedef %35-40.
										</p>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="benchmark-card" style={{ padding: '20px', background: '#fff', borderRadius: '10px', height: '100%' }}>
										<h5 style={{ color: '#1B2F5E', fontWeight: '700' }}>Operasyonel Verimlilik</h5>
										<p style={{ fontSize: '14px', color: '#555', marginTop: '10px' }}>
											<strong>Housekeeping:</strong> Oda başı maliyet 8-12€ (%15 tasarruf).<br />
											<strong>Çamaşırhane:</strong> TAT hedef 12-18 saat.<br />
											<strong>Teknik Servis:</strong> MTTR hedef 4 saat.
										</p>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="benchmark-card" style={{ padding: '20px', background: '#fff', borderRadius: '10px', height: '100%' }}>
										<h5 style={{ color: '#C8232C', fontWeight: '700' }}>Maliyet Yönetimi</h5>
										<p style={{ fontSize: '14px', color: '#555', marginTop: '10px' }}>
											<strong>F&B Food Waste:</strong> Hedef %3 altı.<br />
											<strong>Satınalma:</strong> %20'ye kadar maliyet avantajı.<br />
											<strong>Enerji:</strong> Toplam giderin %5 altı hedef.
										</p>
									</div>
								</div>
							</div>

							<p style={{ textAlign: 'center', marginTop: '40px', fontWeight: '600', color: '#1B2F5E', fontSize: '18px' }}>
								HIP’in felsefesini görselleştirir: varsayımları değil, ölçülebilir gerçekleri konuşur. Her departman için KPI’lar canlı takip edilir, benchmarklarla kıyaslanır ve veriye dayalı kararlar alınır.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
