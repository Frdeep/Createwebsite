'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Code, Zap, ArrowRight, Twitter, Linkedin, Instagram, Github, Briefcase, FolderOpen, Users, Mail, Home as HomeIcon } from 'lucide-react';
import Image from 'next/image';

// ============ ANIMATION CONFIG ============
const easing = [0.16, 1, 0.3, 1];

// ============ LANDING TITLE ============
function LandingTitle({ onEnter }: { onEnter: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAFAFA]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: easing }}
    >
      <motion.button
        onClick={onEnter}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative cursor-pointer border-none bg-transparent focus:outline-none"
        style={{
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          color: '#0A0A0A',
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4, ease: easing }}
        aria-label="Cliquez pour entrer sur le site"
      >
        {/* Liquid glass effect */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 30%, transparent 70%)',
            filter: 'blur(60px)',
            transform: 'scale(1.5)',
          }}
          animate={{
            opacity: isHovered ? 0.8 : 0.6,
            scale: isHovered ? 1.6 : 1.5,
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.span
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
        >
          Deepgital
        </motion.span>
      </motion.button>
    </motion.div>
  );
}

// ============ NAVBAR ============
function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#projets', label: 'Projets' },
    { href: '#a-propos', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
  ];

  const mobileLinks = [
    { href: '#', label: 'Accueil', icon: HomeIcon },
    { href: '#services', label: 'Services', icon: Briefcase },
    { href: '#projets', label: 'Projets', icon: FolderOpen },
    { href: '#a-propos', label: 'À propos', icon: Users },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 h-16 hidden md:flex items-center transition-all duration-300 ${
          isScrolled ? 'bg-white/70 backdrop-blur-xl border-b border-black/5' : ''
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-[#0A0A0A]">
            Deepgital
          </a>
          <nav className="flex items-center gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-[0.9375rem] font-medium text-[#6E6E73] hover:text-[#0A0A0A] transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Mobile Bottom Tab Bar */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/80 backdrop-blur-xl border-t border-black/5 pb-[env(safe-area-inset-bottom)]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <div className="flex items-center justify-around h-[70px] px-2">
          {mobileLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex flex-col items-center gap-1 py-2 px-3 text-[#6E6E73] hover:text-[#0A0A0A] transition-colors"
            >
              <link.icon size={20} strokeWidth={2} />
              <span className="text-[10px] font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </motion.nav>
    </>
  );
}

// ============ HERO SECTION ============
function HeroSection() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="inline-block bg-[#F5F5F7] text-[#6E6E73] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
            Agence Créative
          </span>
        </motion.div>

        <motion.h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-[#0A0A0A] mb-6 max-w-[800px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Nous créons des expériences digitales mémorables
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#6E6E73] max-w-[600px] mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Deepgital accompagne les marques ambitieuses avec l&apos;IA vidéo, 
          le développement sur mesure et l&apos;automatisation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center bg-[#0A0A0A] text-white px-8 py-4 rounded-[14px] font-semibold hover:bg-[#1D1D1F] transition-colors"
          >
            Découvrir nos services
          </a>
          <a
            href="#projets"
            className="inline-flex items-center justify-center border-2 border-[#D2D2D7] text-[#0A0A0A] px-8 py-4 rounded-[14px] font-semibold hover:bg-[#F5F5F7] transition-colors"
          >
            Voir les projets
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ============ SERVICES SECTION ============
function ServicesSection() {
  const services = [
    {
      icon: Video,
      title: 'IA Vidéo',
      description: 'Production de contenus vidéo innovants propulsés par l\'intelligence artificielle.',
      gradient: 'from-[#667EEA] to-[#764BA2]',
    },
    {
      icon: Code,
      title: 'Développement',
      description: 'Applications web et mobiles sur mesure avec les dernières technologies.',
      gradient: 'from-[#11998E] to-[#38EF7D]',
    },
    {
      icon: Zap,
      title: 'Automatisation',
      description: 'Optimisation de vos processus métier grâce à des workflows intelligents.',
      gradient: 'from-[#F093FB] to-[#F5576C]',
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="mx-auto max-w-[1200px]">
        <motion.p
          className="text-xs font-semibold tracking-widest uppercase text-[#86868B] mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ce que nous faisons
        </motion.p>
        <motion.h2
          className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#0A0A0A] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-3xl p-8 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.02),0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}>
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">{service.title}</h3>
              <p className="text-[#6E6E73] mb-4 leading-relaxed">{service.description}</p>
              <a href="#" className="inline-flex items-center gap-2 text-[#0A0A0A] font-medium group">
                En savoir plus
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PROJECTS SECTION ============
function ProjectsSection() {
  const projects = [
    {
      title: 'Luxe Fashion Brand',
      description: 'Refonte e-commerce complète avec expérience immersive',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      large: true,
    },
    {
      title: 'FinTech Dashboard',
      description: 'Interface de gestion financière intuitive',
      category: 'Application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop',
      large: false,
    },
    {
      title: 'Smart Home App',
      description: 'Application mobile IoT connectée',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop',
      large: false,
    },
    {
      title: 'AI Content Platform',
      description: 'Plateforme de génération de contenu IA',
      category: 'IA Vidéo',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      large: true,
    },
  ];

  return (
    <section id="projets" className="py-24 px-6">
      <div className="mx-auto max-w-[1200px]">
        <motion.p
          className="text-xs font-semibold tracking-widest uppercase text-[#86868B] mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Notre travail
        </motion.p>
        <motion.h2
          className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#0A0A0A] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projets sélectionnés
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className={`relative overflow-hidden rounded-3xl cursor-pointer group min-h-[300px] ${
                project.large ? 'md:col-span-7' : 'md:col-span-5'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0A0A0A]">
                  {project.category}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/85">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ ABOUT SECTION ============
function AboutSection() {
  const stats = [
    { value: '50+', label: 'Projets livrés' },
    { value: '98%', label: 'Clients satisfaits' },
    { value: '5', label: 'Années d\'expertise' },
  ];

  return (
    <section id="a-propos" className="py-24 px-6">
      <div className="mx-auto max-w-[800px] text-center">
        <motion.p
          className="text-xs font-semibold tracking-widest uppercase text-[#86868B] mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          À propos
        </motion.p>
        <motion.h2
          className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#0A0A0A] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Deepgital
        </motion.h2>
        <motion.p
          className="text-xl text-[#1D1D1F] leading-relaxed mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nous sommes une équipe passionnée de créatifs et de développeurs, 
          unis par la conviction que le digital peut transformer les marques. 
          Notre approche allie innovation technologique et sensibilité artistique.
        </motion.p>

        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl font-bold text-[#0A0A0A] mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-[#86868B] uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CONTACT SECTION ============
function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-[700px]">
        <motion.div
          className="bg-gradient-to-b from-white to-[#F5F5F7] rounded-[32px] p-10 md:p-16 text-center shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_24px_rgba(0,0,0,0.06)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[#0A0A0A] mb-4">
            Démarrons un projet ensemble
          </h2>
          <p className="text-[#6E6E73] mb-8">
            Vous avez une idée, un projet ? Discutons-en et donnons vie à votre vision.
          </p>
          <a
            href="mailto:contact@deepgital.fr"
            className="inline-flex items-center justify-center bg-[#0A0A0A] text-white px-8 py-4 rounded-[14px] font-semibold hover:bg-[#1D1D1F] transition-colors"
          >
            Nous contacter
          </a>
          <p className="mt-6 text-[#86868B]">
            ou écrivez-nous à{' '}
            <a href="mailto:contact@deepgital.fr" className="text-[#6E6E73] hover:text-[#0A0A0A] hover:underline">
              contact@deepgital.fr
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  const socials = [
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Github, label: 'GitHub' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-black/5">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-[#86868B]">© 2025 Deepgital. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-[#86868B] hover:text-[#0A0A0A] transition-colors"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN PAGE ============
export default function HomePage() {
  const [showLanding, setShowLanding] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const hasEntered = sessionStorage.getItem('deepgital-entered');
    if (hasEntered) {
      setShowLanding(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem('deepgital-entered', 'true');
    setShowLanding(false);
  };

  return (
    <>
      <AnimatePresence>
        {showLanding && <LandingTitle onEnter={handleEnter} />}
      </AnimatePresence>

      {!showLanding && (
        <>
          <Navbar isScrolled={isScrolled} />
          <main id="main-content" className="min-h-screen bg-[#FAFAFA] pb-20 md:pb-0">
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}
