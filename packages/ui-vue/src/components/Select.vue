<template>
  <div class="w-full">
    <label v-if="label" class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
    </label>
    
    <div class="relative" ref="selectRef">
      <button
        type="button"
        :class="[
          'relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm transition-colors',
          'focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500',
          disabled && 'opacity-50 cursor-not-allowed',
          error && 'border-red-500 focus:ring-red-500 focus:border-red-500'
        ]"
        @click="!disabled && toggleOpen()"
        @keydown="handleKeyDown"
        :disabled="disabled"
        aria-haspopup="listbox"
        :aria-expanded="isOpen"
      >
        <span class="block truncate text-left">
          {{ selectedOption ? selectedOption.label : placeholder }}
        </span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            :class="[
              'w-4 h-4 text-gray-400 transition-transform',
              isOpen && 'transform rotate-180'
            ]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <Transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          v-if="isOpen"
          class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
        >
          <div role="listbox">
            <button
              v-for="option in options"
              :key="option.value"
              type="button"
              :class="[
                'w-full text-left px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors',
                option.disabled && 'opacity-50 cursor-not-allowed',
                modelValue === option.value && 'bg-blue-100 text-blue-900'
              ]"
              @click="selectOption(option)"
              :disabled="option.disabled"
              role="option"
              :aria-selected="modelValue === option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </Transition>
    </div>

    <p v-if="error" class="mt-1 text-sm text-red-600">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface Props {
  options: SelectOption[]
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  label?: string
  error?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '请选择...',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isOpen = ref(false)
const selectRef = ref<HTMLDivElement>()

const selectedOption = computed(() => 
  props.options.find(option => option.value === props.modelValue)
)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: SelectOption) => {
  if (!option.disabled) {
    emit('update:modelValue', option.value)
    isOpen.value = false
  }
}

// 点击外部关闭下拉框
const handleClickOutside = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

// 键盘事件处理
const handleKeyDown = (event: KeyboardEvent) => {
  if (props.disabled) return

  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault()
      toggleOpen()
      break
    case 'Escape':
      isOpen.value = false
      break
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<style scoped>
/* 组件特定样式 */
</style> 