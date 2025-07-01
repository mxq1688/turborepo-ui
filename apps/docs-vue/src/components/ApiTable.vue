<template>
  <div class="mt-8">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ title }}</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              属性
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              说明
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              类型
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              默认值
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr 
            v-for="(row, index) in data" 
            :key="index" 
            class="hover:bg-gray-50"
          >
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {{ row.property }}
            </td>
            <td class="px-6 py-4 text-sm text-gray-500">
              {{ row.description }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-mono">
              {{ row.type }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
              {{ row.default }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ApiRow {
  property: string
  description: string
  type: string
  default: string
}

interface Props {
  title: string
  data: ApiRow[]
}

defineProps<Props>()
</script>

<style scoped>
/* 组件特定样式 */
</style>