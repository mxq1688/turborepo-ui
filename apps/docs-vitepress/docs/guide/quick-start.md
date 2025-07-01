# Quick Start

Get up and running with the UI Component Library in just a few minutes.

## Prerequisites

Make sure you have completed the [Installation](/guide/installation) step before proceeding.

## Your First Component

Let's create a simple application using our components:

::: code-group

```tsx [React]
// src/App.tsx
import React, { useState } from 'react'
import { 
  Button, 
  Card, 
  Input, 
  Alert,
  ThemeProvider 
} from '@ui-lib/ui-react'
import '@ui-lib/ui-react/dist/index.css'

function App() {
  const [name, setName] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = () => {
    if (name.trim()) {
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
    }
  }

  return (
    <ThemeProvider theme="light">
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-md mx-auto">
          <Card className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Welcome to UI Library
            </h1>
            
            {showAlert && (
              <Alert variant="success" className="mb-4">
                Hello, {name}! Welcome to our component library! 🎉
              </Alert>
            )}
            
            <div className="space-y-4">
              <Input
                label="Your Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              
              <Button 
                variant="primary" 
                onClick={handleSubmit}
                disabled={!name.trim()}
                className="w-full"
              >
                Say Hello
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
```

```vue [Vue]
<!-- src/App.vue -->
<template>
  <ThemeProvider theme="light">
    <div class="min-h-screen bg-gray-50 p-8">
      <div class="max-w-md mx-auto">
        <Card class="p-6">
          <h1 class="text-2xl font-bold mb-6 text-center">
            Welcome to UI Library
          </h1>
          
          <Alert 
            v-if="showAlert" 
            variant="success" 
            class="mb-4"
          >
            Hello, {{ name }}! Welcome to our component library! 🎉
          </Alert>
          
          <div class="space-y-4">
            <Input
              v-model="name"
              label="Your Name"
              placeholder="Enter your name"
            />
            
            <Button 
              variant="primary" 
              @click="handleSubmit"
              :disabled="!name.trim()"
              class="w-full"
            >
              Say Hello
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </ThemeProvider>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Button, 
  Card, 
  Input, 
  Alert, 
  ThemeProvider 
} from '@ui-lib/ui-vue'
import '@ui-lib/ui-vue/dist/index.css'

const name = ref('')
const showAlert = ref(false)

const handleSubmit = () => {
  if (name.value.trim()) {
    showAlert.value = true
    setTimeout(() => {
      showAlert.value = false
    }, 3000)
  }
}
</script>
```

:::

## Core Concepts

### Component Variants

Most components support different visual styles through the `variant` prop:

```tsx
// Different button variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Different alert variants
<Alert variant="info">Information</Alert>
<Alert variant="success">Success</Alert>
<Alert variant="warning">Warning</Alert>
<Alert variant="error">Error</Alert>
```

### Component Sizes

Components support consistent sizing through the `size` prop:

```tsx
// Button sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Input sizes
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />
```

### Theme Integration

Use the `ThemeProvider` to apply consistent theming across your application:

::: code-group

```tsx [React]
import { ThemeProvider } from '@ui-lib/ui-react'

function App() {
  return (
    <ThemeProvider theme="dark">
      {/* Your app content */}
    </ThemeProvider>
  )
}
```

```vue [Vue]
<template>
  <ThemeProvider theme="dark">
    <!-- Your app content -->
  </ThemeProvider>
</template>
```

:::

## Common Patterns

### Form Building

Create forms quickly with our form components:

::: code-group

```tsx [React]
import { useState } from 'react'
import { Card, Input, Button, Checkbox, Select } from '@ui-lib/ui-react'

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    newsletter: false
  })

  return (
    <Card className="p-6 max-w-md">
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
      
      <div className="space-y-4">
        <Input
          label="Full Name"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          required
        />
        
        <Input
          type="email"
          label="Email Address"
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
          required
        />
        
        <Select
          label="Company Size"
          value={form.company}
          onChange={(value) => setForm({...form, company: value})}
          options={[
            { value: 'startup', label: '1-10 employees' },
            { value: 'small', label: '11-50 employees' },
            { value: 'medium', label: '51-200 employees' },
            { value: 'large', label: '200+ employees' }
          ]}
        />
        
        <Checkbox
          checked={form.newsletter}
          onChange={(checked) => setForm({...form, newsletter: checked})}
        >
          Subscribe to newsletter
        </Checkbox>
        
        <Button variant="primary" className="w-full">
          Submit
        </Button>
      </div>
    </Card>
  )
}
```

```vue [Vue]
<template>
  <Card class="p-6 max-w-md">
    <h2 class="text-xl font-semibold mb-4">Contact Information</h2>
    
    <div class="space-y-4">
      <Input
        v-model="form.name"
        label="Full Name"
        required
      />
      
      <Input
        v-model="form.email"
        type="email"
        label="Email Address"
        required
      />
      
      <Select
        v-model="form.company"
        label="Company Size"
        :options="companyOptions"
      />
      
      <Checkbox v-model="form.newsletter">
        Subscribe to newsletter
      </Checkbox>
      
      <Button variant="primary" class="w-full">
        Submit
      </Button>
    </div>
  </Card>
</template>

<script setup>
import { reactive } from 'vue'
import { Card, Input, Button, Checkbox, Select } from '@ui-lib/ui-vue'

const form = reactive({
  name: '',
  email: '',
  company: '',
  newsletter: false
})

const companyOptions = [
  { value: 'startup', label: '1-10 employees' },
  { value: 'small', label: '11-50 employees' },
  { value: 'medium', label: '51-200 employees' },
  { value: 'large', label: '200+ employees' }
]
</script>
```

