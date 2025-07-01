# 📚 文档系统使用指南

本项目现在包含 **4 个不同的文档系统**，每个都有各自的特点和用途：

## 🎯 文档系统对比

| 文档系统 | 框架 | 特点 | 适用场景 | 端口 |
|---------|------|------|----------|------|
| **React 自建** | Next.js | 完全自定义、中文文档 | 产品展示、用户指南 | 3000 |
| **Vue 自建** | Vite + Vue 3 | 完全自定义、中文文档 | 产品展示、用户指南 | 3001 |
| **VitePress** | Markdown + Vue | 文档优先、SEO 友好 | 技术文档、API 文档 | 5173 |
| **Storybook** | 组件驱动 | 交互式开发、测试 | 组件开发、设计系统 | 6006 |

## 🚀 快速开始

### 方法 1: 一键安装脚本
```bash
./setup-docs.sh
```

### 方法 2: 手动安装
```bash
# 安装根依赖
npm install

# 安装 VitePress 依赖
cd apps/docs-vitepress && npm install && cd ../..

# 安装 Storybook 依赖
cd apps/docs-storybook && npm install && cd ../..
```

## 🎨 启动文档系统

```bash
# 启动 React 自建文档 (端口 3000)
npm run dev:react

# 启动 Vue 自建文档 (端口 3001)
npm run dev:vue

# 启动 VitePress 文档 (端口 5173)
npm run dev:vitepress

# 启动 Storybook 文档 (端口 6006)
npm run dev:storybook
```

## 📖 各系统详细介绍

### 1. React 自建文档系统 (`apps/docs-react/`)
- **技术栈**: Next.js + TailwindCSS
- **特点**: 
  - 完全自定义的 UI 设计
  - 中文界面和示例
  - 实时交互演示
  - 完整的组件 API 文档
- **适用于**: 面向最终用户的产品文档

### 2. Vue 自建文档系统 (`apps/docs-vue/`)
- **技术栈**: Vite + Vue 3 + TailwindCSS
- **特点**:
  - 完全自定义的 UI 设计
  - 中文界面和示例
  - 实时交互演示
  - 完整的组件 API 文档
- **适用于**: 面向最终用户的产品文档

### 3. VitePress 文档系统 (`apps/docs-vitepress/`)
- **技术栈**: VitePress (Vite + Vue + Markdown)
- **特点**:
  - Markdown 驱动的文档
  - 出色的 SEO 支持
  - 快速的构建和热重载
  - 内置搜索功能
  - 可嵌入 Vue 组件
- **适用于**: 技术文档、API 参考、用户手册

### 4. Storybook 文档系统 (`apps/docs-storybook/`)
- **技术栈**: Storybook + React
- **特点**:
  - 组件驱动开发 (CDD)
  - 交互式组件测试
  - 自动生成的 Props 文档
  - 视觉回归测试
  - 组件隔离开发
- **适用于**: 设计系统、组件库开发、UI 测试

## 🔧 配置和自定义

### VitePress 配置
- 配置文件: `apps/docs-vitepress/docs/.vitepress/config.ts`
- 主题配置: 导航、侧边栏、页脚等
- 支持自定义 CSS 和组件

### Storybook 配置
- 配置文件: `apps/docs-storybook/.storybook/main.ts`
- 预览配置: `apps/docs-storybook/.storybook/preview.ts`
- 支持插件和自定义装饰器

## 📝 内容管理

### Markdown 文档 (VitePress)
- 页面位置: `apps/docs-vitepress/docs/`
- 支持 Vue 组件嵌入
- 自动生成导航

### Stories (Storybook)
- Stories 位置: `apps/docs-storybook/src/stories/`
- 支持 CSF (Component Story Format)
- 自动生成控件和文档

## 🎯 推荐使用场景

| 需求 | 推荐系统 | 原因 |
|------|----------|------|
| 给客户展示产品 | React/Vue 自建 | 完全自定义设计，中文支持 |
| 编写技术文档 | VitePress | Markdown 友好，SEO 优化 |
| 组件开发调试 | Storybook | 组件隔离，交互测试 |
| API 参考文档 | VitePress | 结构化文档，搜索功能 |
| 设计系统展示 | Storybook | 视觉展示，交互控制 |

## 🔄 同步更新

当你更新组件库时，记得同步更新所有文档系统：

1. 更新组件实现后，运行 `npm run build` 构建组件库
2. 在各个文档系统中添加或更新相应的文档/Stories
3. 测试所有文档系统确保正常工作

## 🚀 部署建议

- **React/Vue 自建**: 部署到 Vercel 或 Netlify
- **VitePress**: 部署到 GitHub Pages 或 Vercel
- **Storybook**: 部署到 Chromatic 或静态托管服务

每个系统都可以独立部署，满足不同的使用需求。 