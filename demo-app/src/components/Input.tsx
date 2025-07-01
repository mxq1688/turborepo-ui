import React, { forwardRef, useState } from 'react'
import { InputProps } from '../types'
import { cn, getSizeClasses, generateId } from '../utils'

// 输入框组件
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    type = 'text',
    label,
    error,
    helperText,
    size = 'md',
    icon,
    disabled = false,
    required = false,
    ...props 
  }, ref) => {
    const [focused, setFocused] = useState(false)
    const inputId = generateId('input')
    
    const baseClasses = 'input-base'
    const sizeClasses = getSizeClasses(size, 'input')
    
    const hasError = !!error
    const hasIcon = !!icon

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-1',
              hasError ? 'text-error-600' : 'text-gray-700',
              disabled && 'text-gray-400'
            )}
          >
            {label}
            {required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {hasIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className={cn(
                'text-gray-400',
                hasError && 'text-error-400',
                focused && !hasError && 'text-primary-400'
              )}>
                {icon}
              </span>
            </div>
          )}
          
          <input
            ref={ref}
            type={type}
            id={inputId}
            className={cn(
              baseClasses,
              sizeClasses,
              hasIcon && 'pl-10',
              hasError && 'border-error-300 focus:border-error-500 focus:ring-error-500',
              'transition-colors duration-200',
              className
            )}
            disabled={disabled}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
          />
        </div>
        
        {(error || helperText) && (
          <div className="mt-1">
            {error && (
              <p className="text-sm text-error-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </p>
            )}
            {!error && helperText && (
              <p className="text-sm text-gray-500">
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input 