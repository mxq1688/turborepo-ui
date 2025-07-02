# Input 输入框

用于获取用户输入的文本输入组件，支持多种类型和状态。

## 基础用法

最基本的输入框使用方式。

### Vue 示例

```vue
<template>
  <div class="demo-container">
    <Input v-model="inputValue" placeholder="请输入内容" />
    <p>输入的值: {{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@ui-lib/ui-vue'

const inputValue = ref('')
</script>
```

### React 示例

```tsx
import { useState } from 'react'
import { Input } from '@ui-lib/ui-react'

function Demo() {
  const [inputValue, setInputValue] = useState('')
  
  return (
    <div className="demo-container">
      <Input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="请输入内容" 
      />
      <p>输入的值: {inputValue}</p>
    </div>
  )
}
```

## 不同类型

支持多种输入类型。

```vue
<template>
  <div class="demo-container">
    <Input type="text" placeholder="文本输入" />
    <Input type="password" placeholder="密码输入" />
    <Input type="email" placeholder="邮箱输入" />
    <Input type="number" placeholder="数字输入" />
    <Input type="search" placeholder="搜索输入" />
  </div>
</template>
```

## 尺寸大小

提供三种不同的尺寸大小。

```vue
<template>
  <div class="demo-container">
    <Input size="sm" placeholder="小尺寸" />
    <Input size="md" placeholder="中等尺寸（默认）" />
    <Input size="lg" placeholder="大尺寸" />
  </div>
</template>
```

## 输入框状态

支持不同的输入状态。

```vue
<template>
  <div class="demo-container">
    <Input placeholder="普通状态" />
    <Input placeholder="禁用状态" disabled />
    <Input placeholder="只读状态" readonly />
    <Input placeholder="错误状态" error />
    <Input placeholder="成功状态" success />
  </div>
</template>
```

## 带图标

可以在输入框前后添加图标。

```vue
<template>
  <div class="demo-container">
    <Input 
      placeholder="带前缀图标" 
      prefix-icon="search" 
    />
    <Input 
      placeholder="带后缀图标" 
      suffix-icon="clear" 
    />
    <Input 
      placeholder="前后都有图标" 
      prefix-icon="user" 
      suffix-icon="eye" 
    />
  </div>
</template>
```

## 文本域

支持多行文本输入。

```vue
<template>
  <div class="demo-container">
    <Input 
      type="textarea" 
      placeholder="请输入多行文本" 
      rows="4" 
    />
    <Input 
      type="textarea" 
      placeholder="自动调整高度" 
      autosize 
    />
  </div>
</template>
```

## 字符限制

可以限制输入字符数量并显示计数。

```vue
<template>
  <div class="demo-container">
    <Input 
      v-model="limitValue"
      placeholder="最多输入20个字符" 
      maxlength="20"
      show-count 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const limitValue = ref('')
</script>
```

## API 参数

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value / v-model | 输入框的值 | `string` | - |
| type | 输入框类型 | `'text' \| 'password' \| 'email' \| 'number' \| 'search' \| 'textarea'` | `'text'` |
| placeholder | 占位符文本 | `string` | - |
| size | 输入框尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| error | 是否显示错误状态 | `boolean` | `false` |
| success | 是否显示成功状态 | `boolean` | `false` |
| prefixIcon | 前缀图标 | `string` | - |
| suffixIcon | 后缀图标 | `string` | - |
| maxlength | 最大输入长度 | `number` | - |
| showCount | 是否显示字符计数 | `boolean` | `false` |
| rows | 文本域行数 | `number` | `2` |
| autosize | 是否自适应高度 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| input | 输入时触发 | `(value: string)` |
| change | 值改变时触发 | `(value: string)` |
| focus | 获得焦点时触发 | `(event: FocusEvent)` |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |
| clear | 点击清空按钮时触发 | - |

### Slots

| 插槽名 | 说明 |
|--------|------|
| prefix | 前缀内容 |
| suffix | 后缀内容 |

## 主题定制

可以通过 CSS 变量自定义样式：

```css
.ui-input {
  --input-border-color: #d1d5db;
  --input-border-radius: 6px;
  --input-padding: 8px 12px;
  --input-font-size: 14px;
  --input-height: 36px;
  --input-focus-color: #3b82f6;
  --input-error-color: #ef4444;
  --input-success-color: #10b981;
}
```

## 无障碍访问

- 支持键盘导航
- 提供适当的 ARIA 标签
- 支持屏幕阅读器
- 错误状态提供语义化提示 