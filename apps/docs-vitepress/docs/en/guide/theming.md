# Theme Customization

Customize the look and feel of your application with our flexible theming system.

## Overview

Our component library provides a comprehensive theming system that allows you to:

- **Customize colors** - Define your brand colors and semantic color scales
- **Control typography** - Set fonts, sizes, and text styles
- **Adjust spacing** - Configure consistent spacing throughout your app
- **Dark mode support** - Toggle between light and dark themes
- **CSS variables** - Use modern CSS custom properties for dynamic theming

## Quick Start

### Using Theme Provider

Wrap your application with the `ThemeProvider` to apply themes:

::: code-group

```tsx [React]
import { ThemeProvider } from '@ui-lib/ui-react'

function App() {
  return (
    <ThemeProvider theme="light">
      <YourApp />
    </ThemeProvider>
  )
}

// Or with custom configuration
const customTheme = {
  mode: 'light',
  colors: {
    primary: '#3b82f6',
    secondary: '#64748b'
  }
}

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  )
}
```

```vue [Vue]
<template>
  <ThemeProvider theme="light">
    <YourApp />
  </ThemeProvider>
</template>

<script setup>
import { ThemeProvider } from '@ui-lib/ui-vue'

// Or with custom configuration
const customTheme = {
  mode: 'light',
  colors: {
    primary: '#3b82f6',
    secondary: '#64748b'
  }
}
</script>
```

:::

### Using the Theme Hook

Access and modify theme values programmatically:

::: code-group

```tsx [React]
import { useTheme } from '@ui-lib/ui-react'

function ThemeToggle() {
  const { theme, setTheme, isDark } = useTheme()
  
  return (
    <button 
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded border"
    >
      {isDark ? '☀️' : '🌙'} 
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

function CustomColorComponent() {
  const { colors } = useTheme()
  
  return (
    <div style={{ backgroundColor: colors.primary }}>
      This uses the theme's primary color
    </div>
  )
}
```

```vue [Vue]
<template>
  <button 
    @click="toggleTheme"
    class="p-2 rounded border"
  >
    {{ isDark ? '☀️' : '🌙' }} 
    {{ isDark ? 'Light Mode' : 'Dark Mode' }}
  </button>
</template>

<script setup>
import { useTheme } from '@ui-lib/ui-vue'

const { theme, setTheme, isDark, colors } = useTheme()

const toggleTheme = () => {
  setTheme(isDark.value ? 'light' : 'dark')
}
</script>
```

:::

## Theme Configuration

### Complete Theme Object

Here's the full structure of a theme configuration:

```typescript
interface Theme {
  mode: 'light' | 'dark'
  colors: {
    // Brand colors
    primary: ColorScale
    secondary: ColorScale
    
    // Semantic colors
    success: ColorScale
    warning: ColorScale
    error: ColorScale
    info: ColorScale
    
    // Neutral colors
    gray: ColorScale
    
    // Background colors
    background: string
    surface: string
    overlay: string
    
    // Text colors
    text: {
      primary: string
      secondary: string
      disabled: string
      inverse: string
    }
    
    // Border colors
    border: {
      default: string
      muted: string
      strong: string
    }
  }
  
  typography: {
    fonts: {
      sans: string[]
      mono: string[]
    }
    sizes: {
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
      // ... more sizes
    }
    weights: {
      normal: number
      medium: number
      semibold: number
      bold: number
    }
  }
  
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    // ... more sizes
  }
  
  radius: {
    none: string
    sm: string
    md: string
    lg: string
    full: string
  }
  
  shadows: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}
```

### Color Scale System

Our color system uses 11-step scales for consistency:

```typescript
interface ColorScale {
  50: string   // Lightest
  100: string
  200: string
  300: string
  400: string
  500: string  // Base color
  600: string
  700: string
  800: string
  900: string
  950: string  // Darkest
}

// Example: Blue color scale
const blue: ColorScale = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',  // Primary blue
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
  950: '#172554'
}
```

## Creating Custom Themes

### 1. Brand Colors

Define your brand's primary colors:

```typescript
const brandTheme = {
  mode: 'light',
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',  // Your brand blue
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49'
    },
    secondary: {
      // Your secondary brand color scale
      500: '#64748b'
    }
  }
}
```

### 2. Dark Theme Variant

Create a dark mode version:

```typescript
const darkTheme = {
  mode: 'dark',
  colors: {
    primary: {
      // Same color scale, but different usage
      500: '#60a5fa'  // Lighter blue for dark backgrounds
    },
    background: '#0f172a',
    surface: '#1e293b',
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      disabled: '#64748b'
    },
    border: {
      default: '#334155',
      muted: '#1e293b',
      strong: '#475569'
    }
  }
}
```

### 3. Complete Theme Examples

#### Minimal Theme

```typescript
const minimalTheme = {
  mode: 'light',
  colors: {
    primary: {
      500: '#000000'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      500: '#6b7280',
      900: '#111827'
    }
  },
  radius: {
    none: '0px',
    sm: '2px',
    md: '4px',
    lg: '6px'
  }
}
```

#### Colorful Theme

```typescript
const colorfulTheme = {
  mode: 'light',
  colors: {
    primary: {
      500: '#8b5cf6'  // Purple
    },
    secondary: {
      500: '#06b6d4'  // Cyan
    },
    success: {
      500: '#10b981'  // Emerald
    },
    warning: {
      500: '#f59e0b'  // Amber
    },
    error: {
      500: '#ef4444'  // Red
    }
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    full: '9999px'
  }
}
```

