# 快速上手

本指南将帮助您在几分钟内开始使用UI组件库。

## 前置条件

确保您的开发环境满足以下要求：

- **Node.js** 16.0.0 或更高版本
- **npm** 或 **yarn** 或 **pnpm** 包管理器
- **Vue 3.2+** 或 **React 18+** 项目

## 创建新项目

如果您还没有项目，可以快速创建一个：

### Vue 项目

```bash
# 使用 create-vue
npm create vue@latest my-vue-app
cd my-vue-app
npm install

# 或使用 Vite
npm create vite@latest my-vue-app -- --template vue-ts
cd my-vue-app
npm install
```

### React 项目

```bash
# 使用 create-react-app
npx create-react-app my-react-app --template typescript
cd my-react-app

# 或使用 Vite
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
```

## 安装组件库

选择对应的框架版本进行安装：

```bash
# Vue 版本
npm install @ui-lib/ui-vue

# React 版本
npm install @ui-lib/ui-react

# 如果需要使用图标
npm install @ui-lib/icons
```

## 基础配置

### Vue 配置

#### 1. 全局注册（推荐用于小型项目）

```typescript
// main.ts
import { createApp } from 'vue'
import UILibVue from '@ui-lib/ui-vue'
import '@ui-lib/ui-vue/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(UILibVue)
app.mount('#app')
```

#### 2. 按需引入（推荐用于大型项目）

```vue
<!-- App.vue -->
<template>
  <div class="app">
    <Button type="primary" @click="handleClick">
      点击我
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@ui-lib/ui-vue'
import '@ui-lib/ui-vue/dist/style.css'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### React 配置

#### 1. 基础使用

```tsx
// App.tsx
import React from 'react'
import { Button } from '@ui-lib/ui-react'
import '@ui-lib/ui-react/dist/style.css'

function App() {
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div className="app">
      <Button type="primary" onClick={handleClick}>
        点击我
      </Button>
    </div>
  )
}

export default App
```

#### 2. 提供者配置

```tsx
// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from '@ui-lib/ui-react'
import '@ui-lib/ui-react/dist/style.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
)
```

## 第一个示例

让我们创建一个简单的用户信息表单：

### Vue 示例

```vue
<template>
  <div class="demo-page">
    <Card class="user-form">
      <CardHeader>
        <CardTitle>用户信息</CardTitle>
      </CardHeader>
      <CardContent>
        <Form @submit="handleSubmit" :model="formData">
          <FormItem label="姓名" required>
            <Input 
              v-model="formData.name" 
              placeholder="请输入姓名"
            />
          </FormItem>
          
          <FormItem label="邮箱" required>
            <Input 
              v-model="formData.email" 
              type="email"
              placeholder="请输入邮箱"
            />
          </FormItem>
          
          <FormItem label="性别">
            <RadioGroup v-model="formData.gender">
              <Radio value="male">男</Radio>
              <Radio value="female">女</Radio>
            </RadioGroup>
          </FormItem>
          
          <FormItem label="爱好">
            <CheckboxGroup v-model="formData.hobbies">
              <Checkbox value="reading">阅读</Checkbox>
              <Checkbox value="music">音乐</Checkbox>
              <Checkbox value="sports">运动</Checkbox>
            </CheckboxGroup>
          </FormItem>
          
          <FormItem>
            <Button type="primary" html-type="submit">
              提交
            </Button>
            <Button @click="handleReset" style="margin-left: 8px">
              重置
            </Button>
          </FormItem>
        </Form>
      </CardContent>
    </Card>
    
    <!-- 显示结果 -->
    <Card v-if="submitResult" class="result-card">
      <CardHeader>
        <CardTitle>提交结果</CardTitle>
      </CardHeader>
      <CardContent>
        <Alert type="success">
          表单提交成功！
        </Alert>
        <pre>{{ JSON.stringify(submitResult, null, 2) }}</pre>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Card, CardHeader, CardTitle, CardContent,
  Form, FormItem, Input, Button,
  Radio, RadioGroup, Checkbox, CheckboxGroup,
  Alert
} from '@ui-lib/ui-vue'

const formData = ref({
  name: '',
  email: '',
  gender: '',
  hobbies: []
})

const submitResult = ref(null)

const handleSubmit = () => {
  submitResult.value = { ...formData.value }
  console.log('提交数据:', submitResult.value)
}

const handleReset = () => {
  formData.value = {
    name: '',
    email: '',
    gender: '',
    hobbies: []
  }
  submitResult.value = null
}
</script>

