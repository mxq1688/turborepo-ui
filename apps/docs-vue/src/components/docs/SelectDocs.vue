<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Select 选择器</h1>
      <p class="text-lg text-gray-600">下拉选择器，弹出一个下拉菜单给用户选择操作。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="基本的选择器"
      :code="basicCode">
      <div class="space-y-4">
        <Select
          v-model="basicValue"
          :options="basicOptions"
          placeholder="请选择"
          label="基础选择器"
        />
        <p class="text-sm text-gray-600">已选择: {{ basicValue }}</p>
      </div>
    </ExampleBlock>

    <!-- 禁用状态 -->
    <ExampleBlock 
      title="禁用状态" 
      description="选择器不可用状态"
      :code="disabledCode">
      <div class="space-y-4">
        <Select
          v-model="disabledValue"
          :options="disabledOptions"
          placeholder="禁用状态"
          label="禁用选择器"
          disabled
        />
        <Select
          v-model="partialDisabledValue"
          :options="partialDisabledOptions"
          placeholder="部分选项禁用"
          label="部分禁用"
        />
      </div>
    </ExampleBlock>

    <!-- 错误状态 -->
    <ExampleBlock 
      title="错误状态" 
      description="表单验证错误状态"
      :code="errorCode">
      <div class="space-y-4">
        <Select
          v-model="errorValue"
          :options="basicOptions"
          placeholder="请选择"
          label="错误状态"
          error="请选择一个选项"
        />
      </div>
    </ExampleBlock>

    <!-- 大量选项 -->
    <ExampleBlock 
      title="大量选项" 
      description="选项较多时的滚动展示"
      :code="manyOptionsCode">
      <div class="space-y-4">
        <Select
          v-model="manyOptionsValue"
          :options="manyOptions"
          placeholder="选择城市"
          label="城市选择"
        />
        <p class="text-sm text-gray-600">已选择: {{ manyOptionsValue }}</p>
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Select Props</h3>
          <ApiTable :data="selectProps" />
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Option 配置</h3>
          <ApiTable :data="optionProps" />
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
import { ref } from 'vue'
import { Select } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 基础选项
const basicValue = ref('')
const basicOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' }
]

// 禁用状态
const disabledValue = ref('')
const disabledOptions = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' }
]

const partialDisabledValue = ref('')
const partialDisabledOptions = [
  { value: 'option1', label: '可选择' },
  { value: 'option2', label: '禁用状态', disabled: true },
  { value: 'option3', label: '也可选择' }
]

// 错误状态
const errorValue = ref('')

// 大量选项
const manyOptionsValue = ref('')
const manyOptions = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
  { value: 'hangzhou', label: '杭州' },
  { value: 'nanjing', label: '南京' },
  { value: 'wuhan', label: '武汉' },
  { value: 'chengdu', label: '成都' },
  { value: 'xian', label: '西安' },
  { value: 'chongqing', label: '重庆' },
  { value: 'tianjin', label: '天津' },
  { value: 'shenyang', label: '沈阳' },
  { value: 'changsha', label: '长沙' },
  { value: 'zhengzhou', label: '郑州' },
  { value: 'dalian', label: '大连' }
]

// 代码示例
const basicCode = 'import { ref } from "vue"\nimport { Select } from "@ui-lib/ui-vue"\n\nconst selectedValue = ref("")\nconst options = [\n  { value: "react", label: "React" },\n  { value: "vue", label: "Vue" }\n]'

const disabledCode = 'import { Select } from "@ui-lib/ui-vue"\n\n// 禁用选择器\n<Select disabled />'

const errorCode = 'import { Select } from "@ui-lib/ui-vue"\n\n// 错误状态\n<Select error="请选择一个选项" />'

const manyOptionsCode = 'import { Select } from "@ui-lib/ui-vue"\n\n// 大量选项示例'

// API 数据
const selectProps = [
  { name: 'modelValue', type: 'string', default: '-', description: '当前选中的值' },
  { name: 'options', type: 'SelectOption[]', default: '[]', description: '选项数据' },
  { name: 'placeholder', type: 'string', default: '请选择...', description: '选择框默认文字' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'label', type: 'string', default: '-', description: '标签文本' },
  { name: 'error', type: 'string', default: '-', description: '错误信息' }
]

const optionProps = [
  { name: 'value', type: 'string', default: '-', description: '选项的值' },
  { name: 'label', type: 'string', default: '-', description: '选项的标签' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用该选项' }
]

const events = [
  { name: 'update:modelValue', type: '(value: string) => void', description: 'v-model 更新事件' },
  { name: 'change', type: '(value: string) => void', description: '选择改变时触发' }
]
</script> 