import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import AppLayout from '@/components/AppLayout'
import Dashboard from '@/pages/Dashboard'
import BudgetCreate from '@/pages/BudgetCreate'
import BudgetList from '@/pages/BudgetList'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/budget/create" element={<BudgetCreate />} />
        <Route path="/budgets" element={<BudgetList />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App