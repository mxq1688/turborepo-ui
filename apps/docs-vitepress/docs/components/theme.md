# Theme 主题定制

提供完整的主题定制系统，支持深色模式、颜色主题和样式变量自定义。

## 基础用法

### 主题提供者

使用主题提供者包装你的应用，提供主题上下文。

#### Vue 示例

```vue
<template>
  <ThemeProvider :theme="theme">
    <div class="app">
      <Button @click="toggleTheme">切换主题</Button>
      <Card>
        <CardContent>
          <p>当前主题: {{ theme }}</p>
        </CardContent>
      </Card>
    </div>
  </ThemeProvider>
</template>

<script setup>
import { ref } from 'vue'
import { ThemeProvider, Button, Card, CardContent } from '@ui-lib/ui-vue'

const theme = ref('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
```

#### React 示例

```tsx
import { useState } from 'react'
import { ThemeProvider, Button, Card, CardContent } from '@ui-lib/ui-react'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Button onClick={toggleTheme}>切换主题</Button>
        <Card>
          <CardContent>
            <p>当前主题: {theme}</p>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  )
}
```

## 深色模式

### 自动切换

支持根据系统设置自动切换深色模式。

```vue
<template>
  <ThemeProvider :theme="theme" :auto-dark="true">
    <div class="demo-container">
      <div class="theme-controls">
        <Button @click="setTheme('light')">浅色模式</Button>
        <Button @click="setTheme('dark')">深色模式</Button>
        <Button @click="setTheme('auto')">跟随系统</Button>
      </div>
      
      <Card class="mt-4">
        <CardHeader>
          <CardTitle>主题演示</CardTitle>
        </CardHeader>
        <CardContent>
          <p>这是{{ theme }}模式下的内容展示。</p>
          <Alert type="info">
            当前主题会影响所有组件的外观。
          </Alert>
        </CardContent>
      </Card>
    </div>
  </ThemeProvider>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('auto')

const setTheme = (newTheme) => {
  theme.value = newTheme
}
</script>
```

### 主题检测

使用useTheme钩子获取当前主题信息。

#### Vue 示例

```vue
<template>
  <div class="demo-container">
    <div class="theme-info">
      <Badge :type="isDark ? 'dark' : 'light'">
        {{ isDark ? '深色模式' : '浅色模式' }}
      </Badge>
      <p>系统主题: {{ systemTheme }}</p>
      <p>当前主题: {{ theme }}</p>
    </div>
    
    <Button @click="toggleTheme" :icon="isDark ? 'sun' : 'moon'">
      切换到{{ isDark ? '浅色' : '深色' }}模式
    </Button>
  </div>
</template>

<script setup>
import { useTheme } from '@ui-lib/ui-vue'

const { theme, isDark, systemTheme, toggleTheme, setTheme } = useTheme()
</script>
```

#### React 示例

```tsx
import { useTheme } from '@ui-lib/ui-react'

function ThemeExample() {
  const { theme, isDark, systemTheme, toggleTheme, setTheme } = useTheme()

  return (
    <div className="demo-container">
      <div className="theme-info">
        <Badge type={isDark ? 'dark' : 'light'}>
          {isDark ? '深色模式' : '浅色模式'}
        </Badge>
        <p>系统主题: {systemTheme}</p>
        <p>当前主题: {theme}</p>
      </div>
      
      <Button 
        onClick={toggleTheme} 
        icon={isDark ? 'sun' : 'moon'}
      >
        切换到{isDark ? '浅色' : '深色'}模式
      </Button>
    </div>
  )
}
```

## 颜色主题

### 预设主题

提供多种预设的颜色主题。

```vue
<template>
  <div class="demo-container">
    <div class="theme-selector">
      <h3>选择颜色主题</h3>
      <div class="theme-options">
        <div 
          v-for="themeOption in themeOptions" 
          :key="themeOption.name"
          class="theme-option"
          :class="{ active: currentTheme === themeOption.name }"
          @click="setColorTheme(themeOption.name)"
        >
          <div 
            class="theme-preview" 
            :style="{ backgroundColor: themeOption.primary }"
          ></div>
          <span>{{ themeOption.label }}</span>
        </div>
      </div>
    </div>
    
    <div class="theme-demo">
      <Button type="primary">主要按钮</Button>
      <Button type="secondary">次要按钮</Button>
      <Alert type="success">成功提示</Alert>
      <Badge>{{ currentTheme }}</Badge>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from '@ui-lib/ui-vue'

const { setColorTheme, currentTheme } = useTheme()

const themeOptions = [
  { name: 'default', label: '默认蓝色', primary: '#3b82f6' },
  { name: 'green', label: '清新绿色', primary: '#10b981' },
  { name: 'purple', label: '优雅紫色', primary: '#8b5cf6' },
  { name: 'red', label: '活力红色', primary: '#ef4444' },
  { name: 'orange', label: '温暖橙色', primary: '#f59e0b' },
  { name: 'pink', label: '浪漫粉色', primary: '#ec4899' }
]
</script>

<style scoped>
.theme-options {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.theme-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.theme-option:hover {
  border-color: #d1d5db;
}

.theme-option.active {
  border-color: var(--primary-color);
}

.theme-preview {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
```

