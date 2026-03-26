import type { ReactNode } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { BudgetProvider } from '@/contexts/BudgetContext'
import type { User } from '@/types'

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  currentUser?: User | null
  initialRoute?: string
}

const createWrapper = (options: CustomRenderOptions = {}) => {
  const { currentUser = null, initialRoute = '/' } = options

  return ({ children }: { children: ReactNode }) => (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AuthProvider initialUser={currentUser}>
        <BudgetProvider>
          {children}
        </BudgetProvider>
      </AuthProvider>
    </MemoryRouter>
  )
}

const customRender = (
  ui: ReactNode,
  options: CustomRenderOptions = {},
) => {
  const { currentUser, initialRoute, ...renderOptions } = options
  return render(ui, {
    wrapper: createWrapper({ currentUser, initialRoute }),
    ...renderOptions,
  })
}

export * from '@testing-library/react'
export { customRender as render }
