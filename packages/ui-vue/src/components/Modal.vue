<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <!-- Background overlay - click to close -->
      <div 
        class="absolute inset-0 w-full h-full bg-transparent cursor-default"
        @click="$emit('close')"
        aria-label="Close modal"
      />
      
      <div 
        :class="[
          'relative z-10 bg-white rounded-lg shadow-xl w-full',
          sizeClasses[size],
          'max-h-screen overflow-auto'
        ]"
        role="dialog"
        aria-modal="true"
      >
        <div v-if="title" class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
          <button
            @click="$emit('close')"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div class="px-6 py-4">
          <slot />
        </div>

        <div v-if="$slots.footer" class="px-6 py-4 border-t border-gray-200 flex justify-end space-x-2">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'

interface Props {
  isOpen: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

defineEmits<{
  close: []
}>()

const sizeClasses = computed(() => ({
  sm: 'max-w-sm',
  md: 'max-w-md', 
  lg: 'max-w-lg',
  xl: 'max-w-xl'
}))

// ESC键关闭模态框
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    // 通过事件总线或者其他方式通知父组件
  }
}

// 阻止背景滚动
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)
  } else {
    document.body.style.overflow = 'unset'
    document.removeEventListener('keydown', handleEscape)
  }
})
</script>

<style scoped>
/* 动画效果 */
.v-enter-active, .v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style> 