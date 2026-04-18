import Image from "next/image"

export default function Preloader() {
	return (
		<>
			<div id="loading" style={{ background: 'radial-gradient(circle at center, #1f356b 0%, #0f1e3e 65%, #0b1630 100%)' }}>
				<div id="loading-center">
					<div className="loader-container">
						<div className="wrap-loader">
							<div className="loader" style={{ borderTopColor: '#C8232C', borderRightColor: 'rgba(200,35,44,0.1)', borderBottomColor: 'rgba(200,35,44,0.1)', borderLeftColor: 'rgba(200,35,44,0.1)', borderWidth: '4px', width: '90px', height: '90px', animationDuration: '0.8s' }} />
							<div className="icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90px', height: '90px', position: 'absolute', top: 0, left: 0 }}>
								<Image
									width="50"
									height="50"
									src="/images/logo/misiones-icon-clean.png"
									alt="Misiones"
									style={{ width: '45px', height: 'auto', objectFit: 'contain' }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
