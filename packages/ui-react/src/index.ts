import './styles.css';

export { Button } from './components/Button';
export { Card, CardHeader, CardTitle, CardContent } from './components/Card';
export { Input } from './components/Input';
export { Modal } from './components/Modal';
export { Select } from './components/Select';
export { Checkbox } from './components/Checkbox';
export { Radio, RadioGroup } from './components/Radio';
export { Switch } from './components/Switch';
export { Badge } from './components/Badge';
export { Avatar } from './components/Avatar';
export { Alert } from './components/Alert';
export { Loading, FullscreenLoading } from './components/Loading';
export { Tabs, TabPanel } from './components/Tabs';
export { Table } from './components/Table';
export { default as Form, FormItem, FormInput, FormTextarea } from './components/Form';
export { default as DatePicker } from './components/DatePicker';
export { default as Upload } from './components/Upload';

// 导出主题和国际化
export { useTheme, ThemeProvider } from './hooks/useTheme';
export { useI18n, I18nProvider } from './hooks/useI18n';

export type { ButtonProps } from './components/Button';
export type { CardProps } from './components/Card';
export type { InputProps } from './components/Input';
export type { ModalProps } from './components/Modal';
export type { SelectProps, SelectOption } from './components/Select';
export type { CheckboxProps } from './components/Checkbox';
export type { RadioProps, RadioGroupProps, RadioOption } from './components/Radio';
export type { SwitchProps } from './components/Switch';
export type { BadgeProps } from './components/Badge';
export type { AvatarProps } from './components/Avatar';
export type { AlertProps } from './components/Alert';
export type { LoadingProps, FullscreenLoadingProps } from './components/Loading';
export type { TabsProps, Tab, TabPanelProps } from './components/Tabs';
export type { TableProps, TableColumn } from './components/Table';
export type { FormProps, FormItemProps, FormRule } from './components/Form';
export type { DatePickerProps } from './components/DatePicker';
export type { UploadProps } from './components/Upload';

// 导出主题和国际化类型
export type { LocaleMessages, I18nConfig } from './hooks/useI18n';

// 重新导出共享类型和工具
export type { 
  ThemeConfig,
  ThemeColors
} from '@ui-lib/shared';

export { 
  theme, 
  styleUtils, 
  combineClasses 
} from '@ui-lib/shared';

// 🐛 开发调试工具
export { debug } from './debug'; 