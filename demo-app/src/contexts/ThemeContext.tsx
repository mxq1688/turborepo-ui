import React, { createContext, useContext, useState, useEffect } from 'react'
import { Theme, ThemeContextType } from '../types'

// 默认主题配置
const defaultTheme: Theme = {
  mode: 'light',
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe', 
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712'
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16'
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03'
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  borderRadius: {
    none: '0px',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
  },
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  }
}

// 深色主题
const darkTheme: Theme = {
  ...defaultTheme,
  mode: 'dark',
}

// 创建主题上下文
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// 主题提供器组件
interface ThemeProviderProps {
  children: React.ReactNode
  initialTheme?: Theme | 'light' | 'dark'
}

export function ThemeProvider({ children, initialTheme = 'light' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof initialTheme === 'string') {
      return initialTheme === 'dark' ? darkTheme : defaultTheme
    }
    return initialTheme
  })

  const [mode, setMode] = useState<'light' | 'dark'>(theme.mode)

  // 从localStorage加载保存的主题
  useEffect(() => {
    const savedTheme = localStorage.getItem('ui-theme-mode')
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setMode(savedTheme)
      setThemeState(savedTheme === 'dark' ? darkTheme : defaultTheme)
    }
  }, [])

  // 保存主题到localStorage
  useEffect(() => {
    localStorage.setItem('ui-theme-mode', mode)
    document.documentElement.classList.toggle('dark', mode === 'dark')
  }, [mode])

  const setTheme = (newTheme: Theme | 'light' | 'dark') => {
    if (typeof newTheme === 'string') {
      setMode(newTheme)
      setThemeState(newTheme === 'dark' ? darkTheme : defaultTheme)
    } else {
      setMode(newTheme.mode)
      setThemeState(newTheme)
    }
  }

  const contextValue: ThemeContextType = {
    theme,
    mode,
    setTheme,
    isDark: mode === 'dark'
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

// 使用主题的Hook
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { defaultTheme, darkTheme } 