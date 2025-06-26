import React from 'react';
import { styleUtils, combineClasses } from '@ui-lib/shared';

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  text,
  className
}) => {
  return (
    <div className={combineClasses('flex items-center justify-center', className)}>
      <div
        className={combineClasses(
          styleUtils.loading.spinner,
          styleUtils.loading.sizes[size]
        )}
      />
      {text && (
        <span className="ml-2 text-sm text-gray-600">
          {text}
        </span>
      )}
    </div>
  );
};

// 全屏加载组件
export interface FullscreenLoadingProps {
  visible: boolean;
  text?: string;
}

export const FullscreenLoading: React.FC<FullscreenLoadingProps> = ({
  visible,
  text = '加载中...'
}) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div className="text-center">
        <Loading size="lg" />
        <p className="mt-4 text-gray-600">{text}</p>
      </div>
    </div>
  );
}; 