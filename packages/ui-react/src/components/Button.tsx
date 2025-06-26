import React, { forwardRef } from 'react';
import type { ButtonProps as SharedButtonProps } from '@ui-lib/shared';
import { styleUtils, combineClasses } from '@ui-lib/shared';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
          Omit<SharedButtonProps, 'children'> {
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    console.log('React Button 渲染:', { variant, size, className });

    const classes = combineClasses(
      styleUtils.button.base,
      styleUtils.button.variants[variant],
      styleUtils.button.sizes[size],
      className
    );

    console.log('最终样式类:', classes);

    return (
      <button
        className={classes}
        ref={ref}
        onClick={(e) => {
          console.log('🐛 React按钮被点击!', { variant, size });
          props.onClick?.(e);
        }}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button'; 