'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { sectionVariants, staggerContainerVariants, staggerItemVariants, imageZoomVariants } from '@/lib/animations';
import { useScrollReveal, useReducedMotion } from '@/hooks/useTransition';

const projects = [
  {
    id: 1,
    title: 'Luxe Fashion Brand',
    description: 'Refonte e-commerce complète avec expérience immersive',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    size: 'large',
  },
  {
    id: 2,
    title: 'FinTech Dashboard',
    description: 'Interface de gestion financière intuitive',
    category: 'Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop',
    size: 'small',
  },
  {
    id: 3,
    title: 'Smart Home App',
    description: 'Application mobile IoT connectée',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop',
    size: 'small',
  },
  {
    id: 4,
    title: 'AI Content Platform',
    description: 'Plateforme de génération de contenu IA',
    category: 'IA Vidéo',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    size: 'large',
  },
];

export function Projects() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id="projets"
      className="py-24"
      variants={sectionVariants}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      animate={isVisible || prefersReducedMotion ? 'visible' : 'hidden'}
    >
      <Container>
        <motion.div
          variants={staggerContainerVariants}
          initial={prefersReducedMotion ? 'visible' : 'hidden'}
          animate={isVisible || prefersReducedMotion ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={staggerItemVariants}
            className="text-xs font-semibold tracking-[0.08em] uppercase text-gray-400 mb-3"
          >
            Notre travail
          </motion.p>

          <motion.h2
            variants={staggerItemVariants}
            className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.02em] text-black-soft mb-12"
          >
            Projets sélectionnés
          </motion.h2>

          {/* Bento Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-[minmax(280px,auto)]"
            variants={staggerContainerVariants}
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={staggerItemVariants}
                className={`relative overflow-hidden rounded-3xl cursor-pointer group ${
                  project.size === 'large'
                    ? 'lg:col-span-7'
                    : 'lg:col-span-5'
                } ${index >= 2 ? 'lg:order-none' : ''} min-h-[280px] md:min-h-[320px]`}
                whileHover="hover"
                initial="rest"
              >
                {/* Image */}
                <motion.div
                  className="absolute inset-0"
                  variants={imageZoomVariants}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 58vw"
                    priority={index < 2}
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 project-overlay" />

                {/* Category Badge */}
                <div className="absolute top-5 left-5">
                  <Badge variant="glass">{project.category}</Badge>
                </div>

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-[0.9375rem] opacity-85 leading-[1.5]">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
