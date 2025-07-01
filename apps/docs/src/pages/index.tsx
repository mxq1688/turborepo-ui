import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">UI</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Components</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-900 font-medium">
                  首页
                </Link>
                <Link href="/components" className="text-gray-600 hover:text-gray-900 transition-colors">
                  组件
                </Link>
                <Link href="/guide" className="text-gray-600 hover:text-gray-900 transition-colors">
                  指南
                </Link>
                <Link href="/resources" className="text-gray-600 hover:text-gray-900 transition-colors">
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
                  placeholder="搜索组件..." 
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

      <main>
        {/* Hero 区域 */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                企业级 React 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> 组件库</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                基于 React + TypeScript 构建的高质量组件库，遵循设计规范，
                <br />为中后台产品提供开箱即用的高质量组件。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link 
                  href="/components" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  开始使用
                </Link>
                <Link 
                  href="/guide" 
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200"
                >
                  设计原则
                </Link>
              </div>
              
              {/* 特性标签 */}
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">TypeScript</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Tree Shaking</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">主题定制</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">国际化</span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">无障碍访问</span>
              </div>
            </div>
          </div>
          
          {/* 背景装饰 */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
              <defs>
                <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
          </div>
        </section>

        {/* 设计原则 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">设计原则</h2>
              <p className="text-lg text-gray-600">我们的组件库遵循以下设计原则，确保用户体验的一致性和高效性</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">简洁明了</h3>
                <p className="text-gray-600 text-sm">界面设计简洁明了，避免不必要的视觉噪音，让用户专注于核心功能。</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">一致性</h3>
                <p className="text-gray-600 text-sm">保持设计和交互的一致性，降低用户的学习成本，提升使用效率。</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">人性化</h3>
                <p className="text-gray-600 text-sm">以用户为中心，考虑用户的使用习惯和心理模型，提供自然友好的交互体验。</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">高效性</h3>
                <p className="text-gray-600 text-sm">组件设计注重性能优化和开发效率，帮助开发者快速构建高质量的产品。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 核心特性 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">核心特性</h2>
              <p className="text-lg text-gray-600">为开发者提供全面的解决方案</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">TypeScript 支持</h3>
                </div>
                <p className="text-gray-600 mb-4">使用 TypeScript 编写，提供完整的类型定义，享受更好的开发体验和类型安全。</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 完整的 TypeScript 类型定义</li>
                  <li>• IDE 智能提示和自动补全</li>
                  <li>• 编译时类型检查</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">响应式设计</h3>
                </div>
                <p className="text-gray-600 mb-4">基于现代 CSS 技术，组件天然支持响应式布局，完美适配各种屏幕尺寸。</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 移动端优先的设计理念</li>
                  <li>• 流式布局和弹性组件</li>
                  <li>• 多断点响应式适配</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">主题定制</h3>
                </div>
                <p className="text-gray-600 mb-4">灵活的主题系统，支持深度定制，轻松打造符合品牌特色的视觉风格。</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• CSS 变量驱动的主题系统</li>
                  <li>• 深色模式支持</li>
                  <li>• 品牌色彩快速定制</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">高性能</h3>
                </div>
                <p className="text-gray-600 mb-4">精心优化的组件性能，支持按需加载，确保应用的快速响应和流畅体验。</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Tree Shaking 按需引入</li>
                  <li>• 虚拟滚动等性能优化</li>
                  <li>• 最小化运行时开销</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9 9m9-9v18" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">国际化</h3>
                </div>
                <p className="text-gray-600 mb-4">内建国际化支持，轻松构建多语言应用，覆盖全球用户需求。</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 多语言文案支持</li>
                  <li>• 日期时间本地化</li>
                  <li>• 数字格式化</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">无障碍访问</h3>
                </div>
                <p className="text-gray-600 mb-4">遵循 WAI-ARIA 标准，确保所有用户都能轻松使用，提供包容性的用户体验。</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 键盘导航支持</li>
                  <li>• 屏幕阅读器兼容</li>
                  <li>• 语义化 HTML 结构</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 组件概览 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">丰富的组件生态</h2>
              <p className="text-lg text-gray-600">60+ 高质量组件，覆盖企业级产品的各种使用场景</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">60+</div>
                <div className="text-gray-600">组件</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">TypeScript</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
                <div className="text-gray-600">测试覆盖率</div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { category: '基础组件', count: 12, icon: '🔧', items: ['Button', 'Icon', 'Typography', 'Layout'] },
                { category: '表单组件', count: 15, icon: '📝', items: ['Input', 'Select', 'DatePicker', 'Form'] },
                { category: '数据展示', count: 18, icon: '📊', items: ['Table', 'Tree', 'Calendar', 'Card'] },
                { category: '反馈组件', count: 10, icon: '💬', items: ['Message', 'Modal', 'Drawer', 'Popover'] },
              ].map((group, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <div className="text-2xl mb-3">{group.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{group.category}</h3>
                  <div className="text-sm text-gray-500 mb-3">{group.count} 个组件</div>
                  <div className="space-y-1">
                    {group.items.map((item, i) => (
                      <div key={i} className="text-xs text-gray-600">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/components" 
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                查看所有组件
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 快速开始 */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">快速开始</h2>
              <p className="text-xl text-gray-300 mb-12">只需几分钟，即可在你的项目中使用我们的组件库</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 text-left">安装</h3>
                  <div className="bg-black rounded-lg p-4 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">TERMINAL</span>
                      <button className="text-xs text-gray-400 hover:text-white">复制</button>
                    </div>
                    <code className="text-green-400">npm install @ui-lib/ui-react</code>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 text-left">使用</h3>
                  <div className="bg-black rounded-lg p-4 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">JAVASCRIPT</span>
                      <button className="text-xs text-gray-400 hover:text-white">复制</button>
                    </div>
                    <pre className="text-sm">
{`import { Button } from '@ui-lib/ui-react';

function App() {
  return <Button>Hello World</Button>;
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">UI</span>
                </div>
                <span className="font-semibold text-gray-900">Components</span>
              </div>
              <p className="text-gray-600 text-sm">企业级 React 组件库，为中后台产品提供开箱即用的高质量组件。</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">文档</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/guide">快速开始</Link></li>
                <li><Link href="/components">组件</Link></li>
                <li><Link href="/guide/theme">主题定制</Link></li>
                <li><Link href="/guide/changelog">更新日志</Link></li>
              </ul>
            </div>
                         <div>
               <h3 className="font-semibold text-gray-900 mb-4">资源</h3>
               <ul className="space-y-2 text-sm text-gray-600">
                 <li><span className="cursor-pointer hover:text-gray-900">Figma 设计稿</span></li>
                 <li><span className="cursor-pointer hover:text-gray-900">Sketch 模板</span></li>
                 <li><span className="cursor-pointer hover:text-gray-900">图标库</span></li>
                 <li><span className="cursor-pointer hover:text-gray-900">社区</span></li>
               </ul>
             </div>
             <div>
               <h3 className="font-semibold text-gray-900 mb-4">帮助</h3>
               <ul className="space-y-2 text-sm text-gray-600">
                 <li><span className="cursor-pointer hover:text-gray-900">FAQ</span></li>
                 <li><span className="cursor-pointer hover:text-gray-900">问题反馈</span></li>
                 <li><span className="cursor-pointer hover:text-gray-900">贡献指南</span></li>
                 <li><span className="cursor-pointer hover:text-gray-900">联系我们</span></li>
               </ul>
             </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2024 UI Components Library. Made with ❤️ by Our Team.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 