# 安装指南

学习如何在您的项目中安装和设置 UI 组件库。

## 环境要求

在安装 UI 组件库之前，请确保您的环境满足以下要求：

- **Node.js**: 16.0 或更高版本
- **包管理器**: npm、yarn 或 pnpm
- **框架**: React 17+ 或 Vue 3+
- **TypeScript**: 4.5+ (可选但推荐)

## 包安装

选择与您的框架匹配的包：

::: code-group

```bash [React]
# 安装 React 包
npm install @ui-lib/ui-react

# 安装同等依赖
npm install react react-dom
```

```bash [Vue]
# 安装 Vue 包
npm install @ui-lib/ui-vue

# 安装同等依赖
npm install vue
```

:::

### 使用 Yarn

::: code-group

```bash [React]
yarn add @ui-lib/ui-react react react-dom
```

```bash [Vue]
yarn add @ui-lib/ui-vue vue
```

:::

### 使用 PNPM

::: code-group

```bash [React]
pnpm add @ui-lib/ui-react react react-dom
```

```bash [Vue]
pnpm add @ui-lib/ui-vue vue
```

:::

## CSS 框架

我们的组件库使用 Tailwind CSS 进行样式设计。您有两个选择：

### 选项 1: 使用预构建的 CSS (推荐)

导入包含所有必要样式的预编译 CSS 文件：

```js
// 在您的主入口文件中
import '@ui-lib/ui-react/dist/index.css'
// 或
import '@ui-lib/ui-vue/dist/index.css'
```

### 选项 2: 配置 Tailwind CSS

如果您的项目中已经在使用 Tailwind CSS，请扩展您的配置：

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

## 框架设置

### React 设置

#### 1. 基础设置

```tsx
// src/App.tsx
import React from 'react'
import { Button, Card } from '@ui-lib/ui-react'
import '@ui-lib/ui-react/dist/index.css'

function App() {
  return (
    <div className="p-8">
      <Card>
        <h1 className="text-2xl font-bold mb-4">欢迎使用 UI 组件库</h1>
        <Button variant="primary">开始使用</Button>
      </Card>
    </div>
  )
}

export default App
```

#### 2. 使用主题提供器 (可选)

```tsx
// src/App.tsx
import React from 'react'
import { ThemeProvider, Button } from '@ui-lib/ui-react'

function App() {
  return (
    <ThemeProvider theme="light">
      <Button variant="primary">主题按钮</Button>
    </ThemeProvider>
  )
}
```

#### 3. 使用国际化 (可选)

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
    <I18nProvider locale="zh" messages={messages}>
      <Button variant="primary">你好世界</Button>
    </I18nProvider>
  )
}
```

### Vue 设置

#### 1. 基础设置

```vue
<!-- src/App.vue -->
<template>
  <div class="p-8">
    <Card>
      <h1 class="text-2xl font-bold mb-4">欢迎使用 UI 组件库</h1>
      <Button variant="primary">开始使用</Button>
    </Card>
  </div>
</template>

<script setup>
import { Button, Card } from '@ui-lib/ui-vue'
import '@ui-lib/ui-vue/dist/index.css'
</script>
```

#### 2. 插件注册

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

#### 3. 全局配置

```js
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import UILibrary from '@ui-lib/ui-vue'

const app = createApp(App)

// 全局配置
app.use(UILibrary, {
  theme: 'light',
  locale: 'zh',
  size: 'md'
})

app.mount('#app')
```

## TypeScript 支持

我们的库包含完整的 TypeScript 定义。无需额外设置！

### 类型导入

```ts
// 导入组件类型
import type { ButtonProps, CardProps } from '@ui-lib/ui-react'
// 或
import type { ButtonProps, CardProps } from '@ui-lib/ui-vue'

// 在您的组件中使用
interface MyComponentProps {
  buttonConfig: ButtonProps
  cardConfig: CardProps
}
```

## 打包大小优化

### Tree Shaking

我们的库开箱即用支持 tree shaking：

```js
// 只导入 Button 组件及其依赖
import { Button } from '@ui-lib/ui-react'
```

### 组件级导入

为了更小的打包体积，可以单独导入组件：

```js
// React
import Button from '@ui-lib/ui-react/Button'
import Card from '@ui-lib/ui-react/Card'

// Vue
import Button from '@ui-lib/ui-vue/Button'
import Card from '@ui-lib/ui-vue/Card'
```

## CDN 使用 (浏览器)

用于快速原型制作或静态网站：

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

## 故障排除

### 常见问题

**1. CSS 未加载**
```bash
# 确保导入 CSS 文件
import '@ui-lib/ui-react/dist/index.css'
```

**2. TypeScript 错误**
```bash
# 安装类型定义
npm install --save-dev @types/react @types/react-dom
```

**3. 打包器构建错误**
```js
// 添加到您的打包器配置中
module.exports = {
  resolve: {
    alias: {
      '@ui-lib': path.resolve(__dirname, 'node_modules/@ui-lib')
    }
  }
}
```

## 下一步

- 📖 阅读 [快速开始指南](/zh/guide/quick-start)
- 🎨 了解 [主题定制](/zh/guide/theming)
- 🧩 浏览 [组件文档](/zh/components/)
- 💡 查看 [示例](/zh/examples/) 