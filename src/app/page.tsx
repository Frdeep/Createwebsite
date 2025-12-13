'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { full: 'Site web', short: 'Site web' },
  { full: 'Logiciel et Automatisation', short: 'Automatisation' },
  { full: 'Application web et mobile', short: 'App mobile' },
  { full: 'Vidéos créative', short: 'Vidéos' },
];

// Données des cartes de service
const serviceCards: Record<string, {
  title: string;
  delivers: string[];
  description: string;
}> = {
  'Site web': {
    title: 'Sites qui convertissent',
    delivers: [
      'Sites vitrines qui marquent les esprits',
      'E-commerce qui vendent vraiment',
      'Landing pages qui convertissent',
      'Interfaces sur-mesure',
    ],
    description: 'Votre site, c\'est votre meilleur commercial — il bosse 24h/24 et parle à des milliers de personnes en même temps. On crée des sites rapides, beaux, pensés pour transformer vos visiteurs en clients. Pas de templates recyclés. Chaque pixel est là pour une raison.',
  },
  'Logiciel et Automatisation': {
    title: 'Moins de tâches. Plus d\'impact.',
    delivers: [
      'Automatisations no-code et custom',
      'CRM et outils internes sur-mesure',
      'Intégrations entre vos apps',
      'Tableaux de bord intelligents',
    ],
    description: 'Combien d\'heures par semaine sur des tâches qu\'une machine pourrait faire ? On identifie ce qui vous ralentit — relances manuelles, fichiers Excel, copier-coller — et on automatise. Vous gardez le contrôle, la machine fait le reste.',
  },
  'Application web et mobile': {
    title: 'Votre idée. En version app.',
    delivers: [
      'Applications iOS et Android',
      'Web apps et PWA',
      'MVP pour tester vos idées',
      'Maintenance et évolutions',
    ],
    description: 'Vous avez un concept qui mérite d\'exister dans la poche de vos utilisateurs ? On le construit. Interface intuitive, performance solide, évolutivité intégrée. De l\'idée au store, on gère tout.',
  },
  'Vidéos créative': {
    title: 'Des vidéos qui arrêtent le scroll.',
    delivers: [
      'Vidéos publicitaires social media',
      'Contenus de marque premium',
      'Motion design et animations',
      'Formats optimisés par plateforme',
    ],
    description: '3 secondes pour capter l\'attention — autant qu\'elles soient mémorables. On produit des vidéos avec les derniers outils IA : Sora, Veo, Runway. Résultat : du cinématique, impossible à ignorer, livré en une fraction du temps et du budget.',
  },
};

// Configuration des bento grids pour Desktop (sans la carte principale)
const desktopBentoConfigs: Record<string, { cols: string; cells: { colSpan: string; height: string }[] }> = {
  'Site web': {
    cols: 'repeat(3, 1fr)',
    cells: [
      { colSpan: 'span 1', height: '160px' },
      { colSpan: 'span 1', height: '160px' },
      { colSpan: 'span 1', height: '160px' },
    ],
  },
  'Logiciel et Automatisation': {
    cols: 'repeat(3, 1fr)',
    cells: [
      { colSpan: 'span 1', height: '160px' },
      { colSpan: 'span 1', height: '160px' },
      { colSpan: 'span 1', height: '160px' },
    ],
  },
  'Application web et mobile': {
    cols: 'repeat(3, 1fr)',
    cells: [
      { colSpan: 'span 1', height: '160px' },
      { colSpan: 'span 1', height: '160px' },
      { colSpan: 'span 1', height: '160px' },
    ],
  },
  'Vidéos créative': {
    cols: 'repeat(5, 1fr)',
    cells: [
      { colSpan: 'span 1', height: '320px' },
      { colSpan: 'span 1', height: '320px' },
      { colSpan: 'span 1', height: '320px' },
      { colSpan: 'span 1', height: '320px' },
      { colSpan: 'span 1', height: '320px' },
    ],
  },
};

// Configuration des bento grids pour Mobile
const mobileBentoConfigs: Record<string, { cells: { colSpan: string; height: string }[] }> = {
  'Site web': {
    cells: [
      { colSpan: 'span 1', height: '140px' },
      { colSpan: 'span 1', height: '140px' },
      { colSpan: 'span 2', height: '120px' },
    ],
  },
  'Logiciel et Automatisation': {
    cells: [
      { colSpan: 'span 2', height: '140px' },
      { colSpan: 'span 1', height: '120px' },
      { colSpan: 'span 1', height: '120px' },
    ],
  },
  'Application web et mobile': {
    cells: [
      { colSpan: 'span 1', height: '150px' },
      { colSpan: 'span 1', height: '150px' },
      { colSpan: 'span 2', height: '120px' },
    ],
  },
  'Vidéos créative': {
    cells: [
      { colSpan: 'span 1', height: '280px' },
      { colSpan: 'span 1', height: '280px' },
      { colSpan: 'span 1', height: '280px' },
      { colSpan: 'span 1', height: '280px' },
    ],
  },
};

