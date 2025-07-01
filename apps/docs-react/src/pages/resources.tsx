import React from 'react';
import Link from 'next/link';

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">React</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Components</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  首页
                </Link>
                <Link href="/components" className="text-gray-600 hover:text-gray-900 transition-colors">
                  组件
                </Link>
                <Link href="/guide" className="text-gray-600 hover:text-gray-900 transition-colors">
                  指南
                </Link>
                <Link href="/resources" className="text-gray-900 font-medium">
                  资源
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="搜索..." 
                  className="bg-transparent border-none outline-none text-sm"
                />
              </div>
              <a 
                href="https://github.com" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">开发资源</h1>
            <p className="text-lg text-gray-600">
              为您提供完整的设计资源、工具和社区支持，助力快速开发
            </p>
          </div>

          {/* 设计资源 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Figma 设计系统</h3>
              </div>
              <p className="text-gray-600 mb-4">
                完整的 Figma 设计文件，包含所有组件、颜色、字体和布局规范
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• 60+ 高保真组件</li>
                <li>• 完整的设计令牌</li>
                <li>• 响应式布局模板</li>
                <li>• 深色模式变体</li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                下载 Figma 文件
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sketch 模板</h3>
              </div>
              <p className="text-gray-600 mb-4">
                为 Sketch 用户提供的完整设计模板和符号库
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• 符号库和样式指南</li>
                <li>• 网格系统模板</li>
                <li>• 原型链接示例</li>
                <li>• 导出设置预设</li>
              </ul>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                下载 Sketch 文件
              </button>
            </div>
          </div>

          {/* 开发工具 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">开发工具</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">VS Code 扩展</h3>
                <p className="text-sm text-gray-600 mb-3">
                  提供组件智能提示和代码片段的 VS Code 扩展
                </p>
                <button 
                  type="button"
                  className="text-green-600 text-sm hover:underline cursor-pointer bg-transparent border-none p-0"
                >
                  安装扩展 →
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">CLI 工具</h3>
                <p className="text-sm text-gray-600 mb-3">
                  快速创建项目模板和生成组件代码的命令行工具
                </p>
                <button 
                  type="button"
                  className="text-orange-600 text-sm hover:underline cursor-pointer bg-transparent border-none p-0"
                >
                  了解更多 →
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">项目模板</h3>
                <p className="text-sm text-gray-600 mb-3">
                  预配置的项目模板，包含最佳实践和构建配置
                </p>
                <button 
                  type="button"
                  className="text-blue-600 text-sm hover:underline cursor-pointer bg-transparent border-none p-0"
                >
                  查看模板 →
                </button>
              </div>
            </div>
          </div>

          {/* 图标库 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">图标库</h2>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">UI Icons</h3>
                  <p className="text-gray-600">
                    500+ 精心设计的矢量图标，支持多种格式和尺寸
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-500">图标</div>
                </div>
              </div>
              
              <div className="grid grid-cols-6 md:grid-cols-12 gap-4 mb-6">
                {/* 示例图标 */}
                {[
                  '🏠', '⚙️', '💎', '🔔', '📧', '🔍', 
                  '💾', '📊', '🌟', '🎯', '🔒', '✨'
                ].map((icon, index) => (
                  <div key={index} className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    {icon}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                  下载 SVG 包
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors">
                  React 组件包
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors">
                  Vue 组件包
                </button>
              </div>
            </div>
          </div>

          {/* 社区 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">社区</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">GitHub</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  查看源代码、提交问题、参与贡献
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>⭐ 1.2k Stars</div>
                  <div>🍴 156 Forks</div>
                  <div>🐛 12 Open Issues</div>
                </div>
                <a href="https://github.com" className="inline-block mt-4 text-gray-900 hover:underline">
                  访问仓库 →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">社区讨论</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  加入讨论、分享经验、获取帮助
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>💬 156 讨论</div>
                  <div>👥 2.1k 成员</div>
                  <div>🏆 42 贡献者</div>
                </div>
                                 <button 
                   type="button"
                   className="inline-block mt-4 text-blue-600 hover:underline cursor-pointer bg-transparent border-none p-0"
                 >
                   加入讨论 →
                 </button>
              </div>
            </div>
          </div>

          {/* 学习资源 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">学习资源</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">推荐课程</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">React 组件库最佳实践</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    学习如何构建可复用、可维护的 React 组件库
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">免费课程</span>
                    <button 
                      type="button"
                      className="text-blue-600 text-sm hover:underline cursor-pointer bg-transparent border-none p-0"
                    >
                      开始学习 →
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">设计系统入门指南</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    从设计到开发，构建完整的设计系统
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">免费课程</span>
                    <button 
                      type="button"
                      className="text-blue-600 text-sm hover:underline cursor-pointer bg-transparent border-none p-0"
                    >
                      开始学习 →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">准备开始了吗？</h2>
            <p className="text-gray-600 mb-6">
              利用这些资源，快速构建美观、一致的用户界面
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/guide" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                阅读指南
              </Link>
              <Link 
                href="/components" 
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                浏览组件
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 