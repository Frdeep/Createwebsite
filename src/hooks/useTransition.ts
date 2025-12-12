'use client';

import { useState, useCallback, useEffect } from 'react';

interface UseTransitionReturn {
  isLanding: boolean;
  isTransitioning: boolean;
  hasTransitioned: boolean;
  triggerTransition: () => void;
  transitionPhase: 'idle' | 'clicked' | 'compressing' | 'migrating' | 'revealing' | 'complete';
}

export function useTransition(): UseTransitionReturn {
  const [isLanding, setIsLanding] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasTransitioned, setHasTransitioned] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState<UseTransitionReturn['transitionPhase']>('idle');

  const triggerTransition = useCallback(() => {
    if (isTransitioning || hasTransitioned) return;

    setIsTransitioning(true);

    // Phase 1: Clicked feedback (0-100ms)
    setTransitionPhase('clicked');

    // Phase 2: Compression (100-400ms)
    setTimeout(() => {
      setTransitionPhase('compressing');
    }, 100);

    // Phase 3: Migration (200-600ms)
    setTimeout(() => {
      setTransitionPhase('migrating');
    }, 200);

    // Phase 4: Revealing navbar (500-800ms)
    setTimeout(() => {
      setTransitionPhase('revealing');
      setIsLanding(false);
    }, 500);

    // Phase 5: Complete (700-1200ms)
    setTimeout(() => {
      setTransitionPhase('complete');
      setIsTransitioning(false);
      setHasTransitioned(true);
    }, 1200);
  }, [isTransitioning, hasTransitioned]);

  // Check for stored transition state
  useEffect(() => {
    const stored = sessionStorage.getItem('deepgital-transitioned');
    if (stored === 'true') {
      setIsLanding(false);
      setHasTransitioned(true);
      setTransitionPhase('complete');
    }
  }, []);

  // Store transition state
  useEffect(() => {
    if (hasTransitioned) {
      sessionStorage.setItem('deepgital-transitioned', 'true');
    }
  }, [hasTransitioned]);

  return {
    isLanding,
    isTransitioning,
    hasTransitioned,
    triggerTransition,
    transitionPhase,
  };
}

// Hook for scroll-based animations
export function useScrollReveal(threshold: number = 0.2) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref);
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return { ref: setRef, isVisible };
}

// Hook for detecting scroll position
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollY, isScrolled };
}

// Hook for reduced motion preference
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
