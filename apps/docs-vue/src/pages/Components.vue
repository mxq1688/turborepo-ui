<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 左侧导航 -->
    <div class="flex">
      <ComponentMenu 
        :active-component="activeComponent" 
        @component-change="handleComponentChange" 
      />

      <!-- 主内容区域 -->
      <div class="flex-1 max-w-none">
        <div class="max-w-4xl mx-auto p-8">
          <component :is="currentComponentDocs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue'
import ComponentMenu from '../components/ComponentMenu.vue'

// 异步加载文档组件
const ButtonDocs = defineAsyncComponent(() => import('../components/docs/ButtonDocs.vue'))
const CardDocs = defineAsyncComponent(() => import('../components/docs/CardDocs.vue'))
const InputDocs = defineAsyncComponent(() => import('../components/docs/InputDocs.vue'))
const ModalDocs = defineAsyncComponent(() => import('../components/docs/ModalDocs.vue'))
const ThemeDocs = defineAsyncComponent(() => import('../components/docs/ThemeDocs.vue'))
const I18nDocs = defineAsyncComponent(() => import('../components/docs/I18nDocs.vue'))

// 创建简单的文档组件模板
const createSimpleDocsComponent = (name: string, description: string) => {
  return {
    template: `
      <div>
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">${name}</h1>
          <p class="text-lg text-gray-600">${description}</p>
        </div>
        
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-blue-900 mb-2">组件开发中</h3>
              <p class="text-blue-800">
                该组件正在积极开发中，完整的文档和示例即将推出。
                <br />
                敬请期待更多功能和用法示例！
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

// 当前活跃的组件
const activeComponent = ref('button')

// 处理组件切换
const handleComponentChange = (component: string) => {
  activeComponent.value = component
}

// 计算当前要显示的组件文档
const currentComponentDocs = computed(() => {
  switch (activeComponent.value) {
    case 'button':
      return ButtonDocs
    case 'card':
      return CardDocs
    case 'input':
      return InputDocs
    case 'modal':
      return ModalDocs
    case 'theme':
      return ThemeDocs
    case 'i18n':
      return I18nDocs
    case 'select':
      return createSimpleDocsComponent('Select 选择器', '下拉选择器组件')
    case 'checkbox':
      return createSimpleDocsComponent('Checkbox 多选框', '多选框组件')
    case 'switch':
      return createSimpleDocsComponent('Switch 开关', '开关选择器组件')
    case 'badge':
      return createSimpleDocsComponent('Badge 徽标', '徽标数字组件')
    case 'avatar':
      return createSimpleDocsComponent('Avatar 头像', '用户头像展示组件')
    case 'alert':
      return createSimpleDocsComponent('Alert 警告提示', '警告提示组件')
    case 'loading':
      return createSimpleDocsComponent('Loading 加载', '加载状态组件')
    default:
      return createSimpleDocsComponent('组件文档', '组件文档正在完善中...')
  }
})
</script>

<style scoped>
/* 组件特定样式 */
</style> 