import { ThemeConfig } from './types';

// 设计令牌 - 统一的设计规范
export const designTokens: ThemeConfig = {
  colors: {
    primary: '#7c3aed', // purple-600
    secondary: '#6b7280', // gray-500
    success: '#10b981', // emerald-500
    warning: '#f59e0b', // amber-500
    error: '#ef4444', // red-500
    info: '#3b82f6' // blue-500
  },
  spacing: {
    xs: '0.5rem', // 8px
    sm: '0.75rem', // 12px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem' // 48px
  },
  borderRadius: {
    sm: '0.125rem', // 2px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    full: '9999px'
  },
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem' // 24px
  }
};

// 组件样式生成器
export const styleUtils = {
  // 按钮样式
  button: {
    base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    variants: {
      primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg transform hover:scale-105 transition-all',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
      ghost: 'hover:bg-gray-100 hover:text-gray-900'
    },
    sizes: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-8'
    }
  },
  // 卡片样式
  card: {
    base: 'bg-white border border-gray-200 rounded-lg shadow-sm',
    header: 'px-6 py-4 border-b border-gray-200',
    content: 'px-6 py-4',
    title: 'text-lg font-semibold text-gray-900'
  },
  // 输入框样式
  input: {
    base: 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100 disabled:cursor-not-allowed',
    label: 'block text-sm font-medium text-gray-700 mb-1',
    error: 'mt-1 text-sm text-red-600'
  }
};

// 样式组合工具函数
export function combineClasses(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
} 