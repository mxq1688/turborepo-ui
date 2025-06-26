import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { combineClasses } from '@ui-lib/shared';

// ===== 类型定义 =====
export interface FormRule {
  required?: boolean;
  message?: string;
  min?: number;
  max?: number;
  pattern?: RegExp;
  validator?: (value: any, values: Record<string, any>) => string | null;
}

export interface FormItemProps {
  name?: string;
  label?: string;
  rules?: FormRule[];
  required?: boolean;
  help?: string;
  validateStatus?: 'success' | 'warning' | 'error' | 'validating';
  hasFeedback?: boolean;
  labelCol?: { span?: number; offset?: number };
  wrapperCol?: { span?: number; offset?: number };
  className?: string;
  children: React.ReactNode;
}

export interface FormProps {
  layout?: 'horizontal' | 'vertical' | 'inline';
  labelCol?: { span?: number; offset?: number };
  wrapperCol?: { span?: number; offset?: number };
  size?: 'small' | 'middle' | 'large';
  disabled?: boolean;
  initialValues?: Record<string, any>;
  onFinish?: (values: Record<string, any>) => void;
  onFinishFailed?: (errorInfo: any) => void;
  onValuesChange?: (changedValues: Record<string, any>, allValues: Record<string, any>) => void;
  validateTrigger?: 'onChange' | 'onBlur' | 'onSubmit';
  preserve?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

// ===== 表单上下文 =====
interface FormContextValue {
  layout: 'horizontal' | 'vertical' | 'inline';
  size: 'small' | 'middle' | 'large';
  disabled: boolean;
  labelCol?: { span?: number; offset?: number };
  wrapperCol?: { span?: number; offset?: number };
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  validateTrigger: 'onChange' | 'onBlur' | 'onSubmit';
  setFieldValue: (name: string, value: any) => void;
  setFieldError: (name: string, error: string) => void;
  setFieldTouched: (name: string, touched: boolean) => void;
  validateField: (name: string, rules: FormRule[]) => void;
  submit: () => void;
}

const FormContext = createContext<FormContextValue | null>(null);

// ===== 自定义Hook =====
export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within Form component');
  }
  return context;
}

// ===== 验证函数 =====
function validateValue(value: any, rules: FormRule[], allValues: Record<string, any>): string | null {
  for (const rule of rules) {
    // 必填验证
    if (rule.required && (value === undefined || value === null || value === '')) {
      return rule.message || '此字段为必填项';
    }

    // 如果值为空且不是必填，跳过其他验证
    if (value === undefined || value === null || value === '') {
      continue;
    }

    // 最小长度验证
    if (rule.min !== undefined) {
      if (typeof value === 'string' && value.length < rule.min) {
        return rule.message || `最少输入 ${rule.min} 个字符`;
      }
      if (typeof value === 'number' && value < rule.min) {
        return rule.message || `数值不能小于 ${rule.min}`;
      }
    }

    // 最大长度验证
    if (rule.max !== undefined) {
      if (typeof value === 'string' && value.length > rule.max) {
        return rule.message || `最多输入 ${rule.max} 个字符`;
      }
      if (typeof value === 'number' && value > rule.max) {
        return rule.message || `数值不能大于 ${rule.max}`;
      }
    }

    // 正则验证
    if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
      return rule.message || '格式不正确';
    }

    // 自定义验证器
    if (rule.validator) {
      const error = rule.validator(value, allValues);
      if (error) {
        return error;
      }
    }
  }

  return null;
}

