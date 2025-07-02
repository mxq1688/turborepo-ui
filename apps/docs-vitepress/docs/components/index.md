# 组件总览

UI 组件库提供了丰富的组件集合，涵盖了基础交互、数据展示、表单控件、反馈提示等各种使用场景。

## 基础组件

这些是构建界面的基础元素。

| 组件 | 描述 | 文档链接 |
|------|------|----------|
| Button | 按钮组件，支持多种样式和状态 | [查看文档](./button.md) |
| Input | 输入框组件，支持多种类型和状态 | [查看文档](./input.md) |
| Card | 卡片容器组件，用于内容分组 | [查看文档](./card.md) |

## 表单组件

专门用于数据收集和表单交互的组件。

| 组件 | 描述 | 文档链接 |
|------|------|----------|
| Form | 表单组件，提供完整的表单解决方案 | [查看文档](./form.md) |
| Checkbox | 多选框组件，支持单个和组合使用 | [查看文档](./checkbox.md) |
| Radio | 单选框组件，支持单个和组合使用 | [查看文档](./radio.md) |
| Select | 选择器组件，支持单选、多选、搜索 | [查看文档](./select.md) |
| Switch | 开关组件，用于切换两个状态 | [查看文档](./switch.md) |
| Upload | 文件上传组件，支持拖拽和多文件 | [查看文档](./upload.md) |
| DatePicker | 日期选择器，支持日期和时间选择 | [查看文档](./datepicker.md) |

## 数据展示

用于展示和组织数据的组件。

| 组件 | 描述 | 文档链接 |
|------|------|----------|
| Table | 表格组件，支持排序、分页、自定义渲染 | [查看文档](./table.md) |
| Tabs | 标签页组件，用于内容分组和切换 | [查看文档](./tabs.md) |
| Avatar | 头像组件，支持图片、文字、图标 | [查看文档](./avatar.md) |
| Badge | 徽标组件，用于显示数量和状态 | [查看文档](./badge.md) |
| Alert | 警告提示组件，用于重要信息展示 | [查看文档](./alert.md) |

## 反馈组件

用于向用户提供操作反馈的组件。

| 组件 | 描述 | 文档链接 |
|------|------|----------|
| Loading | 加载组件，支持多种加载动画 | [查看文档](./loading.md) |
| Modal | 模态框组件，用于弹窗交互 | [查看文档](./modal.md) |

## 系统功能

提供系统级功能支持的组件和工具。

| 功能 | 描述 | 文档链接 |
|------|------|----------|
| Theme | 主题定制系统，支持深色模式 | [查看文档](./theme.md) |
| I18n | 国际化支持，多语言切换 | [查看文档](./i18n.md) |

## 快速开始

### 安装

```bash
# Vue 版本
npm install @ui-lib/ui-vue

# React 版本  
npm install @ui-lib/ui-react
```

### 基本使用

#### Vue 示例

```vue
<template>
  <div>
    <Button type="primary" @click="handleClick">点击我</Button>
    <Input v-model="inputValue" placeholder="请输入内容" />
    <Card>
      <CardHeader>
        <CardTitle>卡片标题</CardTitle>
      </CardHeader>
      <CardContent>
        卡片内容...
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@ui-lib/ui-vue'

const inputValue = ref('')

const handleClick = () => {
  console.log('按钮被点击了')
}
</script>
```

#### React 示例

```tsx
import { useState } from 'react'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@ui-lib/ui-react'

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleClick = () => {
    console.log('按钮被点击了')
  }

  return (
    <div>
      <Button type="primary" onClick={handleClick}>点击我</Button>
      <Input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="请输入内容" 
      />
      <Card>
        <CardHeader>
          <CardTitle>卡片标题</CardTitle>
        </CardHeader>
        <CardContent>
          卡片内容...
        </CardContent>
      </Card>
    </div>
  )
}
```

## 设计原则

### 一致性
所有组件遵循统一的设计语言，确保用户体验的一致性。

### 易用性
简洁直观的 API 设计，降低学习成本，提高开发效率。

### 可访问性
遵循 WAI-ARIA 规范，支持键盘导航和屏幕阅读器。

### 响应式
所有组件都支持响应式设计，适配不同屏幕尺寸。

### 主题化
支持深度定制，可以轻松适配不同的设计风格。

## 贡献指南

我们欢迎社区贡献！如果您发现问题或有改进建议，请：

1. 提交 Issue 报告问题
2. 提交 Pull Request 贡献代码
3. 完善文档和示例
4. 分享使用经验

感谢您使用我们的组件库！🎉 