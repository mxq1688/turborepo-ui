import React, { useState } from 'react';
import { Button, Card, CardHeader, CardTitle, CardContent, Input } from '@ui-lib/ui-react';

export default function ComponentsPage() {
  const [activeComponent, setActiveComponent] = useState('Button');

  const components = [
    { id: 'Button', name: 'Button 按钮', desc: '触发业务逻辑时使用' },
    { id: 'Card', name: 'Card 卡片', desc: '通用卡片容器' },
    { id: 'Input', name: 'Input 输入框', desc: '通过鼠标或键盘输入内容' }
  ];

  const ButtonExamples = () => (
    <div className="space-y-8">
      {/* 基础用法 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">基础用法</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
          <div className="flex flex-wrap gap-4">
            <Button>默认按钮</Button>
            <Button variant="primary">主要按钮</Button>
            <Button variant="secondary">次要按钮</Button>
            <Button variant="outline">边框按钮</Button>
            <Button variant="ghost">幽灵按钮</Button>
          </div>
        </div>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          {`<Button>默认按钮</Button>
<Button variant="primary">主要按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="outline">边框按钮</Button>
<Button variant="ghost">幽灵按钮</Button>`}
        </div>
      </section>

      {/* 不同尺寸 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">不同尺寸</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">小型按钮</Button>
            <Button size="md">中等按钮</Button>
            <Button size="lg">大型按钮</Button>
          </div>
        </div>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          {`<Button size="sm">小型按钮</Button>
<Button size="md">中等按钮</Button>
<Button size="lg">大型按钮</Button>`}
        </div>
      </section>

      {/* 禁用状态 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">禁用状态</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
          <div className="flex flex-wrap gap-4">
            <Button disabled>禁用按钮</Button>
            <Button variant="primary" disabled>主要按钮</Button>
            <Button variant="outline" disabled>边框按钮</Button>
          </div>
        </div>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          {`<Button disabled>禁用按钮</Button>
<Button variant="primary" disabled>主要按钮</Button>
<Button variant="outline" disabled>边框按钮</Button>`}
        </div>
      </section>

      {/* API 文档 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">API</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">属性</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">variant</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">按钮类型</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">primary | secondary | outline | ghost</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">primary</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">size</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">按钮尺寸</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">sm | md | lg</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">md</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">是否禁用</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onClick</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">点击事件处理函数</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(event: MouseEvent) =&gt; void</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">className</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">自定义样式类名</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );

  const InputExamples = () => (
    <div className="space-y-8">
      {/* 基础用法 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">基础用法</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 space-y-4">
          <Input placeholder="请输入内容" />
          <Input label="用户名" placeholder="请输入用户名" />
          <Input label="邮箱" type="email" placeholder="请输入邮箱" />
        </div>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          {`<Input placeholder="请输入内容" />
<Input label="用户名" placeholder="请输入用户名" />
<Input label="邮箱" type="email" placeholder="请输入邮箱" />`}
        </div>
      </section>

      {/* 表单验证 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">表单验证</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 space-y-4">
          <Input label="必填项" placeholder="这是必填项" error="此字段为必填项" />
          <Input label="正确状态" placeholder="验证通过" />
        </div>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          {`<Input label="必填项" error="此字段为必填项" />
<Input label="正确状态" placeholder="验证通过" />`}
        </div>
      </section>

      {/* API 文档 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">API</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">属性</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">label</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">输入框标签</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">error</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">错误提示信息</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">type</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">输入框类型</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">text | email | password | number</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">text</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">占位符文本</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">是否禁用</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );

  const CardExamples = () => (
    <div className="space-y-8">
      {/* 基础用法 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">基础用法</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <p>这是一个简单的卡片</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>卡片标题</CardTitle>
              </CardHeader>
              <CardContent>
                <p>这是带标题的卡片内容</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          {`<Card>
  <CardContent>
    <p>这是一个简单的卡片</p>
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>卡片标题</CardTitle>
  </CardHeader>
  <CardContent>
    <p>这是带标题的卡片内容</p>
  </CardContent>
</Card>`}
        </div>
      </section>

      {/* API 文档 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">API</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Card</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">属性</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">className</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">自定义样式类名</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">children</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">卡片内容</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ReactNode</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderContent = () => {
    switch (activeComponent) {
      case 'Button':
        return <ButtonExamples />;
      case 'Input':
        return <InputExamples />;
      case 'Card':
        return <CardExamples />;
      default:
        return <ButtonExamples />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-purple-600">UI Design</h1>
              <span className="ml-4 text-gray-500">/</span>
              <span className="ml-4 text-gray-900">组件文档</span>
            </div>
            <Button variant="outline" size="sm">
              返回首页
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* 左侧导航 */}
          <aside className="lg:col-span-3">
            <nav className="sticky top-24 space-y-1">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-3">组件列表</h3>
                <ul className="space-y-1">
                  {components.map((component) => (
                    <li key={component.id}>
                      <button
                        onClick={() => setActiveComponent(component.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          activeComponent === component.id
                            ? 'bg-purple-100 text-purple-700'
                            : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                        }`}
                      >
                        {component.name}
                      </button>
                      {activeComponent === component.id && (
                        <p className="text-xs text-gray-500 mt-1 px-3">{component.desc}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>

          {/* 主内容区 */}
          <main className="lg:col-span-9">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {components.find(c => c.id === activeComponent)?.name}
                </h1>
                <p className="text-gray-600">
                  {components.find(c => c.id === activeComponent)?.desc}
                </p>
              </div>

              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 