'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Zap, Smartphone, Play, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { fadeInUp, easings } from '@/lib/animations';
import { useInView } from '@/hooks/useTransition';

const services = [
  {
    id: 'sites-web',
    icon: Globe,
    title: 'Sites Web',
    subtitle: 'Sites qui convertissent',
    delivers: ['Sites vitrines', 'E-commerce', 'Landing pages', 'Sur-mesure'],
    description: 'Votre site, c\'est votre meilleur commercial. On crée des sites rapides, beaux, pensés pour transformer vos visiteurs en clients.',
    gradient: 'gradient-blue',
    color: '#3B82F6',
  },
  {
    id: 'automatisation',
    icon: Zap,
    title: 'Automatisation',
    subtitle: 'Moins de tâches, plus d\'impact',
    delivers: ['No-code & custom', 'CRM sur-mesure', 'Intégrations', 'Dashboards'],
    description: 'On identifie ce qui vous ralentit et on automatise. Vous gardez le contrôle, la machine fait le reste.',
    gradient: 'gradient-orange',
    color: '#F97316',
  },
  {
    id: 'applications',
    icon: Smartphone,
    title: 'Applications',
    subtitle: 'Votre idée en version app',
    delivers: ['iOS & Android', 'Web apps', 'MVP', 'Maintenance'],
    description: 'Vous avez un concept ? On le construit. Interface intuitive, performance solide.',
    gradient: 'gradient-green',
    color: '#10B981',
  },
  {
    id: 'videos',
    icon: Play,
    title: 'Vidéos',
    subtitle: 'Des vidéos qui arrêtent le scroll',
    delivers: ['Publicités', 'Brand content', 'Motion design', 'Multi-formats'],
    description: '3 secondes pour capter l\'attention. On produit avec les outils IA : Sora, Veo, Runway.',
    gradient: 'gradient-pink',
    color: '#EC4899',
  },
];

const tabs = ['Tous', 'Sites Web', 'Automatisation', 'Applications', 'Vidéos'];

export function Services() {
  const { ref, isInView } = useInView();
  const [activeTab, setActiveTab] = useState('Tous');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filteredServices = activeTab === 'Tous' 
    ? services 
    : services.filter(s => s.title === activeTab);

  return (
    <section id="services" className="py-16 scroll-mt-16">
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
          <motion.div className="mb-8" variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Nos services
            </span>
            <h2 
              className="text-gray-900"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Ce qu&apos;on fait de mieux
            </h2>
          </motion.div>

          {/* Tabs - Horizontal scroll on mobile */}
          <motion.div 
            className="flex gap-2 mb-8 overflow-x-auto hide-scrollbar pb-2"
            variants={fadeInUp}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  index={index}
                  isExpanded={expandedService === service.id}
                  onToggle={() => setExpandedService(
                    expandedService === service.id ? null : service.id
                  )}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function ServiceCard({ service, index, isExpanded, onToggle }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: easings.smooth }}
      className="group"
    >
      <motion.div
        className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 ${service.gradient}`}
        onClick={onToggle}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        style={{
          boxShadow: `0 8px 32px ${service.color}30`,
        }}
      >
        {/* Card Content */}
        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <motion.div
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
              animate={{ rotate: isExpanded ? 90 : 0 }}
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-1">
            {service.title}
          </h3>
          <p className="text-white/80 text-sm mb-4">
            {service.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {service.delivers.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-white/20">
                  <p className="text-white/90 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      </motion.div>
    </motion.div>
  );
}
