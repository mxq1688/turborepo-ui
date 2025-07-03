import React from 'react';
import { styleUtils, combineClasses } from '@ui-lib/shared';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className
}) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-sm'
  };

  return (
    <span
      className={combineClasses(
        'inline-flex items-center rounded-full font-medium',
        styleUtils.badge.variants[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}; 