# Upload 上传

用于文件上传的组件，支持拖拽上传、多文件上传等功能。

## 基础用法

基本的文件上传功能。

```vue
<template>
  <div class="demo-container">
    <Upload @change="handleUpload">
      <Button>选择文件</Button>
    </Upload>
  </div>
</template>

<script setup>
const handleUpload = (files) => {
  console.log('上传的文件:', files)
}
</script>
```

## 拖拽上传

支持拖拽文件进行上传。

```vue
<template>
  <div class="demo-container">
    <Upload 
      drag 
      @change="handleDragUpload"
      accept="image/*"
    >
      <div class="upload-drag-area">
        <Icon name="upload" size="48" />
        <p>将文件拖拽到此处，或<em>点击上传</em></p>
        <p class="text-sm text-gray-500">支持扩展名：.jpg .png .gif</p>
      </div>
    </Upload>
  </div>
</template>

<script setup>
const handleDragUpload = (files) => {
  console.log('拖拽上传的文件:', files)
}
</script>
```

## 多文件上传

支持一次选择多个文件上传。

```vue
<template>
  <div class="demo-container">
    <Upload 
      multiple 
      @change="handleMultipleUpload"
      :max-count="5"
    >
      <Button>选择多个文件</Button>
    </Upload>
    
    <div v-if="fileList.length" class="mt-4">
      <p>已选择的文件：</p>
      <ul class="file-list">
        <li v-for="file in fileList" :key="file.name" class="file-item">
          {{ file.name }} ({{ formatFileSize(file.size) }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fileList = ref([])

const handleMultipleUpload = (files) => {
  fileList.value = Array.from(files)
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
</script>
```

## 图片上传预览

上传图片时显示预览。

```vue
<template>
  <div class="demo-container">
    <Upload 
      @change="handleImageUpload"
      accept="image/*"
      :show-file-list="false"
    >
      <div class="image-upload">
        <img v-if="imageUrl" :src="imageUrl" alt="预览图" class="preview-image" />
        <div v-else class="upload-placeholder">
          <Icon name="plus" size="24" />
          <p>上传图片</p>
        </div>
      </div>
    </Upload>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const imageUrl = ref('')

const handleImageUpload = (files) => {
  const file = files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imageUrl.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}
</script>

<style scoped>
.image-upload {
  width: 120px;
  height: 120px;
  border: 2px dashed #d1d5db;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s;
}

.image-upload:hover {
  border-color: #3b82f6;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.upload-placeholder {
  text-align: center;
  color: #6b7280;
}
</style>
```

## 文件列表

显示上传文件的列表。

```vue
<template>
  <div class="demo-container">
    <Upload 
      v-model:file-list="fileList"
      @change="handleFileChange"
      @remove="handleFileRemove"
      multiple
    >
      <Button>选择文件</Button>
    </Upload>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fileList = ref([
  {
    uid: '1',
    name: 'example.png',
    status: 'done',
    url: '/example.png'
  }
])

const handleFileChange = (files) => {
  console.log('文件变化:', files)
}

const handleFileRemove = (file) => {
  console.log('删除文件:', file)
}
</script>
```

## 上传进度

显示上传进度。

```vue
<template>
  <div class="demo-container">
    <Upload 
      :custom-request="customUpload"
      @change="handleProgressUpload"
    >
      <Button :loading="uploading">
        {{ uploading ? '上传中...' : '上传文件' }}
      </Button>
    </Upload>
    
    <div v-if="uploadProgress > 0" class="mt-4">
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          :style="{ width: uploadProgress + '%' }"
        ></div>
      </div>
      <p class="text-sm text-gray-600 mt-2">
        上传进度: {{ uploadProgress }}%
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const uploading = ref(false)
const uploadProgress = ref(0)

const handleProgressUpload = (files) => {
  console.log('开始上传:', files)
}

const customUpload = (file) => {
  uploading.value = true
  uploadProgress.value = 0
  
  // 模拟上传进度
  const interval = setInterval(() => {
    uploadProgress.value += 10
    if (uploadProgress.value >= 100) {
      clearInterval(interval)
      uploading.value = false
      setTimeout(() => {
        uploadProgress.value = 0
      }, 1000)
    }
  }, 200)
}
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #f3f4f6;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #3b82f6;
  transition: width 0.2s ease;
}
</style>
```

## 文件类型限制

限制上传文件的类型和大小。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Upload 
        accept=".jpg,.jpeg,.png,.gif"
        :max-size="2 * 1024 * 1024"
        @change="handleImageUpload"
        @exceed-size="handleExceedSize"
        @invalid-type="handleInvalidType"
      >
        <Button>上传图片 (最大2MB)</Button>
      </Upload>
      
      <Upload 
        accept=".pdf,.doc,.docx"
        :max-size="10 * 1024 * 1024"
        @change="handleDocUpload"
      >
        <Button>上传文档 (最大10MB)</Button>
      </Upload>
    </div>
  </div>
</template>

<script setup>
const handleImageUpload = (files) => {
  console.log('图片上传:', files)
}

const handleDocUpload = (files) => {
  console.log('文档上传:', files)
}

const handleExceedSize = (file, limit) => {
  alert(`文件 ${file.name} 超过了大小限制 ${limit}MB`)
}

const handleInvalidType = (file, accept) => {
  alert(`文件 ${file.name} 类型不符合要求，支持的类型：${accept}`)
}
</script>
```

## API 参数

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| accept | 接受的文件类型 | `string` | - |
| multiple | 是否支持多选 | `boolean` | `false` |
| drag | 是否支持拖拽上传 | `boolean` | `false` |
| maxCount | 最大文件数量 | `number` | - |
| maxSize | 单个文件最大尺寸(字节) | `number` | - |
| showFileList | 是否显示文件列表 | `boolean` | `true` |
| fileList | 文件列表 | `UploadFile[]` | `[]` |
| customRequest | 自定义上传行为 | `(file: File) => void` | - |
| beforeUpload | 上传前的钩子 | `(file: File) => boolean \| Promise<boolean>` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 文件状态改变时触发 | `(files: FileList)` |
| remove | 删除文件时触发 | `(file: UploadFile)` |
| preview | 预览文件时触发 | `(file: UploadFile)` |
| exceedSize | 文件大小超限时触发 | `(file: File, limit: number)` |
| invalidType | 文件类型不符时触发 | `(file: File, accept: string)` |
| progress | 上传进度变化时触发 | `(percent: number, file: UploadFile)` |
| success | 上传成功时触发 | `(response: any, file: UploadFile)` |
| error | 上传失败时触发 | `(error: Error, file: UploadFile)` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 上传按钮或区域内容 |
| tip | 提示信息 |

### UploadFile Interface

```typescript
interface UploadFile {
  uid: string
  name: string
  status: 'ready' | 'uploading' | 'done' | 'error'
  size?: number
  type?: string
  url?: string
  response?: any
  error?: Error
  progress?: number
}
```

## 主题定制

```css
.ui-upload {
  --upload-border-color: #d1d5db;
  --upload-border-radius: 6px;
  --upload-bg-hover: #f9fafb;
  --upload-drag-border: #3b82f6;
  --upload-progress-bg: #3b82f6;
  --upload-file-item-bg: #f9fafb;
  --upload-file-item-padding: 8px 12px;
  --upload-remove-color: #ef4444;
}
``` 