### 自定义主题

创建完全自定义的主题配置。

```vue
<template>
  <div class="demo-container">
    <div class="custom-theme-editor">
      <h3>自定义主题</h3>
      
      <div class="color-inputs">
        <div class="color-input">
          <label>主色调</label>
          <input 
            type="color" 
            v-model="customColors.primary"
            @change="updateCustomTheme"
          />
        </div>
        
        <div class="color-input">
          <label>成功色</label>
          <input 
            type="color" 
            v-model="customColors.success"
            @change="updateCustomTheme"
          />
        </div>
        
        <div class="color-input">
          <label>警告色</label>
          <input 
            type="color" 
            v-model="customColors.warning"
            @change="updateCustomTheme"
          />
        </div>
        
        <div class="color-input">
          <label>危险色</label>
          <input 
            type="color" 
            v-model="customColors.danger"
            @change="updateCustomTheme"
          />
        </div>
      </div>
      
      <Button @click="applyCustomTheme">应用自定义主题</Button>
      <Button @click="resetTheme" variant="outline">重置主题</Button>
    </div>
    
    <div class="theme-preview-section">
      <h4>预览效果</h4>
      <div class="component-preview">
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
      </div>
      
      <Alert type="info">这是信息提示</Alert>
      <Alert type="success">这是成功提示</Alert>
      <Alert type="warning">这是警告提示</Alert>
      <Alert type="danger">这是错误提示</Alert>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from '@ui-lib/ui-vue'

const { setCustomTheme, resetTheme } = useTheme()

const customColors = ref({
  primary: '#3b82f6',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444'
})

const updateCustomTheme = () => {
  // 实时预览
  setCustomTheme({
    colors: customColors.value
  })
}

const applyCustomTheme = () => {
  setCustomTheme({
    colors: customColors.value,
    persist: true // 持久化保存
  })
}
</script>
```

## CSS 变量定制

### 根级变量

通过CSS变量进行深度定制。

```css
:root {
  /* 主色系 */
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-900: #1e3a8a;
  
  /* 中性色系 */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-500: #6b7280;
  --gray-900: #111827;
  
  /* 语义色系 */
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --danger-color: #ef4444;
  --info-color: #3b82f6;
  
  /* 组件变量 */
  --border-radius: 6px;
  --border-radius-lg: 8px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  
  /* 字体 */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  
  /* 阴影 */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* 深色模式 */
[data-theme="dark"] {
  --primary-50: #1e3a8a;
  --primary-100: #1e40af;
  --primary-500: #3b82f6;
  --primary-600: #60a5fa;
  --primary-900: #dbeafe;
  
  --gray-50: #111827;
  --gray-100: #1f2937;
  --gray-500: #9ca3af;
  --gray-900: #f9fafb;
  
  /* 背景色 */
  --bg-primary: #111827;
  --bg-secondary: #1f2937;
  --bg-tertiary: #374151;
  
  /* 文字色 */
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --text-tertiary: #9ca3af;
}
```

### 组件级定制

针对特定组件进行样式定制。

```css
/* 按钮组件定制 */
.ui-button {
  --button-border-radius: var(--border-radius);
  --button-padding-x: var(--spacing-md);
  --button-padding-y: var(--spacing-sm);
  --button-font-weight: 500;
  --button-transition: all 0.2s ease;
}

.ui-button--primary {
  --button-bg: var(--primary-500);
  --button-bg-hover: var(--primary-600);
  --button-text: white;
  --button-border: var(--primary-500);
}

/* 输入框组件定制 */
.ui-input {
  --input-border-radius: var(--border-radius);
  --input-border-color: var(--gray-300);
  --input-border-color-focus: var(--primary-500);
  --input-bg: white;
  --input-text: var(--gray-900);
  --input-placeholder: var(--gray-500);
  --input-padding: var(--spacing-sm) var(--spacing-md);
}

/* 卡片组件定制 */
.ui-card {
  --card-bg: white;
  --card-border: 1px solid var(--gray-200);
  --card-border-radius: var(--border-radius-lg);
  --card-shadow: var(--shadow-sm);
  --card-padding: var(--spacing-lg);
}
```

