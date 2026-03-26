import { describe, it, expect } from 'vitest'
import { render, screen } from '../tests/test-utils'
import App from './App'
import { TEST_ADMIN_USER } from '../tests/fixtures'

describe('App', () => {
  it('renders the dashboard page by default for authenticated users', () => {
    render(<App />, {
      currentUser: TEST_ADMIN_USER,
      initialRoute: '/dashboard',
    })

    expect(screen.getByText(/create your first budget here/i)).toBeInTheDocument()
  })

  it('renders the sidebar with organization name', () => {
    render(<App />, {
      currentUser: TEST_ADMIN_USER,
      initialRoute: '/dashboard',
    })

    expect(screen.getByText('Acme')).toBeInTheDocument()
  })

  it('renders the top bar with user info', () => {
    render(<App />, {
      currentUser: TEST_ADMIN_USER,
      initialRoute: '/dashboard',
    })

    expect(screen.getByText('Admin User')).toBeInTheDocument()
    expect(screen.getByText('admin@acme.com')).toBeInTheDocument()
  })

  it('navigates to budget creation page', () => {
    render(<App />, {
      currentUser: TEST_ADMIN_USER,
      initialRoute: '/budget/create',
    })

    expect(screen.getByRole('heading', { name: /create budget/i })).toBeInTheDocument()
  })

  it('navigates to budgets list page', () => {
    render(<App />, {
      currentUser: TEST_ADMIN_USER,
      initialRoute: '/budgets',
    })

    expect(screen.getByRole('heading', { name: /budgets/i })).toBeInTheDocument()
  })
})
