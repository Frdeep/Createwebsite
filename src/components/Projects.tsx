'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, X, AlertCircle } from 'lucide-react';
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

  const handleSelectProject = (project: typeof projects[0]) => {
    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
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
              Cliquez sur un projet pour le visualiser
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

          {/* Inline Preview */}
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
                        <a
                          href={selectedProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/20 hover:bg-white/30 rounded-xl transition-colors backdrop-blur-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="hidden sm:inline">Ouvrir le site</span>
                          <span className="sm:hidden">Ouvrir</span>
                        </a>
                        <button
                          onClick={() => setSelectedProject(null)}
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
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="text-sm text-gray-600 truncate flex-1 font-mono">
                        {selectedProject.url}
                      </span>
                    </div>
                  </div>

                  {/* Iframe Container */}
                  <div className="relative bg-white" style={{ height: '70vh', minHeight: '500px' }}>
                    <iframe
                      src={selectedProject.url}
                      className="absolute inset-0 w-full h-full border-0"
                      title={`Preview de ${selectedProject.title}`}
                      loading="eager"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    
                    {/* Fallback overlay - shown if iframe might be blocked */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/80 to-transparent p-6 pointer-events-none">
                      <div className="flex items-center justify-center gap-3 pointer-events-auto">
                        <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-xl text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>Si le site ne s&apos;affiche pas correctement,</span>
                          <a
                            href={selectedProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold underline hover:no-underline"
                          >
                            ouvrez-le dans un nouvel onglet
                          </a>
                        </div>
                      </div>
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
        {/* Gradient Background */}
        <div className={`h-24 sm:h-28 bg-gradient-to-br ${project.gradient} relative`}>
          {/* Icon */}
          <div className={`absolute bottom-3 left-3 w-10 h-10 ${project.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
            <Globe className="w-5 h-5 text-white" />
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
