<template>
  <label class="inline-flex items-center cursor-pointer">
    <input
      type="radio"
      :class="radioClasses"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
      ref="radioRef"
    />
    <span v-if="label" :class="labelClasses">
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { styleUtils, combineClasses } from '@ui-lib/shared'

// Props定义
interface VueRadioProps {
  label?: string
  name?: string
  value?: string
  checked?: boolean
  disabled?: boolean
  className?: string
}

const props = withDefaults(defineProps<VueRadioProps>(), {
  disabled: false,
  checked: false
})

// Emits定义
const emit = defineEmits<{
  change: [event: Event, value: string | undefined]
}>()

// Ref
const radioRef = ref<HTMLInputElement>()

// 样式计算
const radioClasses = computed(() => {
  return combineClasses(
    styleUtils.radio.base,
    props.className
  )
})

const labelClasses = computed(() => {
  return styleUtils.radio.label
})

// 事件处理
const handleChange = (event: Event) => {
  if (props.disabled) return
  emit('change', event, props.value)
}

// 暴露ref给父组件
defineExpose({
  radioRef
})
</script>

<style scoped>
/* 如果需要组件特定的样式，可以在这里添加 */
</style> 