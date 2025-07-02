# Select 选择器

用于从多个选项中选择一个或多个值的下拉选择组件。

## 基础用法

基本的选择器使用方式。

### Vue 示例

```vue
<template>
  <div class="demo-container">
    <Select v-model="selectedValue" placeholder="请选择">
      <SelectOption value="option1">选项 1</SelectOption>
      <SelectOption value="option2">选项 2</SelectOption>
      <SelectOption value="option3">选项 3</SelectOption>
    </Select>
    <p>选中的值: {{ selectedValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select, SelectOption } from '@ui-lib/ui-vue'

const selectedValue = ref('')
</script>
```

### React 示例

```tsx
import { useState } from 'react'
import { Select } from '@ui-lib/ui-react'

function Demo() {
  const [selectedValue, setSelectedValue] = useState('')
  
  const options = [
    { label: '选项 1', value: 'option1' },
    { label: '选项 2', value: 'option2' },
    { label: '选项 3', value: 'option3' }
  ]
  
  return (
    <div className="demo-container">
      <Select 
        value={selectedValue} 
        onChange={setSelectedValue}
        options={options}
        placeholder="请选择"
      />
      <p>选中的值: {selectedValue}</p>
    </div>
  )
}
```

## 配置式用法

通过配置数组创建选择器。

```vue
<template>
  <div class="demo-container">
    <Select v-model="cityValue" :options="cityOptions" placeholder="选择城市" />
    <p class="mt-4">选中的城市: {{ cityValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cityValue = ref('')
const cityOptions = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '杭州', value: 'hangzhou' }
]
</script>
```

## 禁用状态

禁用的选择器和选项。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Select disabled placeholder="禁用的选择器">
        <SelectOption value="1">选项 1</SelectOption>
        <SelectOption value="2">选项 2</SelectOption>
      </Select>
      
      <Select placeholder="部分选项禁用">
        <SelectOption value="1">正常选项</SelectOption>
        <SelectOption value="2" disabled>禁用选项</SelectOption>
        <SelectOption value="3">正常选项</SelectOption>
      </Select>
    </div>
  </div>
</template>
```

## 可清空

可以清空已选择的值。

```vue
<template>
  <div class="demo-container">
    <Select v-model="clearableValue" clearable placeholder="可清空的选择器">
      <SelectOption value="apple">苹果</SelectOption>
      <SelectOption value="banana">香蕉</SelectOption>
      <SelectOption value="orange">橘子</SelectOption>
    </Select>
  </div>
</template>

<script setup>
const clearableValue = ref('apple')
</script>
```

## 可搜索

支持搜索功能的选择器。

```vue
<template>
  <div class="demo-container">
    <Select 
      v-model="searchableValue" 
      filterable 
      placeholder="可搜索的选择器"
      :options="fruitOptions"
    />
  </div>
</template>

<script setup>
const searchableValue = ref('')
const fruitOptions = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橘子', value: 'orange' },
  { label: '葡萄', value: 'grape' },
  { label: '草莓', value: 'strawberry' },
  { label: '芒果', value: 'mango' }
]
</script>
```

## 多选模式

支持选择多个值。

```vue
<template>
  <div class="demo-container">
    <Select 
      v-model="multipleValues" 
      multiple 
      placeholder="多选模式"
      :options="tagOptions"
    />
    <p class="mt-4">选中的标签: {{ multipleValues.join(', ') }}</p>
  </div>
</template>

<script setup>
const multipleValues = ref(['frontend'])
const tagOptions = [
  { label: '前端开发', value: 'frontend' },
  { label: '后端开发', value: 'backend' },
  { label: 'UI设计', value: 'ui-design' },
  { label: '产品经理', value: 'product' },
  { label: '测试', value: 'testing' }
]
</script>
```

## 分组选项

使用选项组对选项进行分类。

```vue
<template>
  <div class="demo-container">
    <Select v-model="groupValue" placeholder="分组选项">
      <SelectOptGroup label="水果">
        <SelectOption value="apple">苹果</SelectOption>
        <SelectOption value="banana">香蕉</SelectOption>
        <SelectOption value="orange">橘子</SelectOption>
      </SelectOptGroup>
      
      <SelectOptGroup label="蔬菜">
        <SelectOption value="tomato">番茄</SelectOption>
        <SelectOption value="cucumber">黄瓜</SelectOption>
        <SelectOption value="carrot">胡萝卜</SelectOption>
      </SelectOptGroup>
    </Select>
  </div>
