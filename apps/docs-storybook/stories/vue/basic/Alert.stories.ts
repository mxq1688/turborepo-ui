import type { Meta, StoryObj } from '@storybook/vue3';
import { Alert } from '@ui-lib/ui-vue';

const meta = {
  title: 'Vue/警告提示 Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '这是 Vue 版本的警告提示组件。\n\nThis is the Vue version of the Alert component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: '变体 / Variant',
      description: '警告提示的类型 / Type of the alert',
      control: { type: 'select' },
      options: ['success', 'warning', 'error', 'info'],
    },
    title: {
      name: '标题 / Title',
      description: '警告提示的标题 / Title of the alert',
      control: { type: 'text' },
    },
    closable: {
      name: '可关闭 / Closable',
      description: '是否显示关闭按钮 / Whether to show close button',
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 成功提示: Story = {
  name: '成功提示 / Success',
  args: {
    variant: 'success',
    title: '成功',
    default: '您的操作已成功完成！',
  },
  parameters: {
    docs: {
      description: {
        story: '成功提示用于告知用户操作已成功完成。\n\nSuccess alert is used to inform users that an operation has been completed successfully.',
      },
    },
  },
};

export const 警告提示: Story = {
  name: '警告提示 / Warning',
  args: {
    variant: 'warning',
    title: '警告',
    default: '请注意，这个操作可能会影响现有数据。',
  },
  parameters: {
    docs: {
      description: {
        story: '警告提示用于提醒用户需要注意的重要信息。\n\nWarning alert is used to remind users of important information that requires attention.',
      },
    },
  },
};

export const 错误提示: Story = {
  name: '错误提示 / Error',
  args: {
    variant: 'error',
    title: '错误',
    default: '抱歉，处理您的请求时发生了错误。',
  },
  parameters: {
    docs: {
      description: {
        story: '错误提示用于告知用户发生了错误。\n\nError alert is used to inform users that an error has occurred.',
      },
    },
  },
};

export const 信息提示: Story = {
  name: '信息提示 / Info',
  args: {
    variant: 'info',
    title: '信息',
    default: '这是一条普通的信息提示。',
  },
  parameters: {
    docs: {
      description: {
        story: '信息提示用于向用户显示一般性信息。\n\nInfo alert is used to display general information to users.',
      },
    },
  },
};

export const 可关闭提示: Story = {
  name: '可关闭提示 / Closable',
  args: {
    variant: 'info',
    title: '可关闭的提示',
    closable: true,
    default: '这个提示可以被用户关闭。',
  },
  parameters: {
    docs: {
      description: {
        story: '带有关闭按钮的提示，用户可以手动关闭。\n\nAlert with close button that users can manually dismiss.',
      },
    },
  },
}; 