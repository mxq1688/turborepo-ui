import type { Meta, StoryObj } from '@storybook/react';
import { Button, useI18n } from '@ui-lib/ui-react';
import React from 'react';

// 创建一个展示组件，用于演示国际化功能
const ButtonDemo: React.FC<{ variant?: any; children?: React.ReactNode }> = ({ variant, children }) => {
  const { t } = useI18n();
  return <Button variant={variant}>{children || t('button.confirm')}</Button>;
};

const meta = {
  title: 'React/Basic/Button',
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
    children: {
      name: '内容 Content',
      description: '按钮显示的文本 / Text displayed in the button',
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: '主要按钮 Primary',
  args: {
    variant: 'primary',
    children: '确认',
  },
  parameters: {
    docs: {
      description: {
        story: '主要按钮用于最重要的操作。\n\nPrimary button for the most important actions.',
      },
    },
  },
};

export const Secondary: Story = {
  name: '次要按钮 Secondary',
  args: {
    variant: 'secondary',
    children: '取消',
  },
  parameters: {
    docs: {
      description: {
        story: '次要按钮用于辅助操作。\n\nSecondary button for supporting actions.',
      },
    },
  },
};

export const Outline: Story = {
  name: '边框按钮 Outline',
  args: {
    variant: 'outline',
    children: '保存',
  },
  parameters: {
    docs: {
      description: {
        story: '边框按钮适用于次要操作。\n\nOutline button for secondary actions.',
      },
    },
  },
};

export const Ghost: Story = {
  name: '幽灵按钮 Ghost',
  args: {
    variant: 'ghost',
    children: '编辑',
  },
  parameters: {
    docs: {
      description: {
        story: '幽灵按钮提供最小化的视觉冲击。\n\nGhost button provides minimal visual impact.',
      },
    },
  },
};

export const Sizes: Story = {
  name: '不同尺寸 Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="sm">小按钮 Small</Button>
      <Button size="md">中等按钮 Medium</Button>
      <Button size="lg">大按钮 Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '按钮支持三种尺寸：小、中、大。\n\nButtons support three sizes: small, medium, and large.',
      },
    },
  },
};

export const Disabled: Story = {
  name: '禁用状态 Disabled',
  args: {
    variant: 'primary',
    disabled: true,
    children: '禁用按钮 Disabled',
  },
  parameters: {
    docs: {
      description: {
        story: '禁用状态的按钮无法点击。\n\nDisabled buttons cannot be clicked.',
      },
    },
  },
};

export const 国际化示例: Story = {
  name: '国际化示例 / I18n Example',
  render: () => <ButtonDemo />,
  parameters: {
    docs: {
      description: {
        story: '此示例展示按钮如何使用国际化功能。\n\nThis example shows how buttons use internationalization.',
      },
    },
  },
}; 