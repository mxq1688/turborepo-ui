import type { Meta, StoryObj } from '@storybook/vue3'
import { Input } from '@ui-lib/ui-vue'
import { getComponentText } from '../utils/i18n'

// 多语言文本
const i18nTexts = {
  en: {
    description: 'A flexible input component with various types and states for form handling.',
    type: 'Input type',
    size: 'Input size',
    disabled: 'Whether the input is disabled',
    placeholder: 'Input placeholder text',
    examples: {
      default: 'Enter text...',
      password: 'Enter password...',
      email: 'Enter email...',
      small: 'Small input',
      large: 'Large input',
      disabled: 'Disabled input',
      withValue: 'Pre-filled value',
    },
  },
  zh: {
    description: '一个灵活的输入组件，具有各种类型和状态，用于表单处理。',
    type: '输入类型',
    size: '输入尺寸',
    disabled: '是否禁用输入',
    placeholder: '输入占位符文本',
    examples: {
      default: '请输入文本...',
      password: '请输入密码...',
      email: '请输入邮箱...',
      small: '小输入框',
      large: '大输入框',
      disabled: '禁用输入框',
      withValue: '预填充值',
    },
  },
}

const meta = {
  title: 'Vue/Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Flexible input component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'outline', 'ghost'],
      description: 'Input variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
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
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: i18nTexts.zh.placeholder,
    },
    modelValue: {
      control: 'text',
      description: 'Input value (v-model)',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('input', globals.locale)
    return {
      components: { Input },
      setup() {
        return { args, placeholder: texts.examples.default }
      },
      template: '<Input v-bind="args" :placeholder="placeholder" />',
    }
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('input', globals.locale).stories.default
        },
      },
    },
  },
}

export const Primary: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('input', globals.locale)
    return {
      components: { Input },
      setup() {
        return { args, placeholder: texts.examples.primary }
      },
      template: '<Input v-bind="args" :placeholder="placeholder" />',
    }
  },
  args: {
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('input', globals.locale).stories.primary
        },
      },
    },
  },
}

export const Secondary: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('input', globals.locale)
    return {
      components: { Input },
      setup() {
        return { args, placeholder: texts.examples.secondary }
      },
      template: '<Input v-bind="args" :placeholder="placeholder" />',
    }
  },
  args: {
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('input', globals.locale).stories.secondary
        },
      },
    },
  },
}

export const Outline: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('input', globals.locale)
    return {
      components: { Input },
      setup() {
        return { args, placeholder: texts.examples.outline }
      },
      template: '<Input v-bind="args" :placeholder="placeholder" />',
    }
  },
  args: {
    variant: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('input', globals.locale).stories.outline
        },
      },
    },
  },
}

export const Ghost: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('input', globals.locale)
    return {
      components: { Input },
      setup() {
        return { args, placeholder: texts.examples.ghost }
      },
      template: '<Input v-bind="args" :placeholder="placeholder" />',
    }
  },
  args: {
    variant: 'ghost',
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('input', globals.locale).stories.ghost
        },
      },
    },
  },
}

export const Small: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('input', globals.locale)
    return {
      components: { Input },
      setup() {
        return { args, placeholder: texts.examples.small }
      },
      template: '<Input v-bind="args" :placeholder="placeholder" />',
    }
  },
  args: {
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('input', globals.locale).stories.small
        },
      },
    },
  },
}

export const Large: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('input', globals.locale)
    return {
      components: { Input },
      setup() {
        return { args, placeholder: texts.examples.large }
      },
      template: '<Input v-bind="args" :placeholder="placeholder" />',
    }
  },
  args: {
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('input', globals.locale).stories.large
        },
      },
    },
  },
}

export const Disabled: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('input', globals.locale)
    return {
      components: { Input },
      setup() {
        return { args, placeholder: texts.examples.disabled }
      },
      template: '<Input v-bind="args" :placeholder="placeholder" />',
    }
  },
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('input', globals.locale).stories.disabled
        },
      },
    },
  },
}

export const WithValue: Story = {
  args: {
    modelValue: i18nTexts.zh.examples.withValue,
    placeholder: 'This will not show',
  },
  parameters: {
    docs: {
      description: {
        story: '带有预填充值的输入框。',
      },
    },
  },
} 