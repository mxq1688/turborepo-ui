# TypeScript Support

Our component library is built with TypeScript from the ground up, providing excellent type safety and developer experience.

## Overview

### ✅ What You Get

- **100% TypeScript** - All components are written in TypeScript
- **Complete Type Definitions** - Full IntelliSense support in your IDE
- **Generic Components** - Type-safe props with generic support
- **Theme Typing** - Fully typed theme system
- **Event Typing** - Properly typed event handlers
- **Utility Types** - Helper types for common patterns

### 📦 No Additional Setup Required

The library includes all necessary type definitions. No need to install `@types/*` packages!

## Component Props Typing

### Basic Component Usage

All component props are fully typed:

```tsx
import { Button, Input, Select } from '@ui-lib/ui-react'

// ✅ TypeScript will validate all props
<Button 
  variant="primary"          // Only accepts valid variants
  size="md"                  // Only accepts valid sizes
  onClick={(e) => {          // Event is properly typed
    console.log(e.target)
  }}
>
  Click me
</Button>

// ❌ TypeScript will catch errors
<Button 
  variant="invalid"          // Error: invalid variant
  size={123}                 // Error: wrong type
  nonExistentProp="value"    // Error: unknown prop
/>
```

### Importing Component Types

Access component prop types directly:

```tsx
import type { 
  ButtonProps, 
  InputProps, 
  SelectProps,
  CardProps 
} from '@ui-lib/ui-react'

// Use in your own component definitions
interface MyFormProps {
  submitButton: ButtonProps
  nameInput: InputProps
  categorySelect: SelectProps
}

function MyForm({ submitButton, nameInput, categorySelect }: MyFormProps) {
  return (
    <form>
      <Input {...nameInput} />
      <Select {...categorySelect} />
      <Button {...submitButton} />
    </form>
  )
}
```

## Generic Components

### Select Component with Generic Options

The Select component supports generic typing for options:

```tsx
import { Select } from '@ui-lib/ui-react'

// Define your option type
interface User {
  id: number
  name: string
  email: string
}

// Type-safe select
function UserSelect() {
  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]

  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  return (
    <Select<User>
      options={users}
      value={selectedUser}
      onChange={setSelectedUser}  // Fully typed
      getOptionLabel={(user) => user.name}      // user is typed as User
      getOptionValue={(user) => user.id}        // user is typed as User
      placeholder="Select a user"
    />
  )
}
```

### Table Component with Generic Data

The Table component supports generic row data:

```tsx
import { Table } from '@ui-lib/ui-react'

interface Product {
  id: number
  name: string
  price: number
  category: string
}

function ProductTable() {
  const products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Book', price: 29, category: 'Education' }
  ]

  return (
    <Table<Product>
      data={products}
      columns={[
        {
          key: 'name',
          header: 'Product Name',
          cell: (product) => product.name  // product is typed as Product
        },
        {
          key: 'price', 
          header: 'Price',
          cell: (product) => `$${product.price}`
        }
      ]}
    />
  )
}
```

## Event Handling

### Properly Typed Event Handlers

All event handlers receive properly typed events:

```tsx
import { Button, Input, Checkbox } from '@ui-lib/ui-react'

function EventExamples() {
  // Button click events
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked:', event.currentTarget.textContent)
  }

  // Input change events
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input value:', event.target.value)
  }

  // Checkbox change events
  const handleCheckboxChange = (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Checkbox state:', checked)
    console.log('Event:', event)
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>
        Click me
      </Button>
      
      <Input 
        onChange={handleInputChange}
        placeholder="Type something"
      />
      
      <Checkbox onChange={handleCheckboxChange}>
        Check me
      </Checkbox>
    </div>
  )
}
```

## Form Handling

### Type-Safe Forms

Create fully typed forms with validation:

```tsx
import { useForm } from 'react-hook-form'
import { Button, Input, Select, Checkbox } from '@ui-lib/ui-react'

// Define your form data type
interface ContactForm {
  name: string
  email: string
  company: string
  newsletter: boolean
  message?: string
}

function TypedContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<ContactForm>({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      newsletter: false,
      message: ''
    }
  })

  const onSubmit = (data: ContactForm) => {
    // data is fully typed as ContactForm
    console.log('Form data:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...register('name', { required: 'Name is required' })}
        label="Full Name"
        error={errors.name?.message}
      />
      
      <Input
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email format'
          }
        })}
        type="email"
        label="Email"
        error={errors.email?.message}
      />
      
      <Select
        {...register('company')}
        label="Company Size"
        options={[
          { value: 'startup', label: '1-10 employees' },
          { value: 'small', label: '11-50 employees' },
          { value: 'medium', label: '51-200 employees' }
        ]}
      />
      
      <Checkbox {...register('newsletter')}>
        Subscribe to newsletter
      </Checkbox>
      
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  )
}
```

