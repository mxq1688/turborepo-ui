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
export { default as Radio } from './components/Radio.vue';
export { default as RadioGroup } from './components/RadioGroup.vue';
export { default as Switch } from './components/Switch.vue';
export { default as Badge } from './components/Badge.vue';
export { default as Avatar } from './components/Avatar.vue';
export { default as Alert } from './components/Alert.vue';
export { default as Loading } from './components/Loading.vue';
export { default as FullscreenLoading } from './components/FullscreenLoading.vue';
export { default as Tabs } from './components/Tabs.vue';
export { default as TabPanel } from './components/TabPanel.vue';
export { default as Table } from './components/Table.vue';
export { default as Form } from './components/Form.vue';
export { default as FormItem } from './components/FormItem.vue';
export { default as DatePicker } from './components/DatePicker.vue';
export { default as Upload } from './components/Upload.vue';

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

// Vue特定类型定义 - 从共享类型或组件重新导出
export type { LocaleMessages, I18nConfig } from './composables/useI18n';

// 组件相关类型定义
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface VueTab {
  key: string;
  label: string;
  content?: string;
  component?: any;
  props?: Record<string, any>;
  disabled?: boolean;
}

export interface TableColumn<T = any> {
  key: string;
  title: string;
  dataIndex?: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: any;
  className?: string;
}

// 重新导出工具函数
export { 
  theme, 
  styleUtils, 
  combineClasses 
} from '@ui-lib/shared';

// 🐛 开发调试工具
export { debug } from './debug'; 