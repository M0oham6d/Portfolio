import { motion } from 'motion/react';
import { Shield, BookOpen, Target, Calendar, Award, Cpu, User } from 'lucide-react';
import { portfolioData } from '../portfolioData';

// Custom Counter Hook Mock to animate on mount
function Counter({ value, suffix = '' }: { value: string | number; suffix?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-slate-100/50 dark:bg-slate-900/30 rounded-xl border border-slate-200/50 dark:border-slate-800/40">
      <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-500 font-display">
        {value}
        {suffix}
      </div>
      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-wider uppercase mt-1">
        {suffix === '+' ? 'Engineered' : 'Achieved'}
      </span>
    </div>
  );
}

export function About() {
  const { personalInfo, volunteer, languages } = portfolioData;

  const stats = [
    { label: 'Security Projects', value: '10', suffix: '+' },
    { label: 'Active Certifications', value: '7', suffix: '' },
    { label: 'Simulated Endpoints Secured', value: '1,800', suffix: '+' },
    { label: 'Training Cohorts Taught', value: '5', suffix: '+' },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200/20 dark:border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-500">Me</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400 max-w-md uppercase tracking-wider">
            Background, Career Objectives & Stats
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Bio & Career Focus */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Summary card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 shadow-xl dark:cyber-glow-blue"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-bold text-slate-800 dark:text-white font-display">Professional Introduction</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {personalInfo.aboutText}
              </p>
            </motion.div>

            {/* Specialties & Goals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Current Focus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 shadow-md"
              >
                <div className="flex items-center gap-2.5 mb-3 text-blue-600 dark:text-blue-400">
                  <Cpu className="w-4.5 h-4.5" />
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white uppercase tracking-wider">Current Focus</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {personalInfo.currentFocus}
                </p>
              </motion.div>

              {/* Career Goals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 shadow-md"
              >
                <div className="flex items-center gap-2.5 mb-3 text-emerald-600 dark:text-emerald-400">
                  <Target className="w-4.5 h-4.5" />
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white uppercase tracking-wider">Career Goals</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {personalInfo.careerGoals}
                </p>
              </motion.div>
            </div>

            {/* Spec grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 shadow-md"
            >
              <h4 className="font-bold text-sm text-slate-800 dark:text-white uppercase tracking-wider mb-4 text-blue-500">Core Areas of Specialization</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.specializations.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Block: Personal Profile Details & Animated Counters */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Static Counters */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 shadow-sm hover:border-blue-500/20 transition-colors duration-300">
                  <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-500 font-display">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono text-center tracking-wider uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Profile Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 shadow-md"
            >
              <div className="flex items-center gap-3 mb-5 border-b border-slate-100 dark:border-slate-800/50 pb-3">
                <User className="w-5 h-5 text-blue-500" />
                <h3 className="text-base font-bold text-slate-800 dark:text-white font-display">System profile</h3>
              </div>
              <div className="flex flex-col gap-3.5 text-xs font-mono">
                <div className="flex justify-between items-center py-1 border-b border-slate-100/50 dark:border-slate-900/30">
                  <span className="text-slate-400">DATE_OF_BIRTH:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{personalInfo.dateOfBirth}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100/50 dark:border-slate-900/30">
                  <span className="text-slate-400">NATIONALITY:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{personalInfo.nationality}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100/50 dark:border-slate-900/30">
                  <span className="text-slate-400">MILITARY_STATUS:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{personalInfo.militaryStatus}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">LANGUAGES:</span>
                  <div className="flex gap-2">
                    {languages.map((l, idx) => (
                      <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-[10px] px-2 py-0.5 rounded-full text-slate-600 dark:text-slate-400 font-sans font-medium border border-slate-200/40 dark:border-slate-700/40">
                        {l.language} ({l.proficiency})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Volunteer Activites / Extra info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 shadow-inner"
            >
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-emerald-500" />
                <h4 className="font-bold text-xs text-slate-800 dark:text-white uppercase tracking-wider">Extra-Curricular volunteerism</h4>
              </div>
              <ul className="flex flex-col gap-2">
                {volunteer.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-3 border-l-2 border-emerald-500/50">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
