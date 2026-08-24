import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'

// Lazy so the dashboard never lands in the main portfolio bundle.
// eslint-disable-next-line react-refresh/only-export-components -- entry point, not a refreshable module
const Counter = lazy(() => import('./counter/Counter.jsx'))

// Exactly two routes, never linked to each other — no router needed.
const path = window.location.pathname.replace(/\/+$/, '') || '/'
const isCounter = path === '/counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isCounter ? (
      <Suspense fallback={<div className="min-h-screen bg-zinc-50 dark:bg-[#09090b]" />}>
        <Counter />
      </Suspense>
    ) : (
      <LanguageProvider>
        <App />
      </LanguageProvider>
    )}
  </StrictMode>,
)
