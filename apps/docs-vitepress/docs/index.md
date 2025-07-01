---
layout: home

hero:
  name: "UI Component Library"
  text: "Enterprise-grade components for modern web applications"
  tagline: "Built with Vue 3, React, and TypeScript. Featuring theme customization, internationalization, and accessibility support."
  image:
    src: /logo.svg
    alt: UI Component Library
  actions:
    - theme: brand
      text: Get Started
      link: /guide/installation
    - theme: alt
      text: View Components
      link: /components/
    - theme: alt
      text: 中文文档
      link: /zh/

features:
  - icon: 🎨
    title: Theme Customization
    details: Flexible theming system with dark mode support. Customize colors, spacing, and typography to match your brand.
  
  - icon: 🌍
    title: Internationalization
    details: Built-in i18n support for global applications. Easy translation management and locale switching.
  
  - icon: ⚡
    title: High Performance
    details: Optimized components with TypeScript support. Tree-shaking enabled for minimal bundle size.
  
  - icon: 📱
    title: Responsive Design
    details: Mobile-first responsive components that work perfectly across all screen sizes and devices.
  
  - icon: ♿
    title: Accessibility
    details: WAI-ARIA compliant components ensuring your applications are accessible to all users.
  
  - icon: 🔧
    title: Developer Experience
    details: Excellent TypeScript support, comprehensive documentation, and intuitive API design.
---

## Quick Start

Get up and running with our component library in minutes:

::: code-group

```bash [npm]
npm install @ui-lib/ui-react
# or
npm install @ui-lib/ui-vue
```

```bash [yarn]
yarn add @ui-lib/ui-react
# or
yarn add @ui-lib/ui-vue
```

```bash [pnpm]
pnpm add @ui-lib/ui-react
# or
pnpm add @ui-lib/ui-vue
```

:::

## Usage Example

::: code-group

```tsx [React]
import { Button, Card } from '@ui-lib/ui-react'

function App() {
  return (
    <Card>
      <Button variant="primary">Hello World</Button>
    </Card>
  )
}
```

```vue [Vue]
<template>
  <Card>
    <Button variant="primary">Hello World</Button>
  </Card>
</template>

<script setup>
import { Button, Card } from '@ui-lib/ui-vue'
</script>
```

:::

## Why Choose Our Library?

- **60+ Components** - Comprehensive component collection covering all common use cases
- **100% TypeScript** - Full type safety and excellent IntelliSense support
- **99% Test Coverage** - Thoroughly tested and reliable components
- **Active Community** - Regular updates and responsive community support

## Framework Support

| Framework | Package | Status |
|-----------|---------|--------|
| React | `@ui-lib/ui-react` | ✅ Stable |
| Vue 3 | `@ui-lib/ui-vue` | ✅ Stable |
| Storybook | `@ui-lib/docs-storybook` | 🧪 Beta |

## Community

Join our growing community of developers:

- [GitHub Discussions](https://github.com/your-username/turborepo-ui/discussions) - Ask questions and share ideas
- [Discord](https://discord.gg/your-invite) - Chat with other developers
- [Twitter](https://twitter.com/your-handle) - Follow for updates and news 