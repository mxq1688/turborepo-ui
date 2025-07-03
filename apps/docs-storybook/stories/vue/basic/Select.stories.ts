import type { Meta, StoryObj } from '@storybook/vue3';
import { Select } from '@ui-lib/ui-vue';

const options = [
  { value: 'option1', label: '选项一 / Option 1' },
  { value: 'option2', label: '选项二 / Option 2' },
  { value: 'option3', label: '选项三 / Option 3' },
  { value: 'option4', label: '选项四 / Option 4' },
  { value: 'option5', label: '选项五 / Option 5' },
];

const meta = {
  title: 'Vue/基础组件/选择器 Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '这是 Vue 版本的选择器组件。用于从预定义的选项中选择一个或多个值。\n\nThis is the Vue version of the Select component. Used to select one or multiple values from predefined options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      name: '选项 / Options',
      description: '选择器的选项列表 / List of options for the select',
      control: 'object',
    },
    modelValue: {
      name: '值 / Value',
      description: '当前选中的值 / Currently selected value',
      control: 'text',
    },
    placeholder: {
      name: '占位符 / Placeholder',
      description: '未选择时的占位文本 / Placeholder text when no option is selected',
      control: 'text',
    },
    disabled: {
      name: '禁用 / Disabled',
      description: '是否禁用选择器 / Whether the select is disabled',
      control: 'boolean',
    },
    error: {
      name: '错误 / Error',
      description: '错误信息 / Error message',
      control: 'text',
    },
    label: {
      name: '标签 / Label',
      description: '选择器标签 / Select label',
      control: 'text',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 基本用法: Story = {
  name: '基本用法 / Basic',
  render: (args) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: '<Select v-bind="args" @update:modelValue="args[\'onUpdate:modelValue\']" />'
  }),
  args: {
    options,
    placeholder: '请选择 / Please select',
  },
  parameters: {
    docs: {
      description: {
        story: '最基本的选择器用法。\n\nThe most basic usage of Select.',
      },
    },
  },
};

export const 带标签: Story = {
  name: '带标签 / With Label',
  render: (args) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: '<Select v-bind="args" @update:modelValue="args[\'onUpdate:modelValue\']" />'
  }),
  args: {
    options,
    label: '选择框 / Select',
    placeholder: '请选择一个选项 / Please select an option',
  },
  parameters: {
    docs: {
      description: {
        story: '带有标签的选择器。\n\nSelect with a label.',
      },
    },
  },
};

export const 默认值: Story = {
  name: '默认值 / Default Value',
  render: (args) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: '<Select v-bind="args" @update:modelValue="args[\'onUpdate:modelValue\']" />'
  }),
  args: {
    options,
    modelValue: 'option1',
    label: '默认选中 / Default Selected',
  },
  parameters: {
    docs: {
      description: {
        story: '具有默认选中值的选择器。\n\nSelect with a default selected value.',
      },
    },
  },
};

export const 错误状态: Story = {
  name: '错误状态 / Error State',
  render: (args) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: '<Select v-bind="args" @update:modelValue="args[\'onUpdate:modelValue\']" />'
  }),
  args: {
    options,
    label: '选择框 / Select',
    placeholder: '请选择 / Please select',
    error: '请选择一个选项 / Please select an option',
  },
  parameters: {
    docs: {
      description: {
        story: '显示错误信息的选择器。\n\nSelect with error message.',
      },
    },
  },
};

export const 禁用状态: Story = {
  name: '禁用状态 / Disabled',
  render: (args) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: '<Select v-bind="args" @update:modelValue="args[\'onUpdate:modelValue\']" />'
  }),
  args: {
    options,
    disabled: true,
    modelValue: 'option1',
    label: '禁用 / Disabled',
  },
  parameters: {
    docs: {
      description: {
        story: '禁用状态的选择器。\n\nDisabled select.',
      },
    },
  },
};

export const 禁用选项: Story = {
  name: '禁用选项 / Disabled Options',
  render: (args) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: '<Select v-bind="args" @update:modelValue="args[\'onUpdate:modelValue\']" />'
  }),
  args: {
    options: [
      { value: 'option1', label: '可选项 / Available Option' },
      { value: 'option2', label: '禁用项 / Disabled Option', disabled: true },
      { value: 'option3', label: '可选项 / Available Option' },
    ],
    label: '带禁用选项 / With Disabled Options',
    placeholder: '请选择 / Please select',
  },
  parameters: {
    docs: {
      description: {
        story: '包含禁用选项的选择器。\n\nSelect with disabled options.',
      },
    },
  },
}; 