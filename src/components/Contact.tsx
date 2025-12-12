'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { sectionVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { useScrollReveal, useReducedMotion } from '@/hooks/useTransition';

export function Contact() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="py-32"
      variants={sectionVariants}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      animate={isVisible || prefersReducedMotion ? 'visible' : 'hidden'}
    >
      <Container>
        <div className="flex justify-center">
          <motion.div
            variants={staggerContainerVariants}
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate={isVisible || prefersReducedMotion ? 'visible' : 'hidden'}
            className="w-full max-w-[700px]"
          >
            <GlassCard
              variant="elevated"
              padding="xl"
              className="text-center bg-gradient-to-b from-white to-white-muted rounded-[32px]"
            >
              <motion.h2
                variants={staggerItemVariants}
                className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.02em] text-black-soft mb-4"
              >
                Démarrons un projet ensemble
              </motion.h2>

              <motion.p
                variants={staggerItemVariants}
                className="text-body text-gray-500 mb-8"
              >
                Vous avez une idée, un projet ? Discutons-en et donnons vie à votre vision.
              </motion.p>

              <motion.div variants={staggerItemVariants}>
                <Button
                  href="mailto:contact@deepgital.fr"
                  variant="primary"
                  size="lg"
                >
                  Nous contacter
                </Button>
              </motion.div>

              <motion.p
                variants={staggerItemVariants}
                className="mt-6 text-[0.9375rem] text-gray-400"
              >
                ou écrivez-nous à{' '}
                <a
                  href="mailto:contact@deepgital.fr"
                  className="text-gray-500 hover:text-black-soft hover:underline transition-colors duration-200"
                >
                  contact@deepgital.fr
                </a>
              </motion.p>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
