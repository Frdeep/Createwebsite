'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { fadeInUp, easings } from '@/lib/animations';
import { useInView } from '@/hooks/useTransition';

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-16 pb-32 md:pb-16 scroll-mt-16">
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
          {/* Main CTA Card */}
          <motion.div 
            className="relative overflow-hidden rounded-3xl gradient-dark p-8 md:p-12"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
            variants={fadeInUp}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h2 
                className="text-white mb-3"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                On en parle ?
              </h2>

              {/* Subtitle */}
              <p className="text-white/70 mb-8 text-lg">
                15 minutes. Sans engagement.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:contact@deepgital.fr?subject=Prise de rendez-vous"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-gray-900 bg-white"
                  style={{ 
                    boxShadow: '0 4px 14px rgba(255, 255, 255, 0.2)',
                  }}
                  whileHover={{ scale: 1.02, boxShadow: '0 6px 20px rgba(255, 255, 255, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-5 h-5" />
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  href="mailto:contact@deepgital.fr"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5" />
                  Nous écrire
                </motion.a>
              </div>

              {/* Email */}
              <p className="mt-8 text-white/50 text-sm">
                contact@deepgital.fr
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
