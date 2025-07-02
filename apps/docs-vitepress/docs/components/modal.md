# Modal 对话框

用于在当前页面上层显示的弹出框组件。

## 基础用法

基本的对话框使用方式。

```vue
<template>
  <div class="demo-container">
    <Button @click="showModal = true">打开对话框</Button>
    
    <Modal v-model="showModal" title="基础对话框">
      <p>这是对话框的内容区域。</p>
      <p>可以放置任何内容，包括文本、表单、图片等。</p>
      
      <template #footer>
        <Button @click="showModal = false">取消</Button>
        <Button type="primary" @click="handleConfirm">确定</Button>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)

const handleConfirm = () => {
  console.log('确认操作')
  showModal.value = false
}
</script>
```

## 不同尺寸

提供多种预设尺寸的对话框。

```vue
<template>
  <div class="demo-container">
    <div class="space-x-4">
      <Button @click="showSmall = true">小尺寸</Button>
      <Button @click="showMedium = true">中等尺寸</Button>
      <Button @click="showLarge = true">大尺寸</Button>
      <Button @click="showFull = true">全屏</Button>
    </div>
    
    <Modal v-model="showSmall" title="小尺寸对话框" size="sm">
      <p>这是一个小尺寸的对话框。</p>
    </Modal>
    
    <Modal v-model="showMedium" title="中等尺寸对话框" size="md">
      <p>这是一个中等尺寸的对话框，适合大部分使用场景。</p>
    </Modal>
    
    <Modal v-model="showLarge" title="大尺寸对话框" size="lg">
      <p>这是一个大尺寸的对话框，适合展示更多内容。</p>
      <p>可以包含复杂的表单、数据表格等。</p>
    </Modal>
    
    <Modal v-model="showFull" title="全屏对话框" fullscreen>
      <p>这是一个全屏对话框，占据整个屏幕。</p>
      <p>适合展示大量内容或复杂的交互界面。</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showSmall = ref(false)
const showMedium = ref(false)
const showLarge = ref(false)
const showFull = ref(false)
</script>
```

## 确认对话框

简单的确认对话框。

```vue
<template>
  <div class="demo-container">
    <div class="space-x-4">
      <Button @click="showConfirm">确认对话框</Button>
      <Button @click="showWarning" variant="warning">警告确认</Button>
      <Button @click="showDanger" variant="danger">危险操作</Button>
    </div>
  </div>
</template>

<script setup>
import { Modal } from '@ui-lib/ui-vue'

const showConfirm = () => {
  Modal.confirm({
    title: '确认操作',
    content: '你确定要执行这个操作吗？',
    onConfirm: () => {
      console.log('用户确认了操作')
    },
    onCancel: () => {
      console.log('用户取消了操作')
    }
  })
}

const showWarning = () => {
  Modal.warning({
    title: '警告',
    content: '这个操作可能会产生一些副作用，请谨慎操作。',
    onConfirm: () => {
      console.log('用户确认了警告操作')
    }
  })
}

const showDanger = () => {
  Modal.error({
    title: '危险操作',
    content: '这是一个不可逆的操作，数据将被永久删除！',
    confirmText: '我知道风险，继续删除',
    cancelText: '取消',
    onConfirm: () => {
      console.log('用户确认了危险操作')
    }
  })
}
</script>
```

## 自定义内容

包含复杂内容的对话框。

```vue
<template>
  <div class="demo-container">
    <Button @click="showForm = true">表单对话框</Button>
    
    <Modal v-model="showForm" title="编辑用户信息" size="md">
      <Form @submit="handleSubmit" :model="formData" class="space-y-4">
        <FormItem label="用户名" required>
          <Input v-model="formData.username" placeholder="请输入用户名" />
        </FormItem>
        
        <FormItem label="邮箱" required>
          <Input v-model="formData.email" type="email" placeholder="请输入邮箱" />
        </FormItem>
        
        <FormItem label="角色">
          <Select v-model="formData.role" placeholder="选择角色">
            <SelectOption value="admin">管理员</SelectOption>
            <SelectOption value="user">普通用户</SelectOption>
            <SelectOption value="guest">访客</SelectOption>
          </Select>
        </FormItem>
        
        <FormItem label="状态">
          <Switch v-model="formData.active" active-text="启用" inactive-text="禁用" />
        </FormItem>
      </Form>
      
      <template #footer>
        <Button @click="showForm = false">取消</Button>
        <Button type="primary" @click="handleSubmit" :loading="submitting">
          保存
        </Button>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showForm = ref(false)
const submitting = ref(false)

const formData = ref({
  username: '',
  email: '',
  role: '',
  active: true
})

const handleSubmit = () => {
  submitting.value = true
  
  // 模拟提交
  setTimeout(() => {
    console.log('提交表单:', formData.value)
    submitting.value = false
    showForm.value = false
  }, 1000)
}
</script>
```

