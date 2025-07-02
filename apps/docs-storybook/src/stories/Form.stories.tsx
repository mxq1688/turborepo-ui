import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Form, FormItem, FormInput, FormTextarea, Button, Select, Checkbox, Radio, RadioGroup, Switch, DatePicker } from '@ui-lib/ui-react'

// 国际化文本
const i18nTexts = {
  en: {
    title: 'Components/Form',
    description: 'A powerful form component with validation, layout options, and comprehensive form controls.',
    username: 'Username',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    bio: 'Bio',
    category: 'Category',
    gender: 'Gender',
    notifications: 'Email Notifications',
    terms: 'Accept Terms',
    submit: 'Submit',
    reset: 'Reset',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    technology: 'Technology',
    design: 'Design',
    business: 'Business'
  },
  zh: {
    title: '组件/表单',
    description: '强大的表单组件，支持验证、布局选项和综合表单控件。',
    username: '用户名',
    email: '电子邮箱',
    password: '密码',
    confirmPassword: '确认密码',
    bio: '个人简介',
    category: '分类',
    gender: '性别',
    notifications: '邮件通知',
    terms: '接受条款',
    submit: '提交',
    reset: '重置',
    male: '男',
    female: '女',
    other: '其他',
    technology: '技术',
    design: '设计',
    business: '商业'
  }
}

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: i18nTexts.en.description,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal', 'inline'],
      description: 'Form layout type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all form controls',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Form control size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const BasicForm: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    })
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log('Form submitted:', formData)
      alert(JSON.stringify(formData, null, 2))
    }
    
    return (
      <Form onSubmit={handleSubmit} {...args}>
        <FormItem label={texts.username} required>
          <FormInput 
            value={formData.username}
            onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
            placeholder={`Enter ${texts.username.toLowerCase()}`}
          />
        </FormItem>
        
        <FormItem label={texts.email} required>
          <FormInput 
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder={`Enter ${texts.email.toLowerCase()}`}
          />
        </FormItem>
        
        <FormItem label={texts.password} required>
          <FormInput 
            type="password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            placeholder={`Enter ${texts.password.toLowerCase()}`}
          />
        </FormItem>
        
        <FormItem>
          <div className="flex gap-2">
            <Button type="submit" variant="primary">{texts.submit}</Button>
            <Button type="button" variant="outline" onClick={() => setFormData({ username: '', email: '', password: '' })}>
              {texts.reset}
            </Button>
          </div>
        </FormItem>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic form with common input fields and validation.',
      },
    },
  },
}

export const HorizontalLayout: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const [formData, setFormData] = useState({
      username: '',
      email: ''
    })
    
    return (
      <Form layout="horizontal" {...args}>
        <FormItem label={texts.username}>
          <FormInput 
            value={formData.username}
            onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
          />
        </FormItem>
        
        <FormItem label={texts.email}>
          <FormInput 
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </FormItem>
        
        <FormItem>
          <Button variant="primary">{texts.submit}</Button>
        </FormItem>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Form with horizontal layout where labels and controls are side by side.',
      },
    },
  },
}

export const InlineLayout: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const [searchTerm, setSearchTerm] = useState('')
    
    return (
      <Form layout="inline" {...args}>
        <FormItem label="Search">
          <FormInput 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter search term..."
          />
        </FormItem>
        
        <FormItem>
          <Button variant="primary">Search</Button>
        </FormItem>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Inline form layout for compact interfaces like search bars.',
      },
    },
  },
}

export const ComprehensiveForm: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      bio: '',
      category: '',
      gender: '',
      notifications: false,
      terms: false
    })
    
    const categoryOptions = [
      { label: texts.technology, value: 'tech' },
      { label: texts.design, value: 'design' },
      { label: texts.business, value: 'business' }
    ]
    
    const genderOptions = [
      { label: texts.male, value: 'male' },
      { label: texts.female, value: 'female' },
      { label: texts.other, value: 'other' }
    ]
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log('Comprehensive form submitted:', formData)
      alert(JSON.stringify(formData, null, 2))
    }
    
    return (
      <Form onSubmit={handleSubmit} {...args}>
        <FormItem label={texts.username} required>
          <FormInput 
            value={formData.username}
            onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
          />
        </FormItem>
        
        <FormItem label={texts.email} required>
          <FormInput 
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </FormItem>
        
        <FormItem label={texts.bio}>
          <FormTextarea 
            value={formData.bio}
            onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
            placeholder="Tell us about yourself..."
            rows={4}
          />
        </FormItem>
        
        <FormItem label={texts.category}>
          <Select 
            value={formData.category}
            onChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
            options={categoryOptions}
            placeholder="Select a category"
          />
        </FormItem>
        
        <FormItem label={texts.gender}>
          <RadioGroup
            value={formData.gender}
            onChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
            options={genderOptions}
          />
        </FormItem>
        
        <FormItem>
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <Switch
                checked={formData.notifications}
                onChange={(checked) => setFormData(prev => ({ ...prev, notifications: checked }))}
              />
              <span>{texts.notifications}</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <Checkbox
                checked={formData.terms}
                onChange={(checked) => setFormData(prev => ({ ...prev, terms: checked }))}
              />
              <span>{texts.terms}</span>
            </label>
          </div>
        </FormItem>
        
        <FormItem>
          <Button 
            type="submit" 
            variant="primary" 
            disabled={!formData.terms}
          >
            {texts.submit}
          </Button>
        </FormItem>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive form showcasing various form controls and layouts.',
      },
    },
  },
}

