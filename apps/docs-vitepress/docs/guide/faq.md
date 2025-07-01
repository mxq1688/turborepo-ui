# Frequently Asked Questions

Common questions and answers about the UI Component Library.

## Installation & Setup

### Q: Which package should I install?

**A:** It depends on your framework:

- **React**: Install `@ui-lib/ui-react`
- **Vue 3**: Install `@ui-lib/ui-vue`
- **Both**: You can install both packages if you have a multi-framework project

```bash
# For React projects
npm install @ui-lib/ui-react

# For Vue projects
npm install @ui-lib/ui-vue

# For projects using both
npm install @ui-lib/ui-react @ui-lib/ui-vue
```

### Q: Do I need to install additional CSS frameworks?

**A:** No, our components come with built-in styling. However:

- **Option 1**: Import our pre-built CSS (recommended for most projects)
  ```js
  import '@ui-lib/ui-react/dist/index.css'
  ```

- **Option 2**: Use with your existing Tailwind CSS setup
  ```js
  // Add to your tailwind.config.js
  content: ['./node_modules/@ui-lib/**/*.{js,ts,jsx,tsx,vue}']
  ```

### Q: Can I use this with Next.js/Nuxt.js?

**A:** Yes! Our library works perfectly with:

- ✅ **Next.js** (React)
- ✅ **Nuxt.js** (Vue)
- ✅ **Vite**
- ✅ **Create React App**
- ✅ **Vue CLI**

For Next.js, you may need to configure CSS imports:

```js
// next.config.js
module.exports = {
  transpilePackages: ['@ui-lib/ui-react']
}
```

### Q: Is Server-Side Rendering (SSR) supported?

**A:** Yes, all our components are SSR-friendly and work with:

- Next.js (React)
- Nuxt.js (Vue)
- Gatsby
- SvelteKit (when using our React components)

## Component Usage

### Q: How do I customize component styles?

**A:** There are several approaches:

1. **Using CSS classes** (recommended):
   ```tsx
   <Button className="custom-button-style">Click me</Button>
   ```

2. **Using CSS variables**:
   ```css
   .custom-button {
     --ui-color-primary-500: #your-color;
     --ui-radius-md: 8px;
   }
   ```

3. **Using the theme system**:
   ```tsx
   <ThemeProvider theme={{ colors: { primary: { 500: '#your-color' } } }}>
     <Button>Themed Button</Button>
   </ThemeProvider>
   ```

### Q: Can I use icons with components?

**A:** Yes! Our components work with any icon library:

```tsx
// With React Icons
import { FiUser, FiSettings } from 'react-icons/fi'

<Button>
  <FiUser className="mr-2" />
  Profile
</Button>

// With Heroicons
import { UserIcon } from '@heroicons/react/24/outline'

<Button>
  <UserIcon className="w-4 h-4 mr-2" />
  Profile
</Button>

// With emojis
<Button>
  🚀 Launch
</Button>
```

### Q: How do I handle form validation?

**A:** Our components work with popular form libraries:

**React Hook Form** (recommended):
```tsx
import { useForm } from 'react-hook-form'

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email', { required: 'Email is required' })}
        error={errors.email?.message}
      />
    </form>
  )
}
```

**Formik**:
```tsx
import { Formik, Form, Field } from 'formik'

<Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
  <Form>
    <Field name="email">
      {({ field, meta }) => (
        <Input
          {...field}
          error={meta.touched && meta.error ? meta.error : ''}
        />
      )}
    </Field>
  </Form>
</Formik>
```

### Q: Can I create custom variants?

**A:** Yes, you can extend our components with custom variants:

```tsx
// Create a custom button component
function CustomButton({ variant, ...props }) {
  const customVariants = {
    success: 'bg-green-500 text-white hover:bg-green-600',
    warning: 'bg-yellow-500 text-black hover:bg-yellow-600'
  }
  
  if (customVariants[variant]) {
    return <Button className={customVariants[variant]} {...props} />
  }
  
  return <Button variant={variant} {...props} />
}

// Usage
<CustomButton variant="success">Success Button</CustomButton>
```

## Theming

### Q: How do I implement dark mode?

**A:** Use our built-in theme system:

```tsx
import { ThemeProvider, useTheme } from '@ui-lib/ui-react'

function App() {
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeProvider theme={theme}>
      <YourApp />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </ThemeProvider>
  )
}

// Or use the hook within components
function ThemeToggle() {
  const { isDark, setTheme } = useTheme()
  
  return (
    <Button onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? '☀️' : '🌙'}
    </Button>
  )
}
```

