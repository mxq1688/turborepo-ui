import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale, I18nMessages, I18nContextType } from '../types'

// 默认翻译消息
const defaultMessages: Record<Locale, I18nMessages> = {
  en: {
    common: {
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm',
      delete: 'Delete',
      edit: 'Edit',
      add: 'Add',
      close: 'Close',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      warning: 'Warning',
      info: 'Information'
    },
    buttons: {
      clickMe: 'Click Me',
      submit: 'Submit',
      reset: 'Reset',
      search: 'Search'
    },
    forms: {
      name: 'Name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      required: 'This field is required',
      invalidEmail: 'Invalid email format'
    },
    demo: {
      title: 'UI Component Library Demo',
      subtitle: 'Experience our comprehensive component library',
      description: 'This demo showcases the capabilities of our UI component library with theme customization, internationalization, and modern design.',
      themeToggle: 'Toggle Theme',
      languageToggle: 'Switch Language',
      components: {
        buttons: 'Buttons',
        inputs: 'Inputs',
        cards: 'Cards',
        badges: 'Badges',
        alerts: 'Alerts',
        modals: 'Modals'
      },
      examples: {
        basicUsage: 'Basic Usage',
        variants: 'Variants',
        sizes: 'Sizes',
        states: 'States'
      }
    }
  },
  zh: {
    common: {
      save: '保存',
      cancel: '取消',
      confirm: '确认',
      delete: '删除',
      edit: '编辑',
      add: '添加',
      close: '关闭',
      loading: '加载中...',
      error: '错误',
      success: '成功',
      warning: '警告',
      info: '信息'
    },
    buttons: {
      clickMe: '点击我',
      submit: '提交',
      reset: '重置',
      search: '搜索'
    },
    forms: {
      name: '姓名',
      email: '邮箱',
      password: '密码',
      confirmPassword: '确认密码',
      required: '此字段为必填项',
      invalidEmail: '邮箱格式无效'
    },
    demo: {
      title: 'UI 组件库演示',
      subtitle: '体验我们全面的组件库',
      description: '此演示展示了我们UI组件库的功能，包括主题定制、国际化和现代化设计。',
      themeToggle: '切换主题',
      languageToggle: '切换语言',
      components: {
        buttons: '按钮',
        inputs: '输入框',
        cards: '卡片',
        badges: '徽章',
        alerts: '警告提示',
        modals: '模态框'
      },
      examples: {
        basicUsage: '基础用法',
        variants: '变体',
        sizes: '尺寸',
        states: '状态'
      }
    }
  }
}

// 创建国际化上下文
const I18nContext = createContext<I18nContextType | undefined>(undefined)

// 国际化提供器组件
interface I18nProviderProps {
  children: React.ReactNode
  initialLocale?: Locale
  messages?: Record<Locale, I18nMessages>
}

export function I18nProvider({ 
  children, 
  initialLocale = 'en',
  messages = defaultMessages 
}: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // 从localStorage加载保存的语言设置
    const savedLocale = localStorage.getItem('ui-locale') as Locale
    return savedLocale && messages[savedLocale] ? savedLocale : initialLocale
  })

  // 保存语言设置到localStorage
  useEffect(() => {
    localStorage.setItem('ui-locale', locale)
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    if (messages[newLocale]) {
      setLocaleState(newLocale)
    }
  }

  // 翻译函数
  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.')
    let value: any = messages[locale]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // 如果找不到翻译，返回key本身
        console.warn(`Translation key "${key}" not found for locale "${locale}"`)
        return key
      }
    }

    if (typeof value !== 'string') {
      console.warn(`Translation key "${key}" does not resolve to a string for locale "${locale}"`)
      return key
    }

    // 参数替换
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return paramKey in params ? String(params[paramKey]) : match
      })
    }

    return value
  }

  const contextValue: I18nContextType = {
    locale,
    setLocale,
    t,
    messages
  }

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  )
}

// 使用国际化的Hook
export function useI18n(): I18nContextType {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

export { defaultMessages } 