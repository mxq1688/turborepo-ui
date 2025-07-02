import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Table, Button } from '@ui-lib/ui-react'

// 国际化文本
const i18nTexts = {
  en: {
    title: 'Components/Table',
    description: 'A flexible and powerful table component for displaying structured data with sorting, pagination, and custom rendering.',
    name: 'Name',
    age: 'Age',
    address: 'Address',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    delete: 'Delete',
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending'
  },
  zh: {
    title: '组件/表格',
    description: '灵活强大的表格组件，用于显示结构化数据，支持排序、分页和自定义渲染。',
    name: '姓名',
    age: '年龄',
    address: '地址',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    delete: '删除',
    active: '正常',
    inactive: '禁用',
    pending: '待审核'
  }
}

// 示例数据
const basicData = [
  { id: 1, name: 'John Doe', age: 32, address: 'New York No. 1 Lake Park' },
  { id: 2, name: 'Jane Smith', age: 42, address: 'London No. 1 Lake Park' },
  { id: 3, name: 'Bob Johnson', age: 32, address: 'Sidney No. 1 Lake Park' },
  { id: 4, name: 'Alice Brown', age: 28, address: 'Paris No. 1 Lake Park' },
]

const statusData = [
  { id: 1, name: 'John Doe', age: 32, address: 'New York No. 1 Lake Park', status: 'active' },
  { id: 2, name: 'Jane Smith', age: 42, address: 'London No. 1 Lake Park', status: 'inactive' },
  { id: 3, name: 'Bob Johnson', age: 32, address: 'Sidney No. 1 Lake Park', status: 'pending' },
  { id: 4, name: 'Alice Brown', age: 28, address: 'Paris No. 1 Lake Park', status: 'active' },
]

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible and powerful table component for displaying structured data with sorting, pagination, and custom rendering capabilities. Supports internationalization and responsive design.',
      },
      page: () => (
        <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
          <h1 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: 'bold' }}>Table Component</h1>
          <p style={{ marginBottom: '24px', color: '#666', lineHeight: '1.6' }}>
            The Table component provides a powerful and flexible way to display structured data. 
            It supports sorting, custom rendering, loading states, and various styling options.
          </p>
          
          <h2 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 'semibold' }}>Features</h2>
          <ul style={{ marginBottom: '24px', paddingLeft: '20px', lineHeight: '1.8' }}>
            <li>🔄 <strong>Sortable columns</strong> - Click headers to sort data</li>
            <li>🎨 <strong>Custom rendering</strong> - Custom cell content and formatting</li>
            <li>📱 <strong>Responsive design</strong> - Works on all screen sizes</li>
            <li>⚡ <strong>Loading states</strong> - Built-in loading indicators</li>
            <li>🌈 <strong>Multiple styles</strong> - Bordered, striped, and hover effects</li>
            <li>📏 <strong>Size variants</strong> - Small, medium, and large sizes</li>
          </ul>

          <h2 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 'semibold' }}>Usage</h2>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '16px', 
            borderRadius: '8px', 
            overflow: 'auto',
            fontSize: '14px',
            marginBottom: '24px'
          }}>
{`import { Table } from '@ui-lib/ui-react'

const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'address', title: 'Address', dataIndex: 'address' },
]

const data = [
  { id: 1, name: 'John Doe', age: 32, address: 'New York' },
  { id: 2, name: 'Jane Smith', age: 42, address: 'London' },
]

<Table columns={columns} dataSource={data} />`}
          </pre>

          <p style={{ color: '#666', fontSize: '14px' }}>
            👉 Explore the stories below to see different table configurations and features.
          </p>
        </div>
      ),
    },
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      description: 'Table column configuration',
      table: {
        type: { summary: 'TableColumn[]' },
        defaultValue: { summary: '[]' },
      },
    },
    dataSource: {
      description: 'Data array',
      table: {
        type: { summary: 'any[]' },
        defaultValue: { summary: '[]' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    bordered: {
      control: 'boolean',
      description: 'Show table borders',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    striped: {
      control: 'boolean',
      description: 'Enable striped rows',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hoverable: {
      control: 'boolean',
      description: 'Enable row hover effect',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'middle', 'large'],
      description: 'Table size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'middle' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args, { globals }) => {
    const { columns: _columns, dataSource: _dataSource, ...restArgs } = args
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const columns = [
      { key: 'name', title: texts.name, dataIndex: 'name' },
      { key: 'age', title: texts.age, dataIndex: 'age' },
      { key: 'address', title: texts.address, dataIndex: 'address' },
    ]
    
    return <Table {...restArgs} columns={columns} dataSource={basicData} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic table with simple data display.',
      },
    },
  },
}

export const Sortable: Story = {
  render: (args, { globals }) => {
    const { columns: _columns, dataSource: _dataSource, ...restArgs } = args
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const columns = [
      { key: 'name', title: texts.name, dataIndex: 'name', sortable: true },
      { key: 'age', title: texts.age, dataIndex: 'age', sortable: true },
      { key: 'address', title: texts.address, dataIndex: 'address' },
    ]
    
    return <Table {...restArgs} columns={columns} dataSource={basicData} bordered />
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with sortable columns. Click column headers to sort.',
      },
    },
  },
}

