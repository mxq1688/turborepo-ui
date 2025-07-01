import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Button, Avatar, Badge } from '@ui-lib/ui-react'

export default function CardDocs() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="space-y-8">
      {/* 标题和描述 */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Card 卡片</h1>
        <p className="text-lg text-gray-600 mb-6">
          通用卡片容器，提供统一的外观样式和内容区域。
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800">
            <strong>何时使用：</strong>
            需要展示内容的容器时使用，比如商品信息、用户资料、文章摘要等。
          </p>
        </div>
      </div>

      {/* 基础用法 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">基础用法</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent>
                <p className="text-gray-600">
                  这是一个简单的卡片内容。可以包含任何类型的内容，比如文本、图片、按钮等。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>带标题的卡片</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  这是一个包含标题的卡片，适合用于展示结构化的内容。
                </p>
              </CardContent>
            </Card>
          </div>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`<Card>
  <CardContent>
    <p>这是一个简单的卡片内容。</p>
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>带标题的卡片</CardTitle>
  </CardHeader>
  <CardContent>
    <p>这是一个包含标题的卡片。</p>
  </CardContent>
</Card>`}
            </pre>
          </details>
        </div>
      </section>

      {/* 完整结构 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">完整结构</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="max-w-md mx-auto mb-6">
            <Card>
              <CardHeader>
                <CardTitle>用户资料卡</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar size="lg">张三</Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">张三</h3>
                    <p className="text-sm text-gray-500">前端开发工程师</p>
                  </div>
                  <Badge variant="success">在线</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  专注于现代前端技术栈，热爱开源，喜欢分享技术经验。
                </p>
                <div className="flex gap-2">
                  <Button variant="primary" size="sm">关注</Button>
                  <Button variant="outline" size="sm">私信</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`<Card>
  <CardHeader>
    <CardTitle>用户资料卡</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="flex items-center space-x-4 mb-4">
      <Avatar size="lg">张三</Avatar>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">张三</h3>
        <p className="text-sm text-gray-500">前端开发工程师</p>
      </div>
      <Badge variant="success">在线</Badge>
    </div>
    <p className="text-gray-600 mb-4">
      专注于现代前端技术栈，热爱开源，喜欢分享技术经验。
    </p>
    <div className="flex gap-2">
      <Button variant="primary" size="sm">关注</Button>
      <Button variant="outline" size="sm">私信</Button>
    </div>
  </CardContent>
</Card>`}
            </pre>
          </details>
        </div>
      </section>

      {/* 交互式卡片 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">交互式卡片</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="max-w-md mx-auto mb-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">点赞支持</h3>
                  <p className="text-gray-600 mb-4">
                    如果觉得这个组件不错，请给我们点个赞吧！
                  </p>
                  <div className="flex justify-center items-center gap-4">
                    <Button 
                      variant={likes > 0 ? "primary" : "outline"}
                      onClick={() => setLikes(likes + 1)}
                    >
                      👍 {likes > 0 ? `${likes} 个赞` : '点赞'}
                    </Button>
                    {likes > 0 && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setLikes(0)}
                      >
                        重置
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`const [likes, setLikes] = useState(0)

<Card className="hover:shadow-lg transition-shadow cursor-pointer">
  <CardContent>
    <div className="text-center">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl">❤️</span>
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">点赞支持</h3>
      <p className="text-gray-600 mb-4">
        如果觉得这个组件不错，请给我们点个赞吧！
      </p>
      <Button 
        variant={likes > 0 ? "primary" : "outline"}
        onClick={() => setLikes(likes + 1)}
      >
        👍 {likes > 0 ? \`\${likes} 个赞\` : '点赞'}
      </Button>
    </div>
  </CardContent>
</Card>`}
            </pre>
          </details>
        </div>
      </section>

      {/* 卡片网格 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">卡片网格</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { title: '设计', desc: '用户体验设计、界面设计', icon: '🎨' },
              { title: '开发', desc: '前端开发、后端开发', icon: '💻' },
              { title: '测试', desc: '功能测试、性能测试', icon: '🧪' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {[
    { title: '设计', desc: '用户体验设计、界面设计', icon: '🎨' },
    { title: '开发', desc: '前端开发、后端开发', icon: '💻' },
    { title: '测试', desc: '功能测试、性能测试', icon: '🧪' }
  ].map((item, index) => (
    <Card key={index} className="text-center hover:shadow-md transition-shadow">
      <CardContent>
        <div className="text-3xl mb-3">{item.icon}</div>
        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </CardContent>
    </Card>
  ))}
</div>`}
            </pre>
          </details>
        </div>
      </section>

      {/* API */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">API</h2>
        
        {/* Card API */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Card</h3>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">属性</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { prop: 'className', desc: '自定义样式类', type: 'string', default: '-' },
                  { prop: 'children', desc: '卡片内容', type: 'ReactNode', default: '-' }
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">{item.prop}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.desc}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">{item.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.default}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CardHeader API */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">CardHeader</h3>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">属性</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { prop: 'className', desc: '自定义样式类', type: 'string', default: '-' },
                  { prop: 'children', desc: '头部内容', type: 'ReactNode', default: '-' }
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">{item.prop}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.desc}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">{item.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.default}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CardTitle API */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">CardTitle</h3>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">属性</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { prop: 'className', desc: '自定义样式类', type: 'string', default: '-' },
                  { prop: 'children', desc: '标题内容', type: 'ReactNode', default: '-' }
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">{item.prop}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.desc}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">{item.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.default}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CardContent API */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">CardContent</h3>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">属性</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { prop: 'className', desc: '自定义样式类', type: 'string', default: '-' },
                  { prop: 'children', desc: '内容区域', type: 'ReactNode', default: '-' }
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">{item.prop}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.desc}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">{item.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.default}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
} 