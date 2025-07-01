import React, { useState } from 'react';
import { Select } from '@ui-lib/ui-react';

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

const SelectDocs: React.FC = () => {
  const [basicValue, setBasicValue] = useState('');
  const [disabledValue, setDisabledValue] = useState('');
  const [errorValue, setErrorValue] = useState('');

  const basicOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' }
  ];

  const selectApiData = [
    { property: 'options', description: '数据化配置选项内容', type: 'SelectOption[]', default: '[]' },
    { property: 'value', description: '指定当前选中的条目', type: 'string', default: '-' },
    { property: 'onChange', description: '选中 option 时调用此函数', type: '(value: string) => void', default: '-' },
    { property: 'placeholder', description: '选择框默认文字', type: 'string', default: '请选择...' },
    { property: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
    { property: 'label', description: '标签文本', type: 'string', default: '-' },
    { property: 'error', description: '错误信息', type: 'string', default: '-' },
  ];

  const optionApiData = [
    { property: 'value', description: '选项的值', type: 'string', default: '-' },
    { property: 'label', description: '选项显示的内容', type: 'string', default: '-' },
    { property: 'disabled', description: '是否禁用该选项', type: 'boolean', default: 'false' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Select 选择器</h1>
        <p className="text-lg text-gray-600">下拉选择器，弹出一个下拉菜单给用户选择操作。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 弹出一个下拉菜单给用户选择操作，用于代替原生的 select 标签。</li>
            <li>• 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。</li>
            <li>• 当选项很多时，使用下拉菜单展示并选择内容。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基础用法"
          description="最简单的用法。"
          code={`import { Select } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function BasicSelect() {
  const [value, setValue] = useState('');
  
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' }
  ];

  return (
    <div className="w-64">
      <Select
        options={options}
        value={value}
        onChange={setValue}
        placeholder="请选择框架"
        label="选择框架"
      />
      <div className="text-sm text-gray-500 mt-2">
        已选择: {value || '(无)'}
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div className="w-64">
              <Select
                options={basicOptions}
                value={basicValue}
                onChange={setBasicValue}
                placeholder="请选择框架"
                label="选择框架"
              />
              <div className="text-sm text-gray-500 mt-2">
                已选择: {basicValue || '(无)'}
              </div>
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="禁用状态"
          description="选择器不可用状态。"
          code={`import { Select } from '@ui-lib/ui-react';

export default function DisabledSelect() {
  const options = [
    { value: 'option1', label: '选项一' },
    { value: 'option2', label: '选项二' }
  ];

  return (
    <div className="w-64">
      <Select
        options={options}
        value=""
        onChange={() => {}}
        placeholder="禁用状态"
        label="禁用选择器"
        disabled
      />
    </div>
  );
}`}
        >
          <div className="w-64">
            <Select
              options={[
                { value: 'option1', label: '选项一' },
                { value: 'option2', label: '选项二' }
              ]}
              value={disabledValue}
              onChange={setDisabledValue}
              placeholder="禁用状态"
              label="禁用选择器"
              disabled
            />
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="错误状态"
          description="表单校验失败的错误状态。"
          code={`import { Select } from '@ui-lib/ui-react';

export default function ErrorSelect() {
  const options = [
    { value: 'option1', label: '选项一' },
    { value: 'option2', label: '选项二' }
  ];

  return (
    <div className="w-64">
      <Select
        options={options}
        value=""
        onChange={() => {}}
        placeholder="请选择"
        label="必选项"
        error="请选择一个选项"
      />
    </div>
  );
}`}
        >
          <div className="w-64">
            <Select
              options={basicOptions}
              value={errorValue}
              onChange={setErrorValue}
              placeholder="请选择"
              label="必选项"
              error="请选择一个选项"
            />
          </div>
        </ExampleBlock>

        <ApiTable title="Select API" data={selectApiData} />
        <ApiTable title="Option API" data={optionApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">选项数量</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>少于 5 项</strong>：建议使用 Radio 单选框</li>
                <li>• <strong>5-15 项</strong>：适合使用 Select 下拉选择</li>
                <li>• <strong>超过 15 项</strong>：考虑添加搜索功能或分组</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">使用场景</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 表单中需要用户从预定义选项中选择</li>
                <li>• 需要节省页面空间时</li>
                <li>• 选项较多且不常用时</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDocs; 