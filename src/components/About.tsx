'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { sectionVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { useScrollReveal, useReducedMotion } from '@/hooks/useTransition';

const stats = [
  { value: '50+', label: 'Projets livrés' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '5', label: 'Années d\'expertise' },
];

export function About() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id="a-propos"
      className="py-24"
      variants={sectionVariants}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      animate={isVisible || prefersReducedMotion ? 'visible' : 'hidden'}
    >
      <Container size="narrow">
        <motion.div
          variants={staggerContainerVariants}
          initial={prefersReducedMotion ? 'visible' : 'hidden'}
          animate={isVisible || prefersReducedMotion ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.p
            variants={staggerItemVariants}
            className="text-xs font-semibold tracking-[0.08em] uppercase text-gray-400 mb-3"
          >
            À propos
          </motion.p>

          <motion.h2
            variants={staggerItemVariants}
            className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.02em] text-black-soft mb-8"
          >
            Deepgital
          </motion.h2>

          <motion.p
            variants={staggerItemVariants}
            className="text-[clamp(1.25rem,2.5vw,1.5rem)] leading-[1.8] text-gray-600 mb-16"
          >
            Nous sommes une équipe passionnée de créatifs et de développeurs, 
            unis par la conviction que le digital peut transformer les marques. 
            Notre approche allie innovation technologique et sensibilité artistique 
            pour créer des expériences qui marquent les esprits.
          </motion.p>

          <motion.div
            variants={staggerContainerVariants}
            className="grid grid-cols-3 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItemVariants}
                className="text-center"
              >
                <div className="text-5xl font-bold tracking-[-0.02em] text-black-soft mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-[0.04em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
