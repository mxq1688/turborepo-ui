import type { Preview } from "@storybook/react";
import { I18nProvider } from '@ui-lib/ui-react';
import React from 'react';

// Default messages for components
const defaultMessages = {
  'zh-CN': {
    button: {
      confirm: '确认',
      cancel: '取消',
      ok: '确定',
      save: '保存',
      edit: '编辑',
      delete: '删除',
      add: '添加',
      close: '关闭'
    },
    alert: {
      success: '成功',
      warning: '警告',
      error: '错误',
      info: '信息'
    },
    form: {
      required: '此字段为必填项',
      email: '请输入有效的邮箱地址',
      minLength: '至少需要 {min} 个字符',
      maxLength: '最多允许 {max} 个字符',
      placeholder: {
        input: '请输入内容',
        select: '请选择',
        search: '搜索...'
      }
    }
  },
  'en-US': {
    button: {
      confirm: 'Confirm',
      cancel: 'Cancel',
      ok: 'OK',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      add: 'Add',
      close: 'Close'
    },
    alert: {
      success: 'Success',
      warning: 'Warning',
      error: 'Error',
      info: 'Info'
    },
    form: {
      required: 'This field is required',
      email: 'Please enter a valid email address',
      minLength: 'Minimum {min} characters required',
      maxLength: 'Maximum {max} characters allowed',
      placeholder: {
        input: 'Please input',
        select: 'Please select',
        search: 'Search...'
      }
    }
  }
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: '手机',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: '平板',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: '桌面',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
      },
    },
  },
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'zh-CN',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'zh-CN', right: '🇨🇳', title: '中文' },
          { value: 'en-US', right: '🇺🇸', title: 'English' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const locale = context.globals.locale || 'zh-CN';
      
      return (
        <I18nProvider locale={locale} messages={defaultMessages}>
          <Story />
        </I18nProvider>
      );
    },
  ],
};

export default preview; 