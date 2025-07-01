import React, { useState } from 'react';
import { Checkbox } from '@ui-lib/ui-react';

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

const CheckboxDocs: React.FC = () => {
  const [basicChecked, setBasicChecked] = useState(false);
  const [checkboxGroup, setCheckboxGroup] = useState<string[]>(['apple']);
  const [selectAll, setSelectAll] = useState(false);

  const options = ['apple', 'banana', 'orange', 'grape'];

  const handleGroupChange = (value: string, checked: boolean) => {
    if (checked) {
      setCheckboxGroup([...checkboxGroup, value]);
    } else {
      setCheckboxGroup(checkboxGroup.filter(item => item !== value));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setCheckboxGroup([...options]);
    } else {
      setCheckboxGroup([]);
    }
  };

  const checkboxApiData = [
    { property: 'checked', description: '指定当前是否选中', type: 'boolean', default: 'false' },
    { property: 'onChange', description: '变化时回调函数', type: '(event: ChangeEvent) => void', default: '-' },
    { property: 'disabled', description: '失效状态', type: 'boolean', default: 'false' },
    { property: 'indeterminate', description: '设置 indeterminate 状态，只负责样式控制', type: 'boolean', default: 'false' },
    { property: 'label', description: '复选框标签', type: 'string', default: '-' },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Checkbox 多选框</h1>
        <p className="text-lg text-gray-600">多选框。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 在一组可选项中进行多项选择时。</li>
            <li>• 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基础用法"
          description="简单的 checkbox。"
          code={`import { Checkbox } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function BasicCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="同意用户协议"
      />
      <div className="text-sm text-gray-500">
        状态: {checked ? '已选中' : '未选中'}
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Checkbox
              checked={basicChecked}
              onChange={(e) => setBasicChecked(e.target.checked)}
              label="同意用户协议"
            />
            <div className="text-sm text-gray-500">
              状态: {basicChecked ? '已选中' : '未选中'}
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="多选框组"
          description="一组互相关联的 Checkbox。"
          code={`import { Checkbox } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function CheckboxGroup() {
  const [checkboxGroup, setCheckboxGroup] = useState(['apple']);
  const options = ['apple', 'banana', 'orange', 'grape'];

  const handleChange = (value, checked) => {
    if (checked) {
      setCheckboxGroup([...checkboxGroup, value]);
    } else {
      setCheckboxGroup(checkboxGroup.filter(item => item !== value));
    }
  };

  return (
    <div>
      <div className="mb-4 font-medium text-gray-900">请选择你喜欢的水果：</div>
      <div className="space-y-3">
        {options.map((fruit) => (
          <Checkbox
            key={fruit}
            checked={checkboxGroup.includes(fruit)}
            onChange={(e) => handleChange(fruit, e.target.checked)}
            label={fruit}
          />
        ))}
      </div>
      <div className="text-sm text-gray-500 mt-4">
        已选择: {checkboxGroup.join(', ') || '(无)'}
      </div>
    </div>
  );
}`}
        >
          <div>
            <div className="mb-4 font-medium text-gray-900">请选择你喜欢的水果：</div>
            <div className="space-y-3">
              {options.map((fruit) => (
                <Checkbox
                  key={fruit}
                  checked={checkboxGroup.includes(fruit)}
                  onChange={(e) => handleGroupChange(fruit, e.target.checked)}
                  label={fruit}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 mt-4">
              已选择: {checkboxGroup.join(', ') || '(无)'}
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="全选"
          description="实现全选效果。"
          code={`import { Checkbox } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function SelectAllCheckbox() {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxGroup, setCheckboxGroup] = useState([]);
  const options = ['apple', 'banana', 'orange', 'grape'];

  const handleSelectAll = (checked) => {
    setSelectAll(checked);
    if (checked) {
      setCheckboxGroup([...options]);
    } else {
      setCheckboxGroup([]);
    }
  };

  return (
    <div>
      <div className="border-b border-gray-200 pb-3 mb-3">
        <Checkbox
          checked={selectAll}
          indeterminate={checkboxGroup.length > 0 && checkboxGroup.length < options.length}
          onChange={(e) => handleSelectAll(e.target.checked)}
          label="全选"
        />
      </div>
      
      <div className="space-y-3">
        {options.map((fruit) => (
          <Checkbox
            key={fruit}
            checked={checkboxGroup.includes(fruit)}
            onChange={(e) => handleChange(fruit, e.target.checked)}
            label={fruit}
          />
        ))}
      </div>
    </div>
  );
}`}
        >
          <div>
            <div className="border-b border-gray-200 pb-3 mb-3">
              <Checkbox
                checked={selectAll}
                indeterminate={checkboxGroup.length > 0 && checkboxGroup.length < options.length}
                onChange={(e) => handleSelectAll(e.target.checked)}
                label="全选"
              />
            </div>
            
            <div className="space-y-3">
              {options.map((fruit) => (
                <Checkbox
                  key={fruit}
                  checked={checkboxGroup.includes(fruit)}
                  onChange={(e) => handleGroupChange(fruit, e.target.checked)}
                  label={fruit}
                />
              ))}
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="禁用状态"
          description="checkbox 不可用。"
          code={`import { Checkbox } from '@ui-lib/ui-react';

export default function DisabledCheckbox() {
  return (
    <div className="space-y-4">
      <Checkbox
        checked={false}
        disabled
        label="禁用未选中"
      />
      <Checkbox
        checked={true}
        disabled
        label="禁用已选中"
      />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Checkbox
              checked={false}
              disabled
              label="禁用未选中"
            />
            <Checkbox
              checked={true}
              disabled
              label="禁用已选中"
            />
          </div>
        </ExampleBlock>

        <ApiTable title="Checkbox API" data={checkboxApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">使用场景</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>多选</strong>：从一组选项中选择多个</li>
                <li>• <strong>确认</strong>：确认某个条件或协议</li>
                <li>• <strong>开关</strong>：控制某个功能的开启关闭</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">vs Switch</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Checkbox</strong>：用于状态标记，通常需要配合提交操作</li>
                <li>• <strong>Switch</strong>：用于即时生效的状态切换</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxDocs; 