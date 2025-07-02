# Input 输入框

通过鼠标或键盘输入字符的基础表单组件。

## 基础用法

最简单的输入框用法。

```vue
<template>
  <div class="space-y-4">
    <Input v-model="value" placeholder="请输入内容" />
    <p>输入值: {{ value }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件。

```vue
<template>
  <div class="space-y-4">
    <Input v-model="value" placeholder="请输入内容" />
    <Input v-model="value" placeholder="禁用状态" disabled />
  </div>
</template>
```

## 尺寸

使用 `size` 属性改变输入框尺寸。除了默认的大小外，还提供了 `large`、`small` 两种尺寸。

```vue
<template>
  <div class="space-y-4">
    <Input v-model="value" size="large" placeholder="大尺寸" />
    <Input v-model="value" placeholder="默认尺寸" />
    <Input v-model="value" size="small" placeholder="小尺寸" />
  </div>
</template>
```

## 带图标的输入框

带有图标标记的输入框可以快速创建带有标记符号的输入框。

```vue
<template>
  <div class="space-y-4">
    <Input v-model="value" placeholder="请输入内容">
      <template #prefix>
        <SearchIcon />
      </template>
    </Input>
    
    <Input v-model="value" placeholder="请输入内容">
      <template #suffix>
        <EyeIcon />
      </template>
    </Input>
  </div>
</template>
```

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框。

```vue
<template>
  <Input 
    v-model="password" 
    type="password"
    show-password
    placeholder="请输入密码" 
  />
</template>

<script setup>
import { ref } from 'vue'

const password = ref('')
</script>
```

## 带有标签

为输入框添加标签。

```vue
<template>
  <div class="space-y-4">
    <Input v-model="username" label="用户名" placeholder="请输入用户名" />
    <Input v-model="email" label="邮箱" type="email" placeholder="请输入邮箱" />
  </div>
</template>
```

## 表单验证

结合表单验证使用。

```vue
<template>
  <div class="space-y-4">
    <Input 
      v-model="email"
      label="邮箱" 
      type="email"
      placeholder="请输入邮箱"
      :error="emailError"
      required
    />
    
    <Input 
      v-model="phone"
      label="手机号"
      placeholder="请输入手机号"
      :error="phoneError"
      help-text="请输入11位手机号码"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const phone = ref('')

const emailError = computed(() => {
  if (!email.value) return '邮箱不能为空'
  if (!/\S+@\S+\.\S+/.test(email.value)) return '邮箱格式不正确'
  return ''
})

const phoneError = computed(() => {
  if (!phone.value) return '手机号不能为空'
  if (!/^1[3-9]\d{9}$/.test(phone.value)) return '手机号格式不正确'
  return ''
})
</script>
```

## 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 `textarea`。

```vue
<template>
  <div class="space-y-4">
    <Input 
      v-model="textarea"
      type="textarea"
      label="描述"
      placeholder="请输入描述信息"
      rows="4"
    />
    
    <Input 
      v-model="autosize"
      type="textarea"
      label="自适应高度"
      placeholder="请输入内容"
      autosize
    />
  </div>
</template>
```

## API

### Input Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值 | string / number | — | — |
| type | 类型 | string | text, textarea, password, email, number, tel, url | text |
| placeholder | 输入框占位文本 | string | — | — |
| disabled | 禁用 | boolean | — | false |
| size | 输入框尺寸 | string | large / default / small | default |
| label | 标签文本 | string | — | — |
| error | 错误信息 | string | — | — |
| help-text | 帮助文本 | string | — | — |
| required | 是否必填（显示红色星号） | boolean | — | false |
| show-password | 是否显示切换密码图标 | boolean | — | false |
| rows | 输入框行数，只对 type="textarea" 有效 | number | — | 2 |
| autosize | 自适应内容高度，只对 type="textarea" 有效 | boolean | — | false |
| maxlength | 原生属性，最大输入长度 | number | — | — |
| minlength | 原生属性，最小输入长度 | number | — | — |
| max | 原生属性，设置最大值 | — | — | — |
| min | 原生属性，设置最小值 | — | — | — |
| step | 原生属性，设置输入字段的合法数字间隔 | — | — | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| autofocus | 原生属性，自动获取焦点 | boolean | — | false |

### Input Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| input | 在 Input 值改变时触发 | (value: string \| number) |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | — |

### Input Slots

| 插槽名 | 说明 |
|--------|------|
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |

### Input Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点 | — |
| select | 选中 input 中的文字 | — | 