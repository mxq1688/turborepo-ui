# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

- 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑
- 在组件库中提供了四种按钮类型
- 主按钮：用于主行动点，一个操作区域只能有一个主按钮
- 默认按钮：用于没有主次之分的一组行动点
- 描边按钮：用于次要的行动点
- 幽灵按钮：用于最次级的行动点

## 基础用法

最简单的用法。

```vue
<template>
  <div class="space-x-2">
    <Button>默认按钮</Button>
    <Button variant="primary">主要按钮</Button>
    <Button variant="secondary">次要按钮</Button>
    <Button variant="outline">描边按钮</Button>
    <Button variant="ghost">幽灵按钮</Button>
  </div>
</template>

<script setup>
import { Button } from '@ui-lib/ui-vue'
</script>
```

## 按钮尺寸

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `lg` `md` `sm` 分别把按钮设为大、中、小尺寸。若不设置 `size`，则尺寸为中。

```vue
<template>
  <div class="space-y-4">
    <div class="space-x-2">
      <Button size="lg">大按钮</Button>
      <Button size="md">中按钮</Button>
      <Button size="sm">小按钮</Button>
    </div>
    <div class="space-x-2">
      <Button variant="outline" size="lg">大按钮</Button>
      <Button variant="outline" size="md">中按钮</Button>
      <Button variant="outline" size="sm">小按钮</Button>
    </div>
  </div>
</template>
```

## 禁用状态

按钮不可用状态。

```vue
<template>
  <div class="space-y-4">
    <div class="space-x-2">
      <Button>正常按钮</Button>
      <Button disabled>禁用按钮</Button>
    </div>
    <div class="space-x-2">
      <Button variant="outline">正常按钮</Button>
      <Button variant="outline" disabled>禁用按钮</Button>
    </div>
  </div>
</template>
```

## 加载中状态

点击按钮后进入加载状态，可以避免用户重复点击。

```vue
<template>
  <div class="space-x-2">
    <Button @click="handleLoad" :disabled="loading">
      {{ loading ? '加载中...' : '点击加载' }}
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@ui-lib/ui-vue'

const loading = ref(false)

const handleLoad = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    alert('加载完成!')
  }, 2000)
}
</script>
```

## 图标按钮

当需要在 Button 内嵌入 Icon 时，可以直接在 Button 内使用图标。

```vue
<template>
  <div class="space-x-2 flex flex-wrap gap-2">
    <Button>
      <span class="mr-2">📁</span>
      文件夹
    </Button>
    <Button variant="outline">
      <span class="mr-2">📝</span>
      编辑
    </Button>
    <Button variant="ghost">
      <span class="mr-2">🗑️</span>
      删除
    </Button>
    <Button size="sm">
      <span class="mr-1">+</span>
      新建
    </Button>
  </div>
</template>
```

## API

### Button Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 设置按钮类型 | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` |
| size | 设置按钮大小 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| disabled | 按钮失效状态 | `boolean` | `false` |

### Button Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时的回调 | `(event: MouseEvent) => void` |

## 设计指引

### 使用场景

- **表单提交**：在表单中作为提交按钮
- **页面导航**：跳转到其他页面或状态
- **操作触发**：触发某个功能或操作
- **确认操作**：在对话框中确认或取消操作

### 注意事项

- 一个操作区域只能有一个主按钮
- 主按钮用于最重要的操作
- 按钮文案要简洁明了，能准确描述操作
- 危险操作建议使用确认对话框 