import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { fadeInUp, scaleIn, staggerContainer, staggerItem, viewportOnce } from '../lib/motionVariants';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 w-full bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center space-y-4 mb-16"
        >
          <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            {t('contact.heading')}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl mx-auto font-medium">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Card */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left side: copy */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-black text-zinc-950 dark:text-white tracking-tight leading-snug">
                  {t('contact.cardHeadingPrefix')} <span className="text-teal-600 dark:text-teal-400">{t('contact.cardHeadingHighlight')}</span> {t('contact.cardHeadingSuffix')}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                  {t('contact.cardBody')}
                </p>
              </div>

              {/* Contact details */}
              <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="space-y-4"
              >
                <motion.a
                  variants={staggerItem}
                  href="mailto:ali.asgharcs147@gmail.com"
                  id="contact-email-link"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 hover:border-teal-500/40 hover:bg-teal-50/30 dark:hover:bg-teal-950/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/60 flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">{t('contact.emailLabel')}</p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">ali.asgharcs147@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  variants={staggerItem}
                  href="https://linkedin.com/in/aliiasghar"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-linkedin-link"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 hover:border-blue-500/40 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">{t('contact.linkedinLabel')}</p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">linkedin.com/in/aliiasghar</p>
                  </div>
                </motion.a>

                <motion.a
                  variants={staggerItem}
                  href="https://github.com/aliasgharcs"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-github-link"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 hover:border-zinc-400/60 hover:bg-zinc-100/60 dark:hover:bg-zinc-800 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 flex-shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">{t('contact.githubLabel')}</p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">github.com/aliasgharcs</p>
                  </div>
                </motion.a>
              </motion.div>
            </div>

            {/* Right side: visual accent card */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative flex items-center justify-center"
            >
              <div className="w-full max-w-xs rounded-3xl bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 p-8 text-white shadow-xl shadow-teal-500/20 space-y-6">
                <div className="space-y-2">
                  <p className="text-teal-100 text-xs font-bold uppercase tracking-widest">{t('contact.availableFor')}</p>
                  <h4 className="text-xl font-black leading-snug">{t('contact.rolesHeading')}</h4>
                </div>

                <div className="space-y-3">
                  {t('contact.services').map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 text-teal-200 flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-sm font-semibold text-teal-50">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:ali.asgharcs147@gmail.com"
                  className="block w-full text-center py-3 rounded-xl bg-white text-teal-700 text-sm font-black hover:bg-teal-50 transition-colors"
                >
                  {t('contact.sendMessage')}
                </a>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
