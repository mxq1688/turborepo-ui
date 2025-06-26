<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Vue UI 组件库演示
        </h1>
        <p class="text-lg text-gray-600">
          使用 Vue 3 + Composition API 构建的现代 UI 组件库
        </p>
      </div>

      <!-- 调试区域 -->
      <Card class="mb-8 border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle class="text-red-700">🐛 Vue 调试区域</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <Button 
              ref="debugButton"
              variant="primary" 
              @click="handleDebugClick"
            >
              测试 Vue 按钮点击
            </Button>
            <Input 
              v-model="debugInput"
              label="Vue 调试输入框" 
              placeholder="输入调试内容..."
              @input="handleDebugInput"
            />
            <p v-if="debugInput" class="text-sm text-gray-600">
              当前输入值: {{ debugInput }}
            </p>
          </div>
        </CardContent>
      </Card>

      <div class="grid gap-8 md:grid-cols-2">
        <!-- 按钮示例 -->
        <Card>
          <CardHeader>
            <CardTitle>Vue 按钮组件</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div>
                <h4 class="text-sm font-medium mb-2">不同样式</h4>
                <div class="flex flex-wrap gap-2">
                  <Button variant="primary" @click="() => showMessage('primary')">主要按钮</Button>
                  <Button variant="secondary" @click="() => showMessage('secondary')">次要按钮</Button>
                  <Button variant="outline" @click="() => showMessage('outline')">边框按钮</Button>
                  <Button variant="ghost" @click="() => showMessage('ghost')">幽灵按钮</Button>
                </div>
              </div>
              <div>
                <h4 class="text-sm font-medium mb-2">不同尺寸</h4>
                <div class="flex flex-wrap gap-2 items-center">
                  <Button size="sm">小按钮</Button>
                  <Button size="md">中按钮</Button>
                  <Button size="lg">大按钮</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- 输入框示例 -->
        <Card>
          <CardHeader>
            <CardTitle>Vue 输入框组件</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <Input
                v-model="username"
                label="用户名"
                placeholder="请输入用户名"
                :error="usernameError"
              />
              <Input
                v-model="email"
                label="邮箱"
                type="email"
                placeholder="请输入邮箱地址"
              />
              <Input
                v-model="password"
                label="密码"
                type="password"
                placeholder="请输入密码"
              />
              <Input
                placeholder="禁用状态"
                disabled
              />
            </div>
          </CardContent>
        </Card>

        <!-- 卡片示例 -->
        <Card>
          <CardHeader>
            <CardTitle>Vue 产品卡片</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="text-gray-600">
                这是一个使用 Vue Card 组件构建的产品展示卡片。
              </div>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-green-600">¥299</span>
                <Button size="sm" @click="() => showMessage('购买')">立即购买</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- 表单示例 -->
        <Card>
          <CardHeader>
            <CardTitle>Vue 联系表单</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <Input
                v-model="contactForm.name"
                label="姓名"
                placeholder="请输入您的姓名"
              />
              <Input
                v-model="contactForm.email"
                label="邮箱"
                type="email"
                placeholder="请输入邮箱地址"
              />
              <Input
                v-model="contactForm.message"
                label="消息"
                placeholder="请输入您的消息"
              />
              <Button class="w-full" @click="submitForm">发送消息</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- 代码示例 -->
      <Card class="mt-8">
        <CardHeader>
          <CardTitle>Vue 使用示例</CardTitle>
        </CardHeader>
        <CardContent>
          <pre class="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto"><code>{{ vueCodeExample }}</code></pre>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  Input 
} from '@ui-lib/ui-vue'

// 响应式数据
const debugInput = ref('')
const debugButton = ref()
const username = ref('')
const email = ref('')
const password = ref('')

const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

// 计算属性
const usernameError = computed(() => {
  if (username.value.length > 0 && username.value.length < 3) {
    return '用户名至少需要3个字符'
  }
  return ''
})

const vueCodeExample = `<template>
  <Card>
    <CardHeader>
      <CardTitle>我的 Vue 卡片</CardTitle>
    </CardHeader>
    <CardContent>
      <Input 
        v-model="username" 
        label="用户名" 
        placeholder="请输入用户名" 
      />
      <Button variant="primary" @click="submit">提交</Button>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Card, CardHeader, CardTitle, CardContent, Input } from '@ui-lib/ui-vue'

const username = ref('')

function submit() {
  console.log('提交:', username.value)
}
<\/script>`

// 方法
const handleDebugClick = () => {
  console.log('🐛 Vue调试按钮被点击!')
  alert('Vue 调试点击!')
}

const handleDebugInput = (event: Event) => {
  console.log('🐛 Vue调试输入:', debugInput.value)
}

const showMessage = (type: string) => {
  alert(`Vue ${type} 按钮被点击!`)
}

const submitForm = () => {
  console.log('Vue表单提交:', contactForm.value)
  alert('Vue表单已提交!')
}

// 监听器
watch(username, (newValue) => {
  console.log('用户名变化:', newValue)
})
</script>

<style>
/* 全局样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style> 