import React, { useState } from 'react';
import Link from 'next/link';

const GuideSection = ({ title, children, id }: { title: string; children: React.ReactNode; id: string }) => (
  <section id={id} className="mb-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
      {title}
    </h2>
    {children}
  </section>
);

const CodeBlock = ({ children, language = 'typescript' }: { children: string; language?: string }) => (
  <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs text-gray-400 uppercase">{language}</span>
      <button 
        className="text-xs text-gray-400 hover:text-white transition-colors"
        onClick={() => navigator.clipboard.writeText(children)}
      >
        复制
      </button>
    </div>
    <pre className="text-green-400 text-sm">
      <code>{children}</code>
    </pre>
  </div>
);

export default function Guide() {
  const [activeSection, setActiveSection] = useState('installation');

  const sections = [
    { id: 'installation', title: '安装' },
    { id: 'quick-start', title: '快速开始' },
    { id: 'basic-usage', title: '基础用法' },
    { id: 'typescript', title: 'TypeScript' },
    { id: 'theme', title: '主题定制' },
    { id: 'i18n', title: '国际化' },
    { id: 'best-practices', title: '最佳实践' },
    { id: 'troubleshooting', title: '故障排除' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">React</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Components</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  首页
                </Link>
                <Link href="/components" className="text-gray-600 hover:text-gray-900 transition-colors">
                  组件
                </Link>
                <Link href="/guide" className="text-gray-900 font-medium">
                  指南
                </Link>
                <Link href="/resources" className="text-gray-600 hover:text-gray-900 transition-colors">
                  资源
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="搜索..." 
                  className="bg-transparent border-none outline-none text-sm"
                />
              </div>
              <a 
                href="https://github.com" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* 侧边栏导航 */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-sm font-medium text-gray-900 mb-4">指南目录</h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* 主要内容 */}
          <div className="lg:col-span-3">
            <div className="max-w-3xl">
              {/* 页面标题 */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">开发指南</h1>
                <p className="text-lg text-gray-600">
                  本指南将帮助您快速上手 React 组件库，从安装到深度定制，涵盖了您需要了解的所有内容。
                </p>
              </div>

              {/* 安装 */}
              <GuideSection title="安装" id="installation">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">环境要求</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>React 16.8+ (推荐 18.0+)</li>
                      <li>TypeScript 4.0+ (可选但推荐)</li>
                      <li>Node.js 14.0+</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">使用 npm 安装</h3>
                    <CodeBlock language="bash">
{`npm install @ui-lib/ui-react`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">使用 yarn 安装</h3>
                    <CodeBlock language="bash">
{`yarn add @ui-lib/ui-react`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">使用 pnpm 安装</h3>
                    <CodeBlock language="bash">
{`pnpm add @ui-lib/ui-react`}
                    </CodeBlock>
                  </div>
                </div>
              </GuideSection>

              {/* 快速开始 */}
              <GuideSection title="快速开始" id="quick-start">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">1. 引入样式</h3>
                    <p className="text-gray-600 mb-4">在应用的入口文件中引入样式文件：</p>
                    <CodeBlock>
{`// 在 src/index.tsx 或 src/main.tsx 中
import '@ui-lib/ui-react/dist/index.css';`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">2. 使用组件</h3>
                    <p className="text-gray-600 mb-4">导入并使用组件：</p>
                    <CodeBlock>
{`import React from 'react';
import { Button, Card } from '@ui-lib/ui-react';

function App() {
  return (
    <div className="p-4">
      <Card>
        <Card.Header>
          <Card.Title>欢迎使用 UI 组件库</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>这是一个示例应用。</p>
        </Card.Content>
        <Card.Footer>
          <Button variant="primary">开始使用</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default App;`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">3. 配置主题提供器</h3>
                    <p className="text-gray-600 mb-4">为了使用主题功能，请在应用根组件中配置主题提供器：</p>
                    <CodeBlock>
{`import React from 'react';
import { ThemeProvider } from '@ui-lib/ui-react';
import App from './App';

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}`}
                    </CodeBlock>
                  </div>
                </div>
              </GuideSection>

              {/* 基础用法 */}
              <GuideSection title="基础用法" id="basic-usage">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">按钮组件</h3>
                    <p className="text-gray-600 mb-4">按钮是最常用的交互组件之一：</p>
                    <CodeBlock>
{`import { Button } from '@ui-lib/ui-react';

// 基础按钮
<Button>默认按钮</Button>

// 不同变体
<Button variant="primary">主要按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="outline">边框按钮</Button>
<Button variant="ghost">幽灵按钮</Button>

// 不同尺寸
<Button size="sm">小按钮</Button>
<Button size="md">中等按钮</Button>
<Button size="lg">大按钮</Button>

// 加载状态
<Button loading>加载中...</Button>

// 禁用状态
<Button disabled>禁用按钮</Button>`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">输入框组件</h3>
                    <p className="text-gray-600 mb-4">表单输入是用户交互的重要部分：</p>
                    <CodeBlock>
{`import { Input } from '@ui-lib/ui-react';

// 基础输入框
<Input placeholder="请输入内容" />

// 带标签的输入框
<Input label="用户名" placeholder="请输入用户名" />

// 带验证的输入框
<Input 
  label="邮箱" 
  type="email"
  error="请输入有效的邮箱地址"
  required
/>

// 带图标的输入框
<Input 
  label="搜索"
  placeholder="搜索内容..."
  icon={<SearchIcon />}
/>

// 不同尺寸
<Input size="sm" placeholder="小尺寸" />
<Input size="md" placeholder="中等尺寸" />
<Input size="lg" placeholder="大尺寸" />`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">卡片组件</h3>
                    <p className="text-gray-600 mb-4">卡片是展示信息的容器组件：</p>
                    <CodeBlock>
{`import { Card, Button } from '@ui-lib/ui-react';

<Card>
  <Card.Header>
    <Card.Title>卡片标题</Card.Title>
    <Card.Description>这是卡片的描述信息</Card.Description>
  </Card.Header>
  
  <Card.Content>
    <p>这里是卡片的主要内容区域。</p>
  </Card.Content>
  
  <Card.Footer>
    <Button variant="outline">取消</Button>
    <Button variant="primary">确认</Button>
  </Card.Footer>
</Card>`}
                    </CodeBlock>
                  </div>
                </div>
              </GuideSection>

              {/* TypeScript */}
              <GuideSection title="TypeScript 支持" id="typescript">
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 mb-4">
                      我们的组件库提供完整的 TypeScript 类型定义，确保您在开发过程中获得最佳的类型安全和 IDE 支持。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">类型导入</h3>
                    <CodeBlock>
{`import { Button, ButtonProps, Card, CardProps } from '@ui-lib/ui-react';

// 使用组件的 Props 类型
interface MyButtonProps extends ButtonProps {
  customProp?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ customProp, ...props }) => {
  return <Button {...props} />;
};`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">常用类型</h3>
                    <CodeBlock>
{`import { 
  Variant,     // 'primary' | 'secondary' | 'outline' | 'ghost'
  Size,        // 'sm' | 'md' | 'lg'
  Color,       // 'primary' | 'success' | 'warning' | 'error'
  Theme,       // 主题配置类型
  Locale       // 'en' | 'zh'
} from '@ui-lib/ui-react';

// 在您的组件中使用这些类型
interface MyComponentProps {
  variant: Variant;
  size: Size;
  color: Color;
}`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">事件处理</h3>
                    <CodeBlock>
{`import { Button, Input } from '@ui-lib/ui-react';

function MyForm() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked:', event);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input value:', event.target.value);
  };

  return (
    <div>
      <Input onChange={handleInputChange} />
      <Button onClick={handleClick}>提交</Button>
    </div>
  );
}`}
                    </CodeBlock>
                  </div>
                </div>
              </GuideSection>

              {/* 主题定制 */}
              <GuideSection title="主题定制" id="theme">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">使用主题提供器</h3>
                    <p className="text-gray-600 mb-4">
                      主题提供器允许您定制组件的外观和行为：
                    </p>
                    <CodeBlock>
{`import { ThemeProvider, useTheme } from '@ui-lib/ui-react';

function App() {
  return (
    <ThemeProvider initialTheme="light">
      <MyApp />
    </ThemeProvider>
  );
}

function ThemeToggle() {
  const { isDark, setTheme } = useTheme();
  
  return (
    <Button 
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? '🌞' : '🌙'}
    </Button>
  );
}`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">自定义主题</h3>
                    <CodeBlock>
{`const customTheme = {
  mode: 'light',
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      // ... 其他颜色值
    },
    // 定义其他颜色...
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  // 其他主题配置...
};

<ThemeProvider initialTheme={customTheme}>
  <App />
</ThemeProvider>`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">CSS 变量</h3>
                    <p className="text-gray-600 mb-4">
                      您也可以通过 CSS 变量来快速定制主题：
                    </p>
                    <CodeBlock language="css">
{`:root {
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-success-500: #22c55e;
  --color-error-500: #ef4444;
  --color-warning-500: #f59e0b;
  
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  
  --border-radius-md: 0.375rem;
  --border-radius-lg: 0.5rem;
}`}
                    </CodeBlock>
                  </div>
                </div>
              </GuideSection>

              {/* 国际化 */}
              <GuideSection title="国际化" id="i18n">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">使用国际化提供器</h3>
                    <CodeBlock>
{`import { I18nProvider, useI18n } from '@ui-lib/ui-react';

function App() {
  return (
    <I18nProvider initialLocale="zh">
      <MyApp />
    </I18nProvider>
  );
}

function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();
  
  return (
    <Button 
      onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
    >
      {t('common.switchLanguage')}
    </Button>
  );
}`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">自定义翻译</h3>
                    <CodeBlock>
{`const customMessages = {
  en: {
    welcome: 'Welcome to our app!',
    buttons: {
      save: 'Save',
      cancel: 'Cancel',
      submit: 'Submit'
    },
    validation: {
      required: 'This field is required',
      email: 'Invalid email format'
    }
  },
  zh: {
    welcome: '欢迎使用我们的应用！',
    buttons: {
      save: '保存',
      cancel: '取消',
      submit: '提交'
    },
    validation: {
      required: '此字段为必填项',
      email: '邮箱格式无效'
    }
  }
};

<I18nProvider messages={customMessages}>
  <App />
</I18nProvider>`}
                    </CodeBlock>
                  </div>
                </div>
              </GuideSection>

              {/* 最佳实践 */}
              <GuideSection title="最佳实践" id="best-practices">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">组件组合</h3>
                    <p className="text-gray-600 mb-4">
                      充分利用组件的组合特性来构建复杂的 UI：
                    </p>
                    <CodeBlock>
{`// ✅ 推荐：使用组合模式
<Card>
  <Card.Header>
    <div className="flex items-center justify-between">
      <Card.Title>用户信息</Card.Title>
      <Button variant="ghost" size="sm">
        <EditIcon />
      </Button>
    </div>
  </Card.Header>
  
  <Card.Content>
    <div className="space-y-4">
      <Input label="姓名" value={user.name} />
      <Input label="邮箱" value={user.email} />
    </div>
  </Card.Content>
</Card>`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">性能优化</h3>
                    <CodeBlock>
{`import React, { memo, useCallback } from 'react';
import { Button } from '@ui-lib/ui-react';

// ✅ 使用 memo 优化组件渲染
const OptimizedButton = memo(({ onClick, children }) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
});

// ✅ 使用 useCallback 优化事件处理
function MyComponent() {
  const handleClick = useCallback(() => {
    // 处理点击事件
  }, []);

  return <OptimizedButton onClick={handleClick}>点击</OptimizedButton>;
}`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">无障碍访问</h3>
                    <CodeBlock>
{`// ✅ 为组件提供适当的 ARIA 标签
<Button 
  aria-label="删除用户"
  onClick={handleDelete}
>
  <DeleteIcon />
</Button>

// ✅ 使用语义化的 HTML 结构
<form onSubmit={handleSubmit}>
  <Input 
    label="邮箱"
    type="email"
    required
    aria-describedby="email-error"
  />
  <div id="email-error" className="text-red-500">
    {emailError}
  </div>
  
  <Button type="submit">提交</Button>
</form>`}
                    </CodeBlock>
                  </div>
                </div>
              </GuideSection>

              {/* 故障排除 */}
              <GuideSection title="故障排除" id="troubleshooting">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">常见问题</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="font-medium text-yellow-800 mb-2">样式没有正确加载</h4>
                        <p className="text-yellow-700 text-sm mb-2">
                          确保在应用入口文件中正确引入了 CSS 样式：
                        </p>
                        <CodeBlock>
{`import '@ui-lib/ui-react/dist/index.css';`}
                        </CodeBlock>
                      </div>

                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="font-medium text-red-800 mb-2">TypeScript 类型错误</h4>
                        <p className="text-red-700 text-sm mb-2">
                          确保安装了正确版本的 TypeScript 和 @types/react：
                        </p>
                        <CodeBlock language="bash">
{`npm install --save-dev typescript@latest @types/react@latest`}
                        </CodeBlock>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-2">主题不生效</h4>
                        <p className="text-blue-700 text-sm mb-2">
                          确保在应用根组件中正确配置了 ThemeProvider：
                        </p>
                        <CodeBlock>
{`import { ThemeProvider } from '@ui-lib/ui-react';

function App() {
  return (
    <ThemeProvider>
      {/* 您的应用组件 */}
    </ThemeProvider>
  );
}`}
                        </CodeBlock>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">获取帮助</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">如果您遇到其他问题，可以通过以下方式获取帮助：</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>查看 <Link href="/components" className="text-blue-600 hover:underline">组件文档</Link></li>
                        <li>提交 <a href="https://github.com" className="text-blue-600 hover:underline">GitHub Issue</a></li>
                        <li>加入我们的社区讨论</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GuideSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 