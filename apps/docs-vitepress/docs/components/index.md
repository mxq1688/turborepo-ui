# Components

Welcome to the component library documentation. Our library provides a comprehensive set of components for both Vue and React applications.

## Component Categories

### Basic Components
- [Button](/components/button) - Interactive buttons with various styles
- [Input](/components/input) - Text input fields with validation
- [Card](/components/card) - Container component for content

### Form Components
- [Checkbox](/components/checkbox) - Multi-selection checkboxes
- [Radio](/components/radio) - Single-selection radio buttons
- [Select](/components/select) - Dropdown selection component
- [Switch](/components/switch) - Toggle switch component
- [Upload](/components/upload) - File upload component
- [DatePicker](/components/datepicker) - Date selection component
- [Form](/components/form) - Form validation and layout

### Data Display
- [Table](/components/table) - Data table with sorting and pagination
- [Tabs](/components/tabs) - Tab navigation component
- [Avatar](/components/avatar) - User avatar component
- [Badge](/components/badge) - Status indicator badge
- [Alert](/components/alert) - Alert and notification messages

### Feedback
- [Loading](/components/loading) - Loading indicators
- [Modal](/components/modal) - Modal dialogs and overlays

## Getting Started

To use any component, simply import it from the respective package:

```vue
<!-- Vue -->
<script setup>
import { Button } from '@ui-lib/ui-vue'
</script>

<template>
  <Button variant="primary">Click me</Button>
</template>
```

```jsx
// React
import { Button } from '@ui-lib/ui-react'

function App() {
  return <Button variant="primary">Click me</Button>
}
``` 