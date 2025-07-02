# Radio 单选框

用于在多个选项中选择单个值的组件。

## 基础用法

单个单选框的基本使用。

### Vue 示例

```vue
<template>
  <div class="demo-container">
    <Radio v-model="selected" value="option1">选项 1</Radio>
    <p>选中的值: {{ selected }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Radio } from '@ui-lib/ui-vue'

const selected = ref('')
</script>
```

### React 示例

```tsx
import { useState } from 'react'
import { Radio } from '@ui-lib/ui-react'

function Demo() {
  const [selected, setSelected] = useState('')
  
  return (
    <div className="demo-container">
      <Radio 
        checked={selected === 'option1'} 
        onChange={() => setSelected('option1')}
        value="option1"
      >
        选项 1
      </Radio>
      <p>选中的值: {selected}</p>
    </div>
  )
}
```

## 单选框组

多个选项的单选框组。

```vue
<template>
  <div class="demo-container">
    <RadioGroup v-model="selectedValue">
      <Radio value="apple">苹果</Radio>
      <Radio value="banana">香蕉</Radio>
      <Radio value="orange">橘子</Radio>
      <Radio value="grape">葡萄</Radio>
    </RadioGroup>
    <p class="mt-4">选中的水果: {{ selectedValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, Radio } from '@ui-lib/ui-vue'

const selectedValue = ref('apple')
</script>
```

## 配置式用法

通过配置数组创建单选框组。

```vue
<template>
  <div class="demo-container">
    <RadioGroup v-model="size" :options="sizeOptions" />
    <p class="mt-4">选中的尺寸: {{ size }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const size = ref('medium')
const sizeOptions = [
  { label: '小号', value: 'small' },
  { label: '中号', value: 'medium' },
  { label: '大号', value: 'large' },
  { label: '特大号', value: 'xlarge' }
]
</script>
```

## 禁用状态

禁用的单选框。

```vue
<template>
  <div class="demo-container">
    <RadioGroup v-model="disabledValue">
      <Radio value="normal">正常选项</Radio>
      <Radio value="disabled" disabled>禁用选项</Radio>
      <Radio value="selected" disabled>禁用且选中</Radio>
    </RadioGroup>
  </div>
</template>

<script setup>
const disabledValue = ref('selected')
</script>
```

## 不同尺寸

提供三种不同的尺寸。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <div>
        <h4>小尺寸</h4>
        <RadioGroup v-model="smallValue" size="sm">
          <Radio value="1">选项 1</Radio>
          <Radio value="2">选项 2</Radio>
        </RadioGroup>
      </div>
      
      <div>
        <h4>中等尺寸（默认）</h4>
        <RadioGroup v-model="mediumValue" size="md">
          <Radio value="1">选项 1</Radio>
          <Radio value="2">选项 2</Radio>
        </RadioGroup>
      </div>
      
      <div>
        <h4>大尺寸</h4>
        <RadioGroup v-model="largeValue" size="lg">
          <Radio value="1">选项 1</Radio>
          <Radio value="2">选项 2</Radio>
        </RadioGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
const smallValue = ref('1')
const mediumValue = ref('1')
const largeValue = ref('1')
</script>
```

## 按钮样式

按钮样式的单选框组。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <div>
        <h4>按钮样式</h4>
        <RadioGroup v-model="buttonValue" type="button">
          <Radio value="left">左对齐</Radio>
          <Radio value="center">居中对齐</Radio>
          <Radio value="right">右对齐</Radio>
          <Radio value="justify">两端对齐</Radio>
        </RadioGroup>
      </div>
      
      <div>
        <h4>按钮样式（禁用部分选项）</h4>
        <RadioGroup v-model="buttonValue2" type="button">
          <Radio value="edit">编辑</Radio>
          <Radio value="preview">预览</Radio>
          <Radio value="code" disabled>代码</Radio>
        </RadioGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
const buttonValue = ref('left')
const buttonValue2 = ref('preview')
</script>
```

## 垂直布局

垂直排列的单选框组。

```vue
<template>
  <div class="demo-container">
    <RadioGroup v-model="verticalValue" direction="vertical">
      <Radio value="option1">
        <div>
          <div class="font-medium">选项 1</div>
          <div class="text-sm text-gray-500">这是选项 1 的描述</div>
        </div>
      </Radio>
      <Radio value="option2">
        <div>
          <div class="font-medium">选项 2</div>
          <div class="text-sm text-gray-500">这是选项 2 的描述</div>
        </div>
      </Radio>
      <Radio value="option3">
        <div>
          <div class="font-medium">选项 3</div>
          <div class="text-sm text-gray-500">这是选项 3 的描述</div>
        </div>
      </Radio>
    </RadioGroup>
  </div>
</template>

<script setup>
const verticalValue = ref('option1')
</script>
```

## 水平布局

水平排列的单选框组。

```vue
<template>
  <div class="demo-container">
    <RadioGroup v-model="horizontalValue" direction="horizontal">
      <Radio value="male">男</Radio>
      <Radio value="female">女</Radio>
      <Radio value="other">其他</Radio>
    </RadioGroup>
  </div>
</template>

<script setup>
const horizontalValue = ref('male')
</script>
```

## API 参数

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| checked / v-model | 是否选中 | `boolean` | `false` |
| value | 选项值 | `string \| number \| boolean` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 尺寸大小 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| name | 原生name属性 | `string` | - |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value / v-model | 选中的值 | `string \| number \| boolean` | - |
| options | 配置选项数组 | `RadioOption[]` | `[]` |
| direction | 排列方向 | `'horizontal' \| 'vertical'` | `'vertical'` |
| type | 显示类型 | `'radio' \| 'button'` | `'radio'` |
| disabled | 是否禁用整个组 | `boolean` | `false` |
| size | 尺寸大小 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| name | 原生name属性 | `string` | - |

### RadioOption Interface

```typescript
interface RadioOption {
  label: string
  value: string | number | boolean
  disabled?: boolean
}
```

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 选中状态改变时触发 | `(value: string \| number \| boolean)` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 单选框文本内容 |

## 主题定制

可以通过 CSS 变量自定义样式：

```css
.ui-radio {
  --radio-size: 16px;
  --radio-border-color: #d1d5db;
  --radio-checked-bg: #3b82f6;
  --radio-checked-border: #3b82f6;
  --radio-disabled-bg: #f3f4f6;
  --radio-disabled-color: #9ca3af;
  --radio-focus-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.ui-radio-button {
  --radio-button-bg: #ffffff;
  --radio-button-border: #d1d5db;
  --radio-button-checked-bg: #3b82f6;
  --radio-button-checked-color: #ffffff;
  --radio-button-hover-bg: #f3f4f6;
}
```

## 无障碍访问

- 支持键盘导航（方向键切换选项）
- 提供适当的 ARIA 标签
- 支持屏幕阅读器
- 焦点状态清晰可见
- 同一组内只能选择一个选项 