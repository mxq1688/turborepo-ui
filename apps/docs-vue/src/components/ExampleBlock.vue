<template>
  <div class="mt-8">
    <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ title }}</h3>
    <p v-if="description" class="text-gray-600 mb-4">{{ description }}</p>
    <div class="border border-gray-200 rounded-lg">
      <div class="p-6 bg-white border-b border-gray-200">
        <slot />
      </div>
      <div class="bg-gray-50">
        <details class="group">
          <summary class="px-4 py-3 cursor-pointer text-sm text-gray-600 hover:text-gray-900 flex items-center justify-between">
            <span>显示代码</span>
            <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div class="px-4 pb-4">
            <pre class="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{{ code }}</code>
            </pre>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
  code: string
}

defineProps<Props>()
</script>

<style scoped>
/* 组件特定样式 */
</style>