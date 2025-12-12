'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { sectionVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { useScrollReveal, useReducedMotion } from '@/hooks/useTransition';

export function Hero() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id="hero"
      className="pt-32 pb-24 md:pt-40 md:pb-32"
      variants={sectionVariants}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      animate={isVisible || prefersReducedMotion ? 'visible' : 'hidden'}
    >
      <Container>
        <motion.div
          variants={staggerContainerVariants}
          initial={prefersReducedMotion ? 'visible' : 'hidden'}
          animate={isVisible || prefersReducedMotion ? 'visible' : 'hidden'}
          className="flex flex-col items-start"
        >
          <motion.div variants={staggerItemVariants}>
            <Badge className="mb-6">Agence Créative</Badge>
          </motion.div>

          <motion.h1
            variants={staggerItemVariants}
            className="text-[clamp(3rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-black-soft mb-6 max-w-[800px]"
          >
            Nous créons des expériences
            <br />
            digitales mémorables
          </motion.h1>

          <motion.p
            variants={staggerItemVariants}
            className="text-[clamp(1.125rem,2vw,1.375rem)] font-normal leading-[1.6] text-gray-500 max-w-[600px] mb-12"
          >
            Deepgital accompagne les marques ambitieuses avec l&apos;IA vidéo, 
            le développement sur mesure et l&apos;automatisation.
          </motion.p>

          <motion.div
            variants={staggerItemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="#services" variant="primary" size="lg">
              Découvrir nos services
            </Button>
            <Button href="#projets" variant="secondary" size="lg">
              Voir les projets
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