// ===== Form 主组件 =====
export function Form({
  layout = 'vertical',
  labelCol,
  wrapperCol,
  size = 'middle',
  disabled = false,
  initialValues = {},
  onFinish,
  onFinishFailed,
  onValuesChange,
  validateTrigger = 'onChange',
  preserve = true,
  className,
  style,
  children,
}: FormProps) {
  // ===== 状态管理 =====
  const [values, setValues] = useState<Record<string, any>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // ===== 重置初始值 =====
  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  // ===== 设置字段值 =====
  const setFieldValue = useCallback((name: string, value: any) => {
    const newValues = { ...values, [name]: value };
    setValues(newValues);

    // 触发变化回调
    if (onValuesChange) {
      onValuesChange({ [name]: value }, newValues);
    }
  }, [values, onValuesChange]);

  // ===== 设置字段错误 =====
  const setFieldError = useCallback((name: string, error: string) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  }, []);

  // ===== 设置字段触摸状态 =====
  const setFieldTouched = useCallback((name: string, touched: boolean) => {
    setTouched(prev => ({ ...prev, [name]: touched }));
  }, []);

  // ===== 验证单个字段 =====
  const validateField = useCallback((name: string, rules: FormRule[]) => {
    const value = values[name];
    const error = validateValue(value, rules, values);
    
    if (error) {
      setFieldError(name, error);
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [values, setFieldError]);

  // ===== 提交表单 =====
  const submit = useCallback(() => {
    // 标记所有字段为已触摸
    const fieldNames = Object.keys(values);
    setTouched(fieldNames.reduce((acc, name) => ({ ...acc, [name]: true }), {}));

    // 检查是否有错误
    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      onFinishFailed?.({ values, errors });
    } else {
      onFinish?.(values);
    }
  }, [values, errors, onFinish, onFinishFailed]);

  // ===== 上下文值 =====
  const contextValue: FormContextValue = {
    layout,
    size,
    disabled,
    labelCol,
    wrapperCol,
    values,
    errors,
    touched,
    validateTrigger,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    validateField,
    submit,
  };

  // ===== 样式类 =====
  const formClasses = combineClasses(
    'w-full',
    layout === 'inline' && 'flex flex-wrap items-center gap-4',
    className
  );

  return (
    <FormContext.Provider value={contextValue}>
      <form
        className={formClasses}
        style={style}
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}

// ===== FormItem 组件 =====
export function FormItem({
  name,
  label,
  rules = [],
  required,
  help,
  validateStatus,
  hasFeedback = false,
  labelCol,
  wrapperCol,
  className,
  children,
}: FormItemProps) {
  const form = useFormContext();
  
  // ===== 处理字段值变化 =====
  const handleChange = useCallback((value: any) => {
    if (name) {
      form.setFieldValue(name, value);
      
      // 根据触发条件验证
      if (form.validateTrigger === 'onChange') {
        form.validateField(name, rules);
      }
    }
  }, [name, form, rules]);

  // ===== 处理字段失焦 =====
  const handleBlur = useCallback(() => {
    if (name) {
      form.setFieldTouched(name, true);
      
      // 根据触发条件验证
      if (form.validateTrigger === 'onBlur') {
        form.validateField(name, rules);
      }
    }
  }, [name, form, rules]);

  // ===== 获取当前状态 =====
  const value = name ? form.values[name] : undefined;
  const error = name ? form.errors[name] : undefined;
  const touched = name ? form.touched[name] : false;
  const hasError = error && touched;

  // ===== 确定最终验证状态 =====
  const finalValidateStatus = validateStatus || (hasError ? 'error' : undefined);

  // ===== 增强子元素 =====
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as any, {
        value,
        onChange: handleChange,
        onBlur: handleBlur,
        disabled: form.disabled || child.props.disabled,
        size: child.props.size || form.size,
        status: finalValidateStatus,
      });
    }
    return child;
  });

  // ===== 样式类 =====
  const itemClasses = combineClasses(
    'form-item',
    form.layout === 'vertical' && 'flex flex-col space-y-1',
    form.layout === 'horizontal' && 'flex items-start space-x-4',
    form.layout === 'inline' && 'flex items-center space-x-2',
    className
  );

  const labelClasses = combineClasses(
    'form-item-label',
    'text-sm font-medium',
    hasError ? 'text-red-600' : 'text-gray-700',
    required && "after:content-['*'] after:text-red-500 after:ml-1",
    form.layout === 'horizontal' && 'min-w-0 flex-shrink-0',
    form.layout === 'vertical' && 'mb-1'
  );

  const wrapperClasses = combineClasses(
    'form-item-wrapper',
    'flex-1 min-w-0',
    form.layout === 'vertical' && 'w-full'
  );

  const controlClasses = combineClasses(
    'form-item-control',
    'relative',
    hasFeedback && hasError && 'pr-8'
  );

  return (
    <div className={itemClasses}>
      {/* 标签 */}
      {label && (
        <label className={labelClasses} style={labelCol}>
          {label}
        </label>
      )}
      
      {/* 控件包装 */}
      <div className={wrapperClasses} style={wrapperCol}>
        <div className={controlClasses}>
          {enhancedChildren}
          
          {/* 反馈图标 */}
          {hasFeedback && finalValidateStatus && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {finalValidateStatus === 'error' && (
                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
              {finalValidateStatus === 'success' && (
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              {finalValidateStatus === 'warning' && (
                <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
              {finalValidateStatus === 'validating' && (
                <svg className="h-5 w-5 text-blue-500 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
            </div>
          )}
        </div>
        
        {/* 帮助文本和错误信息 */}
        {(help || hasError) && (
          <div className="mt-1 text-sm">
            {hasError ? (
              <span className="text-red-600">{error}</span>
            ) : help ? (
              <span className="text-gray-500">{help}</span>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

// ===== 预设表单控件 =====
export function FormInput({ 
  placeholder, 
  type = 'text', 
  disabled,
  size,
  status,
  value,
  onChange,
  onBlur,
  className,
  ...props 
}: any) {
  const inputClasses = combineClasses(
    'block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors',
    status === 'error' ? 'border-red-300 focus:border-red-500 focus:ring-red-500' :
    status === 'warning' ? 'border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500' :
    status === 'success' ? 'border-green-300 focus:border-green-500 focus:ring-green-500' :
    'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    disabled && 'bg-gray-50 cursor-not-allowed',
    size === 'small' && 'py-1 text-sm',
    size === 'large' && 'py-3 text-base',
    className
  );

  return (
    <input
      type={type}
      className={inputClasses}
      placeholder={placeholder}
      disabled={disabled}
      value={value || ''}
      onChange={(e) => onChange?.(e.target.value)}
      onBlur={onBlur}
      {...props}
    />
  );
}

export function FormTextarea({ 
  placeholder, 
  rows = 4,
  disabled,
  size,
  status,
  value,
  onChange,
  onBlur,
  className,
  ...props 
}: any) {
  const textareaClasses = combineClasses(
    'block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors resize-none',
    status === 'error' ? 'border-red-300 focus:border-red-500 focus:ring-red-500' :
    status === 'warning' ? 'border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500' :
    status === 'success' ? 'border-green-300 focus:border-green-500 focus:ring-green-500' :
    'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    disabled && 'bg-gray-50 cursor-not-allowed',
    size === 'small' && 'py-1 text-sm',
    size === 'large' && 'py-3 text-base',
    className
  );

  return (
    <textarea
      className={textareaClasses}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      value={value || ''}
      onChange={(e) => onChange?.(e.target.value)}
      onBlur={onBlur}
      {...props}
    />
  );
}

// ===== 导出 =====
export default Form;
export { FormItem, FormInput, FormTextarea }; 