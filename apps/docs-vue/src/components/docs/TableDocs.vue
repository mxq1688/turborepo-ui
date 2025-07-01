<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Table 表格</h1>
      <p class="text-lg text-gray-600">展示行列数据，支持排序、分页等功能。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="基础的表格展示用法"
      :code="basicCode">
      <div class="space-y-4">
        <Table :columns="basicColumns" :dataSource="basicData" />
      </div>
    </ExampleBlock>

    <!-- 排序功能 -->
    <ExampleBlock 
      title="排序功能" 
      description="可以对表格进行排序"
      :code="sortCode">
      <div class="space-y-4">
        <Table :columns="sortColumns" :dataSource="sortData" />
      </div>
    </ExampleBlock>

    <!-- 自定义渲染 -->
    <ExampleBlock 
      title="自定义渲染" 
      description="自定义列的显示"
      :code="customCode">
      <div class="space-y-4">
        <Table :columns="customColumns" :dataSource="customData" />
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Table Props</h3>
          <ApiTable :data="tableProps" />
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Column 配置</h3>
          <ApiTable :data="columnProps" />
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Events</h3>
          <ApiTable :data="events" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Table } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 基础表格
const basicColumns = [
  { key: 'name', title: '姓名', dataIndex: 'name' },
  { key: 'age', title: '年龄', dataIndex: 'age' },
  { key: 'address', title: '住址', dataIndex: 'address' }
]

const basicData = [
  { key: '1', name: '张三', age: 32, address: '西湖区湖底公园1号' },
  { key: '2', name: '李四', age: 42, address: '西湖区湖底公园2号' },
  { key: '3', name: '王五', age: 28, address: '西湖区湖底公园3号' }
]

// 带排序的表格
const sortColumns = [
  { key: 'name', title: '姓名', dataIndex: 'name' },
  { key: 'age', title: '年龄', dataIndex: 'age', sortable: true },
  { key: 'address', title: '住址', dataIndex: 'address' }
]

const sortData = [
  { key: '1', name: '张三', age: 32, address: '杭州市' },
  { key: '2', name: '李四', age: 42, address: '上海市' },
  { key: '3', name: '王五', age: 28, address: '北京市' },
  { key: '4', name: '赵六', age: 35, address: '深圳市' }
]

// 自定义渲染表格
const customColumns = [
  { key: 'name', title: '姓名', dataIndex: 'name' },
  { key: 'status', title: '状态', dataIndex: 'status' },
  { key: 'actions', title: '操作', dataIndex: 'actions' }
]

const customData = [
  { key: '1', name: '张三', status: 'active' },
  { key: '2', name: '李四', status: 'inactive' },
  { key: '3', name: '王五', status: 'pending' }
]

// 代码示例
const basicCode = `import { Table } from "@ui-lib/ui-vue"

// 基础表格
const columns = [
  { key: "name", title: "姓名", dataIndex: "name" },
  { key: "age", title: "年龄", dataIndex: "age" },
  { key: "address", title: "住址", dataIndex: "address" }
]

const dataSource = [
  { key: "1", name: "张三", age: 32, address: "西湖区湖底公园1号" },
  { key: "2", name: "李四", age: 42, address: "西湖区湖底公园2号" }
]

<Table :columns="columns" :dataSource="dataSource" />`

const sortCode = `import { Table } from "@ui-lib/ui-vue"

// 带排序的表格
const columns = [
  { key: "name", title: "姓名", dataIndex: "name" },
  { key: "age", title: "年龄", dataIndex: "age", sortable: true },
  { key: "address", title: "住址", dataIndex: "address" }
]

<Table :columns="columns" :dataSource="dataSource" />`

const customCode = `import { Table } from "@ui-lib/ui-vue"

// 自定义渲染表格
const columns = [
  { key: "name", title: "姓名", dataIndex: "name" },
  { key: "status", title: "状态", dataIndex: "status" },
  { key: "actions", title: "操作", dataIndex: "actions" }
]`

// API 数据
const tableProps = [
  { name: 'columns', type: 'Column[]', default: '[]', description: '表格列的配置描述' },
  { name: 'dataSource', type: 'any[]', default: '[]', description: '数据数组' },
  { name: 'loading', type: 'boolean', default: 'false', description: '页面是否加载中' },
  { name: 'pagination', type: 'object | false', default: 'false', description: '分页器配置' },
  { name: 'size', type: 'small | middle | large', default: 'middle', description: '表格大小' }
]

const columnProps = [
  { name: 'key', type: 'string', default: '-', description: '列的唯一标识' },
  { name: 'title', type: 'string', default: '-', description: '列头显示文字' },
  { name: 'dataIndex', type: 'string', default: '-', description: '列数据在数据项中对应的路径' },
  { name: 'sortable', type: 'boolean', default: 'false', description: '是否可排序' },
  { name: 'width', type: 'string | number', default: '-', description: '列宽度' },
  { name: 'align', type: 'left | center | right', default: 'left', description: '设置列的对齐方式' }
]

const events = [
  { name: 'row-click', type: '(record: any, index: number) => void', description: '点击行时触发' },
  { name: 'sort-change', type: '(column: any, order: string) => void', description: '排序变化时触发' }
]
</script> 