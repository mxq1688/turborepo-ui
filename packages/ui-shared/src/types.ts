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

// 主题和设计令牌类型
export interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  fontSizes: Record<string, string>;
} 