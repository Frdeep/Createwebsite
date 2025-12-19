'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article';
}

export function Container({ 
  children, 
  className,
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component 
      className={clsx(
        'w-full max-w-container mx-auto px-lg',
        'md:px-lg',
        className
      )}
    >
      {children}
    </Component>
  );
}
