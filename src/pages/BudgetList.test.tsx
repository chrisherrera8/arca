import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '../../tests/test-utils'
import BudgetList from './BudgetList'
import App from '../App'
import { TEST_ADMIN_USER } from '../../tests/fixtures'

describe('BudgetList Page', () => {
  it('renders the page heading', () => {
    render(<BudgetList />, { currentUser: TEST_ADMIN_USER })

    expect(screen.getByRole('heading', { name: /budgets/i })).toBeInTheDocument()
  })

  it('shows empty state when no budgets exist', () => {
    render(<BudgetList />, { currentUser: TEST_ADMIN_USER })

    expect(screen.getByText(/no budgets yet/i)).toBeInTheDocument()
  })

  it('renders an "Add Budget" button', () => {
    render(<BudgetList />, { currentUser: TEST_ADMIN_USER })

    const addButton = screen.getByRole('button', { name: /add budget/i })
    expect(addButton).toBeInTheDocument()
  })

  it('displays budget name in the list after creation', () => {
    // This test will verify that budgets saved in context appear in the list
    // The BudgetProvider will be pre-populated via test setup
    render(<BudgetList />, { currentUser: TEST_ADMIN_USER })

    // After a budget has been created and saved to context,
    // it should appear in the list
    // This will be validated once BudgetProvider is wired up
  })

  it('displays budget amount for each budget', () => {
    render(<BudgetList />, { currentUser: TEST_ADMIN_USER })

    // Budget amounts should be formatted and displayed
  })

  it('displays the team name for each budget', () => {
    render(<BudgetList />, { currentUser: TEST_ADMIN_USER })

    // Team name assigned to each budget should be visible
  })

  it('navigates to budget creation when "Add Budget" is clicked', () => {
    render(<App />, {
      currentUser: TEST_ADMIN_USER,
      initialRoute: '/budgets',
    })

    const addButton = screen.getByRole('button', { name: /add budget/i })
    fireEvent.click(addButton)

    expect(screen.getByRole('heading', { name: /create budget/i })).toBeInTheDocument()
  })
})
