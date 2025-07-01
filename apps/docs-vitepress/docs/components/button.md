# Button

The Button component is used to trigger actions and events.

## Basic Usage

```vue
<script setup>
import { Button } from '@ui-lib/ui-vue'
</script>

<template>
  <Button>Default Button</Button>
  <Button variant="primary">Primary Button</Button>
  <Button variant="secondary">Secondary Button</Button>
</template>
```

## Variants

The Button component supports different variants:

- `default` - Default button style
- `primary` - Primary action button
- `secondary` - Secondary action button
- `outline` - Outline button style
- `ghost` - Ghost button style

## Sizes

```vue
<template>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</template>
```

## Disabled State

```vue
<template>
  <Button disabled>Disabled Button</Button>
</template>
```

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'default'` | Button variant |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| disabled | `boolean` | `false` | Whether the button is disabled |

### Events

| Name | Type | Description |
|------|------|-------------|
| click | `(event: MouseEvent) => void` | Triggered when button is clicked | 