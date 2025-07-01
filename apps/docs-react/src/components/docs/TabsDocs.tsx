import React, { useState } from 'react';
import { Tabs } from '@ui-lib/ui-react';

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

const TabsDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabsApiData = [
    { property: 'activeKey', description: '当前激活 tab 面板的 key', type: 'string', default: '-' },
    { property: 'defaultActiveKey', description: '初始化选中面板的 key，如果没有设置 activeKey', type: 'string', default: '第一个面板' },
    { property: 'onChange', description: '切换面板的回调', type: '(activeKey: string) => void', default: '-' },
    { property: 'items', description: '配置选项卡内容', type: 'TabItem[]', default: '[]' },
    { property: 'size', description: '大小，提供 large default 和 small 三种大小', type: "'large' | 'default' | 'small'", default: "'default'" },
    { property: 'type', description: '页签的基本样式，可选 line、card 类型', type: "'line' | 'card'", default: "'line'" },
    { property: 'tabPosition', description: '页签位置，可选值有 top right bottom left', type: "'top' | 'right' | 'bottom' | 'left'", default: "'top'" },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
  ];

  const tabItemApiData = [
    { property: 'key', description: '对应 activeKey', type: 'string', default: '-' },
    { property: 'label', description: '选项卡头显示文字', type: 'ReactNode', default: '-' },
    { property: 'children', description: '选项卡头显示内容', type: 'ReactNode', default: '-' },
    { property: 'disabled', description: '禁用某一项', type: 'boolean', default: 'false' },
    { property: 'closable', description: '是否显示选项卡的关闭按钮', type: 'boolean', default: 'false' },
  ];

  const basicTabs = [
    {
      key: 'tab1',
      label: '选项卡一',
      children: <div className="p-4">选项卡一的内容</div>
    },
    {
      key: 'tab2',
      label: '选项卡二',
      children: <div className="p-4">选项卡二的内容</div>
    },
    {
      key: 'tab3',
      label: '选项卡三',
      children: <div className="p-4">选项卡三的内容</div>
    }
  ];

  const disabledTabs = [
    {
      key: 'tab1',
      label: '选项卡一',
      children: <div className="p-4">选项卡一的内容</div>
    },
    {
      key: 'tab2',
      label: '选项卡二',
      children: <div className="p-4">选项卡二的内容</div>,
      disabled: true
    },
    {
      key: 'tab3',
      label: '选项卡三',
      children: <div className="p-4">选项卡三的内容</div>
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Tabs 标签页</h1>
        <p className="text-lg text-gray-600">选项卡切换组件。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</li>
            <li>• Ant Design 依次提供了三级选项卡，分别用于不同的场景。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基本"
          description="默认选中第一项。"
          code={`import { Tabs } from '@ui-lib/ui-react';

export default function BasicTabs() {
  const items = [
    {
      key: 'tab1',
      label: '选项卡一',
      children: <div className="p-4">选项卡一的内容</div>
    },
    {
      key: 'tab2',
      label: '选项卡二',
      children: <div className="p-4">选项卡二的内容</div>
    },
    {
      key: 'tab3',
      label: '选项卡三',
      children: <div className="p-4">选项卡三的内容</div>
    }
  ];

  return <Tabs items={items} />;
}`}
        >
          <Tabs items={basicTabs} />
        </ExampleBlock>

        <ExampleBlock
          title="禁用"
          description="禁用某一项。"
          code={`import { Tabs } from '@ui-lib/ui-react';

export default function DisabledTabs() {
  const items = [
    {
      key: 'tab1',
      label: '选项卡一',
      children: <div className="p-4">选项卡一的内容</div>
    },
    {
      key: 'tab2',
      label: '选项卡二',
      children: <div className="p-4">选项卡二的内容</div>,
      disabled: true
    },
    {
      key: 'tab3',
      label: '选项卡三',
      children: <div className="p-4">选项卡三的内容</div>
    }
  ];

  return <Tabs items={items} />;
}`}
        >
          <Tabs items={disabledTabs} />
        </ExampleBlock>

        <ExampleBlock
          title="卡片式页签"
          description="另一种样式的页签，不提供对应的垂直样式。"
          code={`import { Tabs } from '@ui-lib/ui-react';

export default function CardTabs() {
  const items = [
    {
      key: 'tab1',
      label: '选项卡一',
      children: <div className="p-4">选项卡一的内容</div>
    },
    {
      key: 'tab2',
      label: '选项卡二',
      children: <div className="p-4">选项卡二的内容</div>
    },
    {
      key: 'tab3',
      label: '选项卡三',
      children: <div className="p-4">选项卡三的内容</div>
    }
  ];

  return <Tabs type="card" items={items} />;
}`}
        >
          <Tabs type="card" items={basicTabs} />
        </ExampleBlock>

        <ExampleBlock
          title="大小"
          description="大中小三种大小。"
          code={`import { Tabs } from '@ui-lib/ui-react';

export default function SizeTabs() {
  const items = [
    {
      key: 'tab1',
      label: '选项卡一',
      children: <div className="p-4">内容一</div>
    },
    {
      key: 'tab2',
      label: '选项卡二',
      children: <div className="p-4">内容二</div>
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-sm font-medium">Small</h4>
        <Tabs size="small" items={items} />
      </div>
      
      <div>
        <h4 className="mb-2 text-sm font-medium">Default</h4>
        <Tabs items={items} />
      </div>
      
      <div>
        <h4 className="mb-2 text-sm font-medium">Large</h4>
        <Tabs size="large" items={items} />
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-sm font-medium">Small</h4>
              <Tabs size="small" items={basicTabs.slice(0, 2)} />
            </div>
            
            <div>
              <h4 className="mb-2 text-sm font-medium">Default</h4>
              <Tabs items={basicTabs.slice(0, 2)} />
            </div>
            
            <div>
              <h4 className="mb-2 text-sm font-medium">Large</h4>
              <Tabs size="large" items={basicTabs.slice(0, 2)} />
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="受控模式"
          description="受控模式下，activeKey 和 onChange 需要配合使用。"
          code={`import { Tabs } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function ControlledTabs() {
  const [activeKey, setActiveKey] = useState('tab1');
  
  const items = [
    {
      key: 'tab1',
      label: '选项卡一',
      children: <div className="p-4">当前选中: {activeKey}</div>
    },
    {
      key: 'tab2',
      label: '选项卡二',
      children: <div className="p-4">当前选中: {activeKey}</div>
    },
    {
      key: 'tab3',
      label: '选项卡三',
      children: <div className="p-4">当前选中: {activeKey}</div>
    }
  ];

  return (
    <Tabs
      activeKey={activeKey}
      onChange={setActiveKey}
      items={items}
    />
  );
}`}
        >
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={[
              {
                key: 'tab1',
                label: '选项卡一',
                children: <div className="p-4">当前选中: {activeTab}</div>
              },
              {
                key: 'tab2',
                label: '选项卡二',
                children: <div className="p-4">当前选中: {activeTab}</div>
              },
              {
                key: 'tab3',
                label: '选项卡三',
                children: <div className="p-4">当前选中: {activeTab}</div>
              }
            ]}
          />
        </ExampleBlock>

        <ApiTable title="Tabs API" data={tabsApiData} />
        <ApiTable title="TabItem API" data={tabItemApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">样式选择</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>line</strong>：默认样式，适用于大多数场景</li>
                <li>• <strong>card</strong>：卡片样式，视觉层次更明显</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">使用建议</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 标签数量不宜过多，建议不超过7个</li>
                <li>• 标签文字要简洁明了，避免过长</li>
                <li>• 重要内容放在第一个标签页</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsDocs; 