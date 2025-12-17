'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe, ArrowUpRight } from 'lucide-react';
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

export function Projects() {
  const { ref, isInView } = useInView();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
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

            {/* Projects - Horizontal Scroll on Mobile */}
            <motion.div 
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0"
              variants={fadeInUp}
            >
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project} 
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
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
  index: number;
  onClick: () => void;
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className="flex-shrink-0 w-[280px] md:w-auto text-left group"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: easings.smooth }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div 
        className="glass-card rounded-3xl overflow-hidden transition-all duration-300"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* Gradient Header */}
        <div className={`h-32 bg-gradient-to-br ${project.gradient} relative`}>
          {/* Icon */}
          <div className={`absolute bottom-4 left-4 w-12 h-12 ${project.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
            <Globe className="w-6 h-6 text-white" />
          </div>
          
          {/* Arrow */}
          <motion.div 
            className="absolute top-4 right-4 w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-4">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {project.category}
          </span>
          <h3 className="text-lg font-semibold text-gray-900 mt-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {project.description}
          </p>
        </div>
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
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full md:w-[90%] max-w-5xl h-[85vh] md:h-[80vh] bg-white md:rounded-3xl rounded-t-3xl overflow-hidden shadow-2xl flex flex-col"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: easings.smooth }}
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${project.gradient} px-4 md:px-6 py-4`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${project.iconBg} rounded-xl flex items-center justify-center`}>
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.category}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white/90 hover:text-white bg-white/20 hover:bg-white/30 rounded-xl transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Ouvrir</span>
                  </a>
                  <button
                    onClick={onClose}
                    className="p-2 text-white/80 hover:text-white bg-white/20 hover:bg-white/30 rounded-xl transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* URL Bar */}
            <div className="px-4 md:px-6 py-3 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center gap-3 px-4 py-2.5 bg-white rounded-xl border border-gray-200">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-sm text-gray-600 truncate flex-1 font-mono">
                  {project.url}
                </span>
              </div>
            </div>

            {/* Iframe */}
            <div className="flex-1 relative bg-white">
              <iframe
                src={project.url}
                className="absolute inset-0 w-full h-full border-0"
                title={`Preview de ${project.title}`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
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
