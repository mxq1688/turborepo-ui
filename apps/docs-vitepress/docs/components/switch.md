# Switch 开关

用于切换两个相对的状态的开关组件。

## 基础用法

基本的开关使用方式。

### Vue 示例

```vue
<template>
  <div class="demo-container">
    <Switch v-model="switchValue" />
    <p>开关状态: {{ switchValue ? '开启' : '关闭' }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch } from '@ui-lib/ui-vue'

const switchValue = ref(false)
</script>
```

### React 示例

```tsx
import { useState } from 'react'
import { Switch } from '@ui-lib/ui-react'

function Demo() {
  const [switchValue, setSwitchValue] = useState(false)
  
  return (
    <div className="demo-container">
      <Switch 
        checked={switchValue} 
        onChange={setSwitchValue}
      />
      <p>开关状态: {switchValue ? '开启' : '关闭'}</p>
    </div>
  )
}
```

## 带文字的开关

显示开关状态文字。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Switch v-model="textSwitch1" active-text="开启" inactive-text="关闭" />
      <Switch v-model="textSwitch2" active-text="ON" inactive-text="OFF" />
      <Switch v-model="textSwitch3" active-text="是" inactive-text="否" />
    </div>
  </div>
</template>

<script setup>
const textSwitch1 = ref(true)
const textSwitch2 = ref(false)
const textSwitch3 = ref(true)
</script>
```

## 禁用状态

禁用的开关。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Switch disabled />
      <Switch disabled checked />
      <Switch disabled active-text="禁用" />
      <Switch disabled checked active-text="禁用且开启" />
    </div>
  </div>
</template>
```

## 不同尺寸

提供三种不同的尺寸。

```vue
<template>
  <div class="demo-container">
    <div class="flex items-center space-x-4">
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </div>
  </div>
</template>
```

## 自定义颜色

自定义开关的颜色主题。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Switch v-model="colorSwitch1" color="primary" active-text="主要色" />
      <Switch v-model="colorSwitch2" color="success" active-text="成功色" />
      <Switch v-model="colorSwitch3" color="warning" active-text="警告色" />
      <Switch v-model="colorSwitch4" color="danger" active-text="危险色" />
    </div>
  </div>
</template>

<script setup>
const colorSwitch1 = ref(true)
const colorSwitch2 = ref(true)
const colorSwitch3 = ref(true)
const colorSwitch4 = ref(true)
</script>
```

## 自定义值

可以指定开关的值。

```vue
<template>
  <div class="demo-container">
    <Switch 
      v-model="customValue" 
      active-value="on" 
      inactive-value="off"
      active-text="开启"
      inactive-text="关闭"
    />
    <p class="mt-4">当前值: {{ customValue }}</p>
  </div>
</template>

<script setup>
const customValue = ref('off')
</script>
```

## 带图标的开关

在开关中显示图标。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Switch 
        v-model="iconSwitch1"
        active-icon="check"
        inactive-icon="close"
      />
      
      <Switch 
        v-model="iconSwitch2"
        active-icon="sun"
        inactive-icon="moon"
        active-text="白天"
        inactive-text="夜晚"
      />
      
      <Switch 
        v-model="iconSwitch3"
        active-icon="volume-up"
        inactive-icon="volume-mute"
        active-text="音响开启"
        inactive-text="静音"
      />
    </div>
  </div>
</template>

<script setup>
const iconSwitch1 = ref(true)
const iconSwitch2 = ref(false)
const iconSwitch3 = ref(true)
</script>
```

## 加载状态

显示加载状态的开关。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Switch v-model="loadingSwitch1" loading />
      <Switch v-model="loadingSwitch2" loading active-text="保存中..." />
      
      <div class="flex items-center space-x-2">
        <Switch v-model="asyncSwitch" :loading="asyncLoading" @change="handleAsyncChange" />
        <span>异步切换</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loadingSwitch1 = ref(false)
const loadingSwitch2 = ref(true)
const asyncSwitch = ref(false)
const asyncLoading = ref(false)

const handleAsyncChange = (value) => {
  asyncLoading.value = true
  
  // 模拟异步操作
  setTimeout(() => {
    asyncSwitch.value = value
    asyncLoading.value = false
  }, 1000)
}
</script>
```

## 确认切换

切换前显示确认对话框。

```vue
<template>
  <div class="demo-container">
    <Switch 
      v-model="confirmSwitch"
      @before-change="handleBeforeChange"
      active-text="需要确认"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const confirmSwitch = ref(false)

const handleBeforeChange = () => {
  return new Promise((resolve, reject) => {
    const confirmed = confirm('确定要切换开关状态吗？')
    if (confirmed) {
      resolve(true)
    } else {
      reject(false)
    }
  })
}
</script>
```

## 表单中的开关

在表单中使用开关。

```vue
<template>
  <div class="demo-container">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="form-item">
        <label class="form-label">接收邮件通知</label>
        <Switch v-model="formData.emailNotification" />
      </div>
      
      <div class="form-item">
        <label class="form-label">接收短信通知</label>
        <Switch v-model="formData.smsNotification" />
      </div>
      
      <div class="form-item">
        <label class="form-label">启用双重验证</label>
        <Switch v-model="formData.twoFactorAuth" />
      </div>
      
      <Button type="submit" variant="primary">保存设置</Button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  emailNotification: true,
  smsNotification: false,
  twoFactorAuth: true
})

const handleSubmit = () => {
  console.log('表单数据:', formData.value)
}
</script>
```

## API 参数

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value / v-model | 绑定值 | `boolean \| string \| number` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否显示加载状态 | `boolean` | `false` |
| size | 开关大小 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| color | 开关颜色 | `'primary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` |
| activeText | 开启时的文字描述 | `string` | - |
| inactiveText | 关闭时的文字描述 | `string` | - |
| activeValue | 开启时的值 | `boolean \| string \| number` | `true` |
| inactiveValue | 关闭时的值 | `boolean \| string \| number` | `false` |
| activeIcon | 开启时的图标 | `string` | - |
| inactiveIcon | 关闭时的图标 | `string` | - |
| name | 原生name属性 | `string` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 开关状态发生变化时触发 | `(value: boolean \| string \| number)` |
| beforeChange | 开关状态改变前触发，返回false或Promise.reject则阻止切换 | `(value: boolean \| string \| number)` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| activeText | 开启状态文本内容 |
| inactiveText | 关闭状态文本内容 |

## 主题定制

可以通过 CSS 变量自定义样式：

```css
.ui-switch {
  --switch-width: 44px;
  --switch-height: 24px;
  --switch-border-radius: 12px;
  --switch-padding: 2px;
  --switch-bg-inactive: #d1d5db;
  --switch-bg-active: #3b82f6;
  --switch-thumb-size: 20px;
  --switch-thumb-bg: #ffffff;
  --switch-thumb-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --switch-transition: all 0.2s ease;
  --switch-disabled-opacity: 0.5;
}
```

## 无障碍访问

- 支持键盘导航（空格键切换状态）
- 提供适当的 ARIA 标签和角色
- 支持屏幕阅读器
- 焦点状态清晰可见
- 提供状态变化的音频反馈 