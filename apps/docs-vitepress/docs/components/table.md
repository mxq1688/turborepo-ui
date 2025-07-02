# Table 表格

灵活强大的表格组件，用于显示结构化数据。

## 基础用法

```vue
<script setup>
import { Table } from '@ui-lib/ui-vue'

const columns = [
  { key: 'name', title: '姓名', dataIndex: 'name' },
  { key: 'age', title: '年龄', dataIndex: 'age' },
  { key: 'address', title: '地址', dataIndex: 'address' }
]

const dataSource = [
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区' },
  { id: 3, name: '王五', age: 45, address: '广州市天河区' }
]
</script>

<template>
  <Table :columns="columns" :dataSource="dataSource" />
</template>
```

## 可排序列

对指定列启用排序功能：

```vue
<script setup>
const sortableColumns = [
  { key: 'name', title: '姓名', dataIndex: 'name', sortable: true },
  { key: 'age', title: '年龄', dataIndex: 'age', sortable: true },
  { key: 'address', title: '地址', dataIndex: 'address' }
]
</script>

<template>
  <Table :columns="sortableColumns" :dataSource="dataSource" bordered />
</template>
```

## 自定义渲染

使用 `render` 函数自定义单元格内容：

```vue
<script setup>
const customColumns = [
  { key: 'name', title: '姓名', dataIndex: 'name' },
  { key: 'age', title: '年龄', dataIndex: 'age' },
  { 
    key: 'status', 
    title: '状态', 
    dataIndex: 'status',
    render: (status) => h('span', { 
      class: status === 'active' ? 'text-green-600' : 'text-red-600' 
    }, status === 'active' ? '正常' : '禁用')
  }
]
</script>
```

## 表格样式

- **bordered**：添加表格边框
- **striped**：斑马纹行
- **hoverable**：鼠标悬停高亮

```vue
<template>
  <!-- 带边框的表格 -->
  <Table :columns="columns" :dataSource="dataSource" bordered />
  
  <!-- 斑马纹表格 -->
  <Table :columns="columns" :dataSource="dataSource" striped />
  
  <!-- 悬停高亮表格 -->
  <Table :columns="columns" :dataSource="dataSource" hoverable />
</template>
```

## API

### Table 属性

| 属性名 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| columns | `TableColumn[]` | `[]` | 表格列配置 |
| dataSource | `any[]` | `[]` | 数据数组 |
| rowKey | `string \| (record) => string` | `'id'` | 行键标识符 |
| loading | `boolean` | `false` | 显示加载状态 |
| bordered | `boolean` | `false` | 显示表格边框 |
| striped | `boolean` | `false` | 启用斑马纹行 |
| hoverable | `boolean` | `true` | 启用行悬停效果 |
| size | `'small' \| 'middle' \| 'large'` | `'middle'` | 表格尺寸 |

### 列配置

| 属性名 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| key | `string` | - | 唯一列键 |
| title | `string` | - | 列标题文本 |
| dataIndex | `string` | - | 数据字段名 |
| width | `string \| number` | - | 列宽度 |
| align | `'left' \| 'center' \| 'right'` | `'left'` | 文本对齐 |
| sortable | `boolean` | `false` | 启用排序 |
| render | `(value, record, index) => VNode` | - | 自定义渲染函数 |

### 事件

| 事件名 | 类型 | 描述 |
|-------|------|------|
| row-click | `(record, index) => void` | 行点击时触发 |
| sort-change | `(column, order) => void` | 排序改变时触发 | 