import React from 'react';
import { Avatar } from '@ui-lib/ui-react';

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

const AvatarDocs: React.FC = () => {
  const avatarApiData = [
    { property: 'size', description: '设置头像的大小', type: "'small' | 'medium' | 'large' | number", default: "'medium'" },
    { property: 'shape', description: '指定头像的形状', type: "'circle' | 'square'", default: "'circle'" },
    { property: 'src', description: '图片类头像的资源地址', type: 'string', default: '-' },
    { property: 'alt', description: '图像无法显示时的替代文本', type: 'string', default: '-' },
    { property: 'children', description: '文字类头像的内容', type: 'ReactNode', default: '-' },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
    { property: 'onClick', description: '点击回调', type: '() => void', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Avatar 头像</h1>
        <p className="text-lg text-gray-600">用来代表用户或事物，支持图片、图标或字符展示。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 需要表示用户或事物时。</li>
            <li>• 支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基本"
          description="头像有三种尺寸，两种形状可选。"
          code={`import { Avatar } from '@ui-lib/ui-react';

export default function BasicAvatar() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Avatar size="small">U</Avatar>
        <Avatar>USER</Avatar>
        <Avatar size="large">USER</Avatar>
      </div>
      
      <div className="flex items-center space-x-4">
        <Avatar size="small" shape="square">U</Avatar>
        <Avatar shape="square">USER</Avatar>
        <Avatar size="large" shape="square">USER</Avatar>
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar size="small">U</Avatar>
              <Avatar>USER</Avatar>
              <Avatar size="large">USER</Avatar>
            </div>
            
            <div className="flex items-center space-x-4">
              <Avatar size="small" shape="square">U</Avatar>
              <Avatar shape="square">USER</Avatar>
              <Avatar size="large" shape="square">USER</Avatar>
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="类型"
          description="支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。"
          code={`import { Avatar } from '@ui-lib/ui-react';

export default function TypeAvatar() {
  return (
    <div className="flex items-center space-x-4">
      <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="用户头像" />
      <Avatar>U</Avatar>
      <Avatar>USER</Avatar>
      <Avatar>👤</Avatar>
    </div>
  );
}`}
        >
          <div className="flex items-center space-x-4">
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="用户头像" />
            <Avatar>U</Avatar>
            <Avatar>USER</Avatar>
            <Avatar>👤</Avatar>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="带徽标的头像"
          description="通常用于消息提示。"
          code={`import { Avatar, Badge } from '@ui-lib/ui-react';

export default function BadgeAvatar() {
  return (
    <div className="flex items-center space-x-6">
      <Badge count={1}>
        <Avatar shape="square">U</Avatar>
      </Badge>
      
      <Badge dot>
        <Avatar shape="square">U</Avatar>
      </Badge>
      
      <Badge count={99}>
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="用户头像" />
      </Badge>
    </div>
  );
}`}
        >
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Avatar shape="square">U</Avatar>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">1</span>
            </div>
            
            <div className="relative">
              <Avatar shape="square">U</Avatar>
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full h-3 w-3"></span>
            </div>
            
            <div className="relative">
              <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="用户头像" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">99</span>
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="响应式尺寸"
          description="头像大小可以根据屏幕大小进行响应式调整。"
          code={`import { Avatar } from '@ui-lib/ui-react';

export default function ResponsiveAvatar() {
  return (
    <div className="flex items-center space-x-4">
      <Avatar size={24}>S</Avatar>
      <Avatar size={32}>M</Avatar>
      <Avatar size={40}>L</Avatar>
      <Avatar size={64}>XL</Avatar>
    </div>
  );
}`}
        >
          <div className="flex items-center space-x-4">
            <Avatar size={24}>S</Avatar>
            <Avatar size={32}>M</Avatar>
            <Avatar size={40}>L</Avatar>
            <Avatar size={64}>XL</Avatar>
          </div>
        </ExampleBlock>

        <ApiTable title="Avatar API" data={avatarApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">尺寸选择</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>small</strong>：用于评论列表、消息列表等紧凑场景</li>
                <li>• <strong>medium</strong>：默认尺寸，适用于大多数场景</li>
                <li>• <strong>large</strong>：用于个人资料页面等突出场景</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">形状选择</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>circle</strong>：圆形，适合头像照片</li>
                <li>• <strong>square</strong>：方形，适合品牌标识或组织头像</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarDocs; 