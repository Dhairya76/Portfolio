import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Base styles first: App pulls in every component stylesheet, and if those
// land before this one the base `.mono-label` colour wins every equal-
// specificity tie and greys out the accents components set deliberately.
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
