import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce, EASE } from '../lib/motionVariants';
import { useLanguage } from '../i18n/LanguageContext';
import { experienceText } from '../i18n/content';

const timelineItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function Experience() {
  const { language, t } = useLanguage();
  // Tracks which card index is currently expanded (click to toggle)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experienceData = [
    {
      id: 'coloplast',
      company: 'Coloplast • Hamburg, Germany',
      period: 'Apr 2026 – Present',
    },
    {
      id: 'urban-mobility',
      company: 'Urban Electric Mobility Initiative • Berlin, Germany',
      period: 'May 2025 – October 2025',
    },
    {
      id: 'devigners',
      company: 'Devigners • Remote (United States)',
      period: 'February 2023 – November 2023',
    }
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 w-full bg-transparent transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center space-y-4 mb-20"
        >
          <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            {t('experience.heading')}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl mx-auto font-medium">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        {/* Timeline Layout Container */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-8"
        >

          {experienceData.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            const text = experienceText[language][exp.id];

            return (
              <motion.div
                key={index}
                variants={timelineItem}
                className="relative group cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                
                {/* Timeline Node Point */}
                <span className={`absolute -left-[49px] md:-left-[68px] top-5 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-4 border-zinc-50 dark:border-[#09090b] shadow-sm transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-teal-500 dark:bg-teal-400 text-white scale-110' 
                    : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.625a2.25 2.25 0 0 0-2.25 2.25m16.5 0v-1.5A3.375 3.375 0 0 0 16.875 5.25h-9.75A3.375 3.375 0 0 0 3.75 8.625v1.5M16.5 13.5v-2.25H7.5V13.5m9 0H7.5m9 0v-1.125C16.5 11.178 15.322 10 13.875 10h-3.75C8.678 10 7.5 11.178 7.5 12.375V13.5" />
                  </svg>
                </span>

                {/* Main Card Box Layout */}
                <div className={`bg-white dark:bg-zinc-950 border rounded-3xl p-6 md:p-8 transition-all duration-300 ${
                  isExpanded 
                    ? 'border-teal-500/50 dark:border-teal-400/30 shadow-lg dark:shadow-teal-950/10 bg-zinc-50/50 dark:bg-zinc-900/40' 
                    : 'border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md'
                }`}>
                  
                  {/* Header Title Section */}
                  <div className="w-full flex items-start justify-between text-left">
                    <div className="space-y-2">
                      <h3 className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${
                        isExpanded ? 'text-teal-600 dark:text-teal-400' : 'text-zinc-950 dark:text-white'
                      }`}>
                        {text.role}
                      </h3>
                      <div className="text-base font-bold text-zinc-600 dark:text-zinc-400">
                        {exp.company}
                      </div>
                      
                      {/* Calendar Date Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-500 dark:text-zinc-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        {exp.period}
                      </div>
                    </div>

                    {/* Chevron Indicator */}
                    <span className={`text-zinc-400 dark:text-zinc-600 transition-transform duration-300 flex-shrink-0 mt-1 ${isExpanded ? 'rotate-180 text-teal-500' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </div>

                  {!isExpanded && (
                    <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-3 font-medium">
                      {t('experience.tapToViewDetails')}
                    </p>
                  )}

                  {/* Expandable Bullet List */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-4 mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                          {text.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 mt-2.5 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}