// Composant Typing Text Animation avec boucle
function TypingText({ text }: { text: string }) {
  const [key, setKey] = useState(0);
  const words = text.split(' ');
  
  // Calculer le délai total pour relancer l'animation
  const totalChars = text.replace(/ /g, '').length;
  const charDelay = 0.05; // 50ms par caractère
  const animationDuration = totalChars * charDelay + 2; // +2s de pause à la fin
  
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, animationDuration * 1000);
    
    return () => clearInterval(interval);
  }, [animationDuration]);
  
  let globalCharIndex = 0;
  
  return (
    <motion.h2 
      key={key}
      className="text-[#1D1D1F] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug sm:leading-normal"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => {
            const delay = globalCharIndex * charDelay;
            globalCharIndex++;
            
            return (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                className="inline-block"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </motion.h2>
  );
}

// Composant Carte Flip
function FlipCard({ service, isFlipped, onFlip }: { service: string; isFlipped: boolean; onFlip: () => void }) {
  const data = serviceCards[service];
  
  return (
    <motion.div
      className="relative w-full cursor-pointer h-[320px] sm:h-[280px]"
      style={{ 
        perspective: '1000px',
      }}
      onClick={onFlip}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Face avant */}
        <div
          className="absolute inset-0 rounded-[24px] sm:rounded-[28px] p-5 sm:p-8 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            backdropFilter: 'blur(40px)',
            border: '1px solid rgba(255,255,255,0.5)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Gradient border */}
          <div 
            className="absolute inset-0 rounded-[24px] sm:rounded-[28px] pointer-events-none"
            style={{
              padding: '2px',
              background: 'linear-gradient(135deg, #FF6B6B 0%, #FF9F43 50%, #A855F7 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              opacity: 0.6,
            }}
          />
          
          <div>
            <h3 
              className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4"
              style={{
                background: 'linear-gradient(135deg, #0A0A0A 0%, #1D1D1F 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {data.title}
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {data.delivers.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] sm:text-base text-[#6E6E73]">
                  <span className="text-[#FF9F43] mt-0.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center justify-between mt-3 sm:mt-4">
            <span className="text-[10px] sm:text-xs text-[#86868B]">Cliquez pour en savoir plus</span>
            <motion.div
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A0A0A]/5 flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-xs sm:text-sm">↻</span>
            </motion.div>
          </div>
        </div>

        {/* Face arrière */}
        <div
          className="absolute inset-0 rounded-[24px] sm:rounded-[28px] p-5 sm:p-8 flex flex-col justify-center overflow-y-auto"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #0A0A0A 0%, #1D1D1F 100%)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Gradient accent */}
          <div 
            className="absolute top-0 left-0 right-0 h-1 rounded-t-[24px] sm:rounded-t-[28px]"
            style={{
              background: 'linear-gradient(90deg, #FF6B6B 0%, #FF9F43 50%, #A855F7 100%)',
            }}
          />
          
          <p className="text-white/90 text-[13px] sm:text-base leading-relaxed">
            {data.description}
          </p>
          
          <div className="mt-4 sm:mt-6 flex items-center gap-2">
            <span className="text-[10px] sm:text-xs text-white/50">Cliquez pour revenir</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HomePage() {
  const [isTransformed, setIsTransformed] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Afficher l'ombre colorée après 7 secondes sur la navbar
  useEffect(() => {
    if (isTransformed) {
      const timer = setTimeout(() => {
        setShowGlow(true);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [isTransformed]);

  // Reset flip state when changing service
  useEffect(() => {
    setIsCardFlipped(false);
  }, [activeService]);

  const handleServiceClick = (service: string) => {
    setActiveService(prev => prev === service ? null : service);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center sm:justify-start sm:pt-[15vh] px-3 sm:px-6 pb-16 pt-8 sm:pt-0 overflow-x-hidden">
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
            className="flex flex-col items-center gap-6 sm:gap-10 w-full max-w-[1100px]"
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
                    key={item.full}
                    onClick={() => handleServiceClick(item.full)}
                    className={`relative text-[11px] sm:text-[0.9375rem] font-bold transition-all text-center bg-transparent border-none cursor-pointer py-2.5 sm:py-1 px-2 sm:px-0 rounded-xl sm:rounded-none ${
                      activeService === item.full 
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
                    {/* Texte court sur mobile, complet sur desktop */}
                    <span className="sm:hidden">{item.short}</span>
                    <span className="hidden sm:inline">{item.full}</span>
                    {/* Indicateur actif - Desktop */}
                    <AnimatePresence>
                      {activeService === item.full && (
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

            {/* Texte d'introduction avec typing animation */}
            <AnimatePresence>
              {!activeService && (
                <motion.div
                  className="text-center max-w-[90%] sm:max-w-[700px] md:max-w-[850px] lg:max-w-[950px] px-2 sm:px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <TypingText 
                    text="L'agence qui construit ce que tu n'as pas encore imaginé, découvrez nos services et prenez rendez-vous dès maintenant."
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contenu du service sélectionné */}
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
                  {/* Ombre noire derrière */}
                  <div 
                    className="absolute inset-0 -z-10"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.12) 0%, transparent 70%)',
                      transform: 'translateY(30px) scale(0.9)',
                      filter: 'blur(40px)',
                    }}
                  />

                  {/* Layout Desktop */}
                  <div className="hidden sm:flex flex-col gap-6">
                    {/* Carte principale flip */}
                    <FlipCard 
                      service={activeService} 
                      isFlipped={isCardFlipped}
                      onFlip={() => setIsCardFlipped(!isCardFlipped)}
                    />
                    
                    {/* Bento Grid des réalisations */}
                    <div 
                      className="grid gap-4 auto-rows-auto"
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
                            delay: 0.15 + index * 0.07,
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
                  </div>

                  {/* Layout Mobile */}
                  <div className="flex sm:hidden flex-col gap-5">
                    {/* Carte principale flip */}
                    <FlipCard 
                      service={activeService} 
                      isFlipped={isCardFlipped}
                      onFlip={() => setIsCardFlipped(!isCardFlipped)}
                    />
                    
                    {/* Bento Grid Mobile */}
                    <div 
                      className="grid gap-3 auto-rows-auto"
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
                            delay: 0.12 + index * 0.06,
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
