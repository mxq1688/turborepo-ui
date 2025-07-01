import React from 'react';
import { Loading, Button, Card } from '@ui-lib/ui-react';

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

const LoadingDocs: React.FC = () => {
  const loadingApiData = [
    { property: 'size', description: '加载指示器的大小', type: "'small' | 'medium' | 'large'", default: "'medium'" },
    { property: 'text', description: '加载时显示的文字', type: 'string', default: '-' },
    { property: 'spinning', description: '是否为加载中状态', type: 'boolean', default: 'true' },
    { property: 'children', description: '包裹的内容', type: 'ReactNode', default: '-' },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Loading 加载</h1>
        <p className="text-lg text-gray-600">用于页面和区块的加载中状态。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基本用法"
          description="最简单的加载状态。"
          code={`import { Loading } from '@ui-lib/ui-react';

export default function BasicLoading() {
  return (
    <div className="flex items-center space-x-4">
      <Loading size="small" />
      <Loading />
      <Loading size="large" />
    </div>
  );
}`}
        >
          <div className="flex items-center space-x-4">
            <Loading size="small" />
            <Loading />
            <Loading size="large" />
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="包含文字"
          description="可以自定义描述文案。"
          code={`import { Loading } from '@ui-lib/ui-react';

export default function LoadingWithText() {
  return (
    <div className="space-y-4">
      <Loading text="加载中..." />
      <Loading text="数据加载中，请稍候..." size="large" />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Loading text="加载中..." />
            <Loading text="数据加载中，请稍候..." size="large" />
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="包裹容器"
          description="包裹任意内容，加载状态遮罩层。"
          code={`import { Loading, Card, Button } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function LoadingContainer() {
  const [loading, setLoading] = useState(false);
  
  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleLoad}>开始加载</Button>
      
      <Loading spinning={loading}>
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">卡片内容</h3>
            <p className="text-gray-600">
              这里是一些示例内容。点击上面的按钮查看加载效果。
            </p>
          </div>
        </Card>
      </Loading>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Button onClick={() => {}}>开始加载</Button>
            
            <Loading spinning={false}>
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">卡片内容</h3>
                  <p className="text-gray-600">
                    这里是一些示例内容。点击上面的按钮查看加载效果。
                  </p>
                </div>
              </Card>
            </Loading>
          </div>
        </ExampleBlock>

        <ApiTable title="Loading API" data={loadingApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">使用场景</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>页面级加载</strong>：整个页面加载时使用</li>
                <li>• <strong>区块级加载</strong>：页面某个区域加载时使用</li>
                <li>• <strong>元素级加载</strong>：按钮等元素的加载状态</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">注意事项</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 避免在短时间操作中使用加载</li>
                <li>• 加载时间过长时应提供取消选项</li>
                <li>• 可以配合进度条显示具体进度</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDocs; 