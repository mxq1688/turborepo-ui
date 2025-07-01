<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Input 输入框</h1>
      <p class="text-lg text-gray-600">通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
    </div>

    <div class="space-y-8">
      <div>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
        <ul class="text-gray-600 space-y-2">
          <li>• 需要用户输入表单域内容时。</li>
          <li>• 提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>
          <li>• 支持前缀和后缀图标/文字。</li>
          <li>• 支持禁用、只读等状态。</li>
        </ul>
      </div>

      <ExampleBlock
        title="基础用法"
        description="基本使用。"
        :code="basicInputCode"
      >
        <div class="space-y-4 w-80">
          <Input 
            v-model="basicValue" 
            placeholder="请输入内容"
          />
          <div class="text-sm text-gray-500">
            输入值：{{ basicValue || '(空)' }}
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="三种大小"
        description="我们为 <code>&lt;Input /&gt;</code> 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。"
        :code="inputSizesCode"
      >
        <div class="space-y-4 w-80">
          <div>
            <div class="text-sm text-gray-700 mb-2">大尺寸</div>
            <Input 
              v-model="largeValue" 
              size="lg"
              placeholder="大尺寸输入框"
            />
          </div>
          <div>
            <div class="text-sm text-gray-700 mb-2">默认尺寸</div>
            <Input 
              v-model="defaultValue" 
              placeholder="默认尺寸输入框"
            />
          </div>
          <div>
            <div class="text-sm text-gray-700 mb-2">小尺寸</div>
            <Input 
              v-model="smallValue" 
              size="sm"
              placeholder="小尺寸输入框"
            />
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="输入框状态"
        description="输入框的禁用和只读状态。"
        :code="inputStatesCode"
      >
        <div class="space-y-4 w-80">
          <div>
            <div class="text-sm text-gray-700 mb-2">正常状态</div>
            <Input 
              v-model="normalValue" 
              placeholder="正常输入框"
            />
          </div>
          <div>
            <div class="text-sm text-gray-700 mb-2">禁用状态</div>
            <Input 
              v-model="disabledValue" 
              placeholder="禁用输入框"
              :disabled="true"
            />
          </div>
          <div>
            <div class="text-sm text-gray-700 mb-2">只读状态</div>
            <Input 
              v-model="readonlyValue" 
              :readonly="true"
            />
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="密码输入框"
        description="密码输入框。"
        :code="passwordInputCode"
      >
        <div class="space-y-4 w-80">
          <div>
            <div class="text-sm text-gray-700 mb-2">密码输入</div>
            <Input 
              v-model="passwordValue" 
              type="password"
              placeholder="请输入密码"
            />
          </div>
          <div class="text-sm text-gray-500">
            密码长度：{{ passwordValue?.length || 0 }} 位
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="数字输入框"
        description="输入数字的输入框。"
        :code="numberInputCode"
      >
        <div class="space-y-4 w-80">
          <div>
            <div class="text-sm text-gray-700 mb-2">数字输入</div>
            <Input 
              v-model="numberValue" 
              type="number"
              placeholder="请输入数字"
            />
          </div>
          <div>
            <div class="text-sm text-gray-700 mb-2">邮箱输入</div>
            <Input 
              v-model="emailValue" 
              type="email"
              placeholder="请输入邮箱地址"
            />
          </div>
          <div>
            <div class="text-sm text-gray-700 mb-2">电话输入</div>
            <Input 
              v-model="telValue" 
              type="tel"
              placeholder="请输入电话号码"
            />
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="文本域"
        description="用于多行输入。"
        :code="textareaCode"
      >
        <div class="space-y-4 w-80">
          <div>
            <div class="text-sm text-gray-700 mb-2">多行文本</div>
            <textarea 
              v-model="textareaValue"
              class="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              placeholder="请输入多行文本..."
            />
          </div>
          <div class="text-sm text-gray-500">
            字符数：{{ textareaValue?.length || 0 }}
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="带清除图标"
        description="可以点击清除图标删除输入框内容。"
        :code="clearableInputCode"
      >
        <div class="space-y-4 w-80">
          <div class="relative">
            <Input 
              v-model="clearableValue" 
              placeholder="可清除的输入框"
              class="pr-8"
            />
            <button
              v-if="clearableValue"
              @click="clearableValue = ''"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="搜索输入框"
        description="带有搜索图标的输入框。"
        :code="searchInputCode"
      >
        <div class="space-y-4 w-80">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-400">🔍</span>
            </div>
            <Input 
              v-model="searchValue" 
              placeholder="搜索..."
              class="pl-10"
            />
          </div>
          <div class="text-sm text-gray-500">
            搜索内容：{{ searchValue || '(空)' }}
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="表单验证"
        description="结合表单验证的输入框示例。"
        :code="validationCode"
      >
        <div class="space-y-4 w-80">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              用户名 <span class="text-red-500">*</span>
            </label>
            <Input 
              v-model="formData.username" 
              placeholder="请输入用户名"
              :class="{ 'border-red-500': errors.username }"
            />
            <div v-if="errors.username" class="text-red-500 text-sm mt-1">
              {{ errors.username }}
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              邮箱 <span class="text-red-500">*</span>
            </label>
            <Input 
              v-model="formData.email" 
              type="email"
              placeholder="请输入邮箱"
              :class="{ 'border-red-500': errors.email }"
            />
            <div v-if="errors.email" class="text-red-500 text-sm mt-1">
              {{ errors.email }}
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              密码 <span class="text-red-500">*</span>
            </label>
            <Input 
              v-model="formData.password" 
              type="password"
              placeholder="请输入密码"
              :class="{ 'border-red-500': errors.password }"
            />
            <div v-if="errors.password" class="text-red-500 text-sm mt-1">
              {{ errors.password }}
            </div>
          </div>

          <div class="flex space-x-2 pt-4">
            <Button @click="validateForm">验证表单</Button>
            <Button variant="outline" @click="resetForm">重置</Button>
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="输入框组合"
        description="输入框的组合形式。"
        :code="inputGroupCode"
      >
        <div class="space-y-4 w-80">
          <div>
            <div class="text-sm text-gray-700 mb-2">前缀文字</div>
            <div class="flex">
              <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                https://
              </span>
              <Input 
                v-model="urlValue" 
                placeholder="www.example.com"
                class="rounded-l-none"
              />
            </div>
          </div>

          <div>
            <div class="text-sm text-gray-700 mb-2">后缀文字</div>
            <div class="flex">
              <Input 
                v-model="priceValue" 
                placeholder="0.00"
                class="rounded-r-none"
              />
              <span class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                元
              </span>
            </div>
          </div>

          <div>
            <div class="text-sm text-gray-700 mb-2">前后缀</div>
            <div class="flex">
              <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                $
              </span>
              <Input 
                v-model="amountValue" 
                placeholder="0.00"
                class="rounded-none"
              />
              <span class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                USD
              </span>
            </div>
          </div>
        </div>
      </ExampleBlock>

      <ApiTable title="Input API" :data="inputApiData" />

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
        <div class="bg-gray-50 rounded-lg p-6 space-y-4">
          <div>
            <h4 class="font-medium text-gray-900 mb-2">输入框类型</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• <strong>text</strong>：默认的文本输入框</li>
              <li>• <strong>password</strong>：密码输入框，输入内容会被遮盖</li>
              <li>• <strong>email</strong>：邮箱输入框，会进行邮箱格式验证</li>
              <li>• <strong>number</strong>：数字输入框，只能输入数字</li>
              <li>• <strong>tel</strong>：电话输入框，用于电话号码输入</li>
              <li>• <strong>url</strong>：URL 输入框，用于网址输入</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium text-gray-900 mb-2">使用建议</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• 合理使用占位符文字，提供输入提示</li>
              <li>• 对于必填字段，要有明确的标识</li>
              <li>• 提供实时的输入验证反馈</li>
              <li>• 错误信息要清晰明确，帮助用户修正输入</li>
              <li>• 考虑移动端的输入体验，选择合适的键盘类型</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Input, Button } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'
