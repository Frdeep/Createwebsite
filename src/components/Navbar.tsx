'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, FolderOpen, User, Mail, Search, Bell } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useTransition';
import { easings } from '@/lib/animations';
import clsx from 'clsx';

const navLinks = [
  { href: '#hero', label: 'Accueil', icon: Home },
  { href: '#services', label: 'Services', icon: Briefcase },
  { href: '#projets', label: 'Projets', icon: FolderOpen },
  { href: '#apropos', label: 'À propos', icon: User },
  { href: '#contact', label: 'Contact', icon: Mail },
];

interface NavbarProps {
  isRevealed: boolean;
}

export function Navbar({ isRevealed }: NavbarProps) {
  const isScrolled = useScrollPosition(20);
  const [activeSection, setActiveSection] = useState('#hero');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop Top Navbar */}
      <motion.nav
        className={clsx(
          'fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-2 px-2 py-2 rounded-full transition-all duration-300',
          isScrolled ? 'glass-card' : 'bg-white/50 backdrop-blur-sm'
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easings.smooth }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          className="px-4 py-2 text-base font-bold text-gray-800 tracking-tight no-underline"
          onClick={(e) => handleNavClick(e, '#hero')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Deepgital
        </motion.a>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200" />

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.slice(1).map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={clsx(
                'px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 no-underline',
                activeSection === link.href
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              )}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Bottom Tab Bar - Dark style like in the images */}
      <motion.nav
        className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: easings.smooth }}
      >
        <div 
          className="glass-dark rounded-[28px] px-4 py-3 flex items-center justify-around"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          }}
        >
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href;
            
            return (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative flex flex-col items-center gap-1 p-2 no-underline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className={clsx(
                    'w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300',
                    isActive 
                      ? 'bg-white text-gray-900' 
                      : 'bg-transparent text-gray-400'
                  )}
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>
              </motion.a>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
