import React from 'react';
import { styleUtils, combineClasses } from '@ui-lib/shared';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: {
      switch: 'h-4 w-7',
      thumb: 'h-3 w-3',
      translate: checked ? 'translate-x-3' : 'translate-x-0'
    },
    md: {
      switch: 'h-6 w-11',
      thumb: 'h-4 w-4',
      translate: checked ? 'translate-x-5' : 'translate-x-1'
    },
    lg: {
      switch: 'h-8 w-14',
      thumb: 'h-6 w-6',
      translate: checked ? 'translate-x-6' : 'translate-x-1'
    }
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  return (
    <label className="inline-flex items-center cursor-pointer">
      <button
        type="button"
        className={combineClasses(
          styleUtils.switch.base,
          currentSize.switch,
          checked ? styleUtils.switch.enabled : styleUtils.switch.disabled,
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        role="switch"
        aria-checked={checked}
      >
        <span
          className={combineClasses(
            styleUtils.switch.thumb,
            currentSize.thumb,
            currentSize.translate
          )}
        />
      </button>
      {label && (
        <span className="ml-3 text-sm font-medium text-gray-700">
          {label}
        </span>
      )}
    </label>
  );
}; 