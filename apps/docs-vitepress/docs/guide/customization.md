# 深度定制

了解如何进行高级定制，创建符合您品牌特色的组件库。

## 自定义组件

### 创建新组件

基于现有组件创建自定义组件：

```vue
<!-- CustomButton.vue -->
<template>
  <Button 
    :class="customClass"
    v-bind="$attrs"
    @click="handleClick"
  >
    <Icon v-if="icon" :name="icon" />
    <slot />
  </Button>
</template>

<script setup>
import { computed } from 'vue'
import { Button, Icon } from '@ui-lib/ui-vue'

interface Props {
  variant?: 'gradient' | 'neon' | 'glass'
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'gradient'
})

const customClass = computed(() => [
  'custom-button',
  `custom-button--${props.variant}`
])

const handleClick = (event) => {
  // 自定义点击逻辑
  console.log('Custom button clicked')
}
</script>

<style scoped>
.custom-button--gradient {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
}

.custom-button--neon {
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  box-shadow: 0 0 10px #00ffff;
}

.custom-button--glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
```

### 扩展现有组件

```typescript
// 扩展Table组件
import { Table as BaseTable } from '@ui-lib/ui-vue'

export const EnhancedTable = defineComponent({
  name: 'EnhancedTable',
  extends: BaseTable,
  props: {
    ...BaseTable.props,
    autoRefresh: {
      type: Boolean,
      default: false
    },
    refreshInterval: {
      type: Number,
      default: 5000
    }
  },
  setup(props, ctx) {
    // 添加自动刷新功能
    if (props.autoRefresh) {
      setInterval(() => {
        ctx.emit('refresh')
      }, props.refreshInterval)
    }
    
    return {}
  }
})
```

## 主题系统扩展

### 自定义设计令牌

```css
:root {
  /* 品牌色系 */
  --brand-primary: #1a365d;
  --brand-secondary: #2d3748;
  --brand-accent: #ed8936;
  
  /* 自定义间距 */
  --spacing-xs: 2px;
  --spacing-sm: 4px;
  --spacing-md: 8px;
  --spacing-lg: 16px;
  --spacing-xl: 32px;
  --spacing-2xl: 64px;
  
  /* 自定义圆角 */
  --radius-sharp: 0;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* 自定义阴影 */
  --shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-large: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-dramatic: 0 25px 50px rgba(0, 0, 0, 0.25);
}
```

### 动态主题切换

```typescript
// theme-manager.ts
export class ThemeManager {
  private currentTheme = 'light'
  private customThemes: Record<string, any> = {}
  
  setTheme(themeName: string) {
    this.currentTheme = themeName
    this.applyTheme(themeName)
  }
  
  registerTheme(name: string, theme: any) {
    this.customThemes[name] = theme
  }
  
  private applyTheme(themeName: string) {
    const theme = this.customThemes[themeName]
    if (!theme) return
    
    const root = document.documentElement
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value as string)
    })
  }
}

// 使用
const themeManager = new ThemeManager()

themeManager.registerTheme('corporate', {
  'primary-color': '#003366',
  'secondary-color': '#f8f9fa',
  'border-radius': '2px'
})

themeManager.setTheme('corporate')
```

## 国际化扩展

### 自定义语言包

```typescript
// locales/custom-zh.ts
export default {
  component: {
    table: {
      emptyText: '暂无数据，请稍后重试',
      loading: '数据加载中，请耐心等待...'
    },
    upload: {
      dragText: '将文件拖拽到此处或点击上传',
      buttonText: '选择文件'
    }
  },
  validation: {
    required: '此字段为必填项',
    email: '请输入正确的邮箱格式',
    minLength: '输入内容不能少于{min}个字符'
  }
}
```

## 插件系统

### 创建插件

```typescript
// plugins/analytics.ts
export interface AnalyticsConfig {
  trackingId: string
  enableAutoTracking?: boolean
}

export function createAnalyticsPlugin(config: AnalyticsConfig) {
  return {
    install(app: App) {
      // 全局属性
      app.config.globalProperties.$analytics = {
        track: (event: string, data?: any) => {
          console.log('Analytics:', event, data)
        }
      }
      
      // 全局指令
      app.directive('track', {
        mounted(el, binding) {
          el.addEventListener('click', () => {
            console.log('Tracked:', binding.value)
          })
        }
      })
    }
  }
}

// 使用插件
import { createApp } from 'vue'
import { createAnalyticsPlugin } from './plugins/analytics'

const app = createApp(App)
app.use(createAnalyticsPlugin({
  trackingId: 'GA-XXXXXXXXX'
}))
```