import ApiTable from '../ApiTable.vue'

// 基础示例数据
const basicValue = ref('')
const largeValue = ref('')
const defaultValue = ref('')
const smallValue = ref('')
const normalValue = ref('')
const disabledValue = ref('禁用状态的值')
const readonlyValue = ref('只读状态的值')
const passwordValue = ref('')
const numberValue = ref('')
const emailValue = ref('')
const telValue = ref('')
const textareaValue = ref('')
const clearableValue = ref('')
const searchValue = ref('')
const urlValue = ref('')
const priceValue = ref('')
const amountValue = ref('')

// 表单验证
const formData = reactive({
  username: '',
  email: '',
  password: ''
})

const errors = reactive({
  username: '',
  email: '',
  password: ''
})

const validateForm = () => {
  // 清空之前的错误
  errors.username = ''
  errors.email = ''
  errors.password = ''

  // 验证用户名
  if (!formData.username) {
    errors.username = '请输入用户名'
  } else if (formData.username.length < 3) {
    errors.username = '用户名至少3个字符'
  }

  // 验证邮箱
  if (!formData.email) {
    errors.email = '请输入邮箱'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = '邮箱格式不正确'
  }

  // 验证密码
  if (!formData.password) {
    errors.password = '请输入密码'
  } else if (formData.password.length < 6) {
    errors.password = '密码至少6个字符'
  }

  // 检查是否有错误
  const hasErrors = errors.username || errors.email || errors.password
  if (!hasErrors) {
    alert('表单验证通过！')
  }
}

