// 共享的组件属性类型
export interface BaseComponentProps {
  className?: string;
  children?: any; // 适配React.ReactNode和Vue slots
}

// 按钮组件的共享类型
export interface ButtonVariants {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export interface ButtonProps extends BaseComponentProps, ButtonVariants {}

// 卡片组件的共享类型
export interface CardProps extends BaseComponentProps {}

// 输入框组件的共享类型
export interface InputProps extends BaseComponentProps {
  label?: string;
  error?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
}

// 色阶类型定义
export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

// 主题颜色类型 - 支持完整色阶和简单字符串
export interface ThemeColors {
  primary: ColorScale;
  gray: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  error: ColorScale;
  info?: ColorScale;
}

// 简化版主题颜色（向后兼容）
export interface SimpleThemeColors {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

// 主题配置类型
export interface ThemeConfig {
  colors: ThemeColors;
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  fontSizes?: Record<string, string>;
}

// 国际化类型定义
export interface LocaleMessages {
  [key: string]: string | LocaleMessages;
}

export interface I18nConfig {
  locale: string;
  fallbackLocale: string;
  messages: Record<string, LocaleMessages>;
} 