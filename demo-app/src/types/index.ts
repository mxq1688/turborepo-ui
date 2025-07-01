// 基础类型定义
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type Size = 'sm' | 'md' | 'lg'
export type Color = 'primary' | 'gray' | 'success' | 'warning' | 'error'

// 按钮组件属性
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}

// 输入框组件属性
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  size?: Size
  icon?: React.ReactNode
}

// 卡片组件属性
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: Size
  shadow?: boolean
  border?: boolean
  children: React.ReactNode
}

// 徽章组件属性
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Color
  size?: Size
  dot?: boolean
  children?: React.ReactNode
}

// 警告提示组件属性
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Color
  title?: string
  closable?: boolean
  onClose?: () => void
  children: React.ReactNode
}

// 模态框组件属性
export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  size?: Size
  children: React.ReactNode
}

// 主题类型定义
export interface Theme {
  mode: 'light' | 'dark'
  colors: {
    primary: Record<string, string>
    gray: Record<string, string>
    success: Record<string, string>
    warning: Record<string, string>
    error: Record<string, string>
  }
  spacing: Record<string, string>
  borderRadius: Record<string, string>
  fontFamily: Record<string, string[]>
  boxShadow: Record<string, string>
}

// 主题上下文类型
export interface ThemeContextType {
  theme: Theme
  mode: 'light' | 'dark'
  setTheme: (theme: Theme | 'light' | 'dark') => void
  isDark: boolean
}

// 国际化类型定义
export type Locale = 'en' | 'zh'

export interface I18nMessages {
  [key: string]: string | I18nMessages
}

export interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, string | number>) => string
  messages: Record<Locale, I18nMessages>
}

// 表单类型定义
export interface FormData {
  [key: string]: any
}

export interface FormFieldError {
  message: string
  type: string
}

export interface FormErrors {
  [key: string]: FormFieldError
} 