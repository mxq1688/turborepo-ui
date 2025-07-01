import React, { useState } from 'react';
import { Switch } from '@ui-lib/ui-react';

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

const SwitchDocs: React.FC = () => {
  const [basicSwitch, setBasicSwitch] = useState(false);
  const [disabledSwitch, setDisabledSwitch] = useState(true);

  const switchApiData = [
    { property: 'checked', description: '指定当前是否选中', type: 'boolean', default: 'false' },
    { property: 'defaultChecked', description: '初始是否选中', type: 'boolean', default: 'false' },
    { property: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
    { property: 'size', description: '开关大小', type: "'small' | 'default'", default: "'default'" },
    { property: 'onChange', description: '变化时回调函数', type: '(checked: boolean) => void', default: '-' },
    { property: 'checkedChildren', description: '选中时的内容', type: 'ReactNode', default: '-' },
    { property: 'unCheckedChildren', description: '非选中时的内容', type: 'ReactNode', default: '-' },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Switch 开关</h1>
        <p className="text-lg text-gray-600">开关选择器。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 需要表示开关状态/两种状态之间的切换时；</li>
            <li>• 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基本"
          description="最简单的用法。"
          code={`import { Switch } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function BasicSwitch() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      <Switch checked={checked} onChange={setChecked} />
      <Switch defaultChecked />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Switch checked={basicSwitch} onChange={setBasicSwitch} />
            <Switch defaultChecked />
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="不可用"
          description="Switch 失效状态。"
          code={`import { Switch } from '@ui-lib/ui-react';

export default function DisabledSwitch() {
  return (
    <div className="space-y-4">
      <Switch disabled />
      <Switch disabled checked />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Switch disabled />
            <Switch disabled checked />
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="文字和图标"
          description="带有文字和图标的开关。"
          code={`import { Switch } from '@ui-lib/ui-react';

export default function SwitchWithText() {
  return (
    <div className="space-y-4">
      <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <Switch
        checkedChildren="ON"
        unCheckedChildren="OFF"
        defaultChecked
      />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
            <Switch checkedChildren="1" unCheckedChildren="0" />
            <Switch
              checkedChildren="ON"
              unCheckedChildren="OFF"
              defaultChecked
            />
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="两种大小"
          description="size='small' 表示小号开关。"
          code={`import { Switch } from '@ui-lib/ui-react';

export default function SwitchSize() {
  return (
    <div className="flex items-center space-x-4">
      <Switch defaultChecked />
      <Switch size="small" defaultChecked />
    </div>
  );
}`}
        >
          <div className="flex items-center space-x-4">
            <Switch defaultChecked />
            <Switch size="small" defaultChecked />
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="加载中"
          description="标识开关操作仍在执行中。"
          code={`import { Switch } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function LoadingSwitch() {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (newChecked: boolean) => {
    setLoading(true);
    setTimeout(() => {
      setChecked(newChecked);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <Switch loading defaultChecked />
      <Switch 
        loading={loading}
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div className="relative">
              <Switch defaultChecked disabled />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin h-3 w-3 border border-white border-t-transparent rounded-full"></div>
              </div>
            </div>
            <Switch 
              checked={disabledSwitch}
              onChange={setDisabledSwitch}
            />
          </div>
        </ExampleBlock>

        <ApiTable title="Switch API" data={switchApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">与 Checkbox 的区别</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Switch</strong>：立即触发状态改变，用于直接控制功能的开启关闭</li>
                <li>• <strong>Checkbox</strong>：用于标记状态，通常需要配合提交操作</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">使用建议</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 用于表示两种相对立的状态间的切换</li>
                <li>• 在移动端更推荐使用开关而不是复选框</li>
                <li>• 开关状态的改变应该是即时生效的</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchDocs; 