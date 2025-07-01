<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Form 表单</h1>
      <p class="text-lg text-gray-600">表单包含输入框、选择器、复选框、单选框等用户输入的组件。</p>
    </div>

    <!-- 基础用法 -->
    <ExampleBlock 
      title="基础用法" 
      description="最简单的表单"
      :code="basicCode">
      <div class="space-y-4">
        <Form @submit="handleSubmit">
          <FormItem label="用户名" required>
            <Input v-model="form.username" placeholder="请输入用户名" />
          </FormItem>
          <FormItem label="邮箱" required>
            <Input v-model="form.email" type="email" placeholder="请输入邮箱" />
          </FormItem>
          <FormItem label="密码" required>
            <Input v-model="form.password" type="password" placeholder="请输入密码" />
          </FormItem>
          <FormItem>
            <div class="flex space-x-2">
              <Button type="submit" variant="primary">提交</Button>
              <Button type="button" variant="outline" @click="resetForm">重置</Button>
            </div>
          </FormItem>
        </Form>
      </div>
    </ExampleBlock>

    <!-- 表单布局 -->
    <ExampleBlock 
      title="表单布局" 
      description="不同的表单布局"
      :code="layoutCode">
      <div class="space-y-8">
        <div>
          <h4 class="text-md font-medium mb-4">水平布局</h4>
          <Form layout="horizontal">
            <FormItem label="姓名">
              <Input v-model="form2.name" placeholder="请输入姓名" />
            </FormItem>
            <FormItem label="年龄">
              <Input v-model="form2.age" placeholder="请输入年龄" />
            </FormItem>
          </Form>
        </div>
        <div>
          <h4 class="text-md font-medium mb-4">行内布局</h4>
          <Form layout="inline">
            <FormItem label="关键词">
              <Input v-model="form2.keyword" placeholder="搜索关键词" />
            </FormItem>
            <FormItem>
              <Button variant="primary">搜索</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </ExampleBlock>

    <!-- 表单验证 -->
    <ExampleBlock 
      title="表单验证" 
      description="带验证的表单"
      :code="validationCode">
      <div class="space-y-4">
        <Form @submit="handleValidatedSubmit">
          <FormItem label="手机号" required error="请输入正确的手机号">
            <Input v-model="form3.phone" placeholder="请输入手机号" />
          </FormItem>
          <FormItem label="确认密码" required>
            <Input v-model="form3.confirmPassword" type="password" placeholder="请再次输入密码" />
          </FormItem>
          <FormItem>
            <Button type="submit" variant="primary">注册</Button>
          </FormItem>
        </Form>
      </div>
    </ExampleBlock>

    <!-- API 文档 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">API</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Form Props</h3>
          <ApiTable :data="formProps" />
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">FormItem Props</h3>
          <ApiTable :data="formItemProps" />
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Events</h3>
          <ApiTable :data="events" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input, Button } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 基础表单
const form = reactive({
  username: '',
  email: '',
  password: ''
})

// 布局表单
const form2 = reactive({
  name: '',
  age: '',
  keyword: ''
})

// 验证表单
const form3 = reactive({
  phone: '',
  confirmPassword: ''
})

const handleSubmit = (data: any) => {
  console.log('提交表单:', data)
}

const resetForm = () => {
  Object.assign(form, {
    username: '',
    email: '',
    password: ''
  })
}

const handleValidatedSubmit = (data: any) => {
  console.log('验证表单提交:', data)
}

// 代码示例
const basicCode = 'import { Form, FormItem, Input, Button } from "@ui-lib/ui-vue"\n\n// 基础表单'
const layoutCode = 'import { Form } from "@ui-lib/ui-vue"\n\n// 表单布局'
const validationCode = 'import { Form, FormItem } from "@ui-lib/ui-vue"\n\n// 表单验证'

// API 数据
const formProps = [
  { name: 'layout', type: 'vertical | horizontal | inline', default: 'vertical', description: '表单布局' },
  { name: 'size', type: 'sm | md | lg', default: 'md', description: '表单尺寸' }
]

const formItemProps = [
  { name: 'label', type: 'string', default: '-', description: '标签文本' },
  { name: 'required', type: 'boolean', default: 'false', description: '是否必填' },
  { name: 'error', type: 'string', default: '-', description: '错误信息' },
  { name: 'help', type: 'string', default: '-', description: '帮助文本' }
]

const events = [
  { name: 'submit', type: '(data: any) => void', description: '表单提交事件' }
]
</script> 