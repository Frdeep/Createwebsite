'use client';

import { useState, useCallback, useEffect } from 'react';

interface UseTransitionReturn {
  isLanding: boolean;
  isTransitioning: boolean;
  isRevealed: boolean;
  triggerTransition: () => void;
}

export function useTransition(): UseTransitionReturn {
  const [isLanding, setIsLanding] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const triggerTransition = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Phase 1-4: Title transformation (0-800ms)
    setTimeout(() => {
      setIsLanding(false);
    }, 400);
    
    // Phase 5: Content reveal (700-1200ms)
    setTimeout(() => {
      setIsRevealed(true);
      setIsTransitioning(false);
    }, 800);
  }, [isTransitioning]);

  return {
    isLanding,
    isTransitioning,
    isRevealed,
    triggerTransition,
  };
}

// Hook for scroll detection
export function useScrollPosition(threshold: number = 20) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}

// Hook for detecting reduced motion preference
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

// Hook for intersection observer (scroll reveal)
export function useInView(options?: IntersectionObserverInit) {
  const [ref, setRef] = useState<Element | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(ref);
        }
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return { ref: setRef, isInView };
}
