import React from 'react';
import { Table, Button } from '@ui-lib/ui-react';

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

const TableDocs: React.FC = () => {
  // 基础表格数据
  const basicData = [
    { id: 1, name: '张三', age: 32, address: '西湖区湖底公园1号' },
    { id: 2, name: '李四', age: 42, address: '西湖区湖底公园2号' },
    { id: 3, name: '王五', age: 28, address: '西湖区湖底公园3号' },
  ];

  const basicColumns = [
    { key: 'name', title: '姓名', dataIndex: 'name' },
    { key: 'age', title: '年龄', dataIndex: 'age' },
    { key: 'address', title: '住址', dataIndex: 'address' },
  ];

  // 可排序表格数据
  const sortableData = [
    { id: 1, name: '张三', age: 32, address: '西湖区湖底公园1号', score: 98 },
    { id: 2, name: '李四', age: 42, address: '西湖区湖底公园2号', score: 85 },
    { id: 3, name: '王五', age: 28, address: '西湖区湖底公园3号', score: 92 },
    { id: 4, name: '赵六', age: 35, address: '西湖区湖底公园4号', score: 88 },
  ];

  const sortableColumns = [
    { key: 'name', title: '姓名', dataIndex: 'name' },
    { key: 'age', title: '年龄', dataIndex: 'age', sortable: true },
    { key: 'score', title: '分数', dataIndex: 'score', sortable: true },
    { key: 'address', title: '住址', dataIndex: 'address' },
  ];

  // 自定义渲染表格数据
  const customData = [
    { id: 1, name: '张三', age: 32, address: '西湖区湖底公园1号', status: 'active' },
    { id: 2, name: '李四', age: 42, address: '西湖区湖底公园2号', status: 'inactive' },
    { id: 3, name: '王五', age: 28, address: '西湖区湖底公园3号', status: 'pending' },
  ];

  const customColumns = [
    { key: 'name', title: '姓名', dataIndex: 'name' },
    { key: 'age', title: '年龄', dataIndex: 'age' },
    { 
      key: 'status', 
      title: '状态', 
      dataIndex: 'status',
      render: (status: string) => {
        const statusConfig = {
          active: { color: 'bg-green-100 text-green-800', text: '正常' },
          inactive: { color: 'bg-red-100 text-red-800', text: '禁用' },
          pending: { color: 'bg-yellow-100 text-yellow-800', text: '待审核' },
        };
        const config = statusConfig[status as keyof typeof statusConfig];
        return (
          <span className={`px-2 py-1 text-xs rounded-full ${config.color}`}>
            {config.text}
          </span>
        );
      }
    },
    {
      key: 'actions',
      title: '操作',
      render: (_, record: any) => (
        <div className="space-x-2">
          <Button size="sm" variant="outline" onClick={() => alert(`编辑 ${record.name}`)}>
            编辑
          </Button>
          <Button size="sm" variant="outline" onClick={() => alert(`删除 ${record.name}`)}>
            删除
          </Button>
        </div>
      )
    }
  ];

  const tableApiData = [
    { property: 'columns', description: '表格列的配置描述', type: 'TableColumn[]', default: '[]' },
    { property: 'dataSource', description: '数据数组', type: 'any[]', default: '[]' },
    { property: 'rowKey', description: '表格行 key 的取值', type: 'string | (record) => string', default: 'id' },
    { property: 'loading', description: '页面是否加载中', type: 'boolean', default: 'false' },
    { property: 'bordered', description: '是否展示外边框和列边框', type: 'boolean', default: 'false' },
    { property: 'striped', description: '是否显示斑马纹', type: 'boolean', default: 'false' },
    { property: 'hoverable', description: '是否显示 hover 效果', type: 'boolean', default: 'true' },
    { property: 'size', description: '表格大小', type: "'small' | 'middle' | 'large'", default: "'middle'" },
    { property: 'pagination', description: '分页器配置', type: 'boolean | object', default: 'false' },
  ];

  const columnApiData = [
    { property: 'key', description: '列数据在数据项中对应的路径', type: 'string', default: '-' },
    { property: 'title', description: '列头显示文字', type: 'string', default: '-' },
    { property: 'dataIndex', description: '列数据在数据项中对应的路径', type: 'string', default: '-' },
    { property: 'width', description: '列宽度', type: 'string | number', default: '-' },
    { property: 'align', description: '设置列的对齐方式', type: "'left' | 'center' | 'right'", default: "'left'" },
    { property: 'sortable', description: '是否可排序', type: 'boolean', default: 'false' },
    { property: 'render', description: '生成复杂数据的渲染函数', type: '(value, record, index) => ReactNode', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Table 表格</h1>
        <p className="text-lg text-gray-600">展示行列数据。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 当有大量结构化的数据需要展现时。</li>
            <li>• 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基础表格"
          description="简单的表格，最后一列是各种操作。"
          code={`import { Table } from '@ui-lib/ui-react';

export default function BasicTable() {
  const dataSource = [
    { id: 1, name: '张三', age: 32, address: '西湖区湖底公园1号' },
    { id: 2, name: '李四', age: 42, address: '西湖区湖底公园2号' },
    { id: 3, name: '王五', age: 28, address: '西湖区湖底公园3号' },
  ];

  const columns = [
    { key: 'name', title: '姓名', dataIndex: 'name' },
    { key: 'age', title: '年龄', dataIndex: 'age' },
    { key: 'address', title: '住址', dataIndex: 'address' },
  ];

  return (
    <Table 
      columns={columns} 
      dataSource={dataSource} 
    />
  );
}`}
        >
          <Table 
            columns={basicColumns} 
            dataSource={basicData} 
          />
        </ExampleBlock>

        <ExampleBlock
          title="可排序"
          description="对某一列数据进行排序，通过指定列的 sortable 属性来实现。"
          code={`import { Table } from '@ui-lib/ui-react';

export default function SortableTable() {
  const dataSource = [
    { id: 1, name: '张三', age: 32, address: '西湖区湖底公园1号', score: 98 },
    { id: 2, name: '李四', age: 42, address: '西湖区湖底公园2号', score: 85 },
    { id: 3, name: '王五', age: 28, address: '西湖区湖底公园3号', score: 92 },
    { id: 4, name: '赵六', age: 35, address: '西湖区湖底公园4号', score: 88 },
  ];

  const columns = [
    { key: 'name', title: '姓名', dataIndex: 'name' },
    { key: 'age', title: '年龄', dataIndex: 'age', sortable: true },
    { key: 'score', title: '分数', dataIndex: 'score', sortable: true },
    { key: 'address', title: '住址', dataIndex: 'address' },
  ];

  return (
    <Table 
      columns={columns} 
      dataSource={dataSource} 
      bordered
    />
  );
}`}
        >
          <Table 
            columns={sortableColumns} 
            dataSource={sortableData} 
            bordered
          />
        </ExampleBlock>

        <ExampleBlock
          title="自定义渲染"
          description="通过 render 函数，可以自定义列的显示内容。"
          code={`import { Table, Button } from '@ui-lib/ui-react';

export default function CustomTable() {
  const dataSource = [
    { id: 1, name: '张三', age: 32, address: '西湖区湖底公园1号', status: 'active' },
    { id: 2, name: '李四', age: 42, address: '西湖区湖底公园2号', status: 'inactive' },
    { id: 3, name: '王五', age: 28, address: '西湖区湖底公园3号', status: 'pending' },
  ];

  const columns = [
    { key: 'name', title: '姓名', dataIndex: 'name' },
    { key: 'age', title: '年龄', dataIndex: 'age' },
    { 
      key: 'status', 
      title: '状态', 
      dataIndex: 'status',
      render: (status) => {
        const statusConfig = {
          active: { color: 'bg-green-100 text-green-800', text: '正常' },
          inactive: { color: 'bg-red-100 text-red-800', text: '禁用' },
          pending: { color: 'bg-yellow-100 text-yellow-800', text: '待审核' },
        };
        const config = statusConfig[status];
        return (
          <span className={\`px-2 py-1 text-xs rounded-full \${config.color}\`}>
            {config.text}
          </span>
        );
      }
    },
    {
      key: 'actions',
      title: '操作',
      render: (_, record) => (
        <div className="space-x-2">
          <Button size="sm" variant="outline">编辑</Button>
          <Button size="sm" variant="outline">删除</Button>
        </div>
      )
    }
  ];

  return (
    <Table 
      columns={columns} 
      dataSource={dataSource} 
      striped
      hoverable
    />
  );
}`}
        >
          <Table 
            columns={customColumns} 
            dataSource={customData} 
            striped
            hoverable
          />
        </ExampleBlock>

        <ApiTable title="Table API" data={tableApiData} />
        <ApiTable title="Column API" data={columnApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">表格样式</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>bordered</strong>：适用于需要明确分隔数据的场景</li>
                <li>• <strong>striped</strong>：斑马纹有助于用户阅读大量数据</li>
                <li>• <strong>hoverable</strong>：鼠标悬停效果提供更好的交互体验</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">性能建议</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 大量数据时建议使用分页</li>
                <li>• 避免在 render 函数中进行复杂计算</li>
                <li>• 合理设置 rowKey 以优化渲染性能</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableDocs; 