# Avatar 头像

用于展示用户头像的组件，支持图片、文字、图标等多种形式。

## 基础用法

```vue
<template>
  <div class="flex items-center space-x-4">
    <Avatar src="/avatar.jpg" alt="用户头像" />
    <Avatar>张</Avatar>
    <Avatar icon="user" />
  </div>
</template>
```

## 不同尺寸

```vue
<template>
  <div class="flex items-center space-x-4">
    <Avatar size="xs" src="/avatar.jpg" />
    <Avatar size="sm" src="/avatar.jpg" />
    <Avatar size="md" src="/avatar.jpg" />
    <Avatar size="lg" src="/avatar.jpg" />
    <Avatar size="xl" src="/avatar.jpg" />
  </div>
</template>
```

## 不同形状

```vue
<template>
  <div class="space-y-4">
    <div class="flex items-center space-x-4">
      <Avatar shape="circle" src="/avatar.jpg" />
      <Avatar shape="circle">圆</Avatar>
    </div>
    <div class="flex items-center space-x-4">
      <Avatar shape="square" src="/avatar.jpg" />
      <Avatar shape="square">方</Avatar>
    </div>
  </div>
</template>
```

## 头像组

```vue
<template>
  <AvatarGroup :max="3">
    <Avatar src="/avatar1.jpg" />
    <Avatar src="/avatar2.jpg" />
    <Avatar src="/avatar3.jpg" />
    <Avatar src="/avatar4.jpg" />
    <Avatar src="/avatar5.jpg" />
  </AvatarGroup>
</template>
```

## 带徽章的头像

```vue
<template>
  <div class="flex items-center space-x-4">
    <Avatar src="/avatar1.jpg" badge="online" />
    <Avatar src="/avatar2.jpg" badge="offline" />
    <Avatar src="/avatar3.jpg" badge="away" />
    <Avatar src="/avatar4.jpg" badge="busy" />
  </div>
</template>
```

## API 参数

### Avatar Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| src | 图片地址 | `string` | - |
| alt | 图片描述 | `string` | - |
| size | 头像尺寸 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | `'md'` |
| shape | 头像形状 | `'circle' \| 'square'` | `'circle'` |
| icon | 图标名称 | `string` | - |
| badge | 徽章状态 | `'online' \| 'offline' \| 'away' \| 'busy'` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 头像点击事件 | `(event: MouseEvent)` |
| error | 图片加载失败事件 | `(event: Event)` |
``` 