</template>

<script setup>
const groupValue = ref('')
</script>
```

## 不同尺寸

提供三种不同的尺寸。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Select size="sm" placeholder="小尺寸" :options="sizeOptions" />
      <Select size="md" placeholder="中等尺寸（默认）" :options="sizeOptions" />
      <Select size="lg" placeholder="大尺寸" :options="sizeOptions" />
    </div>
  </div>
</template>

<script setup>
const sizeOptions = [
  { label: '选项 1', value: '1' },
  { label: '选项 2', value: '2' },
  { label: '选项 3', value: '3' }
]
</script>
```

## 自定义选项渲染

自定义选项的显示内容。

```vue
<template>
  <div class="demo-container">
    <Select v-model="customValue" placeholder="自定义选项">
      <SelectOption 
        v-for="user in users" 
        :key="user.id" 
        :value="user.id"
      >
        <div class="flex items-center space-x-2">
          <Avatar :src="user.avatar" size="sm" />
          <div>
            <div class="font-medium">{{ user.name }}</div>
            <div class="text-sm text-gray-500">{{ user.email }}</div>
          </div>
        </div>
      </SelectOption>
    </Select>
  </div>
</template>

<script setup>
const customValue = ref('')
const users = [
  { id: '1', name: '张三', email: 'zhangsan@example.com', avatar: '/avatar1.jpg' },
  { id: '2', name: '李四', email: 'lisi@example.com', avatar: '/avatar2.jpg' },
  { id: '3', name: '王五', email: 'wangwu@example.com', avatar: '/avatar3.jpg' }
]
</script>
```

## 远程搜索

支持远程搜索数据。

```vue
<template>
  <div class="demo-container">
    <Select 
      v-model="remoteValue"
      filterable
      remote
      :remote-method="handleSearch"
      :loading="loading"
      placeholder="输入关键词搜索"
      :options="searchResults"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const remoteValue = ref('')
const loading = ref(false)
const searchResults = ref([])

const allOptions = [
  { label: 'Vue.js', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Next.js', value: 'nextjs' },
  { label: 'Nuxt.js', value: 'nuxtjs' }
]

const handleSearch = (query) => {
  loading.value = true
  
  // 模拟API调用
  setTimeout(() => {
    searchResults.value = allOptions.filter(option =>
      option.label.toLowerCase().includes(query.toLowerCase())
    )
    loading.value = false
  }, 300)
}
</script>
```

## API 参数

### Select Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value / v-model | 选中的值 | `string \| number \| Array` | - |
| options | 选项数组 | `SelectOption[]` | `[]` |
| placeholder | 占位符文本 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| filterable | 是否可搜索 | `boolean` | `false` |
| multiple | 是否多选 | `boolean` | `false` |
| size | 尺寸大小 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| loading | 是否显示加载状态 | `boolean` | `false` |
| remote | 是否远程搜索 | `boolean` | `false` |
| remoteMethod | 远程搜索方法 | `(query: string) => void` | - |
| maxTagCount | 多选时最多显示的标签数 | `number` | - |

### SelectOption Interface

```typescript
interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
  group?: string
}
```

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 选中值改变时触发 | `(value: any)` |
| focus | 获得焦点时触发 | `(event: FocusEvent)` |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |
| clear | 点击清空按钮时触发 | - |
| search | 搜索时触发 | `(query: string)` |

### Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 选项内容 | - |
| empty | 无数据时的内容 | - |
| prefix | 前缀内容 | - |
| suffix | 后缀内容 | - |

## 主题定制

可以通过 CSS 变量自定义样式：

```css
.ui-select {
  --select-border-color: #d1d5db;
  --select-border-radius: 6px;
  --select-padding: 8px 12px;
  --select-font-size: 14px;
  --select-height: 36px;
  --select-focus-color: #3b82f6;
  --select-option-hover-bg: #f3f4f6;
  --select-option-selected-bg: #3b82f6;
  --select-option-selected-color: #ffffff;
}
```

## 无障碍访问

- 支持键盘导航（方向键选择，回车确认）
- 提供适当的 ARIA 标签
- 支持屏幕阅读器
- 焦点状态清晰可见
- 支持搜索模式下的键盘输入 