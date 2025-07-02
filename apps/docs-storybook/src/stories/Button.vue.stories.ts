import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '@ui-lib/ui-vue'
import { getComponentText } from '../utils/i18n'

const meta = {
  title: 'Vue/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Versatile button component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'outline', 'ghost'],
      description: 'Button variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
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
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('button', globals.locale)
    return {
      components: { Button },
      setup() {
        return { args, text: texts.examples.default }
      },
      template: '<Button v-bind="args">{{ text }}</Button>',
    }
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('button', globals.locale).stories.default
        },
      },
    },
  },
}

export const Primary: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('button', globals.locale)
    return {
      components: { Button },
      setup() {
        return { args, text: texts.examples.primary }
      },
      template: '<Button v-bind="args">{{ text }}</Button>',
    }
  },
  args: {
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('button', globals.locale).stories.primary
        },
      },
    },
  },
}

export const Secondary: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('button', globals.locale)
    return {
      components: { Button },
      setup() {
        return { args, text: texts.examples.secondary }
      },
      template: '<Button v-bind="args">{{ text }}</Button>',
    }
  },
  args: {
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('button', globals.locale).stories.secondary
        },
      },
    },
  },
}

export const Outline: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('button', globals.locale)
    return {
      components: { Button },
      setup() {
        return { args, text: texts.examples.outline }
      },
      template: '<Button v-bind="args">{{ text }}</Button>',
    }
  },
  args: {
    variant: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('button', globals.locale).stories.outline
        },
      },
    },
  },
}

export const Ghost: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('button', globals.locale)
    return {
      components: { Button },
      setup() {
        return { args, text: texts.examples.ghost }
      },
      template: '<Button v-bind="args">{{ text }}</Button>',
    }
  },
  args: {
    variant: 'ghost',
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('button', globals.locale).stories.ghost
        },
      },
    },
  },
}

export const Small: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('button', globals.locale)
    return {
      components: { Button },
      setup() {
        return { args, text: texts.examples.small }
      },
      template: '<Button v-bind="args">{{ text }}</Button>',
    }
  },
  args: {
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('button', globals.locale).stories.small
        },
      },
    },
  },
}

export const Large: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('button', globals.locale)
    return {
      components: { Button },
      setup() {
        return { args, text: texts.examples.large }
      },
      template: '<Button v-bind="args">{{ text }}</Button>',
    }
  },
  args: {
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('button', globals.locale).stories.large
        },
      },
    },
  },
}

export const Disabled: Story = {
  render: (args, { globals }) => {
    const texts = getComponentText('button', globals.locale)
    return {
      components: { Button },
      setup() {
        return { args, text: texts.examples.disabled }
      },
      template: '<Button v-bind="args">{{ text }}</Button>',
    }
  },
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: ({ globals }: { globals: { locale: 'en' | 'zh' } }) => {
          return getComponentText('button', globals.locale).stories.disabled
        },
      },
    },
  },
} 