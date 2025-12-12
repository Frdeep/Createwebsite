'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTransition, useReducedMotion } from '@/hooks/useTransition';
import { staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { LandingTitle } from '@/components/LandingTitle';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const {
    isLanding,
    isTransitioning,
    hasTransitioned,
    triggerTransition,
    transitionPhase,
  } = useTransition();

  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Landing Title Overlay */}
      <LandingTitle
        isVisible={isLanding}
        isTransitioning={isTransitioning}
        transitionPhase={transitionPhase}
        onTrigger={triggerTransition}
      />

      {/* Navbar */}
      <Navbar
        isVisible={!isLanding || transitionPhase === 'revealing' || transitionPhase === 'complete'}
        transitionPhase={transitionPhase}
      />

      {/* Main Content */}
      <AnimatePresence>
        {(!isLanding || hasTransitioned) && (
          <motion.main
            id="main-content"
            className="min-h-screen bg-white-soft pb-20 md:pb-0"
            variants={staggerContainerVariants}
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate="visible"
            exit="hidden"
          >
            <motion.div
              variants={staggerItemVariants}
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              animate="visible"
              transition={{ delay: prefersReducedMotion ? 0 : 0.7 }}
            >
              <Hero />
            </motion.div>

            <motion.div
              variants={staggerItemVariants}
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              animate="visible"
              transition={{ delay: prefersReducedMotion ? 0 : 0.8 }}
            >
              <Services />
            </motion.div>

            <motion.div
              variants={staggerItemVariants}
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              animate="visible"
              transition={{ delay: prefersReducedMotion ? 0 : 0.9 }}
            >
              <Projects />
            </motion.div>

            <motion.div
              variants={staggerItemVariants}
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              animate="visible"
              transition={{ delay: prefersReducedMotion ? 0 : 1.0 }}
            >
              <About />
            </motion.div>

            <motion.div
              variants={staggerItemVariants}
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              animate="visible"
              transition={{ delay: prefersReducedMotion ? 0 : 1.1 }}
            >
              <Contact />
            </motion.div>

            <motion.div
              variants={staggerItemVariants}
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              animate="visible"
              transition={{ delay: prefersReducedMotion ? 0 : 1.2 }}
            >
              <Footer />
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
