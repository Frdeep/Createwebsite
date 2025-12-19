'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, X, ZoomIn, Maximize2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { fadeInUp, easings } from '@/lib/animations';
import { useInView } from '@/hooks/useTransition';

const projects = [
  {
    id: 1,
    title: 'Miniweight',
    category: 'E-commerce Santé',
    description: 'Programme de perte de poids personnalisé',
    url: 'https://www.miniweight.com/',
    gradient: 'from-rose-400 to-orange-300',
    iconBg: 'bg-rose-500',
  },
  {
    id: 2,
    title: 'Alpagga',
    category: 'E-commerce Mode',
    description: 'Vêtements et accessoires en alpaga',
    url: 'https://alpagga.com/',
    gradient: 'from-emerald-400 to-cyan-300',
    iconBg: 'bg-emerald-500',
  },
  {
    id: 3,
    title: 'AMFLOM International',
    category: 'Site Vitrine',
    description: 'Solutions industrielles internationales',
    url: 'https://amflominternational.com/',
    gradient: 'from-blue-400 to-indigo-300',
    iconBg: 'bg-blue-500',
  },
  {
    id: 4,
    title: 'AMFLOW Bikes',
    category: 'E-commerce Sport',
    description: 'Vélos électriques haute performance',
    url: 'https://www.amflowbikes.com/fr',
    gradient: 'from-violet-400 to-purple-300',
    iconBg: 'bg-violet-500',
  },
  {
    id: 5,
    title: 'Atelier Amaya',
    category: 'E-commerce Luxe',
    description: 'Bijoux artisanaux sur mesure',
    url: 'https://atelier-amaya.com/fr/',
    gradient: 'from-pink-400 to-rose-300',
    iconBg: 'bg-pink-500',
  },
];

// Generate screenshot URL using WordPress mshots (free service)
function getScreenshotUrl(url: string, width: number = 1280): string {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}

export function Projects() {
  const { ref, isInView } = useInView();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleSelectProject = (project: typeof projects[0]) => {
    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
      setIsFullscreen(false);
    } else {
      setSelectedProject(project);
      setIsFullscreen(false);
    }
  };

  return (
    <section id="projets" className="py-16 scroll-mt-16">
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
          {/* Section Header */}
          <motion.div className="flex items-end justify-between mb-8" variants={fadeInUp}>
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                <Globe className="w-4 h-4" />
                Portfolio
              </span>
              <h2 
                className="text-gray-900"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                Sites Web récents
              </h2>
            </div>
            <p className="hidden md:block text-sm text-gray-500 max-w-[200px] text-right">
              Cliquez pour prévisualiser
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
            variants={fadeInUp}
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project} 
                index={index}
                isSelected={selectedProject?.id === project.id}
                onClick={() => handleSelectProject(project)}
              />
            ))}
          </motion.div>

          {/* Inline Preview with Screenshot */}
          <AnimatePresence mode="wait">
            {selectedProject && (
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4, ease: easings.smooth }}
                className="overflow-hidden"
              >
                <div className="glass-card rounded-3xl overflow-hidden">
                  {/* Preview Header */}
                  <div className={`bg-gradient-to-r ${selectedProject.gradient} px-4 md:px-6 py-4`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${selectedProject.iconBg} rounded-xl flex items-center justify-center`}>
                          <Globe className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{selectedProject.title}</h3>
                          <p className="text-sm text-white/80">{selectedProject.category}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Fullscreen toggle */}
                        <button
                          onClick={() => setIsFullscreen(!isFullscreen)}
                          className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-white/20 hover:bg-white/30 rounded-xl transition-colors backdrop-blur-sm"
                        >
                          <Maximize2 className="w-4 h-4" />
                          {isFullscreen ? 'Réduire' : 'Agrandir'}
                        </button>
                        
                        {/* Open link */}
                        <a
                          href={selectedProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/20 hover:bg-white/30 rounded-xl transition-colors backdrop-blur-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="hidden sm:inline">Visiter le site</span>
                          <span className="sm:hidden">Visiter</span>
                        </a>
                        
                        {/* Close */}
                        <button
                          onClick={() => {
                            setSelectedProject(null);
                            setIsFullscreen(false);
                          }}
                          className="p-2 text-white/80 hover:text-white bg-white/20 hover:bg-white/30 rounded-xl transition-colors"
                          aria-label="Fermer"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Screenshot Preview */}
                  <div 
                    className={`relative bg-gray-100 transition-all duration-500 ${
                      isFullscreen ? 'h-[80vh]' : 'h-[50vh] md:h-[60vh]'
                    }`}
                  >
                    {/* Loading skeleton */}
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-200 to-gray-100" />
                    
                    {/* Screenshot image */}
                    <motion.img
                      key={selectedProject.url}
                      src={getScreenshotUrl(selectedProject.url, 1280)}
                      alt={`Capture d'écran de ${selectedProject.title}`}
                      className="relative w-full h-full object-cover object-top"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      loading="eager"
                    />

                    {/* Overlay with zoom hint */}
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors group cursor-pointer"
                    >
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-2xl px-6 py-4 shadow-xl flex items-center gap-3"
                        initial={false}
                      >
                        <ZoomIn className="w-5 h-5 text-gray-700" />
                        <span className="font-medium text-gray-900">Voir le site en direct</span>
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      </motion.div>
                    </a>

                    {/* Fade at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                  </div>

                  {/* Footer info */}
                  <div className="px-4 md:px-6 py-4 bg-white border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        {selectedProject.description}
                      </p>
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        {selectedProject.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

function ProjectCard({ project, index, isSelected, onClick }: ProjectCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className="text-left group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: easings.smooth }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div 
        className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
          isSelected ? 'ring-2 ring-offset-2 ring-gray-900' : ''
        }`}
        style={{
          boxShadow: isSelected 
            ? '0 8px 32px rgba(0, 0, 0, 0.15)' 
            : '0 4px 20px rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* Screenshot thumbnail */}
        <div className={`h-24 sm:h-28 relative overflow-hidden`}>
          {/* Gradient fallback */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
          
          {/* Screenshot thumbnail */}
          <img
            src={getScreenshotUrl(project.url, 400)}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          {/* Icon */}
          <div className={`absolute bottom-3 left-3 w-8 h-8 ${project.iconBg} rounded-lg flex items-center justify-center shadow-lg`}>
            <Globe className="w-4 h-4 text-white" />
          </div>
          
          {/* Selected indicator */}
          {isSelected && (
            <motion.div 
              className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <div className="w-3 h-3 bg-gray-900 rounded-full" />
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="bg-white p-3">
          <h3 className="text-sm font-semibold text-gray-900 truncate">
            {project.title}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5 truncate">
            {project.category}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
