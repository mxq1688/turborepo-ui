import { ref, reactive, computed, inject, provide } from 'vue'

// 简化的主题配置类型
interface SimpleThemeConfig {
  colors: {
    primary: Record<string, string>
    gray: Record<string, string>
    success: Record<string, string>
    warning: Record<string, string>
    error: Record<string, string>
  }
  borderRadius: Record<string, string>
  spacing: Record<string, string>
}

// 默认主题配置
const defaultTheme: SimpleThemeConfig = {
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
    },
    success: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
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
    }
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem'
  }
}

// 主题注入key
const THEME_KEY = Symbol('theme')

// 主题状态
const themeState = reactive({
  current: { ...defaultTheme },
  isDark: false
})

export function useTheme() {
  // 提供主题
  const provideTheme = (initialTheme?: Partial<SimpleThemeConfig>) => {
    if (initialTheme) {
      Object.assign(themeState.current, initialTheme)
    }
    provide(THEME_KEY, themeState)
    return themeState
  }

  // 注入主题
  const theme = inject(THEME_KEY, themeState)

  // 切换主题
  const setTheme = (newTheme: Partial<SimpleThemeConfig>) => {
    Object.assign(theme.current, newTheme)
  }

  // 切换深色模式
  const toggleDarkMode = () => {
    theme.isDark = !theme.isDark
    document.documentElement.classList.toggle('dark', theme.isDark)
  }

  // 设置深色模式
  const setDarkMode = (isDark: boolean) => {
    theme.isDark = isDark
    document.documentElement.classList.toggle('dark', isDark)
  }

  // 获取主题变量的CSS变量
  const getCSSVariables = computed(() => {
    const variables: Record<string, string> = {}
    
    // 颜色变量
    Object.entries(theme.current.colors).forEach(([colorName, colorShades]) => {
      Object.entries(colorShades).forEach(([shade, value]) => {
        variables[`--color-${colorName}-${shade}`] = value
      })
    })

    // 边框圆角变量
    Object.entries(theme.current.borderRadius).forEach(([key, value]) => {
      variables[`--border-radius-${key}`] = value
    })

    // 间距变量
    Object.entries(theme.current.spacing).forEach(([key, value]) => {
      variables[`--spacing-${key}`] = value
    })

    return variables
  })

  // 应用CSS变量到文档
  const applyCSSVariables = () => {
    const variables = getCSSVariables.value
    Object.entries(variables).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value)
    })
  }

  return {
    theme: computed(() => theme.current),
    isDark: computed(() => theme.isDark),
    provideTheme,
    setTheme,
    toggleDarkMode,
    setDarkMode,
    getCSSVariables,
    applyCSSVariables
  }
} 