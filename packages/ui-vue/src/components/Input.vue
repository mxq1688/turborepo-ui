<template>
  <div>
    <label v-if="label" :class="labelClasses">
      {{ label }}
    </label>
    <input
      :class="inputClasses"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      v-bind="$attrs"
      @input="handleInput"
    />
    <div v-if="error" :class="errorClasses">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { InputProps, styleUtils, combineClasses } from '@ui-lib/shared'

// Props定义
interface VueInputProps extends Omit<InputProps, 'children' | 'value'> {
  modelValue?: string
}

const props = withDefaults(defineProps<VueInputProps>(), {
  type: 'text',
  disabled: false
})

// Emits定义
const emit = defineEmits<{
  'update:modelValue': [value: string]
  input: [event: Event]
}>()

// 样式计算
const inputClasses = computed(() => {
  return combineClasses(
    styleUtils.input.base,
    props.error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
    props.className
  )
})

const labelClasses = computed(() => styleUtils.input.label)
const errorClasses = computed(() => styleUtils.input.error)

// 事件处理
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  console.log('🐛 Vue输入框值变化:', target.value)
  emit('update:modelValue', target.value)
  emit('input', event)
}
</script>

<style scoped>
/* Input特定样式 */
</style> 