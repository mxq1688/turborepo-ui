<template>
  <div class="min-h-screen bg-white">
    <!-- 顶部导航 -->
    <header class="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-8">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">Vue</span>
              </div>
              <span class="text-xl font-semibold text-gray-900">Components</span>
            </div>
            <nav class="hidden md:flex space-x-8">
              <router-link 
                to="/" 
                class="font-medium transition-colors"
                :class="$route.path === '/' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'"
              >
                首页
              </router-link>
              <router-link 
                to="/components" 
                class="font-medium transition-colors"
                :class="$route.path === '/components' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'"
              >
                组件
              </router-link>
              <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">
                指南
              </a>
              <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">
                资源
              </a>
            </nav>
          </div>
          <div class="flex items-center space-x-4">
            <div class="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="搜索组件..." 
                class="bg-transparent border-none outline-none text-sm"
                v-model="searchQuery"
              />
            </div>
            <a 
              href="https://github.com" 
              class="text-gray-600 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- 路由视图 -->
    <router-view />

    <!-- 页脚 -->
    <footer class="bg-white border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span class="text-white font-bold text-xs">Vue</span>
              </div>
              <span class="font-semibold text-gray-900">Components</span>
            </div>
            <p class="text-gray-600 text-sm">企业级 Vue 组件库，为中后台产品提供开箱即用的高质量组件。</p>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">文档</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li><router-link to="/">快速开始</router-link></li>
              <li><router-link to="/components">组件</router-link></li>
              <li><a href="#">主题定制</a></li>
              <li><a href="#">更新日志</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">资源</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li><span class="cursor-pointer hover:text-gray-900">Figma 设计稿</span></li>
              <li><span class="cursor-pointer hover:text-gray-900">Sketch 模板</span></li>
              <li><span class="cursor-pointer hover:text-gray-900">图标库</span></li>
              <li><span class="cursor-pointer hover:text-gray-900">社区</span></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">帮助</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li><span class="cursor-pointer hover:text-gray-900">FAQ</span></li>
              <li><span class="cursor-pointer hover:text-gray-900">问题反馈</span></li>
              <li><span class="cursor-pointer hover:text-gray-900">贡献指南</span></li>
              <li><span class="cursor-pointer hover:text-gray-900">联系我们</span></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2024 Vue UI Components Library. Made with ❤️ by Our Team.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
</script>

<style>
/* 全局样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style> 