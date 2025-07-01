import React, { useState } from 'react';
import { Radio } from '@ui-lib/ui-react';

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

const RadioDocs: React.FC = () => {
  const [basicValue, setBasicValue] = useState('option1');
  const [groupValue, setGroupValue] = useState('apple');


  const radioApiData = [
    { property: 'checked', description: '指定当前是否选中', type: 'boolean', default: 'false' },
    { property: 'name', description: '输入框的 name 属性', type: 'string', default: '-' },
    { property: 'value', description: '根据 value 进行比较，判断是否选中', type: 'string', default: '-' },
    { property: 'onChange', description: '选项变化时的回调函数', type: '(event: ChangeEvent) => void', default: '-' },
    { property: 'disabled', description: '禁用状态', type: 'boolean', default: 'false' },
    { property: 'label', description: '单选框标签', type: 'string', default: '-' },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Radio 单选框</h1>
        <p className="text-lg text-gray-600">单选框。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 用于在多个备选项中选中单个状态。</li>
            <li>• 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基础用法"
          description="最简单的用法。"
          code={`import { Radio } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function BasicRadio() {
  const [value, setValue] = useState('option1');

  return (
    <div className="space-y-4">
      <Radio
        name="basic"
        value="option1"
        checked={value === 'option1'}
        onChange={(e) => setValue(e.target.value)}
        label="选项一"
      />
      <Radio
        name="basic"
        value="option2"
        checked={value === 'option2'}
        onChange={(e) => setValue(e.target.value)}
        label="选项二"
      />
      <Radio
        name="basic"
        value="option3"
        checked={value === 'option3'}
        onChange={(e) => setValue(e.target.value)}
        label="选项三"
      />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Radio
              name="basic"
              value="option1"
              checked={basicValue === 'option1'}
              onChange={(e) => setBasicValue(e.target.value)}
              label="选项一"
            />
            <Radio
              name="basic"
              value="option2"
              checked={basicValue === 'option2'}
              onChange={(e) => setBasicValue(e.target.value)}
              label="选项二"
            />
            <Radio
              name="basic"
              value="option3"
              checked={basicValue === 'option3'}
              onChange={(e) => setBasicValue(e.target.value)}
              label="选项三"
            />
            <div className="text-sm text-gray-500 mt-4">
              选中值: {basicValue}
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="单选组合"
          description="一组互斥的 Radio 配合使用。"
          code={`import { Radio } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function RadioGroup() {
  const [value, setValue] = useState('apple');

  const fruits = [
    { value: 'apple', label: '苹果' },
    { value: 'banana', label: '香蕉' },
    { value: 'orange', label: '橙子' },
    { value: 'grape', label: '葡萄' }
  ];

  return (
    <div>
      <div className="mb-4 font-medium text-gray-900">请选择你喜欢的水果：</div>
      <div className="space-y-3">
        {fruits.map((fruit) => (
          <Radio
            key={fruit.value}
            name="fruits"
            value={fruit.value}
            checked={value === fruit.value}
            onChange={(e) => setValue(e.target.value)}
            label={fruit.label}
          />
        ))}
      </div>
      <div className="text-sm text-gray-500 mt-4">
        已选择: {fruits.find(f => f.value === value)?.label}
      </div>
    </div>
  );
}`}
        >
          <div>
            <div className="mb-4 font-medium text-gray-900">请选择你喜欢的水果：</div>
            <div className="space-y-3">
              {[
                { value: 'apple', label: '苹果' },
                { value: 'banana', label: '香蕉' },
                { value: 'orange', label: '橙子' },
                { value: 'grape', label: '葡萄' }
              ].map((fruit) => (
                <Radio
                  key={fruit.value}
                  name="fruits"
                  value={fruit.value}
                  checked={groupValue === fruit.value}
                  onChange={(e) => setGroupValue(e.target.value)}
                  label={fruit.label}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 mt-4">
              已选择: {[
                { value: 'apple', label: '苹果' },
                { value: 'banana', label: '香蕉' },
                { value: 'orange', label: '橙子' },
                { value: 'grape', label: '葡萄' }
              ].find(f => f.value === groupValue)?.label}
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="禁用状态"
          description="单选框不可用。"
          code={`import { Radio } from '@ui-lib/ui-react';

export default function DisabledRadio() {
  return (
    <div className="space-y-4">
      <Radio
        name="disabled"
        value="disabled1"
        checked={false}
        disabled
        label="禁用未选中"
      />
      <Radio
        name="disabled"
        value="disabled2"
        checked={true}
        disabled
        label="禁用已选中"
      />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Radio
              name="disabled"
              value="disabled1"
              checked={false}
              disabled
              label="禁用未选中"
            />
            <Radio
              name="disabled"
              value="disabled2"
              checked={true}
              disabled
              label="禁用已选中"
            />
          </div>
        </ExampleBlock>

        <ApiTable title="Radio API" data={radioApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">何时使用</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>单选</strong>：用户只能从一组选项中选择一个</li>
                <li>• <strong>可见性</strong>：所有选项都应该可见，便于用户比较</li>
                <li>• <strong>选项数量</strong>：建议选项数量不超过 6 个</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">vs Select</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Radio</strong>：选项少且需要直观对比时使用</li>
                <li>• <strong>Select</strong>：选项多或需要节省空间时使用</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioDocs; 