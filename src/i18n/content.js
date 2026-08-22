export const projectsText = {
  en: {
    1: {
      title: 'German EV Charging Infrastructure',
      description: "Analyzed over 71,000 charging points across nearly 5,000 operators to map Germany's electric vehicle charging landscape, identifying market fragmentation, infrastructure gaps, and growth patterns.",
      keyOutcomes: [
        'Collected, cleaned, and standardized three decades of historical charging point data using Python.',
        'Built an interactive Power BI dashboard with an Excel supporting layer to visualize operator market share, charger speed distribution, and geographic coverage.',
        'Optimized DAX measures to efficiently handle 70,000+ rows of data with multiple joins.',
        'Uncovered the market dominance of "Other" operators, reshaping infrastructure planning perspectives for small players.',
      ],
    },
    2: {
      title: 'Pizza Shop Sales Dashboard',
      description: 'Developed a dynamic sales dashboard to transform messy raw order logs into actionable insights, helping business owners understand customer behavior, optimize inventory, and boost profitability.',
      keyOutcomes: [
        'Imported, cleaned, and standardized CSV sales data using SQL and Power BI, rectifying inconsistent date/time formats and missing values.',
        'Created calculated columns and built robust data relationships across order details, pizza types, and categories.',
        'Delivered an intuitive dashboard filtering by time, category, and size to reveal peak hours and best-selling products.',
        'Uncovered seasonality and customer demographic impacts, driving data-informed decisions for promotions and staffing.',
      ],
    },
    3: {
      title: 'Bank Loan Dashboard',
      description: 'Built a comprehensive loan management dashboard to visualize application volume, funded amounts, payment status, and interest rates, enabling the bank to assess risk and optimize loan offerings.',
      keyOutcomes: [
        'Imported scattered CSV loan data into SQL Server for structured querying and connected it to Tableau for visualization.',
        'Standardized date formats and loan statuses, and created calculated fields for total loan amounts, payments, and outstanding balances.',
        'Designed an interactive Tableau dashboard with clear filters for time periods, regions, and loan types.',
        'Identified critical links between loan terms, interest rates, and repayment success to refine credit models and collection efforts.',
      ],
    },
    4: {
      title: 'Road Accident Dashboard',
      description: 'Created a comprehensive accident tracking dashboard visualizing severity, hotspots, and causal trends across time, vehicle types, and weather conditions to aid evidence-based safety planning.',
      keyOutcomes: [
        'Aggregated and cleaned disparate CSV accident reports in Excel, handling missing values through imputation and correcting inconsistent severity labels.',
        'Merged datasets covering accident details, weather conditions, and vehicle types, extracting time-based features for trend analysis.',
        'Built an intuitive dashboard allowing safety planners to drill down into high-risk zones and contributing factors.',
        'Analyzed patterns in over 3,000 fatal accidents to help prioritize infrastructure upgrades and optimize emergency response.',
      ],
    },
    5: {
      title: 'HR Analytics Dashboard',
      description: 'Developed a comprehensive workforce analytics dashboard uncovering the drivers behind employee turnover, empowering HR leaders to transition from reactive hiring to proactive retention strategies, delivered as both a Power BI dashboard and a supporting Excel workbook.',
      keyOutcomes: [
        'Built a Star Schema data model in Power BI using the IBM HR Analytics dataset, centralized around a Fact_Employee table.',
        'Developed complex DAX measures for attrition rate, average age, salary, and tenure.',
        'Designed an interactive dashboard cross-tabulating job roles against satisfaction scores, education, and age distributions.',
        'Identified significant turnover spikes during Year 1 and in lower salary bands, directly shaping onboarding and compensation strategies.',
      ],
    },
    6: {
      title: 'Global EV Policy & Sustainability Dashboard',
      description: 'Engineered a global benchmarking tool evaluating EV adoption readiness and sustainability frameworks across 193 UN Member States by consolidating disparate policy, energy, and socioeconomic data.',
      keyOutcomes: [
        'Audited and harmonized unstructured data from UN Statistics, the IEA, and the World Bank into a unified analytical format.',
        'Categorized nations by "Policy Maturity" and "Market Readiness" based on a scoring framework covering VAT exemptions, import taxes, and ICE phase-out targets.',
        'Correlated energy metrics with carbon goals to measure the environmental ROI of transitioning to electric mobility based on grid carbon intensity.',
        'Quantified socioeconomic drivers like urbanization rates and GDP to assess the feasibility of mass-market EV infrastructure deployment.',
      ],
    },
    7: {
      title: 'E-Commerce Store Analytics',
      description: 'Designed a comprehensive performance dashboard analyzing nearly 10,000 online orders to uncover regional dominance, category trends, and customer segments, driving strategic growth decisions.',
      keyOutcomes: [
        'Connected transaction data to Looker Studio to build a clean, interactive dashboard around geography, product category, and customer segments.',
        'Visualized regional distribution, demonstrating that the West and East regions combined for over 60% of total orders.',
        'Identified that Office Supplies dominated order volume (52.3%), while Technology and Furniture presented higher-value growth opportunities.',
        'Enabled targeted outreach by allowing stakeholders to drill down into top-performing states, cities, and individual corporate accounts.',
      ],
    },
    8: {
      title: 'Big Data Analytics with Apache Spark',
      description: 'Built an end-to-end big data ML pipeline to predict diabetes outcomes using Apache Spark and PySpark MLlib, featuring distributed data ingestion, EDA, and algorithm benchmarking.',
      keyOutcomes: [
        'Benchmarked 5 classification models (Logistic Regression, Random Forest, Naive Bayes, Decision Tree, GBT), with Logistic Regression achieving top accuracy at 80.77%.',
        'Identified Glucose, BMI, and DiabetesPedigreeFunction as the strongest outcome predictors via LR feature coefficients.',
        'Performed distributed Exploratory Data Analysis (EDA) and Pearson correlation analysis using PySpark and Spark MLlib Statistics.',
        'Constructed a complete, distributed machine learning pipeline covering ingestion, EDA, feature engineering, training, and evaluation.',
      ],
    },
    9: {
      title: 'Gender & Age Detection System',
      description: 'Built a real-time, lightweight computer vision system that detects faces and predicts demographic attributes (biological sex and age brackets) directly from a live video feed using standard CPU hardware.',
      keyOutcomes: [
        'Designed a 4-stage vision pipeline using a Single Shot MultiBox Detector (SSD) with a ResNet-10 backbone for face detection with >70% confidence.',
        'Implemented dual deep learning Convolutional Neural Networks (CNNs) using Caffe and TensorFlow for simultaneous gender classification and 8-bracket age estimation.',
        'Optimized deep learning models for efficient real-time inference on standard CPU hardware without cloud dependencies.',
        'Achieved 84.1% 1-off accuracy for age bracket prediction on challenging, noise-heavy "in-the-wild" datasets.',
      ],
    },
  },
  de: {
    1: {
      title: 'Ladeinfrastruktur für Elektrofahrzeuge in Deutschland',
      description: 'Analyse von über 71.000 Ladepunkten bei knapp 5.000 Betreibern zur Kartierung der deutschen Ladeinfrastruktur für Elektrofahrzeuge – mit Fokus auf Marktfragmentierung, Infrastrukturlücken und Wachstumsmuster.',
      keyOutcomes: [
        'Erhebung, Bereinigung und Standardisierung von drei Jahrzehnten historischer Ladepunktdaten mit Python.',
        'Entwicklung eines interaktiven Power-BI-Dashboards mit unterstützender Excel-Ebene zur Visualisierung von Marktanteilen, Ladegeschwindigkeitsverteilung und geografischer Abdeckung.',
        'Optimierung von DAX-Kennzahlen zur effizienten Verarbeitung von über 70.000 Datensätzen mit mehreren Verknüpfungen.',
        'Aufdeckung der Marktdominanz von "sonstigen" Betreibern, wodurch sich die Perspektive der Infrastrukturplanung für kleine Anbieter verschob.',
      ],
    },
    2: {
      title: 'Verkaufsdashboard für eine Pizzeria',
      description: 'Entwicklung eines dynamischen Verkaufsdashboards, das unübersichtliche Rohbestelldaten in verwertbare Erkenntnisse umwandelt und Geschäftsinhabern hilft, Kundenverhalten zu verstehen, den Lagerbestand zu optimieren und die Rentabilität zu steigern.',
      keyOutcomes: [
        'Import, Bereinigung und Standardisierung von CSV-Verkaufsdaten mit SQL und Power BI, einschließlich Korrektur inkonsistenter Datums-/Zeitformate und fehlender Werte.',
        'Erstellung berechneter Spalten und robuster Datenbeziehungen zwischen Bestelldetails, Pizzaarten und Kategorien.',
        'Bereitstellung eines intuitiven Dashboards mit Filtern nach Zeit, Kategorie und Größe zur Ermittlung von Stoßzeiten und Bestsellern.',
        'Aufdeckung von Saisonalitäts- und demografischen Effekten, die datenbasierte Entscheidungen für Aktionen und Personaleinsatz ermöglichten.',
      ],
    },
    3: {
      title: 'Bankkredit-Dashboard',
      description: 'Entwicklung eines umfassenden Kreditmanagement-Dashboards zur Visualisierung von Antragsvolumen, ausgezahlten Beträgen, Zahlungsstatus und Zinssätzen, das der Bank hilft, Risiken zu bewerten und ihr Kreditangebot zu optimieren.',
      keyOutcomes: [
        'Import verstreuter CSV-Kreditdaten in SQL Server für strukturierte Abfragen und Anbindung an Tableau zur Visualisierung.',
        'Standardisierung von Datumsformaten und Kreditstatus sowie Erstellung berechneter Felder für Gesamtkreditsummen, Zahlungen und offene Salden.',
        'Entwicklung eines interaktiven Tableau-Dashboards mit klaren Filtern nach Zeiträumen, Regionen und Kreditarten.',
        'Identifikation kritischer Zusammenhänge zwischen Kreditlaufzeiten, Zinssätzen und Rückzahlungserfolg zur Verfeinerung von Kreditmodellen und Inkassoprozessen.',
      ],
    },
    4: {
      title: 'Verkehrsunfall-Dashboard',
      description: 'Erstellung eines umfassenden Unfallerfassungs-Dashboards zur Visualisierung von Schweregrad, Unfallschwerpunkten und Ursachentrends über Zeit, Fahrzeugtypen und Wetterbedingungen hinweg, um evidenzbasierte Sicherheitsplanung zu unterstützen.',
      keyOutcomes: [
        'Zusammenführung und Bereinigung verstreuter CSV-Unfallberichte in Excel, einschließlich Behandlung fehlender Werte durch Imputation und Korrektur inkonsistenter Schweregrad-Kennzeichnungen.',
        'Zusammenführung von Datensätzen zu Unfalldetails, Wetterbedingungen und Fahrzeugtypen sowie Extraktion zeitbasierter Merkmale für die Trendanalyse.',
        'Entwicklung eines intuitiven Dashboards, mit dem Sicherheitsplaner in Hochrisikozonen und Einflussfaktoren einsteigen können.',
        'Analyse von über 3.000 tödlichen Unfällen zur Priorisierung von Infrastrukturverbesserungen und Optimierung der Notfallreaktion.',
      ],
    },
    5: {
      title: 'HR-Analytics-Dashboard',
      description: 'Entwicklung eines umfassenden Workforce-Analytics-Dashboards zur Aufdeckung der Ursachen für Mitarbeiterfluktuation, das HR-Verantwortlichen den Übergang von reaktiver Personalbeschaffung zu proaktiven Bindungsstrategien ermöglicht – umgesetzt sowohl als Power-BI-Dashboard als auch als begleitende Excel-Arbeitsmappe.',
      keyOutcomes: [
        'Aufbau eines Star-Schema-Datenmodells in Power BI auf Basis des IBM-HR-Analytics-Datensatzes, zentriert um eine Fact_Employee-Tabelle.',
        'Entwicklung komplexer DAX-Kennzahlen für Fluktuationsrate, Durchschnittsalter, Gehalt und Betriebszugehörigkeit.',
        'Entwicklung eines interaktiven Dashboards zur Kreuztabellierung von Jobrollen gegen Zufriedenheitswerte, Ausbildung und Altersverteilung.',
        'Identifikation signifikanter Fluktuationsspitzen im ersten Jahr und in niedrigeren Gehaltsstufen, die direkt Onboarding- und Vergütungsstrategien beeinflussten.',
      ],
    },
    6: {
      title: 'Globales Dashboard für E-Mobilitätspolitik & Nachhaltigkeit',
      description: 'Entwicklung eines globalen Benchmarking-Tools zur Bewertung der E-Mobilitäts-Bereitschaft und Nachhaltigkeitsrahmenwerke in 193 UN-Mitgliedstaaten durch Konsolidierung unterschiedlicher Politik-, Energie- und sozioökonomischer Daten.',
      keyOutcomes: [
        'Prüfung und Harmonisierung unstrukturierter Daten von UN-Statistiken, der IEA und der Weltbank in ein einheitliches Analyseformat.',
        'Kategorisierung von Ländern nach "politischer Reife" und "Marktbereitschaft" auf Basis eines Bewertungsrahmens, der Mehrwertsteuerbefreiungen, Importsteuern und Verbrennerausstiegsziele abdeckt.',
        'Korrelation von Energiekennzahlen mit Klimazielen zur Messung des ökologischen ROI der Umstellung auf Elektromobilität basierend auf der CO2-Intensität des Stromnetzes.',
        'Quantifizierung sozioökonomischer Treiber wie Urbanisierungsraten und BIP zur Bewertung der Machbarkeit einer massenmarkttauglichen E-Mobilitätsinfrastruktur.',
      ],
    },
    7: {
      title: 'E-Commerce-Store-Analyse',
      description: 'Entwicklung eines umfassenden Performance-Dashboards zur Analyse von fast 10.000 Online-Bestellungen, um regionale Dominanz, Kategorietrends und Kundensegmente aufzudecken und strategische Wachstumsentscheidungen voranzutreiben.',
      keyOutcomes: [
        'Anbindung von Transaktionsdaten an Looker Studio zum Aufbau eines übersichtlichen, interaktiven Dashboards rund um Geografie, Produktkategorie und Kundensegmente.',
        'Visualisierung der regionalen Verteilung, die zeigte, dass West- und Ostregion zusammen über 60 % aller Bestellungen ausmachten.',
        'Feststellung, dass Bürobedarf mit 52,3 % das Bestellvolumen dominierte, während Technologie und Möbel höherwertige Wachstumschancen boten.',
        'Ermöglichung gezielter Ansprache durch Drill-down in die leistungsstärksten Bundesstaaten, Städte und einzelnen Unternehmenskonten.',
      ],
    },
    8: {
      title: 'Big-Data-Analyse mit Apache Spark',
      description: 'Aufbau einer End-to-End-Big-Data-ML-Pipeline zur Vorhersage von Diabetes-Ergebnissen mit Apache Spark und PySpark MLlib, einschließlich verteilter Datenaufnahme, explorativer Datenanalyse und Algorithmus-Benchmarking.',
      keyOutcomes: [
        'Benchmarking von 5 Klassifikationsmodellen (logistische Regression, Random Forest, Naive Bayes, Decision Tree, GBT), wobei die logistische Regression mit 80,77 % die höchste Genauigkeit erzielte.',
        'Identifikation von Glukose, BMI und der Diabetes-Stammbaumfunktion als stärkste Prädiktoren anhand der LR-Merkmalskoeffizienten.',
        'Durchführung verteilter explorativer Datenanalyse (EDA) und Pearson-Korrelationsanalyse mit PySpark und Spark MLlib Statistics.',
        'Aufbau einer vollständigen, verteilten Machine-Learning-Pipeline von Datenaufnahme über EDA und Feature Engineering bis hin zu Training und Evaluierung.',
      ],
    },
    9: {
      title: 'System zur Geschlechts- und Altersbestimmung',
      description: 'Entwicklung eines echtzeitfähigen, leichtgewichtigen Computer-Vision-Systems, das Gesichter erkennt und demografische Merkmale (biologisches Geschlecht und Altersgruppe) direkt aus einem Live-Videostream auf Standard-CPU-Hardware vorhersagt.',
      keyOutcomes: [
        'Entwicklung einer 4-stufigen Vision-Pipeline mit einem Single Shot MultiBox Detector (SSD) und ResNet-10-Backbone zur Gesichtserkennung mit über 70 % Konfidenz.',
        'Implementierung zweier tiefer neuronaler Netze (CNNs) mit Caffe und TensorFlow für gleichzeitige Geschlechtsklassifikation und Altersschätzung in 8 Gruppen.',
        'Optimierung der Deep-Learning-Modelle für effiziente Echtzeit-Inferenz auf Standard-CPU-Hardware ohne Cloud-Abhängigkeiten.',
        'Erzielung von 84,1 % "1-off"-Genauigkeit bei der Altersgruppenvorhersage auf anspruchsvollen, verrauschten "In-the-Wild"-Datensätzen.',
      ],
    },
  },
};

