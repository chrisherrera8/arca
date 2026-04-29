import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { useBudgets } from '@/contexts/BudgetContext'
import styles from './BudgetCreate.module.css'

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
    <div className={styles.budgetCreate}>
      <h1 className={styles.title}>Create Budget</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="budget-name">Budget Name</label>
          <input
            id="budget-name"
            className={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="budget-amount">Budget Amount</label>
          <input
            id="budget-amount"
            className={styles.input}
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {errors.amount && <span className={styles.error}>{errors.amount}</span>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="budget-team">Team</label>
          <select
            id="budget-team"
            className={styles.select}
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
          {errors.teamId && <span className={styles.error}>{errors.teamId}</span>}
        </div>

        <button type="submit" className={styles.submitButton}>Create Budget</button>
      </form>
    </div>
  )
}
