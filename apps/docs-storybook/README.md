# UI Components Storybook Documentation / UI 组件 Storybook 文档

This is the Storybook documentation app for our UI components library. It provides an interactive environment to showcase, test, and document our React components.

这是我们 UI 组件库的 Storybook 文档应用程序。它提供了一个交互式环境来展示、测试和记录我们的 React 组件。

## Getting Started / 开始使用

### Prerequisites / 前提条件

- Node.js >= 18
- npm >= 9.0.0

### Installation / 安装

From the root of the monorepo / 从 monorepo 根目录：

```bash
npm install
```

### Development / 开发

To start the Storybook development server / 启动 Storybook 开发服务器：

```bash
npm run dev:storybook
```

This will start Storybook on port 6006. Visit `http://localhost:6006` to view the documentation.

这将在 6006 端口启动 Storybook。访问 `http://localhost:6006` 查看文档。

### Building / 构建

To build the static Storybook site / 构建静态 Storybook 站点：

```bash
npm run build
```

The built files will be in the `storybook-static` directory.

构建的文件将在 `storybook-static` 目录中。

## Internationalization Support / 国际化支持

This Storybook documentation supports both Chinese and English languages. You can switch between languages using the language selector in the toolbar.

此 Storybook 文档支持中文和英文。您可以使用工具栏中的语言选择器在语言之间切换。

### Features / 功能特性

- **Dual Language Support / 双语支持**: Components and documentation are available in both Chinese (zh-CN) and English (en-US)
- **Language Switcher / 语言切换器**: Use the globe icon in the toolbar to switch between languages
- **Localized Component Examples / 本地化组件示例**: All component examples demonstrate internationalization features
- **Context-aware Translation / 上下文感知翻译**: Components automatically display text in the selected language

## Adding Stories / 添加 Stories

Stories are added in the `stories` directory. Each component should have its own story file with the following naming convention:

Stories 添加在 `stories` 目录中。每个组件应该有自己的 story 文件，命名约定如下：

```
ComponentName.stories.tsx
```

### Story Structure / Story 结构

Each story should include bilingual titles and descriptions:

每个 story 应该包含双语标题和描述：

```typescript
export const 示例Story: Story = {
  name: '中文名称 / English Name',
  args: {
    // component props
  },
  parameters: {
    docs: {
      description: {
        story: '中文描述。\n\nEnglish description.',
      },
    },
  },
};
```

## Features / 功能

- Interactive component playground / 交互式组件游乐场
- Auto-generated documentation / 自动生成的文档
- Component testing environment / 组件测试环境
- Responsive viewport testing / 响应式视口测试
- Theme switching support / 主题切换支持
- **Chinese language support / 中文语言支持**
- **Internationalization examples / 国际化示例** 