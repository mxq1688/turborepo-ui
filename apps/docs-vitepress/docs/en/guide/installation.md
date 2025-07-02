# Installation

Learn how to install and set up the UI Component Library in your project.

## Requirements

Before installing the UI Component Library, make sure your environment meets the following requirements:

- **Node.js**: 16.0 or higher
- **Package Manager**: npm, yarn, or pnpm
- **Framework**: React 17+ or Vue 3+
- **TypeScript**: 4.5+ (optional but recommended)

## Package Installation

Choose the package that matches your framework:

::: code-group

```bash [React]
# Install the React package
npm install @ui-lib/ui-react

# Install peer dependencies
npm install react react-dom
```

```bash [Vue]
# Install the Vue package
npm install @ui-lib/ui-vue

# Install peer dependencies
npm install vue
```

:::

### Using Yarn

::: code-group

```bash [React]
yarn add @ui-lib/ui-react react react-dom
```

```bash [Vue]
yarn add @ui-lib/ui-vue vue
```

:::

### Using PNPM

::: code-group

```bash [React]
pnpm add @ui-lib/ui-react react react-dom
```

```bash [Vue]
pnpm add @ui-lib/ui-vue vue
```

:::

## CSS Framework

Our component library uses Tailwind CSS for styling. You have two options:

### Option 1: Use Pre-built CSS (Recommended)

Import the pre-compiled CSS file that includes all necessary styles:

```js
// In your main entry file
import '@ui-lib/ui-react/dist/index.css'
// or
import '@ui-lib/ui-vue/dist/index.css'
```

### Option 2: Configure Tailwind CSS

If you're already using Tailwind CSS in your project, extend your configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './node_modules/@ui-lib/**/*.{js,ts,jsx,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    }
  },
  plugins: []
}
```

## Framework Setup

### React Setup

#### 1. Basic Setup

```tsx
// src/App.tsx
import React from 'react'
import { Button, Card } from '@ui-lib/ui-react'
import '@ui-lib/ui-react/dist/index.css'

function App() {
  return (
    <div className="p-8">
      <Card>
        <h1 className="text-2xl font-bold mb-4">Welcome to UI Library</h1>
        <Button variant="primary">Get Started</Button>
      </Card>
    </div>
  )
}

export default App
```

#### 2. With Theme Provider (Optional)

```tsx
// src/App.tsx
import React from 'react'
import { ThemeProvider, Button } from '@ui-lib/ui-react'

function App() {
  return (
    <ThemeProvider theme="light">
      <Button variant="primary">Themed Button</Button>
    </ThemeProvider>
  )
}
```

#### 3. With Internationalization (Optional)

```tsx
// src/App.tsx
import React from 'react'
import { I18nProvider, Button } from '@ui-lib/ui-react'

const messages = {
  en: { hello: 'Hello' },
  zh: { hello: '你好' }
}

function App() {
  return (
    <I18nProvider locale="en" messages={messages}>
      <Button variant="primary">Hello World</Button>
    </I18nProvider>
  )
}
```

### Vue Setup

#### 1. Basic Setup

```vue
<!-- src/App.vue -->
<template>
  <div class="p-8">
    <Card>
      <h1 class="text-2xl font-bold mb-4">Welcome to UI Library</h1>
      <Button variant="primary">Get Started</Button>
    </Card>
  </div>
</template>

<script setup>
import { Button, Card } from '@ui-lib/ui-vue'
import '@ui-lib/ui-vue/dist/index.css'
</script>
```

#### 2. Plugin Registration

```js
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import UILibrary from '@ui-lib/ui-vue'
import '@ui-lib/ui-vue/dist/index.css'

const app = createApp(App)
app.use(UILibrary)
app.mount('#app')
```

#### 3. With Global Configuration

```js
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import UILibrary from '@ui-lib/ui-vue'

const app = createApp(App)

// Global configuration
app.use(UILibrary, {
  theme: 'light',
  locale: 'en',
  size: 'md'
})

app.mount('#app')
```

## TypeScript Support

Our library includes full TypeScript definitions. No additional setup is required!

### Type Imports

```ts
// Import component types
import type { ButtonProps, CardProps } from '@ui-lib/ui-react'
// or
import type { ButtonProps, CardProps } from '@ui-lib/ui-vue'

// Use in your components
interface MyComponentProps {
  buttonConfig: ButtonProps
  cardConfig: CardProps
}
```

## Bundle Size Optimization

### Tree Shaking

Our library supports tree shaking out of the box:

```js
// Only imports Button component and its dependencies
import { Button } from '@ui-lib/ui-react'
```

### Component-level Imports

For even smaller bundles, import components individually:

```js
// React
import Button from '@ui-lib/ui-react/Button'
import Card from '@ui-lib/ui-react/Card'

// Vue
import Button from '@ui-lib/ui-vue/Button'
import Card from '@ui-lib/ui-vue/Card'
```

## CDN Usage (Browser)

For quick prototyping or static sites:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/@ui-lib/ui-react/dist/index.css">
</head>
<body>
  <div id="app"></div>
  
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@ui-lib/ui-react/dist/index.umd.js"></script>
</body>
</html>
```

## Troubleshooting

### Common Issues

**1. CSS not loading**
```bash
# Make sure to import the CSS file
import '@ui-lib/ui-react/dist/index.css'
```

**2. TypeScript errors**
```bash
# Install type definitions
npm install --save-dev @types/react @types/react-dom
```

**3. Build errors with bundlers**
```js
// Add to your bundler config
module.exports = {
  resolve: {
    alias: {
      '@ui-lib': path.resolve(__dirname, 'node_modules/@ui-lib')
    }
  }
}
```

## Next Steps

- 📖 Read the [Quick Start Guide](/guide/quick-start)
- 🎨 Learn about [Theme Customization](/guide/theming)
- 🧩 Browse [Component Documentation](/components/)
- 💡 Check out [Examples](/examples/) 