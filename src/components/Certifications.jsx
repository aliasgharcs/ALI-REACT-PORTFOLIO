import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { fadeIn, fadeInUp, staggerContainer, staggerItem, viewportOnce } from '../lib/motionVariants';

export default function Certifications() {
  const stats = [
    { number: '10+', label: 'Learning Hours' },
    { number: '3', label: 'Key Certifications' },
    { number: '2+', label: 'Learning Platforms' },
    { number: '10+', label: 'Projects Completed' }
  ];

  const certificationsData = [
    {
      id: 1,
      title: 'Data Analytics Essentials',
      issuer: 'Cisco Networking Academy & Coursera',
      issuerShort: 'C',
      issuerBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
      date: 'Nov 2023',
      skills: 'Data Analysis, Database, Data Visualization, Data Warehouse',
      previewBg: 'from-emerald-900/80 to-teal-900/90',
      verifyUrl: 'https://www.credly.com/badges/c03cb396-124a-41f3-9255-317045f849f2'
    },
    {
      id: 2,
      title: 'Excel Essentials for Data Analytics',
      issuer: 'IBM / Coursera',
      issuerShort: 'I',
      issuerBg: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
      date: 'Dec 2023',
      skills: 'Data Science, Excel, Data Wrangling, Pivot Tables',
      previewBg: 'from-blue-900/80 to-indigo-900/90',
      verifyUrl: 'https://www.credly.com/badges/1cabbba0-27bb-44fb-bb87-a38ce35b67bb'
    },
    {
      id: 3,
      title: 'Certificate Of Appreciation',
      issuer: 'Bahria University',
      issuerShort: 'B',
      issuerBg: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400',
      date: 'Fall 2021',
      skills: 'Artificial Intelligence, Machine Learning, Semester Project Excellence',
      note: "Certificate for hard work and dedication to the semester project of Fall'2021 for Artificial Intelligence.",
      previewBg: 'from-purple-900/80 to-violet-900/90',
      verifyUrl: ''
    }
  ];

  return (
    <section id="certifications" className="py-24 w-full bg-zinc-50/50 dark:bg-[#09090b] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Header Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/50 text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            <span>Continuous Learning</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            Certifications & <span className="text-teal-600 dark:text-teal-400">Honors</span>
          </h2>

          <div className="w-16 h-1 bg-teal-500/60 mx-auto rounded-full" />

          <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Verified credentials and academic recognition for excellence in data analytics and artificial intelligence.
          </p>
        </motion.div>

        {/* Highlight Metrics Banner */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-8 mb-16 shadow-xs"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-zinc-100 dark:divide-zinc-800">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl md:text-4xl font-black text-teal-600 dark:text-teal-400 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications 3-Column Card Grid */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Certificate Visual Header */}
                <div className={`relative h-40 bg-gradient-to-br ${cert.previewBg} p-5 flex flex-col justify-between border-b border-zinc-100 dark:border-zinc-800/80 overflow-hidden`}>
                  <div className="absolute -right-4 -bottom-4 text-white/10 font-black text-6xl select-none pointer-events-none">
                    CERT
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest uppercase text-white/70">
                      STATEMENT OF ACCOMPLISHMENT
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-white/80">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.813m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                    </svg>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <p className="text-[11px] text-white/80 font-medium">Awarded to</p>
                    <p className="text-sm font-bold text-white tracking-tight">Ali Asghar</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-7 h-7 rounded-full font-black text-xs flex items-center justify-center shrink-0 ${cert.issuerBg}`}>
                      {cert.issuerShort}
                    </span>
                    <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300 truncate">
                      {cert.issuer}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-zinc-950 dark:text-white tracking-tight leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                      {cert.date}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                    <span className="font-bold text-zinc-700 dark:text-zinc-300">Skills: </span>
                    {cert.skills}
                  </p>

                  {cert.note && (
                    <p className="text-xs text-teal-600 dark:text-teal-400 italic bg-teal-50/50 dark:bg-teal-950/30 p-2.5 rounded-xl border border-teal-200/50 dark:border-teal-800/40">
                      "{cert.note}"
                    </p>
                  )}
                </div>
              </div>

              {/* Verify Credential Button */}
              <div className="p-6 pt-0">
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-teal-600 dark:text-teal-400 hover:bg-teal-50/50 dark:hover:bg-zinc-800/50 text-xs font-bold transition-all flex items-center justify-center gap-1.5 group-hover:border-teal-500/40"
                  >
                    <span>Verify Credential Link</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                ) : (
                  <span className="w-full py-2.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600 text-xs font-bold flex items-center justify-center gap-1.5 cursor-not-allowed opacity-70">
                    <Lock className="w-3.5 h-3.5" />
                    <span>No Public Credential</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}