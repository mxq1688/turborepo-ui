import React, { forwardRef } from 'react'
import { ButtonProps } from '../types'
import { cn, getColorClasses, getSizeClasses } from '../utils'

// 按钮组件
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    icon,
    children,
    ...props 
  }, ref) => {
    const baseClasses = 'btn-base'
    const variantClasses = getColorClasses(variant, 'button')
    const sizeClasses = getSizeClasses(size, 'button')
    
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses,
          sizeClasses,
          isDisabled && 'opacity-60 cursor-not-allowed',
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && icon && (
          <span className="mr-2">
            {icon}
          </span>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button 