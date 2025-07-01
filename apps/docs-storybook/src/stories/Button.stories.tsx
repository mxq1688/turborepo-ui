import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '@ui-lib/ui-react'

// 国际化文本
const i18nTexts = {
  en: {
    title: 'Components/Button',
    description: 'A versatile button component with multiple variants and sizes for modern web applications.',
    variant: 'Visual style variant of the button',
    size: 'Size of the button',
    disabled: 'Whether the button is disabled',
    children: 'Button content',
    examples: {
      default: 'Button',
      primary: 'Primary Button',
      secondary: 'Secondary Button', 
      outline: 'Outline Button',
      ghost: 'Ghost Button',
      small: 'Small Button',
      large: 'Large Button',
      disabled: 'Disabled Button'
    }
  },
  zh: {
    title: '组件/按钮',
    description: '多功能按钮组件，支持多种变体和尺寸，适用于现代Web应用程序。',
    variant: '按钮的视觉样式变体',
    size: '按钮的尺寸',
    disabled: '是否禁用按钮',
    children: '按钮内容',
    examples: {
      default: '按钮',
      primary: '主要按钮',
      secondary: '次要按钮',
      outline: '描边按钮', 
      ghost: '幽灵按钮',
      small: '小按钮',
      large: '大按钮',
      disabled: '禁用按钮'
    }
  }
}

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: i18nTexts.en.description,
      },
      page: () => {
        return `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1>Button Component</h1>
            <p>${i18nTexts.en.description}</p>
            
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
      description: i18nTexts.en.variant,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: i18nTexts.en.size,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: i18nTexts.en.disabled,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: i18nTexts.en.children,
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
    children: i18nTexts.en.examples.default,
  },
  parameters: {
    docs: {
      description: {
        story: 'The default button style. Use for secondary actions.',
      },
    },
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: i18nTexts.en.examples.primary,
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary buttons for the main action on a page. Should be used sparingly.',
      },
    },
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: i18nTexts.en.examples.secondary,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary buttons for supporting actions.',
      },
    },
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: i18nTexts.en.examples.outline,
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline buttons for subtle actions that need less emphasis.',
      },
    },
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: i18nTexts.en.examples.ghost,
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost buttons for the most subtle actions.',
      },
    },
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: i18nTexts.en.examples.small,
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size buttons for compact interfaces.',
      },
    },
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: i18nTexts.en.examples.large,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size buttons for prominent actions.',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: i18nTexts.en.examples.disabled,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state prevents user interaction and indicates the action is unavailable.',
      },
    },
  },
}

export const AllVariants: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'en'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.en
    
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
    const locale = globals.locale || 'en'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.en
    
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
    const locale = globals.locale || 'en'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.en
    
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