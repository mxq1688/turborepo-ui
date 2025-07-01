import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  Input
} from '@ui-lib/ui-react';

interface ComponentMenuProps {
  activeComponent: string;
  onComponentChange: (component: string) => void;
}

const ComponentMenu: React.FC<ComponentMenuProps> = ({ activeComponent, onComponentChange }) => {
  // 已实现的组件
  const implementedComponents = [
    { id: 'button', name: 'Button 按钮', description: '基础按钮组件' },
    { id: 'card', name: 'Card 卡片', description: '通用卡片容器' },
    { id: 'input', name: 'Input 输入框', description: '基础表单输入组件' },
  ];

  // 规划中的组件（已在 React 版本中实现）
  const plannedComponents = [
    // 表单组件
    { id: 'select', name: 'Select 选择器', description: '下拉选择器' },
    { id: 'checkbox', name: 'Checkbox 多选框', description: '多选框' },
    { id: 'radio', name: 'Radio 单选框', description: '单选框' },
    { id: 'switch', name: 'Switch 开关', description: '开关选择器' },
    
    // 数据展示
    { id: 'avatar', name: 'Avatar 头像', description: '用户头像展示' },
    { id: 'badge', name: 'Badge 徽标数', description: '图标右上角的圆形徽标数字' },
    { id: 'table', name: 'Table 表格', description: '展示行列数据' },
    
    // 反馈组件
    { id: 'alert', name: 'Alert 警告提示', description: '警告提示，展现需要关注的信息' },
    { id: 'loading', name: 'Loading 加载中', description: '用于页面和区块的加载中状态' },
    { id: 'modal', name: 'Modal 对话框', description: '模态对话框' },
    
    // 导航组件
    { id: 'tabs', name: 'Tabs 标签页', description: '选项卡切换组件' },
    { id: 'menu', name: 'Menu 导航菜单', description: '为页面和功能提供导航' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">组件</h2>
      </div>
      <div className="p-2">
        {/* 已实现的组件 */}
        <div className="mb-6">
          <div className="text-xs font-medium text-green-600 uppercase tracking-wider px-3 py-2 bg-green-50 rounded">
            ✅ 已实现
          </div>
          <div className="space-y-1 mt-2">
            {implementedComponents.map((comp) => (
              <button
                key={comp.id}
                onClick={() => onComponentChange(comp.id)}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                  activeComponent === comp.id
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="font-medium">{comp.name}</div>
                <div className="text-xs text-gray-500 mt-1">{comp.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 规划中的组件 */}
        <div className="mb-4">
          <div className="text-xs font-medium text-blue-600 uppercase tracking-wider px-3 py-2 bg-blue-50 rounded">
            🚀 React 已实现
          </div>
          <div className="space-y-1 mt-2">
            {plannedComponents.map((comp) => (
              <div
                key={comp.id}
                className="w-full text-left px-3 py-2 rounded text-sm text-gray-400 cursor-not-allowed"
              >
                <div className="font-medium">{comp.name}</div>
                <div className="text-xs text-gray-400 mt-1">{comp.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 提示信息 */}
        <div className="mx-3 mt-6 p-3 bg-blue-50 rounded-lg">
          <div className="text-xs text-blue-800 font-medium mb-1">💡 开发提示</div>
          <div className="text-xs text-blue-600">
            React 版本功能更丰富，正在将特性同步到 Vue 版本！
          </div>
        </div>
      </div>
    </div>
  );
};

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

const ButtonDocs: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const showMessage = (type: string) => {
    alert(`React ${type}被点击!`);
  };

  const showConfirm = () => {
    if (confirm('确认要执行此危险操作吗？')) {
      alert('操作已执行');
    }
  };

  const buttonApiData = [
    { property: 'variant', description: '设置按钮类型', type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'" },
    { property: 'size', description: '设置按钮大小', type: "'sm' | 'md' | 'lg'", default: "'md'" },
    { property: 'disabled', description: '按钮失效状态', type: 'boolean', default: 'false' },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
    { property: 'onClick', description: '点击按钮时的回调', type: '(event: MouseEvent) => void', default: '-' },
    { property: 'children', description: '按钮内容', type: 'ReactNode', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Button 按钮</h1>
        <p className="text-lg text-gray-600">按钮用于开始一个即时操作。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</li>
            <li>• 在 React 组件库中提供了四种按钮类型。</li>
            <li>• 主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li>
            <li>• 默认按钮：用于没有主次之分的一组行动点。</li>
            <li>• 描边按钮：用于次要的行动点。</li>
            <li>• 幽灵按钮：用于最次级的行动点。</li>
          </ul>
        </div>

        <ExampleBlock
          title="按钮类型"
          description="按钮有四种类型：主按钮、次按钮、描边按钮和幽灵按钮。主按钮在同一个操作区域最多出现一次。"
          code={`import { Button } from '@ui-lib/ui-react';

export default function ButtonTypes() {
  return (
    <div className="space-x-2 flex flex-wrap gap-2">
      <Button variant="primary" onClick={() => alert('主按钮')}>主按钮</Button>
      <Button variant="secondary" onClick={() => alert('次按钮')}>次按钮</Button>
      <Button variant="outline" onClick={() => alert('描边按钮')}>描边按钮</Button>
      <Button variant="ghost" onClick={() => alert('幽灵按钮')}>幽灵按钮</Button>
    </div>
  );
}`}
        >
          <div className="space-x-2 flex flex-wrap gap-2">
            <Button variant="primary" onClick={() => showMessage('主按钮')}>主按钮</Button>
            <Button variant="secondary" onClick={() => showMessage('次按钮')}>次按钮</Button>
            <Button variant="outline" onClick={() => showMessage('描边按钮')}>描边按钮</Button>
            <Button variant="ghost" onClick={() => showMessage('幽灵按钮')}>幽灵按钮</Button>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="按钮尺寸"
          description="按钮有大、中、小三种尺寸。通过设置 size 为 lg md sm 分别把按钮设为大、中、小尺寸。若不设置 size，则尺寸为中。"
          code={`import { Button } from '@ui-lib/ui-react';

export default function ButtonSizes() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Button size="lg">大按钮</Button>
        <Button size="md">中按钮</Button>
        <Button size="sm">小按钮</Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="lg">大按钮</Button>
        <Button variant="outline" size="md">中按钮</Button>
        <Button variant="outline" size="sm">小按钮</Button>
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Button size="lg">大按钮</Button>
              <Button size="md">中按钮</Button>
              <Button size="sm">小按钮</Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="lg">大按钮</Button>
              <Button variant="outline" size="md">中按钮</Button>
              <Button variant="outline" size="sm">小按钮</Button>
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="按钮状态"
          description="按钮的禁用状态。"
          code={`import { Button } from '@ui-lib/ui-react';

export default function ButtonDisabled() {
  return (
    <div className="space-y-4">
      <div className="space-x-2">
        <Button>正常按钮</Button>
        <Button disabled>禁用按钮</Button>
      </div>
      <div className="space-x-2">
        <Button variant="outline">正常按钮</Button>
        <Button variant="outline" disabled>禁用按钮</Button>
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div className="space-x-2">
              <Button>正常按钮</Button>
              <Button disabled>禁用按钮</Button>
            </div>
            <div className="space-x-2">
              <Button variant="outline">正常按钮</Button>
              <Button variant="outline" disabled>禁用按钮</Button>
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="加载中状态"
          description="点击按钮后进入加载状态，可以避免用户重复点击。"
          code={`import { Button } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function ButtonLoading() {
  const [loading, setLoading] = useState(false);
  
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('加载完成!');
    }, 2000);
  };

  return (
    <div className="space-x-2">
      <Button onClick={handleClick} disabled={loading}>
        {loading ? '加载中...' : '点击加载'}
      </Button>
    </div>
  );
}`}
        >
          <div className="space-x-2">
            <Button 
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  alert('加载完成!');
                }, 2000);
              }} 
              disabled={loading}
            >
              {loading ? '加载中...' : '点击加载'}
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                setLoading2(true);
                setTimeout(() => {
                  setLoading2(false);
                  alert('提交成功!');
                }, 3000);
              }} 
              disabled={loading2}
            >
              {loading2 ? '提交中...' : '提交表单'}
            </Button>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="图标按钮"
          description="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。"
          code={`import { Button } from '@ui-lib/ui-react';

export default function ButtonIcon() {
  return (
    <div className="space-x-2 flex flex-wrap gap-2">
      <Button>
        <span className="mr-2">📁</span>
        文件夹
      </Button>
      <Button variant="outline">
        <span className="mr-2">📝</span>
        编辑
      </Button>
      <Button variant="ghost">
        <span className="mr-2">🗑️</span>
        删除
      </Button>
      <Button size="sm">
        <span className="mr-1">+</span>
        新建
      </Button>
    </div>
  );
}`}
        >
          <div className="space-x-2 flex flex-wrap gap-2">
            <Button>
              <span className="mr-2">📁</span>
              文件夹
            </Button>
            <Button variant="outline">
              <span className="mr-2">📝</span>
              编辑
            </Button>
            <Button variant="ghost">
              <span className="mr-2">🗑️</span>
              删除
            </Button>
            <Button size="sm">
              <span className="mr-1">+</span>
              新建
            </Button>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="按钮组合"
          description="可以将多个 Button 放入 div 容器中。"
          code={`import { Button } from '@ui-lib/ui-react';

export default function ButtonGroup() {
  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Button>左侧按钮</Button>
        <Button variant="outline">中间按钮</Button>
        <Button variant="outline">右侧按钮</Button>
      </div>
      <div className="flex space-x-2">
        <Button size="sm">保存</Button>
        <Button variant="outline" size="sm">取消</Button>
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Button>左侧按钮</Button>
              <Button variant="outline">中间按钮</Button>
              <Button variant="outline">右侧按钮</Button>
            </div>
            <div className="flex space-x-2">
              <Button size="sm">保存</Button>
              <Button variant="outline" size="sm">取消</Button>
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="危险按钮"
          description="删除/移动/修改权限等危险操作，一般需要二次确认。"
          code={`import { Button } from '@ui-lib/ui-react';

export default function ButtonDanger() {
  const showConfirm = () => {
    if (confirm('确认要执行此危险操作吗？')) {
      alert('操作已执行');
    }
  };

  return (
    <div className="space-x-2">
      <Button onClick={showConfirm}>删除</Button>
      <Button variant="outline" onClick={showConfirm}>移动</Button>
      <Button variant="ghost" onClick={showConfirm}>修改权限</Button>
    </div>
  );
}`}
        >
          <div className="space-x-2">
            <Button onClick={showConfirm}>删除</Button>
            <Button variant="outline" onClick={showConfirm}>移动</Button>
            <Button variant="ghost" onClick={showConfirm}>修改权限</Button>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="全宽按钮"
          description="按钮宽度调整为父元素宽度的选项。"
          code={`import { Button } from '@ui-lib/ui-react';

export default function ButtonBlock() {
  return (
    <div className="space-y-2 max-w-md">
      <Button className="w-full">全宽主按钮</Button>
      <Button variant="outline" className="w-full">全宽次按钮</Button>
    </div>
  );
}`}
        >
          <div className="space-y-2 max-w-md">
            <Button className="w-full">全宽主按钮</Button>
            <Button variant="outline" className="w-full">全宽次按钮</Button>
          </div>
        </ExampleBlock>

        <ApiTable title="Button API" data={buttonApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">按钮类型</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>主按钮</strong>：用于主要操作，一个操作区域只能有一个</li>
                <li>• <strong>次按钮</strong>：用于没有主次之分的一组行动点</li>
                <li>• <strong>描边按钮</strong>：用于次要操作</li>
                <li>• <strong>幽灵按钮</strong>：用于最次级的行动点</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">按钮状态</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>正常状态</strong>：可以进行交互的按钮状态</li>
                <li>• <strong>禁用状态</strong>：不可交互状态，用于表单校验不通过等场景</li>
                <li>• <strong>加载状态</strong>：用于异步操作等待过程中</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardDocs: React.FC = () => {
  const activityList = [
    { id: 1, title: '用户张三注册了账号', time: '2分钟前', color: 'bg-green-500' },
    { id: 2, title: '订单 #1234 已完成', time: '5分钟前', color: 'bg-blue-500' },
    { id: 3, title: '系统维护通知', time: '1小时前', color: 'bg-orange-500' },
    { id: 4, title: '数据备份完成', time: '2小时前', color: 'bg-green-500' },
  ];

  const cardApiData = [
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
    { property: 'children', description: '卡片内容', type: 'ReactNode', default: '-' },
  ];

  const cardHeaderApiData = [
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
    { property: 'children', description: '头部内容', type: 'ReactNode', default: '-' },
  ];

  const cardTitleApiData = [
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
    { property: 'children', description: '标题内容', type: 'ReactNode', default: '-' },
  ];

  const cardContentApiData = [
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
    { property: 'children', description: '内容区域', type: 'ReactNode', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Card 卡片</h1>
        <p className="text-lg text-gray-600">通用卡片容器。最基础的容器，用于内容分组和信息展示。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。</li>
            <li>• 适用于展示简洁的信息内容，支持用户操作。</li>
            <li>• 可以组合使用，构建复杂的页面布局。</li>
            <li>• 支持内容分区，让信息层次更清晰。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基础用法"
          description="包含标题、内容、操作区域。"
          code={`import { Card, CardHeader, CardTitle, CardContent } from '@ui-lib/ui-react';

export default function BasicCard() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>默认大小的卡片</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">这是卡片的内容区域，可以包含任意内容。</p>
      </CardContent>
    </Card>
  );
}`}
        >
          <Card className="w-96">
            <CardHeader>
              <CardTitle>默认大小的卡片</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">这是卡片的内容区域，可以包含任意内容。</p>
            </CardContent>
          </Card>
        </ExampleBlock>

        <ExampleBlock
          title="简洁卡片"
          description="只有内容区域的简洁卡片。"
          code={`import { Card, CardContent } from '@ui-lib/ui-react';

export default function SimpleCard() {
  return (
    <Card className="w-96">
      <CardContent>
        <p className="text-gray-600">没有标题的简洁卡片，直接展示内容信息。</p>
      </CardContent>
    </Card>
  );
}`}
        >
          <Card className="w-96">
            <CardContent>
              <p className="text-gray-600">没有标题的简洁卡片，直接展示内容信息。</p>
            </CardContent>
          </Card>
        </ExampleBlock>

        <ExampleBlock
          title="包含操作按钮"
          description="卡片可以包含操作按钮，用于用户交互。"
          code={`import { Card, CardHeader, CardTitle, CardContent, Button } from '@ui-lib/ui-react';

export default function CardWithActions() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>用户信息</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-medium">张三</span>
            </div>
            <div>
              <div className="font-medium">张三</div>
              <div className="text-sm text-gray-500">前端开发工程师</div>
            </div>
          </div>
          <div className="flex space-x-2 pt-3">
            <Button size="sm">编辑</Button>
            <Button variant="outline" size="sm">详情</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}`}
        >
          <Card className="w-96">
            <CardHeader>
              <CardTitle>用户信息</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium">张三</span>
                  </div>
                  <div>
                    <div className="font-medium">张三</div>
                    <div className="text-sm text-gray-500">前端开发工程师</div>
                  </div>
                </div>
                <div className="flex space-x-2 pt-3">
                  <Button size="sm" onClick={() => alert('编辑用户')}>编辑</Button>
                  <Button variant="outline" size="sm" onClick={() => alert('查看详情')}>详情</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </ExampleBlock>

        <ExampleBlock
          title="信息统计卡片"
          description="常用于仪表盘的信息统计展示。"
          code={`import { Card, CardContent } from '@ui-lib/ui-react';

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-blue-600">2,543</div>
              <div className="text-sm text-gray-500">总用户数</div>
            </div>
            <div className="text-blue-500">
              <span className="text-3xl">👥</span>
            </div>
          </div>
          <div className="text-xs text-green-600 mt-2">↗ +12% 较上月</div>
        </CardContent>
      </Card>
      {/* 更多统计卡片... */}
    </div>
  );
}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">2,543</div>
                    <div className="text-sm text-gray-500">总用户数</div>
                  </div>
                  <div className="text-blue-500">
                    <span className="text-3xl">👥</span>
                  </div>
                </div>
                <div className="text-xs text-green-600 mt-2">↗ +12% 较上月</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600">89.3%</div>
                    <div className="text-sm text-gray-500">活跃率</div>
                  </div>
                  <div className="text-green-500">
                    <span className="text-3xl">📈</span>
                  </div>
                </div>
                <div className="text-xs text-green-600 mt-2">↗ +5.2% 较上月</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">1,256</div>
                    <div className="text-sm text-gray-500">订单数</div>
                  </div>
                  <div className="text-orange-500">
                    <span className="text-3xl">📦</span>
                  </div>
                </div>
                <div className="text-xs text-red-600 mt-2">↘ -3.1% 较上月</div>
              </CardContent>
            </Card>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="列表型卡片"
          description="卡片可以承载列表信息。"
          code={`import { Card, CardHeader, CardTitle, CardContent } from '@ui-lib/ui-react';

export default function ListCard() {
  const activityList = [
    { id: 1, title: '用户张三注册了账号', time: '2分钟前', color: 'bg-green-500' },
    { id: 2, title: '订单 #1234 已完成', time: '5分钟前', color: 'bg-blue-500' },
    // ...更多活动项
  ];

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>最近活动</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activityList.map((item) => (
            <div key={item.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
              <div className={\`w-2 h-2 rounded-full \${item.color}\`}></div>
              <div className="flex-1">
                <div className="text-sm">{item.title}</div>
                <div className="text-xs text-gray-500">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}`}
        >
          <Card className="w-96">
            <CardHeader>
              <CardTitle>最近活动</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activityList.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                    <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                    <div className="flex-1">
                      <div className="text-sm">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ExampleBlock>

        <ApiTable title="Card API" data={cardApiData} />
        <ApiTable title="CardHeader API" data={cardHeaderApiData} />
        <ApiTable title="CardTitle API" data={cardTitleApiData} />
        <ApiTable title="CardContent API" data={cardContentApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">卡片组成</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>CardHeader</strong>：卡片头部，通常包含标题和操作按钮</li>
                <li>• <strong>CardTitle</strong>：卡片标题，用于描述卡片主要内容</li>
                <li>• <strong>CardContent</strong>：卡片内容区域，可包含任意内容</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">使用建议</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 保持卡片内容的相关性，避免在单个卡片中混合不相关的信息</li>
                <li>• 合理使用卡片间距，保持页面布局的整齐</li>
                <li>• 考虑响应式设计，在不同屏幕尺寸下保持良好的展示效果</li>
                <li>• 统一卡片风格，保持视觉一致性</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputDocs: React.FC = () => {
  const [basicValue, setBasicValue] = useState('');
  const [largeValue, setLargeValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const [smallValue, setSmallValue] = useState('');
  const [normalValue, setNormalValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [telValue, setTelValue] = useState('');
  const [clearableValue, setClearableValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [amountValue, setAmountValue] = useState('');

  // 表单验证
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const validateForm = () => {
    // 清空之前的错误
    const newErrors = { username: '', email: '', password: '' };

    // 验证用户名
    if (!formData.username) {
      newErrors.username = '请输入用户名';
    } else if (formData.username.length < 3) {
      newErrors.username = '用户名至少3个字符';
    }

    // 验证邮箱
    if (!formData.email) {
      newErrors.email = '请输入邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '邮箱格式不正确';
    }

    // 验证密码
    if (!formData.password) {
      newErrors.password = '请输入密码';
    } else if (formData.password.length < 6) {
      newErrors.password = '密码至少6个字符';
    }

    setErrors(newErrors);

    // 检查是否有错误
    const hasErrors = newErrors.username || newErrors.email || newErrors.password;
    if (!hasErrors) {
      alert('表单验证通过！');
    }
  };

  const resetForm = () => {
    setFormData({ username: '', email: '', password: '' });
    setErrors({ username: '', email: '', password: '' });
  };

  const inputApiData = [
    { property: 'value', description: '输入框内容', type: 'string', default: '-' },
    { property: 'type', description: '输入框类型', type: "'text' | 'password' | 'email' | 'number' | 'tel' | 'url'", default: "'text'" },
    { property: 'placeholder', description: '占位符', type: 'string', default: '-' },
    { property: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
    { property: 'readOnly', description: '是否只读', type: 'boolean', default: 'false' },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
    { property: 'onChange', description: '值改变时触发', type: '(event: ChangeEvent) => void', default: '-' },
    { property: 'onFocus', description: '获得焦点时触发', type: '(event: FocusEvent) => void', default: '-' },
    { property: 'onBlur', description: '失去焦点时触发', type: '(event: FocusEvent) => void', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Input 输入框</h1>
        <p className="text-lg text-gray-600">通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 需要用户输入表单域内容时。</li>
            <li>• 提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>
            <li>• 支持前缀和后缀图标/文字。</li>
            <li>• 支持禁用、只读等状态。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基础用法"
          description="基本使用。"
          code={`import { Input } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function BasicInput() {
  const [value, setValue] = useState('');

  return (
    <div className="w-80">
      <Input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="请输入内容"
      />
      <div className="text-sm text-gray-500 mt-2">
        输入值：{value || '(空)'}
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4 w-80">
            <Input 
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
              placeholder="请输入内容"
            />
            <div className="text-sm text-gray-500">
              输入值：{basicValue || '(空)'}
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="表单验证"
          description="结合表单验证的输入框示例。"
          code={`import { Input, Button } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function ValidationForm() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });

  const validate = () => {
    // 验证逻辑...
  };

  return (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          用户名 <span className="text-red-500">*</span>
        </label>
        <Input 
          value={form.username}
          onChange={(e) => setForm({...form, username: e.target.value})}
          placeholder="请输入用户名"
          className={errors.username ? 'border-red-500' : ''}
        />
        {errors.username && (
          <div className="text-red-500 text-sm mt-1">{errors.username}</div>
        )}
      </div>
      
      <Button onClick={validate}>验证表单</Button>
    </div>
  );
}`}
        >
          <div className="space-y-4 w-80">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                用户名 <span className="text-red-500">*</span>
              </label>
              <Input 
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                placeholder="请输入用户名"
                className={errors.username ? 'border-red-500' : ''}
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
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                type="email"
                placeholder="请输入邮箱"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                密码 <span className="text-red-500">*</span>
              </label>
              <Input 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                type="password"
                placeholder="请输入密码"
                className={errors.password ? 'border-red-500' : ''}
              />
              {errors.password && (
                <div className="text-red-500 text-sm mt-1">{errors.password}</div>
              )}
            </div>

            <div className="flex space-x-2 pt-4">
              <Button onClick={validateForm}>验证表单</Button>
              <Button variant="outline" onClick={resetForm}>重置</Button>
            </div>
          </div>
        </ExampleBlock>

        <ApiTable title="Input API" data={inputApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">输入框类型</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>text</strong>：默认的文本输入框</li>
                <li>• <strong>password</strong>：密码输入框，输入内容会被遮盖</li>
                <li>• <strong>email</strong>：邮箱输入框，会进行邮箱格式验证</li>
                <li>• <strong>number</strong>：数字输入框，只能输入数字</li>
                <li>• <strong>tel</strong>：电话输入框，用于电话号码输入</li>
                <li>• <strong>url</strong>：URL 输入框，用于网址输入</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">使用建议</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 合理使用占位符文字，提供输入提示</li>
                <li>• 对于必填字段，要有明确的标识</li>
                <li>• 提供实时的输入验证反馈</li>
                <li>• 错误信息要清晰明确，帮助用户修正输入</li>
                <li>• 考虑移动端的输入体验，选择合适的键盘类型</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Components() {
  const [activeComponent, setActiveComponent] = useState('button');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'button':
        return <ButtonDocs />;
      case 'card':
        return <CardDocs />;
      case 'input':
        return <InputDocs />;
      default:
        return (
          <div className="text-center py-20">
            <h2 className="text-xl text-gray-500">选择一个组件查看文档</h2>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">UI</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Components</span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  首页
                </Link>
                <Link href="/components" className="text-blue-600 font-medium">
                  组件
                </Link>
                <Link href="/guide" className="text-gray-600 hover:text-gray-900 transition-colors">
                  指南
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="搜索组件..." 
                  className="bg-transparent border-none outline-none text-sm w-32"
                />
              </div>
              <a 
                href="https://github.com" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* 左侧导航 */}
        <ComponentMenu 
          activeComponent={activeComponent} 
          onComponentChange={setActiveComponent} 
        />

        {/* 主内容区域 */}
        <div className="flex-1 max-w-none">
          <div className="max-w-4xl mx-auto p-8">
            {renderComponent()}
          </div>
        </div>
      </div>
    </div>
  );
} 