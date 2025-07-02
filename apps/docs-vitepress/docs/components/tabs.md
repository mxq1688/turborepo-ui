# Tabs 标签页

用于将内容组织到不同面板中的标签页组件。

## 基础用法

```vue
<script setup>
import { Tabs } from '@ui-lib/ui-vue'
import { ref } from 'vue'

const activeTab = ref('tab1')

const tabs = [
  { key: 'tab1', label: '选项卡一', content: '选项卡一的内容' },
  { key: 'tab2', label: '选项卡二', content: '选项卡二的内容' },
  { key: 'tab3', label: '选项卡三', content: '选项卡三的内容' }
]
</script>

<template>
  <Tabs v-model="activeTab" :tabs="tabs" />
</template>
```

## 禁用标签页

```vue
<script setup>
const disabledTabs = [
  { key: 'tab1', label: '可用标签', content: '这是可用标签的内容' },
  { key: 'tab2', label: '禁用标签', content: '这是禁用标签的内容', disabled: true },
  { key: 'tab3', label: '另一个标签', content: '这是另一个标签的内容' }
]
</script>

<template>
  <Tabs :tabs="disabledTabs" />
</template>
```

## 卡片样式

```vue
<template>
  <Tabs :tabs="tabs" type="card" />
</template>
```

## 组件内容

在标签页中使用 Vue 组件：

```vue
<script setup>
import MyComponent from './MyComponent.vue'

const componentTabs = [
  { 
    key: 'form', 
    label: '表单', 
    component: 'form',
    props: { action: '/submit' }
  },
  { 
    key: 'custom', 
    label: '自定义', 
    component: MyComponent,
    props: { title: 'Hello World' }
  }
]
</script>

<template>
  <Tabs :tabs="componentTabs" />
</template>
```

## 受控模式

```vue
<script setup>
import { ref, watch } from 'vue'

const currentTab = ref('overview')

watch(currentTab, (newTab) => {
  console.log('标签页切换到：', newTab)
})

const controlledTabs = [
  { key: 'overview', label: '概览', content: '概览内容' },
  { key: 'details', label: '详情', content: '详情内容' },
  { key: 'settings', label: '设置', content: '设置内容' }
]
</script>

<template>
  <div>
    <p>当前标签页: {{ currentTab }}</p>
    <Tabs v-model="currentTab" :tabs="controlledTabs" />
  </div>
</template>
```

## API

### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| modelValue | `string` | - | 激活的标签页键值 (v-model) |
| tabs | `Tab[]` | `[]` | 标签页配置数组 |
| type | `'line' \| 'card'` | `'line'` | 标签页样式类型 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 标签页尺寸 |
| centered | `boolean` | `false` | 标签页居中对齐 |

### 标签页配置

| 属性名 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| key | `string` | - | 唯一标签页标识符 |
| label | `string` | - | 标签页标题文本 |
| content | `string` | - | 标签页内容（文本） |
| component | `Component` | - | 要渲染的 Vue 组件 |
| props | `object` | - | 组件的属性 |
| disabled | `boolean` | `false` | 是否禁用标签页 |

### 事件

| 事件名 | 类型 | 描述 |
|-------|------|------|
| update:modelValue | `(key: string) => void` | v-model 更新事件 |
| change | `(key: string) => void` | 标签页切换事件 |

### 插槽

| 插槽名 | 描述 |
|-------|------|
| default | 自定义标签页内容 |
| tab-{key} | 特定标签页的自定义内容 | 