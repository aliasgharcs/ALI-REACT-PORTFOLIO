import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import DataBackground from './components/DataBackground';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] transition-colors duration-300 relative overflow-hidden">
      {/* Background tracks */}
      <DataBackground darkMode={darkMode} />
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Full-bleed layout engine */}
      <main className="w-full pt-16 relative z-10 flex flex-col">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}