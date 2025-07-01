<template>
  <div :class="contentClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CardProps, styleUtils, combineClasses } from '@ui-lib/shared'

interface VueCardContentProps extends /* @vue-ignore */ Omit<CardProps, 'children'> {}

const props = withDefaults(defineProps<VueCardContentProps>(), {})

const contentClasses = computed(() => {
  return combineClasses(
    styleUtils.card.content,
    props.className
  )
})
</script> 