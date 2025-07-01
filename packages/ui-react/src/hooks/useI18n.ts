import React, { createContext, useContext, useState, useEffect } from 'react'

// 本地化消息类型
export interface LocaleMessages {
  [key: string]: string | LocaleMessages
}

// 国际化配置接口
export interface I18nConfig {
  locale: string
  fallbackLocale: string
  messages: Record<string, LocaleMessages>
}

// 默认消息
const defaultMessages: Record<string, LocaleMessages> = {
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
    },
    modal: {
      close: '关闭',
      confirm: '确认',
      cancel: '取消'
    },
    alert: {
      success: '成功',
      warning: '警告',
      error: '错误',
      info: '信息'
    },
    loading: {
      text: '加载中...'
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
    },
    modal: {
      close: 'Close',
      confirm: 'Confirm',
      cancel: 'Cancel'
    },
    alert: {
      success: 'Success',
      warning: 'Warning',
      error: 'Error',
      info: 'Info'
    },
    loading: {
      text: 'Loading...'
    }
  }
}

// 国际化上下文接口
interface I18nContextType {
  locale: string
  messages: Record<string, LocaleMessages>
  t: (key: string, values?: Record<string, any>) => string
  setLocale: (locale: string) => void
  addMessages: (locale: string, messages: LocaleMessages) => void
  availableLocales: string[]
}

// 创建国际化上下文
const I18nContext = createContext<I18nContextType | undefined>(undefined)

// 国际化提供者Props
interface I18nProviderProps {
  children: React.ReactNode
  locale?: string
  fallbackLocale?: string
  messages?: Record<string, LocaleMessages>
}

// 获取嵌套属性值
function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined
  }, obj)
}

// 替换模板变量
function interpolate(template: string, values: Record<string, any> = {}): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return values[key] !== undefined ? String(values[key]) : match
  })
}

// 国际化提供者组件
export const I18nProvider: React.FC<I18nProviderProps> = ({
  children,
  locale = 'zh-CN',
  fallbackLocale = 'zh-CN',
  messages = {}
}) => {
  const [currentLocale, setCurrentLocale] = useState(locale)
  const [allMessages, setAllMessages] = useState({
    ...defaultMessages,
    ...messages
  })

  // 获取翻译文本
  const t = (key: string, values?: Record<string, any>): string => {
    // 尝试从当前语言获取
    let message = getNestedValue(allMessages[currentLocale], key)
    
    // 如果没找到，尝试从回退语言获取
    if (message === undefined && currentLocale !== fallbackLocale) {
      message = getNestedValue(allMessages[fallbackLocale], key)
    }
    
    // 如果仍然没找到，返回key本身
    if (message === undefined) {
      return key
    }

    // 处理变量替换
    return values ? interpolate(message, values) : message
  }

  // 设置当前语言
  const setLocale = (newLocale: string) => {
    if (allMessages[newLocale]) {
      setCurrentLocale(newLocale)
      // 更新HTML的lang属性
      document.documentElement.lang = newLocale
    } else {
      console.warn(`Locale '${newLocale}' not found`)
    }
  }

  // 添加语言包
  const addMessages = (targetLocale: string, newMessages: LocaleMessages) => {
    setAllMessages(prev => ({
      ...prev,
      [targetLocale]: {
        ...prev[targetLocale],
        ...newMessages
      }
    }))
  }

  // 获取可用语言列表
  const availableLocales = Object.keys(allMessages)

  // 初始化时设置语言
  useEffect(() => {
    document.documentElement.lang = currentLocale
  }, [currentLocale])

  const value: I18nContextType = {
    locale: currentLocale,
    messages: allMessages,
    t,
    setLocale,
    addMessages,
    availableLocales
  }

  return React.createElement(
    I18nContext.Provider,
    { value },
    children
  )
}

// 使用国际化的hook
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
} 