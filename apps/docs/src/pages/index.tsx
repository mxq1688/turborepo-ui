import React, { useState } from 'react';
import { Button, Card, CardHeader, CardTitle, CardContent, Input } from '@ui-lib/ui-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const navigationItems = [
    { id: 'overview', label: '概览', icon: '📚' },
    { id: 'components', label: '组件', icon: '🧩' },
    { id: 'design', label: '设计', icon: '🎨' },
    { id: 'resources', label: '资源', icon: '📦' }
  ];

  const componentCategories = [
    {
      title: '基础组件',
      components: [
        { name: 'Button', desc: '按钮', status: '稳定' },
        { name: 'Card', desc: '卡片', status: '稳定' },
        { name: 'Input', desc: '输入框', status: '稳定' }
      ]
    },
    {
      title: '表单组件', 
      components: [
        { name: 'Form', desc: '表单', status: '开发中' },
        { name: 'Select', desc: '选择器', status: '计划中' },
        { name: 'DatePicker', desc: '日期选择', status: '计划中' }
      ]
    },
    {
      title: '数据展示',
      components: [
        { name: 'Table', desc: '表格', status: '计划中' },
        { name: 'Modal', desc: '对话框', status: '计划中' },
        { name: 'Tooltip', desc: '提示', status: '计划中' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-purple-600">UI Design</h1>
              </div>
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`${
                      activeTab === item.id
                        ? 'text-purple-600 border-purple-600'
                        : 'text-gray-500 border-transparent hover:text-gray-700'
                    } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors`}
                  >
                    {item.icon} {item.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="搜索组件..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <span className="hidden sm:inline">GitHub</span>
                <span className="sm:hidden">📁</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* 侧边栏导航 */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-24 space-y-1">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-3">快速导航</h3>
                <ul className="space-y-2">
                  <li><a href="#getting-started" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">快速开始</a></li>
                  <li><a href="#installation" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">安装使用</a></li>
                  <li><a href="#components" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">组件总览</a></li>
                  <li><a href="#design-tokens" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">设计规范</a></li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* 主内容区域 */}
          <main className="lg:col-span-9">
            {/* 英雄区域 */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                多框架 UI 组件库
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                一套设计语言，两种框架实现。为 React 和 Vue 项目提供一致、优雅的用户界面解决方案。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  🚀 快速开始
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  📖 查看组件
                </Button>
              </div>
            </div>

            {/* 特性介绍 */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">⚛️</div>
                  <h3 className="text-lg font-semibold mb-2">React 支持</h3>
                  <p className="text-gray-600">完整的 React + TypeScript 组件库，遵循 React 最佳实践</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🟢</div>
                  <h3 className="text-lg font-semibold mb-2">Vue 支持</h3>
                  <p className="text-gray-600">原生 Vue 3 + Composition API 实现，享受 Vue 开发体验</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-lg font-semibold mb-2">统一设计</h3>
                  <p className="text-gray-600">共享设计系统，确保跨框架的视觉一致性</p>
                </CardContent>
              </Card>
            </div>

            {/* 快速开始 */}
            <Card id="getting-started" className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">🚀 快速开始</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">React 项目</h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div># 安装</div>
                      <div>npm install @ui-lib/ui-react</div>
                      <div className="mt-2"># 使用</div>
                      <div>import &#123; Button &#125; from '@ui-lib/ui-react'</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Vue 项目</h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div># 安装</div>
                      <div>npm install @ui-lib/ui-vue</div>
                      <div className="mt-2"># 使用</div>
                      <div>import &#123; Button &#125; from '@ui-lib/ui-vue'</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 组件总览 */}
            <Card id="components" className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">🧩 组件总览</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {componentCategories.map((category) => (
                    <div key={category.title}>
                      <h3 className="text-lg font-semibold mb-4 text-gray-900">{category.title}</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {category.components.map((component) => (
                          <div
                            key={component.name}
                            className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900">{component.name}</h4>
                                <p className="text-sm text-gray-600">{component.desc}</p>
                              </div>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                component.status === '稳定' 
                                  ? 'bg-green-100 text-green-800'
                                  : component.status === '开发中'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {component.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 设计规范 */}
            <Card id="design-tokens" className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">🎨 设计规范</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">颜色系统</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-600 rounded"></div>
                        <div>
                          <div className="font-medium">Primary</div>
                          <div className="text-sm text-gray-600">#7c3aed</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-500 rounded"></div>
                        <div>
                          <div className="font-medium">Secondary</div>
                          <div className="text-sm text-gray-600">#6b7280</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded"></div>
                        <div>
                          <div className="font-medium">Success</div>
                          <div className="text-sm text-gray-600">#10b981</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">字体系统</h4>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold">标题 1 - 24px</div>
                      <div className="text-xl font-semibold">标题 2 - 20px</div>
                      <div className="text-lg font-medium">标题 3 - 18px</div>
                      <div className="text-base">正文 - 16px</div>
                      <div className="text-sm text-gray-600">辅助文字 - 14px</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 实时示例 */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">🔥 实时示例</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
                  <div className="max-w-md mx-auto space-y-4">
                    <h3 className="text-lg font-semibold text-center">组件预览</h3>
                    <div className="flex gap-2 justify-center">
                      <Button variant="primary">主要按钮</Button>
                      <Button variant="outline">次要按钮</Button>
                    </div>
                    <Input placeholder="输入框示例" />
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-600">这是一个卡片组件示例</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">组件库</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">快速开始</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">组件文档</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">设计指南</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">框架支持</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">React 版本</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Vue 版本</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">TypeScript</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">资源</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">更新日志</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">贡献指南</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">联系我们</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">问题反馈</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">功能建议</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">技术支持</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>© 2024 UI Design System. 使用 Turborepo + React + Vue 构建</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 