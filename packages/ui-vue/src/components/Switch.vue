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
      class="sr-only peer"
    />
    <div :class="[
      'relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out',
      'peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2',
      modelValue
        ? 'bg-blue-600'
        : 'bg-gray-200',
      disabled && 'opacity-50'
    ]">
      <span :class="[
        'inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out',
        'shadow-sm ring-0',
        modelValue ? 'translate-x-6' : 'translate-x-1'
      ]" />
    </div>
    <span v-if="label" class="ml-3 text-sm text-gray-700">
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