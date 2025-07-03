import type { Meta, StoryObj } from '@storybook/vue3';
import { Badge } from '@ui-lib/ui-vue';

const meta = {
  title: 'Vue/基础组件/徽章 Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '这是 Vue 版本的徽章组件。用于显示状态、计数或分类信息。\n\nThis is the Vue version of the Badge component. Used to display status, count, or categorical information.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: '变体 / Variant',
      description: '徽章的视觉样式 / Visual style of the badge',
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      name: '尺寸 / Size',
      description: '徽章的大小 / Size of the badge',
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    default: {
      name: '内容 / Content',
      description: '徽章显示的内容 / Content displayed in the badge',
      control: 'text',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 基本用法: Story = {
  name: '基本用法 / Basic',
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: '<Badge v-bind="args">{{ args.default }}</Badge>',
  }),
  args: {
    default: '新 / New',
  },
  parameters: {
    docs: {
      description: {
        story: '最基本的徽章用法。\n\nThe most basic usage of Badge.',
      },
    },
  },
};

export const 不同变体: Story = {
  name: '不同变体 / Different Variants',
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <Badge variant="default">默认 / Default</Badge>
        <Badge variant="primary">主要 / Primary</Badge>
        <Badge variant="success">成功 / Success</Badge>
        <Badge variant="warning">警告 / Warning</Badge>
        <Badge variant="danger">危险 / Danger</Badge>
        <Badge variant="info">信息 / Info</Badge>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '展示不同类型的徽章。\n\nShowcase of different badge variants.',
      },
    },
  },
};

export const 不同尺寸: Story = {
  name: '不同尺寸 / Different Sizes',
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 8px; align-items: center;">
        <Badge size="sm">小号 / Small</Badge>
        <Badge size="md">中号 / Medium</Badge>
        <Badge size="lg">大号 / Large</Badge>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '展示不同尺寸的徽章。\n\nShowcase of different badge sizes.',
      },
    },
  },
};

export const 状态标记: Story = {
  name: '状态标记 / Status Markers',
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <Badge variant="success">在线 / Online</Badge>
        <Badge variant="danger">离线 / Offline</Badge>
        <Badge variant="warning">维护中 / Maintenance</Badge>
        <Badge variant="info">待定 / Pending</Badge>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '使用徽章来显示状态。\n\nUsing badges to display status.',
      },
    },
  },
};

export const 计数标记: Story = {
  name: '计数标记 / Count Markers',
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 16px;">
        <Badge variant="primary">99+</Badge>
        <Badge variant="danger">12</Badge>
        <Badge variant="warning">5</Badge>
        <Badge variant="info">新 / New</Badge>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '使用徽章来显示计数或提醒。\n\nUsing badges to display counts or notifications.',
      },
    },
  },
}; 