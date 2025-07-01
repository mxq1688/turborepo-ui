<template>
  <section :id="id" class="mb-12">
    <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  id: string
}

defineProps<Props>()
</script> 