// Vue组件库调试工具
interface DebugConfig {
  enabled: boolean
  prefix: string
  colors: {
    info: string
    warn: string
    error: string
    success: string
  }
}

const config: DebugConfig = {
  enabled: process.env.NODE_ENV === 'development',
  prefix: '[Vue UI Debug]',
  colors: {
    info: '#3b82f6',
    warn: '#f59e0b', 
    error: '#ef4444',
    success: '#10b981'
  }
}

export const debug = {
  // 信息日志
  info: (message: string, data?: any) => {
    if (!config.enabled) return
    console.log(
      `%c${config.prefix} ${message}`,
      `color: ${config.colors.info}; font-weight: bold`,
      data || ''
    )
  },

  // 警告日志
  warn: (message: string, data?: any) => {
    if (!config.enabled) return
    console.warn(
      `%c${config.prefix} ${message}`,
      `color: ${config.colors.warn}; font-weight: bold`,
      data || ''
    )
  },

  // 错误日志
  error: (message: string, data?: any) => {
    if (!config.enabled) return
    console.error(
      `%c${config.prefix} ${message}`,
      `color: ${config.colors.error}; font-weight: bold`,
      data || ''
    )
  },

  // 成功日志
  success: (message: string, data?: any) => {
    if (!config.enabled) return
    console.log(
      `%c${config.prefix} ${message}`,
      `color: ${config.colors.success}; font-weight: bold`,
      data || ''
    )
  },

  // 组件渲染追踪
  component: (name: string, props?: any) => {
    if (!config.enabled) return
    console.group(`%c${config.prefix} Component: ${name}`, `color: ${config.colors.info}`)
    if (props) {
      console.log('Props:', props)
    }
    console.groupEnd()
  },

  // 性能计时
  time: (label: string) => {
    if (!config.enabled) return
    console.time(`${config.prefix} ${label}`)
  },

  timeEnd: (label: string) => {
    if (!config.enabled) return
    console.timeEnd(`${config.prefix} ${label}`)
  },

  // 表格数据
  table: (data: any) => {
    if (!config.enabled) return
    console.table(data)
  },

  // 配置调试
  configure: (newConfig: Partial<DebugConfig>) => {
    Object.assign(config, newConfig)
  },

  // 获取当前配置
  getConfig: () => ({ ...config })
}

// 导出类型
export type { DebugConfig } 