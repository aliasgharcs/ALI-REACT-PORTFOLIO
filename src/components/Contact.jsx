import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 w-full bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 mx-auto rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl mx-auto font-medium">
            Open to data analytics roles, BI consulting, and freelance data projects. Let's build something impactful together.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left side: copy */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-black text-zinc-950 dark:text-white tracking-tight leading-snug">
                  Let's build something <span className="text-teal-600 dark:text-teal-400">data-driven</span> together.
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                  Whether you're looking for a BI developer, data analyst, or a pipeline engineer — I'm currently available for new opportunities and collaborations.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <a
                  href="mailto:ali.asgharcs147@gmail.com"
                  id="contact-email-link"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 hover:border-teal-500/40 hover:bg-teal-50/30 dark:hover:bg-teal-950/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/60 flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Email</p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">ali.asgharcs147@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/aliiasghar"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-linkedin-link"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 hover:border-blue-500/40 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">LinkedIn</p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">linkedin.com/in/aliiasghar</p>
                  </div>
                </a>

                <a
                  href="https://github.com/aliasgharcs"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-github-link"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 hover:border-zinc-400/60 hover:bg-zinc-100/60 dark:hover:bg-zinc-800 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">GitHub</p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">github.com/aliasgharcs</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side: visual accent card */}
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-xs rounded-3xl bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 p-8 text-white shadow-xl shadow-teal-500/20 space-y-6">
                <div className="space-y-2">
                  <p className="text-teal-100 text-xs font-bold uppercase tracking-widest">Currently available for</p>
                  <h4 className="text-xl font-black leading-snug">Full-time & Freelance Roles</h4>
                </div>

                <div className="space-y-3">
                  {[
                    'Data Analytics',
                    'BI Development',
                    'Pipeline Engineering',
                    'Dashboard Consulting'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 text-teal-200 flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-sm font-semibold text-teal-50">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:ali.asgharcs147@gmail.com"
                  className="block w-full text-center py-3 rounded-xl bg-white text-teal-700 text-sm font-black hover:bg-teal-50 transition-colors"
                >
                  Send Me a Message
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
