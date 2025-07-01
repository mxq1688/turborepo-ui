<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Tabs 标签页</h1>
      <p class="text-lg text-gray-600">分隔内容上有关联但属于不同类别的数据集合。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="基本的标签页"
      :code="basicCode">
      <div class="space-y-4">
        <Tabs v-model="activeTab1" :tabs="basicTabs" />
      </div>
    </ExampleBlock>

    <!-- 禁用状态 -->
    <ExampleBlock 
      title="禁用状态" 
      description="禁用某个标签页"
      :code="disabledCode">
      <div class="space-y-4">
        <Tabs v-model="activeTab2" :tabs="disabledTabs" />
      </div>
    </ExampleBlock>

    <!-- 卡片样式 -->
    <ExampleBlock 
      title="卡片样式" 
      description="另一种样式的标签页"
      :code="cardCode">
      <div class="space-y-4">
        <Tabs v-model="activeTab3" :tabs="cardTabs" type="card" />
      </div>
    </ExampleBlock>

    <!-- 动态标签页 -->
    <ExampleBlock 
      title="动态标签页" 
      description="可以增减标签页"
      :code="dynamicCode">
      <div class="space-y-4">
        <div class="flex items-center space-x-2 mb-4">
          <button 
            @click="addTab"
            class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          >
            添加标签
          </button>
          <button 
            @click="removeTab"
            class="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
            :disabled="dynamicTabs.length <= 1"
          >
            删除标签
          </button>
        </div>
        <Tabs v-model="activeTab4" :tabs="dynamicTabs" />
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Tabs Props</h3>
          <ApiTable :data="tabsProps" />
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Tab 配置</h3>
          <ApiTable :data="tabProps" />
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
import { Tabs } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 基础用法
const activeTab1 = ref('tab1')
const basicTabs = [
  { key: 'tab1', label: '标签一', content: '这是标签一的内容' },
  { key: 'tab2', label: '标签二', content: '这是标签二的内容' },
  { key: 'tab3', label: '标签三', content: '这是标签三的内容' }
]

// 禁用状态
const activeTab2 = ref('tab1')
const disabledTabs = [
  { key: 'tab1', label: '可用标签', content: '这是可用标签的内容' },
  { key: 'tab2', label: '禁用标签', content: '这是禁用标签的内容', disabled: true },
  { key: 'tab3', label: '另一个标签', content: '这是另一个标签的内容' }
]

// 卡片样式
const activeTab3 = ref('card1')
const cardTabs = [
  { key: 'card1', label: '卡片一', content: '卡片样式的内容一' },
  { key: 'card2', label: '卡片二', content: '卡片样式的内容二' },
  { key: 'card3', label: '卡片三', content: '卡片样式的内容三' }
]

// 动态标签页
const activeTab4 = ref('dynamic1')
const dynamicTabs = ref([
  { key: 'dynamic1', label: '标签 1', content: '动态标签内容 1' },
  { key: 'dynamic2', label: '标签 2', content: '动态标签内容 2' }
])

let tabCounter = 2

const addTab = () => {
  tabCounter++
  dynamicTabs.value.push({
    key: `dynamic${tabCounter}`,
    label: `标签 ${tabCounter}`,
    content: `动态标签内容 ${tabCounter}`
  })
}

const removeTab = () => {
  if (dynamicTabs.value.length > 1) {
    const removedTab = dynamicTabs.value.pop()
    if (activeTab4.value === removedTab?.key) {
      activeTab4.value = dynamicTabs.value[dynamicTabs.value.length - 1].key
    }
  }
}

// 代码示例
const basicCode = `import { ref } from 'vue'
import { Tabs } from '@ui-lib/ui-vue'

const activeTab = ref('tab1')
const tabs = [
  { key: 'tab1', label: '标签一', content: '内容一' },
  { key: 'tab2', label: '标签二', content: '内容二' }
]`

const disabledCode = `import { Tabs } from '@ui-lib/ui-vue'

const tabs = [
  { key: 'tab1', label: '可用', content: '内容一' },
  { key: 'tab2', label: '禁用', content: '内容二', disabled: true }
]`

const cardCode = `import { Tabs } from '@ui-lib/ui-vue'

// 卡片样式
<Tabs type="card" :tabs="tabs" />`

const dynamicCode = `import { ref } from 'vue'
import { Tabs } from '@ui-lib/ui-vue'

const tabs = ref([...])

const addTab = () => {
  tabs.value.push({ key: '...', label: '...', content: '...' })
}`

// API 数据
const tabsProps = [
  { name: 'modelValue', type: 'string', default: '-', description: '当前激活的标签页的 key' },
  { name: 'tabs', type: 'Tab[]', default: '[]', description: '标签页配置' },
  { name: 'type', type: 'line | card', default: 'line', description: '标签页的基本样式' },
  { name: 'size', type: 'sm | md | lg', default: 'md', description: '标签页大小' },
  { name: 'centered', type: 'boolean', default: 'false', description: '标签是否居中显示' }
]

const tabProps = [
  { name: 'key', type: 'string', default: '-', description: '标签页的唯一标识' },
  { name: 'label', type: 'string', default: '-', description: '标签页的标题' },
  { name: 'content', type: 'string | Component', default: '-', description: '标签页的内容' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用该标签页' }
]

const events = [
  { name: 'update:modelValue', type: '(key: string) => void', description: 'v-model 更新事件' },
  { name: 'change', type: '(key: string) => void', description: '切换标签页时触发' }
]
</script> 