<template>
  <div class="min-h-screen bg-white">
    <main>
      <!-- Hero 区域 -->
      <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div class="text-center">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              企业级 Vue 
              <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> 组件库</span>
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              基于 Vue 3 + TypeScript 构建的高质量组件库，遵循设计规范，
              <br />为中后台产品提供开箱即用的高质量组件。
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <router-link 
                to="/components" 
                class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                开始使用
              </router-link>
              <a 
                href="#quick-start" 
                class="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200"
              >
                设计原则
              </a>
            </div>
            
            <!-- 特性标签 -->
            <div class="flex flex-wrap justify-center gap-3 text-sm">
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Vue 3</span>
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full">Composition API</span>
              <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">主题定制</span>
              <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">国际化</span>
              <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">无障碍访问</span>
            </div>
          </div>
        </div>
        
        <!-- 背景装饰 -->
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
            <defs>
              <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
      </section>

      <!-- 设计原则 -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">设计原则</h2>
            <p class="text-lg text-gray-600">我们的 Vue 组件库遵循以下设计原则，确保用户体验的一致性和高效性</p>
          </div>
          <div class="grid md:grid-cols-4 gap-8">
            <div 
              v-for="principle in designPrinciples" 
              :key="principle.title"
              class="text-center"
            >
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" :class="principle.iconBg">
                <svg class="w-8 h-8" :class="principle.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="principle.iconPath" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ principle.title }}</h3>
              <p class="text-gray-600 text-sm">{{ principle.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 核心特性 -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">核心特性</h2>
            <p class="text-lg text-gray-600">为 Vue 开发者提供全面的解决方案</p>
          </div>
          <div class="grid lg:grid-cols-3 gap-8">
            <div 
              v-for="feature in coreFeatures" 
              :key="feature.title"
              class="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4" :class="feature.iconBg">
                  <svg class="w-6 h-6" :class="feature.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.iconPath" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">{{ feature.title }}</h3>
              </div>
              <p class="text-gray-600 mb-4">{{ feature.description }}</p>
              <ul class="text-sm text-gray-500 space-y-1">
                <li v-for="item in feature.items" :key="item">• {{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 组件概览 -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">丰富的组件生态</h2>
            <p class="text-lg text-gray-600">60+ 高质量 Vue 组件，覆盖企业级产品的各种使用场景</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">60+</div>
              <div class="text-gray-600">组件</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div class="text-gray-600">TypeScript</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-purple-600 mb-2">99%</div>
              <div class="text-gray-600">测试覆盖率</div>
            </div>
          </div>

          <div class="grid md:grid-cols-4 gap-6">
            <div 
              v-for="(group, index) in componentGroups" 
              :key="index"
              class="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
            >
              <div class="text-2xl mb-3">{{ group.icon }}</div>
              <h3 class="font-semibold text-gray-900 mb-2">{{ group.category }}</h3>
              <div class="text-sm text-gray-500 mb-3">{{ group.count }} 个组件</div>
              <div class="space-y-1">
                <div v-for="item in group.items" :key="item" class="text-xs text-gray-600">{{ item }}</div>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <router-link 
              to="/components" 
              class="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              查看所有组件
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </section>

      <!-- 快速开始 -->
      <section id="quick-start" class="py-20 bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4">快速开始</h2>
            <p class="text-xl text-gray-300 mb-12">只需几分钟，即可在你的 Vue 项目中使用我们的组件库</p>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-gray-800 rounded-xl p-6">
                <h3 class="text-lg font-semibold mb-4 text-left">安装</h3>
                <div class="bg-black rounded-lg p-4 text-left">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs text-gray-400">TERMINAL</span>
                    <button class="text-xs text-gray-400 hover:text-white">复制</button>
                  </div>
                  <code class="text-green-400">npm install @ui-lib/ui-vue</code>
                </div>
              </div>
              
              <div class="bg-gray-800 rounded-xl p-6">
                <h3 class="text-lg font-semibold mb-4 text-left">使用</h3>
                <div class="bg-black rounded-lg p-4 text-left">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs text-gray-400">VUE</span>
                    <button class="text-xs text-gray-400 hover:text-white">复制</button>
                  </div>
                  <pre class="text-sm text-gray-100">{{ vueCodeExample }}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// 设计原则数据
const designPrinciples = reactive([
  {
    title: '简洁明了',
    description: '界面设计简洁明了，避免不必要的视觉噪音，让用户专注于核心功能。',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: '一致性',
    description: '保持设计和交互的一致性，降低用户的学习成本，提升使用效率。',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: '人性化',
    description: '以用户为中心，考虑用户的使用习惯和心理模型，提供自然友好的交互体验。',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    title: '高效性',
    description: '组件设计注重性能优化和开发效率，帮助开发者快速构建高质量的产品。',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  }
])

// 核心特性数据
const coreFeatures = reactive([
  {
    title: 'Vue 3 + Composition API',
    description: '基于最新的 Vue 3 技术栈，使用 Composition API 提供更好的逻辑复用和类型推导。',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    items: [
      '完整的 TypeScript 类型定义',
      'Composition API 最佳实践',
      '响应式数据驱动'
    ]
  },
  {
    title: '响应式设计',
    description: '基于现代 CSS 技术，组件天然支持响应式布局，完美适配各种屏幕尺寸。',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z',
    items: [
      '移动端优先的设计理念',
      '流式布局和弹性组件',
      '多断点响应式适配'
    ]
  },
  {
    title: '主题定制',
    description: '灵活的主题系统，支持深度定制，轻松打造符合品牌特色的视觉风格。',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z',
    items: [
      'CSS 变量驱动的主题系统',
      '深色模式支持',
      '品牌色彩快速定制'
    ]
  }
])

// 组件分组数据
const componentGroups = reactive([
  { category: '基础组件', count: 12, icon: '🔧', items: ['Button', 'Icon', 'Typography', 'Layout'] },
  { category: '表单组件', count: 15, icon: '📝', items: ['Input', 'Select', 'DatePicker', 'Form'] },
  { category: '数据展示', count: 18, icon: '📊', items: ['Table', 'Tree', 'Calendar', 'Card'] },
  { category: '反馈组件', count: 10, icon: '💬', items: ['Message', 'Modal', 'Drawer', 'Popover'] }
])

// 代码示例
const vueCodeExample = ref(`<template>
  <Button @click="handleClick">Hello Vue!</Button>
</template>

<script setup lang="ts">
import { Button } from '@ui-lib/ui-vue'

const handleClick = () => {
  console.log('Vue Button clicked!')
}
<\/script>`)
</script>

<style scoped>
/* 组件特定样式 */
</style> 