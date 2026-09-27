import { Routes, Route, Navigate } from 'react-router-dom'
import { useUser } from '@clerk/react'
import './App.css'
import AppLayout from '@/components/AppLayout'
import Dashboard from '@/pages/Dashboard'
import BudgetCreate from '@/pages/BudgetCreate'
import BudgetList from '@/pages/BudgetList'
import SignUpPage from '@/pages/SignUp'

function LandingRedirect() {
  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) return null

  return <Navigate to={isSignedIn ? '/dashboard' : '/sign-up'} replace />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingRedirect />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/budget/create" element={<BudgetCreate />} />
        <Route path="/budgets" element={<BudgetList />} />
      </Route>
      <Route path="*" element={<LandingRedirect />} />
    </Routes>
  )
}

export default App