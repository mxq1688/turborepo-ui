import React, { useState } from 'react';
import { styleUtils, combineClasses } from '@ui-lib/shared';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  className
}) => {
  const [imageError, setImageError] = useState(false);

  // 获取姓名首字母
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const sizeTextClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  // 如果有图片且没有错误，显示图片
  if (src && !imageError) {
    return (
      <img
        src={src}
        alt={alt || name || 'Avatar'}
        className={combineClasses(
          styleUtils.avatar.base,
          styleUtils.avatar.sizes[size],
          className
        )}
        onError={() => setImageError(true)}
      />
    );
  }

  // 否则显示首字母或占位符
  return (
    <div
      className={combineClasses(
        styleUtils.avatar.base,
        styleUtils.avatar.sizes[size],
        styleUtils.avatar.placeholder,
        sizeTextClasses[size],
        className
      )}
    >
      {name ? getInitials(name) : '?'}
    </div>
  );
}; 