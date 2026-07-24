import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Printer, Eye, EyeOff, ShieldCheck, Mail, Phone, MapPin, Github, Linkedin, Calendar, GraduationCap } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import { useToast } from './Toast';

export function ResumeSection() {
  const { showToast } = useToast();
  const [showFullFacsimile, setShowFullFacsimile] = useState(false);

  const handlePrint = () => {
    window.print();
    showToast('Initiating printer command...', 'info');
  };

  return (
    <section id="resume" className="py-20 bg-slate-50/25 dark:bg-slate-950/20 border-t border-slate-200/20 dark:border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Curriculum <span className="text-blue-600 dark:text-blue-500">Vitae</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400 max-w-md uppercase tracking-wider">
            Curated Academic & Professional Resume
          </p>
        </div>

        {/* Action Button Bar */}
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 items-center justify-between mb-8 p-4 bg-white dark:bg-slate-900/40 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-md">
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setShowFullFacsimile(!showFullFacsimile)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
            >
              {showFullFacsimile ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showFullFacsimile ? 'Minimize Facsimile' : 'View Full Resume'}</span>
            </button>
            
            <button
              onClick={handlePrint}
              className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print/Export</span>
            </button>

            {portfolioData.personalInfo.resumeUrl && (
              <a
                href={portfolioData.personalInfo.resumeUrl}
                download={`Muhammad_Ayman_Resume.pdf`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-emerald-500/10"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            )}
          </div>
        </div>

        {/* Dynamic Preview area */}
        <div className="max-w-4xl mx-auto">
          {/* Premium Interactive Resume Facsimile */}
          <motion.div
            layout
            className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300"
          >
              {/* Main Header of Resume */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-100 dark:border-slate-800/60 pb-6 mb-8">
                <div>
                  <h3 className="text-3xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
                    {portfolioData.personalInfo.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-500 font-mono mt-1 uppercase tracking-widest">
                    {portfolioData.personalInfo.headline}
                  </p>
                </div>

                <div className="flex flex-col gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 md:text-right">
                  <span className="flex items-center md:justify-end gap-2">
                    <Mail className="w-3.5 h-3.5 text-blue-500" /> {portfolioData.personalInfo.email}
                  </span>
                  <span className="flex items-center md:justify-end gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-500" /> {portfolioData.personalInfo.phone}
                  </span>
                  <span className="flex items-center md:justify-end gap-2">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" /> Cairo, Egypt (Available Remote)
                  </span>
                </div>
              </div>

              {/* Summary Section */}
              <div className="mb-8">
                <h4 className="text-xs font-bold font-mono text-blue-600 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800/60 pb-1.5 mb-3">
                  Summary
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {portfolioData.personalInfo.summary}
                </p>
              </div>

              {/* Experience Section in Brief */}
              <div className="mb-8">
                <h4 className="text-xs font-bold font-mono text-blue-600 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800/60 pb-1.5 mb-4">
                  Professional Experience
                </h4>
                <div className="flex flex-col gap-6">
                  {portfolioData.experiences.slice(0, showFullFacsimile ? undefined : 2).map((exp, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 text-sm font-sans font-bold">
                        <span className="text-slate-800 dark:text-white">
                          {exp.position} <span className="text-blue-500">@ {exp.company}</span>
                        </span>
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                          {exp.duration}
                        </span>
                      </div>
                      
                      {/* Only list 2-3 responsibilities in minimized view, otherwise all */}
                      <ul className="list-disc pl-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 space-y-1">
                        {exp.responsibilities.slice(0, showFullFacsimile ? undefined : 3).map((resp, rIdx) => (
                          <li key={rIdx}>{resp}</li>
                        ))}
                        {!showFullFacsimile && exp.responsibilities.length > 3 && (
                          <li className="text-blue-500 list-none text-xs font-semibold hover:underline cursor-pointer" onClick={() => setShowFullFacsimile(true)}>
                            + {exp.responsibilities.length - 3} more duties (Click View Full)
                          </li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education section */}
              <div className="mb-8">
                <h4 className="text-xs font-bold font-mono text-blue-600 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800/60 pb-1.5 mb-4">
                  Education
                </h4>
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex justify-between items-center font-bold text-slate-800 dark:text-white">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-4.5 h-4.5 text-blue-500" />
                      Bachelor of Engineering in Electronics and Communications Engineering
                    </span>
                    <span className="text-xs font-mono text-slate-400">July 2025</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 pl-6 uppercase">
                    Zagazig University, Egypt // Grade: Very Good
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 pl-6 mt-1.5 leading-relaxed font-sans">
                    <strong>Graduation Project:</strong> "Integrated Smart Vehicle Management System (ISVMS)" - Engineered dynamic sensor-based automated control loops, custom Android control layers, and telemetry web analytics.
                  </div>
                </div>
              </div>

              {/* Custom Certifications Facsimile */}
              {showFullFacsimile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-8"
                >
                  <h4 className="text-xs font-bold font-mono text-blue-600 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800/60 pb-1.5 mb-4">
                    Seeded Certifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    {portfolioData.certifications.map(c => (
                      <div key={c.id} className="p-2 border border-slate-100 dark:border-slate-800 rounded-lg flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/20">
                        <span className="text-slate-700 dark:text-slate-300 font-semibold">{c.name}</span>
                        <span className="text-slate-400 text-[10px] shrink-0">{c.date}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Bottom footer stamp */}
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> COMPLIANT VERIFIED PAYLOAD
                </span>
                <span>SEC_VERIFIED_SHA256</span>
              </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
