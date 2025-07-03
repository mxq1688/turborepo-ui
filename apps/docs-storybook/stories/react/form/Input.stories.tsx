import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@ui-lib/ui-react';
import React from 'react';

const meta: Meta<typeof Input> = {
  title: 'React/输入框 Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '这是 React 版本的输入框组件。\n\nThis is the React version of the Input component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      name: '类型 / Type',
      description: '输入框类型 / Input type',
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    placeholder: {
      name: '占位符 / Placeholder',
      description: '输入框的占位文本 / Placeholder text',
      control: { type: 'text' },
    },
    disabled: {
      name: '禁用 / Disabled',
      description: '是否禁用输入框 / Whether the input is disabled',
      control: { type: 'boolean' },
    },
    error: {
      name: '错误 / Error',
      description: '错误信息 / Error message',
      control: { type: 'text' },
    },
    label: {
      name: '标签 / Label',
      description: '输入框标签 / Input label',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const 基本用法: Story = {
  name: '基本用法 / Basic',
  args: {
    placeholder: '请输入内容 / Please input',
  },
  parameters: {
    docs: {
      description: {
        story: '最基本的输入框用法。\n\nThe most basic usage of Input.',
      },
    },
  },
};

export const 带标签: Story = {
  name: '带标签 / With Label',
  args: {
    label: '用户名 / Username',
    placeholder: '请输入用户名 / Please input username',
  },
  parameters: {
    docs: {
      description: {
        story: '带有标签的输入框。\n\nInput with a label.',
      },
    },
  },
};

export const 密码输入框: Story = {
  name: '密码输入框 / Password',
  args: {
    type: 'password',
    label: '密码 / Password',
    placeholder: '请输入密码 / Please input password',
  },
  parameters: {
    docs: {
      description: {
        story: '用于输入密码的输入框。\n\nInput for password.',
      },
    },
  },
};

export const 错误状态: Story = {
  name: '错误状态 / Error State',
  args: {
    label: '邮箱 / Email',
    type: 'email',
    placeholder: '请输入邮箱 / Please input email',
    error: '请输入有效的邮箱地址 / Please enter a valid email address',
  },
  parameters: {
    docs: {
      description: {
        story: '显示错误信息的输入框。\n\nInput with error message.',
      },
    },
  },
};

export const 禁用状态: Story = {
  name: '禁用状态 / Disabled',
  args: {
    label: '禁用 / Disabled',
    disabled: true,
    value: '这是禁用状态 / This is disabled',
  },
  parameters: {
    docs: {
      description: {
        story: '禁用状态的输入框。\n\nDisabled input.',
      },
    },
  },
};

export const 不同类型: Story = {
  name: '不同类型 / Different Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input type="text" placeholder="文本输入 / Text input" />
      <Input type="password" placeholder="密码输入 / Password input" />
      <Input type="email" placeholder="邮箱输入 / Email input" />
      <Input type="number" placeholder="数字输入 / Number input" />
      <Input type="tel" placeholder="电话输入 / Tel input" />
      <Input type="url" placeholder="URL 输入 / URL input" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示不同类型的输入框。\n\nShowcase of different input types.',
      },
    },
  },
}; 