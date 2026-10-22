import { Routes, Route, Navigate } from 'react-router-dom'
import { useUser } from '@clerk/react'
import './App.css'
import AppLayout from '@/components/AppLayout'
import Dashboard from '@/pages/Dashboard'
import BudgetCreate from '@/pages/BudgetCreate'
import BudgetList from '@/pages/BudgetList'
import SignInPage from '@/pages/SignIn'
import SignUpPage from '@/pages/SignUp'
import ProtectedRoute from '@/components/ProtectedRoute'

function LandingRedirect() {
  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) return null

  return <Navigate to={isSignedIn ? '/dashboard' : '/sign-in'} replace />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingRedirect />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />
      <Route path="/sign-in/*" element={<SignInPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/budget/create" element={<BudgetCreate />} />
          <Route path="/budgets" element={<BudgetList />} />
        </Route>
      </Route>
      <Route path="*" element={<LandingRedirect />} />
    </Routes>
  )
}

export default App