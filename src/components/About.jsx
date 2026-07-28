import React from 'react';
import doodleImg from '../assets/doodle.png'; 

const skillsList = [
  { name: 'Excel', category: 'Analytics', color: 'border-emerald-500/20 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5' },
  { name: 'SQL', category: 'Database', color: 'border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-500/5' },
  { name: 'Power BI', category: 'BI Infrastructure', color: 'border-amber-500/20 text-amber-600 dark:text-amber-400 bg-amber-500/5' },
  { name: 'Tableau', category: 'Visualization', color: 'border-orange-500/20 text-orange-600 dark:text-orange-400 bg-orange-500/5' },
  { name: 'Python', category: 'Data Science', color: 'border-indigo-500/20 text-indigo-600 dark:text-indigo-400 bg-indigo-500/5' },
  { name: 'BigQuery', category: 'Cloud DWH', color: 'border-sky-500/20 text-sky-600 dark:text-sky-400 bg-sky-500/5' },
  { name: 'n8n Automation', category: 'Data Pipelines', color: 'border-rose-500/20 text-rose-600 dark:text-rose-400 bg-rose-500/5' },
  { name: 'Machine Learning', category: 'AI Models', color: 'border-purple-500/20 text-purple-600 dark:text-purple-400 bg-purple-500/5' }
];

export default function About() {
  return (
    <section id="about" className="py-24 w-full bg-zinc-50 dark:bg-[#0a0a0c] border-y border-zinc-200/80 dark:border-zinc-900 relative overflow-hidden transition-colors duration-500">
      
      {/* Asymmetric full-bleed background panel accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-500/[0.02] to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-[85rem] w-full mx-auto px-6 sm:px-8 lg:px-16 grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Side: Strategic Copy, Large Counters, & Minimalist Grid (Spans 7 Columns) */}
        <div className="lg:col-span-7 space-y-12">
          
          <div className="space-y-6">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white tracking-tight leading-[1.1]">
              I turn messy data into <span className="text-teal-600 dark:text-teal-400">decisions that matter.</span>
            </h3>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-medium">
              Data Analyst with hands-on experience structuring automated pipelines and business intelligence infrastructure. Currently pursuing my M.Sc. in Artificial Intelligence at BTU Cottbus, I bridge the gap between noisy raw records and corporate strategy.
            </p>
          </div>

          {/* High-Impact Numerical Showcases */}
          <div className="flex gap-16 border-t border-zinc-200 dark:border-zinc-800/80 pt-8">
            <div>
              <div className="text-6xl font-black text-teal-600 dark:text-teal-400 tracking-tight">15+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mt-2">Projects Delivered</div>
            </div>
            <div>
              <div className="text-6xl font-black text-zinc-900 dark:text-white tracking-tight">1+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mt-2">Years Experience</div>
            </div>
          </div>

          {/* Minimal Elegant 4-Column Stack Grid */}
          <div className="space-y-4">
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
          </div>

        </div>

        {/* Right Side: High-Impact Character Canvas Box (Spans 5 Columns) */}
        <div className="lg:col-span-5 relative w-full h-full flex items-center justify-center lg:justify-end">
          {/* Circular Accent Background Blobs */}
          <div className="absolute top-1/4 right-8 w-24 h-24 rounded-full bg-amber-400/80 mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob" />
          <div className="absolute bottom-1/3 left-12 w-32 h-32 rounded-full bg-teal-400/80 mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-200" />
          
          <div className="w-full max-w-[440px] aspect-[4/5] rounded-[48px] bg-gradient-to-b from-zinc-100 to-zinc-200/40 dark:from-zinc-900 dark:to-zinc-900/20 border border-zinc-200 dark:border-zinc-800/80 relative overflow-hidden flex items-end justify-center shadow-2xl">
            {/* Subtle background overlay grid vector effect */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <img 
              src={doodleImg} 
              alt="Ali Asghar 3D Character Avatar Illustration" 
              className="w-[90%] h-[90%] object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}