'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  'Site web',
  'Logiciel et Automatisation',
  'Application web et mobile',
  'Vidéos créative',
];

// Configuration du bento grid pour chaque service
const bentoConfigs: Record<string, { cols: number; rows: number; cells: { colSpan: number; rowSpan: number }[] }> = {
  'Site web': {
    cols: 4,
    rows: 2,
    cells: [
      { colSpan: 2, rowSpan: 2 },
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 1, rowSpan: 1 },
    ],
  },
  'Logiciel et Automatisation': {
    cols: 3,
    rows: 2,
    cells: [
      { colSpan: 1, rowSpan: 2 },
      { colSpan: 2, rowSpan: 1 },
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 1, rowSpan: 1 },
    ],
  },
  'Application web et mobile': {
    cols: 4,
    rows: 2,
    cells: [
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 2, rowSpan: 2 },
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 1, rowSpan: 1 },
    ],
  },
  'Vidéos créative': {
    cols: 3,
    rows: 2,
    cells: [
      { colSpan: 2, rowSpan: 1 },
      { colSpan: 1, rowSpan: 2 },
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 1, rowSpan: 1 },
    ],
  },
};

export default function HomePage() {
  const [isTransformed, setIsTransformed] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);

  // Afficher l'ombre colorée après 7 secondes sur la navbar
  useEffect(() => {
    if (isTransformed) {
      const timer = setTimeout(() => {
        setShowGlow(true);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [isTransformed]);

  const handleServiceClick = (service: string) => {
    if (activeService === service) {
      setActiveService(null);
    } else {
      setActiveService(service);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center px-4 sm:px-6">
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
                fontSize: 'clamp(2.5rem, 12vw, 6rem)',
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
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[#86868B] text-xs sm:text-sm"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              cliquez
            </motion.div>
          </motion.button>
        ) : (
          // État transformé : Navbar + Bento Grid
          <motion.div
            key="navbar-container"
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Navbar liquid glass (responsive) */}
            <motion.nav
              className="relative px-5 sm:px-8 py-5 sm:py-5 rounded-[24px] sm:rounded-[28px] flex flex-col sm:flex-row items-center gap-4 sm:gap-8 navbar-gradient max-w-[95vw] sm:max-w-none"
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
                scale: [0.5, 1.08, 1],
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                scale: {
                  times: [0, 0.6, 1],
                  duration: 0.7,
                },
              }}
            >
              {/* Bordure animée avec dégradé */}
              <div 
                className="absolute inset-0 rounded-[24px] sm:rounded-[28px] pointer-events-none"
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
                className="absolute inset-0 rounded-[24px] sm:rounded-[28px] pointer-events-none -z-10"
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
                className="font-bold whitespace-nowrap cursor-pointer"
                style={{ 
                  fontSize: 'clamp(1.1rem, 4vw, 1.25rem)', 
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
                onClick={() => setActiveService(null)}
              >
                Deepgital
              </motion.span>

              {/* Séparateur - horizontal sur mobile, vertical sur desktop */}
              <motion.div
                className="hidden sm:block w-px h-6 bg-[#D2D2D7]"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              />
              <motion.div
                className="block sm:hidden w-12 h-px bg-[#D2D2D7]"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              />

              {/* Liens de navigation - vertical sur mobile, horizontal sur desktop */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => handleServiceClick(item)}
                    className={`text-sm sm:text-[0.9375rem] font-medium transition-colors whitespace-nowrap text-center bg-transparent border-none cursor-pointer ${
                      activeService === item 
                        ? 'text-[#0A0A0A]' 
                        : 'text-[#6E6E73] hover:text-[#0A0A0A]'
                    }`}
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      delay: 0.3 + index * 0.08,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                    {/* Indicateur actif */}
                    {activeService === item && (
                      <motion.div
                        className="hidden sm:block h-0.5 bg-gradient-to-r from-[#FF6B6B] via-[#FF9F43] to-[#A855F7] mt-1 rounded-full"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.nav>

            {/* Bento Grid - Desktop uniquement */}
            <AnimatePresence>
              {activeService && (
                <motion.div
                  key={activeService}
                  className="hidden sm:block w-full max-w-[900px]"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div 
                    className="grid gap-4"
                    style={{
                      gridTemplateColumns: `repeat(${bentoConfigs[activeService].cols}, 1fr)`,
                      gridAutoRows: '140px',
                    }}
                  >
                    {bentoConfigs[activeService].cells.map((cell, index) => (
                      <motion.div
                        key={index}
                        className="rounded-[20px] bg-white/60 backdrop-blur-xl border border-white/30"
                        style={{
                          gridColumn: `span ${cell.colSpan}`,
                          gridRow: `span ${cell.rowSpan}`,
                          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.1 + index * 0.06,
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
