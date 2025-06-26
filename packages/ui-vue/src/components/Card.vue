<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CardProps, styleUtils, combineClasses } from '@ui-lib/shared'

// Props定义
interface VueCardProps extends Omit<CardProps, 'children'> {}

const props = withDefaults(defineProps<VueCardProps>(), {})

// 样式计算
const cardClasses = computed(() => {
  return combineClasses(
    styleUtils.card.base,
    props.className
  )
})
</script>

<style scoped>
/* Card特定样式 */
</style> 