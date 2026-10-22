import { describe, it, expect } from 'vitest'
import { render, screen } from '../tests/test-utils'
import App from './App'

describe('App', () => {
  it('renders the dashboard page by default for authenticated users', () => {
    render(<App />, {
      initialRoute: '/dashboard',
    })

    expect(screen.getByText(/create your first budget here/i)).toBeInTheDocument()
  })

  it('renders the sidebar with organization name', () => {
    render(<App />, {
      initialRoute: '/dashboard',
    })

    expect(screen.getByText('Acme')).toBeInTheDocument()
  })

  it('renders the top bar with user info', () => {
    render(<App />, {
      initialRoute: '/dashboard',
    })

    expect(screen.getByText('Admin User')).toBeInTheDocument()
    expect(screen.getByText('admin@acme.com')).toBeInTheDocument()
  })

  it('navigates to budget creation page', () => {
    render(<App />, {
      initialRoute: '/budget/create',
    })

    expect(screen.getByRole('heading', { name: /create budget/i })).toBeInTheDocument()
  })

  it('navigates to budgets list page', () => {
    render(<App />, {
      initialRoute: '/budgets',
    })

    expect(screen.getByRole('heading', { name: /budgets/i })).toBeInTheDocument()
  })
})
