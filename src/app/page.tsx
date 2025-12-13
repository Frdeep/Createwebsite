'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  'Site web',
  'Logiciel et Automatisation',
  'Application web et mobile',
  'Vidéos créative',
];

// Configuration des bento grids pour Desktop
const desktopBentoConfigs: Record<string, { cols: string; cells: { colSpan: string; height: string }[] }> = {
  'Site web': {
    cols: 'repeat(4, 1fr)',
    cells: [
      { colSpan: 'span 2', height: '300px' },
      { colSpan: 'span 2', height: '140px' },
      { colSpan: 'span 1', height: '140px' },
      { colSpan: 'span 1', height: '140px' },
    ],
  },
  'Logiciel et Automatisation': {
    cols: 'repeat(3, 1fr)',
    cells: [
      { colSpan: 'span 1', height: '300px' },
      { colSpan: 'span 2', height: '140px' },
      { colSpan: 'span 1', height: '140px' },
      { colSpan: 'span 1', height: '140px' },
    ],
  },
  'Application web et mobile': {
    cols: 'repeat(3, 1fr)',
    cells: [
      { colSpan: 'span 1', height: '160px' },
      { colSpan: 'span 2', height: '340px' },
      { colSpan: 'span 1', height: '160px' },
      { colSpan: 'span 1', height: '340px' },
    ],
  },
  'Vidéos créative': {
    cols: 'repeat(4, 1fr)',
    cells: [
      { colSpan: 'span 2', height: '180px' },
      { colSpan: 'span 1', height: '380px' },
      { colSpan: 'span 1', height: '180px' },
      { colSpan: 'span 2', height: '180px' },
      { colSpan: 'span 1', height: '180px' },
    ],
  },
};

