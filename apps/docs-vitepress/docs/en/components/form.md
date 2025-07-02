# Form

A powerful form component with validation, layout options, and comprehensive form controls.

## Basic Usage

```vue
<script setup>
import { Form, FormItem, Input, Button } from '@ui-lib/ui-vue'
import { ref } from 'vue'

const formData = ref({
  username: '',
  email: '',
  password: ''
})

const handleSubmit = (values) => {
  console.log('Form submitted:', values)
}
</script>

<template>
  <Form @submit="handleSubmit" :model="formData">
    <FormItem label="Username" name="username" required>
      <Input v-model="formData.username" placeholder="Enter username" />
    </FormItem>
    
    <FormItem label="Email" name="email" required>
      <Input v-model="formData.email" type="email" placeholder="Enter email" />
    </FormItem>
    
    <FormItem label="Password" name="password" required>
      <Input v-model="formData.password" type="password" placeholder="Enter password" />
    </FormItem>
    
    <FormItem>
      <Button type="submit" variant="primary">Submit</Button>
    </FormItem>
  </Form>
</template>
```

## Form Layouts

### Horizontal Layout

```vue
<template>
  <Form layout="horizontal" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
    <FormItem label="Username" name="username">
      <Input v-model="formData.username" />
    </FormItem>
    <FormItem label="Email" name="email">
      <Input v-model="formData.email" />
    </FormItem>
  </Form>
</template>
```

### Inline Layout

```vue
<template>
  <Form layout="inline">
    <FormItem label="Search" name="search">
      <Input v-model="searchTerm" placeholder="Enter search term" />
    </FormItem>
    <FormItem>
      <Button variant="primary">Search</Button>
    </FormItem>
  </Form>
</template>
```

## Form Validation

```vue
<script setup>
import { ref } from 'vue'

const formData = ref({
  email: '',
  age: null,
  website: ''
})

const rules = {
  email: [
    { required: true, message: 'Email is required' },
    { type: 'email', message: 'Please enter a valid email' }
  ],
  age: [
    { required: true, message: 'Age is required' },
    { type: 'number', min: 18, max: 120, message: 'Age must be between 18-120' }
  ],
  website: [
    { type: 'url', message: 'Please enter a valid URL' }
  ]
}

const handleValidationError = (errors) => {
  console.log('Validation errors:', errors)
}
</script>

<template>
  <Form 
    :model="formData" 
    :rules="rules"
    @validation-error="handleValidationError"
  >
    <FormItem label="Email" name="email">
      <Input v-model="formData.email" />
    </FormItem>
    
    <FormItem label="Age" name="age">
      <Input v-model.number="formData.age" type="number" />
    </FormItem>
    
    <FormItem label="Website" name="website">
      <Input v-model="formData.website" placeholder="https://example.com" />
    </FormItem>
    
    <FormItem>
      <Button type="submit" variant="primary">Validate & Submit</Button>
    </FormItem>
  </Form>
</template>
```

## Custom Validation

```vue
<script setup>
const customValidator = (rule, value, callback) => {
  if (!value) {
    callback(new Error('Username is required'))
  } else if (value.length < 3) {
    callback(new Error('Username must be at least 3 characters'))
  } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
    callback(new Error('Username can only contain letters, numbers, and underscores'))
  } else {
    callback()
  }
}

const rules = {
  username: [
    { validator: customValidator, trigger: 'blur' }
  ]
}
</script>
```

## Form Controls Integration

```vue
<script setup>
import { 
  Form, FormItem, Input, Select, Checkbox, 
  Radio, RadioGroup, Switch, DatePicker, Upload 
} from '@ui-lib/ui-vue'

const formData = ref({
  name: '',
  category: '',
  tags: [],
  gender: '',
  notifications: false,
  birthDate: null,
  avatar: null
})

const categoryOptions = [
  { label: 'Technology', value: 'tech' },
  { label: 'Design', value: 'design' },
  { label: 'Business', value: 'business' }
]

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' }
]
</script>

<template>
  <Form :model="formData">
    <FormItem label="Name" name="name">
      <Input v-model="formData.name" />
    </FormItem>
    
    <FormItem label="Category" name="category">
      <Select v-model="formData.category" :options="categoryOptions" />
    </FormItem>
    
    <FormItem label="Tags" name="tags">
      <Checkbox.Group v-model="formData.tags">
        <Checkbox value="frontend">Frontend</Checkbox>
        <Checkbox value="backend">Backend</Checkbox>
        <Checkbox value="mobile">Mobile</Checkbox>
      </Checkbox.Group>
    </FormItem>
    
    <FormItem label="Gender" name="gender">
      <RadioGroup v-model="formData.gender" :options="genderOptions" />
    </FormItem>
    
    <FormItem label="Notifications" name="notifications">
      <Switch v-model="formData.notifications" />
    </FormItem>
    
    <FormItem label="Birth Date" name="birthDate">
      <DatePicker v-model="formData.birthDate" />
    </FormItem>
    
    <FormItem label="Avatar" name="avatar">
      <Upload v-model="formData.avatar" accept="image/*" />
    </FormItem>
  </Form>
</template>
```

## API

### Form Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| model | `object` | `{}` | Form data object |
| rules | `object` | `{}` | Validation rules |
| layout | `'vertical' \| 'horizontal' \| 'inline'` | `'vertical'` | Form layout |
| labelCol | `object` | - | Label column layout (horizontal) |
| wrapperCol | `object` | - | Control column layout (horizontal) |
| disabled | `boolean` | `false` | Disable all form controls |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Form control size |

### FormItem Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | - | Field label |
| name | `string` | - | Field name (for validation) |
| required | `boolean` | `false` | Whether field is required |
| rules | `array` | - | Field-specific validation rules |
| validateStatus | `'success' \| 'warning' \| 'error' \| 'validating'` | - | Validation status |
| help | `string` | - | Help text |

### Form Events

| Name | Type | Description |
|------|------|-------------|
| submit | `(values: object) => void` | Form submission |
| validation-error | `(errors: object) => void` | Validation failed |
| field-change | `(name: string, value: any) => void` | Field value changed |

### Form Methods

| Name | Type | Description |
|------|------|-------------|
| validate | `() => Promise<boolean>` | Validate entire form |
| validateField | `(name: string) => Promise<boolean>` | Validate specific field |
| resetFields | `() => void` | Reset form to initial state |
| clearValidation | `() => void` | Clear validation messages | 