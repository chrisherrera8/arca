import type { User, PageName } from '@/types'

interface SidebarProps {
  currentUser: User
  onNavigate: (page: string) => void
  activePage?: PageName
}

const navItems = [
  { label: 'Dashboard', page: 'dashboard' },
  { label: 'Budgets', page: 'budgets' },
  { label: 'Teams', page: 'teams' },
  { label: 'Analytics', page: 'analytics' },
] as const

export default function Sidebar({ onNavigate, activePage }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="org-name">Acme</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ label, page }) => (
          <div key={page} data-active={activePage === page ? 'true' : undefined}>
            <a
              href={`#${page}`}
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

      <div className="sidebar-footer">
        <button onClick={() => onNavigate('settings')}>Settings</button>
        <button onClick={() => onNavigate('logout')}>Logout</button>
      </div>
    </aside>
  )
}