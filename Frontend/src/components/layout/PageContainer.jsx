import React from 'react';

export const PageContainer = ({
  children,
  className = '',
  size = 'default', // 'sm', 'default', 'lg', 'full'
  noPadding = false,
}) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-(--breakpoint-2xl)',
    full: 'max-w-full',
  };

  return (
    <div
      className={`mx-auto w-full ${sizeClasses[size] || sizeClasses.default} ${
        noPadding ? '' : 'px-4 sm:px-6 lg:px-8 py-8 sm:py-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;

