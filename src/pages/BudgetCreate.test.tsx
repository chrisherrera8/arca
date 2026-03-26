import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '../../tests/test-utils'
import userEvent from '@testing-library/user-event'
import BudgetCreate from './BudgetCreate'
import App from '../App'
import { TEST_ADMIN_USER } from '../../tests/fixtures'

describe('BudgetCreate Page', () => {
  it('renders the page heading', () => {
    render(<BudgetCreate />, { currentUser: TEST_ADMIN_USER })

    expect(screen.getByRole('heading', { name: /create budget/i })).toBeInTheDocument()
  })

  it('renders the budget name input field', () => {
    render(<BudgetCreate />, { currentUser: TEST_ADMIN_USER })

    const nameInput = screen.getByLabelText(/budget name/i)
    expect(nameInput).toBeInTheDocument()
  })

  it('renders the budget amount input field', () => {
    render(<BudgetCreate />, { currentUser: TEST_ADMIN_USER })

    const amountInput = screen.getByLabelText(/budget amount/i)
    expect(amountInput).toBeInTheDocument()
    expect(amountInput).toHaveAttribute('type', 'number')
  })

  it('renders a team selection dropdown with 3 teams', () => {
    render(<BudgetCreate />, { currentUser: TEST_ADMIN_USER })

    const teamSelect = screen.getByLabelText(/team/i)
    expect(teamSelect).toBeInTheDocument()

    // Should have the 3 teams plus a placeholder option
    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(4) // placeholder + 3 teams
  })

  it('renders the three team options: Engineering, Marketing, Operations', () => {
    render(<BudgetCreate />, { currentUser: TEST_ADMIN_USER })

    expect(screen.getByRole('option', { name: /engineering/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /marketing/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /operations/i })).toBeInTheDocument()
  })

  it('renders a submit button', () => {
    render(<BudgetCreate />, { currentUser: TEST_ADMIN_USER })

    const submitButton = screen.getByRole('button', { name: /create budget/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('allows the user to fill in the budget name', async () => {
    const user = userEvent.setup()
    render(<BudgetCreate />, { currentUser: TEST_ADMIN_USER })

    const nameInput = screen.getByLabelText(/budget name/i)
    await user.type(nameInput, 'Q1 Engineering Budget')

    expect(nameInput).toHaveValue('Q1 Engineering Budget')
  })

  it('allows the user to fill in the budget amount', async () => {
    const user = userEvent.setup()
    render(<BudgetCreate />, { currentUser: TEST_ADMIN_USER })

    const amountInput = screen.getByLabelText(/budget amount/i)
    await user.type(amountInput, '50000')

    expect(amountInput).toHaveValue(50000)
  })

  it('allows the user to select a team', async () => {
    const user = userEvent.setup()
    render(<BudgetCreate />, { currentUser: TEST_ADMIN_USER })

    const teamSelect = screen.getByLabelText(/team/i)
    await user.selectOptions(teamSelect, 'team-1')

    expect(teamSelect).toHaveValue('team-1')
  })

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<BudgetCreate />, { currentUser: TEST_ADMIN_USER })

    const submitButton = screen.getByRole('button', { name: /create budget/i })
    await user.click(submitButton)

    expect(screen.getByText(/budget name is required/i)).toBeInTheDocument()
    expect(screen.getByText(/budget amount is required/i)).toBeInTheDocument()
    expect(screen.getByText(/please select a team/i)).toBeInTheDocument()
  })

  it('submits the form and navigates to budgets list on success', async () => {
    const user = userEvent.setup()
    render(<App />, {
      currentUser: TEST_ADMIN_USER,
      initialRoute: '/budget/create',
    })

    // Fill out the form
    await user.type(screen.getByLabelText(/budget name/i), 'Q1 Engineering Budget')
    await user.type(screen.getByLabelText(/budget amount/i), '50000')
    await user.selectOptions(screen.getByLabelText(/team/i), 'team-1')

    // Submit
    await user.click(screen.getByRole('button', { name: /create budget/i }))

    // Should navigate to budgets list
    await waitFor(() => {
      expect(screen.getByText(/Q1 Engineering Budget/i)).toBeInTheDocument()
    })
  })
})
