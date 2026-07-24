import { motion } from 'motion/react';
import { Cloud, ShieldCheck, Cpu, Activity, Network, Terminal, Settings } from 'lucide-react';
import { portfolioData } from '../portfolioData';

// Map categories to appropriate icons
const categoryIcons: Record<string, any> = {
  Cloud: Cloud,
  Security: ShieldCheck,
  Automation: Cpu,
  'SIEM / Monitoring': Activity,
  Networking: Network,
  'Tools & OS': Settings,
};

export function Skills() {
  const categories = portfolioData.skillCategories;

  return (
    <section id="skills" className="py-20 border-t border-slate-200/20 dark:border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Skill <span className="text-blue-600 dark:text-blue-500">Inventory</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400 max-w-md uppercase tracking-wider">
            Technical Proficiency & Tooling
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => {
            const IconComponent = categoryIcons[cat.category] || Terminal;
            
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: catIdx * 0.08 }}
                className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 shadow-lg dark:cyber-glow-blue flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/60 pb-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-blue-600/10 dark:bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 font-display text-base">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-col gap-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-center text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-slate-400 dark:text-slate-500">{skill.proficiency}%</span>
                        </div>
                        
                        {/* Progress Bar Container */}
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden border border-slate-200/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            className="h-full bg-blue-600 dark:bg-blue-500 rounded-full group-hover:bg-blue-500 transition-colors shadow-[0_0_8px_rgba(37,99,235,0.2)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Code Footer Decorator */}
                <div className="text-[9px] text-slate-400/80 font-mono mt-6 flex justify-between border-t border-slate-50 dark:border-slate-900/40 pt-2 select-none">
                  <span>CAT_HASH: #{cat.category.substring(0, 3).toUpperCase()}</span>
                  <span>ZERO_TRUST_VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
