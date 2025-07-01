<template>
  <teleport to="body">
    <div v-if="visible" :class="overlayClasses">
      <div :class="contentClasses">
        <!-- 加载图标 -->
        <div :class="spinnerClasses">
          <svg class="animate-spin" fill="none" viewBox="0 0 24 24">
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
        </div>
        
        <!-- 加载文本 -->
        <div v-if="text" :class="textClasses">
          {{ text }}
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { combineClasses } from '@ui-lib/shared'

interface FullscreenLoadingProps {
  visible?: boolean
  text?: string
  size?: 'small' | 'medium' | 'large'
  background?: string
}

const props = withDefaults(defineProps<FullscreenLoadingProps>(), {
  visible: false,
  text: '加载中...',
  size: 'medium',
  background: 'rgba(255, 255, 255, 0.8)'
})

// 样式计算
const overlayClasses = computed(() => {
  return combineClasses(
    'fixed inset-0 z-50 flex items-center justify-center',
    'transition-opacity duration-200'
  )
})

const contentClasses = computed(() => {
  return 'flex flex-col items-center space-y-4'
})

const spinnerClasses = computed(() => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  }
  
  return combineClasses(
    'text-blue-600',
    sizeClasses[props.size]
  )
})

const textClasses = computed(() => {
  return 'text-gray-600 text-lg font-medium'
})
</script>

<style scoped>
.overlay-bg {
  background: v-bind(background);
}
</style> 