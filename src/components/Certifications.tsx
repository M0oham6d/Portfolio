import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, Calendar, ShieldCheck, ExternalLink, Eye, X, Download, 
  FileText, Image as ImageIcon, Search, Check 
} from 'lucide-react';
import { portfolioData, Certification } from '../portfolioData';
import { useToast } from './Toast';

export function Certifications() {
  const { showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  
  // Local storage to support in-browser certificate attachment uploads
  const [certAttachments] = useState<Record<string, { type: 'pdf' | 'image'; url: string; name: string } | null>>(() => {
    const initial: Record<string, any> = {};
    portfolioData.certifications.forEach(c => {
      initial[c.id] = c.fileUrl ? { type: c.fileType, url: c.fileUrl, name: `${c.name.replace(/\s+/g, '_')}_Certificate` } : null;
    });
    return initial;
  });

  // Filter certifications
  const filteredCerts = portfolioData.certifications.filter(c => {
    const searchString = `${c.name} ${c.organization} ${c.skillsGained.join(' ')}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  const downloadCertFile = (certId: string, certName: string) => {
    const attachment = certAttachments[certId];
    if (!attachment) {
      showToast('This certificate file is currently not available.', 'error');
      return;
    }
    const link = document.createElement('a');
    link.href = attachment.url;
    link.download = attachment.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Downloading ${attachment.name}...`, 'info');
  };

  return (
    <section id="certifications" className="py-20 border-t border-slate-200/20 dark:border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Professional <span className="text-blue-600 dark:text-blue-500">Credentials</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400 max-w-md uppercase tracking-wider">
            Verified Certifications & Licenses
          </p>
        </div>

        {/* Global Search */}
        <div className="max-w-md mx-auto relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search certifications by name, skills gained, issuer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white dark:bg-slate-900/45 pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert, idx) => {
            const attachment = certAttachments[cert.id];
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40 rounded-2xl p-5 sm:p-6 shadow-md flex flex-col justify-between hover:border-blue-500/20 transition-all duration-300"
              >
                <div>
                  {/* Badge & Date */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-850 px-2.5 py-1 rounded-lg border border-slate-200/20 dark:border-slate-800/20 text-[10px] font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 font-display text-base leading-tight mb-1.5">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    {cert.organization}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {cert.skillsGained.map(skill => (
                      <span
                        key={skill}
                        className="text-[9px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card controls */}
                <div className="border-t border-slate-100 dark:border-slate-800/50 pt-4">
                  {/* Operational buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (attachment) {
                          setSelectedCert(cert);
                        } else {
                          showToast('This certificate document is currently not available.', 'info');
                        }
                      }}
                      className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" /> View
                    </button>
                    <button
                      onClick={() => downloadCertFile(cert.id, cert.name)}
                      className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 dark:text-slate-300 transition-colors cursor-pointer"
                      title="Download Certificate File"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 dark:text-slate-300 transition-colors"
                        title="Verify Official Credential"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Certification Preview Viewer Drawer/Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-slate-900 border border-slate-800 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[75vh] z-10"
              >
                {/* Header */}
                <div className="p-4 border-b border-slate-800 flex justify-between items-center text-slate-200 bg-slate-950/50">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest">
                      CREDENTIAL SECURITY VERIFICATION
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5 font-mono">
                      {selectedCert.name} // {selectedCert.organization}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* Embedded Viewer Canvas */}
                <div className="flex-1 bg-slate-950 p-6 flex items-center justify-center">
                  {certAttachments[selectedCert.id]?.url.startsWith('blob:') ? (
                    certAttachments[selectedCert.id]?.type === 'image' ? (
                      <img
                        src={certAttachments[selectedCert.id]?.url}
                        alt="Uploaded Certificate"
                        className="max-w-full max-h-full rounded-xl object-contain border border-slate-800"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <iframe
                        src={certAttachments[selectedCert.id]?.url}
                        className="w-full h-full rounded-xl border border-slate-800 bg-white"
                        title={selectedCert.name}
                      />
                    )
                  ) : (
                    // Default seeded mock rendering
                    <div className="bg-slate-900 border border-slate-800 text-slate-300 rounded-2xl p-8 max-w-lg w-full flex flex-col gap-4 text-center shadow-2xl">
                      <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto text-blue-500">
                        <Award className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 font-display">
                          {selectedCert.name}
                        </h4>
                        <p className="text-[11px] font-mono text-emerald-400 mt-1 uppercase">
                          OFFICIALLY ISSUED BY {selectedCert.organization} // {selectedCert.date}
                        </p>
                      </div>
                      
                      <div className="text-xs text-slate-400 leading-relaxed font-mono bg-slate-950 p-4 rounded-xl border border-slate-800/60 flex flex-col gap-1 text-left">
                        <div>&gt; CERTIFICATE_VERIFIED: TRUE</div>
                        <div>&gt; ENCRYPTION: SHA-256</div>
                        <div>&gt; METADATA: SECURE_PAYLOAD</div>
                        <div className="truncate">&gt; SKILLS: {selectedCert.skillsGained.join(', ')}</div>
                      </div>

                      <button
                        onClick={() => downloadCertFile(selectedCert.id, selectedCert.name)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-2.5 px-4 rounded-xl cursor-pointer self-center"
                      >
                        Download Original Certificate File
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
