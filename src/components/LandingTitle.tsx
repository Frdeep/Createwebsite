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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FEF7F0 0%, #FDF2F8 30%, #EEF2FF 60%, #F0FDFA 100%)',
      }}
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.5, delay: 0.2 }
      }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
            top: '10%',
            left: '-10%',
          }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            bottom: '-20%',
            right: '-15%',
          }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.15, 1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)',
            top: '40%',
            right: '20%',
          }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.button
        onClick={onTrigger}
        disabled={isTransitioning}
        className="relative cursor-pointer border-none bg-transparent focus:outline-none select-none group z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          scale: 0.8,
          y: -100,
          opacity: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Cliquez pour entrer sur le site"
      >
        {/* Glass card container */}
        <motion.div
          className="glass-card rounded-[32px] px-12 py-8 md:px-16 md:py-10"
          animate={prefersReducedMotion ? {} : {
            boxShadow: [
              '0 4px 24px rgba(0, 0, 0, 0.04), 0 12px 48px rgba(0, 0, 0, 0.03)',
              '0 8px 32px rgba(139, 92, 246, 0.1), 0 16px 64px rgba(59, 130, 246, 0.08)',
              '0 4px 24px rgba(0, 0, 0, 0.04), 0 12px 48px rgba(0, 0, 0, 0.03)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Title */}
          <motion.span
            className="relative block font-bold"
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              background: 'linear-gradient(135deg, #1F2937 0%, #374151 50%, #1F2937 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Deepgital
          </motion.span>

          {/* Subtitle */}
          <motion.p
            className="mt-3 text-center text-gray-500"
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Agence digitale créative
          </motion.p>
        </motion.div>

        {/* Click indicator */}
        <motion.div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5"
            animate={{ borderColor: ['#D1D5DB', '#9CA3AF', '#D1D5DB'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-2.5 bg-gray-400 rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <span className="text-sm text-gray-400">Cliquez pour entrer</span>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
