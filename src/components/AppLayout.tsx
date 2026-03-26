import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function AppLayout() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  if (!currentUser) return null

  const handleNavigate = (page: string) => {
    switch (page) {
      case 'dashboard':
        navigate('/dashboard')
        break
      case 'budgets':
        navigate('/budgets')
        break
      case 'budget-create':
        navigate('/budget/create')
        break
      case 'teams':
        navigate('/teams')
        break
      case 'analytics':
        navigate('/analytics')
        break
      case 'settings':
        navigate('/settings')
        break
      case 'logout':
        navigate('/logout')
        break
    }
  }

  return (
    <div className="app-layout">
      <Sidebar currentUser={currentUser} onNavigate={handleNavigate} />
      <div className="app-main">
        <TopBar currentUser={currentUser} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}