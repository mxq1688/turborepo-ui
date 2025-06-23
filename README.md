# UI 组件库

一个使用 Turborepo 构建的现代 React UI 组件库，包含可复用的组件和配置。

## 项目结构

```
ui-components-library/
├── apps/
│   └── docs/                 # 组件文档和示例应用
├── packages/
│   ├── ui/                   # UI 组件库
│   ├── tsconfig/             # 共享 TypeScript 配置
│   └── eslint-config/        # 共享 ESLint 配置
├── package.json              # 根 package.json
├── turbo.json               # Turborepo 配置
└── README.md
```

## 功能特性

- 🏗️ **Turborepo**: 高性能的 monorepo 构建系统
- ⚡ **TypeScript**: 完整的类型支持
- 🎨 **Tailwind CSS**: 现代的样式系统
- 📦 **组件库**: 可复用的 React 组件
- 🔧 **开发工具**: ESLint, Prettier, TypeScript 配置
- 📖 **文档**: 组件示例和使用指南

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

启动开发环境：

```bash
npm run dev
```

这将启动：
- 组件库的构建监听 (`packages/ui`)
- 文档应用的开发服务器 (`apps/docs`)

访问 http://localhost:3000 查看组件文档和示例。

### 构建

构建所有包：

```bash
npm run build
```

### 代码检查

运行 ESLint：

```bash
npm run lint
```

运行 TypeScript 类型检查：

```bash
npm run type-check
```

格式化代码：

```bash
npm run format
```

## 可用组件

### Button (按钮)

```tsx
import { Button } from '@ui-lib/ui';

<Button variant="primary" size="md">
  点击我
</Button>
```

**属性:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'

### Card (卡片)

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@ui-lib/ui';

<Card>
  <CardHeader>
    <CardTitle>标题</CardTitle>
  </CardHeader>
  <CardContent>
    内容区域
  </CardContent>
</Card>
```

### Input (输入框)

```tsx
import { Input } from '@ui-lib/ui';

<Input
  label="用户名"
  placeholder="请输入用户名"
  error="错误信息"
/>
```

**属性:**
- `label`: 输入框标签
- `error`: 错误信息
- 继承所有原生 input 属性

## 在其他项目中使用

1. 构建组件库：
```bash
cd packages/ui
npm run build
```

2. 在其他项目中安装：
```bash
npm install file:path/to/packages/ui
```

3. 在项目中使用：
```tsx
import { Button, Card, Input } from '@ui-lib/ui';

function App() {
  return (
    <div>
      <Card>
        <CardContent>
          <Input label="邮箱" type="email" />
          <Button variant="primary">提交</Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 开发指南

### 添加新组件

1. 在 `packages/ui/src/components/` 中创建新组件文件
2. 在 `packages/ui/src/index.ts` 中导出组件
3. 在 `apps/docs/src/pages/index.tsx` 中添加使用示例

### 配置说明

- **TypeScript**: 配置在 `packages/tsconfig/` 中
- **ESLint**: 配置在 `packages/eslint-config/` 中  
- **构建**: 使用 `tsup` 进行组件库构建
- **样式**: 使用 Tailwind CSS

### 工作流

1. 在 `packages/ui` 中开发组件
2. 在 `apps/docs` 中测试和展示组件
3. 使用 Turborepo 进行高效的增量构建

## 脚本说明

- `npm run dev`: 启动开发环境
- `npm run build`: 构建所有包
- `npm run lint`: 代码检查
- `npm run type-check`: TypeScript 类型检查
- `npm run format`: 代码格式化
- `npm run clean`: 清理构建文件

## 技术栈

- [Turborepo](https://turbo.build/) - Monorepo 构建系统
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [React](https://reactjs.org/) - UI 库
- [Next.js](https://nextjs.org/) - 文档应用框架
- [Tailwind CSS](https://tailwindcss.com/) - 样式框架
- [tsup](https://tsup.egoist.dev/) - 构建工具
- [ESLint](https://eslint.org/) - 代码检查
- [Prettier](https://prettier.io/) - 代码格式化

## 许可证

MIT 