<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Switch 开关</h1>
      <p class="text-lg text-gray-600">开关选择器，表示两种相互对立的状态间的切换。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="最简单的用法"
      :code="basicCode">
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <Switch v-model="basicValue" />
          <Switch v-model="basicValue2" />
        </div>
        <p class="text-sm text-gray-600">
          开关状态: {{ basicValue }} / {{ basicValue2 }}
        </p>
      </div>
    </ExampleBlock>

    <!-- 带标签 -->
    <ExampleBlock 
      title="带标签" 
      description="开关配合标签使用"
      :code="labelCode">
      <div class="space-y-4">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-900">接收通知</span>
            <Switch v-model="notificationSwitch" @change="handleNotificationChange" />
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-900">自动保存</span>
            <Switch v-model="autoSaveSwitch" @change="handleAutoSaveChange" />
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-900">深色模式</span>
            <Switch v-model="darkModeSwitch" @change="handleDarkModeChange" />
          </div>
        </div>
      </div>
    </ExampleBlock>

    <!-- 禁用状态 -->
    <ExampleBlock 
      title="禁用状态" 
      description="开关不可用状态"
      :code="disabledCode">
      <div class="space-y-4">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-400">禁用开关（关）</span>
            <Switch v-model="disabledOff" disabled />
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-400">禁用开关（开）</span>
            <Switch v-model="disabledOn" disabled />
          </div>
        </div>
      </div>
    </ExampleBlock>

    <!-- 尺寸 -->
    <ExampleBlock 
      title="不同尺寸" 
      description="三种不同的尺寸"
      :code="sizeCode">
      <div class="space-y-4">
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <span class="text-sm w-16">小尺寸:</span>
            <Switch v-model="smallSwitch" size="small" />
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm w-16">默认:</span>
            <Switch v-model="mediumSwitch" />
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm w-16">大尺寸:</span>
            <Switch v-model="largeSwitch" size="large" />
          </div>
        </div>
      </div>
    </ExampleBlock>

    <!-- 加载状态 -->
    <ExampleBlock 
      title="加载状态" 
      description="异步操作时的加载状态"
      :code="loadingCode">
      <div class="space-y-4">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-900">网络设置</span>
            <Switch 
              v-model="networkSwitch" 
              :loading="networkLoading"
              @change="handleNetworkChange" 
            />
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-900">同步设置</span>
            <Switch 
              v-model="syncSwitch" 
              :loading="syncLoading"
              @change="handleSyncChange" 
            />
          </div>
        </div>
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Switch Props</h3>
          <ApiTable :data="switchProps" />
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
import { Switch } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 基础用法
const basicValue = ref(false)
const basicValue2 = ref(true)

// 带标签
const notificationSwitch = ref(true)
const autoSaveSwitch = ref(false)
const darkModeSwitch = ref(false)

const handleNotificationChange = (value: boolean) => {
  console.log('通知设置:', value)
}

const handleAutoSaveChange = (value: boolean) => {
  console.log('自动保存:', value)
}

const handleDarkModeChange = (value: boolean) => {
  console.log('深色模式:', value)
}

// 禁用状态
const disabledOff = ref(false)
const disabledOn = ref(true)

// 不同尺寸
const smallSwitch = ref(false)
const mediumSwitch = ref(true)
const largeSwitch = ref(false)

// 加载状态
const networkSwitch = ref(false)
const networkLoading = ref(false)
const syncSwitch = ref(true)
const syncLoading = ref(false)

const handleNetworkChange = async (value: boolean) => {
  networkLoading.value = true
  try {
    // 模拟异步操作
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('网络设置变更:', value)
  } finally {
    networkLoading.value = false
  }
}

const handleSyncChange = async (value: boolean) => {
  syncLoading.value = true
  try {
    // 模拟异步操作
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('同步设置变更:', value)
  } finally {
    syncLoading.value = false
  }
}

// 代码示例
const basicCode = 'import { ref } from "vue"\nimport { Switch } from "@ui-lib/ui-vue"\n\nconst checked = ref(false)'
const labelCode = 'import { Switch } from "@ui-lib/ui-vue"\n\n// 带文字的开关'
const sizeCode = 'import { Switch } from "@ui-lib/ui-vue"\n\n// 不同尺寸的开关'
const disabledCode = 'import { Switch } from "@ui-lib/ui-vue"\n\n// 禁用状态'
const loadingCode = 'import { Switch } from "@ui-lib/ui-vue"\n\n// 加载状态'

// API 数据
const switchProps = [
  { name: 'modelValue', type: 'boolean', default: 'false', description: '开关状态' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'size', type: "'small' | 'middle' | 'large'", default: "'middle'", description: '开关大小' },
  { name: 'loading', type: 'boolean', default: 'false', description: '加载中状态' },
  { name: 'checkedChildren', type: 'string', default: '-', description: '选中时的内容' },
  { name: 'unCheckedChildren', type: 'string', default: '-', description: '非选中时的内容' }
]

const events = [
  { name: 'update:modelValue', type: '(checked: boolean) => void', description: 'v-model 更新事件' },
  { name: 'change', type: '(checked: boolean) => void', description: '开关状态改变时触发' }
]
</script> 