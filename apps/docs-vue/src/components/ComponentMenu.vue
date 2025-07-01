<template>
  <div class="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900">组件</h2>
    </div>
    <div class="p-2">
      <!-- 已实现的组件 -->
      <div class="mb-6">
        <div class="text-xs font-medium text-green-600 uppercase tracking-wider px-3 py-2 bg-green-50 rounded">
          ✅ 已实现
        </div>
        <div class="space-y-1 mt-2">
          <button
            v-for="comp in implementedComponents"
            :key="comp.id"
            @click="$emit('component-change', comp.id)"
            :class="[
              'w-full text-left px-3 py-2 rounded text-sm transition-colors',
              activeComponent === comp.id
                ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            ]"
          >
            <div class="font-medium">{{ comp.name }}</div>
            <div class="text-xs text-gray-500 mt-1">{{ comp.description }}</div>
          </button>
        </div>
      </div>

      <!-- 规划中的组件 -->
      <div class="mb-4">
        <div class="text-xs font-medium text-orange-600 uppercase tracking-wider px-3 py-2 bg-orange-50 rounded">
          🚧 规划中
        </div>
        <div class="space-y-1 mt-2">
          <div
            v-for="comp in plannedComponents"
            :key="comp.id"
            class="w-full text-left px-3 py-2 rounded text-sm text-gray-400 cursor-not-allowed"
          >
            <div class="font-medium">{{ comp.name }}</div>
            <div class="text-xs text-gray-400 mt-1">{{ comp.description }}</div>
          </div>
        </div>
      </div>

      <!-- 系统功能 -->
      <div class="mb-4">
        <div class="text-xs font-medium text-purple-600 uppercase tracking-wider px-3 py-2 bg-purple-50 rounded">
          🛠️ 系统功能
        </div>
        <div class="space-y-1 mt-2">
          <button
            v-for="comp in systemComponents"
            :key="comp.id"
            @click="$emit('component-change', comp.id)"
            :class="[
              'w-full text-left px-3 py-2 rounded text-sm transition-colors',
              activeComponent === comp.id
                ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            ]"
          >
            <div class="font-medium">{{ comp.name }}</div>
            <div class="text-xs text-gray-500 mt-1">{{ comp.description }}</div>
          </button>
        </div>
      </div>

      <!-- 提示信息 -->
      <div class="mx-3 mt-6 p-3 bg-blue-50 rounded-lg">
        <div class="text-xs text-blue-800 font-medium mb-1">💡 开发提示</div>
        <div class="text-xs text-blue-600">
          Vue 组件库快速发展中，更多组件陆续推出！
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface Props {
  activeComponent: string
}

interface ComponentItem {
  id: string
  name: string
  description: string
}

defineProps<Props>()
defineEmits<{
  'component-change': [component: string]
}>()

// 已实现的组件
const implementedComponents = reactive<ComponentItem[]>([
  { id: 'button', name: 'Button 按钮', description: '基础按钮组件' },
  { id: 'card', name: 'Card 卡片', description: '通用卡片容器' },
  { id: 'input', name: 'Input 输入框', description: '基础表单输入组件' },
  { id: 'modal', name: 'Modal 对话框', description: '模态对话框组件' },
  { id: 'select', name: 'Select 选择器', description: '下拉选择器组件' },
  { id: 'checkbox', name: 'Checkbox 多选框', description: '多选框组件' },
  { id: 'radio', name: 'Radio 单选框', description: '单选框组件' },
  { id: 'switch', name: 'Switch 开关', description: '开关组件' },
  { id: 'tabs', name: 'Tabs 标签页', description: '选项卡切换组件' },
  { id: 'table', name: 'Table 表格', description: '数据表格组件' },
  { id: 'badge', name: 'Badge 徽标', description: '徽标数字组件' },
  { id: 'avatar', name: 'Avatar 头像', description: '用户头像组件' },
  { id: 'alert', name: 'Alert 警告提示', description: '警告提示组件' },
  { id: 'loading', name: 'Loading 加载', description: '加载状态组件' },
  { id: 'form', name: 'Form 表单', description: '表单组件与验证' },
  { id: 'datepicker', name: 'DatePicker 日期选择', description: '日期选择器组件' },
  { id: 'upload', name: 'Upload 上传', description: '文件上传组件' },
])

// 规划中的组件
const plannedComponents = reactive<ComponentItem[]>([
  // 导航组件
  { id: 'menu', name: 'Menu 导航菜单', description: '为页面和功能提供导航' },
  { id: 'breadcrumb', name: 'Breadcrumb 面包屑', description: '页面导航路径' },
  
  // 反馈组件
  { id: 'notification', name: 'Notification 通知', description: '全局通知提醒' },
  { id: 'message', name: 'Message 消息', description: '操作反馈消息' },
])

// 系统功能
const systemComponents = reactive<ComponentItem[]>([
  { id: 'theme', name: 'Theme 主题定制', description: '主题配置和定制系统' },
  { id: 'i18n', name: 'I18n 国际化', description: '多语言支持系统' },
])
</script>

<style scoped>
/* 组件特定样式 */
</style> 