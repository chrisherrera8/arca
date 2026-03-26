import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { BudgetProvider } from '@/contexts/BudgetContext'
import './index.css'
import App from './App.tsx'

// Dev-only: auto-login with test admin user
const devUser = {
  id: 'user-1',
  name: 'Admin User',
  email: 'admin@acme.com',
  role: 'admin' as const,
  createdAt: new Date('2025-01-01'),
  updatedAt: new Date('2025-01-01'),
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider initialUser={devUser}>
        <BudgetProvider>
          <App />
        </BudgetProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)