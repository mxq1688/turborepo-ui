// 导出Vue组件
export { default as Button } from './components/Button.vue';
export { default as Card } from './components/Card.vue';
export { default as CardHeader } from './components/CardHeader.vue';
export { default as CardTitle } from './components/CardTitle.vue';
export { default as CardContent } from './components/CardContent.vue';
export { default as Input } from './components/Input.vue';
export { default as Modal } from './components/Modal.vue';
export { default as Select } from './components/Select.vue';
export { default as Checkbox } from './components/Checkbox.vue';
export { default as Switch } from './components/Switch.vue';
export { default as Badge } from './components/Badge.vue';
export { default as Avatar } from './components/Avatar.vue';
export { default as Alert } from './components/Alert.vue';
export { default as Loading } from './components/Loading.vue';

// 导出 Composables
export { useTheme } from './composables/useTheme';
export { useI18n } from './composables/useI18n';

// 重新导出共享类型
export type { 
  ButtonProps, 
  CardProps, 
  InputProps,
  ThemeConfig,
  ThemeColors
} from '@ui-lib/shared';

// Vue特定类型定义
export type { SelectOption } from './components/Select.vue';
export type { LocaleMessages, I18nConfig } from './composables/useI18n';

// 重新导出工具函数
export { 
  theme, 
  styleUtils, 
  combineClasses 
} from '@ui-lib/shared'; 