### Q: Can I create multiple themes?

**A:** Absolutely! Create theme objects for different brands or contexts:

```tsx
const themes = {
  corporate: {
    colors: {
      primary: { 500: '#1e40af' },  // Blue
      secondary: { 500: '#64748b' }
    }
  },
  creative: {
    colors: {
      primary: { 500: '#8b5cf6' },  // Purple
      secondary: { 500: '#06b6d4' }
    }
  },
  minimal: {
    colors: {
      primary: { 500: '#000000' },  // Black
      secondary: { 500: '#6b7280' }
    }
  }
}

// Switch between themes
<ThemeProvider theme={themes.corporate}>
  <YourApp />
</ThemeProvider>
```

### Q: How do I maintain brand consistency?

**A:** Define your brand tokens in a central theme file:

```tsx
// theme/brand.ts
export const brandTheme = {
  colors: {
    primary: {
      // Your brand blue
      500: '#0066cc'
    },
    secondary: {
      // Your brand gray
      500: '#6b7280'
    }
  },
  fonts: {
    sans: ['YourBrandFont', 'system-ui', 'sans-serif']
  },
  spacing: {
    // Custom spacing scale
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  }
}
```

## Performance

### Q: Is the library tree-shakeable?

**A:** Yes! Import only what you need:

```tsx
// ✅ Tree-shakeable - only Button is bundled
import { Button } from '@ui-lib/ui-react'

// ✅ Even more granular
import Button from '@ui-lib/ui-react/Button'

// ❌ Imports everything
import * as UI from '@ui-lib/ui-react'
```

### Q: What's the bundle size impact?

**A:** Our components are optimized for minimal bundle size:

- **Single component**: ~2-5KB gzipped
- **Full library**: ~45KB gzipped
- **Core utilities**: ~8KB gzipped

Check your bundle with:
```bash
npm install --save-dev webpack-bundle-analyzer
# Or use Next.js bundle analyzer
npm install --save-dev @next/bundle-analyzer
```

### Q: Should I use CSS-in-JS or CSS files?

**A:** We recommend our pre-built CSS files for best performance:

```tsx
// ✅ Recommended: Pre-built CSS
import '@ui-lib/ui-react/dist/index.css'

// ⚠️ Alternative: CSS-in-JS (larger bundle)
import { ThemeProvider } from '@ui-lib/ui-react'
```

Pre-built CSS advantages:
- Smaller JavaScript bundle
- Better caching
- Faster initial load
- Better SSR performance

## TypeScript

### Q: Do I need to install type definitions?

**A:** No! TypeScript definitions are included:

```tsx
// ✅ Types are automatically available
import { Button } from '@ui-lib/ui-react'

// ✅ Component props are fully typed
<Button 
  variant="primary"  // Autocomplete works
  onClick={(e) => {  // Event is typed
    // e is MouseEvent<HTMLButtonElement>
  }}
>
  Click me
</Button>
```

### Q: How do I type custom props?

**A:** Extend our component types:

```tsx
import type { ButtonProps } from '@ui-lib/ui-react'

// Extend existing props
interface CustomButtonProps extends ButtonProps {
  loading?: boolean
  icon?: React.ReactNode
}

function CustomButton({ loading, icon, children, ...props }: CustomButtonProps) {
  return (
    <Button {...props} disabled={loading}>
      {loading ? '⏳' : icon}
      {children}
    </Button>
  )
}
```

### Q: Can I use the library with JavaScript?

**A:** Yes! TypeScript is optional:

```jsx
// Works perfectly in .js files
import { Button, Card } from '@ui-lib/ui-react'

function MyComponent() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  )
}
```

## Accessibility

### Q: Are components accessible by default?

**A:** Yes! Our components follow WCAG 2.1 guidelines:

- ✅ Proper ARIA attributes
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Screen reader support
- ✅ Color contrast compliance

### Q: How do I add custom accessibility attributes?

**A:** All components accept standard HTML accessibility props:

```tsx
<Button
  aria-label="Save document"
  aria-describedby="save-help"
  role="button"
>
  Save
</Button>

<Input
  aria-label="Search products"
  aria-required="true"
  aria-invalid={hasError}
/>
```

### Q: Do you support right-to-left (RTL) languages?

**A:** Yes! Add RTL support:

```tsx
// Set document direction
document.dir = 'rtl'

// Components automatically adapt
<ThemeProvider theme={{ direction: 'rtl' }}>
  <YourApp />
</ThemeProvider>
```

