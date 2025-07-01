<template>
  <div :class="[
    'relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full',
    sizeClasses[size]
  ]">
    <img
      v-if="src && !imageError"
      :src="src"
      :alt="alt"
      :class="[
        'w-full h-full object-cover rounded-full',
        loading && 'opacity-0'
      ]"
      @load="handleImageLoad"
      @error="handleImageError"
    />
    <span
      v-else-if="name && !src"
      :class="[
        'font-medium text-gray-700',
        textSizeClasses[size]
      ]"
    >
      {{ getInitials(name) }}
    </span>
    <svg
      v-else
      :class="[
        'text-gray-400',
        iconSizeClasses[size]
      ]"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    
    <!-- Loading indicator -->
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-full">
      <svg class="animate-spin h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  src?: string
  alt?: string
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  alt: 'Avatar'
})

const loading = ref(!!props.src)
const imageError = ref(false)

const sizeClasses = computed(() => ({
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
  '2xl': 'w-20 h-20'
}))

const textSizeClasses = computed(() => ({
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl'
}))

const iconSizeClasses = computed(() => ({
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
  '2xl': 'w-12 h-12'
}))

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

const handleImageLoad = () => {
  loading.value = false
}

const handleImageError = () => {
  loading.value = false
  imageError.value = true
}
</script>

<style scoped>
/* 组件特定样式 */
</style> 