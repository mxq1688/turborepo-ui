import React, { forwardRef } from 'react'
import { CardProps } from '../types'
import { cn, getSizeClasses } from '../utils'

// 卡片组件
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className,
    padding = 'md',
    shadow = true,
    border = true,
    children,
    ...props 
  }, ref) => {
    const baseClasses = 'card-base'
    const paddingClasses = {
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6'
    }[padding]
    
    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          paddingClasses,
          shadow && 'shadow-soft hover:shadow-medium transition-shadow duration-200',
          !border && 'border-0',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// 卡片头部组件
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'border-b border-gray-200 pb-3 mb-4',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

// 卡片标题组件
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, level = 3, children, ...props }, ref) => {
    const sizeClasses = {
      1: 'text-2xl font-bold',
      2: 'text-xl font-bold',
      3: 'text-lg font-semibold',
      4: 'text-base font-semibold',
      5: 'text-sm font-semibold',
      6: 'text-xs font-semibold'
    }[level]
    
    const commonProps = {
      ref: ref as any,
      className: cn('text-gray-900 leading-tight', sizeClasses, className),
      ...props
    }
    
    switch (level) {
      case 1: return <h1 {...commonProps}>{children}</h1>
      case 2: return <h2 {...commonProps}>{children}</h2>
      case 3: return <h3 {...commonProps}>{children}</h3>
      case 4: return <h4 {...commonProps}>{children}</h4>
      case 5: return <h5 {...commonProps}>{children}</h5>
      case 6: return <h6 {...commonProps}>{children}</h6>
      default: return <h3 {...commonProps}>{children}</h3>
    }
  }
)

CardTitle.displayName = 'CardTitle'

// 卡片描述组件
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-sm text-gray-600 mt-1',
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)

CardDescription.displayName = 'CardDescription'

// 卡片内容组件
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

// 卡片底部组件
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'border-t border-gray-200 pt-3 mt-4 flex justify-end gap-2',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter'

// 创建组合Card类型
interface CardComponent extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> {
  Header: typeof CardHeader
  Title: typeof CardTitle
  Description: typeof CardDescription
  Content: typeof CardContent
  Footer: typeof CardFooter
}

// 组合导出
const ComposedCard = Card as CardComponent
ComposedCard.Header = CardHeader
ComposedCard.Title = CardTitle
ComposedCard.Description = CardDescription
ComposedCard.Content = CardContent
ComposedCard.Footer = CardFooter

export default ComposedCard 