export const FormSizes: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Small Size</h3>
          <Form size="sm">
            <FormItem label={texts.username}>
              <FormInput placeholder="Small input" />
            </FormItem>
            <FormItem>
              <Button size="sm" variant="primary">{texts.submit}</Button>
            </FormItem>
          </Form>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Medium Size (Default)</h3>
          <Form size="md">
            <FormItem label={texts.username}>
              <FormInput placeholder="Medium input" />
            </FormItem>
            <FormItem>
              <Button size="md" variant="primary">{texts.submit}</Button>
            </FormItem>
          </Form>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Large Size</h3>
          <Form size="lg">
            <FormItem label={texts.username}>
              <FormInput placeholder="Large input" />
            </FormItem>
            <FormItem>
              <Button size="lg" variant="primary">{texts.submit}</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Form components in different sizes.',
      },
    },
  },
}

export const DisabledForm: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    return (
      <Form disabled {...args}>
        <FormItem label={texts.username}>
          <FormInput value="Disabled input" />
        </FormItem>
        
        <FormItem label={texts.email}>
          <FormInput type="email" value="disabled@example.com" />
        </FormItem>
        
        <FormItem>
          <Button variant="primary" disabled>{texts.submit}</Button>
        </FormItem>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Form with all controls disabled.',
      },
    },
  },
}

export const InteractiveValidation: Story = {
  render: (args, { globals }) => {
    const locale = globals.locale || 'zh'
    const texts = i18nTexts[locale as keyof typeof i18nTexts] || i18nTexts.zh
    
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    
    const validateField = (name: string, value: string) => {
      let error = ''
      
      switch (name) {
        case 'username':
          if (!value) error = 'Username is required'
          else if (value.length < 3) error = 'Username must be at least 3 characters'
          break
        case 'email':
          if (!value) error = 'Email is required'
          else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email is invalid'
          break
        case 'password':
          if (!value) error = 'Password is required'
          else if (value.length < 6) error = 'Password must be at least 6 characters'
          break
        case 'confirmPassword':
          if (!value) error = 'Please confirm your password'
          else if (value !== formData.password) error = 'Passwords do not match'
          break
      }
      
      setErrors(prev => ({ ...prev, [name]: error }))
      return !error
    }
    
    const handleChange = (name: string, value: string) => {
      setFormData(prev => ({ ...prev, [name]: value }))
      if (touched[name]) {
        validateField(name, value)
      }
    }
    
    const handleBlur = (name: string) => {
      setTouched(prev => ({ ...prev, [name]: true }))
      validateField(name, formData[name as keyof typeof formData])
    }
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      
      const allFields = Object.keys(formData)
      const allValid = allFields.every(field => 
        validateField(field, formData[field as keyof typeof formData])
      )
      
      setTouched(Object.fromEntries(allFields.map(field => [field, true])))
      
      if (allValid) {
        alert('Form submitted successfully!')
      }
    }
    
    return (
      <Form onSubmit={handleSubmit} {...args}>
        <FormItem 
          label={texts.username} 
          required 
          error={touched.username ? errors.username : ''}
        >
          <FormInput 
            value={formData.username}
            onChange={(e) => handleChange('username', e.target.value)}
            onBlur={() => handleBlur('username')}
            placeholder="Enter username"
          />
        </FormItem>
        
        <FormItem 
          label={texts.email} 
          required
          error={touched.email ? errors.email : ''}
        >
          <FormInput 
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder="Enter email"
          />
        </FormItem>
        
        <FormItem 
          label={texts.password} 
          required
          error={touched.password ? errors.password : ''}
        >
          <FormInput 
            type="password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            onBlur={() => handleBlur('password')}
            placeholder="Enter password"
          />
        </FormItem>
        
        <FormItem 
          label={texts.confirmPassword} 
          required
          error={touched.confirmPassword ? errors.confirmPassword : ''}
        >
          <FormInput 
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            onBlur={() => handleBlur('confirmPassword')}
            placeholder="Confirm password"
          />
        </FormItem>
        
        <FormItem>
          <Button type="submit" variant="primary">
            {texts.submit}
          </Button>
        </FormItem>
        
        <div className="mt-4 text-sm text-gray-600">
          {locale === 'zh' 
            ? '实时验证演示：输入字段并查看验证消息。' 
            : 'Real-time validation demo: fill in fields and see validation messages.'}
        </div>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive form with real-time validation and error handling.',
      },
    },
  },
} 