import React, { useState } from 'react'
import {
  ThemeProvider,
  I18nProvider,
  useTheme,
  useI18n,
  Button,
  Input,
  Card,
  Badge,
  Alert
} from './components'

// 头部组件
function AppHeader() {
  const { isDark, setTheme } = useTheme()
  const { locale, setLocale, t } = useI18n()

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {t('demo.title')}
            </h1>
            <Badge variant="primary" className="ml-3">
              Demo
            </Badge>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
            >
              {locale === 'en' ? '🇨🇳 中文' : '🇺🇸 English'}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            >
              {isDark ? '☀️' : '🌙'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

// 按钮示例组件
function ButtonExamples() {
  const { t } = useI18n()
  const [loading, setLoading] = useState(false)

  const handleAsyncAction = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>{t('demo.components.buttons')}</Card.Title>
        <Card.Description>
          {t('demo.examples.variants')} - Different button styles and states
        </Card.Description>
      </Card.Header>
      
      <Card.Content>
        <div className="space-y-6">
          {/* 基础变体 */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              {t('demo.examples.variants')}
            </h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">{t('buttons.submit')}</Button>
              <Button variant="secondary">{t('common.cancel')}</Button>
              <Button variant="outline">{t('common.edit')}</Button>
              <Button variant="ghost">{t('common.close')}</Button>
            </div>
          </div>

          {/* 尺寸 */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              {t('demo.examples.sizes')}
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" variant="primary">Small</Button>
              <Button size="md" variant="primary">Medium</Button>
              <Button size="lg" variant="primary">Large</Button>
            </div>
          </div>

          {/* 状态 */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              {t('demo.examples.states')}
            </h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Normal</Button>
              <Button variant="primary" disabled>Disabled</Button>
              <Button 
                variant="primary" 
                loading={loading}
                onClick={handleAsyncAction}
              >
                {loading ? t('common.loading') : 'Click to Load'}
              </Button>
            </div>
          </div>

          {/* 带图标 */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              With Icons
            </h4>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="primary"
                icon={<span>📁</span>}
              >
                Folder
              </Button>
              <Button 
                variant="outline"
                icon={<span>⚙️</span>}
              >
                Settings
              </Button>
              <Button 
                variant="ghost"
                icon={<span>🗑️</span>}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </Card.Content>
    </Card>
  )
}

// 输入框示例组件
function InputExamples() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name) {
      newErrors.name = t('forms.required')
    }
    
    if (!formData.email) {
      newErrors.email = t('forms.required')
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('forms.invalidEmail')
    }
    
    if (!formData.password) {
      newErrors.password = t('forms.required')
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>{t('demo.components.inputs')}</Card.Title>
        <Card.Description>
          Form inputs with validation and different states
        </Card.Description>
      </Card.Header>
      
      <Card.Content>
        <div className="space-y-4 max-w-md">
          <Input
            label={t('forms.name')}
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange('name')}
            error={errors.name}
            required
            icon={<span>👤</span>}
          />
          
          <Input
            type="email"
            label={t('forms.email')}
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange('email')}
            error={errors.email}
            required
            icon={<span>📧</span>}
          />
          
          <Input
            type="password"
            label={t('forms.password')}
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange('password')}
            error={errors.password}
            required
            icon={<span>🔒</span>}
          />
          
          <Input
            label="Disabled Input"
            placeholder="This input is disabled"
            disabled
            value="Disabled value"
          />
          
          <Input
            label="With Helper Text"
            placeholder="Enter something"
            helperText="This is a helpful message to guide the user"
          />
          
          <div className="flex gap-2 pt-2">
            <Button variant="primary" onClick={validateForm}>
              Validate Form
            </Button>
            <Button variant="outline" onClick={() => {
              setFormData({ name: '', email: '', password: '' })
              setErrors({})
            }}>
              Reset
            </Button>
          </div>
        </div>
      </Card.Content>
    </Card>
  )
}

// 徽章和警告示例组件
function BadgeAndAlertExamples() {
  const { t } = useI18n()
  const [showAlerts, setShowAlerts] = useState({
    success: true,
    warning: true,
    error: true,
    info: true
  })

  return (
    <div className="space-y-6">
      {/* 徽章示例 */}
      <Card>
        <Card.Header>
          <Card.Title>{t('demo.components.badges')}</Card.Title>
          <Card.Description>
            Status indicators and labels
          </Card.Description>
        </Card.Header>
        
        <Card.Content>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Colors
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="gray">Gray</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Sizes
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="primary" size="sm">Small</Badge>
                <Badge variant="primary" size="md">Medium</Badge>
                <Badge variant="primary" size="lg">Large</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Dots
              </h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Badge variant="success" dot />
                  <span className="text-sm">Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="error" dot />
                  <span className="text-sm">Offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="warning" dot />
                  <span className="text-sm">Away</span>
                </div>
              </div>
            </div>
          </div>
        </Card.Content>
      </Card>

      {/* 警告示例 */}
      <Card>
        <Card.Header>
          <Card.Title>{t('demo.components.alerts')}</Card.Title>
          <Card.Description>
            Alert messages with different types
          </Card.Description>
        </Card.Header>
        
        <Card.Content>
          <div className="space-y-4">
            {showAlerts.success && (
              <Alert 
                variant="success" 
                title="Success!"
                closable
                onClose={() => setShowAlerts(prev => ({ ...prev, success: false }))}
              >
                Your changes have been saved successfully.
              </Alert>
            )}
            
            {showAlerts.warning && (
              <Alert 
                variant="warning" 
                title="Warning"
                closable
                onClose={() => setShowAlerts(prev => ({ ...prev, warning: false }))}
              >
                Please check your input before proceeding.
              </Alert>
            )}
            
            {showAlerts.error && (
              <Alert 
                variant="error" 
                title="Error"
                closable
                onClose={() => setShowAlerts(prev => ({ ...prev, error: false }))}
              >
                Something went wrong. Please try again.
              </Alert>
            )}
            
            {showAlerts.info && (
              <Alert 
                variant="primary" 
                closable
                onClose={() => setShowAlerts(prev => ({ ...prev, info: false }))}
              >
                This is an informational message without a title.
              </Alert>
            )}
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowAlerts({
                success: true,
                warning: true,
                error: true,
                info: true
              })}
            >
              Reset Alerts
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  )
}

// 主应用组件
function AppContent() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <AppHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 介绍部分 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('demo.subtitle')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('demo.description')}
          </p>
        </div>

        {/* 组件示例 */}
        <div className="space-y-8">
          <ButtonExamples />
          <InputExamples />
          <BadgeAndAlertExamples />
        </div>

        {/* 功能特性 */}
        <Card className="mt-12">
          <Card.Header>
            <Card.Title>🚀 Features</Card.Title>
            <Card.Description>
              What makes our component library special
            </Card.Description>
          </Card.Header>
          
          <Card.Content>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Badge variant="primary" dot />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">TypeScript</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Fully typed components with excellent IntelliSense support
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Badge variant="success" dot />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Theme System</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Dark/light mode with customizable color schemes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Badge variant="warning" dot />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Internationalization</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Multi-language support with easy translation management
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Badge variant="error" dot />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Accessibility</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    WCAG compliant with proper ARIA attributes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Badge variant="gray" dot />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Responsive</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Mobile-first design that works on all devices
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Badge variant="primary" dot />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Modern Stack</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Built with React 18, Tailwind CSS, and latest best practices
                  </p>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>
      </main>
    </div>
  )
}

// 根应用组件
function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AppContent />
      </I18nProvider>
    </ThemeProvider>
  )
}

export default App
