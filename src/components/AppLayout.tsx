import { Outlet, useNavigate } from 'react-router-dom'
import { useOrganization } from '@clerk/react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import styles from './AppLayout.module.css'

export default function AppLayout() {
  const { organization } = useOrganization()
  const navigate = useNavigate()

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
    }
  }

  return (
    <div className={styles.appLayout}>
      <Sidebar orgName={organization?.name} onNavigate={handleNavigate} />
      <div className={styles.appMain}>
        <TopBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
