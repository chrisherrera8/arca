import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '../../tests/test-utils'
import Dashboard from './Dashboard'
import App from '../App'
import styles from './Dashboard.module.css'

describe('Dashboard Page', () => {
  it('renders the empty state message when no budgets exist', () => {
    render(<Dashboard />)

    expect(screen.getByText(/create your first budget here/i)).toBeInTheDocument()
  })

  it('renders the empty state text in grey', () => {
    render(<Dashboard />)

    const emptyText = screen.getByText(/create your first budget here/i)
    expect(emptyText).toHaveClass(styles.emptyText)
  })

  it('centers the empty state message on the canvas', () => {
    render(<Dashboard />)

    const emptyContainer = screen.getByTestId('dashboard-empty-state')
    expect(emptyContainer).toBeInTheDocument()
  })

  it('renders the "Add Budget" button', () => {
    render(<Dashboard />)

    const addButton = screen.getByRole('button', { name: /add budget/i })
    expect(addButton).toBeInTheDocument()
  })


  it('navigates to budget creation page when "Add Budget" is clicked', () => {
    render(<App />, {
      initialRoute: '/dashboard',
    })

    const addButton = screen.getByRole('button', { name: /add budget/i })
    fireEvent.click(addButton)

    expect(screen.getByRole('heading', { name: /create budget/i })).toBeInTheDocument()
  })
})