export const experienceText = {
  en: {
    coloplast: {
      role: 'Data Analytics (Work Study)',
      bullets: [
        'Build and maintain ETL/ELT pipelines using Python and SQL, ingesting data from REST APIs, CSV files, and CRM sources into Azure Lakehouse Architecture.',
        'Optimize PySpark transformation jobs in Azure Databricks with incremental loading, cutting data refresh times by 50%.',
        'Orchestrate scheduled data pipelines using Apache Airflow DAGs with robust dependency management and automated monitoring for B2B pharmaceutical sales data.',
        'Contribute to CI/CD pipeline validation in Azure DevOps across Dev/QA deployment branches.',
        'Implement rigorous data quality validation, schema verification, and source reconciliation to support Star Schema data models for reliable Power BI reporting.',
        'Partner with senior BP Controlling and Finance leaders to translate business goals into custom Power BI dashboards tracking 15+ KPIs for sales forecasting, month-end closing, and incentive metrics.',
      ],
    },
    'urban-mobility': {
      role: 'Research Assistant',
      bullets: [
        'Designed Power BI dashboards to visualize global mobility data for policy and decision-making.',
        'Developed interactive maps using Leaflet.js, GeoJSON, and Mapbox GL.',
        'Managed data cleaning, taxonomy structuring, and content migration across WordPress, Wix, and Tutor LMS platforms.',
        'Created landing pages for e-mobility topics featuring KPIs and learning modules.',
        'Resolved data integrity and UI issues, improving platform consistency and usability.',
      ],
    },
    devigners: {
      role: 'Data Analyst (Intern)',
      bullets: [
        'Built ETL pipelines using Python, SQL, and Excel to clean and prepare data for reporting.',
        'Conducted data analysis to explore trends and identify key performance indicators.',
        'Performed statistical analysis on KPIs using Python (NumPy, StatsModels) to uncover performance drivers.',
        'Created interactive dashboards in Power BI with Power Query and DAX for custom calculations.',
        'Shared insights through reports and visualizations, enabling faster, informed decisions.',
        'Managed tasks with Jira and tracked code changes using Git in a collaborative team environment.',
      ],
    },
  },
  de: {
    coloplast: {
      role: 'Datenanalyse (Werkstudent)',
      bullets: [
        'Aufbau und Pflege von ETL/ELT-Pipelines mit Python und SQL zur Einbindung von Daten aus REST-APIs, CSV-Dateien und CRM-Quellen in eine Azure-Lakehouse-Architektur.',
        'Optimierung von PySpark-Transformationsjobs in Azure Databricks durch inkrementelles Laden, wodurch die Datenaktualisierungszeit um 50 % reduziert wurde.',
        'Orchestrierung geplanter Datenpipelines mit Apache-Airflow-DAGs, inklusive robustem Abhängigkeitsmanagement und automatisiertem Monitoring für B2B-Pharmavertriebsdaten.',
        'Mitwirkung an der CI/CD-Pipeline-Validierung in Azure DevOps über Dev-/QA-Deployment-Branches hinweg.',
        'Implementierung strenger Datenqualitätsprüfungen, Schemavalidierung und Quellenabgleich zur Unterstützung von Star-Schema-Datenmodellen für zuverlässiges Power-BI-Reporting.',
        'Zusammenarbeit mit leitenden BP-Controlling- und Finance-Verantwortlichen zur Umsetzung von Geschäftszielen in maßgeschneiderte Power-BI-Dashboards mit über 15 KPIs für Vertriebsprognosen, Monatsabschlüsse und Incentive-Kennzahlen.',
      ],
    },
    'urban-mobility': {
      role: 'Wissenschaftliche Hilfskraft',
      bullets: [
        'Entwicklung von Power-BI-Dashboards zur Visualisierung globaler Mobilitätsdaten für Politik und Entscheidungsfindung.',
        'Entwicklung interaktiver Karten mit Leaflet.js, GeoJSON und Mapbox GL.',
        'Verantwortung für Datenbereinigung, Taxonomiestrukturierung und Content-Migration über WordPress, Wix und Tutor LMS hinweg.',
        'Erstellung von Landingpages zu E-Mobility-Themen mit KPIs und Lernmodulen.',
        'Behebung von Datenintegritäts- und UI-Problemen zur Verbesserung von Plattformkonsistenz und Benutzerfreundlichkeit.',
      ],
    },
    devigners: {
      role: 'Datenanalyst (Praktikant)',
      bullets: [
        'Aufbau von ETL-Pipelines mit Python, SQL und Excel zur Datenaufbereitung für das Reporting.',
        'Durchführung von Datenanalysen zur Untersuchung von Trends und Identifikation zentraler Leistungskennzahlen (KPIs).',
        'Statistische Analyse von KPIs mit Python (NumPy, StatsModels) zur Aufdeckung von Leistungstreibern.',
        'Erstellung interaktiver Dashboards in Power BI mit Power Query und DAX für individuelle Berechnungen.',
        'Weitergabe von Erkenntnissen durch Berichte und Visualisierungen zur Beschleunigung fundierter Entscheidungen.',
        'Aufgabenverwaltung mit Jira und Versionskontrolle mit Git in einem kollaborativen Teamumfeld.',
      ],
    },
  },
};

