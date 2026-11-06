import React from 'react';
import { Loader2 } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  isLoading = false,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-xs active:scale-[0.98]';

  const variants = {
    primary:
      'bg-sky-600 hover:bg-sky-700 text-white focus:ring-sky-500 shadow-sky-600/20',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-white focus:ring-slate-900',
    outline:
      'border-2 border-sky-600 text-sky-600 hover:bg-sky-50 focus:ring-sky-500',
    ghost:
      'text-slate-700 hover:bg-slate-100 focus:ring-slate-400 shadow-none',
    danger:
      'bg-rose-600 hover:bg-rose-700 text-white focus:ring-rose-500',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {!isLoading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  );
};

export default Button;

