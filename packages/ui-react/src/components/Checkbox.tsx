import React from 'react';
import { styleUtils, combineClasses } from '@ui-lib/shared';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  indeterminate?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  indeterminate = false,
  className,
  ...props
}) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className={combineClasses(
          styleUtils.checkbox.base,
          className
        )}
        ref={(input) => {
          if (input) input.indeterminate = indeterminate;
        }}
        {...props}
      />
      {label && (
        <span className={styleUtils.checkbox.label}>
          {label}
        </span>
      )}
    </label>
  );
}; 