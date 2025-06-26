# 多框架 UI 组件库

一个使用 Turborepo 构建的现代化多框架 UI 组件库，**同时支持 React 和 Vue**，包含可复用的组件和配置。

## 🏗️ 项目架构

```
ui-components-library/
├── apps/
│   ├── docs-react/           # React 组件文档应用 (Next.js)
│   └── docs-vue/             # Vue 组件文档应用 (Vite + Vue 3)
├── packages/
│   ├── ui-shared/            # 共享设计系统、样式和类型
│   ├── ui-react/             # React 组件库
│   ├── ui-vue/               # Vue 组件库  
│   ├── tsconfig/             # 共享 TypeScript 配置
│   └── eslint-config/        # 共享 ESLint 配置
├── package.json              # 根 package.json
├── turbo.json               # Turborepo 配置
└── README.md
```

## ✨ 功能特性

- 🏗️ **Turborepo**: 高性能的 monorepo 构建系统
- ⚛️ **React 支持**: 完整的 React + TypeScript 组件库
- 🟢 **Vue 支持**: 完整的 Vue 3 + Composition API 组件库
- 🎨 **统一设计系统**: 共享的设计令牌和样式规范
- 📦 **可复用组件**: Button, Card, Input 等基础组件
- 🔧 **开发工具**: ESLint, Prettier, TypeScript 配置
- 📖 **双端文档**: React 和 Vue 分别的组件示例和使用指南

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

启动所有开发环境：

```bash
npm run dev
```

这将启动：
- 共享包的构建监听 (`packages/ui-shared`)
- React 组件库的构建监听 (`packages/ui-react`)
- Vue 组件库的构建监听 (`packages/ui-vue`)
- React 文档应用的开发服务器 (`apps/docs-react`) - http://localhost:3000
- Vue 文档应用的开发服务器 (`apps/docs-vue`) - http://localhost:3001

### 构建

构建所有包：

```bash
npm run build
```

### 代码检查和格式化

```bash
npm run lint        # ESLint 检查
npm run type-check  # TypeScript 类型检查
npm run format      # 代码格式化
```

## 📦 可用组件

### React 使用方式

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Input } from '@ui-lib/ui-react';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>React 卡片</CardTitle>
      </CardHeader>
      <CardContent>
        <Input label="用户名" placeholder="请输入用户名" />
        <Button variant="primary">提交</Button>
      </CardContent>
    </Card>
  );
}
```

### Vue 使用方式

```vue
<template>
  <Card>
    <CardHeader>
      <CardTitle>Vue 卡片</CardTitle>
    </CardHeader>
    <CardContent>
      <Input v-model="username" label="用户名" placeholder="请输入用户名" />
      <Button variant="primary" @click="submit">提交</Button>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Card, CardHeader, CardTitle, CardContent, Input } from '@ui-lib/ui-vue'

const username = ref('')

function submit() {
  console.log('提交:', username.value)
}
</script>
```

## 🎯 组件 API

### Button 组件

**属性:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'

**React:**
```tsx
<Button variant="primary" size="md" onClick={() => {}}>
  点击我
</Button>
```

**Vue:**
```vue
<Button variant="primary" size="md" @click="handleClick">
  点击我
</Button>
```

### Input 组件

**属性:**
- `label`: 输入框标签
- `error`: 错误信息
- `type`: 输入类型 (text, email, password 等)
- `placeholder`: 占位符

**React:**
```tsx
<Input
  label="邮箱"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
/>
```

**Vue:**
```vue
<Input
  v-model="email"
  label="邮箱"
  type="email"
  :error="emailError"
/>
```

## 🔧 架构优势

### 共享设计系统

- **统一的设计令牌**: 颜色、间距、字体等在 `packages/ui-shared` 中定义
- **一致的样式**: React 和 Vue 组件使用相同的 Tailwind CSS 类
- **类型安全**: 共享的 TypeScript 类型定义

### 独立的框架实现

- **React 组件**: 使用 React 最佳实践 (forwardRef, 事件处理等)
- **Vue 组件**: 使用 Vue 3 Composition API 和最佳实践
- **框架特色**: 每个框架都能发挥其独特优势

### 高效的开发体验

- **Turborepo 增量构建**: 只构建变更的包
- **热重载**: 两个文档应用都支持热重载
- **类型检查**: 完整的 TypeScript 支持

## 🚢 在其他项目中使用

### React 项目

```bash
npm install @ui-lib/ui-react
```

### Vue 项目

```bash
npm install @ui-lib/ui-vue
```

### 通用样式 (可选)

```bash
npm install @ui-lib/ui-shared
```

## 🛠️ 开发指南

### 添加新组件

1. 在 `packages/ui-shared/src/` 中定义共享类型和样式
2. 在 `packages/ui-react/src/components/` 中创建 React 版本
3. 在 `packages/ui-vue/src/components/` 中创建 Vue 版本
4. 在两个文档应用中添加使用示例

### 工作流

1. 修改共享设计系统 → 两个框架同步更新
2. 独立开发框架特定功能
3. Turborepo 智能增量构建
4. 双端文档实时预览

## 📊 技术栈

**构建工具:**
- [Turborepo](https://turbo.build/) - Monorepo 构建系统
- [tsup](https://tsup.egoist.dev/) - 组件库构建
- [Vite](https://vitejs.dev/) - Vue 应用构建
- [Next.js](https://nextjs.org/) - React 应用框架

**框架和库:**
- [React](https://reactjs.org/) + TypeScript
- [Vue 3](https://vuejs.org/) + Composition API + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) - 统一样式系统

**工具链:**
- [ESLint](https://eslint.org/) - 代码检查
- [Prettier](https://prettier.io/) - 代码格式化
- [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) - 包管理

## 🎉 项目亮点

1. **真正的多框架支持**: 不是简单的适配，而是为每个框架优化
2. **统一的设计语言**: 共享设计系统确保一致性
3. **独立的最佳实践**: 每个框架都遵循其最佳实践
4. **开发体验优先**: 热重载、类型检查、增量构建
5. **生产就绪**: 完整的构建、测试、发布流程

这个架构使得团队可以：
- 在 React 和 Vue 项目中使用相同的设计系统
- 独立开发和维护各框架版本
- 享受现代化的开发工具链
- 保持代码的高质量和一致性

## 📈 扩展计划

- [ ] 添加更多组件 (Table, Modal, Form 等)
- [ ] 主题系统和定制化
- [ ] 单元测试覆盖
- [ ] Storybook 集成
- [ ] CI/CD 自动化
- [ ] Angular 支持

## 📄 许可证

MIT 