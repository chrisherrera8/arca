# Arca React Frontend - Copilot Instructions

## Project Overview
This is a React frontend application for the Arca project, built with Vite, TypeScript, Vitest, and React Testing Library. The application follows test-driven development (TDD) practices.

## Code Style & Standards
- Use TypeScript for all files
- Follow React functional components with hooks
- Write unit tests using Vitest and React Testing Library
- Use absolute imports from `@/` for src directory
- Component structure: one component per file with co-located test files (Component.test.tsx)

## Testing Guidelines
- Write tests before or alongside implementation (TDD)
- Use React Testing Library for component tests (query by role/label, not selectors)
- Aim for >80% code coverage
- Test user behavior, not implementation details
- Test files: `Component.test.tsx` next to the component

## File Structure
```
frontend/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components/routes
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API calls and external services
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx
│   └── main.tsx
├── tests/             # Shared test utilities
├── vite.config.ts
├── vitest.config.ts
└── package.json
```

## Common Commands
- `npm run dev` - Start development server
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run build` - Build for production
- `npm run lint` - Run linter

## Key Dependencies
- React 18
- Vite
- Vitest
- React Testing Library
- TypeScript
- React Router (for routing)

## Git Workflow
- Create feature branches from `main`
- Write tests for all new features
- Ensure all tests pass before committing
- Create meaningful commit messages
