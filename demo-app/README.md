# 🚀 UI组件库演示应用

这是一个完整的 React 组件库演示应用，展示了如何构建和使用企业级UI组件库。

## ✨ 特性

- 🎨 **企业级设计** - 基于现代设计原则构建的高质量组件
- 🔧 **TypeScript** - 完整的类型定义和智能提示
- 🌙 **主题系统** - 支持深色/浅色模式切换
- 🌍 **国际化** - 内置中英文双语支持
- 📱 **响应式** - 完美适配各种屏幕尺寸
- ♿ **无障碍** - 遵循WCAG标准
- ⚡ **高性能** - 优化的渲染和按需加载

## 🛠️ 技术栈

- **React 19** - 最新版本的React
- **TypeScript** - 类型安全的JavaScript
- **Tailwind CSS 3.x** - 实用优先的CSS框架
- **Create React App** - 零配置的React开发环境

## 📦 包含的组件

### 基础组件
- **Button** - 多种变体和尺寸的按钮组件
- **Input** - 带验证和图标的输入框组件
- **Card** - 灵活的卡片容器组件
- **Badge** - 状态指示器和标签组件
- **Alert** - 多种类型的警告提示组件

### 系统组件
- **ThemeProvider** - 主题上下文提供器
- **I18nProvider** - 国际化上下文提供器

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

应用将在 http://localhost:3000 启动（如果端口被占用，会自动使用其他端口）

### 构建生产版本

```bash
npm run build
```

## 📖 组件使用示例

### 基础按钮

```tsx
import { Button } from './components'

function App() {
  return (
    <div>
      <Button variant="primary">主要按钮</Button>
      <Button variant="outline">边框按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
    </div>
  )
}
```

### 表单输入

```tsx
import { Input } from './components'

function LoginForm() {
  const [email, setEmail] = useState('')
  
  return (
    <Input
      type="email"
      label="邮箱地址"
      placeholder="请输入邮箱"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      icon={<EmailIcon />}
      required
    />
  )
}
```

### 卡片组件

```tsx
import { Card } from './components'

function ProductCard() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>产品标题</Card.Title>
        <Card.Description>产品描述信息</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>这是产品的详细内容...</p>
      </Card.Content>
      <Card.Footer>
        <Button variant="primary">立即购买</Button>
        <Button variant="outline">了解更多</Button>
      </Card.Footer>
    </Card>
  )
}
```

### 状态徽章

```tsx
import { Badge } from './components'

function StatusList() {
  return (
    <div>
      <Badge variant="success">已完成</Badge>
      <Badge variant="warning">进行中</Badge>
      <Badge variant="error">已失败</Badge>
      <Badge variant="primary" dot /> 在线状态
    </div>
  )
}
```

### 警告提示

```tsx
import { Alert } from './components'

function NotificationPanel() {
  const [showAlert, setShowAlert] = useState(true)
  
  return (
    <Alert
      variant="success"
      title="操作成功"
      closable
      onClose={() => setShowAlert(false)}
    >
      您的更改已成功保存。
    </Alert>
  )
}
```

## 🎨 主题定制

### 使用主题提供器

```tsx
import { ThemeProvider, useTheme } from './components'

function App() {
  return (
    <ThemeProvider initialTheme="light">
      <MyApp />
    </ThemeProvider>
  )
}

function ThemeToggle() {
  const { isDark, setTheme } = useTheme()
  
  return (
    <Button 
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? '☀️' : '🌙'}
    </Button>
  )
}
```

### 自定义主题

```tsx
const customTheme = {
  mode: 'light',
  colors: {
    primary: {
      500: '#6366f1',
      600: '#4f46e5',
      // ... 其他颜色值
    }
  }
}

<ThemeProvider initialTheme={customTheme}>
  <App />
</ThemeProvider>
```

## 🌍 国际化

### 使用国际化提供器

```tsx
import { I18nProvider, useI18n } from './components'

function App() {
  return (
    <I18nProvider initialLocale="zh">
      <MyApp />
    </I18nProvider>
  )
}

function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()
  
  return (
    <Button 
      onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
    >
      {t('common.switchLanguage')}
    </Button>
  )
}
```

### 添加自定义翻译

```tsx
const customMessages = {
  en: {
    welcome: 'Welcome to our app!',
    user: {
      profile: 'User Profile',
      settings: 'Settings'
    }
  },
  zh: {
    welcome: '欢迎使用我们的应用！',
    user: {
      profile: '用户资料',
      settings: '设置'
    }
  }
}

<I18nProvider messages={customMessages}>
  <App />
</I18nProvider>
```

## 🔧 工具函数

组件库还提供了一系列实用的工具函数：

```tsx
import { 
  cn,              // 类名合并
  debounce,        // 防抖函数
  throttle,        // 节流函数
  formatFileSize,  // 文件大小格式化
  isValidEmail,    // 邮箱验证
  sleep,           // 异步等待
} from './components'

// 类名合并
const className = cn(
  'base-class',
  isActive && 'active-class',
  'additional-class'
)

// 防抖搜索
const debouncedSearch = debounce((query: string) => {
  // 执行搜索
}, 300)

// 邮箱验证
const isValid = isValidEmail('user@example.com') // true
```

## 📁 项目结构

```
src/
├── components/          # 组件库
│   ├── Button.tsx      # 按钮组件
│   ├── Input.tsx       # 输入框组件
│   ├── Card.tsx        # 卡片组件
│   ├── Badge.tsx       # 徽章组件
│   ├── Alert.tsx       # 警告组件
│   └── index.ts        # 统一导出
├── contexts/           # React上下文
│   ├── ThemeContext.tsx # 主题上下文
│   └── I18nContext.tsx  # 国际化上下文
├── types/              # TypeScript类型定义
│   └── index.ts
├── utils/              # 工具函数
│   └── index.ts
├── App.tsx            # 演示应用
└── index.css          # 全局样式
```

## 🎯 最佳实践

### 1. 组件设计原则

- **一致性** - 保持组件API的一致性
- **可复用性** - 组件应该在不同场景下都能使用
- **可访问性** - 遵循无障碍访问标准
- **性能优化** - 使用React.memo和useCallback优化性能

### 2. TypeScript使用

- 为所有组件提供完整的类型定义
- 使用泛型提高组件的灵活性
- 导出常用的类型定义供外部使用

### 3. 样式管理

- 使用Tailwind CSS实用类构建样式
- 通过CSS变量支持主题定制
- 保持样式的模块化和可维护性

## 📝 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详细信息。

## 🤝 贡献

欢迎提交issue和pull request来帮助改进这个组件库！

---

**构建时间：** 2024年1月

**技术支持：** 如有问题，请提交issue或联系开发团队。
