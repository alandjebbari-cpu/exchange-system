import '../globals.css'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState('ar') // لغتك الافتراضية (عربي)

  useEffect(() => {
    // حتى نخلي اللغة تنحفظ بالمخزن المحلي
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
    <div dir={lang === 'ar' || lang === 'ku' ? 'rtl' : 'ltr'}>
      {/* زرار لتغيير اللغة */}
      <div style={{ padding: '10px' }}>
        <button onClick={() => switchLang('ar')}>🇸🇦 عربي</button>
        <button onClick={() => switchLang('ku')}>🇹🇯 کوردی</button>
        <button onClick={() => switchLang('en')}>🇬🇧 English</button>
      </div>

      {/* تحميل الصفحات */}
      <Component {...pageProps} lang={lang} />
    </div>
  )
}
