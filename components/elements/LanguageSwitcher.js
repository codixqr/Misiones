'use client'
import { useLanguage } from '@/utils/LanguageContext'

export default function LanguageSwitcher() {
    const { lang, toggleLang } = useLanguage()

    return (
        <button className="lang-switcher" onClick={toggleLang} title="Change Language">
            <span className="lang-flag">{lang === 'tr' ? '🇹🇷' : '🇬🇧'}</span>
            <span>{lang === 'tr' ? 'EN' : 'TR'}</span>
        </button>
    )
}
