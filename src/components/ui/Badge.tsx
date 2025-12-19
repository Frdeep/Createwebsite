'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'light' | 'dark' | 'colored';
  color?: string;
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'default',
  color,
  className 
}: BadgeProps) {
  const baseClasses = clsx(
    'inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium',
    {
      'bg-gray-100 text-gray-700': variant === 'default',
      'bg-white/90 backdrop-blur-sm text-gray-900': variant === 'light',
      'bg-gray-900 text-white': variant === 'dark',
    },
    className
  );

  return (
    <span 
      className={baseClasses}
      style={color ? { backgroundColor: `${color}20`, color } : undefined}
    >
      {children}
    </span>
  );
}
