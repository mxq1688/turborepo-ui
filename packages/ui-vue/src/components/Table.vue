<template>
  <div class="flex flex-col" :style="style">
    <!-- Loading状态 -->
    <div v-if="loading" class="flex items-center justify-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      <span class="ml-2 text-gray-500">加载中...</span>
    </div>

    <!-- 表格主体 -->
    <div v-else class="overflow-auto">
      <table :class="tableClasses">
        <thead>
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              :class="getHeaderClasses(column)"
              :style="{ width: column.width }"
              @click="column.sortable && handleSort(column.key)"
            >
              <div class="flex items-center space-x-1">
                <span>{{ column.title }}</span>
                <div v-if="column.sortable" class="flex flex-col">
                  <div 
                    :class="[
                      'w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-gray-400',
                      sortedInfo.columnKey === column.key && sortedInfo.order === 'ascend' && 'border-b-blue-500'
                    ]"
                  />
                  <div 
                    :class="[
                      'w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-400',
                      sortedInfo.columnKey === column.key && sortedInfo.order === 'descend' && 'border-t-blue-500'
                    ]"
                  />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="(record, index) in paginatedData"
            :key="getRowKey(record, index)"
            :class="rowClasses"
          >
            <td
              v-for="column in columns"
              :key="column.key"
              :class="getCellClasses(column)"
            >
              <component
                v-if="column.render"
                :is="column.render"
                :value="getValue(record, column)"
                :record="record"
                :index="index"
              />
              <span v-else>
                {{ getValue(record, column) }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- 分页 -->
    <div v-if="pagination && typeof pagination === 'object'" class="flex items-center justify-between mt-4">
      <div class="text-sm text-gray-700">
        显示 {{ ((currentPage - 1) * pageSize) + 1 }} 到 
        {{ Math.min(currentPage * pageSize, sortedData.length) }} 项，
        共 {{ sortedData.length }} 项
      </div>
      
      <div class="flex items-center space-x-2">
        <button
          class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
          :disabled="currentPage === 1"
          @click="handlePageChange(currentPage - 1)"
        >
          上一页
        </button>
        
        <span class="text-sm text-gray-700">
          第 {{ currentPage }} 页 / 共 {{ Math.ceil(sortedData.length / pageSize) }} 页
        </span>
        
        <button
          class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
          :disabled="currentPage >= Math.ceil(sortedData.length / pageSize)"
          @click="handlePageChange(currentPage + 1)"
        >
          下一页
        </button>
      </div>
    </div>
    
    <!-- 空状态 -->
    <div v-if="!loading && paginatedData.length === 0" class="text-center py-8 text-gray-500">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <p class="mt-2">暂无数据</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from 'vue'
import { combineClasses } from '@ui-lib/shared'

// 类型定义
export interface TableColumn<T = any> {
  key: string
  title: string
  dataIndex?: string
  width?: number | string
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  render?: any
  className?: string
}

interface VueTableProps<T = any> {
  columns: TableColumn<T>[]
  dataSource: T[]
  rowKey?: string | ((record: T) => string)
  loading?: boolean
  bordered?: boolean
  striped?: boolean
  hoverable?: boolean
  size?: 'small' | 'middle' | 'large'
  pagination?: boolean | {
    current?: number
    pageSize?: number
    total?: number
    onChange?: (page: number, pageSize: number) => void
  }
  className?: string
  style?: Record<string, any>
}

const props = withDefaults(defineProps<VueTableProps>(), {
  rowKey: 'id',
  loading: false,
  bordered: false,
  striped: false,
  hoverable: true,
  size: 'middle',
  pagination: false
})

// 排序状态
type SortOrder = 'ascend' | 'descend' | null

const sortedInfo = reactive<{
  columnKey: string
  order: SortOrder
}>({
  columnKey: '',
  order: null
})

const currentPage = ref(1)
const pageSize = 10

// 获取行唯一标识
const getRowKey = (record: any, index: number): string => {
  if (typeof props.rowKey === 'function') {
    return props.rowKey(record)
  }
  return record[props.rowKey] || index.toString()
}

// 获取列值
const getValue = (record: any, column: TableColumn) => {
  return column.dataIndex ? record[column.dataIndex] : record
}

// 排序后的数据
const sortedData = computed(() => {
  if (!sortedInfo.order || !sortedInfo.columnKey) {
    return props.dataSource
  }

  const column = props.columns.find(col => col.key === sortedInfo.columnKey)
  if (!column || !column.dataIndex) {
    return props.dataSource
  }

  return [...props.dataSource].sort((a, b) => {
    const aValue = (a as any)[column.dataIndex!]
    const bValue = (b as any)[column.dataIndex!]
    
    if (aValue < bValue) {
      return sortedInfo.order === 'ascend' ? -1 : 1
    }
    if (aValue > bValue) {
      return sortedInfo.order === 'ascend' ? 1 : -1
    }
    return 0
  })
})

// 分页后的数据
const paginatedData = computed(() => {
  if (!props.pagination) {
    return sortedData.value
  }
  
  const start = (currentPage.value - 1) * pageSize
  return sortedData.value.slice(start, start + pageSize)
})

// 样式类
const tableClasses = computed(() => {
  return combineClasses(
    'min-w-full divide-y divide-gray-200 bg-white',
    props.bordered && 'border border-gray-200',
    props.className
  )
})

const getHeaderClasses = (column: TableColumn) => {
  return combineClasses(
    'bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
    props.size === 'small' && 'px-3 py-2',
    props.size === 'middle' && 'px-4 py-3',
    props.size === 'large' && 'px-6 py-4',
    column.align === 'center' && 'text-center',
    column.align === 'right' && 'text-right',
    column.sortable && 'cursor-pointer select-none hover:bg-gray-100',
    column.className
  )
}

const getCellClasses = (column: TableColumn) => {
  return combineClasses(
    'text-sm text-gray-900',
    props.size === 'small' && 'px-3 py-2',
    props.size === 'middle' && 'px-4 py-3',
    props.size === 'large' && 'px-6 py-4',
    props.bordered && 'border-r border-gray-200 last:border-r-0',
    column.align === 'center' && 'text-center',
    column.align === 'right' && 'text-right',
    column.className
  )
}

const rowClasses = computed(() => {
  return combineClasses(
    'transition-colors duration-150',
    props.striped && 'even:bg-gray-50',
    props.hoverable && 'hover:bg-gray-50',
    props.bordered && 'border-b border-gray-200'
  )
})

// 事件处理
const handleSort = (columnKey: string) => {
  let order: SortOrder = 'ascend'
  
  if (sortedInfo.columnKey === columnKey) {
    if (sortedInfo.order === 'ascend') {
      order = 'descend'
    } else if (sortedInfo.order === 'descend') {
      order = null
    }
  }
  
  sortedInfo.columnKey = columnKey
  sortedInfo.order = order
}

const handlePageChange = (newPage: number) => {
  currentPage.value = newPage
  if (typeof props.pagination === 'object' && props.pagination.onChange) {
    props.pagination.onChange(newPage, pageSize)
  }
}
</script>

<style scoped>
/* 如果需要组件特定的样式，可以在这里添加 */
</style> 