## 主题配置

### 完整配置示例

```typescript
// theme.config.ts
export const themeConfig = {
  // 默认主题
  defaultTheme: 'light',
  
  // 是否启用自动深色模式
  autoDark: true,
  
  // 主题持久化
  persistence: {
    enabled: true,
    key: 'ui-theme',
    storage: 'localStorage' // or 'sessionStorage'
  },
  
  // 颜色主题
  themes: {
    light: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        },
        gray: {
          50: '#f9fafb',
          500: '#6b7280',
          900: '#111827'
        }
      }
    },
    dark: {
      colors: {
        primary: {
          50: '#1e3a8a',
          500: '#3b82f6',
          900: '#dbeafe'
        },
        gray: {
          50: '#111827',
          500: '#9ca3af',
          900: '#f9fafb'
        }
      }
    }
  },
  
  // 组件默认属性
  components: {
    Button: {
      defaultProps: {
        size: 'md',
        variant: 'primary'
      }
    },
    Input: {
      defaultProps: {
        size: 'md'
      }
    }
  }
}
```

### 应用主题配置

#### Vue 应用

```typescript
// main.ts
import { createApp } from 'vue'
import { createTheme } from '@ui-lib/ui-vue'
import { themeConfig } from './theme.config'
import App from './App.vue'

const theme = createTheme(themeConfig)
const app = createApp(App)

app.use(theme)
app.mount('#app')
```

#### React 应用

```tsx
// main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@ui-lib/ui-react'
import { themeConfig } from './theme.config'
import App from './App'

const theme = createTheme(themeConfig)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
```

## API 参考

### ThemeProvider

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| theme | 当前主题 | `'light' \| 'dark' \| 'auto'` | `'light'` |
| colorTheme | 颜色主题名称 | `string` | `'default'` |
| autoDark | 是否自动深色模式 | `boolean` | `false` |
| config | 主题配置 | `ThemeConfig` | - |

### useTheme Hook

```typescript
interface UseThemeReturn {
  // 当前主题
  theme: 'light' | 'dark' | 'auto'
  // 是否为深色模式
  isDark: boolean
  // 系统主题
  systemTheme: 'light' | 'dark'
  // 当前颜色主题
  colorTheme: string
  
  // 方法
  setTheme: (theme: 'light' | 'dark' | 'auto') => void
  toggleTheme: () => void
  setColorTheme: (theme: string) => void
  setCustomTheme: (config: CustomThemeConfig) => void
  resetTheme: () => void
}
```

### 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| themeChange | 主题改变时触发 | `(theme: string) => void` |
| colorThemeChange | 颜色主题改变时触发 | `(colorTheme: string) => void` |

## 最佳实践

### 1. 主题一致性

确保在整个应用中保持主题的一致性。

```vue
<!-- 推荐：使用主题提供者 -->
<ThemeProvider :theme="globalTheme">
  <Router />
</ThemeProvider>

<!-- 不推荐：在组件内部硬编码主题 -->
<Button class="dark-button">按钮</Button>
```

### 2. 响应式主题

监听系统主题变化，提供更好的用户体验。

```typescript
// 推荐：响应式主题
const { theme, setTheme } = useTheme()

// 监听系统主题变化
watchEffect(() => {
  if (theme.value === 'auto') {
    // 自动应用系统主题
  }
})
```

### 3. 主题持久化

保存用户的主题偏好。

```typescript
// 推荐：持久化主题设置
const themeConfig = {
  persistence: {
    enabled: true,
    key: 'user-theme-preference'
  }
}
```

## 故障排除

### 常见问题

1. **主题切换不生效**
   - 确保ThemeProvider正确包装了应用
   - 检查CSS变量是否正确定义

2. **深色模式样式异常**
   - 验证深色模式的CSS变量定义
   - 检查组件是否使用了硬编码颜色

3. **自定义主题不生效**
   - 确保CSS变量的优先级正确
   - 检查主题配置是否正确传递

### 调试工具

使用浏览器开发者工具查看CSS变量：

```css
/* 在控制台中查看当前主题变量 */
getComputedStyle(document.documentElement).getPropertyValue('--primary-500')
``` 