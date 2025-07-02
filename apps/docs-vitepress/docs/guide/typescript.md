# TypeScript 支持

UI组件库使用TypeScript开发，提供完整的类型定义和优秀的开发体验。

## 基础配置

### tsconfig.json 配置

确保您的项目配置支持组件库的类型：

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": false,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve", // Vue 项目
    // "jsx": "react-jsx", // React 项目
    
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    
    // 路径映射（可选）
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@ui/*": ["./node_modules/@ui-lib/ui-vue/*"]
    }
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue"
  ]
}
```

### Vue 项目配置

对于Vue项目，需要在`env.d.ts`中添加类型声明：

```typescript
// env.d.ts
/// <reference types="vite/client" />
/// <reference types="@ui-lib/ui-vue" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 组件库全局类型扩展
declare module '@vue/runtime-core' {
  export interface GlobalProperties {
    // 如果使用全局注册
    $message: typeof import('@ui-lib/ui-vue')['message']
    $modal: typeof import('@ui-lib/ui-vue')['modal']
  }
}
```

### React 项目配置

对于React项目，类型声明会自动生效：

```typescript
// types/index.ts
import type { ComponentProps } from 'react'
import type { Button, Input, Card } from '@ui-lib/ui-react'

// 扩展组件props类型
export type ButtonProps = ComponentProps<typeof Button>
export type InputProps = ComponentProps<typeof Input>
export type CardProps = ComponentProps<typeof Card>
```

## 组件类型定义

### 基础组件类型

```typescript
// Button 组件类型
interface ButtonProps {
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  ghost?: boolean
  block?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  icon?: string | VNode | (() => VNode)
  onClick?: (event: MouseEvent) => void
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: FocusEvent) => void
}

// Input 组件类型  
interface InputProps {
  value?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  size?: 'sm' | 'md' | 'lg'
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  maxLength?: number
  showWordLimit?: boolean
  prefix?: string | VNode
  suffix?: string | VNode
  onChange?: (value: string, event: Event) => void
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: FocusEvent) => void
  onClear?: () => void
}

// Form 组件类型
interface FormProps<T = Record<string, any>> {
  model?: T
  rules?: FormRules<T>
  layout?: 'horizontal' | 'vertical' | 'inline'
  labelWidth?: string | number
  labelAlign?: 'left' | 'right'
  requiredMark?: boolean
  validateOnRuleChange?: boolean
  onSubmit?: (values: T) => void
  onReset?: () => void
  onValidate?: (valid: boolean, errors: FormErrors) => void
}

type FormRules<T> = {
  [K in keyof T]?: FormRule[]
}

interface FormRule {
  required?: boolean
  message?: string
  pattern?: RegExp
  min?: number
  max?: number
  validator?: (value: any, callback: (error?: Error) => void) => void
  trigger?: 'blur' | 'change' | Array<'blur' | 'change'>
}
```

### 表格组件类型

```typescript
// Table 组件类型
interface TableProps<T = any> {
  columns: TableColumn<T>[]
  dataSource: T[]
  rowKey?: string | ((record: T) => string)
  loading?: boolean
  pagination?: PaginationProps | false
  scroll?: { x?: number; y?: number }
  size?: 'sm' | 'md' | 'lg'
  bordered?: boolean
  striped?: boolean
  hoverable?: boolean
  onRowClick?: (record: T, index: number) => void
  onSelectionChange?: (selectedRows: T[], selectedRowKeys: string[]) => void
}

interface TableColumn<T = any> {
  key: string
  title: string
  dataIndex?: keyof T
  width?: number | string
  minWidth?: number
  fixed?: 'left' | 'right'
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  filterable?: boolean
  filters?: Array<{ text: string; value: any }>
  render?: (value: any, record: T, index: number) => VNode | string
  customHeaderCell?: (column: TableColumn<T>) => object
  customCell?: (record: T, index: number) => object
}

interface PaginationProps {
  current?: number
  pageSize?: number
  total?: number
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  showTotal?: (total: number, range: [number, number]) => string
  onChange?: (page: number, pageSize: number) => void
}
```

## Vue 3 组合式API类型

### 基础用法

```vue
<template>
  <div class="user-form">
    <Form 
      ref="formRef"
      :model="formData" 
      :rules="formRules"
      @submit="handleSubmit"
    >
      <FormItem label="用户名" name="username">
        <Input 
          v-model="formData.username"
          placeholder="请输入用户名"
          @change="handleUsernameChange"
        />
      </FormItem>
      
      <FormItem label="邮箱" name="email">
        <Input 
          v-model="formData.email"
          type="email"
          placeholder="请输入邮箱"
        />
      </FormItem>
      
      <FormItem>
        <Button 
          type="primary" 
          html-type="submit"
          :loading="submitting"
        >
          提交
        </Button>
      </FormItem>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { FormInstance, FormRules } from '@ui-lib/ui-vue'

// 定义表单数据类型
interface UserForm {
  username: string
  email: string
  age?: number
}

// 响应式数据
const formRef = ref<FormInstance>()
const submitting = ref(false)

const formData = reactive<UserForm>({
  username: '',
  email: '',
  age: undefined
})

// 表单验证规则
const formRules: FormRules<UserForm> = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 20, message: '用户名长度在2-20个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { 
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
      message: '请输入有效的邮箱地址', 
      trigger: 'blur' 
    }
  ]
}

// 计算属性
const isFormValid = computed(() => {
  return formData.username.length > 0 && formData.email.length > 0
})

// 事件处理
const handleUsernameChange = (value: string) => {
  console.log('用户名改变:', value)
}

const handleSubmit = async () => {
  if (!formRef.value) return
  
  try {
    // 验证表单
    const valid = await formRef.value.validate()
    if (!valid) return
    
    submitting.value = true
    
    // 提交数据
    await submitUserData(formData)
    
    console.log('提交成功:', formData)
  } catch (error) {
    console.error('提交失败:', error)
  } finally {
    submitting.value = false
  }
}

// API 调用
const submitUserData = async (data: UserForm): Promise<void> => {
  // 模拟API调用
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}

// 暴露给模板的方法
defineExpose({
  resetForm: () => {
    formRef.value?.resetFields()
  },
  validateForm: () => {
    return formRef.value?.validate()
  }
})
</script>
```

### 自定义Hooks

```typescript
// composables/useTable.ts
import { ref, reactive, computed } from 'vue'
import type { TableColumn, PaginationProps } from '@ui-lib/ui-vue'

interface UseTableOptions<T> {
  columns: TableColumn<T>[]
  fetchData: (params: any) => Promise<{ data: T[]; total: number }>
  defaultPageSize?: number
}

export function useTable<T = any>(options: UseTableOptions<T>) {
  const { columns, fetchData, defaultPageSize = 10 } = options
  
  const loading = ref(false)
  const dataSource = ref<T[]>([])
  const selectedRows = ref<T[]>([])
  
  const pagination = reactive<PaginationProps>({
    current: 1,
    pageSize: defaultPageSize,
    total: 0
  })
  
  // 获取数据
  const loadData = async (params?: any) => {
    loading.value = true
    try {
      const response = await fetchData({
        page: pagination.current,
        pageSize: pagination.pageSize,
        ...params
      })
      
      dataSource.value = response.data
      pagination.total = response.total
    } catch (error) {
      console.error('获取数据失败:', error)
    } finally {
      loading.value = false
    }
  }
  
  // 分页改变
  const handlePageChange = (page: number, pageSize: number) => {
    pagination.current = page
    pagination.pageSize = pageSize
    loadData()
  }
  
  // 选择改变
  const handleSelectionChange = (rows: T[], keys: string[]) => {
    selectedRows.value = rows
  }
  
  // 刷新数据
  const refresh = () => {
    loadData()
  }
  
  // 重置分页
  const reset = () => {
    pagination.current = 1
    loadData()
  }
  
  return {
    loading: readonly(loading),
    dataSource: readonly(dataSource),
    selectedRows: readonly(selectedRows),
    pagination: readonly(pagination),
    columns,
    loadData,
    handlePageChange,
    handleSelectionChange,
    refresh,
    reset
  }
}
```

## React TypeScript 用法

### 函数组件类型

```tsx
import React, { useState, useCallback, useMemo } from 'react'
import type { FC, ReactNode } from 'react'
import { Form, FormItem, Input, Button, Table } from '@ui-lib/ui-react'
import type { FormInstance, TableColumn } from '@ui-lib/ui-react'

// Props 接口定义
interface UserFormProps {
  initialValues?: UserFormData
  onSubmit?: (values: UserFormData) => void
  onCancel?: () => void
  loading?: boolean
}

interface UserFormData {
  username: string
  email: string
  age?: number
}

// 组件定义
const UserForm: FC<UserFormProps> = ({
  initialValues,
  onSubmit,
  onCancel,
  loading = false
}) => {
  const [formData, setFormData] = useState<UserFormData>(
    initialValues || { username: '', email: '' }
  )
  
  const [errors, setErrors] = useState<Partial<Record<keyof UserFormData, string>>>({})
  
  // 表单验证
  const validate = useCallback((): boolean => {
    const newErrors: typeof errors = {}
    
    if (!formData.username.trim()) {
      newErrors.username = '请输入用户名'
    } else if (formData.username.length < 2) {
      newErrors.username = '用户名至少2个字符'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])
  
  // 提交处理
  const handleSubmit = useCallback(() => {
    if (validate()) {
      onSubmit?.(formData)
    }
  }, [formData, validate, onSubmit])
  
  // 字段更新
  const updateField = useCallback(<K extends keyof UserFormData>(
    field: K,
    value: UserFormData[K]
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // 清除错误
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }, [errors])
  
  return (
    <Form onSubmit={handleSubmit}>
      <FormItem 
        label="用户名" 
        required
        error={errors.username}
      >
        <Input
          value={formData.username}
          onChange={(e) => updateField('username', e.target.value)}
          placeholder="请输入用户名"
        />
      </FormItem>
      
      <FormItem 
        label="邮箱" 
        required
        error={errors.email}
      >
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="请输入邮箱"
        />
      </FormItem>
      
      <FormItem label="年龄">
        <Input
          type="number"
          value={formData.age || ''}
          onChange={(e) => updateField('age', parseInt(e.target.value) || undefined)}
          placeholder="请输入年龄"
        />
      </FormItem>
      
      <FormItem>
        <Button 
          type="primary" 
          htmlType="submit"
          loading={loading}
        >
          提交
        </Button>
        {onCancel && (
          <Button onClick={onCancel} style={{ marginLeft: 8 }}>
            取消
          </Button>
        )}
      </FormItem>
    </Form>
  )
}

export default UserForm
```

### 自定义Hook类型

```typescript
// hooks/useApi.ts
import { useState, useEffect, useCallback } from 'react'

interface ApiResponse<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => void
}

interface ApiOptions {
  immediate?: boolean
  onSuccess?: (data: any) => void
  onError?: (error: Error) => void
}

export function useApi<T = any>(
  apiFunction: () => Promise<T>,
  options: ApiOptions = {}
): ApiResponse<T> {
  const { immediate = true, onSuccess, onError } = options
  
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await apiFunction()
      setData(result)
      onSuccess?.(result)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      onError?.(err as Error)
    } finally {
      setLoading(false)
    }
  }, [apiFunction, onSuccess, onError])
  
  useEffect(() => {
    if (immediate) {
      fetchData()
    }
  }, [immediate, fetchData])
  
  return {
    data,
    loading,
    error,
    refetch: fetchData
  }
}

// 使用示例
interface User {
  id: number
  name: string
  email: string
}

function UserList() {
  const { data: users, loading, error, refetch } = useApi<User[]>(
    () => fetch('/api/users').then(res => res.json()),
    {
      onSuccess: (users) => console.log('获取用户成功:', users.length),
      onError: (error) => console.error('获取用户失败:', error)
    }
  )
  
  if (loading) return <div>加载中...</div>
  if (error) return <div>错误: {error}</div>
  
  return (
    <div>
      <Button onClick={refetch}>刷新</Button>
      {users?.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
```

## 类型扩展

### 全局类型声明

```typescript
// types/global.d.ts
declare global {
  namespace UI {
    // 主题类型
    type Theme = 'light' | 'dark' | 'auto'
    
    // 尺寸类型
    type Size = 'sm' | 'md' | 'lg'
    
    // 状态类型
    type Status = 'success' | 'warning' | 'error' | 'info'
    
    // 组件基础Props
    interface BaseProps {
      className?: string
      style?: React.CSSProperties
      id?: string
    }
    
    // 表单字段类型
    type FormFieldValue = string | number | boolean | Date | null | undefined
    
    // API响应类型
    interface ApiResponse<T = any> {
      code: number
      message: string
      data: T
    }
    
    // 分页响应类型
    interface PaginatedResponse<T = any> {
      list: T[]
      total: number
      current: number
      pageSize: number
    }
  }
}

export {}
```

### 模块扩展

```typescript
// types/ui-extensions.d.ts
import '@ui-lib/ui-vue'

declare module '@ui-lib/ui-vue' {
  // 扩展Button组件props
  interface ButtonProps {
    customProp?: string
  }
  
  // 扩展Form组件方法
  interface FormInstance {
    customMethod(): void
  }
  
  // 添加新的组件类型
  export interface CustomComponentProps {
    value?: any
    onChange?: (value: any) => void
  }
  
  export const CustomComponent: Component<CustomComponentProps>
}
```

## 开发工具配置

### ESLint 配置

```json
{
  "extends": [
    "@vue/eslint-config-typescript",
    "@ui-lib/eslint-config"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/prefer-const": "error"
  }
}
```

### Prettier 配置

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

### Vite 配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@ui': resolve(__dirname, 'node_modules/@ui-lib/ui-vue')
    }
  },
  server: {
    port: 3000
  },
  build: {
    target: 'es2020'
  }
})
```

通过这些TypeScript配置和类型定义，您可以获得完整的类型检查和智能提示，大大提升开发效率和代码质量！ 