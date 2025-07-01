<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Theme 主题定制</h1>
      <p class="text-lg text-gray-600">灵活的主题配置系统，支持深色模式和自定义主题。</p>
    </div>

    <div class="space-y-8">
      <div>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">功能特性</h2>
        <ul class="text-gray-600 space-y-2">
          <li>• 🎨 支持自定义颜色主题</li>
          <li>• 🌙 内置深色模式支持</li>
          <li>• 📱 响应式设计适配</li>
          <li>• 🔧 CSS变量动态更新</li>
          <li>• ⚡ 运行时主题切换</li>
        </ul>
      </div>

      <ExampleBlock
        title="基础用法"
        description="使用 useTheme composable 管理主题。"
        :code="basicThemeCode"
      >
        <div class="space-y-4">
          <div class="p-4 border rounded-lg" :class="isDark ? 'bg-gray-800 text-white' : 'bg-white'">
            <h4 class="font-medium mb-2">当前主题状态</h4>
            <p class="text-sm">深色模式: {{ isDark ? '开启' : '关闭' }}</p>
          </div>
          <div class="space-x-2">
            <Button @click="toggleDarkMode">
              {{ isDark ? '切换到浅色模式' : '切换到深色模式' }}
            </Button>
            <Button variant="outline" @click="applyCustomTheme">应用自定义主题</Button>
            <Button variant="ghost" @click="resetTheme">重置主题</Button>
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="主题颜色预览"
        description="查看当前主题的颜色配置。"
        :code="colorPreviewCode"
      >
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div v-for="(colorSet, colorName) in theme.colors" :key="colorName" class="space-y-2">
            <h5 class="text-sm font-medium capitalize">{{ colorName }}</h5>
            <div class="space-y-1">
              <div 
                v-for="(color, shade) in colorSet" 
                :key="shade"
                class="w-full h-8 rounded text-xs flex items-center justify-center text-white font-medium"
                :style="{ backgroundColor: color }"
              >
                {{ shade }}
              </div>
            </div>
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="实时主题编辑器"
        description="实时修改主题颜色。"
        :code="themeEditorCode"
      >
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">主色调 (Primary 500)</label>
              <input 
                type="color" 
                :value="currentPrimaryColor"
                @input="updatePrimaryColor"
                class="w-full h-10 rounded border"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">成功色 (Success 500)</label>
              <input 
                type="color" 
                :value="currentSuccessColor"
                @input="updateSuccessColor"
                class="w-full h-10 rounded border"
              />
            </div>
          </div>
          
          <div class="p-4 border rounded-lg bg-gray-50">
            <h4 class="font-medium mb-3">主题预览</h4>
            <div class="space-x-2">
              <Button>主要按钮</Button>
              <Button variant="outline">次要按钮</Button>
              <Badge variant="success">成功徽标</Badge>
              <Alert type="info" message="这是一个信息提示" />
            </div>
          </div>
        </div>
      </ExampleBlock>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">API 文档</h3>
        <div class="bg-gray-50 rounded-lg p-6">
          <h4 class="font-medium text-gray-900 mb-3">useTheme() 返回值</h4>
          <div class="space-y-2 text-sm">
            <div><code class="bg-white px-2 py-1 rounded">theme</code> - 当前主题配置对象</div>
            <div><code class="bg-white px-2 py-1 rounded">isDark</code> - 是否为深色模式</div>
            <div><code class="bg-white px-2 py-1 rounded">setTheme(theme)</code> - 设置主题</div>
            <div><code class="bg-white px-2 py-1 rounded">toggleDarkMode()</code> - 切换深色模式</div>
            <div><code class="bg-white px-2 py-1 rounded">applyCSSVariables()</code> - 应用CSS变量</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from '@ui-lib/ui-vue'
import { Button, Badge, Alert } from '@ui-lib/ui-vue'
import ExampleBlock from '../ExampleBlock.vue'

const { theme, isDark, setTheme, toggleDarkMode, applyCSSVariables } = useTheme()

const currentPrimaryColor = ref('#3b82f6')
const currentSuccessColor = ref('#10b981')

const updatePrimaryColor = (event: Event) => {
  const target = event.target as HTMLInputElement
  currentPrimaryColor.value = target.value
  // 这里可以更新主题
}

const updateSuccessColor = (event: Event) => {
  const target = event.target as HTMLInputElement
  currentSuccessColor.value = target.value
  // 这里可以更新主题
}

const applyCustomTheme = () => {
  setTheme({
    colors: {
      primary: {
        ...theme.value.colors.primary,
        500: currentPrimaryColor.value
      }
    }
  })
  alert('自定义主题已应用！')
}

const resetTheme = () => {
  // 重置为默认主题
  location.reload()
}

const basicThemeCode = `<template>
  <div>
    <Button @click="toggleDarkMode">
      {{ isDark ? '切换到浅色模式' : '切换到深色模式' }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@ui-lib/ui-vue'
import { Button } from '@ui-lib/ui-vue'

const { isDark, toggleDarkMode } = useTheme()
<\/script>`

const colorPreviewCode = `<template>
  <div class="grid grid-cols-5 gap-4">
    <div v-for="(colorSet, colorName) in theme.colors" :key="colorName">
      <h5 class="font-medium">{{ colorName }}</h5>
      <div v-for="(color, shade) in colorSet" :key="shade">
        <div :style="{ backgroundColor: color }">{{ shade }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@ui-lib/ui-vue'

const { theme } = useTheme()
<\/script>`

const themeEditorCode = `<template>
  <div>
    <input 
      type="color" 
      :value="primaryColor"
      @input="updateTheme"
    />
    <Button>预览按钮</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '@ui-lib/ui-vue'
import { Button } from '@ui-lib/ui-vue'

const { setTheme } = useTheme()
const primaryColor = ref('#3b82f6')

const updateTheme = (event) => {
  setTheme({
    colors: {
      primary: { 500: event.target.value }
    }
  })
}
<\/script>`
</script>

<style scoped>
/* 组件特定样式 */
</style> 