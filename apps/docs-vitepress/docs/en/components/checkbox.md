# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

```vue
<template>
  <div class="space-y-4">
    <Checkbox v-model="checked">选项</Checkbox>
    <p>当前状态: {{ checked ? '已选中' : '未选中' }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
</script>
```

## 禁用状态

多选框不可用状态。

```vue
<template>
  <div class="space-y-4">
    <Checkbox v-model="checked1" disabled>禁用未选中</Checkbox>
    <Checkbox v-model="checked2" disabled>禁用已选中</Checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)
</script>
```

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

```vue
<template>
  <div class="space-y-4">
    <CheckboxGroup v-model="checkList">
      <Checkbox value="apple">苹果</Checkbox>
      <Checkbox value="orange">橙子</Checkbox>
      <Checkbox value="banana">香蕉</Checkbox>
      <Checkbox value="grape">葡萄</Checkbox>
    </CheckboxGroup>
    
    <p>已选择: {{ checkList.join(', ') }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checkList = ref(['apple', 'banana'])
</script>
```

## 不确定状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。

```vue
<template>
  <div class="space-y-4">
    <Checkbox 
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    >
      全选
    </Checkbox>
    
    <CheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
      <Checkbox v-for="city in cities" :key="city" :value="city">
        {{ city }}
      </Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const cities = ['上海', '北京', '广州', '深圳']
const checkedCities = ref(['上海', '北京'])
const checkAll = ref(false)

const isIndeterminate = computed(() => {
  const count = checkedCities.value.length
  return count > 0 && count < cities.length
})

const handleCheckAllChange = (checked) => {
  checkedCities.value = checked ? cities.slice() : []
}

const handleCheckedCitiesChange = (value) => {
  checkAll.value = value.length === cities.length
}
</script>
```

## 限制最大选择数量

使用 `max` 属性能够限制可以被勾选的项目的数量。

```vue
<template>
  <div class="space-y-4">
    <p>最多选择 2 项</p>
    <CheckboxGroup v-model="checkedList" :max="2">
      <Checkbox value="a">选项 A</Checkbox>
      <Checkbox value="b">选项 B</Checkbox>
      <Checkbox value="c">选项 C</Checkbox>
      <Checkbox value="d">选项 D</Checkbox>
    </CheckboxGroup>
    
    <p>已选择: {{ checkedList.join(', ') }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checkedList = ref(['a'])
</script>
```

## 可选项目列表

通过传入 `options` 数组快速生成多选框组。

```vue
<template>
  <div class="space-y-4">
    <CheckboxGroup v-model="value" :options="options" />
    <p>选中值: {{ value }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(['apple'])
const options = [
  { label: '苹果', value: 'apple' },
  { label: '橙子', value: 'orange' },
  { label: '香蕉', value: 'banana', disabled: true },
  { label: '葡萄', value: 'grape' }
]
</script>
```

## 不同尺寸

Checkbox 组件提供了三种尺寸。

```vue
<template>
  <div class="space-y-4">
    <Checkbox v-model="value1" size="small">小尺寸</Checkbox>
    <Checkbox v-model="value2">默认尺寸</Checkbox>
    <Checkbox v-model="value3" size="large">大尺寸</Checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(false)
const value3 = ref(false)
</script>
```

## API

### Checkbox Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值 | boolean / string / number | — | — |
| value | 选中状态的值（只有在`checkbox-group`中使用时有效） | boolean / string / number | — | — |
| true-value | 选中时的值 | boolean / string / number | — | true |
| false-value | 没有选中时的值 | boolean / string / number | — | false |
| disabled | 是否禁用 | boolean | — | false |
| indeterminate | 设置不确定状态，仅负责样式控制 | boolean | — | false |
| checked | 当前是否勾选 | boolean | — | false |
| name | 原生 name 属性 | string | — | — |
| size | Checkbox 的尺寸 | string | small / default / large | default |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 当绑定值变化时触发的事件 | (value: boolean) |

### CheckboxGroup Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值 | array | — | — |
| size | 多选框组尺寸 | string | small / default / large | default |
| disabled | 是否禁用 | boolean | — | false |
| min | 可被勾选的 checkbox 的最小数量 | number | — | — |
| max | 可被勾选的 checkbox 的最大数量 | number | — | — |
| options | 指定可选项 | array | — | — |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 当绑定值变化时触发的事件 | (value: array) |

### CheckboxGroup Slots

| 插槽名 | 说明 |
|--------|------|
| default | 自定义默认内容 |

### Options 配置项

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| label | 选项的标签，若不设置则默认与 `value` 相同 | string / number / boolean | — | — |
| value | 选项的值 | string / number / boolean | — | — |
| disabled | 是否禁用该选项 | boolean | — | false | 