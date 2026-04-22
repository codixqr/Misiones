export default function loading() {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.92)',
            }}
        >
            <div
                style={{
                    width: '62px',
                    height: '62px',
                    borderRadius: '50%',
                    border: '3px solid rgba(27,47,94,0.2)',
                    borderTopColor: '#C8232C',
                    animation: 'spinLoader 0.8s linear infinite',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src="/images/logo/misiones-favicon-preloader.png"
                    alt="Loading"
                    style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                />
            </div>
            <style>{`
                @keyframes spinLoader {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )
}
