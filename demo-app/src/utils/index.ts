// 类名合并工具函数
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// 颜色变体工具函数
export function getColorClasses(variant: string, type: 'button' | 'badge' | 'alert' = 'button') {
  const colorMap = {
    button: {
      primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500',
      secondary: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-500',
      outline: 'border border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
      ghost: 'text-primary-500 hover:bg-primary-50 focus:ring-primary-500'
    },
    badge: {
      primary: 'bg-primary-100 text-primary-800',
      gray: 'bg-gray-100 text-gray-800',
      success: 'bg-success-100 text-success-800',
      warning: 'bg-warning-100 text-warning-800',
      error: 'bg-error-100 text-error-800'
    },
    alert: {
      primary: 'bg-primary-50 border-primary-200 text-primary-800',
      gray: 'bg-gray-50 border-gray-200 text-gray-800',
      success: 'bg-success-50 border-success-200 text-success-800',
      warning: 'bg-warning-50 border-warning-200 text-warning-800',
      error: 'bg-error-50 border-error-200 text-error-800'
    }
  }

  return colorMap[type][variant as keyof typeof colorMap[typeof type]] || colorMap[type].primary
}

// 尺寸工具函数
export function getSizeClasses(size: string, type: 'button' | 'input' | 'badge' = 'button') {
  const sizeMap = {
    button: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base'
    },
    input: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-3 text-base'
    },
    badge: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-0.5 text-xs',
      lg: 'px-3 py-1 text-sm'
    }
  }

  return sizeMap[type][size as keyof typeof sizeMap[typeof type]] || sizeMap[type].md
}

// 防抖函数
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => func(...args), wait)
  }
}

// 节流函数
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// 生成唯一ID
export function generateId(prefix: string = 'ui'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

// 检查是否为暗色主题
export function isDarkTheme(): boolean {
  return document.documentElement.classList.contains('dark')
}

// 格式化文件大小
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 检查是否为有效的邮箱
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// 获取设备类型
export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  const width = window.innerWidth
  
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

// 颜色转换工具
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

// 获取对比文本颜色
export function getContrastTextColor(backgroundColor: string): 'white' | 'black' {
  const rgb = hexToRgb(backgroundColor)
  if (!rgb) return 'black'
  
  // 计算亮度
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
  return brightness > 128 ? 'black' : 'white'
}

// 深拷贝
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime()) as any
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as any
  if (typeof obj === 'object') {
    const clonedObj = {} as any
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }
  return obj
}

// 等待指定时间
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
} 