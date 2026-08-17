import React, { useState } from 'react';

export default function Experience() {
  // Tracks which card index is currently expanded (click to toggle)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experienceData = [
    {
      role: 'Data Analytics (Work Study)',
      company: 'Coloplast • Hamburg, Germany',
      period: 'Apr 2026 – Present',
      bullets: [
        'Build and maintain ETL/ELT pipelines using Python and SQL, ingesting data from REST APIs, CSV files, and CRM sources into Azure Lakehouse Architecture.',
        'Optimize PySpark transformation jobs in Azure Databricks with incremental loading, cutting data refresh times by 50%.',
        'Orchestrate scheduled data pipelines using Apache Airflow DAGs with robust dependency management and automated monitoring for B2B pharmaceutical sales data.',
        'Contribute to CI/CD pipeline validation in Azure DevOps across Dev/QA deployment branches.',
        'Implement rigorous data quality validation, schema verification, and source reconciliation to support Star Schema data models for reliable Power BI reporting.',
        'Partner with senior BP Controlling and Finance leaders to translate business goals into custom Power BI dashboards tracking 15+ KPIs for sales forecasting, month-end closing, and incentive metrics.'
      ]
    },
    {
      role: 'Research Assistant',
      company: 'Urban Electric Mobility Initiative • Berlin, Germany',
      period: 'May 2025 – October 2025',
      bullets: [
        'Designed Power BI dashboards to visualize global mobility data for policy and decision-making.',
        'Developed interactive maps using Leaflet.js, GeoJSON, and Mapbox GL.',
        'Managed data cleaning, taxonomy structuring, and content migration across WordPress, Wix, and Tutor LMS platforms.',
        'Created landing pages for e-mobility topics featuring KPIs and learning modules.',
        'Resolved data integrity and UI issues, improving platform consistency and usability.'
      ]
    },
    {
      role: 'Data Analyst (Intern)',
      company: 'Devigners • Remote (United States)',
      period: 'February 2023 – November 2023',
      bullets: [
        'Built ETL pipelines using Python, SQL, and Excel to clean and prepare data for reporting.',
        'Conducted data analysis to explore trends and identify key performance indicators.',
        'Performed statistical analysis on KPIs using Python (NumPy, StatsModels) to uncover performance drivers.',
        'Created interactive dashboards in Power BI with Power Query and DAX for custom calculations.',
        'Shared insights through reports and visualizations, enabling faster, informed decisions.',
        'Managed tasks with Jira and tracked code changes using Git in a collaborative team environment.'
      ]
    }
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 w-full bg-transparent transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl mx-auto font-medium">
            My professional journey and key achievements across data roles.
          </p>
        </div>

        {/* Timeline Layout Container */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-8">
          
          {experienceData.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                key={index} 
                className="relative group cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                
                {/* Timeline Node Point */}
                <span className={`absolute -left-[45px] md:-left-[61px] top-5 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-4 border-zinc-50 dark:border-[#09090b] shadow-sm transition-all duration-300 ${
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
                        {exp.role}
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
                      Tap to view details →
                    </p>
                  )}

                  {/* Expandable Bullet List */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded 
                      ? 'max-h-[800px] opacity-100 mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800' 
                      : 'max-h-0 opacity-0 pointer-events-none'
                  }`}>
                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 mt-2.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}