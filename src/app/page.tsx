'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  'Site web',
  'Logiciel et Automatisation',
  'Application web et mobile',
  'Vidéos créative',
];

export default function HomePage() {
  const [isTransformed, setIsTransformed] = useState(false);

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
              style={{
                fontSize: 'clamp(3rem, 10vw, 6rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                color: '#0A0A0A',
                display: 'inline-block',
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
            className="relative px-8 py-5 rounded-[28px] flex items-center gap-8"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.5,
              width: 'auto',
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
            {/* Logo Deepgital */}
            <motion.span
              className="font-bold text-[#0A0A0A] whitespace-nowrap"
              style={{ fontSize: '1.25rem', letterSpacing: '-0.02em' }}
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
