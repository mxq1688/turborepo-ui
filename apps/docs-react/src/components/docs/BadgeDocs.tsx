import React from 'react';
import { Badge, Avatar, Button } from '@ui-lib/ui-react';

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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">属性</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.property}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{row.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-mono">{row.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{row.default}</td>
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
      <div className="p-6 bg-white border-b border-gray-200">{children}</div>
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

const BadgeDocs: React.FC = () => {
  const badgeApiData = [
    { property: 'count', description: '展示的数字，大于 overflowCount 时显示为 ${overflowCount}+', type: 'number', default: '-' },
    { property: 'dot', description: '不展示数字，只有一个小红点', type: 'boolean', default: 'false' },
    { property: 'size', description: '在设置了 count 的前提下有效，设置小圆点的大小', type: "'default' | 'small'", default: "'default'" },
    { property: 'status', description: '设置 Badge 为状态点', type: "'success' | 'processing' | 'default' | 'error' | 'warning'", default: '-' },
    { property: 'text', description: '在设置了 status 的前提下有效，设置状态点的文本', type: 'string', default: '-' },
    { property: 'children', description: '包裹的元素', type: 'ReactNode', default: '-' },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Badge 徽标数</h1>
        <p className="text-lg text-gray-600">图标右上角的圆形徽标数字。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基本"
          description="简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 使其显示。"
          code={`import { Badge, Avatar } from '@ui-lib/ui-react';

export default function BasicBadge() {
  return (
    <div className="flex items-center space-x-6">
      <Badge count={5}>
        <Avatar shape="square">A</Avatar>
      </Badge>
      
      <Badge count={0} showZero>
        <Avatar shape="square">B</Avatar>
      </Badge>
      
      <Badge count={99}>
        <Avatar shape="square">C</Avatar>
      </Badge>
    </div>
  );
}`}
        >
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-10 h-10 bg-gray-300 rounded flex items-center justify-center text-white font-medium">A</div>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
            </div>
            
            <div className="relative">
              <div className="w-10 h-10 bg-gray-300 rounded flex items-center justify-center text-white font-medium">B</div>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </div>
            
            <div className="relative">
              <div className="w-10 h-10 bg-gray-300 rounded flex items-center justify-center text-white font-medium">C</div>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">99</span>
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="独立使用"
          description="不包裹任何元素即是独立使用，可自定样式展现。"
          code={`import { Badge } from '@ui-lib/ui-react';

export default function StandaloneBadge() {
  return (
    <div className="flex items-center space-x-4">
      <Badge count={25} />
      <Badge count={4} className="bg-green-500" />
      <Badge count={109} className="bg-blue-500" />
    </div>
  );
}`}
        >
          <div className="flex items-center space-x-4">
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">25</span>
            <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1">4</span>
            <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1">109</span>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="红点"
          description="没有具体的数字。"
          code={`import { Badge, Avatar } from '@ui-lib/ui-react';

export default function DotBadge() {
  return (
    <div className="flex items-center space-x-6">
      <Badge dot>
        <Avatar shape="square">A</Avatar>
      </Badge>
      
      <Badge dot>
        <a href="#" className="text-blue-600 hover:text-blue-800">链接</a>
      </Badge>
    </div>
  );
}`}
        >
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-10 h-10 bg-gray-300 rounded flex items-center justify-center text-white font-medium">A</div>
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full h-3 w-3"></span>
            </div>
            
            <div className="relative">
              <a href="#" className="text-blue-600 hover:text-blue-800">链接</a>
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full h-3 w-3"></span>
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="状态点"
          description="用于表示状态的小圆点。"
          code={`import { Badge } from '@ui-lib/ui-react';

export default function StatusBadge() {
  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <Badge status="success" />
        <span className="ml-2">Success</span>
      </div>
      
      <div className="flex items-center">
        <Badge status="error" />
        <span className="ml-2">Error</span>
      </div>
      
      <div className="flex items-center">
        <Badge status="default" />
        <span className="ml-2">Default</span>
      </div>
      
      <div className="flex items-center">
        <Badge status="processing" />
        <span className="ml-2">Processing</span>
      </div>
      
      <div className="flex items-center">
        <Badge status="warning" />
        <span className="ml-2">Warning</span>
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="ml-2">Success</span>
            </div>
            
            <div className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="ml-2">Error</span>
            </div>
            
            <div className="flex items-center">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="ml-2">Default</span>
            </div>
            
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="ml-2">Processing</span>
            </div>
            
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="ml-2">Warning</span>
            </div>
          </div>
        </ExampleBlock>

        <ApiTable title="Badge API" data={badgeApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">何时使用徽标</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 用于显示数量信息，如未读消息数</li>
                <li>• 用红点表示有新内容，但不显示具体数量</li>
                <li>• 状态点用于表示不同的状态信息</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">注意事项</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 数字超过99时建议显示99+</li>
                <li>• 重要通知建议使用醒目的颜色</li>
                <li>• 避免过度使用，以免造成视觉干扰</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeDocs; 