'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GlassCardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'flat';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
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
    'glass-card rounded-2xl transition-all duration-300',
    paddingStyles[padding],
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
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
