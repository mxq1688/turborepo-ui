<template>
  <div>
    <div v-if="label" class="text-sm font-medium text-gray-700 mb-2">
      {{ label }}
    </div>
    <div :class="containerClasses">
      <Radio
        v-for="option in options"
        :key="option.value"
        :name="name"
        :value="option.value"
        :checked="modelValue === option.value"
        :disabled="option.disabled"
        :label="option.label"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { combineClasses } from '@ui-lib/shared'
import Radio from './Radio.vue'

// 选项接口
export interface RadioOption {
  value: string
  label: string
  disabled?: boolean
}

// Props定义
interface VueRadioGroupProps {
  options: RadioOption[]
  modelValue?: string
  name: string
  label?: string
  direction?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<VueRadioGroupProps>(), {
  direction: 'vertical'
})

// Emits定义
const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()

// 样式计算
const containerClasses = computed(() => {
  return combineClasses(
    'flex',
    props.direction === 'horizontal' ? 'flex-row space-x-4' : 'flex-col space-y-2'
  )
})

// 事件处理
const handleChange = (event: Event, value: string | undefined) => {
  if (value) {
    emit('update:modelValue', value)
    emit('change', value)
  }
}
</script>

<style scoped>
/* 如果需要组件特定的样式，可以在这里添加 */
</style> 