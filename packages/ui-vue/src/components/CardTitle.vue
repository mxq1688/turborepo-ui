<template>
  <h3 :class="titleClasses">
    <slot />
  </h3>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CardProps, styleUtils, combineClasses } from '@ui-lib/shared'

interface VueCardTitleProps extends Omit<CardProps, 'children'> {}

const props = withDefaults(defineProps<VueCardTitleProps>(), {})

const titleClasses = computed(() => {
  return combineClasses(
    styleUtils.card.title,
    props.className
  )
})
</script> 