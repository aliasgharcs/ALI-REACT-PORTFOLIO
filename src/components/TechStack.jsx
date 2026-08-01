import React from 'react';

export default function TechStack() {
  const categories = [
    { 
      title: "BI Platforms & Reporting", 
      skills: ["Power BI (DAX, Power Query)", "Tableau Desktop", "Looker Studio", "Qlik", "Advanced Excel"]
    },
    { 
      title: "Data Warehousing & Cloud (GCP)", 
      skills: ["Google BigQuery", "Cloud Storage", "Cloud Dataflow", "Pub/Sub", "Azure Databricks", "Apache Airflow"]
    },
    { 
      title: "Databases & Core Analytics", 
      skills: ["SQL (PostgreSQL, MySQL, SQL Server)", "Python (Pandas, NumPy, StatsModels)", "R Scripting", "ETL/ELT Pipelines"]
    }
  ];

  return (
    <section id="skills" className="py-24 w-full bg-zinc-50/50 dark:bg-[#09090b] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            Tools & Technologies
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl mx-auto font-medium">
            My technical competency matrix across data platforms, languages, and pipeline frameworks.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl space-y-6 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-black text-zinc-850 dark:text-zinc-100 tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400" />
                {cat.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-xs bg-zinc-150 dark:bg-zinc-800 border border-zinc-250 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-300 px-3.5 py-2 rounded-xl font-semibold transition hover:bg-teal-50/30 dark:hover:bg-teal-950/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}