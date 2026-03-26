import type { User, Team, Budget } from '@/types'

// Test users
export const TEST_ADMIN_USER: User = {
  id: 'user-1',
  name: 'Admin User',
  email: 'admin@acme.com',
  role: 'admin',
  createdAt: new Date('2025-01-01'),
  updatedAt: new Date('2025-01-01'),
}

export const TEST_MEMBER_USER: User = {
  id: 'user-2',
  name: 'Regular Member',
  email: 'member@acme.com',
  role: 'member',
  createdAt: new Date('2025-02-01'),
  updatedAt: new Date('2025-02-01'),
}

// Test teams
export const TEST_TEAMS: Team[] = [
  {
    id: 'team-1',
    name: 'Engineering',
    description: 'Engineering team',
    memberCount: 12,
    createdAt: new Date('2025-01-01'),
  },
  {
    id: 'team-2',
    name: 'Marketing',
    description: 'Marketing team',
    memberCount: 8,
    createdAt: new Date('2025-01-01'),
  },
  {
    id: 'team-3',
    name: 'Operations',
    description: 'Operations team',
    memberCount: 5,
    createdAt: new Date('2025-01-01'),
  },
]

// Test budgets
export const TEST_BUDGETS: Budget[] = [
  {
    id: 'budget-1',
    name: 'Q1 Engineering Budget',
    amount: 50000,
    teamId: 'team-1',
    teamName: 'Engineering',
    status: 'active',
    spent: 12000,
    createdBy: 'user-1',
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-15'),
  },
  {
    id: 'budget-2',
    name: 'Marketing Campaign',
    amount: 20000,
    teamId: 'team-2',
    teamName: 'Marketing',
    status: 'active',
    spent: 5000,
    createdBy: 'user-1',
    createdAt: new Date('2025-02-01'),
    updatedAt: new Date('2025-02-01'),
  },
]
