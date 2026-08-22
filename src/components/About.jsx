import React from 'react';
import { motion } from 'framer-motion';
import doodleImg from '../assets/doodle.png';
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '../lib/motionVariants';
import { useLanguage } from '../i18n/LanguageContext';

const skillsList = [
  { name: 'Excel', category: 'Analytics', color: 'border-emerald-500/20 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5' },
  { name: 'SQL', category: 'Database', color: 'border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-500/5' },
  { name: 'Power BI', category: 'BI Infrastructure', color: 'border-amber-500/20 text-amber-600 dark:text-amber-400 bg-amber-500/5' },
  { name: 'Tableau', category: 'Visualization', color: 'border-orange-500/20 text-orange-600 dark:text-orange-400 bg-orange-500/5' },
  { name: 'Python', category: 'Data Science', color: 'border-indigo-500/20 text-indigo-600 dark:text-indigo-400 bg-indigo-500/5' },
  { name: 'BigQuery', category: 'Cloud DWH', color: 'border-sky-500/20 text-sky-600 dark:text-sky-400 bg-sky-500/5' },
  { name: 'Spark', category: 'Big Data', color: 'border-rose-500/20 text-rose-600 dark:text-rose-400 bg-rose-500/5' },
  { name: 'Machine Learning', category: 'AI Models', color: 'border-purple-500/20 text-purple-600 dark:text-purple-400 bg-purple-500/5' }
];

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 w-full bg-zinc-50 dark:bg-[#0a0a0c] border-y border-zinc-200/80 dark:border-zinc-900 relative overflow-hidden transition-colors duration-500">
      
      {/* Asymmetric full-bleed background panel accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-500/[0.02] to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-[85rem] w-full mx-auto px-6 sm:px-8 lg:px-16 grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

        {/* Left Side: Strategic Copy, Large Counters, & Minimalist Grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-7 space-y-12"
        >

          <motion.div variants={staggerItem} className="space-y-6">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white tracking-tight leading-[1.1]">
              {t('about.headingMain')} <span className="text-teal-600 dark:text-teal-400">{t('about.headingHighlight')}</span>
            </h3>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-medium">
              {t('about.body')}<span className="italic text-teal-600 dark:text-teal-400 font-semibold">{t('about.bodyQuote')}</span>.
            </p>
          </motion.div>

          {/* High-Impact Numerical Showcases */}
          <motion.div variants={staggerItem} className="flex gap-16 border-t border-zinc-200 dark:border-zinc-800/80 pt-8">
            <div>
              <div className="text-6xl font-black text-teal-600 dark:text-teal-400 tracking-tight">10+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mt-2">{t('about.statsProjects')}</div>
            </div>
            <div>
              <div className="text-6xl font-black text-zinc-900 dark:text-white tracking-tight">2+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mt-2">{t('about.statsYears')}</div>
            </div>
          </motion.div>

          {/* Minimal Elegant 4-Column Stack Grid */}
          <motion.div variants={staggerItem} className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skillsList.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-4 rounded-2xl border bg-white dark:bg-zinc-900/60 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${skill.color}`}
                >
                  <div className="text-sm font-extrabold tracking-tight text-zinc-900 dark:text-white">{skill.name}</div>
                  <div className="text-[10px] font-bold uppercase opacity-60 mt-0.5 tracking-wider">{skill.category}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* Right Side: High-Impact Character Canvas Box */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-5 relative w-full h-full flex items-center justify-center lg:justify-end"
        >
          <motion.div
            animate={{ x: [0, 15, -10, 0], y: [0, -10, 15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-8 w-24 h-24 rounded-full bg-amber-400/80 mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          />
          <motion.div
            animate={{ x: [0, -12, 10, 0], y: [0, 12, -14, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-1/3 left-12 w-32 h-32 rounded-full bg-teal-400/80 mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          />

          <div className="w-full max-w-[440px] aspect-[4/5] rounded-[48px] bg-gradient-to-b from-zinc-100 to-zinc-200/40 dark:from-zinc-900 dark:to-zinc-900/20 border border-zinc-200 dark:border-zinc-800/80 relative overflow-hidden flex items-end justify-center shadow-2xl">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

            <img
              src={doodleImg}
              alt="Ali Asghar Character Avatar"
              className="w-[90%] h-[90%] object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}