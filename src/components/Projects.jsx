import React, { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Operations',
    'Sales',
    'Finance',
    'HR',
    'AI & ML'
  ];

  const projectsData = [
    {
      id: 1,
      title: 'German EV Charging Infrastructure & Global Policy Tracker',
      category: 'Operations',
      featured: true,
      description: 'Interactive analytics platform evaluating market concentration, charging capacity distribution across Germany, and global EV policy readiness across UN member states. Built using Power BI with custom geospatial layers and Python-driven data processing pipelines on GCP.',
      image: 'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=1200&q=80',
      tags: ['Power BI', 'Python', 'GCP', 'Geospatial Analysis'],
      liveUrl: 'https://github.com/aliasgharcs',
      repoUrl: 'https://github.com/aliasgharcs'
    },
    {
      id: 2,
      title: 'Pizza Sales Performance & Trend Analysis',
      category: 'Sales',
      featured: false,
      description: 'End-to-end sales dashboard analyzing peak order periods, best-selling pizza categories, hourly revenue trends, and seasonal demand patterns using SQL for data extraction and Power BI for interactive storytelling.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      tags: ['MS Excel', 'SQL', 'Power BI', 'Python'],
      liveUrl: 'https://github.com/aliasgharcs',
      repoUrl: 'https://github.com/aliasgharcs'
    },
    {
      id: 3,
      title: 'Bank Loan Risk & Credit Performance Report',
      category: 'Finance',
      featured: false,
      description: 'Comprehensive banking dashboard monitoring loan portfolio health, assessing debt-to-income (DTI) ratios, and segmenting applicants by risk profile. Delivered actionable insights for credit analysts and senior leadership.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      tags: ['SQL', 'Tableau', 'Financial Modeling'],
      liveUrl: 'https://github.com/aliasgharcs',
      repoUrl: 'https://github.com/aliasgharcs'
    },
    {
      id: 4,
      title: 'Enterprise HR Workforce Analytics Dashboard',
      category: 'HR',
      featured: false,
      description: 'End-to-end workforce analytics platform tracking key attrition drivers, demographic splits, and compensation distributions across 10,000+ employees. Identified top turnover risk factors and supported HR strategy decisions.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      tags: ['Excel', 'Power BI', 'DAX', 'Workforce Analytics'],
      liveUrl: 'https://github.com/aliasgharcs',
      repoUrl: 'https://github.com/aliasgharcs'
    },
    {
      id: 5,
      title: 'Real-Time Gender & Age Detection Model',
      category: 'AI & ML',
      featured: false,
      description: 'Convolutional Neural Network (CNN) integrated with OpenCV for real-time facial detection, input preprocessing, and demographic estimation with live webcam support.',
      image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'OpenCV', 'CNN', 'Deep Learning'],
      liveUrl: 'https://github.com/aliasgharcs',
      repoUrl: 'https://github.com/aliasgharcs'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  // Only show featured badge if the project is explicitly marked featured
  const featuredProject = filteredProjects.find((p) => p.featured) ?? null;
  const standardProjects = filteredProjects.filter((p) => p.id !== (featuredProject ? featuredProject.id : null));

  return (
    <section id="projects" className="py-24 w-full bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Explore real-world analytics projects across different industries, where data was transformed into actionable business insights.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-md scale-105'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Display Grid */}
        <div className="space-y-8">
          
          {/* Featured Large Layout — only when an explicitly-featured project exists in filtered set */}
          {featuredProject && (
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
              <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/90 text-white backdrop-blur-md">
                    {featuredProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/90 text-white backdrop-blur-md">
                    ★ Featured Case Study
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black text-zinc-950 dark:text-white tracking-tight leading-snug">
                    {featuredProject.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                    {featuredProject.description}
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call To Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs md:text-sm transition-all"
                  >
                    View Dashboard
                  </a>
                  <a
                    href={featuredProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-bold text-xs md:text-sm transition-all"
                  >
                    <span>Read Details</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Standard 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standardProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/90 text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-[11px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition-all"
                  >
                    View Dashboard
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-bold text-xs transition-all"
                  >
                    <span>Read Details</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state when filter returns nothing */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-zinc-400 dark:text-zinc-600">
              <p className="text-lg font-semibold">No projects in this category yet.</p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}