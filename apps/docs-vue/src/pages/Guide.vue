<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 class="text-4xl font-bold text-center text-blue-600 mb-8">
        🎉 Vue 指南页面正常工作！
      </h1>
      
      <div class="max-w-3xl mx-auto">
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Vue 开发指南</h2>
          <p class="text-lg text-gray-600 mb-6">
            本指南将帮助您快速上手 Vue 组件库，从安装到深度定制，涵盖了您需要了解的所有内容。
          </p>
          <div class="flex space-x-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Vue 3.0+
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              TypeScript
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              Composition API
            </span>
          </div>
        </div>

        <!-- 导航卡片 -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">📦</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">安装</h3>
            <p class="text-gray-600 mb-4">快速安装和配置 Vue 组件库</p>
            <div class="bg-gray-900 rounded p-3">
              <code class="text-green-400 text-sm">npm install @ui-lib/ui-vue</code>
            </div>
          </div>

          <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">🚀</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">快速开始</h3>
            <p class="text-gray-600 mb-4">几分钟内开始使用组件</p>
            <div class="bg-gray-900 rounded p-3">
              <code class="text-green-400 text-sm">import { Button } from '@ui-lib/ui-vue'</code>
            </div>
          </div>

          <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">🎨</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">主题定制</h3>
            <p class="text-gray-600 mb-4">自定义主题和样式</p>
            <div class="bg-gray-900 rounded p-3">
              <code class="text-green-400 text-sm">ThemeProvider</code>
            </div>
          </div>

          <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">🌐</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">国际化</h3>
            <p class="text-gray-600 mb-4">多语言支持和本地化</p>
            <div class="bg-gray-900 rounded p-3">
              <code class="text-green-400 text-sm">I18nProvider</code>
            </div>
          </div>
        </div>

        <!-- 示例代码 -->
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">基础使用示例</h3>
          <div class="bg-gray-900 rounded-lg p-4">
            <pre class="text-green-400 text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Button variant="primary"&gt;主要按钮&lt;/Button&gt;
    &lt;Button variant="secondary"&gt;次要按钮&lt;/Button&gt;
    &lt;Input v-model="value" placeholder="输入内容" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import { Button, Input } from '@ui-lib/ui-vue'

const value = ref('')
&lt;/script&gt;</code></pre>
          </div>
        </div>

        <!-- 状态信息 -->
        <div class="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div class="flex items-center">
            <span class="text-green-600 mr-2">✅</span>
            <span class="text-green-800 font-medium">Vue 指南页面已成功加载！</span>
          </div>
          <p class="text-green-700 text-sm mt-2">
            页面路由工作正常，组件渲染成功。接下来可以添加更多详细内容。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 简单的测试脚本
console.log('Vue 指南页面已加载')
</script>

<style scoped>
/* 添加一些动画效果 */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style> 