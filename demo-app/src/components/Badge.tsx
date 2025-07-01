import React, { forwardRef } from 'react'
import { BadgeProps } from '../types'
import { cn, getColorClasses, getSizeClasses } from '../utils'

// 徽章组件
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ 
    className,
    variant = 'primary',
    size = 'md',
    dot = false,
    children,
    ...props 
  }, ref) => {
    const baseClasses = 'badge-base'
    const variantClasses = getColorClasses(variant, 'badge')
    const sizeClasses = getSizeClasses(size, 'badge')
    
    if (dot) {
      return (
        <span
          ref={ref}
          className={cn(
            'inline-block w-2 h-2 rounded-full',
            variantClasses,
            className
          )}
          {...props}
        />
      )
    }

    return (
      <span
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses,
          sizeClasses,
          'font-medium',
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge 