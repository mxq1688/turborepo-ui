<template>
  <div :class="[
    'inline-flex items-center',
    fullscreen && 'fixed inset-0 bg-white bg-opacity-75 z-50 justify-center'
  ]">
    <svg
      :class="[
        'animate-spin text-blue-600',
        sizeClasses[size]
      ]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <span v-if="text" :class="[
      'ml-2 text-gray-600',
      textSizeClasses[size]
    ]">
      {{ text }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  fullscreen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  fullscreen: false
})

const sizeClasses = computed(() => ({
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
}))

const textSizeClasses = computed(() => ({
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
}))
</script>

<style scoped>
/* 组件特定样式 */
</style> 