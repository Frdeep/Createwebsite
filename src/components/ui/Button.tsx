'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  href,
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center justify-center font-semibold rounded-[14px] transition-all duration-200 ease-out',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-black-soft focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    {
      // Primary variant
      'bg-black-soft text-white hover:bg-gray-600': variant === 'primary',
      // Secondary variant
      'bg-transparent text-black-soft border-[1.5px] border-gray-200 hover:bg-white-muted hover:border-gray-300': variant === 'secondary',
      // Sizes
      'px-md py-sm text-small': size === 'sm',
      'px-xl py-md text-body': size === 'md',
      'px-2xl py-lg text-body': size === 'lg',
    },
    className
  );

  const buttonContent = (
    <motion.button
      className={baseClasses}
      whileHover={disabled ? {} : { scale: variant === 'primary' ? 1.02 : 1 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
