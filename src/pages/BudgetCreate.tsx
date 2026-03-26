import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { useBudgets } from '@/contexts/BudgetContext'

export default function BudgetCreate() {
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { teams, addBudget } = useBudgets()

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [teamId, setTeamId] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}
    if (!name.trim()) newErrors.name = 'Budget name is required'
    if (!amount || Number(amount) <= 0) newErrors.amount = 'Budget amount is required'
    if (!teamId) newErrors.teamId = 'Please select a team'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    addBudget({ name, amount: Number(amount), teamId }, currentUser?.id ?? '')
    navigate('/budgets')
  }

  return (
    <div className="budget-create">
      <h1>Create Budget</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="budget-name">Budget Name</label>
          <input
            id="budget-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="budget-amount">Budget Amount</label>
          <input
            id="budget-amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {errors.amount && <span className="error">{errors.amount}</span>}
        </div>

        <div>
          <label htmlFor="budget-team">Team</label>
          <select
            id="budget-team"
            value={teamId}
            onChange={(e) => setTeamId(e.target.value)}
          >
            <option value="">Select a team</option>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
          {errors.teamId && <span className="error">{errors.teamId}</span>}
        </div>

        <button type="submit">Create Budget</button>
      </form>
    </div>
  )
}