export const CustomRendering: Story = {
  render: (args, { globals }) => {
    const { columns: _columns, dataSource: _dataSource, ...restArgs } = args
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const statusConfig = {
      active: { color: 'bg-green-100 text-green-800', text: texts.active },
      inactive: { color: 'bg-red-100 text-red-800', text: texts.inactive },
      pending: { color: 'bg-yellow-100 text-yellow-800', text: texts.pending },
    }
    
    const columns = [
      { key: 'name', title: texts.name, dataIndex: 'name' },
      { key: 'age', title: texts.age, dataIndex: 'age' },
      { 
        key: 'status', 
        title: texts.status, 
        dataIndex: 'status',
        render: (status: string) => {
          const config = statusConfig[status as keyof typeof statusConfig]
          return (
            <span className={`px-2 py-1 text-xs rounded-full ${config.color}`}>
              {config.text}
            </span>
          )
        }
      },
      {
        key: 'actions',
        title: texts.actions,
        render: (_, record: any) => (
          <div className="space-x-2">
            <Button size="sm" variant="outline" onClick={() => alert(`Edit ${record.name}`)}>
              {texts.edit}
            </Button>
            <Button size="sm" variant="outline" onClick={() => alert(`Delete ${record.name}`)}>
              {texts.delete}
            </Button>
          </div>
        )
      }
    ]
    
    return <Table {...restArgs} columns={columns} dataSource={statusData} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with custom rendering for status badges and action buttons.',
      },
    },
  },
}

export const Bordered: Story = {
  render: (args, { globals }) => {
    const { columns: _columns, dataSource: _dataSource, ...restArgs } = args
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const columns = [
      { key: 'name', title: texts.name, dataIndex: 'name' },
      { key: 'age', title: texts.age, dataIndex: 'age' },
      { key: 'address', title: texts.address, dataIndex: 'address' },
    ]
    
    return <Table {...restArgs} columns={columns} dataSource={basicData} bordered />
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with borders around cells.',
      },
    },
  },
}

export const Striped: Story = {
  render: (args, { globals }) => {
    const { columns: _columns, dataSource: _dataSource, ...restArgs } = args
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const columns = [
      { key: 'name', title: texts.name, dataIndex: 'name' },
      { key: 'age', title: texts.age, dataIndex: 'age' },
      { key: 'address', title: texts.address, dataIndex: 'address' },
    ]
    
    return <Table {...restArgs} columns={columns} dataSource={basicData} striped />
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with alternating row colors for better readability.',
      },
    },
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args, { globals }) => {
    const { columns: _columns, dataSource: _dataSource, ...restArgs } = args
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const columns = [
      { key: 'name', title: texts.name, dataIndex: 'name' },
      { key: 'age', title: texts.age, dataIndex: 'age' },
      { key: 'address', title: texts.address, dataIndex: 'address' },
    ]
    
    return <Table {...restArgs} columns={columns} dataSource={basicData} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Table in loading state with spinner.',
      },
    },
  },
}

