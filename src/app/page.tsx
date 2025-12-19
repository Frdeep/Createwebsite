'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTransition } from '@/hooks/useTransition';
import { easings } from '@/lib/animations';

import { LandingTitle } from '@/components/LandingTitle';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const { isLanding, isTransitioning, isRevealed, triggerTransition } = useTransition();

  return (
    <div className="bg-pattern min-h-screen">
      <AnimatePresence mode="wait">
        {isLanding && (
          <LandingTitle 
            onTrigger={triggerTransition} 
            isTransitioning={isTransitioning}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!isLanding && (
          <>
            <Navbar isRevealed={isRevealed} />
            
            <motion.main
              className="min-h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                initial="hidden"
                animate={isRevealed ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.1,
                    }
                  }
                }}
              >
                <SectionWrapper delay={0}>
                  <Hero />
                </SectionWrapper>
                
                <SectionWrapper delay={0.1}>
                  <Services />
                </SectionWrapper>
                
                <SectionWrapper delay={0.2}>
                  <Projects />
                </SectionWrapper>
                
                <SectionWrapper delay={0.3}>
                  <About />
                </SectionWrapper>
                
                <SectionWrapper delay={0.4}>
                  <Contact />
                </SectionWrapper>
                
                <SectionWrapper delay={0.5}>
                  <Footer />
                </SectionWrapper>
              </motion.div>
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionWrapper({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.5 + delay,
        ease: easings.smooth 
      }}
    >
      {children}
    </motion.div>
  );
}
