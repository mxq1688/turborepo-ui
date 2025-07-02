# UI Components Storybook Documentation

This is the Storybook documentation app for our UI components library. It provides an interactive environment to showcase, test, and document our React components.

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9.0.0

### Installation

From the root of the monorepo:

```bash
npm install
```

### Development

To start the Storybook development server:

```bash
npm run dev:storybook
```

This will start Storybook on port 6006. Visit `http://localhost:6006` to view the documentation.

### Building

To build the static Storybook site:

```bash
npm run build
```

The built files will be in the `storybook-static` directory.

## Adding Stories

Stories are added in the `stories` directory. Each component should have its own story file with the following naming convention:

```
ComponentName.stories.tsx
```

## Features

- Interactive component playground
- Auto-generated documentation
- Component testing environment
- Responsive viewport testing
- Theme switching support 