## Troubleshooting

### Q: Components don't look right / styles are missing

**A:** Make sure you've imported the CSS:

```tsx
// Add this to your main entry file
import '@ui-lib/ui-react/dist/index.css'
```

If you're using a bundler, ensure CSS files are processed:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
```

### Q: Getting "Module not found" errors

**A:** Check your imports and package installation:

```bash
# Verify package is installed
npm list @ui-lib/ui-react

# Reinstall if needed
npm install @ui-lib/ui-react

# Clear cache
npm cache clean --force
```

### Q: TypeScript errors in IDE

**A:** Ensure your IDE recognizes the types:

```json
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true
  },
  "include": [
    "src/**/*",
    "node_modules/@ui-lib/*/dist/types/**/*"
  ]
}
```

### Q: Components not rendering in tests

**A:** Set up your test environment:

```tsx
// test-utils.tsx
import { render } from '@testing-library/react'
import { ThemeProvider } from '@ui-lib/ui-react'

export function renderWithTheme(ui: React.ReactElement) {
  return render(
    <ThemeProvider theme="light">
      {ui}
    </ThemeProvider>
  )
}

// In your tests
import { renderWithTheme } from './test-utils'

test('renders button', () => {
  renderWithTheme(<Button>Click me</Button>)
})
```

### Q: CSS conflicts with other libraries

**A:** Use CSS modules or scoped styles:

```css
/* scope.css */
.my-app {
  /* Your component library styles are scoped here */
}
.my-app .ui-button {
  /* Override specific component styles */
}
```

```tsx
import './scope.css'

function App() {
  return (
    <div className="my-app">
      <Button>Scoped button</Button>
    </div>
  )
}
```

## Migration

### Q: How do I migrate from another UI library?

**A:** We provide migration guides for popular libraries:

**From Material-UI/MUI**:
```tsx
// Before (MUI)
import { Button } from '@mui/material'
<Button variant="contained" color="primary">

// After (Our library)
import { Button } from '@ui-lib/ui-react'
<Button variant="primary">
```

**From Ant Design**:
```tsx
// Before (Ant Design)
import { Button } from 'antd'
<Button type="primary">

// After (Our library)
import { Button } from '@ui-lib/ui-react'
<Button variant="primary">
```

### Q: Can I use both libraries during migration?

**A:** Yes! Use aliasing to avoid conflicts:

```tsx
// During migration
import { Button as OldButton } from 'old-ui-library'
import { Button as NewButton } from '@ui-lib/ui-react'

function MigrationComponent() {
  return (
    <div>
      <OldButton>Old button</OldButton>
      <NewButton variant="primary">New button</NewButton>
    </div>
  )
}
```

## Community & Support

### Q: How do I report bugs or request features?

**A:** We welcome community contributions:

- 🐛 **Bugs**: [GitHub Issues](https://github.com/ui-lib/ui-library/issues)
- 💡 **Features**: [GitHub Discussions](https://github.com/ui-lib/ui-library/discussions)
- 💬 **Questions**: [Discord Community](https://discord.gg/ui-lib)
- 📧 **Security**: security@ui-lib.dev

### Q: How can I contribute?

**A:** Check our [Contributing Guide](https://github.com/ui-lib/ui-library/blob/main/CONTRIBUTING.md):

1. **Code contributions**: Components, bug fixes, features
2. **Documentation**: Improve guides and examples
3. **Testing**: Add test cases and improve coverage
4. **Design**: Contribute to our design system
5. **Community**: Help answer questions in Discord

### Q: Is commercial use allowed?

**A:** Yes! Our library is MIT licensed:

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

### Q: Do you offer professional support?

**A:** Yes, we offer enterprise support packages:

- 🎯 **Priority support** - Dedicated support channel
- 🔧 **Custom components** - Build components for your needs
- 📚 **Training sessions** - Team training and workshops
- 🎨 **Design consultation** - Design system strategy

Contact us at enterprise@ui-lib.dev

## Still have questions?

Can't find what you're looking for? Here are more ways to get help:

- 📖 [Browse Documentation](/components/)
- 💬 [Join Discord Community](https://discord.gg/ui-lib)
- 🐛 [Report an Issue](https://github.com/ui-lib/ui-library/issues)
- 💡 [Request a Feature](https://github.com/ui-lib/ui-library/discussions)
- 📧 [Email Support](mailto:support@ui-lib.dev) 