import React from 'react';

export default function TechStack() {
  const categories = [
    { 
      title: "BI Platforms & Custom Reporting", 
      skills: ["Power BI (DAX, Power Query)", "Tableau Desktop", "Looker Studio", "Qlik", "Advanced Excel"]
    },
    { 
      title: "Data Warehousing & Cloud (GCP)", 
      skills: ["Google BigQuery", "Cloud Storage", "Cloud Dataflow", "Pub/Sub"]
    },
    { 
      title: "Databases & Core Analytics", 
      skills: ["SQL (PostgreSQL, MySQL, SQL Server)", "Python (Pandas, NumPy, StatsModels)", "R Scripting"]
    }
  ];

  return (
    <section className="py-20 border-b border-zinc-200 dark:border-zinc-800/60 transition-colors duration-300">
      <h2 className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-10">Technical Competency Matrix</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-5">
            <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200 tracking-tight">{cat.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill) => (
                <span key={skill} className="text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300 px-3.5 py-2 rounded-xl font-semibold shadow-xs transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}