import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AplikasiFinanceTracker from './project/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AplikasiFinanceTracker />
  </StrictMode>,
)