const resetForm = () => {
  formData.username = ''
  formData.email = ''
  formData.password = ''
  errors.username = ''
  errors.email = ''
  errors.password = ''
}

const inputApiData = reactive([
  { property: 'v-model', description: '绑定值', type: 'string | number', default: '-' },
  { property: 'type', description: '输入框类型', type: "'text' | 'password' | 'email' | 'number' | 'tel' | 'url'", default: "'text'" },
  { property: 'size', description: '输入框大小', type: "'sm' | 'md' | 'lg'", default: "'md'" },
  { property: 'placeholder', description: '占位符', type: 'string', default: '-' },
  { property: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
  { property: 'readonly', description: '是否只读', type: 'boolean', default: 'false' },
  { property: 'class', description: '自定义 CSS 类名', type: 'string', default: '-' },
  { property: '@input', description: '输入时触发', type: '(value: string) => void', default: '-' },
  { property: '@change', description: '值改变时触发', type: '(value: string) => void', default: '-' },
  { property: '@focus', description: '获得焦点时触发', type: '(event: FocusEvent) => void', default: '-' },
  { property: '@blur', description: '失去焦点时触发', type: '(event: FocusEvent) => void', default: '-' },
])

const basicInputCode = `<template>
  <div class="w-80">
    <Input 
      v-model="inputValue" 
      placeholder="请输入内容"
    />
    <div class="text-sm text-gray-500 mt-2">
      输入值：{{ inputValue || '(空)' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@ui-lib/ui-vue'

const inputValue = ref('')
<\/script>`

const inputSizesCode = `<template>
  <div class="space-y-4 w-80">
    <Input size="lg" placeholder="大尺寸输入框" />
    <Input placeholder="默认尺寸输入框" />
    <Input size="sm" placeholder="小尺寸输入框" />
  </div>
</template>

<script setup lang="ts">
import { Input } from '@ui-lib/ui-vue'
<\/script>`

const inputStatesCode = `<template>
  <div class="space-y-4 w-80">
    <Input placeholder="正常输入框" />
    <Input placeholder="禁用输入框" :disabled="true" />
    <Input value="只读状态的值" :readonly="true" />
  </div>
</template>

<script setup lang="ts">
import { Input } from '@ui-lib/ui-vue'
<\/script>`

const passwordInputCode = `<template>
  <div class="w-80">
    <Input 
      v-model="password" 
      type="password"
      placeholder="请输入密码"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@ui-lib/ui-vue'

const password = ref('')
<\/script>`

const numberInputCode = `<template>
  <div class="space-y-4 w-80">
    <Input type="number" placeholder="请输入数字" />
    <Input type="email" placeholder="请输入邮箱地址" />
    <Input type="tel" placeholder="请输入电话号码" />
  </div>
</template>

<script setup lang="ts">
import { Input } from '@ui-lib/ui-vue'
<\/script>`

const textareaCode = `<template>
  <div class="w-80">
    <textarea 
      v-model="textValue"
      class="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows="4"
      placeholder="请输入多行文本..."
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const textValue = ref('')
<\/script>`

const clearableInputCode = `<template>
  <div class="relative w-80">
    <Input 
      v-model="value" 
      placeholder="可清除的输入框"
      class="pr-8"
    />
    <button
      v-if="value"
      @click="value = ''"
      class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
    >
      ✕
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@ui-lib/ui-vue'

const value = ref('')
<\/script>`

const searchInputCode = `<template>
  <div class="relative w-80">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <span class="text-gray-400">🔍</span>
    </div>
    <Input 
      v-model="searchValue" 
      placeholder="搜索..."
      class="pl-10"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@ui-lib/ui-vue'

const searchValue = ref('')
<\/script>`

const validationCode = `<template>
  <div class="space-y-4 w-80">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">
        用户名 <span class="text-red-500">*</span>
      </label>
      <Input 
        v-model="form.username" 
        placeholder="请输入用户名"
        :class="{ 'border-red-500': errors.username }"
      />
      <div v-if="errors.username" class="text-red-500 text-sm mt-1">
        {{ errors.username }}
      </div>
    </div>
    
    <Button @click="validate">验证表单</Button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Input, Button } from '@ui-lib/ui-vue'

const form = reactive({ username: '', email: '', password: '' })
const errors = reactive({ username: '', email: '', password: '' })

const validate = () => {
  // 验证逻辑...
}
<\/script>`

const inputGroupCode = `<template>
  <div class="space-y-4 w-80">
    <!-- 前缀 -->
    <div class="flex">
      <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
        https://
      </span>
      <Input placeholder="www.example.com" class="rounded-l-none" />
    </div>
    
    <!-- 后缀 -->
    <div class="flex">
      <Input placeholder="0.00" class="rounded-r-none" />
      <span class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
        元
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from '@ui-lib/ui-vue'
<\/script>`
</script>

<style scoped>
/* 组件特定样式 */
</style> 