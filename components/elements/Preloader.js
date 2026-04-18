import Image from "next/image"

export default function Preloader() {
	return (
		<>
			<div id="loading" style={{ background: 'radial-gradient(circle at center, #1f356b 0%, #0f1e3e 65%, #0b1630 100%)' }}>
				<div id="loading-center">
					<div className="loader-container">
						<div className="wrap-loader">
							<div className="loader" style={{ borderTopColor: '#C8232C', borderColor: 'rgba(200,35,44,0.2)', width: '210px', height: '210px' }} />
					<div className="icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '180px', height: '180px' }}>
							<Image
								width="140"
								height="140"
								src="/images/logo/misiones-icon-clean.png"
								alt="Misiones"
								style={{ width: '130px', height: 'auto', objectFit: 'contain' }}
							/>
						</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