## Theme Typing

### Typed Theme Configuration

Theme objects are fully typed:

```tsx
import type { Theme } from '@ui-lib/ui-react'

// Custom theme with full type checking
const customTheme: Theme = {
  mode: 'light',
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      // ... all color stops are required and typed
      500: '#3b82f6',
      950: '#172554'
    },
    // TypeScript ensures all required colors are provided
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    // ... etc
  }
  // All theme properties are type-checked
}

// Using the theme hook with typing
import { useTheme } from '@ui-lib/ui-react'

function ThemedComponent() {
  const { colors, spacing, setTheme } = useTheme()
  
  // All theme values are properly typed
  const primaryColor = colors.primary[500]  // string
  const smallSpacing = spacing.sm           // string
  
  return (
    <div 
      style={{
        backgroundColor: primaryColor,
        padding: smallSpacing
      }}
    >
      Themed content
    </div>
  )
}
```

## Utility Types

### Component Ref Types

Get proper ref types for components:

```tsx
import { useRef } from 'react'
import type { ButtonRef, InputRef } from '@ui-lib/ui-react'
import { Button, Input } from '@ui-lib/ui-react'

function RefExample() {
  const buttonRef = useRef<ButtonRef>(null)
  const inputRef = useRef<InputRef>(null)
  
  const handleFocusInput = () => {
    inputRef.current?.focus()  // Type-safe method access
  }
  
  const handleClickButton = () => {
    buttonRef.current?.click()  // Type-safe method access
  }
  
  return (
    <div>
      <Input ref={inputRef} placeholder="Focus me" />
      <Button ref={buttonRef} onClick={handleFocusInput}>
        Focus Input
      </Button>
    </div>
  )
}
```

### Variant and Size Types

Use exported types for consistent prop values:

```tsx
import type { 
  ButtonVariant, 
  ButtonSize,
  AlertVariant,
  InputSize 
} from '@ui-lib/ui-react'

// Create typed configuration objects
const buttonConfigs: Array<{
  variant: ButtonVariant
  size: ButtonSize
  label: string
}> = [
  { variant: 'primary', size: 'sm', label: 'Small Primary' },
  { variant: 'secondary', size: 'md', label: 'Medium Secondary' },
  { variant: 'outline', size: 'lg', label: 'Large Outline' }
]

// Use in components
function ButtonShowcase() {
  return (
    <div className="space-x-2">
      {buttonConfigs.map((config, index) => (
        <Button 
          key={index}
          variant={config.variant}  // Fully typed
          size={config.size}        // Fully typed
        >
          {config.label}
        </Button>
      ))}
    </div>
  )
}
```

## Advanced Patterns

### Higher-Order Components

Create typed HOCs for component enhancement:

```tsx
import type { ComponentType } from 'react'
import { Card } from '@ui-lib/ui-react'

// Generic HOC with proper typing
function withCard<T extends object>(
  Component: ComponentType<T>
): ComponentType<T & { cardTitle?: string }> {
  return function WrappedComponent({ cardTitle, ...props }) {
    return (
      <Card>
        {cardTitle && (
          <Card.Header>
            <Card.Title>{cardTitle}</Card.Title>
          </Card.Header>
        )}
        <Card.Content>
          <Component {...(props as T)} />
        </Card.Content>
      </Card>
    )
  }
}

// Usage
interface UserProfileProps {
  name: string
  email: string
}

function UserProfile({ name, email }: UserProfileProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  )
}

const CardUserProfile = withCard(UserProfile)

// Now CardUserProfile accepts both UserProfileProps and cardTitle
<CardUserProfile 
  name="John Doe" 
  email="john@example.com" 
  cardTitle="User Information" 
/>
```

### Render Props Pattern

Implement typed render props:

