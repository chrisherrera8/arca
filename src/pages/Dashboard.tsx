import { useNavigate } from 'react-router-dom'
import { useBudgets } from '@/contexts/BudgetContext'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const navigate = useNavigate()
  const { budgets } = useBudgets()
  const isEmpty = budgets.length === 0

  return (
    <div className={styles.dashboard}>
      <div data-testid="dashboard-header" className={styles.header}>
        <button className="btn btn-primary" onClick={() => navigate('/budget/create')}>Add Budget</button>
      </div>

      {isEmpty && (
        <div data-testid="dashboard-empty-state" className={styles.emptyState}>
          <p className={styles.emptyText}>Create your first budget here</p>
        </div>
      )}
    </div>
  )
}
