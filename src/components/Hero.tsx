'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
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
    <section className="pt-5xl pb-5xl md:pt-[160px] md:pb-5xl">
      <Container>
        <motion.div
          className="flex flex-col items-center text-center md:items-start md:text-left"
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
          {/* Main Title */}
          <motion.h1
            className="text-black-soft mb-lg"
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
            variants={fadeInUp}
          >
            Deepgital
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-gray-500 max-w-[600px] mb-2xl"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
            variants={fadeInUp}
          >
            L&apos;agence qui construit ce que tu n&apos;as pas encore imaginé. 
            Découvrez nos services et prenez rendez-vous dès maintenant.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-md"
            variants={fadeInUp}
          >
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleScrollToServices}
            >
              Voir nos services
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={handleScrollToContact}
            >
              Prendre rendez-vous
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
