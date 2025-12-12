'use client';

import { motion } from 'framer-motion';
import { Video, Code, Zap, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { sectionVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations';
import { useScrollReveal, useReducedMotion } from '@/hooks/useTransition';

const services = [
  {
    icon: Video,
    title: 'IA Vidéo',
    description: 'Production de contenus vidéo innovants propulsés par l\'intelligence artificielle pour des campagnes marketing impactantes.',
    gradient: 'gradient-ai-video',
    href: '#',
  },
  {
    icon: Code,
    title: 'Développement',
    description: 'Applications web et mobiles sur mesure, conçues avec les dernières technologies pour une expérience utilisateur optimale.',
    gradient: 'gradient-development',
    href: '#',
  },
  {
    icon: Zap,
    title: 'Automatisation',
    description: 'Optimisation de vos processus métier grâce à des workflows intelligents et des intégrations sur mesure.',
    gradient: 'gradient-automation',
    href: '#',
  },
];

export function Services() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id="services"
      className="py-24"
      variants={sectionVariants}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      animate={isVisible || prefersReducedMotion ? 'visible' : 'hidden'}
    >
      <Container>
        <motion.div
          variants={staggerContainerVariants}
          initial={prefersReducedMotion ? 'visible' : 'hidden'}
          animate={isVisible || prefersReducedMotion ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={staggerItemVariants}
            className="text-xs font-semibold tracking-[0.08em] uppercase text-gray-400 mb-3"
          >
            Ce que nous faisons
          </motion.p>

          <motion.h2
            variants={staggerItemVariants}
            className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.02em] text-black-soft mb-12"
          >
            Services
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainerVariants}
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={staggerItemVariants}>
                <GlassCard variant="elevated" padding="lg" hover>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${service.gradient}`}
                  >
                    <service.icon size={24} className="text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-semibold text-black-soft mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[0.9375rem] leading-[1.6] text-gray-500 mb-4">
                    {service.description}
                  </p>

                  <a
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-black-soft group transition-all duration-200"
                  >
                    En savoir plus
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </a>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
