import React, { useState } from 'react';

export default function Experience() {
  // Tracks which card index is currently hovered to handle smooth transition scaling
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experienceData = [
    {
      role: 'Data Analytics (Work Study)',
      company: 'Coloplast • Hamburg, Germany (On-site)',
      period: 'Apr 2026 – Present',
      bullets: [
        'Supported development and maintenance of ETL/ELT pipelines using Python & SQL for data ingestion from REST APIs, CSV files, and CRM sources into Azure Lakehouse Architecture.',
        'Built and optimized PySpark transformation jobs in Azure Databricks with incremental loading to improve pipeline performance, reducing data refresh times by 50%.',
        'Maintained Apache Airflow DAGs to orchestrate scheduled data pipelines from various sources with robust dependency management and automated monitoring for incoming sales data from B2B pharmaceutical handlers.',
        'Contributed to CI/CD pipeline validation in Azure DevOps environments across Dev/QA deployment branches.',
        'Implemented rigorous data quality validation, schema verification checks, and source reconciliation runs, while supporting Star Schema data models to scale Power BI reporting reliability.',
        'Gathered explicit cross-department business requirements and engineered custom Power BI dashboards tracking 15+ complex KPIs for sales forecasting, month-end closing, and incentive metrics for Finance and ComEx teams.',
        'Collaborated closely with senior BP Controlling and Finance leaders to translate financial goals into structured reporting engines covering forecasting accuracy, rebate structures, and fiscal target tracking.'
      ]
    },
    {
      role: 'Research Assistant',
      company: 'Urban Electric Mobility Initiative • Berlin, Germany',
      period: 'May 2025 – Oct 2025',
      bullets: [
        'Built Power BI dashboards to visualize global mobility data for strategic policy and decision-making.',
        'Developed interactive spatial maps leveraging Leaflet.js, GeoJSON formatting, and Mapbox GL frameworks.',
        'Managed critical data cleaning, taxonomy structuring, and production content migration across enterprise platforms including WordPress, Wix, and Tutor LMS.',
        'Created high-impact landing pages for e-mobility key performance indicators (KPIs) and integrated structured learning modules.',
        'Diagnosed and resolved complex data integrity and user interface bottlenecks, directly improving platform cross-consistency and usability.'
      ]
    },
    {
      role: 'Data Analyst (Intern)',
      company: 'Devigners • United States (Remote)',
      period: 'Feb 2023 – Nov 2023',
      bullets: [
        'Built optimized ETL pipelines using Python scripting, raw SQL queries, and Excel to clean and prepare massive datasets for operational reporting.',
        'Conducted granular exploratory data analysis to isolate underlying trends and establish fundamental business key performance indicators (KPIs).',
        'Performed advanced statistical analysis on core KPIs using Python mathematical libraries (NumPy, StatsModels) to map performance drivers.',
        'Architected interactive analytics dashboards in Power BI utilizing specialized Power Query models and custom DAX calculations.',
        'Translated complex statistical outputs into actionable visualizations and shared reports, enabling cross-functional leadership to make faster data-driven decisions.',
        'Collaborated closely within agile sprints using JIRA for task tracking and managed code distribution pipelines using Git/GitHub.'
      ]
    }
  ];

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
            My professional journey and key achievements in various data roles.
          </p>
        </div>

        {/* Timeline Layout Container */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-8">
          
          {experienceData.map((exp, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={index} 
                className="relative group cursor-default"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                
                {/* Timeline Node Point (Briefcase Indicator) */}
                <span className={`absolute -left-[45px] md:-left-[61px] top-5 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-4 border-zinc-50 dark:border-[#09090b] shadow-sm transition-all duration-300 ${
                  isHovered 
                    ? 'bg-teal-500 dark:bg-teal-400 text-white scale-110' 
                    : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.625a2.25 2.25 0 0 0-2.25 2.25m16.5 0v-1.5A3.375 3.375 0 0 0 16.875 5.25h-9.75A3.375 3.375 0 0 0 3.75 8.625v1.5M16.5 13.5v-2.25H7.5V13.5m9 0H7.5m9 0v-1.125C16.5 11.178 15.322 10 13.875 10h-3.75C8.678 10 7.5 11.178 7.5 12.375V13.5" />
                  </svg>
                </span>

                {/* Main Card Box Layout */}
                <div className={`bg-white dark:bg-zinc-950 border rounded-3xl p-6 md:p-8 transition-all duration-300 ${
                  isHovered 
                    ? 'border-teal-500/50 dark:border-teal-400/30 shadow-lg dark:shadow-teal-950/10 bg-zinc-50/50 dark:bg-zinc-900/40' 
                    : 'border-zinc-200 dark:border-zinc-800 shadow-xs'
                }`}>
                  
                  {/* Header Title Section */}
                  <div className="w-full flex items-start justify-between text-left">
                    <div className="space-y-2">
                      <h3 className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${
                        isHovered ? 'text-teal-600 dark:text-teal-400' : 'text-zinc-950 dark:text-white'
                      }`}>
                        {exp.role}
                      </h3>
                      <div className="text-base font-bold text-zinc-600 dark:text-zinc-400">
                        {exp.company}
                      </div>
                      
                      {/* Calendar Date Badge Component */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-500 dark:text-zinc-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        {exp.period}
                      </div>
                    </div>

                    {/* Chevron Indicator */}
                    <span className={`text-zinc-400 dark:text-zinc-600 transition-transform duration-300 ${isHovered ? 'rotate-180 text-teal-500' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </div>

                  {/* Expandable Bullet List Content Container */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isHovered 
                      ? 'max-h-[650px] opacity-100 mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800' 
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