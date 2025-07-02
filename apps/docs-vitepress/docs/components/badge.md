# Badge 徽标

用于显示数量、状态等信息的小标记组件。

## 基础用法

基本的徽标使用方式。

```vue
<template>
  <div class="demo-container">
    <div class="flex items-center space-x-4">
      <Badge count="9">
        <Button>消息</Button>
      </Badge>
      
      <Badge count="99">
        <Button>通知</Button>
      </Badge>
      
      <Badge count="999" :max="99">
        <Button>邮件</Button>
      </Badge>
    </div>
  </div>
</template>
```

## 独立使用

可以独立使用的徽标。

```vue
<template>
  <div class="demo-container">
    <div class="flex items-center space-x-4">
      <Badge count="5" />
      <Badge count="10" color="success" />
      <Badge count="99" color="warning" />
      <Badge count="999" color="danger" />
    </div>
  </div>
</template>
```

## 状态点

显示状态的小圆点。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <div class="flex items-center space-x-4">
        <Badge dot>
          <Button>消息</Button>
        </Badge>
        
        <Badge dot color="success">
          <Button>已完成</Button>
        </Badge>
        
        <Badge dot color="warning">
          <Button>处理中</Button>
        </Badge>
        
        <Badge dot color="danger">
          <Button>有错误</Button>
        </Badge>
      </div>
      
      <div class="flex items-center space-x-4">
        <Badge dot />
        <Badge dot color="success" />
        <Badge dot color="warning" />
        <Badge dot color="danger" />
      </div>
    </div>
  </div>
</template>
```

## 不同颜色

不同颜色主题的徽标。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <div class="flex items-center space-x-4">
        <Badge count="5" color="primary">
          <Button>主要</Button>
        </Badge>
        
        <Badge count="5" color="success">
          <Button>成功</Button>
        </Badge>
        
        <Badge count="5" color="warning">
          <Button>警告</Button>
        </Badge>
        
        <Badge count="5" color="danger">
          <Button>危险</Button>
        </Badge>
      </div>
    </div>
  </div>
</template>
```

## 自定义内容

可以自定义显示的内容。

```vue
<template>
  <div class="demo-container">
    <div class="flex items-center space-x-4">
      <Badge text="new">
        <Button>新功能</Button>
      </Badge>
      
      <Badge text="hot" color="danger">
        <Button>热门</Button>
      </Badge>
      
      <Badge text="VIP" color="warning">
        <Button>会员</Button>
      </Badge>
    </div>
  </div>
</template>
```

## 动态变化

支持动态改变徽标的值。

```vue
<template>
  <div class="demo-container">
    <div class="space-y-4">
      <Badge :count="count">
        <Button>消息</Button>
      </Badge>
      
      <div class="flex space-x-2">
        <Button size="sm" @click="decrease">-</Button>
        <Button size="sm" @click="increase">+</Button>
        <Button size="sm" @click="reset">重置</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(5)

const increase = () => {
  count.value++
}

const decrease = () => {
  if (count.value > 0) count.value--
}

const reset = () => {
  count.value = 0
}
</script>
```

## 溢出显示

当数字过大时的显示方式。

```vue
<template>
  <div class="demo-container">
    <div class="flex items-center space-x-4">
      <Badge count="99">
        <Button>消息</Button>
      </Badge>
      
      <Badge count="100" :max="99">
        <Button>通知</Button>
      </Badge>
      
      <Badge count="1000" :max="999">
        <Button>邮件</Button>
      </Badge>
    </div>
  </div>
</template>
```

## API 参数

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| count | 显示的数字 | `number \| string` | - |
| max | 最大值，超过显示为 max+ | `number` | `99` |
| dot | 是否显示为小红点 | `boolean` | `false` |
| text | 自定义显示文本 | `string` | - |
| color | 徽标颜色 | `'primary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` |
| showZero | 当数值为0时是否显示 | `boolean` | `false` |
| offset | 偏移量 [x, y] | `[number, number]` | `[0, 0]` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 徽标点击事件 | `(event: MouseEvent)` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 包裹的元素 |
| count | 自定义徽标内容 |

## 主题定制

```css
.ui-badge {
  --badge-bg-primary: #3b82f6;
  --badge-bg-success: #10b981;
  --badge-bg-warning: #f59e0b;
  --badge-bg-danger: #ef4444;
  --badge-color: #ffffff;
  --badge-font-size: 12px;
  --badge-height: 20px;
  --badge-padding: 0 6px;
  --badge-border-radius: 10px;
  --badge-dot-size: 8px;
}
``` 