import React, { useState } from 'react'
import { Button } from '@ui-lib/ui-react'

export default function ButtonDocs() {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="space-y-8">
      {/* 标题和描述 */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Button 按钮</h1>
        <p className="text-lg text-gray-600 mb-6">
          按钮用于开始一个即时操作。
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800">
            <strong>何时使用：</strong>
            需要响应用户点击行为，触发相应的业务逻辑时使用。
          </p>
        </div>
      </div>

      {/* 基础用法 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">基础用法</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button>默认按钮</Button>
            <Button variant="primary">主要按钮</Button>
            <Button variant="secondary">次要按钮</Button>
            <Button variant="outline">边框按钮</Button>
            <Button variant="ghost">幽灵按钮</Button>
          </div>
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`<Button>默认按钮</Button>
<Button variant="primary">主要按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="outline">边框按钮</Button>
<Button variant="ghost">幽灵按钮</Button>`}
            </pre>
          </details>
        </div>
      </section>

      {/* 不同尺寸 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">不同尺寸</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <Button size="sm" variant="primary">小型按钮</Button>
            <Button size="md" variant="primary">中型按钮</Button>
            <Button size="lg" variant="primary">大型按钮</Button>
          </div>
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`<Button size="sm" variant="primary">小型按钮</Button>
<Button size="md" variant="primary">中型按钮</Button>
<Button size="lg" variant="primary">大型按钮</Button>`}
            </pre>
          </details>
        </div>
      </section>

      {/* 禁用状态 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">禁用状态</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button disabled>默认按钮</Button>
            <Button variant="primary" disabled>主要按钮</Button>
            <Button variant="secondary" disabled>次要按钮</Button>
            <Button variant="outline" disabled>边框按钮</Button>
          </div>
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`<Button disabled>默认按钮</Button>
<Button variant="primary" disabled>主要按钮</Button>
<Button variant="secondary" disabled>次要按钮</Button>
<Button variant="outline" disabled>边框按钮</Button>`}
            </pre>
          </details>
        </div>
      </section>

      {/* 加载状态 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">加载状态</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button 
              variant="primary" 
              onClick={handleLoadingClick}
              disabled={loading}
            >
              {loading ? '加载中...' : '点击加载'}
            </Button>
            <Button variant="outline" disabled={loading}>
              {loading ? '处理中...' : '提交表单'}
            </Button>
          </div>
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`const [loading, setLoading] = useState(false)

const handleLoadingClick = () => {
  setLoading(true)
  setTimeout(() => setLoading(false), 2000)
}

<Button 
  variant="primary" 
  onClick={handleLoadingClick}
  disabled={loading}
>
  {loading ? '加载中...' : '点击加载'}
</Button>`}
            </pre>
          </details>
        </div>
      </section>

      {/* 事件处理 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">事件处理</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button 
              variant="primary" 
              onClick={() => setCount(count + 1)}
            >
              点击计数: {count}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setCount(0)}
            >
              重置
            </Button>
          </div>
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`const [count, setCount] = useState(0)

<Button 
  variant="primary" 
  onClick={() => setCount(count + 1)}
>
  点击计数: {count}
</Button>
<Button 
  variant="outline" 
  onClick={() => setCount(0)}
>
  重置
</Button>`}
            </pre>
          </details>
        </div>
      </section>

      {/* API */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">API</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  属性
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  说明
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  类型
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  默认值
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { prop: 'variant', desc: '按钮类型', type: "'default' | 'primary' | 'secondary' | 'outline' | 'ghost'", default: "'default'" },
                { prop: 'size', desc: '按钮大小', type: "'sm' | 'md' | 'lg'", default: "'md'" },
                { prop: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
                { prop: 'className', desc: '自定义样式类', type: 'string', default: '-' },
                { prop: 'onClick', desc: '点击回调', type: '(event: MouseEvent) => void', default: '-' },
                { prop: 'children', desc: '按钮内容', type: 'ReactNode', default: '-' }
              ].map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">
                    {item.prop}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.desc}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">
                    {item.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {item.default}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
} 