import React, { useEffect } from 'react';
import { styleUtils, combineClasses } from '@ui-lib/shared';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md'
}) => {
  // ESC键关闭模态框
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // 阻止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  };

  return (
    <div className={styleUtils.modal.overlay}>
      {/* Background overlay - click to close */}
      <button
        className="absolute inset-0 w-full h-full bg-transparent cursor-default"
        onClick={onClose}
        aria-label="Close modal"
      />
      
      <div 
        className={combineClasses(
          styleUtils.modal.content,
          sizeClasses[size],
          'relative z-10'
        )}
        role="dialog"
        aria-modal="true"
      >
        {title && (
          <div className={styleUtils.modal.header}>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        )}
        
        <div className={styleUtils.modal.body}>
          {children}
        </div>

        {footer && (
          <div className={styleUtils.modal.footer}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}; 