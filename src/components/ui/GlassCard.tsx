'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { cardHoverVariants } from '@/lib/animations';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'flat';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  as?: 'div' | 'article' | 'section';
}

export function GlassCard({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = false,
  as = 'div',
}: GlassCardProps) {
  const variantClasses = {
    default: [
      'bg-[rgba(255,255,255,0.72)]',
      'backdrop-blur-[40px]',
      'backdrop-saturate-[180%]',
      'border',
      'border-[rgba(255,255,255,0.2)]',
      'shadow-[0_4px_24px_rgba(0,0,0,0.04)]',
      'rounded-xl',
    ].join(' '),
    elevated: [
      'bg-white',
      'border',
      'border-[rgba(0,0,0,0.04)]',
      'shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_24px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.04)]',
      'rounded-2xl',
    ].join(' '),
    flat: [
      'bg-white-muted',
      'border',
      'border-gray-100',
      'rounded-xl',
    ].join(' '),
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10 md:p-16',
  };

  const baseClasses = clsx(
    variantClasses[variant],
    paddingClasses[padding],
    className
  );

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.99 }}
      >
        {children}
      </motion.div>
    );
  }

  const Component = as;

  return (
    <Component className={baseClasses}>
      {children}
    </Component>
  );
}
