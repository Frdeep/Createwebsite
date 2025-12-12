'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, FolderOpen, Users, Mail } from 'lucide-react';
import { useScrollPosition, useReducedMotion } from '@/hooks/useTransition';
import { navLinkVariants, easing } from '@/lib/animations';
import clsx from 'clsx';

interface NavbarProps {
  isVisible: boolean;
  transitionPhase: 'idle' | 'clicked' | 'compressing' | 'migrating' | 'revealing' | 'complete';
}

const navLinks = [
  { href: '#services', label: 'Services', icon: Briefcase },
  { href: '#projets', label: 'Projets', icon: FolderOpen },
  { href: '#a-propos', label: 'À propos', icon: Users },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export function Navbar({ isVisible, transitionPhase }: NavbarProps) {
  const { isScrolled } = useScrollPosition();
  const prefersReducedMotion = useReducedMotion();

  const showLinks = transitionPhase === 'revealing' || transitionPhase === 'complete';

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Navbar */}
          <motion.header
            className={clsx(
              'fixed top-0 left-0 right-0 z-40 h-16 hidden md:flex items-center transition-all duration-300',
              isScrolled && 'glass'
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          >
            <div className="mx-auto w-full max-w-[1200px] px-6 flex items-center justify-between">
              {/* Logo */}
              <motion.a
                href="#"
                className="text-xl font-bold text-black-soft hover:opacity-80 transition-opacity duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: prefersReducedMotion ? 0 : 0.4,
                  duration: prefersReducedMotion ? 0 : 0.3,
                }}
              >
                Deepgital
              </motion.a>

              {/* Navigation Links */}
              <nav className="flex items-center gap-8" aria-label="Navigation principale">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-[0.9375rem] font-medium text-gray-500 hover:text-black-soft transition-colors duration-200"
                    custom={index}
                    variants={navLinkVariants}
                    initial="hidden"
                    animate={showLinks ? 'visible' : 'hidden'}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.header>

          {/* Mobile Bottom Tab Bar */}
          <motion.nav
            className={clsx(
              'fixed bottom-0 left-0 right-0 z-40 md:hidden',
              'glass border-t border-[rgba(0,0,0,0.06)]',
              'pb-[env(safe-area-inset-bottom)]'
            )}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.5,
              duration: prefersReducedMotion ? 0 : 0.4,
              ease: easing.smooth,
            }}
            aria-label="Navigation mobile"
          >
            <div className="flex items-center justify-around h-[84px] px-4">
              {/* Home Link */}
              <motion.a
                href="#"
                className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-black-soft transition-colors duration-200"
                custom={0}
                variants={navLinkVariants}
                initial="hidden"
                animate={showLinks ? 'visible' : 'hidden'}
                aria-label="Accueil"
              >
                <Home size={20} strokeWidth={2} />
                <span className="text-xs font-medium">Accueil</span>
              </motion.a>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-black-soft transition-colors duration-200"
                  custom={index + 1}
                  variants={navLinkVariants}
                  initial="hidden"
                  animate={showLinks ? 'visible' : 'hidden'}
                  aria-label={link.label}
                >
                  <link.icon size={20} strokeWidth={2} />
                  <span className="text-xs font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
