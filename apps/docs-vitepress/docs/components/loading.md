# Loading 加载

用于数据加载时的过渡效果。

## 基础用法

基本的加载效果。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Loading />
      <Loading text="加载中..." />
    </div>
  </div>
</template>
```

## 不同尺寸

提供多种尺寸的加载效果。

```vue
<template>
  <div class="demo-container">
    <div class="flex items-center space-x-4">
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
      <Loading size="xl" />
    </div>
  </div>
</template>
```

## 不同类型

不同样式的加载动画。

```vue
<template>
  <div class="demo-container">
    <div class="grid grid-cols-2 gap-4">
      <div class="text-center">
        <Loading type="spinner" />
        <p class="mt-2 text-sm">旋转器</p>
      </div>
      
      <div class="text-center">
        <Loading type="dots" />
        <p class="mt-2 text-sm">点状</p>
      </div>
      
      <div class="text-center">
        <Loading type="pulse" />
        <p class="mt-2 text-sm">脉冲</p>
      </div>
      
      <div class="text-center">
        <Loading type="bars" />
        <p class="mt-2 text-sm">条状</p>
      </div>
    </div>
  </div>
</template>
```

## 自定义颜色

自定义加载动画的颜色。

```vue
<template>
  <div class="demo-container">
    <div class="flex items-center space-x-4">
      <Loading color="primary" />
      <Loading color="success" />
      <Loading color="warning" />
      <Loading color="danger" />
    </div>
  </div>
</template>
```

## 容器加载

在容器内显示加载状态。

```vue
<template>
  <div class="demo-container">
    <div class="relative">
      <Card class="min-h-48">
        <CardContent>
          <h3>数据内容</h3>
          <p>这里是一些数据内容...</p>
        </CardContent>
        
        <Loading v-if="loading" overlay />
      </Card>
      
      <Button @click="toggleLoading" class="mt-4">
        {{ loading ? '停止加载' : '开始加载' }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)

const toggleLoading = () => {
  loading.value = !loading.value
}
</script>
```

## 全屏加载

全屏的加载效果。

```vue
<template>
  <div class="demo-container">
    <Button @click="showFullscreen">显示全屏加载</Button>
    
    <FullscreenLoading 
      v-if="fullscreenLoading"
      text="正在处理，请稍候..."
      @close="fullscreenLoading = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fullscreenLoading = ref(false)

const showFullscreen = () => {
  fullscreenLoading.value = true
  
  // 模拟异步操作
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 3000)
}
</script>
```

## 表格加载

表格数据加载状态。

```vue
<template>
  <div class="demo-container">
    <Table 
      :columns="columns"
      :data-source="tableData"
      :loading="tableLoading"
    />
    
    <Button @click="loadTableData" class="mt-4">
      重新加载数据
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tableLoading = ref(false)
const tableData = ref([
  { id: 1, name: '张三', age: 25 },
  { id: 2, name: '李四', age: 30 }
])

const columns = [
  { key: 'name', title: '姓名', dataIndex: 'name' },
  { key: 'age', title: '年龄', dataIndex: 'age' }
]

const loadTableData = () => {
  tableLoading.value = true
  
  setTimeout(() => {
    tableLoading.value = false
  }, 2000)
}
</script>
```

## 按钮加载

按钮的加载状态。

```vue
<template>
  <div class="demo-container">
    <div class="space-x-4">
      <Button :loading="submitLoading" @click="handleSubmit">
        提交
      </Button>
      
      <Button :loading="saveLoading" @click="handleSave" variant="secondary">
        保存
      </Button>
      
      <Button :loading="deleteLoading" @click="handleDelete" variant="danger">
        删除
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const submitLoading = ref(false)
const saveLoading = ref(false)
const deleteLoading = ref(false)

const handleSubmit = () => {
  submitLoading.value = true
  setTimeout(() => submitLoading.value = false, 2000)
}

const handleSave = () => {
  saveLoading.value = true
  setTimeout(() => saveLoading.value = false, 2000)
}

const handleDelete = () => {
  deleteLoading.value = true
  setTimeout(() => deleteLoading.value = false, 2000)
}
</script>
```

## API 参数

### Loading Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| size | 加载器尺寸 | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| type | 加载动画类型 | `'spinner' \| 'dots' \| 'pulse' \| 'bars'` | `'spinner'` |
| color | 颜色主题 | `'primary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` |
| text | 加载文本 | `string` | - |
| overlay | 是否显示遮罩层 | `boolean` | `false` |

### FullscreenLoading Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| text | 加载文本 | `string` | `'加载中...'` |
| background | 背景色 | `string` | `'rgba(0, 0, 0, 0.7)'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭全屏加载时触发 | - |

## 主题定制

```css
.ui-loading {
  --loading-spinner-size: 20px;
  --loading-color-primary: #3b82f6;
  --loading-color-success: #10b981;
  --loading-color-warning: #f59e0b;
  --loading-color-danger: #ef4444;
  --loading-text-color: #6b7280;
  --loading-text-size: 14px;
  --loading-overlay-bg: rgba(255, 255, 255, 0.8);
}
``` 