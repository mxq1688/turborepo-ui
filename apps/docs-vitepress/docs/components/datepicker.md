# DatePicker 日期选择器

用于选择日期和时间的组件，支持多种选择模式和格式。

## 基础用法

基本的日期选择功能。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <DatePicker v-model="selectedDate" placeholder="选择日期" />
      <p>选择的日期: {{ selectedDate }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedDate = ref('')
</script>
```

## 不同尺寸

提供三种不同的尺寸。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <DatePicker size="sm" placeholder="小尺寸" />
      <DatePicker size="md" placeholder="中等尺寸（默认）" />
      <DatePicker size="lg" placeholder="大尺寸" />
    </div>
  </div>
</template>
```

## 日期格式

自定义日期显示格式。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <DatePicker 
        v-model="date1" 
        format="YYYY-MM-DD" 
        placeholder="YYYY-MM-DD"
      />
      
      <DatePicker 
        v-model="date2" 
        format="YYYY/MM/DD" 
        placeholder="YYYY/MM/DD"
      />
      
      <DatePicker 
        v-model="date3" 
        format="DD-MM-YYYY" 
        placeholder="DD-MM-YYYY"
      />
      
      <DatePicker 
        v-model="date4" 
        format="MMM DD, YYYY" 
        placeholder="MMM DD, YYYY"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const date1 = ref('')
const date2 = ref('')
const date3 = ref('')
const date4 = ref('')
</script>
```

## 日期时间选择

选择日期和时间。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <DatePicker 
        v-model="datetime1" 
        type="datetime" 
        placeholder="选择日期时间"
        format="YYYY-MM-DD HH:mm:ss"
      />
      
      <DatePicker 
        v-model="datetime2" 
        type="datetime" 
        placeholder="选择日期时间（12小时制）"
        format="YYYY-MM-DD hh:mm A"
        :use12Hours="true"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const datetime1 = ref('')
const datetime2 = ref('')
</script>
```

## 范围选择

选择日期范围。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <DatePicker 
        v-model="dateRange" 
        type="daterange" 
        placeholder="选择日期范围"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
      
      <DatePicker 
        v-model="datetimeRange" 
        type="datetimerange" 
        placeholder="选择日期时间范围"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
      />
      
      <div v-if="dateRange.length" class="mt-4">
        <p>选择的日期范围: {{ dateRange[0] }} 至 {{ dateRange[1] }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dateRange = ref([])
const datetimeRange = ref([])
</script>
```

## 月份年份选择

选择月份或年份。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <DatePicker 
        v-model="selectedMonth" 
        type="month" 
        placeholder="选择月份"
        format="YYYY-MM"
      />
      
      <DatePicker 
        v-model="selectedYear" 
        type="year" 
        placeholder="选择年份"
        format="YYYY"
      />
      
      <DatePicker 
        v-model="selectedQuarter" 
        type="quarter" 
        placeholder="选择季度"
        format="YYYY-Q"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedMonth = ref('')
const selectedYear = ref('')
const selectedQuarter = ref('')
</script>
```

## 禁用日期

设置不可选择的日期。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <DatePicker 
        v-model="disabledDate1" 
        :disabled-date="disablePastDates"
        placeholder="不能选择过去的日期"
      />
      
      <DatePicker 
        v-model="disabledDate2" 
        :disabled-date="disableWeekends"
        placeholder="不能选择周末"
      />
      
      <DatePicker 
        v-model="disabledDate3" 
        :disabled-date="disableSpecificDates"
        placeholder="禁用特定日期"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const disabledDate1 = ref('')
const disabledDate2 = ref('')
const disabledDate3 = ref('')

const disablePastDates = (date) => {
  return date < new Date().setHours(0, 0, 0, 0)
}

const disableWeekends = (date) => {
  const day = new Date(date).getDay()
  return day === 0 || day === 6 // 周日和周六
}

const disableSpecificDates = (date) => {
  const today = new Date()
  const targetDate = new Date(date)
  
  // 禁用今天前后3天
  const diffTime = Math.abs(targetDate - today)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays <= 3
}
</script>
```

## 快捷选项

提供常用的日期快捷选项。

```vue
<template>
  <div class="demo-container">
    <DatePicker 
      v-model="quickDate" 
      type="daterange"
      :shortcuts="shortcuts"
      placeholder="选择日期范围"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const quickDate = ref([])

const shortcuts = [
  {
    text: '今天',
    value: () => {
      const today = new Date()
      return [today, today]
    }
  },
  {
    text: '昨天',
    value: () => {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      return [yesterday, yesterday]
    }
  },
  {
    text: '最近7天',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setDate(start.getDate() - 6)
      return [start, end]
    }
  },
  {
    text: '最近30天',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setDate(start.getDate() - 29)
      return [start, end]
    }
  },
  {
    text: '本月',
    value: () => {
      const now = new Date()
      const start = new Date(now.getFullYear(), now.getMonth(), 1)
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      return [start, end]
    }
  },
  {
    text: '上月',
    value: () => {
      const now = new Date()
      const start = new Date(now.getFullYear(), now.getMonth() - 1, 1)
      const end = new Date(now.getFullYear(), now.getMonth(), 0)
      return [start, end]
    }
  }
]
</script>
```

## 自定义单元格

自定义日期单元格的显示。

```vue
<template>
  <div class="demo-container">
    <DatePicker 
      v-model="customDate" 
      :cell-render="cellRender"
      placeholder="自定义单元格"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const customDate = ref('')

