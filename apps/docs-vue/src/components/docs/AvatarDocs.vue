<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Avatar 头像</h1>
      <p class="text-lg text-gray-600">用来代表用户或事物，支持图片、图标或字符展示。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="头像的基本使用"
      :code="basicCode">
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
          <Avatar>U</Avatar>
          <Avatar>用户</Avatar>
        </div>
      </div>
    </ExampleBlock>

    <!-- 不同尺寸 -->
    <ExampleBlock 
      title="不同尺寸" 
      description="三种不同尺寸的头像"
      :code="sizeCode">
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <Avatar size="sm">S</Avatar>
          <Avatar size="md">M</Avatar>
          <Avatar size="lg">L</Avatar>
        </div>
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Avatar Props</h3>
          <ApiTable :data="avatarProps" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 代码示例
const basicCode = `import { Avatar } from '@ui-lib/ui-vue'

// 图片头像
<Avatar src="avatar.jpg" />

// 文字头像  
<Avatar>用户</Avatar>`

const sizeCode = `import { Avatar } from '@ui-lib/ui-vue'

// 不同尺寸
<Avatar size="sm">S</Avatar>
<Avatar size="md">M</Avatar>
<Avatar size="lg">L</Avatar>`

// API 数据
const avatarProps = [
  { name: 'src', type: 'string', default: '-', description: '图片地址' },
  { name: 'alt', type: 'string', default: '-', description: '图片描述' },
  { name: 'size', type: 'sm | md | lg', default: 'md', description: '头像大小' },
  { name: 'shape', type: 'circle | square', default: 'circle', description: '头像形状' }
]
</script> 