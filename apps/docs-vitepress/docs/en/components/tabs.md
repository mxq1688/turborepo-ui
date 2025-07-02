# Tabs

A tab component for organizing content into different panels.

## Basic Usage

```vue
<script setup>
import { Tabs } from '@ui-lib/ui-vue'
import { ref } from 'vue'

const activeTab = ref('tab1')

const tabs = [
  { key: 'tab1', label: 'Tab One', content: 'Content of Tab One' },
  { key: 'tab2', label: 'Tab Two', content: 'Content of Tab Two' },
  { key: 'tab3', label: 'Tab Three', content: 'Content of Tab Three' }
]
</script>

<template>
  <Tabs v-model="activeTab" :tabs="tabs" />
</template>
```

## Disabled Tabs

```vue
<script setup>
const disabledTabs = [
  { key: 'tab1', label: 'Enabled Tab', content: 'This tab is enabled' },
  { key: 'tab2', label: 'Disabled Tab', content: 'This tab is disabled', disabled: true },
  { key: 'tab3', label: 'Another Tab', content: 'Another enabled tab' }
]
</script>

<template>
  <Tabs :tabs="disabledTabs" />
</template>
```

## Card Style

```vue
<template>
  <Tabs :tabs="tabs" type="card" />
</template>
```

## Component Content

Use Vue components as tab content:

```vue
<script setup>
import MyComponent from './MyComponent.vue'

const componentTabs = [
  { 
    key: 'form', 
    label: 'Form', 
    component: 'form',
    props: { action: '/submit' }
  },
  { 
    key: 'custom', 
    label: 'Custom', 
    component: MyComponent,
    props: { title: 'Hello World' }
  }
]
</script>

<template>
  <Tabs :tabs="componentTabs" />
</template>
```

## Controlled Mode

```vue
<script setup>
import { ref, watch } from 'vue'

const currentTab = ref('overview')

watch(currentTab, (newTab) => {
  console.log('Tab changed to:', newTab)
})

const controlledTabs = [
  { key: 'overview', label: 'Overview', content: 'Overview content' },
  { key: 'details', label: 'Details', content: 'Details content' },
  { key: 'settings', label: 'Settings', content: 'Settings content' }
]
</script>

<template>
  <div>
    <p>Current tab: {{ currentTab }}</p>
    <Tabs v-model="currentTab" :tabs="controlledTabs" />
  </div>
</template>
```

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | `string` | - | Active tab key (v-model) |
| tabs | `Tab[]` | `[]` | Tab configuration array |
| type | `'line' \| 'card'` | `'line'` | Tab style type |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Tab size |
| centered | `boolean` | `false` | Center align tabs |

### Tab Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | `string` | - | Unique tab identifier |
| label | `string` | - | Tab label text |
| content | `string` | - | Tab content (text) |
| component | `Component` | - | Vue component to render |
| props | `object` | - | Props for component |
| disabled | `boolean` | `false` | Whether tab is disabled |

### Events

| Name | Type | Description |
|------|------|-------------|
| update:modelValue | `(key: string) => void` | v-model update event |
| change | `(key: string) => void` | Tab change event |

### Slots

| Name | Description |
|------|-------------|
| default | Custom tab content |
| tab-{key} | Custom content for specific tab | 