## 嵌套对话框

对话框内再打开对话框。

```vue
<template>
  <div class="demo-container">
    <Button @click="showFirst = true">打开第一层对话框</Button>
    
    <Modal v-model="showFirst" title="第一层对话框">
      <p>这是第一层对话框的内容。</p>
      <Button @click="showSecond = true">打开第二层对话框</Button>
      
      <Modal v-model="showSecond" title="第二层对话框">
        <p>这是第二层对话框的内容。</p>
        <Button @click="showThird = true">打开第三层对话框</Button>
        
        <Modal v-model="showThird" title="第三层对话框">
          <p>这是第三层对话框的内容。</p>
          
          <template #footer>
            <Button @click="showThird = false">关闭</Button>
          </template>
        </Modal>
        
        <template #footer>
          <Button @click="showSecond = false">关闭</Button>
        </template>
      </Modal>
      
      <template #footer>
        <Button @click="showFirst = false">关闭</Button>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showFirst = ref(false)
const showSecond = ref(false)
const showThird = ref(false)
</script>
```

## 自定义位置

自定义对话框的显示位置。

```vue
<template>
  <div class="demo-container">
    <div class="space-x-4">
      <Button @click="showTop = true">顶部显示</Button>
      <Button @click="showCustom = true">自定义位置</Button>
    </div>
    
    <Modal v-model="showTop" title="顶部对话框" :center="false" :top="50">
      <p>这个对话框显示在页面顶部。</p>
    </Modal>
    
    <Modal 
      v-model="showCustom" 
      title="自定义位置对话框" 
      :style="{ top: '100px', left: '200px' }"
      :center="false"
    >
      <p>这个对话框显示在自定义位置。</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showTop = ref(false)
const showCustom = ref(false)
</script>
```

## API 参数

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| visible / v-model | 是否显示对话框 | `boolean` | `false` |
| title | 对话框标题 | `string` | - |
| size | 对话框尺寸 | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| width | 自定义宽度 | `string \| number` | - |
| height | 自定义高度 | `string \| number` | - |
| fullscreen | 是否全屏显示 | `boolean` | `false` |
| top | 距离顶部的距离 | `string \| number` | `'15vh'` |
| center | 是否垂直居中 | `boolean` | `true` |
| modal | 是否显示遮罩层 | `boolean` | `true` |
| maskClosable | 点击遮罩是否关闭 | `boolean` | `true` |
| closable | 是否显示关闭按钮 | `boolean` | `true` |
| keyboard | 是否支持ESC关闭 | `boolean` | `true` |
| destroyOnClose | 关闭时是否销毁内容 | `boolean` | `false` |
| zIndex | 层级 | `number` | `1000` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| open | 对话框打开时触发 | - |
| close | 对话框关闭时触发 | - |
| confirm | 确认按钮点击时触发 | - |
| cancel | 取消按钮点击时触发 | - |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 对话框内容 |
| header | 自定义头部 |
| title | 自定义标题 |
| footer | 自定义底部 |

### 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| Modal.confirm | 确认对话框 | `(options: ConfirmOptions)` |
| Modal.info | 信息对话框 | `(options: InfoOptions)` |
| Modal.warning | 警告对话框 | `(options: WarningOptions)` |
| Modal.error | 错误对话框 | `(options: ErrorOptions)` |
| Modal.success | 成功对话框 | `(options: SuccessOptions)` |

## 主题定制

```css
.ui-modal {
  --modal-bg: #ffffff;
  --modal-border-radius: 8px;
  --modal-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --modal-header-padding: 16px 24px;
  --modal-body-padding: 24px;
  --modal-footer-padding: 12px 24px;
  --modal-mask-bg: rgba(0, 0, 0, 0.45);
  --modal-close-color: #6b7280;
  --modal-close-hover-color: #374151;
}
``` 