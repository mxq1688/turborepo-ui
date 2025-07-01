import { ref, reactive, computed, inject, provide } from 'vue'

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

// 国际化注入键
const I18N_KEY = Symbol('i18n')

// 国际化状态
const i18nState = reactive({
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: { ...defaultMessages }
})

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

export function useI18n() {
  // 提供国际化
  const provideI18n = (config?: Partial<I18nConfig>) => {
    if (config) {
      if (config.locale) i18nState.locale = config.locale
      if (config.fallbackLocale) i18nState.fallbackLocale = config.fallbackLocale
      if (config.messages) {
        Object.assign(i18nState.messages, config.messages)
      }
    }
    provide(I18N_KEY, i18nState)
    return i18nState
  }

  // 注入国际化
  const i18n = inject(I18N_KEY, i18nState)

  // 获取翻译文本
  const t = (key: string, values?: Record<string, any>): string => {
    // 尝试从当前语言获取
    let message = getNestedValue(i18n.messages[i18n.locale], key)
    
    // 如果没找到，尝试从回退语言获取
    if (message === undefined && i18n.locale !== i18n.fallbackLocale) {
      message = getNestedValue(i18n.messages[i18n.fallbackLocale], key)
    }
    
    // 如果仍然没找到，返回key本身
    if (message === undefined) {
      return key
    }

    // 处理变量替换
    return values ? interpolate(message, values) : message
  }

  // 设置当前语言
  const setLocale = (locale: string) => {
    if (i18n.messages[locale]) {
      i18n.locale = locale
      // 更新HTML的lang属性
      document.documentElement.lang = locale
    } else {
      console.warn(`Locale '${locale}' not found`)
    }
  }

  // 添加语言包
  const addMessages = (locale: string, messages: LocaleMessages) => {
    if (!i18n.messages[locale]) {
      i18n.messages[locale] = {}
    }
    Object.assign(i18n.messages[locale], messages)
  }

  // 获取可用语言列表
  const availableLocales = computed(() => Object.keys(i18n.messages))

  // 检查语言是否可用
  const isLocaleAvailable = (locale: string) => {
    return locale in i18n.messages
  }

  // 获取当前语言信息
  const currentLocale = computed(() => i18n.locale)
  const currentMessages = computed(() => i18n.messages[i18n.locale] || {})

  return {
    // 核心功能
    t,
    setLocale,
    addMessages,
    provideI18n,
    
    // 状态
    currentLocale,
    currentMessages,
    availableLocales,
    
    // 工具函数
    isLocaleAvailable
  }
} 