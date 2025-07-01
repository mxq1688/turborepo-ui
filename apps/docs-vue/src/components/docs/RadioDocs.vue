<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Radio 单选框</h1>
      <p class="text-lg text-gray-600">单选框，在一组备选项中进行单项选择时使用。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="简单的单选框"
      :code="basicCode">
      <div class="space-y-4">
        <div class="space-y-2">
          <Radio v-model="basicValue" value="option1" label="选项一" />
          <Radio v-model="basicValue" value="option2" label="选项二" />
          <Radio v-model="basicValue" value="option3" label="选项三" />
        </div>
        <p class="text-sm text-gray-600">
          选中的值: {{ basicValue || '未选择' }}
        </p>
      </div>
    </ExampleBlock>

    <!-- 单选框组 -->
    <ExampleBlock 
      title="单选框组" 
      description="便捷的组合使用"
      :code="groupCode">
      <div class="space-y-4">
        <div>
          <h4 class="text-md font-medium mb-3">选择您的技能等级：</h4>
          <RadioGroup v-model="groupValue" :options="skillOptions" />
          <p class="text-sm text-gray-600 mt-2">
            选择的等级: {{ getSelectedSkill() }}
          </p>
        </div>
      </div>
    </ExampleBlock>

    <!-- 禁用状态 -->
    <ExampleBlock 
      title="禁用状态" 
      description="单选框不可用状态"
      :code="disabledCode">
      <div class="space-y-4">
        <div class="space-y-2">
          <Radio v-model="disabledValue" value="enabled" label="可选择" />
          <Radio v-model="disabledValue" value="disabled" label="禁用状态" disabled />
          <Radio v-model="disabledValue" value="another" label="另一个选项" />
        </div>
        <p class="text-sm text-gray-600">
          选中的值: {{ disabledValue || '未选择' }}
        </p>
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Radio Props</h3>
          <ApiTable :data="radioProps" />
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">RadioGroup Props</h3>
          <ApiTable :data="radioGroupProps" />
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
import { Radio, RadioGroup } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 基础用法
const basicValue = ref('')

// 单选框组
const groupValue = ref('')
const skillOptions = [
  { value: 'beginner', label: '初学者' },
  { value: 'intermediate', label: '中级' },
  { value: 'advanced', label: '高级' },
  { value: 'expert', label: '专家' }
]

const getSelectedSkill = () => {
  const selected = skillOptions.find(option => option.value === groupValue.value)
  return selected ? selected.label : '未选择'
}

// 禁用状态
const disabledValue = ref('enabled')

// 代码示例
const basicCode = `import { ref } from 'vue'
import { Radio } from '@ui-lib/ui-vue'

const selectedValue = ref('')`

const groupCode = `import { ref } from 'vue'
import { RadioGroup } from '@ui-lib/ui-vue'

const value = ref('')
const options = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' }
]`

const disabledCode = `import { Radio } from '@ui-lib/ui-vue'

// 禁用状态
<Radio disabled label="禁用选项" />`

// API 数据
const radioProps = [
  { name: 'modelValue', type: 'string', default: '-', description: '当前选中的值' },
  { name: 'value', type: 'string', default: '-', description: '单选框的值' },
  { name: 'label', type: 'string', default: '-', description: '单选框的标签' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'name', type: 'string', default: '-', description: '原生 name 属性' }
]

const radioGroupProps = [
  { name: 'modelValue', type: 'string', default: '-', description: '当前选中的值' },
  { name: 'options', type: 'RadioOption[]', default: '[]', description: '选项配置' },
  { name: 'direction', type: 'horizontal | vertical', default: 'vertical', description: '排列方向' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用整个组' }
]

const events = [
  { name: 'update:modelValue', type: '(value: string) => void', description: 'v-model 更新事件' },
  { name: 'change', type: '(value: string) => void', description: '选择改变时触发' }
]
</script> 