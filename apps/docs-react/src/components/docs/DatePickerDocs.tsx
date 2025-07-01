import React, { useState } from 'react';
import { DatePicker } from '@ui-lib/ui-react';

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

const DatePickerDocs: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const datePickerApiData = [
    { property: 'value', description: '日期', type: 'Date | null', default: 'null' },
    { property: 'defaultValue', description: '默认日期', type: 'Date', default: '-' },
    { property: 'onChange', description: '时间发生变化的回调', type: '(date: Date | null) => void', default: '-' },
    { property: 'placeholder', description: '输入框提示文字', type: 'string', default: "'请选择日期'" },
    { property: 'disabled', description: '禁用', type: 'boolean', default: 'false' },
    { property: 'format', description: '设置日期格式', type: 'string', default: "'YYYY-MM-DD'" },
    { property: 'size', description: '输入框大小', type: "'large' | 'middle' | 'small'", default: "'middle'" },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">DatePicker 日期选择框</h1>
        <p className="text-lg text-gray-600">输入或选择日期的控件。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基本"
          description="最简单的用法，在浮层中可以选择或者输入日期。"
          code={`import { DatePicker } from '@ui-lib/ui-react';

export default function BasicDatePicker() {
  return (
    <div className="space-y-4">
      <DatePicker />
      <DatePicker placeholder="请选择生日" />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <DatePicker />
            <DatePicker placeholder="请选择生日" />
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="受控组件"
          description="value 和 onChange 需要配合使用。"
          code={`import { DatePicker } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function ControlledDatePicker() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="space-y-4">
      <DatePicker
        value={date}
        onChange={setDate}
        placeholder="选择日期"
      />
      <p className="text-sm text-gray-600">
        选择的日期: {date ? date.toLocaleDateString() : '未选择'}
      </p>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <DatePicker
              value={selectedDate}
              onChange={setSelectedDate}
              placeholder="选择日期"
            />
            <p className="text-sm text-gray-600">
              选择的日期: {selectedDate ? selectedDate.toLocaleDateString() : '未选择'}
            </p>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="三种大小"
          description="三种大小的输入框，大的用在表单中，中的为默认。"
          code={`import { DatePicker } from '@ui-lib/ui-react';

export default function SizeDatePicker() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm w-12">Large</span>
        <DatePicker size="large" />
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-sm w-12">Middle</span>
        <DatePicker />
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-sm w-12">Small</span>
        <DatePicker size="small" />
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm w-12">Large</span>
              <DatePicker size="large" />
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm w-12">Middle</span>
              <DatePicker />
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm w-12">Small</span>
              <DatePicker size="small" />
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="禁用"
          description="选择框的不可用状态。"
          code={`import { DatePicker } from '@ui-lib/ui-react';

export default function DisabledDatePicker() {
  return (
    <div className="space-y-4">
      <DatePicker disabled />
      <DatePicker disabled defaultValue={new Date()} />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <DatePicker disabled />
            <DatePicker disabled defaultValue={new Date()} />
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="日期格式"
          description="使用 format 属性，可以自定义日期显示格式。"
          code={`import { DatePicker } from '@ui-lib/ui-react';

export default function FormatDatePicker() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">YYYY-MM-DD (默认)</p>
        <DatePicker />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">YYYY/MM/DD</p>
        <DatePicker format="YYYY/MM/DD" />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">DD/MM/YYYY</p>
        <DatePicker format="DD/MM/YYYY" />
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">YYYY-MM-DD (默认)</p>
              <DatePicker />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">YYYY/MM/DD</p>
              <DatePicker format="YYYY/MM/DD" />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">DD/MM/YYYY</p>
              <DatePicker format="DD/MM/YYYY" />
            </div>
          </div>
        </ExampleBlock>

        <ApiTable title="DatePicker API" data={datePickerApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">格式选择</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>YYYY-MM-DD</strong>：国际标准格式，推荐使用</li>
                <li>• <strong>YYYY/MM/DD</strong>：常用的斜杠分隔格式</li>
                <li>• <strong>DD/MM/YYYY</strong>：欧洲常用格式</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">使用建议</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 在表单中使用时建议配置明确的标签</li>
                <li>• 对于生日等固定格式，可以设置 format 属性</li>
                <li>• 重要日期建议设置确认步骤</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePickerDocs; 