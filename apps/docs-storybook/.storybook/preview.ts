import type { Preview } from '@storybook/react'
import React from 'react'

// 国际化配置
const locales = {
  en: { title: 'English', right: '🇺🇸' },
  zh: { title: '中文', right: '🇨🇳' },
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    docs: {
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2, h3',
        title: 'Table of Contents',
      },
      page: () => {
        return `
          <div style="padding: 20px;">
            <h1>UI Component Library Documentation</h1>
            <p>Welcome to our comprehensive component library documentation. This library provides:</p>
            <ul>
              <li>🎨 <strong>Theme Customization</strong> - Flexible theming system with dark mode support</li>
              <li>🌍 <strong>Internationalization</strong> - Built-in i18n support for global applications</li>
              <li>⚡ <strong>High Performance</strong> - Optimized components with TypeScript support</li>
              <li>📱 <strong>Responsive Design</strong> - Mobile-first responsive components</li>
              <li>♿ <strong>Accessibility</strong> - WAI-ARIA compliant components</li>
            </ul>
            <h2>Getting Started</h2>
            <p>Install the library in your project:</p>
            <pre><code>npm install @ui-lib/ui-react</code></pre>
            <p>Import and use components:</p>
            <pre><code>import { Button } from '@ui-lib/ui-react'
            
function App() {
  return <Button variant="primary">Hello World</Button>
}</code></pre>
          </div>
        `
      },
    },
    // 主题配置
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
    // 视窗配置
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1024px', height: '768px' },
        },
      },
    },
  },
  // 全局装饰器
  decorators: [
    (Story, context) => {
      const locale = context.globals.locale || 'en'
      
      return React.createElement(
        'div',
        {
          style: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            padding: '1rem',
            minHeight: '100vh',
            backgroundColor: context.parameters.backgrounds?.default === 'dark' ? '#1a1a1a' : '#ffffff'
          }
        },
        React.createElement(
          'div',
          {
            style: { marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }
          },
          `Language: ${locales[locale as keyof typeof locales]?.title || 'English'} ${locales[locale as keyof typeof locales]?.right || '🇺🇸'}`
        ),
        React.createElement(Story, null)
      )
    },
  ],
  // 全局变量
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English 🇺🇸' },
          { value: 'zh', title: '中文 🇨🇳' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
}

export default preview 