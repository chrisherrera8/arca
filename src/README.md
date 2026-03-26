# Arca Frontend

## Project Structure

- **components/**: Reusable UI components
- **pages/**: Page-level components
- **hooks/**: Custom React hooks
- **services/**: API calls and external services
- **types/**: TypeScript type definitions

## Development

All components should follow these practices:
- One component per file
- Co-located test files (Component.test.tsx)
- Functional components with hooks
- TypeScript for type safety
- React Testing Library for unit tests (query by role/label)

## Testing

Tests should be written before or alongside implementation following TDD principles.

```bash
npm run test          # Run tests
npm run test:ui       # Run tests with UI
npm run test:coverage # Run tests with coverage report
```
