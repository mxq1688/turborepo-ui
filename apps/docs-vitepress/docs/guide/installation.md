# Installation

Get started with our UI Component Library by installing the packages for your preferred framework.

## Vue Installation

```bash
npm install @ui-lib/ui-vue
# or
yarn add @ui-lib/ui-vue
# or
pnpm add @ui-lib/ui-vue
```

## React Installation

```bash
npm install @ui-lib/ui-react
# or
yarn add @ui-lib/ui-react
# or
pnpm add @ui-lib/ui-react
```

## Shared Dependencies

Both packages depend on our shared design system:

```bash
npm install @ui-lib/ui-shared
```

## Setup

### Vue Setup

```vue
<!-- main.ts or main.js -->
<script>
import { createApp } from 'vue'
import App from './App.vue'

// Import CSS (if needed)
import '@ui-lib/ui-vue/dist/style.css'

const app = createApp(App)
app.mount('#app')
</script>
```

### React Setup

```jsx
// index.js or App.js
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import CSS (if needed)
import '@ui-lib/ui-react/dist/style.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
```

## TypeScript Support

Both packages include full TypeScript support out of the box. No additional configuration is required.

## Next Steps

- [Quick Start Guide](/guide/quick-start)
- [Browse Components](/components/)
- [Theming](/guide/theming) 