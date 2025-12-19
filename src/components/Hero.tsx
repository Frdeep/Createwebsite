'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { fadeInUp, easings } from '@/lib/animations';

export function Hero() {
  const handleScrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 md:pt-32 pb-12">
      <Container>
        <motion.div
          className="flex flex-col items-start"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }
            }
          }}
        >
          {/* Greeting */}
          <motion.div 
            className="flex items-center gap-3 mb-6"
            variants={fadeInUp}
          >
            <div className="w-12 h-12 rounded-2xl gradient-purple flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Bienvenue chez</p>
              <p className="text-lg font-semibold text-gray-900">Deepgital</p>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-gray-900 mb-4 max-w-[800px]"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
            variants={fadeInUp}
          >
            On construit ce que tu n&apos;as{' '}
            <span 
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              pas encore imaginé
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-gray-500 max-w-[550px] mb-8"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: 1.7,
            }}
            variants={fadeInUp}
          >
            Sites web, applications, automatisations et vidéos créatives. 
            Découvrez nos services et prenez rendez-vous.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            variants={fadeInUp}
          >
            <motion.button
              onClick={handleScrollToServices}
              className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white gradient-dark"
              style={{ 
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              Voir nos services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <motion.button
              onClick={handleScrollToContact}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-gray-700 bg-white border border-gray-200"
              style={{ 
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
              whileHover={{ scale: 1.02, backgroundColor: '#F9FAFB' }}
              whileTap={{ scale: 0.98 }}
            >
              Prendre rendez-vous
            </motion.button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full"
            variants={fadeInUp}
          >
            {[
              { value: '50+', label: 'Projets livrés' },
              { value: '98%', label: 'Clients satisfaits' },
              { value: '5 ans', label: 'D\'expérience' },
              { value: '24h', label: 'Temps de réponse' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-2xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, ease: easings.smooth }}
                whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)' }}
              >
                <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
