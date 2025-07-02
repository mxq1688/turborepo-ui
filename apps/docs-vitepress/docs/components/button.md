# Button 按钮

按钮组件用于触发操作和事件。

## 基础用法

```vue
<script setup>
import { Button } from '@ui-lib/ui-vue'
</script>

<template>
  <Button>默认按钮</Button>
  <Button variant="primary">主要按钮</Button>
  <Button variant="secondary">次要按钮</Button>
</template>
```

## 按钮变体

Button 组件支持不同的变体：

- `default` - 默认按钮样式
- `primary` - 主要操作按钮
- `secondary` - 次要操作按钮
- `outline` - 描边按钮样式
- `ghost` - 幽灵按钮样式

## 按钮尺寸

```vue
<template>
  <Button size="sm">小按钮</Button>
  <Button size="md">中等按钮</Button>
  <Button size="lg">大按钮</Button>
</template>
```

## 禁用状态

```vue
<template>
  <Button disabled>禁用按钮</Button>
</template>
```

## API

### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| variant | `'default' \| 'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'default'` | 按钮变体 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 按钮尺寸 |
| disabled | `boolean` | `false` | 是否禁用按钮 |

### 事件

| 事件名 | 类型 | 描述 |
|-------|------|------|
| click | `(event: MouseEvent) => void` | 按钮点击时触发 |

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