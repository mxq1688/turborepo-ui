# Form 表单

功能强大的表单组件，支持验证、布局选项和完整的表单控件。

## 基础用法

```vue
<script setup>
import { Form, FormItem, Input, Button } from '@ui-lib/ui-vue'
import { ref } from 'vue'

const formData = ref({
  username: '',
  email: '',
  password: ''
})

const handleSubmit = (values) => {
  console.log('表单提交：', values)
}
</script>

<template>
  <Form @submit="handleSubmit" :model="formData">
    <FormItem label="用户名" name="username" required>
      <Input v-model="formData.username" placeholder="请输入用户名" />
    </FormItem>
    
    <FormItem label="邮箱" name="email" required>
      <Input v-model="formData.email" type="email" placeholder="请输入邮箱" />
    </FormItem>
    
    <FormItem label="密码" name="password" required>
      <Input v-model="formData.password" type="password" placeholder="请输入密码" />
    </FormItem>
    
    <FormItem>
      <Button type="submit" variant="primary">提交</Button>
    </FormItem>
  </Form>
</template>
```

## 表单布局

### 水平布局

```vue
<template>
  <Form layout="horizontal" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
    <FormItem label="用户名" name="username">
      <Input v-model="formData.username" />
    </FormItem>
    <FormItem label="邮箱" name="email">
      <Input v-model="formData.email" />
    </FormItem>
  </Form>
</template>
```

### 行内布局

```vue
<template>
  <Form layout="inline">
    <FormItem label="搜索" name="search">
      <Input v-model="searchTerm" placeholder="请输入搜索词..." />
    </FormItem>
    <FormItem>
      <Button variant="primary">搜索</Button>
    </FormItem>
  </Form>
</template>
```

## 表单验证

```vue
<script setup>
import { ref } from 'vue'

const formData = ref({
  email: '',
  age: null,
  website: ''
})

const rules = {
  email: [
    { required: true, message: '邮箱是必填项' },
    { type: 'email', message: '请输入有效的邮箱地址' }
  ],
  age: [
    { required: true, message: '年龄是必填项' },
    { type: 'number', min: 18, max: 120, message: '年龄必须在18-120岁之间' }
  ],
  website: [
    { type: 'url', message: '请输入有效的网址' }
  ]
}

const handleValidationError = (errors) => {
  console.log('验证错误：', errors)
}
</script>

<template>
  <Form 
    :model="formData" 
    :rules="rules"
    @validation-error="handleValidationError"
  >
    <FormItem label="邮箱" name="email">
      <Input v-model="formData.email" />
    </FormItem>
    
    <FormItem label="年龄" name="age">
      <Input v-model.number="formData.age" type="number" />
    </FormItem>
    
    <FormItem label="网站" name="website">
      <Input v-model="formData.website" placeholder="https://example.com" />
    </FormItem>
    
    <FormItem>
      <Button type="submit" variant="primary">验证并提交</Button>
    </FormItem>
  </Form>
</template>
```

## 自定义验证

```vue
<script setup>
const customValidator = (rule, value, callback) => {
  if (!value) {
    callback(new Error('用户名是必填项'))
  } else if (value.length < 3) {
    callback(new Error('用户名至少需要3个字符'))
  } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
    callback(new Error('用户名只能包含字母、数字和下划线'))
  } else {
    callback()
  }
}

const rules = {
  username: [
    { validator: customValidator, trigger: 'blur' }
  ]
}
</script>
```

## 表单控件集成

```vue
<script setup>
import { 
  Form, FormItem, Input, Select, Checkbox, 
  Radio, RadioGroup, Switch, DatePicker, Upload 
} from '@ui-lib/ui-vue'

const formData = ref({
  name: '',
  category: '',
  tags: [],
  gender: '',
  notifications: false,
  birthDate: null,
  avatar: null
})

const categoryOptions = [
  { label: '技术', value: 'tech' },
  { label: '设计', value: 'design' },
  { label: '商业', value: 'business' }
]

const genderOptions = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' },
  { label: '其他', value: 'other' }
]
</script>

<template>
  <Form :model="formData">
    <FormItem label="姓名" name="name">
      <Input v-model="formData.name" />
    </FormItem>
    
    <FormItem label="分类" name="category">
      <Select v-model="formData.category" :options="categoryOptions" />
    </FormItem>
    
    <FormItem label="标签" name="tags">
      <Checkbox.Group v-model="formData.tags">
        <Checkbox value="frontend">前端</Checkbox>
        <Checkbox value="backend">后端</Checkbox>
        <Checkbox value="mobile">移动端</Checkbox>
      </Checkbox.Group>
    </FormItem>
    
    <FormItem label="性别" name="gender">
      <RadioGroup v-model="formData.gender" :options="genderOptions" />
    </FormItem>
    
    <FormItem label="通知" name="notifications">
      <Switch v-model="formData.notifications" />
    </FormItem>
    
    <FormItem label="生日" name="birthDate">
      <DatePicker v-model="formData.birthDate" />
    </FormItem>
    
    <FormItem label="头像" name="avatar">
      <Upload v-model="formData.avatar" accept="image/*" />
    </FormItem>
  </Form>
</template>
```

## API

### Form 属性

| 属性名 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| model | `object` | `{}` | 表单数据对象 |
| rules | `object` | `{}` | 验证规则 |
| layout | `'vertical' \| 'horizontal' \| 'inline'` | `'vertical'` | 表单布局 |
| labelCol | `object` | - | 标签列布局（水平布局） |
| wrapperCol | `object` | - | 控件列布局（水平布局） |
| disabled | `boolean` | `false` | 禁用所有表单控件 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 表单控件尺寸 |

### FormItem 属性

| 属性名 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| label | `string` | - | 字段标签 |
| name | `string` | - | 字段名称（用于验证） |
| required | `boolean` | `false` | 是否必填字段 |
| rules | `array` | - | 字段特定验证规则 |
| validateStatus | `'success' \| 'warning' \| 'error' \| 'validating'` | - | 验证状态 |
| help | `string` | - | 帮助文本 |

### Form 事件

| 事件名 | 类型 | 描述 |
|-------|------|------|
| submit | `(values: object) => void` | 表单提交 |
| validation-error | `(errors: object) => void` | 验证失败 |
| field-change | `(name: string, value: any) => void` | 字段值改变 |

### Form 方法

| 方法名 | 类型 | 描述 |
|-------|------|------|
| validate | `() => Promise<boolean>` | 验证整个表单 |
| validateField | `(name: string) => Promise<boolean>` | 验证特定字段 |
| resetFields | `() => void` | 重置表单到初始状态 |
| clearValidation | `() => void` | 清除验证消息 | 