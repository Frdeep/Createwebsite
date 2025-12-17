'use client';

import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useTransition';
import { navLinkVariants, easings } from '@/lib/animations';
import clsx from 'clsx';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projets', label: 'Projets' },
  { href: '#apropos', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
];

interface NavbarProps {
  isRevealed: boolean;
}

export function Navbar({ isRevealed }: NavbarProps) {
  const isScrolled = useScrollPosition(20);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-40 h-16 hidden md:flex items-center transition-all duration-300',
          isScrolled ? 'glass' : 'bg-transparent'
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easings.smooth }}
      >
        <div className="w-full max-w-container mx-auto px-lg flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-[1.25rem] font-bold text-black-soft tracking-tight no-underline"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: easings.smooth }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Deepgital
          </motion.a>

          {/* Nav Links */}
          <div className="flex items-center gap-xl">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[0.9375rem] font-medium text-gray-500 hover:text-black-soft transition-colors duration-200 no-underline"
                custom={index}
                initial="hidden"
                animate={isRevealed ? "visible" : "hidden"}
                variants={navLinkVariants}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Tab Bar */}
      <motion.nav
        className={clsx(
          'fixed bottom-0 left-0 right-0 z-40 md:hidden glass safe-area-bottom',
          'border-t border-black/[0.06]'
        )}
        style={{ height: '84px' }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: easings.smooth }}
      >
        <div className="flex items-center justify-around h-full px-md">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex flex-col items-center gap-1 text-gray-500 hover:text-black-soft transition-colors duration-200 no-underline py-2"
              custom={index}
              initial="hidden"
              animate={isRevealed ? "visible" : "hidden"}
              variants={navLinkVariants}
            >
              <NavIcon name={link.label} />
              <span className="text-[0.6875rem] font-medium">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </>
  );
}

// Simple icon component for mobile nav
function NavIcon({ name }: { name: string }) {
  const iconClass = "w-5 h-5 stroke-current";
  
  switch (name) {
    case 'Services':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case 'Projets':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      );
    case 'À propos':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
    case 'Contact':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    default:
      return null;
  }
}
