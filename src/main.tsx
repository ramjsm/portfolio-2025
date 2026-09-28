import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppPreloader } from './components/AppPreloader'
import { IntroProvider } from './contexts/IntroContext'
import { INITIAL_LOCALE } from './i18n/initialLocale'
import { basenameFor } from './i18n/locales'

// The app is client-rendered. The per-route HTML files emitted at build time
// (scripts/prerender-head.js) only carry the right <head> for crawlers.
//
// The basename keeps every in-app link and navigate() call inside the current
// language (`<Link to="/about">` renders `/es/about` on Spanish pages).
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntroProvider>
      <AppPreloader>
        <BrowserRouter basename={basenameFor(INITIAL_LOCALE)}>
          <App />
        </BrowserRouter>
      </AppPreloader>
    </IntroProvider>
  </StrictMode>
)
