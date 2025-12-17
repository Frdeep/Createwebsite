'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { fadeInUp } from '@/lib/animations';
import { useInView } from '@/hooks/useTransition';

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="apropos" className="py-4xl scroll-mt-16">
      <Container>
        <motion.div
          ref={ref}
          className="max-w-[800px] mx-auto text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
        >
          {/* Section Header */}
          <motion.div className="mb-lg" variants={fadeInUp}>
            <span 
              className="block text-gray-400 mb-[12px]"
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              À propos
            </span>
            <h2 
              className="text-black-soft mb-lg"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Deepgital
            </h2>
          </motion.div>

          {/* About Text */}
          <motion.p
            className="text-gray-600"
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
              lineHeight: 1.8,
              fontWeight: 400,
            }}
            variants={fadeInUp}
          >
            On transforme vos idées en outils concrets. Sites, apps, automatisations, 
            vidéos — ce qui vous fait gagner du temps et une longueur d&apos;avance. 
            Pas de bla-bla. Du résultat.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
