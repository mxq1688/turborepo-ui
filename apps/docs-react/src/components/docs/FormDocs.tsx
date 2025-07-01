import React, { useState } from 'react';
import { Form, Input, Button } from '@ui-lib/ui-react';

interface ApiTableProps {
  title: string;
  data: Array<{
    property: string;
    description: string;
    type: string;
    default: string;
  }>;
}

const ApiTable: React.FC<ApiTableProps> = ({ title, data }) => (
  <div className="mt-8">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
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
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.property}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {row.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-mono">
                {row.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                {row.default}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

interface ExampleBlockProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
}

const ExampleBlock: React.FC<ExampleBlockProps> = ({ title, description, children, code }) => (
  <div className="mt-8">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    {description && <p className="text-gray-600 mb-4">{description}</p>}
    <div className="border border-gray-200 rounded-lg">
      <div className="p-6 bg-white border-b border-gray-200">
        {children}
      </div>
      <div className="bg-gray-50">
        <details className="group">
          <summary className="px-4 py-3 cursor-pointer text-sm text-gray-600 hover:text-gray-900 flex items-center justify-between">
            <span>显示代码</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-4">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        </details>
      </div>
    </div>
  </div>
);

const FormDocs: React.FC = () => {
  const [basicForm, setBasicForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const validateForm = () => {
    const errors = { username: '', email: '', password: '' };
    
    if (!basicForm.username) {
      errors.username = '用户名不能为空';
    } else if (basicForm.username.length < 3) {
      errors.username = '用户名至少3个字符';
    }

    if (!basicForm.email) {
      errors.email = '邮箱不能为空';
    } else if (!/\S+@\S+\.\S+/.test(basicForm.email)) {
      errors.email = '邮箱格式不正确';
    }

    if (!basicForm.password) {
      errors.password = '密码不能为空';
    } else if (basicForm.password.length < 6) {
      errors.password = '密码至少6个字符';
    }

    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleFinish = (values: Record<string, any>) => {
    alert('表单提交成功！数据：' + JSON.stringify(values));
  };

  const formApiData = [
    { property: 'layout', description: '表单布局', type: "'horizontal' | 'vertical' | 'inline'", default: "'vertical'" },
    { property: 'onSubmit', description: '表单提交事件', type: '(event: FormEvent) => void', default: '-' },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
    { property: 'children', description: '表单内容', type: 'ReactNode', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Form 表单</h1>
        <p className="text-lg text-gray-600">高性能订阅式表单状态管理库。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 用于创建一个实体或收集信息。</li>
            <li>• 需要对输入的数据类型进行校验时。</li>
            <li>• 表单包含大量输入项需要优化性能时。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基础用法"
          description="基本的表单数据域包装展示，包含布局、初始化、验证、提交等功能。"
          code={`import { Form, Input, Button } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function BasicForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 表单验证和提交逻辑
  };

  return (
    <Form onSubmit={handleSubmit} className="max-w-md">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            用户名 <span className="text-red-500">*</span>
          </label>
          <Input
            value={form.username}
            onChange={(e) => setForm({...form, username: e.target.value})}
            placeholder="请输入用户名"
          />
          {errors.username && (
            <div className="text-red-500 text-sm mt-1">{errors.username}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            邮箱 <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
            placeholder="请输入邮箱"
          />
        </div>

        <Button type="submit" className="w-full">
          提交
        </Button>
      </div>
    </Form>
  );
}`}
        >
          <Form onFinish={handleFinish} className="max-w-md">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  用户名 <span className="text-red-500">*</span>
                </label>
                <Input
                  value={basicForm.username}
                  onChange={(e) => setBasicForm({...basicForm, username: e.target.value})}
                  placeholder="请输入用户名"
                />
                {formErrors.username && (
                  <div className="text-red-500 text-sm mt-1">{formErrors.username}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱 <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  value={basicForm.email}
                  onChange={(e) => setBasicForm({...basicForm, email: e.target.value})}
                  placeholder="请输入邮箱"
                />
                {formErrors.email && (
                  <div className="text-red-500 text-sm mt-1">{formErrors.email}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  密码 <span className="text-red-500">*</span>
                </label>
                <Input
                  type="password"
                  value={basicForm.password}
                  onChange={(e) => setBasicForm({...basicForm, password: e.target.value})}
                  placeholder="请输入密码"
                />
                {formErrors.password && (
                  <div className="text-red-500 text-sm mt-1">{formErrors.password}</div>
                )}
              </div>

              <Button type="submit" className="w-full">
                提交表单
              </Button>
            </div>
          </Form>
        </ExampleBlock>

        <ExampleBlock
          title="表单布局"
          description="Form 组件支持三种布局方式：垂直、水平、行内。"
          code={`import { Form, Input, Button } from '@ui-lib/ui-react';

export default function FormLayout() {
  return (
    <div className="space-y-8">
      {/* 水平布局 */}
      <Form layout="horizontal">
        <div className="grid grid-cols-3 gap-4 items-center">
          <label className="text-right">用户名:</label>
          <Input className="col-span-2" placeholder="水平布局输入框" />
        </div>
        <div className="grid grid-cols-3 gap-4 items-center">
          <label className="text-right">密码:</label>
          <Input type="password" className="col-span-2" placeholder="密码" />
        </div>
      </Form>

      {/* 行内布局 */}
      <Form layout="inline">
        <div className="flex gap-4 items-center">
          <Input placeholder="行内输入" />
          <Button type="submit">搜索</Button>
        </div>
      </Form>
    </div>
  );
}`}
        >
          <div className="space-y-8">
            <div>
              <h4 className="font-medium mb-4">水平布局</h4>
              <Form layout="horizontal" className="max-w-md">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <label className="text-right text-sm">用户名:</label>
                  <Input className="col-span-2" placeholder="水平布局输入框" />
                </div>
                <div className="grid grid-cols-3 gap-4 items-center mt-4">
                  <label className="text-right text-sm">密码:</label>
                  <Input type="password" className="col-span-2" placeholder="密码" />
                </div>
              </Form>
            </div>

            <div>
              <h4 className="font-medium mb-4">行内布局</h4>
              <Form layout="inline">
                <div className="flex gap-4 items-center">
                  <Input placeholder="行内输入" />
                  <Button type="submit" size="sm">搜索</Button>
                </div>
              </Form>
            </div>
          </div>
        </ExampleBlock>

        <ApiTable title="Form API" data={formApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">表单布局</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>垂直布局</strong>：适合大多数表单场景，标签在上，输入框在下</li>
                <li>• <strong>水平布局</strong>：适合简洁的表单，标签和输入框在同一行</li>
                <li>• <strong>行内布局</strong>：适合搜索表单或简短的单行表单</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">表单验证</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 及时反馈：在用户输入时提供即时的验证反馈</li>
                <li>• 明确提示：错误信息要明确、具体，帮助用户理解问题</li>
                <li>• 视觉层次：使用颜色和图标区分成功、警告、错误状态</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDocs; 