'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  'Site web',
  'Logiciel et Automatisation',
  'Application web et mobile',
  'Vidéos créative',
];

export default function HomePage() {
  const [isTransformed, setIsTransformed] = useState(false);
  const [showGlow, setShowGlow] = useState(false);

  // Afficher l'ombre colorée après 7 secondes sur la navbar
  useEffect(() => {
    if (isTransformed) {
      const timer = setTimeout(() => {
        setShowGlow(true);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [isTransformed]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!isTransformed ? (
          // État initial : "Deepgital" au centre avec bounce
          <motion.button
            key="title"
            onClick={() => setIsTransformed(true)}
            className="relative cursor-pointer border-none bg-transparent focus:outline-none select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            exit={{ 
              opacity: 0,
              scale: 0.9,
              filter: 'blur(10px)',
            }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Cliquez pour ouvrir le menu"
          >
            <motion.span
              className="deepgital-gradient"
              style={{
                fontSize: 'clamp(3rem, 10vw, 6rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                display: 'inline-block',
                background: 'linear-gradient(90deg, #0A0A0A 0%, #0A0A0A 20%, #FF6B6B 35%, #FF9F43 50%, #A855F7 65%, #0A0A0A 80%, #0A0A0A 100%)',
                backgroundSize: '300% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-flow 4s ease-in-out infinite',
              }}
              animate={{ 
                y: [0, -12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Deepgital
            </motion.span>
            
            {/* Indicateur de clic subtil */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[#86868B] text-sm"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              cliquez
            </motion.div>
          </motion.button>
        ) : (
          // État transformé : Navbar liquid glass
          <motion.nav
            key="navbar"
            className="relative px-8 py-5 rounded-[28px] flex items-center gap-8 navbar-gradient"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.5,
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Bordure animée avec dégradé */}
            <div 
              className="absolute inset-0 rounded-[28px] pointer-events-none"
              style={{
                padding: '1.5px',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.3) 20%, #FF6B6B 35%, #FF9F43 50%, #A855F7 65%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0.3) 100%)',
                backgroundSize: '300% 100%',
                animation: 'gradient-flow 4s ease-in-out infinite',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            {/* Ombre colorée qui apparaît après 7 secondes */}
            <motion.div
              className="absolute inset-0 rounded-[28px] pointer-events-none -z-10"
              style={{
                background: 'linear-gradient(90deg, #FF6B6B 0%, #FF9F43 50%, #A855F7 100%)',
                backgroundSize: '200% 100%',
                animation: 'gradient-flow 4s ease-in-out infinite',
                filter: 'blur(25px)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: showGlow ? 0.4 : 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            {/* Logo Deepgital avec dégradé */}
            <motion.span
              className="font-bold whitespace-nowrap"
              style={{ 
                fontSize: '1.25rem', 
                letterSpacing: '-0.02em',
                background: 'linear-gradient(90deg, #0A0A0A 0%, #0A0A0A 20%, #FF6B6B 35%, #FF9F43 50%, #A855F7 65%, #0A0A0A 80%, #0A0A0A 100%)',
                backgroundSize: '300% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-flow 4s ease-in-out infinite',
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Deepgital
            </motion.span>

            {/* Séparateur */}
            <motion.div
              className="w-px h-6 bg-[#D2D2D7]"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            />

            {/* Liens de navigation */}
            <div className="flex items-center gap-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-[0.9375rem] font-medium text-[#6E6E73] hover:text-[#0A0A0A] transition-colors whitespace-nowrap"
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    delay: 0.3 + index * 0.08,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
