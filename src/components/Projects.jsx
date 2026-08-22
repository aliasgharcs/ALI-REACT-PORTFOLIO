import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, Play, X } from 'lucide-react';
import { fadeInUp, scaleIn, staggerContainer, staggerItem, viewportOnce, EASE } from '../lib/motionVariants';
import { useLanguage } from '../i18n/LanguageContext';
import { projectsText } from '../i18n/content';

function getResourceLabel(url, t) {
  if (!url) return t('projects.resourceLabels.viewProject');
  if (url.includes('drive.google.com')) return url.includes('/folders/') ? t('projects.resourceLabels.viewFolder') : t('projects.resourceLabels.viewOnDrive');
  if (url.includes('docs.google.com')) return t('projects.resourceLabels.viewReport');
  if (url.includes('colab.research.google.com')) return t('projects.resourceLabels.openNotebook');
  return t('projects.resourceLabels.viewProject');
}

export default function Projects({ onModalOpenChange } = {}) {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const gridWrapperRef = useRef(null);
  const gridInView = useInView(gridWrapperRef, { once: true, margin: '-80px' });

  useEffect(() => {
    onModalOpenChange?.(Boolean(selectedProject));
  }, [selectedProject, onModalOpenChange]);

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
      title: 'German EV Charging Infrastructure',
      category: 'Operations',
      featured: true,
      hasVideoDemo: true,
      videoUrl: 'https://drive.google.com/file/d/1OgofT3FmaIxxawTGUEF5MHbLqjSZyrw9/view?usp=sharing',
      description: "Analyzed over 71,000 charging points across nearly 5,000 operators to map Germany's electric vehicle charging landscape, identifying market fragmentation, infrastructure gaps, and growth patterns.",
      keyOutcomes: [
        'Collected, cleaned, and standardized three decades of historical charging point data using Python.',
        'Built an interactive Power BI dashboard with an Excel supporting layer to visualize operator market share, charger speed distribution, and geographic coverage.',
        'Optimized DAX measures to efficiently handle 70,000+ rows of data with multiple joins.',
        'Uncovered the market dominance of "Other" operators, reshaping infrastructure planning perspectives for small players.'
      ],
      image: '/projects/ev_charging_de.png',
      tags: ['Python', 'Power BI', 'DAX', 'Excel'],
      githubUrl: 'https://drive.google.com/file/d/1twY41H_kcptbCJ1cQaqcbIuQPfVo8Wl-/view?usp=sharing'
    },
    {
      id: 2,
      title: 'Pizza Shop Sales Dashboard',
      category: 'Sales',
      featured: false,
      hasVideoDemo: true,
      videoUrl: 'https://drive.google.com/file/d/1gaC7SZKFn7P2cSSFXz6-9Pkzq-IH6X43/view?usp=sharing',
      description: 'Developed a dynamic sales dashboard to transform messy raw order logs into actionable insights, helping business owners understand customer behavior, optimize inventory, and boost profitability.',
      keyOutcomes: [
        'Imported, cleaned, and standardized CSV sales data using SQL and Power BI, rectifying inconsistent date/time formats and missing values.',
        'Created calculated columns and built robust data relationships across order details, pizza types, and categories.',
        'Delivered an intuitive dashboard filtering by time, category, and size to reveal peak hours and best-selling products.',
        'Uncovered seasonality and customer demographic impacts, driving data-informed decisions for promotions and staffing.'
      ],
      image: '/projects/pizza_sales.png',
      tags: ['SQL', 'Power BI'],
      githubUrl: 'https://drive.google.com/file/d/1F_ttyfyyUIlI5BFIzPU_zWah2JFAwtSH/view?usp=sharing'
    },
    {
      id: 3,
      title: 'Bank Loan Dashboard',
      category: 'Finance',
      featured: false,
      hasVideoDemo: true,
      videoUrl: 'https://drive.google.com/file/d/1d24ipoZUnNEDQnumes7IuvY7Bk1DuI5g/view?usp=sharing',
      description: 'Built a comprehensive loan management dashboard to visualize application volume, funded amounts, payment status, and interest rates, enabling the bank to assess risk and optimize loan offerings.',
      keyOutcomes: [
        'Imported scattered CSV loan data into SQL Server for structured querying and connected it to Tableau for visualization.',
        'Standardized date formats and loan statuses, and created calculated fields for total loan amounts, payments, and outstanding balances.',
        'Designed an interactive Tableau dashboard with clear filters for time periods, regions, and loan types.',
        'Identified critical links between loan terms, interest rates, and repayment success to refine credit models and collection efforts.'
      ],
      image: '/projects/bank_loan.png',
      tags: ['Tableau', 'SQL Server', 'SQL'],
      githubUrl: 'https://drive.google.com/drive/folders/1S2l0_uA9WJ9utRefrmj3K3udwVOm-4_P?hl=de'
    },
    {
      id: 4,
      title: 'Road Accident Dashboard',
      category: 'Operations',
      featured: false,
      hasVideoDemo: true,
      videoUrl: 'https://drive.google.com/file/d/1aWMQwjZiSls8npitF0c008saqFb2BBBP/view?usp=sharing',
      description: 'Created a comprehensive accident tracking dashboard visualizing severity, hotspots, and causal trends across time, vehicle types, and weather conditions to aid evidence-based safety planning.',
      keyOutcomes: [
        'Aggregated and cleaned disparate CSV accident reports in Excel, handling missing values through imputation and correcting inconsistent severity labels.',
        'Merged datasets covering accident details, weather conditions, and vehicle types, extracting time-based features for trend analysis.',
        'Built an intuitive dashboard allowing safety planners to drill down into high-risk zones and contributing factors.',
        'Analyzed patterns in over 3,000 fatal accidents to help prioritize infrastructure upgrades and optimize emergency response.'
      ],
      image: '/projects/road_accident.jpg',
      tags: ['Excel'],
      githubUrl: 'https://drive.google.com/file/d/1k6hkV0ILEBRAVV0frDfwoIOdwc24uTb1/view?usp=sharing'
    },
    {
      id: 5,
      title: 'HR Analytics Dashboard',
      category: 'HR',
      featured: false,
      hasVideoDemo: true,
      videoUrl: 'https://drive.google.com/file/d/1X-etQkpzY5QpqGFrZlOimb0kF8OS0ZZr/view?usp=sharing',
      description: 'Developed a comprehensive workforce analytics dashboard uncovering the drivers behind employee turnover, empowering HR leaders to transition from reactive hiring to proactive retention strategies, delivered as both a Power BI dashboard and a supporting Excel workbook.',
      keyOutcomes: [
        'Built a Star Schema data model in Power BI using the IBM HR Analytics dataset, centralized around a Fact_Employee table.',
        'Developed complex DAX measures for attrition rate, average age, salary, and tenure.',
        'Designed an interactive dashboard cross-tabulating job roles against satisfaction scores, education, and age distributions.',
        'Identified significant turnover spikes during Year 1 and in lower salary bands, directly shaping onboarding and compensation strategies.'
      ],
      image: '/projects/hr_analytics_bi.png',
      tags: ['Power BI', 'DAX', 'Excel'],
      githubUrl: 'https://drive.google.com/file/d/1Pz4fPOCYtVhRO7fGPtteR9gLpWUmXXDb/view?usp=sharing'
    },
    {
      id: 6,
      title: 'Global EV Policy & Sustainability Dashboard',
      category: 'Operations',
      featured: false,
      hasVideoDemo: false,
      description: 'Engineered a global benchmarking tool evaluating EV adoption readiness and sustainability frameworks across 193 UN Member States by consolidating disparate policy, energy, and socioeconomic data.',
      keyOutcomes: [
        'Audited and harmonized unstructured data from UN Statistics, the IEA, and the World Bank into a unified analytical format.',
        'Categorized nations by "Policy Maturity" and "Market Readiness" based on a scoring framework covering VAT exemptions, import taxes, and ICE phase-out targets.',
        'Correlated energy metrics with carbon goals to measure the environmental ROI of transitioning to electric mobility based on grid carbon intensity.',
        'Quantified socioeconomic drivers like urbanization rates and GDP to assess the feasibility of mass-market EV infrastructure deployment.'
      ],
      image: '/projects/global_ev_policy.png',
      tags: ['Power BI', 'SQL', 'Excel'],
      githubUrl: 'https://drive.google.com/file/d/1zOsOsNEMcfJ2eUE0Ij5Qbsyh4_rBORRg/view?usp=sharing'
    },
    {
      id: 7,
      title: 'E-Commerce Store Analytics',
      category: 'Sales',
      featured: false,
      hasVideoDemo: false,
      description: 'Designed a comprehensive performance dashboard analyzing nearly 10,000 online orders to uncover regional dominance, category trends, and customer segments, driving strategic growth decisions.',
      keyOutcomes: [
        'Connected transaction data to Looker Studio to build a clean, interactive dashboard around geography, product category, and customer segments.',
        'Visualized regional distribution, demonstrating that the West and East regions combined for over 60% of total orders.',
        'Identified that Office Supplies dominated order volume (52.3%), while Technology and Furniture presented higher-value growth opportunities.',
        'Enabled targeted outreach by allowing stakeholders to drill down into top-performing states, cities, and individual corporate accounts.'
      ],
      image: '/projects/ecommerce_looker.png',
      tags: ['Looker Studio'],
      githubUrl: 'https://drive.google.com/file/d/1FfRhOZplGNYN4dTclAcZhDYUA-X6wjF0/view?usp=sharing'
    },
    {
      id: 8,
      title: 'Big Data Analytics with Apache Spark',
      category: 'AI & ML',
      featured: false,
      hasVideoDemo: false,
      description: 'Built an end-to-end big data ML pipeline to predict diabetes outcomes using Apache Spark and PySpark MLlib, featuring distributed data ingestion, EDA, and algorithm benchmarking.',
      keyOutcomes: [
        'Benchmarked 5 classification models (Logistic Regression, Random Forest, Naive Bayes, Decision Tree, GBT), with Logistic Regression achieving top accuracy at 80.77%.',
        'Identified Glucose, BMI, and DiabetesPedigreeFunction as the strongest outcome predictors via LR feature coefficients.',
        'Performed distributed Exploratory Data Analysis (EDA) and Pearson correlation analysis using PySpark and Spark MLlib Statistics.',
        'Constructed a complete, distributed machine learning pipeline covering ingestion, EDA, feature engineering, training, and evaluation.'
      ],
      image: '/projects/spark_diabetes.png',
      tags: ['Apache Spark', 'PySpark', 'MLlib', 'Python', 'Big Data'],
      githubUrl: 'https://colab.research.google.com/drive/1YJ_IvbhP3b4Y17PhlFUmGO_pD__GICy2?usp=sharing'
    },
    {
      id: 9,
      title: 'Gender & Age Detection System',
      category: 'AI & ML',
      featured: false,
      hasVideoDemo: false,
      description: 'Built a real-time, lightweight computer vision system that detects faces and predicts demographic attributes (biological sex and age brackets) directly from a live video feed using standard CPU hardware.',
      keyOutcomes: [
        'Designed a 4-stage vision pipeline using a Single Shot MultiBox Detector (SSD) with a ResNet-10 backbone for face detection with >70% confidence.',
        'Implemented dual deep learning Convolutional Neural Networks (CNNs) using Caffe and TensorFlow for simultaneous gender classification and 8-bracket age estimation.',
        'Optimized deep learning models for efficient real-time inference on standard CPU hardware without cloud dependencies.',
        'Achieved 84.1% 1-off accuracy for age bracket prediction on challenging, noise-heavy "in-the-wild" datasets.'
      ],
      image: '/projects/gender_age_cnn.png',
      tags: ['OpenCV', 'Deep Learning', 'Caffe', 'TensorFlow', 'Python'],
      githubUrl: 'https://drive.google.com/file/d/1iVt13EAToU-gt3eTtPC12PWO0VEbXGUd/view?usp=sharing'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const featuredProject = activeFilter === 'All' ? projectsData.find((p) => p.featured) : null;
  const standardProjects = filteredProjects.filter((p) => p.id !== (featuredProject ? featuredProject.id : null));
  const featuredText = featuredProject ? projectsText[language][featuredProject.id] : null;
  const selectedText = selectedProject ? projectsText[language][selectedProject.id] : null;

  return (
    <section id="projects" className="py-24 w-full bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center space-y-4 mb-12"
        >
          <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            {t('projects.heading')}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-md scale-105'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {t(`projects.categoryLabels.${cat}`)}
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Project Display Grid */}
        <div className="space-y-8" ref={gridWrapperRef}>

          {/* Featured Large Hero Card */}
          {featuredProject && (
            <motion.div
              key={`featured-${activeFilter}`}
              variants={scaleIn}
              initial="hidden"
              animate={gridInView ? 'visible' : 'hidden'}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
              <div 
                className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-zinc-900 cursor-pointer"
                onClick={() => setSelectedProject(featuredProject)}
              >
                <img
                  src={featuredProject.image}
                  alt={featuredText.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/90 text-white backdrop-blur-md">
                    {t(`projects.categoryLabels.${featuredProject.category}`)}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black text-zinc-950 dark:text-white tracking-tight leading-snug">
                    {featuredText.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                    {featuredText.description}
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call To Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  {featuredProject.hasVideoDemo && (
                    <a
                      href={featuredProject.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs md:text-sm transition-all shadow-xs"
                    >
                      <Play className="w-4 h-4" fill="currentColor" />
                      <span>{t('projects.projectTutorialVideo')}</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs md:text-sm transition-all cursor-pointer shadow-xs"
                  >
                    {t('projects.projectDetails')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Standard Grid Layout */}
          <motion.div
            key={`grid-${activeFilter}`}
            variants={staggerContainer()}
            initial="hidden"
            animate={gridInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {standardProjects.map((project) => {
              const text = projectsText[language][project.id];
              return (
              <motion.div
                key={project.id}
                variants={staggerItem}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div
                    className="relative h-52 overflow-hidden bg-zinc-900 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={text.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/90 text-white backdrop-blur-md">
                      {t(`projects.categoryLabels.${project.category}`)}
                    </span>

                    {project.hasVideoDemo && (
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-600/90 text-white backdrop-blur-md flex items-center gap-1">
                        <Play className="w-3 h-3" fill="currentColor" />
                        {t('projects.videoDemo')}
                      </span>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-3">
                    <h3
                      className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight leading-snug cursor-pointer hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      onClick={() => setSelectedProject(project)}
                    >
                      {text.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {text.description}
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
                <div className="p-6 pt-0 flex flex-wrap items-center gap-2 justify-between">
                  {project.hasVideoDemo ? (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-all shadow-xs"
                    >
                      <Play className="w-3.5 h-3.5" fill="currentColor" />
                      <span>{t('projects.projectTutorial')}</span>
                    </a>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-bold text-xs transition-all"
                    >
                      <span>{getResourceLabel(project.githubUrl, t)}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center px-3.5 py-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition-all cursor-pointer"
                  >
                    {t('projects.projectDetails')}
                  </button>
                </div>
              </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl my-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              {/* Category Badge & Title */}
              <div className="space-y-2 pr-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-500 text-white">
                  {t(`projects.categoryLabels.${selectedProject.category}`)}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
                  {selectedText.title}
                </h3>
              </div>

              {/* Dashboard Preview Image */}
              <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-md">
                <img
                  src={selectedProject.image}
                  alt={selectedText.title}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                />
              </div>

              {/* Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{t('projects.overview')}</h4>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
                  {selectedText.description}
                </p>
              </div>

              {/* Key Outcomes */}
              {selectedText.keyOutcomes && selectedText.keyOutcomes.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">{t('projects.keyOutcomesLabel')}</h4>
                  <ul className="space-y-2.5">
                    {selectedText.keyOutcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400 mt-2 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack & Action Links Footer */}
              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 mr-2">{t('projects.techStackLabel')}</span>
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.hasVideoDemo && (
                    <a
                      href={selectedProject.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition-all inline-flex items-center gap-1.5 shadow-xs"
                    >
                      <Play className="w-4 h-4" fill="currentColor" />
                      <span>{t('projects.projectTutorialVideo')}</span>
                    </a>
                  )}

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
                  >
                    <span>{getResourceLabel(selectedProject.githubUrl, t)}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}