### 组件插件

```typescript
// plugins/components.ts
import type { Component } from 'vue'

export interface ComponentPluginOptions {
  prefix?: string
  components?: Record<string, Component>
}

export function createComponentPlugin(options: ComponentPluginOptions = {}) {
  const { prefix = 'UI', components = {} } = options
  
  return {
    install(app: App) {
      // 自动注册组件
      Object.entries(components).forEach(([name, component]) => {
        app.component(`${prefix}${name}`, component)
      })
    }
  }
}
```

## 构建配置优化

### 按需加载配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 分离组件库代码
          'ui-core': ['@ui-lib/ui-vue/core'],
          'ui-components': ['@ui-lib/ui-vue/components'],
          'ui-utils': ['@ui-lib/ui-vue/utils']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['@ui-lib/ui-vue']
  }
})
```

### Tree-shaking 优化

```typescript
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@ui-lib/ui-vue',
        libraryDirectory: 'es',
        style: true
      },
      'ui-vue'
    ]
  ]
}
```

## 性能优化

### 虚拟滚动

```vue
<!-- VirtualList.vue -->
<template>
  <div class="virtual-list" :style="{ height: containerHeight + 'px' }">
    <div 
      class="virtual-list-phantom" 
      :style="{ height: totalHeight + 'px' }"
    ></div>
    <div 
      class="virtual-list-content" 
      :style="{ transform: `translateY(${startOffset}px)` }"
    >
      <div
        v-for="item in visibleData"
        :key="item.id"
        class="virtual-list-item"
        :style="{ height: itemHeight + 'px' }"
      >
        <slot :item="item" :index="item.index" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'

interface Props {
  data: any[]
  itemHeight: number
  containerHeight: number
  buffer?: number
}

const props = withDefaults(defineProps<Props>(), {
  buffer: 5
})

const scrollTop = ref(0)

const totalHeight = computed(() => props.data.length * props.itemHeight)

const visibleCount = computed(() => 
  Math.ceil(props.containerHeight / props.itemHeight)
)

const startIndex = computed(() => 
  Math.max(0, Math.floor(scrollTop.value / props.itemHeight) - props.buffer)
)

const endIndex = computed(() => 
  Math.min(props.data.length, startIndex.value + visibleCount.value + props.buffer * 2)
)

const visibleData = computed(() => 
  props.data.slice(startIndex.value, endIndex.value).map((item, index) => ({
    ...item,
    index: startIndex.value + index
  }))
)

const startOffset = computed(() => startIndex.value * props.itemHeight)
</script>
```

### 懒加载组件

```typescript
// lazy-components.ts
import { defineAsyncComponent } from 'vue'

export const LazyTable = defineAsyncComponent({
  loader: () => import('@ui-lib/ui-vue/Table'),
  loadingComponent: () => h('div', '加载中...'),
  errorComponent: () => h('div', '加载失败'),
  delay: 200,
  timeout: 3000
})
```

## 测试和调试

### 组件测试

```typescript
// tests/Button.test.ts
import { mount } from '@vue/test-utils'
import { Button } from '@ui-lib/ui-vue'

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' },
      slots: { default: 'Click me' }
    })
    
    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.classes()).toContain('ui-button--primary')
  })
  
  it('emits click event', async () => {
    const wrapper = mount(Button)
    
    await wrapper.trigger('click')
    
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
```

### 性能监控

```typescript
// performance-monitor.ts
export class PerformanceMonitor {
  static measureComponentRender(componentName: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
      const originalMethod = descriptor.value
      
      descriptor.value = function (...args: any[]) {
        const start = performance.now()
        const result = originalMethod.apply(this, args)
        const end = performance.now()
        
        console.log(`${componentName}.${propertyKey} took ${end - start}ms`)
        return result
      }
    }
  }
}

// 使用
class CustomComponent {
  @PerformanceMonitor.measureComponentRender('CustomComponent')
  render() {
    // 渲染逻辑
  }
}
```

通过这些深度定制技巧，您可以构建完全符合需求的组件库！ 