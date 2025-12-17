'use client';

import { motion } from 'framer-motion';
import { Target, Rocket, Heart, Zap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { fadeInUp, easings } from '@/lib/animations';
import { useInView } from '@/hooks/useTransition';

const values = [
  {
    icon: Target,
    title: 'Précision',
    description: 'Chaque détail compte',
    color: 'bg-blue-500',
  },
  {
    icon: Rocket,
    title: 'Rapidité',
    description: 'Livraison express',
    color: 'bg-purple-500',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'On adore ce qu\'on fait',
    color: 'bg-rose-500',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Toujours à la pointe',
    color: 'bg-amber-500',
  },
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="apropos" className="py-16 scroll-mt-16">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              À propos
            </span>
            <h2 
              className="text-gray-900 mb-4"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Qui sommes-nous ?
            </h2>
          </motion.div>

          {/* About Card */}
          <motion.div 
            className="glass-card rounded-3xl p-6 md:p-10 mb-8"
            variants={fadeInUp}
          >
            <div className="max-w-3xl mx-auto text-center">
              <p 
                className="text-gray-700 leading-relaxed"
                style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)' }}
              >
                On transforme vos idées en{' '}
                <span className="font-semibold text-gray-900">outils concrets</span>. 
                Sites, apps, automatisations, vidéos — ce qui vous fait gagner du temps 
                et une longueur d&apos;avance.{' '}
                <span className="font-semibold text-gray-900">Pas de bla-bla. Du résultat.</span>
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={fadeInUp}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="glass-card rounded-2xl p-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, ease: easings.smooth }}
                  whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)' }}
                >
                  <div className={`w-12 h-12 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
