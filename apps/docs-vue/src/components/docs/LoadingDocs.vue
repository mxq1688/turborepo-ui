<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Loading 加载中</h1>
      <p class="text-lg text-gray-600">用于页面和区块的加载中状态。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="简单的加载状态"
      :code="basicCode">
      <div class="space-y-4">
        <Loading />
        <Loading size="lg" />
      </div>
    </ExampleBlock>

    <!-- 不同尺寸 -->
    <ExampleBlock 
      title="不同尺寸" 
      description="多种尺寸的加载器"
      :code="sizeCode">
      <div class="space-y-4">
        <div class="flex items-center space-x-8">
          <div class="text-center">
            <Loading size="sm" />
            <p class="text-xs mt-2">小</p>
          </div>
          <div class="text-center">
            <Loading size="md" />
            <p class="text-xs mt-2">中</p>
          </div>
          <div class="text-center">
            <Loading size="lg" />
            <p class="text-xs mt-2">大</p>
          </div>
        </div>
      </div>
    </ExampleBlock>

    <!-- 容器加载 -->
    <ExampleBlock 
      title="容器加载" 
      description="在容器内显示加载状态"
      :code="containerCode">
      <div class="space-y-4">
        <div class="relative bg-gray-100 h-32 rounded border flex items-center justify-center">
          <Loading />
          <p class="ml-3 text-gray-600">数据加载中...</p>
        </div>
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Loading Props</h3>
          <ApiTable :data="loadingProps" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loading } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 代码示例
const basicCode = `import { Loading } from '@ui-lib/ui-vue'

// 基础加载
<Loading />

// 大尺寸加载
<Loading size="lg" />`

const sizeCode = `import { Loading } from '@ui-lib/ui-vue'

// 不同尺寸
<Loading size="sm" />
<Loading size="md" />
<Loading size="lg" />`

const containerCode = `import { Loading } from '@ui-lib/ui-vue'

// 容器内加载
<div class="loading-container">
  <Loading />
  <p>数据加载中...</p>
</div>`

// API 数据
const loadingProps = [
  { name: 'size', type: 'sm | md | lg', default: 'md', description: '加载器大小' },
  { name: 'color', type: 'string', default: '#3b82f6', description: '加载器颜色' },
  { name: 'text', type: 'string', default: '-', description: '加载提示文字' }
]
</script> 