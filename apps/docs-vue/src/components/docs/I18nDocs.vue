<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">I18n 国际化</h1>
      <p class="text-lg text-gray-600">强大的多语言支持系统，轻松实现应用的国际化。</p>
    </div>

    <div class="space-y-8">
      <div>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">功能特性</h2>
        <ul class="text-gray-600 space-y-2">
          <li>• 🌍 多语言支持</li>
          <li>• 🔄 动态语言切换</li>
          <li>• 📝 模板变量替换</li>
          <li>• 🔗 嵌套键值访问</li>
          <li>• 🛡️ 类型安全的API</li>
          <li>• 📦 轻量级实现</li>
        </ul>
      </div>

      <ExampleBlock
        title="基础用法"
        description="使用 useI18n composable 进行文本翻译。"
        :code="basicI18nCode"
      >
        <div class="space-y-4">
          <div class="p-4 border rounded-lg bg-gray-50">
            <h4 class="font-medium mb-3">当前语言: {{ currentLocale }}</h4>
            <div class="space-y-2 text-sm">
              <div>确认按钮: <strong>{{ t('button.confirm') }}</strong></div>
              <div>取消按钮: <strong>{{ t('button.cancel') }}</strong></div>
              <div>必填字段: <strong>{{ t('form.required') }}</strong></div>
              <div>加载中: <strong>{{ t('loading.text') }}</strong></div>
            </div>
          </div>
          <div class="space-x-2">
            <Button @click="setLocale('zh-CN')" :disabled="currentLocale === 'zh-CN'">中文</Button>
            <Button @click="setLocale('en-US')" :disabled="currentLocale === 'en-US'">English</Button>
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="变量替换"
        description="支持在翻译文本中使用变量。"
        :code="variableI18nCode"
      >
        <div class="space-y-4">
          <div class="p-4 border rounded-lg bg-gray-50">
            <div class="space-y-2">
              <div>{{ t('form.minLength', { min: 6 }) }}</div>
              <div>{{ t('form.maxLength', { max: 20 }) }}</div>
            </div>
          </div>
          <div class="space-x-2">
            <Input 
              :placeholder="t('form.placeholder.input')" 
              :label="t('form.email')"
            />
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="组件国际化"
        description="在组件中使用国际化。"
        :code="componentI18nCode"
      >
        <div class="space-y-4">
          <Alert 
            :type="'success'" 
            :title="t('alert.success')"
            :message="t('alert.success') + '！操作已完成。'"
          />
          
          <div class="space-x-2">
            <Button>{{ t('button.save') }}</Button>
            <Button variant="outline">{{ t('button.cancel') }}</Button>
            <Button variant="ghost">{{ t('button.edit') }}</Button>
          </div>
          
          <Loading :text="t('loading.text')" />
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="自定义语言包"
        description="添加自定义的语言包。"
        :code="customI18nCode"
      >
        <div class="space-y-4">
          <div class="p-4 border rounded-lg bg-gray-50">
            <h4 class="font-medium mb-2">可用语言</h4>
            <div class="flex flex-wrap gap-2">
              <Badge 
                v-for="locale in availableLocales" 
                :key="locale"
                :variant="locale === currentLocale ? 'primary' : 'default'"
              >
                {{ locale }}
              </Badge>
            </div>
          </div>
          
          <div class="space-x-2">
            <Button @click="addJapanese" variant="outline">添加日语</Button>
            <Button @click="addKorean" variant="outline">添加韩语</Button>
            <Button @click="showCustomMessage" variant="ghost">显示自定义消息</Button>
          </div>
          
          <div v-if="customMessageVisible" class="p-3 bg-blue-50 rounded-lg">
            <div class="text-sm">
              自定义消息: <strong>{{ t('custom.welcome', { name: '用户' }) }}</strong>
            </div>
          </div>
        </div>
      </ExampleBlock>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">API 文档</h3>
        <div class="bg-gray-50 rounded-lg p-6 space-y-4">
          <div>
            <h4 class="font-medium text-gray-900 mb-2">useI18n() 返回值</h4>
            <div class="space-y-2 text-sm">
              <div><code class="bg-white px-2 py-1 rounded">t(key, values?)</code> - 翻译函数</div>
              <div><code class="bg-white px-2 py-1 rounded">setLocale(locale)</code> - 设置当前语言</div>
              <div><code class="bg-white px-2 py-1 rounded">addMessages(locale, messages)</code> - 添加语言包</div>
              <div><code class="bg-white px-2 py-1 rounded">currentLocale</code> - 当前语言</div>
              <div><code class="bg-white px-2 py-1 rounded">availableLocales</code> - 可用语言列表</div>
            </div>
          </div>
          
          <div>
            <h4 class="font-medium text-gray-900 mb-2">内置语言包结构</h4>
            <pre class="bg-white p-3 rounded text-xs overflow-x-auto"><code>{
  button: { confirm: '确认', cancel: '取消', ... },
  form: { required: '必填项', email: '邮箱', ... },
  modal: { close: '关闭', confirm: '确认', ... },
  alert: { success: '成功', warning: '警告', ... },
  loading: { text: '加载中...' }
}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@ui-lib/ui-vue'
import { Button, Badge, Alert, Input, Loading } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'

const { t, setLocale, addMessages, currentLocale, availableLocales } = useI18n()

const customMessageVisible = ref(false)

const addJapanese = () => {
  addMessages('ja-JP', {
    button: { confirm: '確認', cancel: 'キャンセル' },
    loading: { text: '読み込み中...' }
  })
  alert('日语语言包已添加！')
}

const addKorean = () => {
  addMessages('ko-KR', {
    button: { confirm: '확인', cancel: '취소' },
    loading: { text: '로딩 중...' }
  })
  alert('韩语语言包已添加！')
}

const showCustomMessage = () => {
  addMessages(currentLocale.value, {
    custom: {
      welcome: '欢迎 {name}！'
    }
  })
  customMessageVisible.value = true
}

const basicI18nCode = `<template>
  <div>
    <div>{{ t('button.confirm') }}</div>
    <div>{{ t('button.cancel') }}</div>
    <Button @click="setLocale('en-US')">English</Button>
    <Button @click="setLocale('zh-CN')">中文</Button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@ui-lib/ui-vue'

const { t, setLocale } = useI18n()
<\/script>`

const variableI18nCode = `<template>
  <div>
    <div>{{ t('form.minLength', { min: 6 }) }}</div>
    <div>{{ t('form.maxLength', { max: 20 }) }}</div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@ui-lib/ui-vue'

const { t } = useI18n()
<\/script>`

const componentI18nCode = `<template>
  <div>
    <Alert :title="t('alert.success')" />
    <Button>{{ t('button.save') }}</Button>
    <Loading :text="t('loading.text')" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@ui-lib/ui-vue'
import { Alert, Button, Loading } from '@ui-lib/ui-vue'

const { t } = useI18n()
<\/script>`

const customI18nCode = `<template>
  <div>
    <Button @click="addCustomLocale">添加语言</Button>
    <div>{{ t('custom.message') }}</div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@ui-lib/ui-vue'

const { t, addMessages } = useI18n()

const addCustomLocale = () => {
  addMessages('ja-JP', {
    custom: { message: 'カスタムメッセージ' }
  })
}
<\/script>`
</script>

<style scoped>
/* 组件特定样式 */
</style> 