export const EmptyState: Story = {
  render: (args, { globals }) => {
    const { columns: _columns, dataSource: _dataSource, ...restArgs } = args
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const columns = [
      { key: 'name', title: texts.name, dataIndex: 'name' },
      { key: 'age', title: texts.age, dataIndex: 'age' },
      { key: 'address', title: texts.address, dataIndex: 'address' },
    ]
    
    return <Table {...restArgs} columns={columns} dataSource={[]} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with no data showing empty state.',
      },
    },
  },
}

export const DifferentSizes: Story = {
  render: (args, { globals }) => {
    const { columns: _columns, dataSource: _dataSource, ...restArgs } = args
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const columns = [
      { key: 'name', title: texts.name, dataIndex: 'name' },
      { key: 'age', title: texts.age, dataIndex: 'age' },
      { key: 'address', title: texts.address, dataIndex: 'address' },
    ]
    
    const smallData = basicData.slice(0, 2)
    
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4">小尺寸</h3>
          <Table columns={columns} dataSource={smallData} size="small" />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">中等尺寸（默认）</h3>
          <Table columns={columns} dataSource={smallData} size="middle" />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">大尺寸</h3>
          <Table columns={columns} dataSource={smallData} size="large" />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different table sizes.',
      },
    },
  },
}

export const InteractiveExample: Story = {
  render: (args, { globals }) => {
    const { columns: _columns, dataSource: _dataSource, ...restArgs } = args
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const [data, setData] = useState(statusData)
    const [loading, setLoading] = useState(false)
    
    const handleDelete = (id: number) => {
      setLoading(true)
      setTimeout(() => {
        setData(prev => prev.filter(item => item.id !== id))
        setLoading(false)
      }, 500)
    }
    
    const handleToggleStatus = (id: number) => {
      setData(prev => prev.map(item => 
        item.id === id 
          ? { ...item, status: item.status === 'active' ? 'inactive' : 'active' }
          : item
      ))
    }
    
    const columns = [
      { key: 'name', title: texts.name, dataIndex: 'name', sortable: true },
      { key: 'age', title: texts.age, dataIndex: 'age', sortable: true },
      { 
        key: 'status', 
        title: texts.status, 
        dataIndex: 'status',
        render: (status: string, record: any) => {
          const statusConfig = {
            active: { color: 'bg-green-100 text-green-800', text: texts.active },
            inactive: { color: 'bg-red-100 text-red-800', text: texts.inactive },
            pending: { color: 'bg-yellow-100 text-yellow-800', text: texts.pending },
          }
          const config = statusConfig[status as keyof typeof statusConfig]
          return (
            <button 
              onClick={() => handleToggleStatus(record.id)}
              className={`px-2 py-1 text-xs rounded-full cursor-pointer hover:opacity-80 ${config.color}`}
            >
              {config.text}
            </button>
          )
        }
      },
      {
        key: 'actions',
        title: texts.actions,
        render: (_, record: any) => (
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => handleDelete(record.id)}
            disabled={loading}
          >
            {texts.delete}
          </Button>
        )
      }
    ]
    
    return (
      <div>
        <Table 
          {...restArgs}
          columns={columns} 
          dataSource={data} 
          loading={loading}
          bordered
          hoverable
        />
        <div className="mt-4 text-sm text-gray-600">
          {locale === 'zh' 
            ? '点击状态可以切换，点击删除按钮可以删除行。' 
            : 'Click status to toggle, click delete button to remove rows.'}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive table with editable status and deletable rows.',
      },
    },
  },
} 