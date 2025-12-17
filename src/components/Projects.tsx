'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { staggerContainer, staggerItem, fadeInUp, easings } from '@/lib/animations';
import { useInView } from '@/hooks/useTransition';

const projects = [
  {
    id: 1,
    title: 'E-commerce Premium',
    category: 'Site Web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    span: 'col-span-12 md:col-span-7',
  },
  {
    id: 2,
    title: 'App Fitness',
    category: 'Application',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    span: 'col-span-12 md:col-span-5',
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    category: 'Automatisation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    span: 'col-span-12 md:col-span-5',
  },
  {
    id: 4,
    title: 'Campagne Vidéo',
    category: 'Vidéo',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    span: 'col-span-12 md:col-span-7',
  },
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
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
              Projets récents
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <motion.div 
            className="grid grid-cols-12 gap-[20px]"
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className={project.span}
                variants={staggerItem}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{ 
        minHeight: '280px',
        height: '100%',
      }}
      whileHover="hover"
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0"
        variants={{
          hover: {
            scale: 1.05,
            transition: { duration: 0.6, ease: easings.smooth }
          }
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Overlay Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
        }}
      />

      {/* Category Badge */}
      <div className="absolute top-[20px] left-[20px]">
        <Badge variant="light">{project.category}</Badge>
      </div>

      {/* Title */}
      <h3 
        className="absolute bottom-[24px] left-[24px] text-white"
        style={{
          fontSize: '1.5rem',
          fontWeight: 600,
        }}
      >
        {project.title}
      </h3>
    </motion.div>
  );
}
