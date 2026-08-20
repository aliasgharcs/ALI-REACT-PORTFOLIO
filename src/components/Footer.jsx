import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { fadeIn, viewportOnce } from '../lib/motionVariants';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';

export default function Footer() {
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/aliasgharcs', Icon: GithubIcon },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/aliiasghar', Icon: LinkedinIcon },
    { label: 'Email', href: 'mailto:ali.asgharcs147@gmail.com', Icon: Mail },
  ];

  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-900/60 relative z-10 transition-colors duration-300">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6"
      >

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
              aria-label={label}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.92 }}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center space-y-1">
          <p className="font-semibold text-sm text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Ali Asghar. All rights reserved.
          </p>
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-medium">
            Built with React & Tailwind CSS v4
          </p>
        </div>

      </motion.div>
    </footer>
  );
}