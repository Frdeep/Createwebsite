'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
  as?: keyof JSX.IntrinsicElements;
}

export function Container({
  children,
  className,
  size = 'default',
  as: Component = 'div',
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-[1200px]',
    narrow: 'max-w-[800px]',
    wide: 'max-w-[1400px]',
  };

  return (
    <Component
      className={clsx(
        'mx-auto w-full px-6 md:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
