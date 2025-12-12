'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';
import { buttonPressVariants } from '@/lib/animations';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  href,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: [
      'bg-black-soft',
      'text-white',
      'hover:bg-gray-600',
      'active:bg-black-pure',
    ].join(' '),
    secondary: [
      'bg-transparent',
      'text-black-soft',
      'border-[1.5px]',
      'border-gray-200',
      'hover:bg-white-muted',
      'hover:border-gray-300',
    ].join(' '),
    ghost: [
      'bg-transparent',
      'text-gray-500',
      'hover:text-black-soft',
      'hover:bg-white-muted',
    ].join(' '),
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-[14px]',
    lg: 'px-8 py-4 text-base rounded-[14px]',
  };

  const baseClasses = clsx(
    'inline-flex items-center justify-center',
    'font-semibold',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black-soft focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        variants={buttonPressVariants}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      variants={buttonPressVariants}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      {...props}
    >
      {children}
    </motion.button>
  );
}
