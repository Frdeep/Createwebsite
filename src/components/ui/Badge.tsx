'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'light' | 'dark';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'default',
  className 
}: BadgeProps) {
  const baseClasses = clsx(
    'inline-flex items-center px-[12px] py-[6px] rounded-sm text-[0.8125rem] font-medium',
    {
      'bg-white-muted text-gray-600': variant === 'default',
      'bg-white/90 backdrop-blur-[10px] text-black-soft': variant === 'light',
      'bg-black-soft text-white': variant === 'dark',
    },
    className
  );

  return (
    <span className={baseClasses}>
      {children}
    </span>
  );
}
