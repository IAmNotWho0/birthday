import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Disable React DevTools to avoid semver validation errors with empty versions
if (typeof window !== 'undefined' && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  const originalRegister = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.registerRendererInterface
  if (originalRegister) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.registerRendererInterface = function(...args) {
      try {
        return originalRegister.apply(this, args)
      } catch (e) {
        console.warn('DevTools registration error (safe to ignore):', e)
      }
    }
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
