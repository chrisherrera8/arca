import type { User, PageName } from '@/types'
import styles from './Sidebar.module.css'

interface SidebarProps {
  currentUser: User
  orgName?: string
  onNavigate: (page: string) => void
  activePage?: PageName
}

const navItems = [
  { label: 'Dashboard', page: 'dashboard' },
  { label: 'Budgets', page: 'budgets' },
  { label: 'Teams', page: 'teams' },
  { label: 'Analytics', page: 'analytics' },
] as const

export default function Sidebar({ orgName, onNavigate, activePage }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <span className={styles.orgName}>{orgName ?? 'Personal account'}</span>
      </div>

      <nav className={styles.nav}>
        {navItems.map(({ label, page }) => (
          <div
            key={page}
            className={`${styles.navItem} ${activePage === page ? styles.navItemActive : ''}`}
          >
            <a
              href={`#${page}`}
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(page)
              }}
            >
              {label}
            </a>
          </div>
        ))}
      </nav>

      <div className={styles.footer}>
        <button className={styles.footerButton} onClick={() => onNavigate('settings')}>Settings</button>
        <button className={styles.footerButton} onClick={() => onNavigate('logout')}>Logout</button>
      </div>
    </aside>
  )
}
