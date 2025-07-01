---
layout: home

hero:
  name: "UI 组件库"
  text: "企业级现代Web应用组件"
  tagline: "基于 Vue 3、React 和 TypeScript 构建，支持主题定制、国际化和无障碍访问。"
  image:
    src: /logo.svg
    alt: UI 组件库
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/installation
    - theme: alt
      text: 查看组件
      link: /zh/components/
    - theme: alt
      text: English Docs
      link: /

features:
  - icon: 🎨
    title: 主题定制
    details: 灵活的主题系统，支持深色模式。可自定义颜色、间距和字体以匹配您的品牌。
  
  - icon: 🌍
    title: 国际化
    details: 内建国际化支持，适用于全球化应用。轻松管理翻译和语言切换。
  
  - icon: ⚡
    title: 高性能
    details: 经过优化的组件，完整的 TypeScript 支持。支持 Tree-shaking 以减小包体积。
  
  - icon: 📱
    title: 响应式设计
    details: 移动端优先的响应式组件，在所有屏幕尺寸和设备上完美运行。
  
  - icon: ♿
    title: 无障碍访问
    details: 符合 WAI-ARIA 标准的组件，确保您的应用程序对所有用户都可访问。
  
  - icon: 🔧
    title: 开发体验
    details: 出色的 TypeScript 支持、全面的文档和直观的 API 设计。
---

## 快速开始

几分钟内即可开始使用我们的组件库：

::: code-group

```bash [npm]
npm install @ui-lib/ui-react
# 或者
npm install @ui-lib/ui-vue
```

```bash [yarn]
yarn add @ui-lib/ui-react
# 或者
yarn add @ui-lib/ui-vue
```

```bash [pnpm]
pnpm add @ui-lib/ui-react
# 或者
pnpm add @ui-lib/ui-vue
```

:::

## 使用示例

::: code-group

```tsx [React]
import { Button, Card } from '@ui-lib/ui-react'

function App() {
  return (
    <Card>
      <Button variant="primary">你好世界</Button>
    </Card>
  )
}
```

```vue [Vue]
<template>
  <Card>
    <Button variant="primary">你好世界</Button>
  </Card>
</template>

<script setup>
import { Button, Card } from '@ui-lib/ui-vue'
</script>
```

:::

## 为什么选择我们的组件库？

- **60+ 组件** - 涵盖所有常见使用场景的综合组件集合
- **100% TypeScript** - 完整的类型安全和出色的智能提示支持
- **99% 测试覆盖率** - 经过彻底测试的可靠组件
- **活跃社区** - 定期更新和响应式社区支持

## 框架支持

| 框架 | 包名 | 状态 |
|------|------|------|
| React | `@ui-lib/ui-react` | ✅ 稳定版 |
| Vue 3 | `@ui-lib/ui-vue` | ✅ 稳定版 |
| Storybook | `@ui-lib/docs-storybook` | 🧪 测试版 |

## 社区

加入我们不断增长的开发者社区：

- [GitHub 讨论](https://github.com/your-username/turborepo-ui/discussions) - 提问和分享想法
- [Discord](https://discord.gg/your-invite) - 与其他开发者聊天
- [Twitter](https://twitter.com/your-handle) - 关注更新和新闻

## 设计原则

我们的组件库遵循以下设计原则：

### 🎯 简洁明了
界面设计简洁明了，避免不必要的视觉噪音，让用户专注于核心功能。

### 🔄 一致性
保持设计和交互的一致性，降低用户的学习成本，提升使用效率。

### ❤️ 人性化
以用户为中心，考虑用户的使用习惯和心理模型，提供自然友好的交互体验。

### 📈 高效性
组件设计注重性能优化和开发效率，帮助开发者快速构建高质量的产品。 