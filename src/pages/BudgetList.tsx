import { useNavigate } from 'react-router-dom'
import { useBudgets } from '@/contexts/BudgetContext'

export default function BudgetList() {
  const navigate = useNavigate()
  const { budgets } = useBudgets()

  return (
    <div className="budget-list">
      <div className="budget-list-header">
        <h1>Budgets</h1>
        <button onClick={() => navigate('/budget/create')}>Add Budget</button>
      </div>

      {budgets.length === 0 ? (
        <p>No budgets yet</p>
      ) : (
        <ul>
          {budgets.map((budget) => (
            <li key={budget.id}>
              <span>{budget.name}</span>
              <span>${budget.amount.toLocaleString()}</span>
              <span>{budget.teamName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}