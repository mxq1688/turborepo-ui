import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '@ui-lib/ui-vue';

const meta = {
  title: 'Vue/Basic/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '按钮用于触发一个操作或事件。\n\nButton component is used to trigger an action or event.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: '变体 Variant',
      description: '按钮的视觉样式 / Visual style of the button',
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      name: '尺寸 Size',
      description: '按钮的大小 / Size of the button',
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      name: '禁用 Disabled',
      description: '是否禁用按钮 / Whether the button is disabled',
      control: 'boolean',
    },
    default: {
      name: '内容 Content',
      description: '按钮显示的文本 / Text displayed in the button',
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  name: '主要按钮 Primary',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
  args: {
    variant: 'primary',
    default: '确认',
  },
  parameters: {
    docs: {
      description: {
        story: '主要按钮用于最重要的操作。\n\nPrimary button for the most important actions.',
      },
    },
  },
};

export const Secondary = {
  name: '次要按钮 Secondary',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
  args: {
    variant: 'secondary',
    default: '取消',
  },
  parameters: {
    docs: {
      description: {
        story: '次要按钮用于辅助操作。\n\nSecondary button for supporting actions.',
      },
    },
  },
};

export const Outline = {
  name: '边框按钮 Outline',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
  args: {
    variant: 'outline',
    default: '保存',
  },
  parameters: {
    docs: {
      description: {
        story: '边框按钮适用于次要操作。\n\nOutline button for secondary actions.',
      },
    },
  },
};

export const Ghost = {
  name: '幽灵按钮 Ghost',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
  args: {
    variant: 'ghost',
    default: '编辑',
  },
  parameters: {
    docs: {
      description: {
        story: '幽灵按钮提供最小化的视觉冲击。\n\nGhost button provides minimal visual impact.',
      },
    },
  },
};

export const Sizes = {
  name: '不同尺寸 Sizes',
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <Button size="sm">小按钮 Small</Button>
        <Button size="md">中等按钮 Medium</Button>
        <Button size="lg">大按钮 Large</Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '按钮支持三种尺寸：小、中、大。\n\nButtons support three sizes: small, medium, and large.',
      },
    },
  },
};

export const Disabled = {
  name: '禁用状态 Disabled',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
  args: {
    variant: 'primary',
    disabled: true,
    default: '禁用按钮 Disabled',
  },
  parameters: {
    docs: {
      description: {
        story: '禁用状态的按钮无法点击。\n\nDisabled buttons cannot be clicked.',
      },
    },
  },
}; 