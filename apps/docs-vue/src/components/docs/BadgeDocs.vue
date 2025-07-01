<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Badge 徽标数</h1>
      <p class="text-lg text-gray-600">用于显示数量或状态的小型徽标。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="基本的徽标用法"
      :code="basicCode">
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <Badge>Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </div>
    </ExampleBlock>

    <!-- 不同尺寸 -->
    <ExampleBlock 
      title="不同尺寸" 
      description="多种尺寸的徽标"
      :code="sizeCode">
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Badge Props</h3>
          <ApiTable :data="badgeProps" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 代码示例
const basicCode = 'import { Badge } from "@ui-lib/ui-vue"\n\n// 基础用法\n<Badge>Default</Badge>\n<Badge variant="primary">Primary</Badge>'
const sizeCode = 'import { Badge } from "@ui-lib/ui-vue"\n\n// 不同尺寸\n<Badge size="sm">Small</Badge>'

// API 数据
const badgeProps = [
  { name: 'variant', type: 'default | primary | success | warning | error', default: 'default', description: '徽标的类型' },
  { name: 'size', type: 'sm | md | lg', default: 'md', description: '徽标的大小' }
]
</script> 