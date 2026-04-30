import { useNavigate } from 'react-router-dom'
import { useBudgets } from '@/contexts/BudgetContext'
import styles from './BudgetList.module.css'

export default function BudgetList() {
  const navigate = useNavigate()
  const { budgets } = useBudgets()

  return (
    <div className={styles.budgetList}>
      <div className={styles.header}>
        <h1>Budgets</h1>
        <button className="btn btn-primary" onClick={() => navigate('/budget/create')}>Add Budget</button>
      </div>

      {budgets.length === 0 ? (
        <p>No budgets yet</p>
      ) : (
        <ul className={styles.list}>
          {budgets.map((budget) => (
            <li key={budget.id} className={styles.listItem}>
              <span className={styles.itemName}>{budget.name}</span>
              <span className={styles.itemAmount}>${budget.amount.toLocaleString()}</span>
              <span className={styles.itemTeam}>{budget.teamName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
