<template>
  <div
    v-if="active"
    :class="panelClasses"
    role="tabpanel"
    :aria-labelledby="`tab-${tabKey}`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { combineClasses } from '@ui-lib/shared'

interface TabPanelProps {
  tabKey: string
  active?: boolean
  className?: string
  lazy?: boolean
}

const props = withDefaults(defineProps<TabPanelProps>(), {
  active: false,
  lazy: false
})

// 样式计算
const panelClasses = computed(() => {
  return combineClasses(
    'tab-panel',
    'py-4',
    props.className
  )
})
</script>

<style scoped>
.tab-panel {
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 