```tsx
import type { ReactNode } from 'react'

interface DataFetcherProps<T> {
  url: string
  children: (data: T | null, loading: boolean, error: string | null) => ReactNode
}

function DataFetcher<T>({ url, children }: DataFetcherProps<T>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data: T) => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [url])
  
  return children(data, loading, error)
}

// Usage with typing
interface User {
  id: number
  name: string
}

function UserList() {
  return (
    <DataFetcher<User[]> url="/api/users">
      {(users, loading, error) => {
        // users is typed as User[] | null
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error: {error}</div>
        if (!users) return <div>No data</div>
        
        return (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )
      }}
    </DataFetcher>
  )
}
```

## Configuration

### TypeScript Config Recommendations

For optimal TypeScript experience, use these `tsconfig.json` settings:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true
  },
  "include": [
    "src",
    "node_modules/@ui-lib/*/dist/types/**/*"
  ]
}
```

### Module Augmentation

Extend component props globally:

```tsx
// types/ui-lib.d.ts
import '@ui-lib/ui-react'

declare module '@ui-lib/ui-react' {
  interface ButtonProps {
    'data-testid'?: string  // Add test ID to all buttons
  }
  
  interface CardProps {
    elevation?: number      // Add elevation prop to cards
  }
}

// Now all Buttons accept data-testid
<Button data-testid="submit-button" variant="primary">
  Submit
</Button>
```

## Troubleshooting

### Common TypeScript Issues

**1. Missing Props Error**
```tsx
// ❌ Error: Property 'children' is missing
<Button variant="primary" />

// ✅ Fix: Provide required props
<Button variant="primary">Click me</Button>
```

**2. Generic Type Inference**
```tsx
// ❌ TypeScript can't infer the type
const options = []  // Type: never[]

// ✅ Explicitly type the array
const options: Array<{ value: string; label: string }> = []
```

**3. Event Handler Types**
```tsx
// ❌ Implicit any type
const handleClick = (e) => console.log(e)

// ✅ Explicit event type
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e)
}
```

### IDE Setup

For the best TypeScript experience:

**VS Code Extensions:**
- TypeScript Importer
- Auto Rename Tag
- Bracket Pair Colorizer
- Error Lens

**Settings:**
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.suggest.autoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always"
}
```

## Best Practices

### 1. Use Strict Mode

Enable strict TypeScript checking:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true
  }
}
```

### 2. Type Component Props Explicitly

```tsx
// ✅ Good: Explicit prop types
interface UserCardProps {
  user: User
  onEdit?: (user: User) => void
  showActions?: boolean
}

function UserCard({ user, onEdit, showActions = true }: UserCardProps) {
  // Component implementation
}

// ❌ Avoid: Inline prop types
function UserCard({ user, onEdit, showActions = true }: {
  user: User
  onEdit?: (user: User) => void  
  showActions?: boolean
}) {
  // Component implementation
}
```

### 3. Use Utility Types

Leverage TypeScript utility types:

```tsx
import type { ButtonProps } from '@ui-lib/ui-react'

// Pick specific props
type ButtonStyleProps = Pick<ButtonProps, 'variant' | 'size'>

// Omit unwanted props
type CustomButtonProps = Omit<ButtonProps, 'onClick'> & {
  onCustomClick: () => void
}

// Make props optional
type PartialButtonProps = Partial<ButtonProps>
```

## Migration from JavaScript

### Step-by-Step Migration

1. **Rename files** from `.js` to `.tsx`
2. **Add prop interfaces**
3. **Type event handlers**
4. **Add generic types** where needed

```tsx
// Before (JavaScript)
function UserList({ users, onUserClick }) {
  return (
    <div>
      {users.map(user => (
        <Button key={user.id} onClick={() => onUserClick(user)}>
          {user.name}
        </Button>
      ))}
    </div>
  )
}

// After (TypeScript)
interface User {
  id: number
  name: string
}

interface UserListProps {
  users: User[]
  onUserClick: (user: User) => void
}

function UserList({ users, onUserClick }: UserListProps) {
  return (
    <div>
      {users.map(user => (
        <Button 
          key={user.id} 
          onClick={() => onUserClick(user)}
        >
          {user.name}
        </Button>
      ))}
    </div>
  )
}
```

## Resources

- 📘 [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- ⚛️ [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- 🎯 [Type Challenges](https://github.com/type-challenges/type-challenges)
- 🔧 [VS Code TypeScript](https://code.visualstudio.com/docs/languages/typescript)
</rewritten_file> 