<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Alert 警告提示</h1>
      <p class="text-lg text-gray-600">警告提示，展现需要关注的信息。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="最简单的用法"
      :code="basicCode">
      <div class="space-y-4">
        <Alert type="info" title="信息提示" message="这是一条信息提示的文案" />
        <Alert type="success" title="成功提示" message="这是一条成功提示的文案" />
        <Alert type="warning" title="警告提示" message="这是一条警告提示的文案" />
        <Alert type="error" title="错误提示" message="这是一条错误提示的文案" />
      </div>
    </ExampleBlock>

    <!-- 可关闭的提示 -->
    <ExampleBlock 
      title="可关闭的提示" 
      description="可手动关闭的警告提示"
      :code="closableCode">
      <div class="space-y-4">
        <Alert 
          v-if="showAlert1"
          type="info" 
          title="可关闭的信息提示" 
          message="点击右侧的关闭按钮可以关闭这条提示"
          closable
          @close="showAlert1 = false"
        />
        <Alert 
          v-if="showAlert2"
          type="warning" 
          title="可关闭的警告提示" 
          message="这条警告提示也可以关闭"
          closable
          @close="showAlert2 = false"
        />
        <button 
          @click="resetAlerts"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          重置提示
        </button>
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Alert Props</h3>
          <ApiTable :data="alertProps" />
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Events</h3>
          <ApiTable :data="events" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Alert } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 可关闭的提示
const showAlert1 = ref(true)
const showAlert2 = ref(true)

const resetAlerts = () => {
  showAlert1.value = true
  showAlert2.value = true
}

// 代码示例
const basicCode = 'import { Alert } from "@ui-lib/ui-vue"\n\n// 基础用法\n<Alert type="info" title="提示" message="这是提示信息" />'
const closableCode = 'import { Alert } from "@ui-lib/ui-vue"\n\n// 可关闭的提示\n<Alert closable @close="handleClose" />'

// API 数据
const alertProps = [
  { name: 'type', type: 'info | success | warning | error', default: 'info', description: '警告提示的类型' },
  { name: 'title', type: 'string', default: '-', description: '警告提示的标题' },
  { name: 'message', type: 'string', default: '-', description: '警告提示的内容' },
  { name: 'closable', type: 'boolean', default: 'false', description: '是否可关闭' },
  { name: 'showIcon', type: 'boolean', default: 'true', description: '是否显示图标' }
]

const events = [
  { name: 'close', type: '() => void', description: '关闭时的回调函数' }
]
</script> 