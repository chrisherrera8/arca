import { useNavigate } from 'react-router-dom'
import { useBudgets } from '@/contexts/BudgetContext'

export default function Dashboard() {
  const navigate = useNavigate()
  const { budgets } = useBudgets()
  const isEmpty = budgets.length === 0

  return (
    <div className="dashboard">
      <div data-testid="dashboard-header" className="dashboard-header">
        <button onClick={() => navigate('/budget/create')}>Add Budget</button>
      </div>

      {isEmpty && (
        <div data-testid="dashboard-empty-state" className="dashboard-empty-state">
          <p className="empty-dashboard-text">Create your first budget here</p>
        </div>
      )}
    </div>
  )
}