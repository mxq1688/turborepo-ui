# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

包含标题、内容和操作。

```vue
<template>
  <Card>
    <template #header>
      <CardTitle>卡片标题</CardTitle>
    </template>
    
    <template #default>
      <p>这里是卡片的内容。卡片可以包含任意内容。</p>
    </template>
    
    <template #footer>
      <div class="flex justify-end space-x-2">
        <Button variant="outline">取消</Button>
        <Button variant="primary">确认</Button>
      </div>
    </template>
  </Card>
</template>
```

## 简单卡片

当卡片只包含内容区域。

```vue
<template>
  <Card>
    <p>这是一个简单的卡片，只包含内容区域。</p>
  </Card>
</template>
```

## 带描述的卡片

卡片可以只有标题和描述。

```vue
<template>
  <Card>
    <template #header>
      <CardTitle>特性介绍</CardTitle>
      <CardDescription>这是卡片的描述信息，用于说明卡片的用途或内容。</CardDescription>
    </template>
    
    <template #default>
      <ul class="space-y-2">
        <li>• 响应式设计</li>
        <li>• 可自定义样式</li>
        <li>• 支持插槽</li>
      </ul>
    </template>
  </Card>
</template>
```

## 带图片的卡片

可以配置图片作为卡片的头部。

```vue
<template>
  <Card>
    <template #header>
      <img 
        src="https://via.placeholder.com/400x200" 
        alt="示例图片"
        class="w-full h-48 object-cover rounded-t-lg"
      />
    </template>
    
    <template #default>
      <CardTitle>图片卡片</CardTitle>
      <CardDescription>这是一个带有图片的卡片示例。</CardDescription>
      <p class="mt-4">卡片内容可以包含任意信息，图片会显示在顶部。</p>
    </template>
    
    <template #footer>
      <Button variant="primary">查看详情</Button>
    </template>
  </Card>
</template>
```

## 可悬停卡片

鼠标悬停时显示阴影效果。

```vue
<template>
  <Card hoverable>
    <template #header>
      <CardTitle>悬停效果</CardTitle>
    </template>
    
    <template #default>
      <p>鼠标悬停在这个卡片上时会显示阴影效果。</p>
    </template>
  </Card>
</template>
```

## 禁用状态

卡片可以设置为禁用状态。

```vue
<template>
  <Card disabled>
    <template #header>
      <CardTitle>禁用状态</CardTitle>
    </template>
    
    <template #default>
      <p>这是一个禁用状态的卡片，通常用于表示不可用的功能。</p>
    </template>
    
    <template #footer>
      <Button disabled>禁用按钮</Button>
    </template>
  </Card>
</template>
```

## 不同尺寸

Card 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的卡片尺寸。

```vue
<template>
  <div class="space-y-4">
    <Card size="small">
      <template #header>
        <CardTitle>小尺寸卡片</CardTitle>
      </template>
      <template #default>
        <p>这是小尺寸的卡片。</p>
      </template>
    </Card>
    
    <Card>
      <template #header>
        <CardTitle>默认尺寸卡片</CardTitle>
      </template>
      <template #default>
        <p>这是默认尺寸的卡片。</p>
      </template>
    </Card>
    
    <Card size="large">
      <template #header>
        <CardTitle>大尺寸卡片</CardTitle>
      </template>
      <template #default>
        <p>这是大尺寸的卡片。</p>
      </template>
    </Card>
  </div>
</template>
```

## 卡片组合

多个卡片组合使用。

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card v-for="item in items" :key="item.id" hoverable>
      <template #header>
        <CardTitle>{{ item.title }}</CardTitle>
        <CardDescription>{{ item.description }}</CardDescription>
      </template>
      
      <template #default>
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">价格</span>
            <span class="font-semibold">{{ item.price }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">状态</span>
            <Badge :variant="item.status === 'active' ? 'success' : 'gray'">
              {{ item.status }}
            </Badge>
          </div>
        </div>
      </template>
      
      <template #footer>
        <div class="flex justify-between">
          <Button variant="outline" size="small">编辑</Button>
          <Button variant="primary" size="small">查看</Button>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    id: 1,
    title: '产品 A',
    description: '这是产品 A 的描述信息',
    price: '¥99',
    status: 'active'
  },
  {
    id: 2,
    title: '产品 B',
    description: '这是产品 B 的描述信息',
    price: '¥199',
    status: 'inactive'
  },
  {
    id: 3,
    title: '产品 C',
    description: '这是产品 C 的描述信息',
    price: '¥299',
    status: 'active'
  }
])
</script>
```

## API

### Card Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| size | 卡片尺寸 | string | small / default / large | default |
| hoverable | 鼠标悬停时是否显示阴影 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| bordered | 是否显示边框 | boolean | — | true |
| shadow | 阴影效果 | string | always / hover / never | never |

### Card Slots

| 插槽名 | 说明 |
|--------|------|
| header | 卡片头部内容 |
| default | 卡片主体内容 |
| footer | 卡片底部内容 |

### CardTitle Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| level | 标题级别 | number | 1-6 | 3 |

### CardDescription Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| — | — | — | — | — |

### Card Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| — | — | — | 