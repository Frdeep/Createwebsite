import { Variants } from 'framer-motion';

// Easing curves
export const easings = {
  smooth: [0.16, 1, 0.3, 1] as const,
  snappy: [0.25, 0.1, 0.25, 1] as const,
};

// Fade in up animation for sections
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    }
  }
};

// Stagger container for grid items
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

// Stagger item for grid elements
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    }
  }
};

// Nav link animation
export const navLinkVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -10,
    filter: 'blur(4px)',
  },
  visible: (i: number) => ({
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.5 + i * 0.05,
      duration: 0.4,
      ease: easings.smooth,
    }
  })
};

// Title transform phases
export const titleTransformVariants = {
  initial: {
    scale: 1,
    fontSize: 'clamp(4rem, 12vw, 8rem)',
    letterSpacing: '-0.04em',
  },
  feedback: {
    scale: 0.96,
    transition: { duration: 0.1, ease: 'easeOut' }
  },
  compress: {
    scale: 0.8,
    fontSize: '1.25rem',
    letterSpacing: '-0.02em',
    transition: { duration: 0.3, ease: easings.smooth }
  },
  migrate: {
    y: 0,
    transition: { duration: 0.4, ease: easings.smooth }
  }
};

// Section reveal animation
export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    }
  }
};

// Project card hover animation
export const projectCardHover = {
  scale: 1.05,
  transition: { duration: 0.6, ease: easings.smooth }
};

// Glass reveal animation
export const glassReveal: Variants = {
  hidden: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
  },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(40px)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    }
  }
};
