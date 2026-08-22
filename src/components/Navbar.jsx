import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar({ darkMode, setDarkMode, isHidden = false }) {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { key: 'home', href: '#home', id: 'home' },
    { key: 'about', href: '#about', id: 'about' },
    { key: 'skills', href: '#skills', id: 'skills' },
    { key: 'experience', href: '#experience', id: 'experience' },
    { key: 'education', href: '#education', id: 'education' },
    { key: 'projects', href: '#projects', id: 'projects' },
    { key: 'certifications', href: '#certifications', id: 'certifications' },
  ];

  // Active section tracking logic via IntersectionObserver
  useEffect(() => {
    const sectionIds = [...navLinks.map((link) => link.id), 'contact'];
    const ratios = new Map();

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -45% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
      });

      let bestId = null;
      let bestRatio = 0;
      sectionIds.forEach((id) => {
        const ratio = ratios.get(id) || 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });

      if (bestId) setActiveSection(bestId);
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    const contactEl = document.getElementById('contact');
    if (contactEl) observer.observe(contactEl);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      animate={{ y: isHidden ? '-110%' : 0, opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: isHidden ? 'none' : 'auto' }}
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand/Logo */}
        <a href="#home" className="text-xl font-black text-zinc-950 dark:text-white tracking-tight hover:opacity-80 transition-opacity">
          Ali Asghar
        </a>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.key}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-teal-600 dark:text-teal-400 font-bold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {t(`nav.${link.key}`)}
              </a>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* Language Toggle */}
          <div className="flex items-center rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1 text-xs font-bold">
            {['en', 'de'].map((lng) => (
              <button
                key={lng}
                onClick={() => setLanguage(lng)}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  language === lng
                    ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs'
                    : 'text-zinc-500 dark:text-zinc-400'
                }`}
                aria-label={lng === 'en' ? 'Switch to English' : 'Auf Deutsch wechseln'}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-amber-500 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center cursor-pointer overflow-hidden"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {darkMode ? (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Moon className="w-5 h-5" fill="currentColor" />
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center text-zinc-600 dark:text-zinc-400"
                >
                  <Sun className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:inline-flex px-5 py-2 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 text-sm font-bold transition-colors shadow-xs"
          >
            {t('nav.getInTouch')}
          </motion.a>

          {/* Mobile Hamburger Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-semibold py-2 transition-colors ${
                      isActive
                        ? 'text-teal-600 dark:text-teal-400 font-bold'
                        : 'text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 text-sm font-bold transition-all shadow-xs mt-2"
              >
                {t('nav.getInTouch')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}