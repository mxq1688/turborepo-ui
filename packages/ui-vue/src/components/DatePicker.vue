<template>
  <div class="relative">
    <Input
      v-model="displayValue"
      :placeholder="placeholder"
      :disabled="disabled"
      readonly
      @click="togglePicker"
      @blur="handleBlur"
    />
    
    <!-- 日期选择器弹窗 -->
    <div
      v-if="isOpen"
      class="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4"
    >
      <div class="mb-4 flex items-center justify-between">
        <button
          @click="prevMonth"
          class="p-1 hover:bg-gray-100 rounded"
        >
          ←
        </button>
        <span class="font-medium">
          {{ currentYear }}年{{ currentMonth }}月
        </span>
        <button
          @click="nextMonth"
          class="p-1 hover:bg-gray-100 rounded"
        >
          →
        </button>
      </div>
      
      <!-- 日历网格 -->
      <div class="grid grid-cols-7 gap-1 text-center text-sm">
        <div
          v-for="day in ['日', '一', '二', '三', '四', '五', '六']"
          :key="day"
          class="p-2 text-gray-500 font-medium"
        >
          {{ day }}
        </div>
        
        <div
          v-for="date in calendarDates"
          :key="date.key"
          @click="selectDate(date)"
          :class="[
            'p-2 cursor-pointer rounded',
            date.isCurrentMonth
              ? 'text-gray-900 hover:bg-blue-50'
              : 'text-gray-400',
            date.isSelected
              ? 'bg-blue-500 text-white'
              : '',
            date.isToday
              ? 'bg-blue-100 text-blue-700'
              : ''
          ]"
        >
          {{ date.day }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Input from './Input.vue'

interface DatePickerProps {
  modelValue?: string | Date
  placeholder?: string
  disabled?: boolean
  format?: string
}

const props = withDefaults(defineProps<DatePickerProps>(), {
  placeholder: '请选择日期',
  disabled: false,
  format: 'YYYY-MM-DD'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()

const isOpen = ref(false)
const currentDate = ref(new Date())

// 格式化日期
const formatDate = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// 解析日期
const parseDate = (dateStr: string): Date | null => {
  if (!dateStr) return null
  const date = new Date(dateStr)
  return isNaN(date.getTime()) ? null : date
}

// 显示值
const displayValue = computed(() => {
  if (!props.modelValue) return ''
  const date = typeof props.modelValue === 'string' 
    ? parseDate(props.modelValue) 
    : props.modelValue
  return date ? formatDate(date) : ''
})

// 当前年月
const currentYear = computed(() => currentDate.value.getFullYear())
const currentMonth = computed(() => currentDate.value.getMonth() + 1)

// 日历数据
const calendarDates = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const firstDayWeek = firstDay.getDay()
  
  const dates = []
  
  // 上个月的日期
  for (let i = firstDayWeek - 1; i >= 0; i--) {
    const date = new Date(year, month, -i)
    dates.push({
      key: `prev-${date.getDate()}`,
      day: date.getDate(),
      date: date,
      isCurrentMonth: false,
      isSelected: false,
      isToday: false
    })
  }
  
  // 本月的日期
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(year, month, day)
    const today = new Date()
    const selectedDate = typeof props.modelValue === 'string' 
      ? parseDate(props.modelValue) 
      : props.modelValue
    
    dates.push({
      key: `current-${day}`,
      day: day,
      date: date,
      isCurrentMonth: true,
      isSelected: selectedDate ? formatDate(date) === formatDate(selectedDate) : false,
      isToday: formatDate(date) === formatDate(today)
    })
  }
  
  // 下个月的日期
  const remainingCells = 42 - dates.length // 6 rows * 7 days
  for (let day = 1; day <= remainingCells; day++) {
    const date = new Date(year, month + 1, day)
    dates.push({
      key: `next-${day}`,
      day: day,
      date: date,
      isCurrentMonth: false,
      isSelected: false,
      isToday: false
    })
  }
  
  return dates
})

// 切换日期选择器
const togglePicker = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
  }
}

// 处理失焦
const handleBlur = () => {
  setTimeout(() => {
    isOpen.value = false
  }, 200)
}

// 选择日期
const selectDate = (dateItem: any) => {
  if (!dateItem.isCurrentMonth) return
  
  const selectedValue = formatDate(dateItem.date)
  emit('update:modelValue', selectedValue)
  emit('change', selectedValue)
  isOpen.value = false
}

// 上一月
const prevMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1)
}

// 下一月
const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1)
}

// 监听 modelValue 变化，更新当前显示月份
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    const date = typeof newValue === 'string' ? parseDate(newValue) : newValue
    if (date) {
      currentDate.value = new Date(date.getFullYear(), date.getMonth())
    }
  }
})
</script> 