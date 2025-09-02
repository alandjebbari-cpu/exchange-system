import './styles/globals.css'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState('ar') // اللغة الافتراضية

  useEffect(() => {
    // نخلي اللغة محفوظة بالمخزن المحلي
    const savedLang = localStorage.getItem('lang')
    if (savedLang) {
      setLang(savedLang)
    }
  }, [])

  const switchLang = (newLang) => {
    setLang(newLang)
    localStorage.setItem('lang', newLang)
  }

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Component {...pageProps} switchLang={switchLang} />
    </div>
  )
}
