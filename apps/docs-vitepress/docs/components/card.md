# Card 卡片

通用卡片容器组件，用于内容分组和信息展示。

## 基础用法

最基本的卡片使用方式。

### Vue 示例

```vue
<template>
  <Card>
    <CardHeader>
      <CardTitle>卡片标题</CardTitle>
    </CardHeader>
    <CardContent>
      <p>这是卡片的内容区域，可以放置任何内容。</p>
    </CardContent>
  </Card>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@ui-lib/ui-vue'
</script>
```

### React 示例

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@ui-lib/ui-react'

function Demo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>卡片标题</CardTitle>
      </CardHeader>
      <CardContent>
        <p>这是卡片的内容区域，可以放置任何内容。</p>
      </CardContent>
    </Card>
  )
}
```

## 带阴影的卡片

不同阴影级别的卡片。

```vue
<template>
  <div class="demo-container">
    <Card shadow="none">
      <CardContent>无阴影</CardContent>
    </Card>
    
    <Card shadow="sm">
      <CardContent>小阴影</CardContent>
    </Card>
    
    <Card shadow="md">
      <CardContent>中等阴影（默认）</CardContent>
    </Card>
    
    <Card shadow="lg">
      <CardContent>大阴影</CardContent>
    </Card>
  </div>
</template>
```

## 带边框的卡片

可以显示边框的卡片。

```vue
<template>
  <div class="demo-container">
    <Card bordered>
      <CardContent>带边框的卡片</CardContent>
    </Card>
    
    <Card bordered shadow="none">
      <CardContent>只有边框，无阴影</CardContent>
    </Card>
  </div>
</template>
```

## 可悬停的卡片

鼠标悬停时有交互效果的卡片。

```vue
<template>
  <div class="demo-container">
    <Card hoverable>
      <CardContent>
        <h3>可悬停卡片</h3>
        <p>鼠标悬停时会有交互效果</p>
      </CardContent>
    </Card>
  </div>
</template>
```

## 完整的卡片示例

包含头部、内容和操作的完整卡片。

```vue
<template>
  <Card class="max-w-md">
    <CardHeader>
      <CardTitle>产品卡片</CardTitle>
      <p class="text-sm text-gray-600">这是一个产品介绍卡片</p>
    </CardHeader>
    
    <CardContent>
      <img 
        src="/product-image.jpg" 
        alt="产品图片" 
        class="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 class="text-lg font-semibold mb-2">产品名称</h3>
      <p class="text-gray-600 mb-4">这里是产品的详细描述信息，介绍产品的主要功能和特点。</p>
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-blue-600">¥299</span>
        <Button variant="primary">立即购买</Button>
      </div>
    </CardContent>
  </Card>
</template>
```

## 网格布局卡片

多个卡片的网格布局展示。

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card v-for="item in cards" :key="item.id" hoverable>
      <CardHeader>
        <CardTitle>{{ item.title }}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{{ item.description }}</p>
        <Button class="mt-4" variant="outline">查看详情</Button>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = ref([
  { id: 1, title: '卡片 1', description: '第一个卡片的描述' },
  { id: 2, title: '卡片 2', description: '第二个卡片的描述' },
  { id: 3, title: '卡片 3', description: '第三个卡片的描述' }
])
</script>
```

## 统计卡片

用于数据展示的统计卡片。

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <Card v-for="stat in stats" :key="stat.label">
      <CardContent class="p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">{{ stat.label }}</p>
            <p class="text-3xl font-bold">{{ stat.value }}</p>
          </div>
          <div class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <Icon :name="stat.icon" class="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div class="mt-4 flex items-center">
          <span :class="stat.trend > 0 ? 'text-green-600' : 'text-red-600'" class="text-sm font-medium">
            {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}%
          </span>
          <span class="text-sm text-gray-600 ml-2">较上周</span>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
const stats = ref([
  { label: '总用户', value: '12,345', icon: 'users', trend: 12.5 },
  { label: '总订单', value: '8,567', icon: 'shopping-cart', trend: -2.3 },
  { label: '总收入', value: '¥123,456', icon: 'dollar-sign', trend: 8.7 },
  { label: '转化率', value: '3.4%', icon: 'trending-up', trend: 5.2 }
])
</script>
```

## API 参数

### Card Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| shadow | 阴影大小 | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| bordered | 是否显示边框 | `boolean` | `false` |
| hoverable | 是否可悬停 | `boolean` | `false` |
| padding | 内边距大小 | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` |

### CardHeader Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| class | 自定义CSS类名 | `string` | - |

### CardTitle Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| level | 标题级别 | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3` |

### CardContent Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| class | 自定义CSS类名 | `string` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 卡片点击事件 | `(event: MouseEvent)` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 卡片内容 |
| header | 卡片头部 |
| footer | 卡片底部 |

## 主题定制

可以通过 CSS 变量自定义样式：

```css
.ui-card {
  --card-background: #ffffff;
  --card-border-radius: 8px;
  --card-border-color: #e5e7eb;
  --card-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --card-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --card-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --card-padding-sm: 12px;
  --card-padding-md: 16px;
  --card-padding-lg: 24px;
}
```

## 无障碍访问

- 支持键盘导航
- 可点击的卡片提供适当的焦点状态
- 支持屏幕阅读器
- 语义化的HTML结构 