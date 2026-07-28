import React from 'react';
import aliPhoto from '../assets/aliphoto1.jpeg'; 

export default function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] w-full flex items-center py-12 lg:py-0 relative overflow-hidden">
      {/* Ambient background accent panel */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[85rem] w-full mx-auto px-6 sm:px-8 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Columns: Expansive Typography Profile Deck */}
        <div className="lg:col-span-7 space-y-8 text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
            Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-white tracking-tight leading-[0.95]">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Ali Asghar
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-700 dark:text-zinc-300 tracking-tight">
            Data Analyst & BI Developer
          </h2>
          
          {/* Action Link Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="https://drive.google.com/file/d/1IWYWf5FLerAvShgZfIX8_B6fgWxLGLHZ/view?usp=sharing" 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-4 bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-bold tracking-widest uppercase rounded-full transition shadow-xl"
            >
              View Resume
            </a>
            
            <a 
              href="mailto:ali.asgharcs147@gmail.com" 
              className="px-8 py-4 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold tracking-widest uppercase rounded-full transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Columns: Asymmetric Portrait Canvas Block */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          {/* Decorative Background Shapes */}
          <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-amber-400 opacity-80 blur-[2px] hidden sm:block" />
          <div className="absolute -bottom-8 -right-4 w-28 h-28 rounded-full bg-teal-500 opacity-80 blur-[2px] hidden sm:block" />
          
          <div className="relative w-full max-w-[420px] aspect-square rounded-[40px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl p-4 transition duration-500 hover:rotate-1">
            <img 
              src={aliPhoto} 
              alt="Ali Asghar Portrait" 
              className="w-full h-full rounded-[28px] object-cover object-top shadow-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
}