const cellRender = (date) => {
  const day = date.getDate()
  const isWeekend = date.getDay() === 0 || date.getDay() === 6
  const isToday = date.toDateString() === new Date().toDateString()
  
  return {
    class: {
      'weekend': isWeekend,
      'today': isToday,
      'special': day === 15 // 每月15号特殊标记
    },
    content: day,
    title: isToday ? '今天' : undefined
  }
}
</script>

<style scoped>
:deep(.weekend) {
  color: #ef4444;
}

:deep(.today) {
  background-color: #3b82f6;
  color: white;
  border-radius: 50%;
}

:deep(.special) {
  position: relative;
}

:deep(.special::after) {
  content: '';
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 4px;
  height: 4px;
  background-color: #f59e0b;
  border-radius: 50%;
}
</style>
```

## API 参数

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value / v-model | 绑定值 | `string \| Date \| Array` | - |
| type | 选择器类型 | `'date' \| 'datetime' \| 'daterange' \| 'datetimerange' \| 'month' \| 'year' \| 'quarter'` | `'date'` |
| format | 显示格式 | `string` | `'YYYY-MM-DD'` |
| valueFormat | 绑定值格式 | `string` | - |
| placeholder | 占位符 | `string` | - |
| startPlaceholder | 范围选择开始占位符 | `string` | - |
| endPlaceholder | 范围选择结束占位符 | `string` | - |
| size | 尺寸大小 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `true` |
| disabledDate | 禁用日期函数 | `(date: Date) => boolean` | - |
| shortcuts | 快捷选项 | `ShortcutOption[]` | `[]` |
| use12Hours | 是否12小时制 | `boolean` | `false` |
| cellRender | 自定义单元格渲染 | `(date: Date) => CellRenderOption` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值改变时触发 | `(value: string \| Date \| Array)` |
| focus | 获得焦点时触发 | `(event: FocusEvent)` |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |
| clear | 清空时触发 | - |
| panelChange | 日期面板变化时触发 | `(value: Date, mode: string)` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| suffix | 后缀内容 |
| prefix | 前缀内容 |

## 主题定制

```css
.ui-date-picker {
  --datepicker-border-color: #d1d5db;
  --datepicker-border-radius: 6px;
  --datepicker-bg: #ffffff;
  --datepicker-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --datepicker-cell-size: 32px;
  --datepicker-cell-hover-bg: #f3f4f6;
  --datepicker-cell-selected-bg: #3b82f6;
  --datepicker-cell-selected-color: #ffffff;
  --datepicker-today-color: #3b82f6;
  --datepicker-disabled-color: #9ca3af;
}
``` 