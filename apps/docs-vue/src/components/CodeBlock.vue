<template>
  <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
    <div class="flex items-center justify-between mb-2">
      <span class="text-xs text-gray-400 uppercase">{{ language }}</span>
      <button 
        class="text-xs text-gray-400 hover:text-white transition-colors"
        @click="copyToClipboard"
      >
        {{ copied ? '已复制' : '复制' }}
      </button>
    </div>
    <pre class="text-green-400 text-sm">
      <code ref="codeRef"><slot /></code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  language?: string
}

const props = withDefaults(defineProps<Props>(), {
  language: 'typescript'
})

const copied = ref(false)
const codeRef = ref<HTMLElement>()

const copyToClipboard = async () => {
  try {
    const text = codeRef.value?.textContent || ''
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}
</script> 