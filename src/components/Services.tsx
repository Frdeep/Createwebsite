'use client';

import { motion } from 'framer-motion';
import { Globe, Zap, Smartphone, Play } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';
import { useInView } from '@/hooks/useTransition';

const services = [
  {
    id: 'sites-web',
    icon: Globe,
    title: 'Sites qui convertissent',
    delivers: ['Sites vitrines', 'E-commerce', 'Landing pages', 'Interfaces sur-mesure'],
    description: 'Votre site, c\'est votre meilleur commercial. On crée des sites rapides, beaux, pensés pour transformer vos visiteurs en clients.',
  },
  {
    id: 'automatisation',
    icon: Zap,
    title: 'Moins de tâches. Plus d\'impact.',
    delivers: ['Automatisations no-code et custom', 'CRM sur-mesure', 'Intégrations entre vos apps', 'Tableaux de bord'],
    description: 'On identifie ce qui vous ralentit et on automatise. Vous gardez le contrôle, la machine fait le reste.',
  },
  {
    id: 'applications',
    icon: Smartphone,
    title: 'Votre idée. En version app.',
    delivers: ['Applications iOS et Android', 'Web apps et PWA', 'MVP', 'Maintenance'],
    description: 'Vous avez un concept ? On le construit. Interface intuitive, performance solide. De l\'idée au store, on gère.',
  },
  {
    id: 'videos',
    icon: Play,
    title: 'Des vidéos qui arrêtent le scroll.',
    delivers: ['Vidéos publicitaires', 'Contenus de marque', 'Motion design', 'Formats par plateforme'],
    description: '3 secondes pour capter l\'attention. On produit avec les outils IA : Sora, Veo, Runway. Du cinématique, livré vite.',
  },
];

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-4xl scroll-mt-16">
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
              Nos services
            </span>
            <h2 
              className="text-black-soft"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Ce qu&apos;on fait
            </h2>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-lg"
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={staggerItem}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <GlassCard variant="elevated" padding="lg" hover>
      {/* Icon */}
      <div 
        className="w-12 h-12 rounded-[14px] bg-black-soft flex items-center justify-center mb-[20px]"
      >
        <Icon className="w-[22px] h-[22px] text-white" strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 
        className="text-black-soft mb-md"
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
        }}
      >
        {service.title}
      </h3>

      {/* Delivers Tags */}
      <div className="flex flex-wrap gap-sm mb-md">
        {service.delivers.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>

      {/* Description */}
      <p 
        className="text-gray-500"
        style={{
          fontSize: '0.9375rem',
          lineHeight: 1.6,
        }}
      >
        {service.description}
      </p>
    </GlassCard>
  );
}
