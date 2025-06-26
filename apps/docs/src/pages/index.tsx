import React, { useState, useRef } from 'react';
import { Button, Card, CardHeader, CardTitle, CardContent, Input, debug } from '@ui-lib/ui-react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length < 3 && e.target.value.length > 0) {
      setError('至少输入3个字符');
    } else {
      setError('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UI 组件库演示
          </h1>
          <p className="text-lg text-gray-600">
            使用 Turborepo 构建的现代 React UI 组件库
          </p>
        </div>

        {/* 调试区域 */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-700">🐛 调试区域</CardTitle>
          </CardHeader>
                     <CardContent>
             <div className="space-y-4">
               <Button 
                 ref={buttonRef}
                 variant="primary" 
                 onClick={() => {
                   debug.logEvent('Button', 'click', { variant: 'primary' });
                   debug.inspectElement(buttonRef.current);
                   alert('调试点击!');
                 }}
               >
                 测试按钮点击
               </Button>
               <Input 
                 label="调试输入框" 
                 placeholder="输入调试内容..."
                 onChange={(e) => {
                   debug.logEvent('Input', 'change', { value: e.target.value });
                   console.log('输入值:', e.target.value);
                 }}
               />
             </div>
           </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          {/* 按钮示例 */}
          <Card>
            <CardHeader>
              <CardTitle>按钮组件</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">不同样式</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="primary">主要按钮</Button>
                    <Button variant="secondary">次要按钮</Button>
                    <Button variant="outline">边框按钮</Button>
                    <Button variant="ghost">幽灵按钮</Button>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">不同尺寸</h4>
                  <div className="flex flex-wrap gap-2 items-center">
                    <Button size="sm">小按钮</Button>
                    <Button size="md">中按钮</Button>
                    <Button size="lg">大按钮</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 输入框示例 */}
          <Card>
            <CardHeader>
              <CardTitle>输入框组件</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  label="用户名"
                  placeholder="请输入用户名"
                  value={inputValue}
                  onChange={handleInputChange}
                  error={error}
                />
                <Input
                  label="邮箱"
                  type="email"
                  placeholder="请输入邮箱地址"
                />
                <Input
                  label="密码"
                  type="password"
                  placeholder="请输入密码"
                />
                <Input
                  placeholder="禁用状态"
                  disabled
                />
              </div>
            </CardContent>
          </Card>

          {/* 卡片示例 */}
          <Card>
            <CardHeader>
              <CardTitle>产品卡片</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-gray-600">
                  这是一个使用 Card 组件构建的产品展示卡片。
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">¥299</span>
                  <Button size="sm">立即购买</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 表单示例 */}
          <Card>
            <CardHeader>
              <CardTitle>联系表单</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  label="姓名"
                  placeholder="请输入您的姓名"
                />
                <Input
                  label="邮箱"
                  type="email"
                  placeholder="请输入邮箱地址"
                />
                <Input
                  label="消息"
                  placeholder="请输入您的消息"
                />
                <Button className="w-full">发送消息</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 代码示例 */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>使用示例</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { Button, Card, Input } from '@ui-lib/ui';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>我的卡片</CardTitle>
      </CardHeader>
      <CardContent>
        <Input label="用户名" placeholder="请输入用户名" />
        <Button variant="primary">提交</Button>
      </CardContent>
    </Card>
  );
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 