<style scoped>
.demo-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  gap: 24px;
  display: flex;
  flex-direction: column;
}

.user-form {
  width: 100%;
}

.result-card {
  width: 100%;
}

pre {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 4px;
  margin-top: 12px;
  font-size: 12px;
}
</style>
```

### React 示例

```tsx
import React, { useState } from 'react'
import {
  Card, CardHeader, CardTitle, CardContent,
  Form, FormItem, Input, Button,
  Radio, RadioGroup, Checkbox, CheckboxGroup,
  Alert
} from '@ui-lib/ui-react'

interface FormData {
  name: string
  email: string
  gender: string
  hobbies: string[]
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    gender: '',
    hobbies: []
  })
  
  const [submitResult, setSubmitResult] = useState<FormData | null>(null)

  const handleSubmit = () => {
    setSubmitResult({ ...formData })
    console.log('提交数据:', formData)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      gender: '',
      hobbies: []
    })
    setSubmitResult(null)
  }

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="demo-page">
      <Card className="user-form">
        <CardHeader>
          <CardTitle>用户信息</CardTitle>
        </CardHeader>
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <FormItem label="姓名" required>
              <Input 
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="请输入姓名"
              />
            </FormItem>
            
            <FormItem label="邮箱" required>
              <Input 
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                type="email"
                placeholder="请输入邮箱"
              />
            </FormItem>
            
            <FormItem label="性别">
              <RadioGroup 
                value={formData.gender}
                onChange={(value) => updateField('gender', value)}
              >
                <Radio value="male">男</Radio>
                <Radio value="female">女</Radio>
              </RadioGroup>
            </FormItem>
            
            <FormItem label="爱好">
              <CheckboxGroup 
                value={formData.hobbies}
                onChange={(value) => updateField('hobbies', value)}
              >
                <Checkbox value="reading">阅读</Checkbox>
                <Checkbox value="music">音乐</Checkbox>
                <Checkbox value="sports">运动</Checkbox>
              </CheckboxGroup>
            </FormItem>
            
            <FormItem>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button onClick={handleReset} style={{ marginLeft: 8 }}>
                重置
              </Button>
            </FormItem>
          </Form>
        </CardContent>
      </Card>
      
      {/* 显示结果 */}
      {submitResult && (
        <Card className="result-card">
          <CardHeader>
            <CardTitle>提交结果</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert type="success">
              表单提交成功！
            </Alert>
            <pre>{JSON.stringify(submitResult, null, 2)}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default App
```

## 样式定制

### CSS 变量

您可以通过CSS变量快速定制主题：

```css
/* 在您的全局样式文件中 */
:root {
  --primary-color: #1890ff;
  --success-color: #52c41a;
  --warning-color: #faad14;
  --error-color: #ff4d4f;
  
  --border-radius: 6px;
  --font-size-base: 14px;
  --line-height-base: 1.5;
}
```

### 深色模式

```css
[data-theme="dark"] {
  --bg-color: #141414;
  --text-color: #ffffff;
  --border-color: #434343;
}
```

## 按需加载

为了减少包体积，建议使用按需加载：

### Vue 按需加载

```typescript
// 手动按需引入
import { Button, Input, Card } from '@ui-lib/ui-vue'
import '@ui-lib/ui-vue/dist/components/button.css'
import '@ui-lib/ui-vue/dist/components/input.css'
import '@ui-lib/ui-vue/dist/components/card.css'
```

### React 按需加载

```typescript
// 手动按需引入
import { Button, Input, Card } from '@ui-lib/ui-react'
import '@ui-lib/ui-react/dist/components/button.css'
import '@ui-lib/ui-react/dist/components/input.css'
import '@ui-lib/ui-react/dist/components/card.css'
```

## 下一步

恭喜！您已经成功设置了UI组件库。接下来可以：

1. 📚 浏览[组件文档](/components/)了解所有可用组件
2. 🎨 阅读[主题定制](/guide/theming)学习样式定制
3. 🔧 查看[TypeScript指南](/guide/typescript)获得更好的开发体验
4. ❓ 遇到问题可以查看[常见问题](/guide/faq)

## 完整示例项目

您可以在GitHub上查看完整的示例项目：

- [Vue示例项目](https://github.com/your-username/turborepo-ui/tree/main/apps/docs-vue)
- [React示例项目](https://github.com/your-username/turborepo-ui/tree/main/demo-app)

这些示例项目展示了如何在实际项目中使用组件库的最佳实践。 