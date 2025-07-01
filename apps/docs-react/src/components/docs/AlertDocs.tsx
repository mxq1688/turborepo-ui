import React, { useState } from 'react';
import { Alert, Button } from '@ui-lib/ui-react';

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

const AlertDocs: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [showClosableAlert, setShowClosableAlert] = useState(true);

  const alertApiData = [
    { property: 'variant', description: '指定警告提示的样式', type: "'success' | 'info' | 'warning' | 'error'", default: "'info'" },
    { property: 'children', description: '警告提示内容', type: 'ReactNode', default: '-' },
    { property: 'title', description: '警告提示的标题', type: 'string', default: '-' },
    { property: 'closable', description: '默认不显示关闭按钮', type: 'boolean', default: 'false' },
    { property: 'onClose', description: '关闭时触发的回调函数', type: '() => void', default: '-' },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Alert 警告提示</h1>
        <p className="text-lg text-gray-600">警告提示，展现需要关注的信息。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 当某个页面需要向用户显示警告的信息时。</li>
            <li>• 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基本"
          description="最简单的用法，适用于简短的警告提示。"
          code={`import { Alert } from '@ui-lib/ui-react';

export default function BasicAlert() {
  return (
    <div className="space-y-4">
      <Alert variant="success">成功提示的文案</Alert>
      <Alert variant="info">消息提示的文案</Alert>
      <Alert variant="warning">警告提示的文案</Alert>
      <Alert variant="error">错误提示的文案</Alert>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Alert variant="success">成功提示的文案</Alert>
            <Alert variant="info">消息提示的文案</Alert>
            <Alert variant="warning">警告提示的文案</Alert>
            <Alert variant="error">错误提示的文案</Alert>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="含有辅助性文字介绍"
          description="含有辅助性文字介绍的警告提示。"
          code={`import { Alert } from '@ui-lib/ui-react';

export default function DescriptionAlert() {
  return (
    <div className="space-y-4">
      <Alert
        title="成功提示的文案"
        variant="success"
      >
        成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍
      </Alert>
      <Alert
        title="消息提示的文案"
        variant="info"
      >
        消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍
      </Alert>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Alert
              title="成功提示的文案"
              variant="success"
            >
              成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍
            </Alert>
            <Alert
              title="消息提示的文案"
              variant="info"
            >
              消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍
            </Alert>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="可关闭的警告提示"
          description="显示关闭按钮，点击可关闭警告提示。"
          code={`import { Alert, Button } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function ClosableAlert() {
  const [showAlert, setShowAlert] = useState(true);
  
  return (
    <div className="space-y-4">
      {showAlert && (
        <Alert
          variant="warning"
          closable
          onClose={() => setShowAlert(false)}
        >
          警告提示的文案
        </Alert>
      )}
      
      {!showAlert && (
        <Button onClick={() => setShowAlert(true)}>
          重新显示警告
        </Button>
      )}
    </div>
  );
}`}
        >
          <div className="space-y-4">
            {showClosableAlert && (
              <Alert
                variant="warning"
                closable
                onClose={() => setShowClosableAlert(false)}
              >
                警告提示的文案
              </Alert>
            )}
            
            {!showClosableAlert && (
              <Button onClick={() => setShowClosableAlert(true)}>
                重新显示警告
              </Button>
            )}
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="含有图标"
          description="可口的图标让信息类型更加醒目。"
          code={`import { Alert } from '@ui-lib/ui-react';

export default function IconAlert() {
  return (
    <div className="space-y-4">
      <Alert variant="success">成功提示的文案</Alert>
      <Alert variant="info">消息提示的文案</Alert>
      <Alert variant="warning">警告提示的文案</Alert>
      <Alert variant="error">错误提示的文案</Alert>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Alert variant="success">成功提示的文案</Alert>
            <Alert variant="info">消息提示的文案</Alert>
            <Alert variant="warning">警告提示的文案</Alert>
            <Alert variant="error">错误提示的文案</Alert>
          </div>
        </ExampleBlock>

        <ApiTable title="Alert API" data={alertApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">类型选择</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>success</strong>：操作成功时的提示</li>
                <li>• <strong>info</strong>：信息提示或说明</li>
                <li>• <strong>warning</strong>：需要用户注意的警告信息</li>
                <li>• <strong>error</strong>：错误信息或危险操作</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">使用建议</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 内容要简洁明了，避免冗长的描述</li>
                <li>• 重要信息可以使用图标增强视觉效果</li>
                <li>• 临时性提示建议设置可关闭</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertDocs; 