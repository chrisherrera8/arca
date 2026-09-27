import { Outlet, useNavigate } from 'react-router-dom'
import { useUser, useOrganization } from '@clerk/react'
import type { User } from '@/types'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import styles from './AppLayout.module.css'

export default function AppLayout() {
  const { user, isLoaded } = useUser()
  const { organization, membership } = useOrganization()
  const navigate = useNavigate()

  if (!isLoaded) return null
  if (!user) return null

  const currentUser: User = {
    id: user.id,
    name: user.fullName ?? user.username ?? user.primaryEmailAddress?.emailAddress ?? 'Unknown',
    email: user.primaryEmailAddress?.emailAddress ?? '',
    role: (membership?.role.replace('org:', '') as User['role']) ?? 'member',
    avatar: user.imageUrl,
    createdAt: user.createdAt ?? new Date(),
    updatedAt: user.updatedAt ?? new Date(),
  }

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
    <div className={styles.appLayout}>
      <Sidebar currentUser={currentUser} orgName={organization?.name} onNavigate={handleNavigate} />
      <div className={styles.appMain}>
        <TopBar currentUser={currentUser} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
