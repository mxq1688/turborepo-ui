<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">DatePicker 日期选择器</h1>
      <p class="text-lg text-gray-600">输入或选择日期的控件。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="最简单的用法"
      :code="basicCode">
      <div class="space-y-4">
        <DatePicker
          v-model="basicDate"
          placeholder="请选择日期"
          @change="handleBasicChange"
        />
        <p class="text-sm text-gray-600">
          选择的日期: {{ basicDate || '未选择' }}
        </p>
      </div>
    </ExampleBlock>

    <!-- 不同尺寸 -->
    <ExampleBlock 
      title="三种尺寸" 
      description="三种不同尺寸的日期选择器"
      :code="sizeCode">
      <div class="space-y-4">
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">小尺寸</label>
            <DatePicker
              v-model="smallDate"
              size="sm"
              placeholder="小尺寸日期选择器"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">默认尺寸</label>
            <DatePicker
              v-model="mediumDate"
              size="md"
              placeholder="默认尺寸日期选择器"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">大尺寸</label>
            <DatePicker
              v-model="largeDate"
              size="lg"
              placeholder="大尺寸日期选择器"
            />
          </div>
        </div>
      </div>
    </ExampleBlock>

    <!-- 禁用状态 -->
    <ExampleBlock 
      title="禁用状态" 
      description="选择器不可用状态"
      :code="disabledCode">
      <div class="space-y-4">
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">完全禁用</label>
            <DatePicker
              v-model="disabledDate"
              disabled
              placeholder="禁用状态"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">只读模式</label>
            <DatePicker
              v-model="readonlyDate"
              readonly
              placeholder="只读模式"
            />
          </div>
        </div>
      </div>
    </ExampleBlock>

    <!-- 日期格式 -->
    <ExampleBlock 
      title="日期格式" 
      description="使用不同的日期格式"
      :code="formatCode">
      <div class="space-y-4">
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">YYYY-MM-DD (默认)</label>
            <DatePicker
              v-model="formatDate1"
              format="YYYY-MM-DD"
              placeholder="选择日期"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">MM/DD/YYYY</label>
            <DatePicker
              v-model="formatDate2"
              format="MM/DD/YYYY"
              placeholder="选择日期"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">DD.MM.YYYY</label>
            <DatePicker
              v-model="formatDate3"
              format="DD.MM.YYYY"
              placeholder="选择日期"
            />
          </div>
        </div>
        <div class="text-sm text-gray-600">
          <p>格式1: {{ formatDate1 || '未选择' }}</p>
          <p>格式2: {{ formatDate2 || '未选择' }}</p>
          <p>格式3: {{ formatDate3 || '未选择' }}</p>
        </div>
      </div>
    </ExampleBlock>

    <!-- 日期范围限制 -->
    <ExampleBlock 
      title="日期范围限制" 
      description="限制可选择的日期范围"
      :code="rangeCode">
      <div class="space-y-4">
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">只能选择今天之后</label>
            <DatePicker
              v-model="futureDate"
              :min="today"
              placeholder="选择未来日期"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">只能选择过去30天</label>
            <DatePicker
              v-model="pastDate"
              :max="today"
              :min="thirtyDaysAgo"
              placeholder="选择过去30天内的日期"
            />
          </div>
        </div>
        <div class="text-sm text-gray-600">
          <p>今天: {{ today }}</p>
          <p>30天前: {{ thirtyDaysAgo }}</p>
        </div>
      </div>
    </ExampleBlock>

    <!-- 自定义触发器 -->
    <ExampleBlock 
      title="自定义触发器" 
      description="自定义日期选择器的触发元素"
      :code="customCode">
      <div class="space-y-4">
        <DatePicker v-model="customDate">
          <template #trigger>
            <button class="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <svg class="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              {{ customDate || '点击选择日期' }}
            </button>
          </template>
        </DatePicker>
        <p class="text-sm text-gray-600">
          选择的日期: {{ customDate || '未选择' }}
        </p>
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">DatePicker Props</h3>
          <ApiTable :data="datePickerProps" />
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Events</h3>
          <ApiTable :data="events" />
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Slots</h3>
          <ApiTable :data="slots" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { DatePicker } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 基础用法
const basicDate = ref('')
const handleBasicChange = (date: string) => {
  console.log('日期变化:', date)
}

// 不同尺寸
const smallDate = ref('')
const mediumDate = ref('')
const largeDate = ref('')

// 禁用状态
const disabledDate = ref('2024-01-01')
const readonlyDate = ref('2024-06-15')

// 日期格式
const formatDate1 = ref('')
const formatDate2 = ref('')
const formatDate3 = ref('')

// 日期范围限制
const futureDate = ref('')
const pastDate = ref('')

const today = computed(() => {
  return new Date().toISOString().split('T')[0]
})

const thirtyDaysAgo = computed(() => {
  const date = new Date()
  date.setDate(date.getDate() - 30)
  return date.toISOString().split('T')[0]
})

// 自定义触发器
const customDate = ref('')

// 代码示例
const basicCode = `import { ref } from 'vue'
import { DatePicker } from '@ui-lib/ui-vue'

const selectedDate = ref('')

const handleChange = (date) => {
  console.log('选择的日期:', date)
}`

const sizeCode = `import { DatePicker } from '@ui-lib/ui-vue'

// 不同尺寸
<DatePicker size="sm" placeholder="小尺寸" />
<DatePicker size="md" placeholder="默认尺寸" />
<DatePicker size="lg" placeholder="大尺寸" />`

const disabledCode = `import { DatePicker } from '@ui-lib/ui-vue'

// 禁用状态
<DatePicker disabled />
<DatePicker readonly />`

const formatCode = `import { DatePicker } from '@ui-lib/ui-vue'

// 不同日期格式
<DatePicker format="YYYY-MM-DD" />
<DatePicker format="MM/DD/YYYY" />
<DatePicker format="DD.MM.YYYY" />`

const rangeCode = `import { DatePicker } from '@ui-lib/ui-vue'

// 日期范围限制
<DatePicker :min="minDate" :max="maxDate" />`

const customCode = `import { DatePicker } from '@ui-lib/ui-vue'

// 自定义触发器
<DatePicker>
  <template #trigger>
    <button>自定义按钮</button>
  </template>
</DatePicker>`

// API 数据
const datePickerProps = [
  { name: 'modelValue', type: 'string', default: '-', description: '当前选中的日期' },
  { name: 'placeholder', type: 'string', default: '请选择日期', description: '输入框占位文本' },
  { name: 'format', type: 'string', default: 'YYYY-MM-DD', description: '日期格式' },
  { name: 'size', type: 'sm | md | lg', default: 'md', description: '输入框尺寸' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'readonly', type: 'boolean', default: 'false', description: '是否只读' },
  { name: 'min', type: 'string', default: '-', description: '最小可选日期' },
  { name: 'max', type: 'string', default: '-', description: '最大可选日期' },
  { name: 'clearable', type: 'boolean', default: 'true', description: '是否显示清除按钮' }
]

const events = [
  { name: 'update:modelValue', type: '(date: string) => void', description: 'v-model 更新事件' },
  { name: 'change', type: '(date: string) => void', description: '日期变化时触发' },
  { name: 'focus', type: '() => void', description: '输入框获得焦点时触发' },
  { name: 'blur', type: '() => void', description: '输入框失去焦点时触发' }
]

const slots = [
  { name: 'trigger', type: '-', default: '-', description: '自定义触发器' },
  { name: 'prefix', type: '-', default: '-', description: '输入框前置内容' },
  { name: 'suffix', type: '-', default: '-', description: '输入框后置内容' }
]
</script> 