<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Checkbox 多选框</h1>
      <p class="text-lg text-gray-600">多选框，在一组可选项中进行多项选择时使用。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="简单的多选框"
      :code="basicCode">
      <div class="space-y-4">
        <div class="space-y-2">
          <Checkbox v-model="basicChecked1" label="选项 A" />
          <Checkbox v-model="basicChecked2" label="选项 B" />
          <Checkbox v-model="basicChecked3" label="选项 C" />
        </div>
        <p class="text-sm text-gray-600">
          选中状态: A({{ basicChecked1 }}), B({{ basicChecked2 }}), C({{ basicChecked3 }})
        </p>
      </div>
    </ExampleBlock>

    <!-- 禁用状态 -->
    <ExampleBlock 
      title="禁用状态" 
      description="多选框不可用状态"
      :code="disabledCode">
      <div class="space-y-4">
        <div class="space-y-2">
          <Checkbox v-model="disabledChecked1" label="未选中禁用" disabled />
          <Checkbox v-model="disabledChecked2" label="选中禁用" disabled />
        </div>
      </div>
    </ExampleBlock>

    <!-- 多选框组 -->
    <ExampleBlock 
      title="多选框组" 
      description="方便的组合使用"
      :code="groupCode">
      <div class="space-y-4">
        <div>
          <h4 class="text-md font-medium mb-3">选择兴趣爱好：</h4>
          <div class="space-y-2">
            <Checkbox 
              v-for="hobby in hobbies" 
              :key="hobby.value"
              v-model="selectedHobbies[hobby.value]"
              :label="hobby.label"
              @change="handleHobbyChange"
            />
          </div>
          <p class="text-sm text-gray-600 mt-2">
            已选择: {{ getSelectedHobbies() }}
          </p>
        </div>
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Checkbox Props</h3>
          <ApiTable :data="checkboxProps" />
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
import { ref, reactive } from 'vue'
import { Checkbox } from '@ui-lib/ui-vue'
// @ts-ignore
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 基础用法
const basicChecked1 = ref(false)
const basicChecked2 = ref(true)
const basicChecked3 = ref(false)

// 禁用状态
const disabledChecked1 = ref(false)
const disabledChecked2 = ref(true)

// 多选框组
const hobbies = [
  { value: 'reading', label: '阅读' },
  { value: 'music', label: '音乐' },
  { value: 'sports', label: '运动' },
  { value: 'travel', label: '旅行' }
]

const selectedHobbies = reactive({
  reading: false,
  music: true,
  sports: false,
  travel: false
})

const handleHobbyChange = (checked: boolean) => {
  console.log('爱好变更:', checked)
}

const getSelectedHobbies = () => {
  return hobbies
    .filter(hobby => selectedHobbies[hobby.value as keyof typeof selectedHobbies])
    .map(hobby => hobby.label)
    .join(', ') || '无'
}

// 代码示例
const basicCode = 'import { ref } from "vue"\nimport { Checkbox } from "@ui-lib/ui-vue"\n\nconst checked = ref(false)'

const disabledCode = 'import { Checkbox } from "@ui-lib/ui-vue"\n\n// 禁用状态示例\n<Checkbox disabled />'

const groupCode = 'import { reactive } from "vue"\nimport { Checkbox } from "@ui-lib/ui-vue"\n\n// 多选框组示例'

// API 数据
const checkboxProps = [
  { name: 'modelValue', type: 'boolean', default: 'false', description: '是否选中' },
  { name: 'label', type: 'string', default: '-', description: '多选框的标签' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'indeterminate', type: 'boolean', default: 'false', description: '设置 indeterminate 状态，只负责样式控制' },
  { name: 'value', type: 'any', default: '-', description: '多选框的值' }
]

const events = [
  { name: 'update:modelValue', type: '(checked: boolean) => void', description: 'v-model 更新事件' },
  { name: 'change', type: '(checked: boolean) => void', description: '选中状态改变时触发' }
]
</script> 