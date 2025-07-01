<template>
  <label :class="[
    'inline-flex items-center cursor-pointer',
    disabled && 'opacity-50 cursor-not-allowed'
  ]">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="handleChange"
      :disabled="disabled"
      :class="[
        'sr-only peer'
      ]"
    />
    <div :class="[
      'relative w-4 h-4 border-2 rounded transition-all duration-200',
      'peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2',
      modelValue
        ? 'bg-blue-600 border-blue-600'
        : 'border-gray-300 bg-white hover:border-gray-400',
      disabled && 'opacity-50'
    ]">
      <svg
        v-if="modelValue"
        class="absolute inset-0 w-3 h-3 text-white m-auto"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <span v-if="label" class="ml-2 text-sm text-gray-700">
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean
  label?: string
  disabled?: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<style scoped>
/* 组件特定样式 */
</style> 