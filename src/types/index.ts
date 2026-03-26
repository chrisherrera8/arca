// User types
export type UserRole = 'admin' | 'member' | 'viewer'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

// Team types
export interface Team {
  id: string
  name: string
  description?: string
  memberCount: number
  createdAt: Date
}

// Budget types
export type BudgetStatus = 'active' | 'exhausted' | 'draft'

export interface Budget {
  id: string
  name: string
  amount: number
  teamId: string
  teamName: string
  status: BudgetStatus
  spent: number
  createdBy: string
  createdAt: Date
  updatedAt: Date
}

export interface BudgetFormData {
  name: string
  amount: number
  teamId: string
}

// Navigation types
export type PageName = 'dashboard' | 'budgets' | 'budget-create' | 'teams' | 'analytics' | 'settings' | 'logout'
