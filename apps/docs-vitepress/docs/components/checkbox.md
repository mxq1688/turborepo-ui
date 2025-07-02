# Checkbox 多选框

用于在多个选项中选择多个值的组件。

## 基础用法

单个多选框的基本使用。

### Vue 示例

```vue
<template>
  <div class="demo-container">
    <Checkbox v-model="checked">同意用户协议</Checkbox>
    <p>状态: {{ checked ? '已选中' : '未选中' }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox } from '@ui-lib/ui-vue'

const checked = ref(false)
</script>
```

### React 示例

```tsx
import { useState } from 'react'
import { Checkbox } from '@ui-lib/ui-react'

function Demo() {
  const [checked, setChecked] = useState(false)
  
  return (
    <div className="demo-container">
      <Checkbox 
        checked={checked} 
        onChange={setChecked}
      >
        同意用户协议
      </Checkbox>
      <p>状态: {checked ? '已选中' : '未选中'}</p>
    </div>
  )
}
```

## 多选框组

多个选项的多选框组。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-2">
      <Checkbox 
        v-for="option in options" 
        :key="option.value"
        v-model="selectedValues"
        :value="option.value"
      >
        {{ option.label }}
      </Checkbox>
    </div>
    <p class="mt-4">已选择: {{ selectedValues.join(', ') }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedValues = ref(['option1'])
const options = [
  { label: '选项 1', value: 'option1' },
  { label: '选项 2', value: 'option2' },
  { label: '选项 3', value: 'option3' },
  { label: '选项 4', value: 'option4' }
]
</script>
```

## 禁用状态

禁用的多选框。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-2">
      <Checkbox disabled>禁用状态</Checkbox>
      <Checkbox disabled checked>禁用且选中</Checkbox>
      <Checkbox>正常状态</Checkbox>
    </div>
  </div>
</template>
```

## 不确定状态

用于表示部分选中的状态。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Checkbox 
        :checked="isAllChecked"
        :indeterminate="isIndeterminate"
        @change="handleCheckAll"
      >
        全选
      </Checkbox>
      
      <div class="pl-6 space-y-2">
        <Checkbox 
          v-for="option in options" 
          :key="option.value"
          v-model="checkedList"
          :value="option.value"
        >
          {{ option.label }}
        </Checkbox>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橘子', value: 'orange' }
]

const checkedList = ref(['apple'])

const isAllChecked = computed(() => 
  checkedList.value.length === options.length
)

const isIndeterminate = computed(() => 
  checkedList.value.length > 0 && checkedList.value.length < options.length
)

const handleCheckAll = (checked) => {
  checkedList.value = checked ? options.map(o => o.value) : []
}
</script>
```

## 不同尺寸

提供三种不同的尺寸。

```vue
<template>
  <div class="demo-container">
    <div class="flex items-center space-x-4">
      <Checkbox size="sm">小尺寸</Checkbox>
      <Checkbox size="md">中等尺寸</Checkbox>
      <Checkbox size="lg">大尺寸</Checkbox>
    </div>
  </div>
</template>
```

## 自定义颜色

自定义多选框的颜色主题。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-2">
      <Checkbox color="primary" checked>主要色</Checkbox>
      <Checkbox color="secondary" checked>次要色</Checkbox>
      <Checkbox color="success" checked>成功色</Checkbox>
      <Checkbox color="warning" checked>警告色</Checkbox>
      <Checkbox color="danger" checked>危险色</Checkbox>
    </div>
  </div>
</template>
```

## 垂直布局

垂直排列的多选框组。

```vue
<template>
  <div class="demo-container">
    <CheckboxGroup v-model="verticalValues" direction="vertical">
      <Checkbox value="1">选项 1</Checkbox>
      <Checkbox value="2">选项 2</Checkbox>
      <Checkbox value="3">选项 3</Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script setup>
const verticalValues = ref([])
</script>
```

## 水平布局

水平排列的多选框组。

```vue
<template>
  <div class="demo-container">
    <CheckboxGroup v-model="horizontalValues" direction="horizontal">
      <Checkbox value="a">选项 A</Checkbox>
      <Checkbox value="b">选项 B</Checkbox>
      <Checkbox value="c">选项 C</Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script setup>
const horizontalValues = ref(['a'])
</script>
```

## API 参数

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| checked / v-model | 是否选中 | `boolean` | `false` |
| value | 选项值 | `string \| number \| boolean` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| indeterminate | 是否为不确定状态 | `boolean` | `false` |
| size | 尺寸大小 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| color | 颜色主题 | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` |
| name | 原生name属性 | `string` | - |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value / v-model | 选中的值数组 | `Array<string \| number>` | `[]` |
| direction | 排列方向 | `'horizontal' \| 'vertical'` | `'vertical'` |
| disabled | 是否禁用整个组 | `boolean` | `false` |
| size | 尺寸大小 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| color | 颜色主题 | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 选中状态改变时触发 | `(checked: boolean, value?: any)` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 多选框文本内容 |

## 主题定制

可以通过 CSS 变量自定义样式：

```css
.ui-checkbox {
  --checkbox-size: 16px;
  --checkbox-border-color: #d1d5db;
  --checkbox-border-radius: 4px;
  --checkbox-checked-bg: #3b82f6;
  --checkbox-checked-border: #3b82f6;
  --checkbox-disabled-bg: #f3f4f6;
  --checkbox-disabled-color: #9ca3af;
  --checkbox-focus-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}
```

## 无障碍访问

- 支持键盘导航（空格键切换选中状态）
- 提供适当的 ARIA 标签
- 支持屏幕阅读器
- 焦点状态清晰可见
- 支持不确定状态的语义化 