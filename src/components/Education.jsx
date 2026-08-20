import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '../lib/motionVariants';

export default function Education() {
  const educationList = [
    {
      degree: 'M.Sc., Artificial Intelligence',
      institution: 'Brandenburgische Technische Universität Cottbus',
      location: 'Cottbus, Germany',
      period: 'October 2023 – Present',
      iconBg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20'
    },
    {
      degree: 'B.Sc., Computer Science',
      institution: 'Bahria University Karachi',
      location: 'Karachi, Pakistan',
      period: 'February 2019 – February 2023',
      iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
    }
  ];

  return (
    <section id="education" className="py-24 w-full bg-zinc-50/50 dark:bg-[#09090b] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        
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
            Education
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl mx-auto font-medium">
            Academic background and specialized coursework in Computer Science and Artificial Intelligence.
          </p>
        </motion.div>

        {/* Education 2-Column Grid */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 space-y-6 shadow-xs hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-500 dark:text-zinc-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    {edu.period}
                  </div>
                  <h3 className="text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-bold text-teal-600 dark:text-teal-400">
                    {edu.institution}
                  </p>
                </div>

                <div className={`p-3.5 rounded-2xl border ${edu.iconBg} shrink-0`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.813m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
              </div>

              <p className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                <MapPin className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                {edu.location}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
