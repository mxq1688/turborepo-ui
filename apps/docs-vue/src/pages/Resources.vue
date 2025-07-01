<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="max-w-4xl mx-auto">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Vue 开发资源</h1>
        <p class="text-lg text-gray-600">
          为 Vue 开发者提供完整的设计资源、工具和社区支持，助力快速开发
        </p>
      </div>

      <!-- 设计资源 -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Vue 设计系统</h3>
          </div>
          <p class="text-gray-600 mb-4">
            专为 Vue 3 优化的设计文件，包含所有组件、Composition API 示例和响应式设计
          </p>
          <ul class="text-sm text-gray-500 space-y-1 mb-4">
            <li>• 60+ Vue 3 组件</li>
            <li>• Composition API 设计模式</li>
            <li>• 响应式布局模板</li>
            <li>• 单文件组件结构</li>
          </ul>
          <button class="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
            下载 Vue 设计文件
          </button>
        </div>

        <div class="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Vue DevTools</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Vue 3 专用的开发者工具和调试扩展
          </p>
          <ul class="text-sm text-gray-500 space-y-1 mb-4">
            <li>• 组件树可视化</li>
            <li>• Composition API 调试</li>
            <li>• 状态管理跟踪</li>
            <li>• 性能分析工具</li>
          </ul>
          <button class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            安装 Vue DevTools
          </button>
        </div>
      </div>

      <!-- Vue 生态工具 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Vue 生态工具</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-50 rounded-lg p-6">
            <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Vite 集成</h3>
            <p class="text-sm text-gray-600 mb-3">
              超快的开发构建工具，专为 Vue 3 优化的项目模板
            </p>
            <button class="text-green-600 text-sm hover:underline cursor-pointer bg-transparent border-none p-0">
              查看模板 →
            </button>
          </div>

          <div class="bg-gray-50 rounded-lg p-6">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Vue Router</h3>
            <p class="text-sm text-gray-600 mb-3">
              官方路由管理器，支持组件懒加载和嵌套路由
            </p>
            <button class="text-blue-600 text-sm hover:underline cursor-pointer bg-transparent border-none p-0">
              配置指南 →
            </button>
          </div>

          <div class="bg-gray-50 rounded-lg p-6">
            <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Pinia</h3>
            <p class="text-sm text-gray-600 mb-3">
              Vue 3 的官方状态管理库，类型安全的存储方案
            </p>
            <button class="text-purple-600 text-sm hover:underline cursor-pointer bg-transparent border-none p-0">
              了解更多 →
            </button>
          </div>
        </div>
      </div>

      <!-- Composition API 资源 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Composition API 资源</h2>
        <div class="bg-white rounded-xl p-8 border border-gray-200">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">VueUse</h3>
              <p class="text-gray-600">
                200+ 实用的 Composition API 工具集合
              </p>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold text-green-600">200+</div>
              <div class="text-sm text-gray-500">组合式函数</div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div class="p-3 bg-gray-50 rounded-lg text-center">
              <div class="text-sm font-medium text-gray-900">useStorage</div>
              <div class="text-xs text-gray-500">本地存储</div>
            </div>
            <div class="p-3 bg-gray-50 rounded-lg text-center">
              <div class="text-sm font-medium text-gray-900">useFetch</div>
              <div class="text-xs text-gray-500">数据获取</div>
            </div>
            <div class="p-3 bg-gray-50 rounded-lg text-center">
              <div class="text-sm font-medium text-gray-900">useIntersection</div>
              <div class="text-xs text-gray-500">元素可见性</div>
            </div>
            <div class="p-3 bg-gray-50 rounded-lg text-center">
              <div class="text-sm font-medium text-gray-900">useClipboard</div>
              <div class="text-xs text-gray-500">剪贴板</div>
            </div>
          </div>
          
          <div class="flex flex-wrap gap-4">
            <button class="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
              安装 VueUse
            </button>
            <button class="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors">
              查看文档
            </button>
          </div>
        </div>
      </div>

      <!-- Vue 社区 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Vue 社区</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">Vue</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900">Vue.js 官方</h3>
            </div>
            <p class="text-gray-600 mb-4">
              Vue.js 官方资源和最新动态
            </p>
            <div class="space-y-2 text-sm text-gray-500">
              <div>📘 官方文档</div>
              <div>🎥 Vue Mastery 课程</div>
              <div>📚 Vue School 教程</div>
            </div>
            <a href="https://vuejs.org" class="inline-block mt-4 text-green-600 hover:underline">
              访问官网 →
            </a>
          </div>

          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900">Vue 中文社区</h3>
            </div>
            <p class="text-gray-600 mb-4">
              活跃的中文开发者社区和技术分享
            </p>
            <div class="space-y-2 text-sm text-gray-500">
              <div>💬 技术讨论</div>
              <div>👥 开发者聚会</div>
              <div>🎯 项目实战分享</div>
            </div>
            <button class="inline-block mt-4 text-blue-600 hover:underline cursor-pointer bg-transparent border-none p-0">
              加入社区 →
            </button>
          </div>
        </div>
      </div>

      <!-- Vue 学习路径 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Vue 学习路径</h2>
        <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-6">从入门到精通</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg p-4">
              <div class="flex items-center mb-3">
                <span class="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                <h4 class="font-medium text-gray-900">基础入门</h4>
              </div>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Vue 3 基础概念</li>
                <li>• 模板语法和指令</li>
                <li>• 组件化开发</li>
                <li>• 事件处理和表单</li>
              </ul>
            </div>
            
            <div class="bg-white rounded-lg p-4">
              <div class="flex items-center mb-3">
                <span class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                <h4 class="font-medium text-gray-900">进阶开发</h4>
              </div>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Composition API</li>
                <li>• 自定义指令和插件</li>
                <li>• 路由和状态管理</li>
                <li>• 组件通信模式</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg p-4">
              <div class="flex items-center mb-3">
                <span class="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                <h4 class="font-medium text-gray-900">专家级别</h4>
              </div>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 性能优化技巧</li>
                <li>• 大型应用架构</li>
                <li>• 测试和部署</li>
                <li>• 开源贡献</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 行动号召 -->
      <div class="text-center bg-gray-50 rounded-xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">开始您的 Vue 3 之旅</h2>
        <p class="text-gray-600 mb-6">
          利用这些资源和工具，构建下一代的 Vue 应用
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/guide" 
            class="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            阅读 Vue 指南
          </router-link>
          <router-link 
            to="/components" 
            class="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            浏览 Vue 组件
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue 资源页面逻辑
</script>

<style scoped>
/* Vue 资源页面样式 */
</style> 