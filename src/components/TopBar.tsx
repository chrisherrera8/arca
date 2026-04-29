import type { User } from '@/types'
import styles from './TopBar.module.css'

interface TopBarProps {
  currentUser: User
}

export default function TopBar({ currentUser }: TopBarProps) {
  return (
    <header className={styles.topbar}>
      <div className={styles.right}>
        <button className={styles.notificationsButton} aria-label="Notifications">Notifications</button>
        <div className={styles.user}>
          <div aria-label="User avatar" className={styles.avatar}>
            {currentUser.name.charAt(0)}
          </div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>{currentUser.name}</span>
            <span className={styles.userEmail}>{currentUser.email}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
