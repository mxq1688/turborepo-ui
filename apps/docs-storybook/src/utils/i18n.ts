// 定义组件文本类型
interface ComponentText {
  description: string;
  variant: string;
  size: string;
  disabled: string;
  examples: {
    default: string;
    primary: string;
    secondary: string;
    outline: string;
    ghost: string;
    small: string;
    large: string;
    disabled: string;
  };
  stories: {
    default: string;
    primary: string;
    secondary: string;
    outline: string;
    ghost: string;
    small: string;
    large: string;
    disabled: string;
  };
}

interface I18nTexts {
  button: ComponentText;
  input: ComponentText;
  // ... 其他组件的类型定义
}

// 多语言文本配置
export const i18nTexts: Record<'en' | 'zh', I18nTexts> = {
  en: {
    button: {
      description: 'A versatile button component with various styles and sizes.',
      variant: 'The visual style variant of the button.',
      size: 'The size of the button.',
      disabled: 'Whether the button is disabled.',
      examples: {
        default: 'Default Button',
        primary: 'Primary Button',
        secondary: 'Secondary Button',
        outline: 'Outline Button',
        ghost: 'Ghost Button',
        small: 'Small Button',
        large: 'Large Button',
        disabled: 'Disabled Button',
      },
      stories: {
        default: 'Default button with standard styling.',
        primary: 'Primary button for main actions.',
        secondary: 'Secondary button for alternative actions.',
        outline: 'Outline button with border only.',
        ghost: 'Ghost button with minimal styling.',
        small: 'Small-sized button.',
        large: 'Large-sized button.',
        disabled: 'Button in disabled state.',
      },
    },
    input: {
      description: 'A flexible input component for text entry.',
      variant: 'The visual style variant of the input.',
      size: 'The size of the input field.',
      disabled: 'Whether the input is disabled.',
      examples: {
        default: 'Default Input',
        primary: 'Primary Input',
        secondary: 'Secondary Input',
        outline: 'Outline Input',
        ghost: 'Ghost Input',
        small: 'Small Input',
        large: 'Large Input',
        disabled: 'Disabled Input',
      },
      stories: {
        default: 'Default input with standard styling.',
        primary: 'Primary input for main form fields.',
        secondary: 'Secondary input for alternative fields.',
        outline: 'Outline input with border only.',
        ghost: 'Ghost input with minimal styling.',
        small: 'Small-sized input field.',
        large: 'Large-sized input field.',
        disabled: 'Input field in disabled state.',
      },
    },
  },
  zh: {
    button: {
      description: '一个多功能的按钮组件，支持多种样式和尺寸。',
      variant: '按钮的视觉样式变体。',
      size: '按钮的尺寸。',
      disabled: '按钮是否禁用。',
      examples: {
        default: '默认按钮',
        primary: '主要按钮',
        secondary: '次要按钮',
        outline: '轮廓按钮',
        ghost: '幽灵按钮',
        small: '小型按钮',
        large: '大型按钮',
        disabled: '禁用按钮',
      },
      stories: {
        default: '带有标准样式的默认按钮。',
        primary: '用于主要操作的按钮。',
        secondary: '用于次要操作的按钮。',
        outline: '仅带有边框的轮廓按钮。',
        ghost: '带有最小样式的幽灵按钮。',
        small: '小尺寸按钮。',
        large: '大尺寸按钮。',
        disabled: '禁用状态的按钮。',
      },
    },
    input: {
      description: '一个灵活的文本输入组件。',
      variant: '输入框的视觉样式变体。',
      size: '输入框的尺寸。',
      disabled: '输入框是否禁用。',
      examples: {
        default: '默认输入框',
        primary: '主要输入框',
        secondary: '次要输入框',
        outline: '轮廓输入框',
        ghost: '幽灵输入框',
        small: '小型输入框',
        large: '大型输入框',
        disabled: '禁用输入框',
      },
      stories: {
        default: '带有标准样式的默认输入框。',
        primary: '用于主要表单字段的输入框。',
        secondary: '用于次要表单字段的输入框。',
        outline: '仅带有边框的轮廓输入框。',
        ghost: '带有最小样式的幽灵输入框。',
        small: '小尺寸输入框。',
        large: '大尺寸输入框。',
        disabled: '禁用状态的输入框。',
      },
    },
  },
}

// 声明全局变量类型
declare global {
  interface Window {
    __STORYBOOK_PREVIEW__: any;
  }
}

// 获取当前语言
export function getCurrentLanguage(): 'en' | 'zh' {
  try {
    // 尝试从 Storybook 全局变量获取
    if (typeof window !== 'undefined' && window.__STORYBOOK_PREVIEW__) {
      const globals = window.__STORYBOOK_PREVIEW__.storyContext.globals;
      return globals.locale || 'zh';
    }
  } catch (e) {
    console.warn('Failed to get Storybook locale:', e);
  }
  return 'zh';
}

// 获取组件文本
export function getComponentText(component: keyof I18nTexts, locale: 'en' | 'zh' = getCurrentLanguage()): ComponentText {
  return i18nTexts[locale][component];
}

// 获取指定语言的文本
export function getText(path: string, lang?: 'en' | 'zh'): string {
  const currentLang = lang || getCurrentLanguage()
  const keys = path.split('.')
  let result: any = i18nTexts[currentLang]
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key]
    } else {
      console.warn(`Translation key not found: ${path} for language: ${currentLang}`)
      return path
    }
  }
  
  return result || path
}

// 类型定义
export type ComponentTexts = {
  description: string
  variant?: string
  size?: string
  disabled?: string
  children?: string
  type?: string
  placeholder?: string
  examples: Record<string, string>
  stories: Record<string, string>
} 