import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Briefcase, MapPin, ChevronDown, ChevronUp, Terminal, ShieldAlert } from 'lucide-react';
import { portfolioData, Experience as ExpType } from '../portfolioData';

export function Experience() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    exp1: true, // Default expand the latest job
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-20 bg-slate-50/30 dark:bg-slate-950/20 border-t border-slate-200/20 dark:border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Professional <span className="text-blue-600 dark:text-blue-500">Timeline</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400 max-w-md uppercase tracking-wider">
            Work Experience & Practical Roles
          </p>
        </div>

        {/* Timeline Path container */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800">
          
          {/* Loop over experiences */}
          {portfolioData.experiences.map((exp: ExpType, idx: number) => {
            const isExpanded = !!expandedIds[exp.id];
            
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Bullet point nodes */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-600 dark:bg-blue-900 border-4 border-white dark:border-slate-950 shadow-md">
                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>

                {/* Main Card */}
                <div className="bg-white dark:bg-slate-900/40 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 p-5 sm:p-6 shadow-xl dark:cyber-glow-blue transition-all">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white font-display">
                        {exp.position}
                      </h3>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </span>
                    </div>

                    {/* Metadata tags */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5 bg-slate-100/60 dark:bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-200/20 dark:border-slate-800/20">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-100/60 dark:bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-200/20 dark:border-slate-800/20">
                        <MapPin className="w-3.5 h-3.5 text-rose-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-xs font-mono bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand / Collapse Action Trigger */}
                  <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50 pt-3">
                    <span className="text-xs font-mono text-slate-400">
                      SYS_LOG: {exp.id.toUpperCase()}_PAYLOAD
                    </span>
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'Show Details'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Collapsible details body */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 flex flex-col gap-4 border-t border-slate-100 dark:border-slate-800/50 mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          
                          {/* Responsibilities list */}
                          <div className="flex flex-col gap-2.5">
                            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs tracking-wider uppercase font-mono flex items-center gap-1.5 text-blue-500">
                              <Terminal className="w-3.5 h-3.5" /> Core Actions
                            </h4>
                            <ul className="flex flex-col gap-2 pl-4 list-disc marker:text-blue-500">
                              {exp.responsibilities.map((resp, rIdx) => (
                                <li key={rIdx} className="leading-relaxed font-sans">
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements (Optional) */}
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-50 dark:border-slate-900/30">
                              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs tracking-wider uppercase font-mono flex items-center gap-1.5 text-emerald-500">
                                <ShieldAlert className="w-3.5 h-3.5" /> High Impact Achievements
                              </h4>
                              <ul className="flex flex-col gap-2 pl-4 list-disc marker:text-emerald-500">
                                {exp.achievements.map((ach, aIdx) => (
                                  <li key={aIdx} className="font-semibold text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                                    {ach}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
