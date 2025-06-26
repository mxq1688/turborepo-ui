<template>
  <button
    :class="buttonClasses"
    v-bind="$attrs"
    @click="handleClick"
    ref="buttonRef"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ButtonProps, styleUtils, combineClasses } from '@ui-lib/shared'

// Props定义 - 使用共享类型
interface VueButtonProps extends Omit<ButtonProps, 'children'> {}

const props = withDefaults(defineProps<VueButtonProps>(), {
  variant: 'primary',
  size: 'md'
})

// Emits定义
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Ref
const buttonRef = ref<HTMLButtonElement>()

// 样式计算 - 使用共享样式工具
const buttonClasses = computed(() => {
  return combineClasses(
    styleUtils.button.base,
    styleUtils.button.variants[props.variant!],
    styleUtils.button.sizes[props.size!],
    props.className
  )
})

// 事件处理
const handleClick = (event: MouseEvent) => {
  console.log('🐛 Vue按钮被点击!', { variant: props.variant, size: props.size })
  emit('click', event)
}

// 暴露ref给父组件
defineExpose({
  buttonRef
})
</script>

<style scoped>
/* 如果需要组件特定的样式，可以在这里添加 */
</style> 