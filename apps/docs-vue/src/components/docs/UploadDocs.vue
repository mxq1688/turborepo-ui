<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Upload 上传</h1>
      <p class="text-lg text-gray-600">文件选择上传和拖拽上传控件。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="点击上传文件"
      :code="basicCode">
      <div class="space-y-4">
        <Upload
          v-model="basicFiles"
          @change="handleBasicChange"
          @remove="handleBasicRemove"
        >
          <div class="upload-area">
            <div class="text-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer">
              <div class="text-gray-600">
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p class="mt-2">点击选择文件</p>
                <p class="text-sm text-gray-500">支持 jpg, png, pdf 格式</p>
              </div>
            </div>
          </div>
        </Upload>
        <div v-if="basicFiles.length" class="mt-4">
          <h4 class="text-sm font-medium text-gray-900 mb-2">已选择的文件:</h4>
          <ul class="space-y-1">
            <li v-for="file in basicFiles" :key="file.name" class="text-sm text-gray-600">
              {{ file.name }} ({{ formatFileSize(file.size) }})
            </li>
          </ul>
        </div>
      </div>
    </ExampleBlock>

    <!-- 多文件上传 -->
    <ExampleBlock 
      title="多文件上传" 
      description="支持同时选择多个文件"
      :code="multipleCode">
      <div class="space-y-4">
        <Upload
          v-model="multipleFiles"
          multiple
          :max-count="5"
          @change="handleMultipleChange"
          @remove="handleMultipleRemove"
        >
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            选择多个文件 (最多5个)
          </button>
        </Upload>
        <div v-if="multipleFiles.length" class="mt-4">
          <h4 class="text-sm font-medium text-gray-900 mb-2">文件列表 ({{ multipleFiles.length }}/5):</h4>
          <ul class="space-y-2">
            <li v-for="(file, index) in multipleFiles" :key="file.name" 
                class="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span class="text-sm">{{ file.name }}</span>
              <button @click="removeFile(index)" 
                      class="text-red-500 hover:text-red-700 text-sm">
                删除
              </button>
            </li>
          </ul>
        </div>
      </div>
    </ExampleBlock>

    <!-- 拖拽上传 -->
    <ExampleBlock 
      title="拖拽上传" 
      description="支持拖拽文件到区域内上传"
      :code="dragCode">
      <div class="space-y-4">
        <Upload
          v-model="dragFiles"
          drag
          @change="handleDragChange"
          @remove="handleDragRemove"
        >
          <div class="drag-upload-area">
            <div class="text-center p-8 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <div class="text-blue-600">
                <svg class="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p class="mt-4 text-lg font-medium">拖拽文件到此区域</p>
                <p class="text-sm">或者点击选择文件</p>
              </div>
            </div>
          </div>
        </Upload>
        <div v-if="dragFiles.length" class="mt-4">
          <h4 class="text-sm font-medium text-gray-900 mb-2">拖拽上传的文件:</h4>
          <ul class="space-y-1">
            <li v-for="file in dragFiles" :key="file.name" class="text-sm text-gray-600">
              📎 {{ file.name }}
            </li>
          </ul>
        </div>
      </div>
    </ExampleBlock>

    <!-- 文件类型限制 -->
    <ExampleBlock 
      title="文件类型限制" 
      description="限制上传的文件类型"
      :code="typeCode">
      <div class="space-y-4">
        <Upload
          v-model="typeFiles"
          :accept="['image/*']"
          @change="handleTypeChange"
          @error="handleUploadError"
        >
          <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            仅上传图片文件
          </button>
        </Upload>
        <div v-if="typeFiles.length" class="mt-4">
          <h4 class="text-sm font-medium text-gray-900 mb-2">图片文件:</h4>
          <div class="grid grid-cols-3 gap-4">
            <div v-for="file in typeFiles" :key="file.name" class="text-center">
              <div class="w-20 h-20 bg-gray-200 rounded flex items-center justify-center">
                <span class="text-xs text-gray-500">{{ getFileExtension(file.name) }}</span>
              </div>
              <p class="text-xs mt-1 truncate">{{ file.name }}</p>
            </div>
          </div>
        </div>
        <div v-if="uploadError" class="text-red-500 text-sm">
          {{ uploadError }}
        </div>
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Upload Props</h3>
          <ApiTable :data="uploadProps" />
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
import { Upload } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 基础上传
const basicFiles = ref([])
const handleBasicChange = (files: File[]) => {
  console.log('基础上传文件变化:', files)
}
const handleBasicRemove = (file: File) => {
  console.log('删除文件:', file.name)
}

// 多文件上传
const multipleFiles = ref([])
const handleMultipleChange = (files: File[]) => {
  console.log('多文件上传变化:', files)
}
const handleMultipleRemove = (file: File) => {
  console.log('删除多文件:', file.name)
}

const removeFile = (index: number) => {
  multipleFiles.value.splice(index, 1)
}

// 拖拽上传
const dragFiles = ref([])
const handleDragChange = (files: File[]) => {
  console.log('拖拽上传文件:', files)
}
const handleDragRemove = (file: File) => {
  console.log('删除拖拽文件:', file.name)
}

// 文件类型限制
const typeFiles = ref([])
const uploadError = ref('')
const handleTypeChange = (files: File[]) => {
  uploadError.value = ''
  console.log('类型限制文件:', files)
}
const handleUploadError = (error: string) => {
  uploadError.value = error
}

// 工具函数
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const getFileExtension = (filename: string): string => {
  return filename.split('.').pop()?.toUpperCase() || ''
}

// 代码示例
const basicCode = `import { ref } from 'vue'
import { Upload } from '@ui-lib/ui-vue'

const files = ref([])

const handleChange = (files) => {
  console.log('文件变化:', files)
}`

const multipleCode = `import { Upload } from '@ui-lib/ui-vue'

// 多文件上传
<Upload multiple :max-count="5" v-model="files" />`

const dragCode = `import { Upload } from '@ui-lib/ui-vue'

// 拖拽上传
<Upload drag v-model="files" />`

const typeCode = `import { Upload } from '@ui-lib/ui-vue'

// 文件类型限制
<Upload :accept="['image/*']" @error="handleError" />`

// API 数据
const uploadProps = [
  { name: 'modelValue', type: 'File[]', default: '[]', description: '文件列表' },
  { name: 'multiple', type: 'boolean', default: 'false', description: '是否支持多选文件' },
  { name: 'drag', type: 'boolean', default: 'false', description: '是否支持拖拽上传' },
  { name: 'accept', type: 'string[]', default: '-', description: '接受上传的文件类型' },
  { name: 'maxCount', type: 'number', default: '-', description: '最大文件数量' },
  { name: 'maxSize', type: 'number', default: '-', description: '文件大小限制(字节)' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' }
]

const events = [
  { name: 'update:modelValue', type: '(files: File[]) => void', description: 'v-model 更新事件' },
  { name: 'change', type: '(files: File[]) => void', description: '文件状态改变时的回调' },
  { name: 'remove', type: '(file: File) => void', description: '删除文件时的回调' },
  { name: 'error', type: '(error: string) => void', description: '上传出错时的回调' }
]
</script>

<style scoped>
.upload-area:hover .text-gray-400 {
  color: #3b82f6;
}
.drag-upload-area {
  transition: all 0.3s ease;
}
</style> 