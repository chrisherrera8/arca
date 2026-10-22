import type { ReactNode } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { BudgetProvider } from '@/contexts/BudgetContext'

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialRoute?: string
}

const createWrapper = (options: CustomRenderOptions = {}) => {
  const { initialRoute = '/' } = options

  return ({ children }: { children: ReactNode }) => (
    <MemoryRouter initialEntries={[initialRoute]}>
      <BudgetProvider>
        {children}
      </BudgetProvider>
    </MemoryRouter>
  )
}

const customRender = (
  ui: ReactNode,
  options: CustomRenderOptions = {},
) => {
  const { initialRoute, ...renderOptions } = options
  return render(ui, {
    wrapper: createWrapper({ initialRoute }),
    ...renderOptions,
  })
}

export * from '@testing-library/react'
export { customRender as render }