// Configuration des bento grids pour Mobile - Layout optimisé UX
const mobileBentoConfigs: Record<string, { cells: { colSpan: string; height: string }[] }> = {
  'Site web': {
    cells: [
      { colSpan: 'span 2', height: '200px' }, // Hero - Full width
      { colSpan: 'span 1', height: '140px' }, // 2 colonnes
      { colSpan: 'span 1', height: '140px' },
      { colSpan: 'span 2', height: '120px' }, // Full width
    ],
  },
  'Logiciel et Automatisation': {
    cells: [
      { colSpan: 'span 2', height: '180px' }, // Hero
      { colSpan: 'span 2', height: '140px' }, // Full width
      { colSpan: 'span 1', height: '120px' }, // 2 colonnes
      { colSpan: 'span 1', height: '120px' },
    ],
  },
  'Application web et mobile': {
    cells: [
      { colSpan: 'span 1', height: '180px' }, // 2 colonnes égales
      { colSpan: 'span 1', height: '180px' },
      { colSpan: 'span 2', height: '200px' }, // Hero central
      { colSpan: 'span 2', height: '120px' }, // Full width
    ],
  },
  'Vidéos créative': {
    cells: [
      { colSpan: 'span 2', height: '220px' }, // Vidéo hero
      { colSpan: 'span 1', height: '150px' }, // Thumbnails
      { colSpan: 'span 1', height: '150px' },
      { colSpan: 'span 1', height: '130px' },
      { colSpan: 'span 1', height: '130px' },
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
    setActiveService(prev => prev === service ? null : service);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center sm:justify-start sm:pt-[15vh] px-4 sm:px-6 pb-12">
      <AnimatePresence mode="wait">
        {!isTransformed ? (
          // État initial : "Deepgital" au centre avec bounce
          <motion.button
            key="title"
            onClick={() => setIsTransformed(true)}
            className="relative cursor-pointer border-none bg-transparent focus:outline-none select-none sm:mt-[20vh]"
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
            className="flex flex-col items-center gap-6 sm:gap-10 w-full max-w-[950px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Navbar liquid glass (responsive) */}
            <motion.nav
              className="relative px-5 sm:px-8 py-4 sm:py-5 rounded-[24px] sm:rounded-[28px] flex flex-col sm:flex-row items-center gap-4 sm:gap-8 navbar-gradient w-full sm:w-auto z-10"
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
                className="block sm:hidden w-16 h-px bg-[#D2D2D7]"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              />

              {/* Liens de navigation - Grid 2x2 sur mobile, horizontal sur desktop */}
              <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2 sm:gap-6 w-full sm:w-auto">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => handleServiceClick(item)}
                    className={`relative text-xs sm:text-[0.9375rem] font-medium transition-all whitespace-nowrap text-center bg-transparent border-none cursor-pointer py-2.5 sm:py-1 px-3 sm:px-0 rounded-xl sm:rounded-none ${
                      activeService === item 
                        ? 'text-[#0A0A0A] bg-white/50 sm:bg-transparent' 
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
                    whileTap={{ scale: 0.96 }}
                  >
                    {item}
                    {/* Indicateur actif - Desktop */}
                    <AnimatePresence>
                      {activeService === item && (
                        <motion.div
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full hidden sm:block"
                          style={{
                            background: 'linear-gradient(90deg, #FF6B6B, #FF9F43, #A855F7)',
                          }}
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          exit={{ scaleX: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </div>
            </motion.nav>

            {/* Bento Grid - Responsive */}
            <AnimatePresence mode="wait">
              {activeService && (
                <motion.div
                  key={activeService}
                  className="w-full relative"
                  initial={{ opacity: 0, y: 30, scale: 0.92 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -20, 
                    scale: 0.95,
                    transition: { duration: 0.25 }
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  {/* Ombre noire derrière le grid */}
                  <div 
                    className="absolute inset-0 -z-10"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.12) 0%, transparent 70%)',
                      transform: 'translateY(20px) scale(0.9)',
                      filter: 'blur(40px)',
                    }}
                  />

                  {/* Desktop Grid */}
                  <div 
                    className="hidden sm:grid gap-4 auto-rows-auto"
                    style={{
                      gridTemplateColumns: desktopBentoConfigs[activeService].cols,
                    }}
                  >
                    {desktopBentoConfigs[activeService].cells.map((cell, index) => (
                      <motion.div
                        key={`desktop-${activeService}-${index}`}
                        className="rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/40 cursor-pointer hover:bg-white/90 transition-colors duration-300"
                        style={{
                          gridColumn: cell.colSpan,
                          height: cell.height,
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                        }}
                        initial={{ 
                          opacity: 0, 
                          scale: 0.8,
                          y: 40,
                        }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.08 + index * 0.07,
                          duration: 0.5,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)',
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                      />
                    ))}
                  </div>

                  {/* Mobile Grid - 2 colonnes optimisé UX */}
                  <div 
                    className="grid sm:hidden gap-3 auto-rows-auto"
                    style={{
                      gridTemplateColumns: 'repeat(2, 1fr)',
                    }}
                  >
                    {mobileBentoConfigs[activeService].cells.map((cell, index) => (
                      <motion.div
                        key={`mobile-${activeService}-${index}`}
                        className="rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/40 cursor-pointer active:bg-white/90 transition-colors duration-300"
                        style={{
                          gridColumn: cell.colSpan,
                          height: cell.height,
                          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)',
                        }}
                        initial={{ 
                          opacity: 0, 
                          scale: 0.85,
                          y: 30,
                        }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.06 + index * 0.06,
                          duration: 0.45,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                        whileTap={{ 
                          scale: 0.97,
                          transition: { duration: 0.1 }
                        }}
                      />
                    ))}
                  </div>

                  {/* Indicateur scroll sur mobile si nécessaire */}
                  <motion.div
                    className="sm:hidden flex justify-center mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex gap-1.5">
                      {mobileBentoConfigs[activeService].cells.slice(0, 4).map((_, i) => (
                        <div 
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-[#D2D2D7]"
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hint pour l'utilisateur quand aucun service sélectionné */}
            <AnimatePresence>
              {!activeService && (
                <motion.p
                  className="text-[#86868B] text-sm text-center mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  Sélectionnez un service pour voir nos réalisations
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
