import type { Preview } from '@storybook/react'
import { getCurrentLanguage } from '../src/utils/i18n'
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
    options: {
      storySort: {
        order: ['Introduction', 'Vue', 'React'],
      },
    },
  },
  // 全局装饰器
  decorators: [
    (Story, context) => {
      const locale = (context.globals?.locale as 'en' | 'zh') || 'zh'
      const theme = (context.globals?.theme as 'light' | 'dark') || 'light'
      
      return (
        <div 
          style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            padding: '1rem',
            minHeight: '100vh',
            backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#000000',
          }}
        >
          <div style={{
            marginBottom: '1rem',
            fontSize: '0.875rem',
            color: '#666',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span>
              Language: {locales[locale]?.title || '中文'} {locales[locale]?.right || '🇨🇳'}
            </span>
            <span>
              Theme: {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </span>
          </div>
          <Story />
        </div>
      )
    },
  ],
  // 全局变量
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'zh',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'zh', title: '中文 🇨🇳', left: '🌐' },
          { value: 'en', title: 'English 🇺🇸', left: '🌐' },
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
          { value: 'light', title: '☀️ Light' },
          { value: 'dark', title: '🌙 Dark' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
}

export default preview 