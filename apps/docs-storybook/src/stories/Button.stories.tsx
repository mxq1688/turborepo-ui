import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '@ui-lib/ui-react'
import { getComponentText, getCurrentLanguage } from '../utils/i18n'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: getComponentText('button').description,
      },
      page: () => {
        const texts = getComponentText('button')
        return `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1>Button Component</h1>
            <p>${texts.description}</p>
            
            <h2>When to Use</h2>
            <ul>
              <li>To trigger an action or operation</li>
              <li>To submit forms</li>
              <li>To navigate to different sections</li>
              <li>To confirm or cancel operations</li>
            </ul>
            
            <h2>Design Principles</h2>
            <ul>
              <li><strong>Clear Purpose:</strong> Each button should have a clear, single purpose</li>
              <li><strong>Visual Hierarchy:</strong> Use variants to establish visual hierarchy</li>
              <li><strong>Consistency:</strong> Maintain consistent styling across the application</li>
              <li><strong>Accessibility:</strong> Ensure proper focus states and ARIA labels</li>
            </ul>
            
            <h2>Best Practices</h2>
            <ul>
              <li>Use primary buttons for the main action on a page</li>
              <li>Limit primary buttons to one per section</li>
              <li>Use descriptive text that clearly indicates the action</li>
              <li>Provide loading states for async operations</li>
            </ul>
          </div>
        `
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'outline', 'ghost'],
      description: getComponentText('button').variant,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: getComponentText('button').size,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: getComponentText('button').disabled,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Button content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when button is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: getComponentText('button').examples.default,
  },
  parameters: {
    docs: {
      description: {
        story: getComponentText('button').stories.default,
      },
    },
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: getComponentText('button').examples.primary,
  },
  parameters: {
    docs: {
      description: {
        story: getComponentText('button').stories.primary,
      },
    },
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: getComponentText('button').examples.secondary,
  },
  parameters: {
    docs: {
      description: {
        story: getComponentText('button').stories.secondary,
      },
    },
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: getComponentText('button').examples.outline,
  },
  parameters: {
    docs: {
      description: {
        story: getComponentText('button').stories.outline,
      },
    },
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: getComponentText('button').examples.ghost,
  },
  parameters: {
    docs: {
      description: {
        story: getComponentText('button').stories.ghost,
      },
    },
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: getComponentText('button').examples.small,
  },
  parameters: {
    docs: {
      description: {
        story: getComponentText('button').stories.small,
      },
    },
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: getComponentText('button').examples.large,
  },
  parameters: {
    docs: {
      description: {
        story: getComponentText('button').stories.large,
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: getComponentText('button').examples.disabled,
  },
  parameters: {
    docs: {
      description: {
        story: getComponentText('button').stories.disabled,
      },
    },
  },
}

export const AllVariants: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    const texts = getComponentText('button')
    
    return (
      <div className="flex gap-4 flex-wrap">
                 <Button>{texts.examples.default}</Button>
        <Button variant="primary">{texts.examples.primary}</Button>
        <Button variant="secondary">{texts.examples.secondary}</Button>
        <Button variant="outline">{texts.examples.outline}</Button>
        <Button variant="ghost">{texts.examples.ghost}</Button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together for comparison.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    const texts = getComponentText('button')
    
    return (
      <div className="flex gap-4 items-center">
        <Button size="sm">{texts.examples.small}</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">{texts.examples.large}</Button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'All button sizes displayed together for comparison.',
      },
    },
  },
}

export const InteractiveExample: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    const texts = getComponentText('button')
    
    const [loading, setLoading] = React.useState(false)
    const [count, setCount] = React.useState(0)
    
    const handleClick = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setCount(prev => prev + 1)
      }, 1000)
    }
    
    return (
      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <Button 
            variant="primary" 
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? (locale === 'zh' ? '加载中...' : 'Loading...') : (locale === 'zh' ? '点击我' : 'Click Me')}
          </Button>
          <span>
            {locale === 'zh' ? `点击次数: ${count}` : `Click count: ${count}`}
          </span>
        </div>
        <div className="text-sm text-gray-600">
          {locale === 'zh' 
            ? '这个示例展示了按钮的交互状态和加载状态。' 
            : 'This example demonstrates button interaction and loading states.'}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing button states and user interaction.',
      },
    },
  },
} 