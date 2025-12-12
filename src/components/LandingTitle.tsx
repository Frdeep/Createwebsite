'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useTransition';
import { easing, landingOverlayVariants } from '@/lib/animations';

interface LandingTitleProps {
  isVisible: boolean;
  isTransitioning: boolean;
  transitionPhase: 'idle' | 'clicked' | 'compressing' | 'migrating' | 'revealing' | 'complete';
  onTrigger: () => void;
}

export function LandingTitle({
  isVisible,
  isTransitioning,
  transitionPhase,
  onTrigger,
}: LandingTitleProps) {
  const prefersReducedMotion = useReducedMotion();

  // Calculate animation values based on phase
  const getAnimationValues = () => {
    switch (transitionPhase) {
      case 'clicked':
        return {
          scale: 0.96,
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          y: 0,
        };
      case 'compressing':
        return {
          scale: 1,
          fontSize: '1.25rem',
          y: 0,
        };
      case 'migrating':
      case 'revealing':
      case 'complete':
        return {
          scale: 1,
          fontSize: '1.25rem',
          y: '-50vh',
        };
      default:
        return {
          scale: 1,
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          y: 0,
        };
    }
  };

  const animationValues = getAnimationValues();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white-soft"
          variants={landingOverlayVariants}
          initial="visible"
          animate={transitionPhase === 'revealing' || transitionPhase === 'complete' ? 'hidden' : 'visible'}
          exit="hidden"
          style={{ pointerEvents: isTransitioning ? 'none' : 'auto' }}
        >
          <motion.button
            onClick={onTrigger}
            disabled={isTransitioning}
            className="liquid-glass-title cursor-pointer select-none border-none bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black-soft focus-visible:ring-offset-4 rounded-lg"
            style={{
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: '#0A0A0A',
            }}
            initial={{
              scale: 1,
              fontSize: 'clamp(4rem, 12vw, 8rem)',
            }}
            animate={{
              scale: animationValues.scale,
              fontSize: animationValues.fontSize,
              y: animationValues.y,
              letterSpacing: transitionPhase === 'compressing' || transitionPhase === 'migrating' ? '-0.02em' : '-0.04em',
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              ease: easing.smooth,
            }}
            whileHover={
              !isTransitioning && !prefersReducedMotion
                ? {
                    scale: 1.05,
                    transition: {
                      duration: 0.4,
                      ease: easing.smooth,
                    },
                  }
                : undefined
            }
            aria-label="Cliquez pour entrer sur le site Deepgital"
          >
            <motion.span
              className="relative inline-block"
              animate={
                !isTransitioning && !prefersReducedMotion
                  ? {
                      scale: [1, 1.02, 1],
                    }
                  : undefined
              }
              transition={
                !isTransitioning
                  ? {
                      duration: 3,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    }
                  : undefined
              }
            >
              Deepgital
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
