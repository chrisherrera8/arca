import type { User } from '@/types'

interface TopBarProps {
  currentUser: User
}

export default function TopBar({ currentUser }: TopBarProps) {
  return (
    <header className="topbar">
      <div className="topbar-right">
        <button aria-label="Notifications">Notifications</button>
        <div className="topbar-user">
          <div aria-label="User avatar" className="avatar">
            {currentUser.name.charAt(0)}
          </div>
          <div className="user-info">
            <span>{currentUser.name}</span>
            <span>{currentUser.email}</span>
          </div>
        </div>
      </div>
    </header>
  )
}