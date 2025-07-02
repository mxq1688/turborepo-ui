# Table

A flexible and powerful table component for displaying structured data.

## Basic Usage

```vue
<script setup>
import { Table } from '@ui-lib/ui-vue'

const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'age', title: 'Age', dataIndex: 'age' },
  { key: 'address', title: 'Address', dataIndex: 'address' }
]

const dataSource = [
  { id: 1, name: 'John Doe', age: 28, address: 'New York' },
  { id: 2, name: 'Jane Smith', age: 32, address: 'London' },
  { id: 3, name: 'Bob Johnson', age: 45, address: 'Paris' }
]
</script>

<template>
  <Table :columns="columns" :dataSource="dataSource" />
</template>
```

## Sortable Columns

Enable sorting on specific columns:

```vue
<script setup>
const sortableColumns = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'address', title: 'Address', dataIndex: 'address' }
]
</script>

<template>
  <Table :columns="sortableColumns" :dataSource="dataSource" bordered />
</template>
```

## Custom Rendering

Use the `render` function to customize cell content:

```vue
<script setup>
const customColumns = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'age', title: 'Age', dataIndex: 'age' },
  { 
    key: 'status', 
    title: 'Status', 
    dataIndex: 'status',
    render: (status) => h('span', { 
      class: status === 'active' ? 'text-green-600' : 'text-red-600' 
    }, status)
  }
]
</script>
```

## Table Variants

- **Bordered**: Add borders to table cells
- **Striped**: Alternating row colors
- **Hoverable**: Highlight rows on hover

```vue
<template>
  <!-- Bordered table -->
  <Table :columns="columns" :dataSource="dataSource" bordered />
  
  <!-- Striped table -->
  <Table :columns="columns" :dataSource="dataSource" striped />
  
  <!-- Hoverable table -->
  <Table :columns="columns" :dataSource="dataSource" hoverable />
</template>
```

## API

### Table Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columns | `TableColumn[]` | `[]` | Table column configuration |
| dataSource | `any[]` | `[]` | Data array |
| rowKey | `string \| (record) => string` | `'id'` | Row key identifier |
| loading | `boolean` | `false` | Show loading state |
| bordered | `boolean` | `false` | Show table borders |
| striped | `boolean` | `false` | Enable striped rows |
| hoverable | `boolean` | `true` | Enable row hover effect |
| size | `'small' \| 'middle' \| 'large'` | `'middle'` | Table size |

### Column Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | `string` | - | Unique column key |
| title | `string` | - | Column header text |
| dataIndex | `string` | - | Data field name |
| width | `string \| number` | - | Column width |
| align | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| sortable | `boolean` | `false` | Enable sorting |
| render | `(value, record, index) => VNode` | - | Custom render function |

### Events

| Name | Type | Description |
|------|------|-------------|
| row-click | `(record, index) => void` | Triggered when row is clicked |
| sort-change | `(column, order) => void` | Triggered when sort changes |
``` 