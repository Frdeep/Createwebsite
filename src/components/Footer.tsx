'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { sectionVariants } from '@/lib/animations';
import { useScrollReveal, useReducedMotion } from '@/hooks/useTransition';

const socialLinks = [
  { href: 'https://twitter.com/deepgital', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com/company/deepgital', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com/deepgital', icon: Instagram, label: 'Instagram' },
  { href: 'https://github.com/deepgital', icon: Github, label: 'GitHub' },
];

export function Footer() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.footer
      ref={ref}
      className="py-12 border-t border-[rgba(0,0,0,0.06)]"
      variants={sectionVariants}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      animate={isVisible || prefersReducedMotion ? 'visible' : 'hidden'}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Deepgital. Tous droits réservés.
          </p>

          <nav className="flex items-center gap-4" aria-label="Réseaux sociaux">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black-soft transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon size={20} strokeWidth={2} />
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </motion.footer>
  );
}
