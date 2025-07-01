<template>
  <div v-if="visible" :class="[
    'rounded-md p-4 flex items-start space-x-3',
    variantClasses[type]
  ]">
    <!-- Icon -->
    <div class="flex-shrink-0">
      <svg
        :class="iconClasses[type]"
        fill="currentColor"
        viewBox="0 0 20 20"
        class="w-5 h-5"
      >
        <path v-if="type === 'success'" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        <path v-else-if="type === 'warning'" fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        <path v-else-if="type === 'error'" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        <path v-else fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>

    <!-- Content -->
    <div class="flex-1 min-w-0">
      <h3 v-if="title" :class="[
        'text-sm font-medium',
        titleClasses[type]
      ]">
        {{ title }}
      </h3>
      <div :class="[
        'text-sm',
        messageClasses[type],
        title && 'mt-1'
      ]">
        <slot>{{ message }}</slot>
      </div>
    </div>

    <!-- Close button -->
    <div v-if="closable" class="flex-shrink-0">
      <button
        type="button"
        @click="close"
        :class="[
          'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
          closeButtonClasses[type]
        ]"
      >
        <span class="sr-only">关闭</span>
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  type?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  message?: string
  closable?: boolean
  visible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  closable: false,
  visible: true
})

const emit = defineEmits<{
  close: []
}>()

const visible = ref(props.visible)

const variantClasses = computed(() => ({
  info: 'bg-blue-50 border border-blue-200',
  success: 'bg-green-50 border border-green-200',
  warning: 'bg-yellow-50 border border-yellow-200',
  error: 'bg-red-50 border border-red-200'
}))

const iconClasses = computed(() => ({
  info: 'text-blue-400',
  success: 'text-green-400',
  warning: 'text-yellow-400',
  error: 'text-red-400'
}))

const titleClasses = computed(() => ({
  info: 'text-blue-800',
  success: 'text-green-800',
  warning: 'text-yellow-800',
  error: 'text-red-800'
}))

const messageClasses = computed(() => ({
  info: 'text-blue-700',
  success: 'text-green-700',
  warning: 'text-yellow-700',
  error: 'text-red-700'
}))

const closeButtonClasses = computed(() => ({
  info: 'text-blue-500 hover:bg-blue-100 focus:ring-blue-600',
  success: 'text-green-500 hover:bg-green-100 focus:ring-green-600',
  warning: 'text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600',
  error: 'text-red-500 hover:bg-red-100 focus:ring-red-600'
}))

const close = () => {
  visible.value = false
  emit('close')
}
</script>

<style scoped>
/* 组件特定样式 */
</style> 