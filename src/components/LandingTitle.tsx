'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useTransition';

interface LandingTitleProps {
  onTrigger: () => void;
  isTransitioning: boolean;
}

export function LandingTitle({ onTrigger, isTransitioning }: LandingTitleProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white-soft"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.5, delay: 0.3 }
      }}
    >
      <motion.button
        onClick={onTrigger}
        disabled={isTransitioning}
        className="relative cursor-pointer border-none bg-transparent focus:outline-none select-none group"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
        }}
        exit={{
          scale: 0.8,
          y: -200,
          opacity: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        aria-label="Cliquez pour entrer sur le site"
      >
        {/* Liquid Glass Effect */}
        <motion.div
          className="absolute inset-0 -m-24 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
            filter: 'blur(60px)',
            mixBlendMode: 'overlay',
          }}
          animate={prefersReducedMotion ? {} : {
            opacity: [0.6, 0.8, 0.6],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Title with breathing animation */}
        <motion.span
          className="relative block text-black-soft font-bold"
          style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          Deepgital
        </motion.span>

        {/* Hover indicator */}
        <motion.span
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-gray-400 text-small"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          Cliquez pour entrer
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
