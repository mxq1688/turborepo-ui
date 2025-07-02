import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Input } from '@ui-lib/ui-react'

// 国际化文本
const i18nTexts = {
  en: {
    title: 'Components/Input',
    description: 'A versatile input component for text entry with various states and configurations.',
    placeholder: 'Enter text...',
    email: 'Enter email',
    password: 'Enter password',
    search: 'Search...',
    disabled: 'Disabled input',
    readonly: 'Readonly input'
  },
  zh: {
    title: '组件/输入框',
    description: '多功能输入组件，支持文本输入和各种状态配置。',
    placeholder: '请输入文本...',
    email: '请输入邮箱',
    password: '请输入密码',
    search: '搜索...',
    disabled: '禁用输入框',
    readonly: '只读输入框'
  }
}

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: i18nTexts.en.description,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number'],
      description: 'Input type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Input size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Whether the input is readonly',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder text',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Input value',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: i18nTexts.en.placeholder,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default input component for general text entry.',
      },
    },
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: i18nTexts.en.email,
  },
  parameters: {
    docs: {
      description: {
        story: 'Email input with built-in validation.',
      },
    },
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: i18nTexts.en.password,
  },
  parameters: {
    docs: {
      description: {
        story: 'Password input that masks the entered text.',
      },
    },
  },
}

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: i18nTexts.en.search,
  },
  parameters: {
    docs: {
      description: {
        story: 'Search input for search functionality.',
      },
    },
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small input',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size input for compact interfaces.',
      },
    },
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large input',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size input for prominent forms.',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: i18nTexts.en.disabled,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled input that cannot be interacted with.',
      },
    },
  },
}

export const Readonly: Story = {
  args: {
    readonly: true,
    value: i18nTexts.en.readonly,
  },
  parameters: {
    docs: {
      description: {
        story: 'Readonly input that displays value but cannot be edited.',
      },
    },
  },
}

export const WithValue: Story = {
  args: {
    value: 'Pre-filled value',
    placeholder: 'This won\'t show',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with a pre-filled value.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: (args, { globals }) => {
    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Small</label>
          <Input size="sm" placeholder="Small input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Medium (Default)</label>
          <Input size="md" placeholder="Medium input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Large</label>
          <Input size="lg" placeholder="Large input" />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'All input sizes displayed together for comparison.',
      },
    },
  },
}

export const AllTypes: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    return (
      <div className="space-y-4 w-80">
        <div>
          <label className="block text-sm font-medium mb-1">Text</label>
          <Input type="text" placeholder={texts.placeholder} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input type="email" placeholder={texts.email} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <Input type="password" placeholder={texts.password} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Search</label>
          <Input type="search" placeholder={texts.search} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tel</label>
          <Input type="tel" placeholder="+1 (555) 123-4567" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">URL</label>
          <Input type="url" placeholder="https://example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Number</label>
          <Input type="number" placeholder="42" />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'All input types displayed together.',
      },
    },
  },
}

export const InteractiveExample: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const [values, setValues] = useState({
      text: '',
      email: '',
      search: ''
    })
    
    const [showValues, setShowValues] = useState(false)
    
    return (
      <div className="space-y-4 w-80">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <Input
            value={values.text}
            onChange={(e) => setValues(prev => ({ ...prev, text: e.target.value }))}
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            type="email"
            value={values.email}
            onChange={(e) => setValues(prev => ({ ...prev, email: e.target.value }))}
            placeholder={texts.email}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Search</label>
          <Input
            type="search"
            value={values.search}
            onChange={(e) => setValues(prev => ({ ...prev, search: e.target.value }))}
            placeholder={texts.search}
          />
        </div>
        
        <div className="pt-4 border-t">
          <button
            onClick={() => setShowValues(!showValues)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {showValues ? 'Hide' : 'Show'} Values
          </button>
          
          {showValues && (
            <div className="mt-2 p-3 bg-gray-50 rounded text-sm">
              <div><strong>Name:</strong> "{values.text}"</div>
              <div><strong>Email:</strong> "{values.email}"</div>
              <div><strong>Search:</strong> "{values.search}"</div>
            </div>
          )}
        </div>
        
        <div className="text-sm text-gray-600">
          {locale === 'zh' 
            ? '在输入框中输入内容，然后点击显示值查看结果。' 
            : 'Type in the inputs above and click "Show Values" to see the results.'}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing real-time input handling.',
      },
    },
  },
}

export const ValidationStates: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    
    return (
      <div className="space-y-4 w-80">
        <div>
          <label className="block text-sm font-medium mb-1 text-green-700">Valid Input</label>
          <Input
            value="valid@example.com"
            className="border-green-500 focus:border-green-500 focus:ring-green-500"
          />
          <div className="text-sm text-green-600 mt-1">✓ Email is valid</div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-red-700">Invalid Input</label>
          <Input
            value="invalid-email"
            className="border-red-500 focus:border-red-500 focus:ring-red-500"
          />
          <div className="text-sm text-red-600 mt-1">✗ Please enter a valid email</div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-yellow-700">Warning Input</label>
          <Input
            value="short"
            className="border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500"
          />
          <div className="text-sm text-yellow-600 mt-1">⚠ Password should be longer</div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Input components with different validation states.',
      },
    },
  },
} 