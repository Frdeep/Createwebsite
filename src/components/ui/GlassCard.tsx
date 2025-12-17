'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GlassCardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'flat';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const paddingStyles = {
  sm: 'p-md',
  md: 'p-lg',
  lg: 'p-2xl',
};

const variantStyles = {
  default: 'glass rounded-xl',
  elevated: 'glass-elevated rounded-2xl',
  flat: 'glass-flat rounded-lg',
};

export function GlassCard({ 
  children, 
  variant = 'default', 
  padding = 'md',
  hover = false,
  className,
  onClick,
}: GlassCardProps) {
  const baseClasses = clsx(
    variantStyles[variant],
    paddingStyles[padding],
    'transition-all duration-400 ease-smooth',
    hover && 'cursor-pointer',
    className
  );

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        onClick={onClick}
        whileHover={{ 
          y: -4, 
          scale: 1.01,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.02), 0 12px 32px rgba(0, 0, 0, 0.08), 0 24px 64px rgba(0, 0, 0, 0.06)'
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses} onClick={onClick}>
      {children}
    </div>
  );
}
