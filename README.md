# Arca Frontend

A modern React frontend application for the Arca community platform, built with Vite, TypeScript, Vitest, and React Testing Library.

## Project Structure

```
arca/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page-level components
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API calls and external services
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   ├── App.css           # Application styles
│   ├── App.test.tsx      # Application tests
│   └── main.tsx          # Application entry point
├── tests/
│   ├── setup.ts          # Test environment setup
│   └── test-utils.tsx    # Testing utilities and custom render
├── vite.config.ts        # Vite configuration
├── vitest.config.ts      # Vitest configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Testing

Run tests:

```bash
npm run test          # Run tests in watch mode
npm run test -- run   # Run tests once
npm run test:ui       # Run tests with UI
npm run test:coverage # Generate coverage report
```

### Building

Build for production:

```bash
npm run build
```

Bundled files will be in the `dist/` directory.

### Linting

Run ESLint:

```bash
npm run lint
```

## Development Guidelines

### Component Structure

Create one component per file with co-located tests:

```
components/
├── Button.tsx
├── Button.test.tsx
├── Card.tsx
└── Card.test.tsx
```

### Writing Tests (TDD)

Use React Testing Library to test user behavior, not implementation details:

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@/tests/test-utils'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('renders a button with text', () => {
    render(<MyComponent />)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })
})
```

### Using TypeScript

- Use TypeScript for all files
- Define types in `src/types/` for shared interfaces
- Use absolute imports with `@/` alias (e.g., `import { MyComponent } from '@/components'`)

### Code Style

- Follow React best practices and hooks convention
- Use functional components with hooks
- Keep components small and focused
- Aim for >80% test coverage

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests in watch mode |
| `npm run test:ui` | Run tests with interactive UI |
| `npm run test:coverage` | Generate test coverage report |
| `npm run lint` | Run ESLint |

## Key Dependencies

- **React 19** - UI library
- **Vite 8** - Build tool and dev server
- **Vitest** - Unit test framework
- **React Testing Library** - Component testing utilities
- **TypeScript** - Static type checking
- **React Router** - Client-side routing (ready to add)

## Git Workflow

1. Create a feature branch from `main`
2. Write tests first (TDD approach)
3. Implement the feature
4. Ensure all tests pass: `npm run test -- run`
5. Ensure no linting issues: `npm run lint`
6. Create a pull request

## Troubleshooting

### Port 5173 Already in Use

```bash
npm run dev -- --port 3000
```

### Clear Cache

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Make sure you've installed all dependencies and rebuilt:

```bash
npm install
npm run build
```

## Contributing

Please refer to the main Arca repository for contribution guidelines.

## License

See LICENSE file in root repository.
