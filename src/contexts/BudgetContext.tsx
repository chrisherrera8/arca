import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Budget, BudgetFormData, Team } from '@/types'

const DEFAULT_TEAMS: Team[] = [
  { id: 'team-1', name: 'Engineering', description: 'Engineering team', memberCount: 12, createdAt: new Date() },
  { id: 'team-2', name: 'Marketing', description: 'Marketing team', memberCount: 8, createdAt: new Date() },
  { id: 'team-3', name: 'Operations', description: 'Operations team', memberCount: 5, createdAt: new Date() },
]

interface BudgetContextValue {
  budgets: Budget[]
  teams: Team[]
  addBudget: (data: BudgetFormData, createdBy: string) => void
}

const BudgetContext = createContext<BudgetContextValue | null>(null)

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [budgets, setBudgets] = useState<Budget[]>([])

  const addBudget = (data: BudgetFormData, createdBy: string) => {
    const team = DEFAULT_TEAMS.find((t) => t.id === data.teamId)
    const now = new Date()
    const newBudget: Budget = {
      id: `budget-${Date.now()}`,
      name: data.name,
      amount: data.amount,
      teamId: data.teamId,
      teamName: team?.name ?? '',
      status: 'active',
      spent: 0,
      createdBy,
      createdAt: now,
      updatedAt: now,
    }
    setBudgets((prev) => [...prev, newBudget])
  }

  return (
    <BudgetContext.Provider value={{ budgets, teams: DEFAULT_TEAMS, addBudget }}>
      {children}
    </BudgetContext.Provider>
  )
}

export function useBudgets() {
  const context = useContext(BudgetContext)
  if (!context) {
    throw new Error('useBudgets must be used within a BudgetProvider')
  }
  return context
}
