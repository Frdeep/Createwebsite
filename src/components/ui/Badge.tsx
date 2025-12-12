'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'dark';
}

export function Badge({
  children,
  className,
  variant = 'default',
}: BadgeProps) {
  const variantClasses = {
    default: [
      'bg-white-muted',
      'text-gray-500',
    ].join(' '),
    glass: [
      'bg-[rgba(255,255,255,0.9)]',
      'backdrop-blur-[10px]',
      'text-black-soft',
    ].join(' '),
    dark: [
      'bg-black-soft',
      'text-white',
    ].join(' '),
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center',
        'px-3.5 py-1.5',
        'rounded-full',
        'text-xs font-semibold',
        'tracking-[0.04em]',
        'uppercase',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
