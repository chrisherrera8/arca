import { OrganizationSwitcher, UserButton } from '@clerk/react'
import styles from './TopBar.module.css'

export default function TopBar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.right}>
        <button className={styles.notificationsButton} aria-label="Notifications">Notifications</button>
        <OrganizationSwitcher hidePersonal />
        <UserButton showName />
      </div>
    </header>
  )
}
