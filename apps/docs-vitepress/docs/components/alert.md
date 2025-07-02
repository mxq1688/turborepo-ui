# Alert 警告提示

用于向用户显示重要的提示信息。

## 基础用法

基本的警告提示。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Alert type="info">这是一条信息提示</Alert>
      <Alert type="success">这是一条成功提示</Alert>
      <Alert type="warning">这是一条警告提示</Alert>
      <Alert type="error">这是一条错误提示</Alert>
    </div>
  </div>
</template>
```

## 带标题的提示

显示标题和描述的提示。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Alert type="info" title="信息提示">
        这里是详细的信息描述内容，可以包含更多的说明文字。
      </Alert>
      
      <Alert type="success" title="操作成功">
        恭喜你，操作已经成功完成！数据已保存。
      </Alert>
      
      <Alert type="warning" title="注意事项">
        请注意检查输入的信息是否正确，避免出现错误。
      </Alert>
      
      <Alert type="error" title="操作失败">
        很抱歉，操作失败了。请检查网络连接后重试。
      </Alert>
    </div>
  </div>
</template>
```

## 可关闭的提示

支持关闭功能的提示。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Alert 
        v-if="showAlert1"
        type="info" 
        closable 
        @close="showAlert1 = false"
      >
        这是一条可关闭的信息提示
      </Alert>
      
      <Alert 
        v-if="showAlert2"
        type="warning" 
        closable 
        close-text="知道了"
        @close="showAlert2 = false"
      >
        这是一条自定义关闭文本的提示
      </Alert>
      
      <Button @click="resetAlerts">重新显示</Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showAlert1 = ref(true)
const showAlert2 = ref(true)

const resetAlerts = () => {
  showAlert1.value = true
  showAlert2.value = true
}
</script>
```

## 带图标的提示

显示图标的提示。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Alert type="info" show-icon>
        带图标的信息提示
      </Alert>
      
      <Alert type="success" show-icon title="成功">
        操作已成功完成
      </Alert>
      
      <Alert type="warning" show-icon title="警告">
        请注意相关风险
      </Alert>
      
      <Alert type="error" show-icon title="错误">
        操作执行失败
      </Alert>
    </div>
  </div>
</template>
```

## 自定义图标

使用自定义图标。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Alert type="info" icon="lightbulb">
        自定义灯泡图标的提示
      </Alert>
      
      <Alert type="success" icon="star" title="恭喜">
        你获得了一颗星星！
      </Alert>
      
      <Alert type="warning" icon="shield" title="安全提醒">
        请注意账户安全
      </Alert>
    </div>
  </div>
</template>
```

## 不同样式

不同的展示样式。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Alert type="info" variant="filled">
        填充样式的信息提示
      </Alert>
      
      <Alert type="success" variant="outlined">
        边框样式的成功提示
      </Alert>
      
      <Alert type="warning" variant="light">
        浅色样式的警告提示
      </Alert>
    </div>
  </div>
</template>
```

## 操作按钮

带操作按钮的提示。

```vue
<template>
  <div class="demo-container">
    <Alert 
      type="warning" 
      title="系统升级通知"
      show-icon
      closable
    >
      <template #default>
        系统将在今晚12点进行升级维护，预计耗时2小时。
      </template>
      
      <template #action>
        <Button size="sm" variant="outline">查看详情</Button>
        <Button size="sm" variant="primary">立即备份</Button>
      </template>
    </Alert>
  </div>
</template>
```

## API 参数

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 提示类型 | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` |
| title | 标题 | `string` | - |
| variant | 样式变体 | `'filled' \| 'outlined' \| 'light'` | `'light'` |
| closable | 是否可关闭 | `boolean` | `false` |
| closeText | 自定义关闭按钮文本 | `string` | - |
| showIcon | 是否显示图标 | `boolean` | `false` |
| icon | 自定义图标 | `string` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭时触发 | - |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 提示内容 |
| title | 自定义标题 |
| icon | 自定义图标 |
| action | 操作按钮区域 |

## 主题定制

```css
.ui-alert {
  --alert-padding: 12px 16px;
  --alert-border-radius: 6px;
  --alert-font-size: 14px;
  --alert-line-height: 1.5;
  
  --alert-info-bg: #eff6ff;
  --alert-info-border: #3b82f6;
  --alert-info-color: #1d4ed8;
  
  --alert-success-bg: #ecfdf5;
  --alert-success-border: #10b981;
  --alert-success-color: #065f46;
  
  --alert-warning-bg: #fffbeb;
  --alert-warning-border: #f59e0b;
  --alert-warning-color: #92400e;
  
  --alert-error-bg: #fef2f2;
  --alert-error-border: #ef4444;
  --alert-error-color: #b91c1c;
}
``` 