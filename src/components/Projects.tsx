'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { staggerContainer, staggerItem, fadeInUp, easings } from '@/lib/animations';
import { useInView } from '@/hooks/useTransition';

const projects = [
  {
    id: 1,
    title: 'Miniweight',
    category: 'E-commerce Santé',
    description: 'Programme de perte de poids personnalisé',
    url: 'https://www.miniweight.com/',
    color: '#FF6B6B',
  },
  {
    id: 2,
    title: 'Alpagga',
    category: 'E-commerce Mode',
    description: 'Vêtements et accessoires en alpaga',
    url: 'https://alpagga.com/',
    color: '#4ECDC4',
  },
  {
    id: 3,
    title: 'AMFLOM International',
    category: 'Site Vitrine',
    description: 'Solutions industrielles internationales',
    url: 'https://amflominternational.com/',
    color: '#45B7D1',
  },
  {
    id: 4,
    title: 'AMFLOW Bikes',
    category: 'E-commerce Sport',
    description: 'Vélos électriques haute performance',
    url: 'https://www.amflowbikes.com/fr',
    color: '#96CEB4',
  },
  {
    id: 5,
    title: 'Atelier Amaya',
    category: 'E-commerce Luxe',
    description: 'Bijoux artisanaux sur mesure',
    url: 'https://atelier-amaya.com/fr/',
    color: '#DDA0DD',
  },
];

export function Projects() {
  const { ref, isInView } = useInView();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projets" className="py-4xl scroll-mt-16">
        <Container>
          <motion.div
            ref={ref}
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
            {/* Section Header */}
            <motion.div className="mb-2xl" variants={fadeInUp}>
              <span 
                className="block text-gray-400 mb-[12px]"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Nos réalisations
              </span>
              <h2 
                className="text-black-soft"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                Sites Web
              </h2>
              <p className="text-gray-500 mt-md max-w-[600px]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                Cliquez sur un projet pour le visualiser directement
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg"
              variants={staggerContainer}
            >
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  variants={staggerItem}
                >
                  <ProjectCard 
                    project={project} 
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Preview Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left group relative rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-300 hover:border-gray-200"
      style={{
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
      whileHover={{ 
        y: -4,
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: easings.smooth }}
    >
      {/* Preview Header with Color */}
      <div 
        className="h-32 sm:h-40 relative flex items-center justify-center"
        style={{ 
          background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}30 100%)`,
        }}
      >
        {/* Globe Icon */}
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ 
            background: `linear-gradient(135deg, ${project.color}40 0%, ${project.color}60 100%)`,
          }}
        >
          <Globe className="w-8 h-8" style={{ color: project.color }} />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          >
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-black-soft shadow-lg">
              Voir le site →
            </span>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-lg">
        <Badge className="mb-sm">{project.category}</Badge>
        
        <h3 
          className="text-black-soft mb-xs"
          style={{
            fontSize: '1.125rem',
            fontWeight: 600,
          }}
        >
          {project.title}
        </h3>
        
        <p 
          className="text-gray-500"
          style={{
            fontSize: '0.875rem',
            lineHeight: 1.5,
          }}
        >
          {project.description}
        </p>
      </div>
    </motion.button>
  );
}

interface ProjectModalProps {
  project: typeof projects[0] | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-6xl h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: easings.smooth }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-100 bg-white-soft">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color}30 0%, ${project.color}50 100%)`,
                  }}
                >
                  <Globe className="w-5 h-5" style={{ color: project.color }} />
                </div>
                <div>
                  <h3 className="font-semibold text-black-soft">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Open in new tab */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-black-soft hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Ouvrir</span>
                </a>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-black-soft hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* URL Bar */}
            <div className="px-4 md:px-6 py-3 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-gray-200">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm text-gray-600 truncate flex-1">
                  {project.url}
                </span>
              </div>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 relative bg-gray-100">
              <iframe
                src={project.url}
                className="absolute inset-0 w-full h-full border-0"
                title={`Preview de ${project.title}`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
              
              {/* Loading State */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 pointer-events-none opacity-0 animate-pulse">
                <div className="flex flex-col items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-gray-400 animate-spin"
                  />
                  <span className="text-sm text-gray-500">Chargement...</span>
                </div>
              </div>
            </div>

            {/* Mobile Hint */}
            <div className="md:hidden px-4 py-3 bg-amber-50 border-t border-amber-100">
              <p className="text-xs text-amber-700 text-center">
                💡 Pour une meilleure expérience, ouvrez le site dans un nouvel onglet
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
