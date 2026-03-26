import { describe, it, expect } from 'vitest'
import { render, screen } from '../../tests/test-utils'
import Dashboard from './Dashboard'
import { TEST_ADMIN_USER } from '../../tests/fixtures'

describe('Dashboard Page', () => {
  it('renders the empty state message when no budgets exist', () => {
    render(<Dashboard />, { currentUser: TEST_ADMIN_USER })

    expect(screen.getByText(/create your first budget here/i)).toBeInTheDocument()
  })

  it('renders the empty state text in grey', () => {
    render(<Dashboard />, { currentUser: TEST_ADMIN_USER })

    const emptyText = screen.getByText(/create your first budget here/i)
    expect(emptyText).toHaveClass('empty-dashboard-text')
  })

  it('centers the empty state message on the canvas', () => {
    render(<Dashboard />, { currentUser: TEST_ADMIN_USER })

    const emptyContainer = screen.getByTestId('dashboard-empty-state')
    expect(emptyContainer).toBeInTheDocument()
  })

  it('renders the "Add Budget" button', () => {
    render(<Dashboard />, { currentUser: TEST_ADMIN_USER })

    const addButton = screen.getByRole('button', { name: /add budget/i })
    expect(addButton).toBeInTheDocument()
  })


  it('navigates to budget creation page when "Add Budget" is clicked', () => {
    render(<Dashboard />, {
      currentUser: TEST_ADMIN_USER,
      initialRoute: '/dashboard',
    })

    const addButton = screen.getByRole('button', { name: /add budget/i })
    addButton.click()

    expect(screen.getByText(/create budget/i)).toBeInTheDocument()
  })
})