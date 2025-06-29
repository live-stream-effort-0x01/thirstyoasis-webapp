# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ThirstyOasis is a React-based web application built with TypeScript and Vite. The project uses React Router for navigation and follows modern React development practices.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- **React 19.0.0** - UI framework
- **TypeScript 5.7.2** - Type safety with strict mode enabled
- **Vite 6.2.0** - Build tool and dev server
- **React Router 7.2.0** - Client-side routing
- **ESLint** - Code quality and consistency

### Project Structure
- `/src` - Source code
  - `main.tsx` - Application entry point with React Router setup
  - `App.tsx` - Main component with route definitions
  - `/hooks` - Custom React hooks
  - `/assets` - Static assets
- `/public` - Public static files

### Routing Structure
The application defines routes in `App.tsx`:
- `/` - Home page (component not yet implemented)
- `/messages` - Messages page (component not yet implemented)
- `/messages/:id` - Individual chat view (component not yet implemented)
- `*` - 404 Not Found page (component not yet implemented)

### TypeScript Configuration
- Strict mode is enabled
- Uses project references with separate configs:
  - `tsconfig.app.json` - Application code
  - `tsconfig.node.json` - Node.js/build scripts

## Important Notes

1. **Components Not Implemented**: The routing structure references Home, Messages, Chats, and NotFound components that need to be created.

2. **No Testing Framework**: Currently no testing setup. Consider adding Vitest or Jest for unit tests.

3. **Authentication**: The `useAuth.tsx` file exists but contains a placeholder HOC instead of an actual authentication hook implementation.

4. **ESLint Configuration**: Basic React and TypeScript rules are configured. For production apps, consider enabling stricter type-checking rules as documented in README.md.