import React, { forwardRef } from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', ...props }, ref) => {
    const classes = [
      'rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm',
      className
    ].join(' ');

    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', ...props }, ref) => {
    const classes = [
      'flex flex-col space-y-1.5 p-6',
      className
    ].join(' ');

    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className = '', ...props }, ref) => {
    const classes = [
      'text-2xl font-semibold leading-none tracking-tight',
      className
    ].join(' ');

    return (
      <h3
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', ...props }, ref) => {
    const classes = [
      'p-6 pt-0',
      className
    ].join(' ');

    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';
CardContent.displayName = 'CardContent'; 