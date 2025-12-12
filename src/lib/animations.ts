import { Variants, Transition } from 'framer-motion';

// Custom easing curves
export const easing = {
  smooth: [0.16, 1, 0.3, 1] as const,
  bounce: [0.34, 1.56, 0.64, 1] as const,
  snappy: [0.25, 0.1, 0.25, 1] as const,
};

// Common transition presets
export const transitions = {
  smooth: {
    duration: 0.6,
    ease: easing.smooth,
  } as Transition,
  fast: {
    duration: 0.3,
    ease: easing.snappy,
  } as Transition,
  slow: {
    duration: 0.8,
    ease: easing.smooth,
  } as Transition,
};

// Landing title transformation variants
export const landingTitleVariants: Variants = {
  initial: {
    scale: 1,
    y: 0,
    fontSize: 'clamp(4rem, 12vw, 8rem)',
    letterSpacing: '-0.04em',
  },
  clicked: {
    scale: 0.96,
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
  compressing: {
    fontSize: '1.25rem',
    letterSpacing: '-0.02em',
    transition: {
      duration: 0.3,
      ease: easing.smooth,
    },
  },
  navbar: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
};

// Navbar link animation variants
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
      ease: easing.smooth,
    },
  }),
};

// Section reveal variants
export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
};

// Stagger container variants
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Stagger item variants
export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

// Card hover variants
export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
  hover: {
    scale: 1.01,
    y: -4,
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
};

// Fade variants
export const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// Landing overlay variants
export const landingOverlayVariants: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
      delay: 0.3,
    },
  },
};

// Button press animation
export const buttonPressVariants: Variants = {
  rest: {
    scale: 1,
  },
  pressed: {
    scale: 0.98,
  },
  hover: {
    scale: 1.02,
  },
};

// Image zoom variants (for project cards)
export const imageZoomVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
};
