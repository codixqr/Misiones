'use client'
import { useLanguage } from '@/utils/LanguageContext'

import { useState, useRef, useEffect } from 'react'

export default function LanguageSwitcher() {
    const { lang, setLang } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()

    const langs = {
        tr: { flag: '🇹🇷', label: 'TR', name: 'Türkçe' },
        en: { flag: '🇬🇧', label: 'EN', name: 'English' },
        ar: { flag: '🇸🇦', label: 'AR', name: 'العربية' },
        ru: { flag: '🇷🇺', label: 'RU', name: 'Русский' }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="lang-switcher-container" ref={ref} style={{ position: 'relative' }}>
            <button className="lang-switcher" onClick={() => setIsOpen(!isOpen)} title="Change Language" style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'transparent', border: '1px solid #e5e7eb', padding: '5px 12px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                <span className="lang-flag" style={{ fontSize: '18px' }}>{langs[lang]?.flag || '🇹🇷'}</span>
                <span style={{ fontWeight: '600', color: '#1B2F5E' }}>{langs[lang]?.label || 'TR'}</span>
                <i className="icon-chevron-down" style={{ fontSize: '12px', marginLeft: '2px', color: '#1B2F5E', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
            </button>

            {isOpen && (
                <div className="lang-dropdown" style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, background: '#fff', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', overflow: 'hidden', zIndex: 100, minWidth: '130px', border: '1px solid #f0f0f0' }}>
                    {Object.entries(langs).map(([code, { flag, name }]) => (
                        <button
                            key={code}
                            onClick={() => { setLang(code); setIsOpen(false); }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '10px', width: '100%', padding: '10px 15px',
                                border: 'none', background: lang === code ? '#f8fafc' : '#fff', cursor: 'pointer',
                                textAlign: 'left', transition: 'background 0.2s', color: '#1B2F5E', fontWeight: lang === code ? '700' : '500'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = '#f0f4f8'}
                            onMouseOut={(e) => e.currentTarget.style.background = lang === code ? '#f8fafc' : '#fff'}
                        >
                            <span style={{ fontSize: '16px' }}>{flag}</span>
                            <span>{name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