:::

### Data Display

Display data elegantly with cards and tables:

```tsx
import { Card, Badge, Avatar, Button } from '@ui-lib/ui-react'

function UserCard({ user }) {
  return (
    <Card className="p-4">
      <div className="flex items-center space-x-3">
        <Avatar src={user.avatar} alt={user.name} />
        <div className="flex-1">
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <Badge variant={user.status === 'active' ? 'success' : 'gray'}>
          {user.status}
        </Badge>
      </div>
      
      <div className="mt-4 flex space-x-2">
        <Button size="sm" variant="outline">View</Button>
        <Button size="sm" variant="outline">Edit</Button>
      </div>
    </Card>
  )
}
```

### Layout Components

Structure your pages with flexible layout components:

```tsx
import { Card, Grid, Stack } from '@ui-lib/ui-react'

function Dashboard() {
  return (
    <div className="p-6">
      <Grid cols={3} gap="4" className="mb-6">
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-green-600">$12,345</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Orders</h3>
          <p className="text-3xl font-bold text-purple-600">567</p>
        </Card>
      </Grid>
      
      <Stack space="4">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          {/* Activity content */}
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Analytics</h2>
          {/* Analytics content */}
        </Card>
      </Stack>
    </div>
  )
}
```

## Internationalization

Add multi-language support to your application:

::: code-group

```tsx [React]
import { I18nProvider, useI18n } from '@ui-lib/ui-react'

const messages = {
  en: {
    welcome: 'Welcome',
    hello: 'Hello, {name}!',
    buttons: {
      submit: 'Submit',
      cancel: 'Cancel'
    }
  },
  zh: {
    welcome: '欢迎',
    hello: '你好，{name}！',
    buttons: {
      submit: '提交',
      cancel: '取消'
    }
  }
}

function App() {
  return (
    <I18nProvider locale="en" messages={messages}>
      <MyComponent />
    </I18nProvider>
  )
}

function MyComponent() {
  const { t, locale, setLocale } = useI18n()
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('hello', { name: 'John' })}</p>
      <Button onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}>
        Switch Language
      </Button>
    </div>
  )
}
```

```vue [Vue]
<template>
  <I18nProvider :locale="locale" :messages="messages">
    <MyComponent />
  </I18nProvider>
</template>

<script setup>
import { ref } from 'vue'
import { I18nProvider } from '@ui-lib/ui-vue'

const locale = ref('en')
const messages = {
  en: {
    welcome: 'Welcome',
    hello: 'Hello, {name}!',
    buttons: { submit: 'Submit', cancel: 'Cancel' }
  },
  zh: {
    welcome: '欢迎', 
    hello: '你好，{name}！',
    buttons: { submit: '提交', cancel: '取消' }
  }
}
</script>
```

:::

## Best Practices

### 1. Component Composition

Build complex UIs by composing simple components:

```tsx
// ✅ Good: Compose simple components
<Card>
  <Card.Header>
    <Card.Title>User Profile</Card.Title>
    <Card.Description>Manage your account settings</Card.Description>
  </Card.Header>
  <Card.Content>
    <Avatar src={user.avatar} />
    <Input label="Name" value={user.name} />
  </Card.Content>
  <Card.Footer>
    <Button variant="primary">Save</Button>
    <Button variant="outline">Cancel</Button>
  </Card.Footer>
</Card>

// ❌ Avoid: Monolithic components with too many props
<UserProfileCard 
  title="User Profile"
  description="Manage your account settings"
  avatarSrc={user.avatar}
  userName={user.name}
  showSaveButton={true}
  showCancelButton={true}
  onSave={handleSave}
  onCancel={handleCancel}
/>
```

### 2. Consistent Spacing

Use our spacing system for consistent layouts:

```tsx
// Use consistent spacing classes
<div className="space-y-4">  {/* Vertical spacing */}
  <Card className="p-6">     {/* Padding */}
    <div className="mb-4">   {/* Margin bottom */}
      <h2>Title</h2>
    </div>
    <div className="flex gap-2"> {/* Flex gap */}
      <Button>Action</Button>
      <Button>Cancel</Button>
    </div>
  </Card>
</div>
```

### 3. Accessibility

Our components are built with accessibility in mind, but remember to:

```tsx
// Add proper labels and descriptions
<Input 
  label="Email Address"
  placeholder="Enter your email"
  aria-describedby="email-help"
  required
/>
<div id="email-help" className="text-sm text-gray-600">
  We'll never share your email with anyone else.
</div>

// Use semantic HTML
<Button 
  variant="primary" 
  aria-label="Save changes to user profile"
>
  Save
</Button>
```

## Next Steps

Now that you're familiar with the basics, explore these advanced topics:

- 🎨 [Theme Customization](/guide/theming) - Customize colors, fonts, and spacing
- 🔧 [Component Customization](/guide/customization) - Extend and customize components
- 📱 [Responsive Design](/guide/responsive) - Build mobile-first applications
- 🚀 [Performance Optimization](/guide/performance) - Optimize your application
- 🧪 [Testing](/guide/testing) - Test your components effectively

## Examples

Check out our example applications:

- [📋 Todo App](https://github.com/ui-lib/examples/tree/main/todo-app) - Simple task management
- 🏪 [E-commerce Dashboard](https://github.com/ui-lib/examples/tree/main/ecommerce) - Admin dashboard
- 📊 [Analytics Dashboard](https://github.com/ui-lib/examples/tree/main/analytics) - Data visualization
- 📝 [Blog Platform](https://github.com/ui-lib/examples/tree/main/blog) - Content management 