<template>
  <span :class="[
    'inline-flex items-center rounded-full font-medium',
    sizeClasses[size],
    variantClasses[variant]
  ]">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { styleUtils } from '@ui-lib/shared'

interface Props {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md'
})

const sizeClasses = computed(() => ({
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-0.5 text-sm',
  lg: 'px-3 py-1 text-sm'
}))

const variantClasses = computed(() => ({
  default: 'bg-gray-100 text-gray-800',
  primary: styleUtils.badge.variants.primary,
  success: styleUtils.badge.variants.success,
  warning: styleUtils.badge.variants.warning,
  danger: styleUtils.badge.variants.error,
  info: styleUtils.badge.variants.info
}))
</script>

<style scoped>
/* 组件特定样式 */
</style> 