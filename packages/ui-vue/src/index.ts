// 导出Vue组件
export { default as Button } from './components/Button.vue';
export { default as Card } from './components/Card.vue';
export { default as CardHeader } from './components/CardHeader.vue';
export { default as CardTitle } from './components/CardTitle.vue';
export { default as CardContent } from './components/CardContent.vue';
export { default as Input } from './components/Input.vue';

// 重新导出共享类型
export type { 
  ButtonProps, 
  CardProps, 
  InputProps,
  ThemeConfig,
  ThemeColors
} from '@ui-lib/shared';

// 重新导出工具函数
export { 
  theme, 
  styleUtils, 
  combineClasses 
} from '@ui-lib/shared'; 