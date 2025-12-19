'use client';

import { motion } from 'framer-motion';

interface DeepgitalLogoProps {
  size?: 'small' | 'large';
  showSubtitle?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function DeepgitalLogo({ 
  size = 'large', 
  showSubtitle = true,
  onClick,
  className = ''
}: DeepgitalLogoProps) {
  const isLarge = size === 'large';
  
  // Dimensions selon la taille
  const iconScale = isLarge ? 1 : 0.4;
  const textSize = isLarge ? 'text-5xl sm:text-6xl md:text-7xl' : 'text-lg sm:text-xl';
  const subtitleSize = isLarge ? 'text-base sm:text-lg md:text-xl' : 'text-[10px] sm:text-xs';
  const gap = isLarge ? 'gap-2' : 'gap-1';
  
  return (
    <motion.div
      className={`flex flex-col items-center ${gap} cursor-pointer select-none ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Icône - 3 barres obliques */}
      <svg 
        width={80 * iconScale} 
        height={50 * iconScale} 
        viewBox="0 0 80 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mb-1"
      >
        <defs>
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
        
        {/* Barre 1 */}
        <motion.path
          d="M10 45 L25 5 L35 5 L20 45 Z"
          fill="url(#barGradient)"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
        />
        
        {/* Barre 2 */}
        <motion.path
          d="M28 45 L43 5 L53 5 L38 45 Z"
          fill="url(#barGradient)"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        />
        
        {/* Barre 3 */}
        <motion.path
          d="M46 45 L61 5 L71 5 L56 45 Z"
          fill="url(#barGradient)"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        />
      </svg>
      
      {/* Texte "Deepgital" avec dégradé cyan-magenta */}
      <motion.h1
        className={`font-bold ${textSize} tracking-tight relative`}
        style={{
          background: 'linear-gradient(90deg, #22D3EE 0%, #3B82F6 25%, #8B5CF6 50%, #D946EF 75%, #EC4899 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Deepgital
      </motion.h1>
      
      {/* Sous-titre "agence de videos creative" */}
      {showSubtitle && (
        <motion.p
          className={`${subtitleSize} tracking-widest font-light`}
          style={{
            background: 'linear-gradient(90deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          agence de videos creative
        </motion.p>
      )}
    </motion.div>
  );
}
