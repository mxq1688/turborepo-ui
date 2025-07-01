<template>
  <div :class="className">
    <!-- Tab List -->
    <div :class="tabListClasses" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        role="tab"
        :aria-selected="activeKey === tab.key"
        :disabled="tab.disabled"
        :class="getTabClasses(tab)"
        @click="!tab.disabled && handleTabClick(tab.key)"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab Content -->
    <div :class="tabPanelClasses" role="tabpanel">
      <component
        v-if="activeTab"
        :is="activeTab.component"
        v-bind="activeTab.props"
      >
        <template v-if="activeTab.content">
          {{ activeTab.content }}
        </template>
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { styleUtils, combineClasses } from '@ui-lib/shared'

// Tab接口
export interface VueTab {
  key: string
  label: string
  content?: string
  component?: any
  props?: Record<string, any>
  disabled?: boolean
}

// Props定义
interface VueTabsProps {
  tabs: VueTab[]
  defaultActiveKey?: string
  modelValue?: string
  className?: string
}

const props = withDefaults(defineProps<VueTabsProps>(), {
  defaultActiveKey: undefined
})

// Emits定义
const emit = defineEmits<{
  'update:modelValue': [key: string]
  change: [key: string]
}>()

// 内部状态
const internalActiveKey = ref(
  props.defaultActiveKey || props.tabs[0]?.key || ''
)

// 计算当前激活的key
const activeKey = computed(() => {
  return props.modelValue ?? internalActiveKey.value
})

const isControlled = computed(() => {
  return props.modelValue !== undefined
})

// 计算当前激活的tab
const activeTab = computed(() => {
  return props.tabs.find(tab => tab.key === activeKey.value)
})

// 样式计算
const tabListClasses = computed(() => {
  return styleUtils.tabs.list
})

const tabPanelClasses = computed(() => {
  return styleUtils.tabs.panel
})

const getTabClasses = (tab: VueTab) => {
  return combineClasses(
    styleUtils.tabs.tab,
    activeKey.value === tab.key && styleUtils.tabs.activeTab,
    tab.disabled && 'opacity-50 cursor-not-allowed'
  )
}

// 事件处理
const handleTabClick = (key: string) => {
  if (!isControlled.value) {
    internalActiveKey.value = key
  }
  emit('update:modelValue', key)
  emit('change', key)
}

// 监听外部props变化
watch(() => props.tabs, (newTabs) => {
  if (newTabs.length > 0 && !newTabs.some(tab => tab.key === activeKey.value)) {
    const firstKey = newTabs[0].key
    if (!isControlled.value) {
      internalActiveKey.value = firstKey
    }
    emit('update:modelValue', firstKey)
  }
}, { immediate: true })
</script>

<style scoped>
/* 如果需要组件特定的样式，可以在这里添加 */
</style> 