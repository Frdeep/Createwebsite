'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { fadeInUp } from '@/lib/animations';
import { useInView } from '@/hooks/useTransition';

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-5xl scroll-mt-16">
      <Container>
        <motion.div
          ref={ref}
          className="flex justify-center"
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
          <motion.div 
            className="w-full max-w-[600px]"
            variants={fadeInUp}
          >
            <GlassCard 
              variant="elevated" 
              className="text-center rounded-[28px]"
              padding="lg"
            >
              <div className="py-lg px-md md:py-2xl md:px-xl">
                {/* Title */}
                <h2 
                  className="text-black-soft mb-[12px]"
                  style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                    fontWeight: 700,
                  }}
                >
                  On en parle ?
                </h2>

                {/* Subtitle */}
                <p 
                  className="text-gray-500 mb-xl"
                  style={{ fontSize: '1rem' }}
                >
                  15 minutes. Sans engagement.
                </p>

                {/* CTA Button */}
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => window.open('mailto:contact@deepgital.fr?subject=Prise de rendez-vous', '_blank')}
                >
                  Prendre rendez-vous
                </Button>

                {/* Email */}
                <p className="mt-[20px]">
                  <span 
                    className="text-gray-400"
                    style={{ fontSize: '0.875rem' }}
                  >
                    ou écrivez-nous à{' '}
                  </span>
                  <a 
                    href="mailto:contact@deepgital.fr"
                    className="text-gray-400 hover:text-black-soft hover:underline transition-colors duration-200"
                    style={{ fontSize: '0.875rem' }}
                  >
                    contact@deepgital.fr
                  </a>
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