## CSS Variables

### Automatic CSS Variable Generation

Our theming system automatically generates CSS variables:

```css
:root {
  --ui-color-primary-50: #eff6ff;
  --ui-color-primary-500: #3b82f6;
  --ui-color-primary-900: #1e3a8a;
  
  --ui-spacing-sm: 0.5rem;
  --ui-spacing-md: 1rem;
  --ui-spacing-lg: 1.5rem;
  
  --ui-radius-sm: 0.25rem;
  --ui-radius-md: 0.375rem;
  --ui-radius-lg: 0.5rem;
}
```

### Using CSS Variables Directly

You can use these variables in your custom CSS:

```css
.custom-component {
  background-color: var(--ui-color-primary-500);
  padding: var(--ui-spacing-md);
  border-radius: var(--ui-radius-md);
  color: var(--ui-color-text-primary);
}

/* Responsive with CSS variables */
@media (max-width: 768px) {
  .custom-component {
    padding: var(--ui-spacing-sm);
  }
}
```

## Advanced Theming

### Dynamic Theme Switching

Implement smooth theme transitions:

```typescript
// React
import { useTheme } from '@ui-lib/ui-react'

function AdvancedThemeToggle() {
  const { setTheme, theme } = useTheme()
  
  const themes = [
    { name: 'Light', value: 'light', icon: '☀️' },
    { name: 'Dark', value: 'dark', icon: '🌙' },
    { name: 'Auto', value: 'system', icon: '🔄' }
  ]
  
  return (
    <div className="flex gap-2">
      {themes.map(({ name, value, icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`px-3 py-2 rounded ${
            theme === value ? 'bg-primary-500 text-white' : 'bg-gray-100'
          }`}
        >
          {icon} {name}
        </button>
      ))}
    </div>
  )
}
```

### Theme Persistence

Save theme preferences to localStorage:

```typescript
// React
import { useEffect } from 'react'
import { useTheme } from '@ui-lib/ui-react'

function ThemeProvider({ children }) {
  const { theme, setTheme } = useTheme()
  
  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('ui-theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])
  
  // Save theme changes
  useEffect(() => {
    localStorage.setItem('ui-theme', theme)
  }, [theme])
  
  return children
}
```

### System Theme Detection

Detect and respond to system theme changes:

```typescript
function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      setSystemTheme(mediaQuery.matches ? 'dark' : 'light')
    }
    
    // Set initial value
    handleChange()
    
    // Listen for changes
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  return systemTheme
}
```

## Component-Level Theming

### Theming Individual Components

Override theme values for specific components:

```tsx
import { Button } from '@ui-lib/ui-react'

// Custom button with theme override
function CustomButton() {
  return (
    <Button 
      variant="primary"
      style={{
        '--ui-color-primary-500': '#ff6b6b',
        '--ui-radius-md': '20px'
      } as React.CSSProperties}
    >
      Custom Themed Button
    </Button>
  )
}
```

### Creating Theme Variants

Create component variants with different themes:

```typescript
const buttonVariants = {
  brand: {
    colors: {
      primary: { 500: '#8b5cf6' }
    }
  },
  success: {
    colors: {
      primary: { 500: '#10b981' }
    }
  },
  danger: {
    colors: {
      primary: { 500: '#ef4444' }
    }
  }
}
```

## Best Practices

### 1. Start with Semantic Colors

Use semantic color names instead of specific colors:

```tsx
// ✅ Good: Semantic naming
<Button variant="primary">Submit</Button>
<Alert variant="error">Error message</Alert>

// ❌ Avoid: Color-specific naming
<Button color="blue">Submit</Button>
<Alert color="red">Error message</Alert>
```

### 2. Maintain Contrast Ratios

Ensure accessibility by maintaining proper contrast:

```typescript
// Check contrast ratios in your theme
const theme = {
  colors: {
    primary: {
      500: '#3b82f6',  // AA compliant on white
      600: '#2563eb'   // AAA compliant on white
    }
  }
}
```

### 3. Test Both Light and Dark Modes

Always test your themes in both modes:

```tsx
function ThemePreview() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ThemeProvider theme="light">
        <YourComponent />
      </ThemeProvider>
      <ThemeProvider theme="dark">
        <YourComponent />
      </ThemeProvider>
    </div>
  )
}
```

### 4. Use Design Tokens

Define reusable design tokens:

```typescript
const designTokens = {
  colors: {
    brand: {
      primary: '#3b82f6',
      secondary: '#64748b'
    }
  },
  spacing: {
    component: '1rem',
    section: '2rem',
    page: '4rem'
  }
}
```

## Migration Guide

### From v1 to v2

If you're upgrading from an older version:

```typescript
// Old way (v1)
const oldTheme = {
  primaryColor: '#3b82f6',
  backgroundColor: '#ffffff'
}

// New way (v2)
const newTheme = {
  colors: {
    primary: {
      500: '#3b82f6'
    },
    background: '#ffffff'
  }
}
```

## Resources

- 🎨 [Color Palette Generator](https://ui-lib.dev/tools/colors)
- 🔍 [Contrast Checker](https://ui-lib.dev/tools/contrast)
- 📱 [Theme Preview](https://ui-lib.dev/tools/preview)
- 🎯 [Design Tokens](https://ui-lib.dev/design-tokens) 