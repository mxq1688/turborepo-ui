<template>
  <div :class="headerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CardProps, styleUtils, combineClasses } from '@ui-lib/shared'

interface VueCardHeaderProps extends /* @vue-ignore */ Omit<CardProps, 'children'> {}

const props = withDefaults(defineProps<VueCardHeaderProps>(), {})

const headerClasses = computed(() => {
  return combineClasses(
    styleUtils.card.header,
    props.className
  )
})
</script> 