export const educationText = {
  en: {
    'btu-cottbus': { degree: 'M.Sc., Artificial Intelligence', location: 'Cottbus, Germany' },
    'bahria-university': { degree: 'B.Sc., Computer Science', location: 'Karachi, Pakistan' },
  },
  de: {
    'btu-cottbus': { degree: 'M.Sc. Künstliche Intelligenz', location: 'Cottbus, Deutschland' },
    'bahria-university': { degree: 'B.Sc. Informatik', location: 'Karatschi, Pakistan' },
  },
};

export const certificationsText = {
  en: {
    1: { title: 'Data Analytics Essentials', skills: 'Data Analysis, Database, Data Visualization, Data Warehouse' },
    2: { title: 'Excel Essentials for Data Analytics', skills: 'Data Science, Excel, Data Wrangling, Pivot Tables' },
    3: {
      title: 'Certificate Of Appreciation',
      skills: 'Artificial Intelligence, Machine Learning, Semester Project Excellence',
      note: "Certificate for hard work and dedication to the semester project of Fall'2021 for Artificial Intelligence.",
    },
  },
  de: {
    1: { title: 'Grundlagen der Datenanalyse', skills: 'Datenanalyse, Datenbanken, Datenvisualisierung, Data Warehouse' },
    2: { title: 'Excel-Grundlagen für Datenanalyse', skills: 'Data Science, Excel, Datenaufbereitung, Pivot-Tabellen' },
    3: {
      title: 'Anerkennungsurkunde',
      skills: 'Künstliche Intelligenz, Maschinelles Lernen, herausragendes Semesterprojekt',
      note: 'Urkunde für Engagement und harte Arbeit am Semesterprojekt im Fach Künstliche Intelligenz, Herbst 2021.',
    },
  },
};

export const skillsText = {
  en: {},
  de: {
    'core-competencies': ['Datenanalyse & -verarbeitung', 'Datenvisualisierung', 'ETL/ELT-Pipelines', 'Statistische Analyse'],
    languages: ['Englisch (C1)', 'Deutsch (A2)', 'Urdu (Muttersprache)'],
  },
};
