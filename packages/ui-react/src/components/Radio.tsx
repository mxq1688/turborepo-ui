import React from 'react';
import { styleUtils, combineClasses } from '@ui-lib/shared';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        className={combineClasses(
          styleUtils.radio.base,
          className
        )}
        {...props}
      />
      {label && (
        <span className={styleUtils.radio.label}>
          {label}
        </span>
      )}
    </label>
  );
};

// Radio Group 组件
export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange: (value: string) => void;
  name: string;
  label?: string;
  direction?: 'horizontal' | 'vertical';
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  name,
  label,
  direction = 'vertical'
}) => {
  return (
    <div>
      {label && (
        <div className="text-sm font-medium text-gray-700 mb-2">
          {label}
        </div>
      )}
      <div className={combineClasses(
        'flex',
        direction === 'horizontal' ? 'flex-row space-x-4' : 'flex-col space-y-2'
      )}>
        {options.map((option) => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            disabled={option.disabled}
            label={option.label}
          />
        ))}
      </div>
    </div>
  );
}; 