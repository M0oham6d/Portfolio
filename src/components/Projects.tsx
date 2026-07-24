import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Code, Layers, ShieldCheck, ExternalLink, Github, FileText, Sparkles, 
  Image as ImageIcon, FileCode, CheckCircle2, X, Download, Eye, FileDigit 
} from 'lucide-react';
import { portfolioData, Project, ProjectFile } from '../portfolioData';
import { useToast } from './Toast';

export function Projects() {
  const { showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [activeTab, setActiveTab] = useState<'Documentation' | 'Screenshots' | 'Architecture' | 'Reports'>('Documentation');
  const [pdfViewerFile, setPdfViewerFile] = useState<ProjectFile | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Global search filtering
  const filteredProjects = portfolioData.projects.filter(p => {
    const searchString = `${p.title} ${p.shortDescription} ${p.technologies.join(' ')} ${p.company}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  const featuredProject = portfolioData.projects.find(p => p.featured) || portfolioData.projects[0];
  const regularProjects = filteredProjects.filter(p => p.id !== featuredProject.id);

  const downloadFile = (file: ProjectFile) => {
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Downloading ${file.name}...`, 'info');
  };

  return (
    <section id="projects" className="py-20 bg-slate-50/25 dark:bg-slate-950/20 border-t border-slate-200/20 dark:border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Security <span className="text-blue-600 dark:text-blue-500">Deployments</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400 max-w-md uppercase tracking-wider">
            Hands-on Projects & Forensic Cases
          </p>
        </div>

        {/* Global Search bar */}
        <div className="max-w-md mx-auto relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search projects by title, tech stack, features..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white dark:bg-slate-900/45 pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Featured Project Showcase Panel */}
        {!searchTerm && featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-slate-900/55 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl overflow-hidden mb-16 dark:cyber-glow-blue-strong"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Banner/Graphic representation of the project */}
              <div className="lg:col-span-5 bg-gradient-to-br from-blue-900/25 via-blue-950/20 to-slate-950 p-8 flex flex-col justify-between border-r border-slate-100 dark:border-slate-900 min-h-[300px]">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white font-mono text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                    FEATURED SECURITY AUTOMATION
                  </span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/35 flex items-center justify-center shadow-lg shadow-blue-500/10">
                    <Sparkles className="w-7 h-7 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black font-display text-white">
                      {featuredProject.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-400 font-bold mt-1 uppercase">
                      {featuredProject.company} // {featuredProject.date}
                    </p>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 font-mono">
                  SYS_ID: {featuredProject.id.toUpperCase()}_DEPLOYED_STABLE
                </div>
              </div>

              {/* Text Description */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-medium">
                    {featuredProject.shortDescription}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.technologies.map(tech => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-xs font-mono bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-300 px-2.5 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 items-center border-t border-slate-100 dark:border-slate-800/50 pt-6">
                  <button
                    onClick={() => {
                      setSelectedProject(featuredProject);
                      setActiveTab('Documentation');
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    View Project & Documentation
                  </button>
                  
                  <div className="flex gap-2">
                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                        title="GitHub Code Base"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                        title="Live Demonstration"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.filter(p => searchTerm || p.id !== featuredProject.id).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="p-5 flex flex-col gap-4">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-full text-slate-500 dark:text-slate-400 font-semibold uppercase">
                    {project.company}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{project.date}</span>
                </div>

                <h3 className="font-bold text-slate-800 dark:text-slate-100 font-display text-base leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  {project.shortDescription}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono bg-blue-50/40 dark:bg-blue-900/5 border border-blue-100/30 dark:border-blue-800/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[9px] font-mono text-slate-400 py-0.5">+{project.technologies.length - 4} more</span>
                  )}
                </div>
              </div>

              {/* Action area footer */}
              <div className="border-t border-slate-100 dark:border-slate-800/50 p-4 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveTab('Documentation');
                  }}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                >
                  View Details & Docs
                </button>
                
                <div className="flex gap-1.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg border border-slate-200/50 dark:border-slate-800/50 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg border border-slate-200/50 dark:border-slate-800/50 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Detail Dialog/Modal with Integrated Gallery and Dynamic Files uploader */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              {/* Modal window */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="relative bg-white dark:bg-slate-950 w-full max-w-5xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10"
              >
                {/* Header title */}
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/30">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white font-display">
                      {selectedProject.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 mt-0.5 uppercase">
                      DEPLOYMENT CONSOLE: {selectedProject.id.toUpperCase()} // {selectedProject.company}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800/60 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Scrolled Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 scrollbar-thin">
                  
                  {/* Left Column: Project details specs */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2 text-blue-500">
                        Operational description
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="p-5 rounded-2xl bg-blue-50/30 dark:bg-blue-900/5 border border-blue-100/30 dark:border-blue-900/10">
                      <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200 uppercase tracking-widest font-mono flex items-center gap-2 mb-3 text-blue-600 dark:text-blue-400">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" /> Key Architected Features
                      </h4>
                      <ul className="flex flex-col gap-2 pl-4 list-disc marker:text-blue-500 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        {selectedProject.features.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges and Learned */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col gap-2">
                        <span className="text-[10px] font-bold font-mono text-rose-500 uppercase tracking-wider">Mitigated Challenges</span>
                        <ul className="flex flex-col gap-1.5 text-xs text-slate-500 dark:text-slate-400 list-disc pl-3 leading-relaxed">
                          {selectedProject.challenges.map((c, i) => <li key={i}>{c}</li>)}
                        </ul>
                      </div>
                      <div className="p-4.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col gap-2">
                        <span className="text-[10px] font-bold font-mono text-emerald-500 uppercase tracking-wider">Operational learnings</span>
                        <ul className="flex flex-col gap-1.5 text-xs text-slate-500 dark:text-slate-400 list-disc pl-3 leading-relaxed">
                          {selectedProject.learned.map((l, i) => <li key={i}>{l}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Virtual dynamic files gallery tabs & Live uploader */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-900/20">
                      <h4 className="font-bold text-xs text-slate-800 dark:text-slate-100 uppercase tracking-widest font-mono mb-4 text-blue-500">
                        Project Documentation repository
                      </h4>

                      {/* Folder tabs */}
                      <div className="flex flex-wrap gap-1 mb-4 border-b border-slate-200 dark:border-slate-800/80 pb-2">
                        {(['Documentation', 'Screenshots', 'Architecture', 'Reports'] as const).map(tab => {
                          const files = (selectedProject.defaultFiles || []).filter(f => f.category === tab);
                          return (
                            <button
                              key={tab}
                              onClick={() => setActiveTab(tab)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                                activeTab === tab
                                  ? 'bg-blue-600 text-white'
                                  : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-900/60'
                              }`}
                            >
                              {tab} ({files.length})
                            </button>
                          );
                        })}
                      </div>

                      {/* Display current tab files */}
                      <div className="min-h-[220px] max-h-[350px] overflow-y-auto flex flex-col gap-2.5 pr-1 scrollbar-thin">
                        {(selectedProject.defaultFiles || []).filter(f => f.category === activeTab).length === 0 ? (
                          <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900/10">
                            <FileCode className="w-7 h-7 text-slate-300 dark:text-slate-700 mb-2" />
                            <span className="text-[11px] font-mono leading-relaxed">No files inside this folder.</span>
                          </div>
                        ) : (
                          (selectedProject.defaultFiles || []).filter(f => f.category === activeTab).map((file, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center justify-between p-3 rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white dark:bg-slate-900/60 hover:bg-blue-50/10 transition-colors group"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                {file.type === 'image' ? (
                                  <ImageIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                                ) : (
                                  <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                                )}
                                <span className="text-xs font-mono font-medium truncate text-slate-700 dark:text-slate-300" title={file.name}>
                                  {file.name}
                                </span>
                              </div>

                              <div className="flex gap-1">
                                <button
                                  onClick={() => {
                                    if (file.type === 'image') {
                                      setLightboxImage(file.url);
                                    } else if (file.type === 'pdf') {
                                      setPdfViewerFile(file);
                                    } else {
                                      downloadFile(file);
                                    }
                                  }}
                                  className="p-1 rounded bg-slate-100 hover:bg-blue-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 hover:text-blue-600 transition-all cursor-pointer"
                                  title="Open Preview"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => downloadFile(file)}
                                  className="p-1 rounded bg-slate-100 hover:bg-blue-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 hover:text-blue-600 transition-all cursor-pointer"
                                  title="Download File"
                                >
                                  <Download className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>

                    </div>
                  </div>

                </div>

                {/* Footer Controls */}
                <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 flex justify-between items-center">
                  <div className="flex gap-2">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs font-bold px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850/60 transition-colors"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs font-bold px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850/60 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                  
                  <span className="text-[10px] font-mono text-slate-400">
                    ZERO TRUST SYSTEM AUDIT // {new Date().toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Embedded PDF Viewer Modal */}
        <AnimatePresence>
          {pdfViewerFile && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setPdfViewerFile(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[85vh] z-10"
              >
                {/* PDF Viewer Header */}
                <div className="p-4 border-b border-slate-800 flex justify-between items-center text-slate-200">
                  <span className="font-mono text-xs font-bold flex items-center gap-2">
                    <FileDigit className="w-4 h-4 text-blue-500 animate-pulse" />
                    SEC_PREVIEW: {pdfViewerFile.name}
                  </span>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => downloadFile(pdfViewerFile)}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
                    >
                      <Download className="w-4.5 h-4.5" />
                    </button>
                    <button
                      onClick={() => setPdfViewerFile(null)}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
                    >
                      <X className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>

                {/* PDF Facsimile Frame / Reader view */}
                <div className="flex-1 bg-slate-950 p-6 flex items-center justify-center relative">
                  {pdfViewerFile.url.startsWith('blob:') ? (
                    <iframe
                      src={pdfViewerFile.url}
                      className="w-full h-full rounded-2xl border border-slate-800 bg-white"
                      title={pdfViewerFile.name}
                    />
                  ) : (
                    <div className="bg-slate-900 border border-slate-800 text-slate-300 rounded-2xl p-8 max-w-lg w-full flex flex-col gap-4 text-center shadow-2xl">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto text-blue-500">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 font-display">
                          {pdfViewerFile.name}
                        </h4>
                        <p className="text-[11px] font-mono text-blue-400 mt-1 uppercase">
                          CYBERSECURITY COMPLIANCE REPORT // SECURED MANIFEST
                        </p>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        This document details architectural guidelines, threat hunting models, and configuration backups for {selectedProject?.title || 'this deployment'}. It is encrypted for standard transport security.
                      </p>
                      
                      <button
                        onClick={() => downloadFile(pdfViewerFile)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-2.5 px-4 rounded-xl cursor-pointer self-center"
                      >
                        Download Full Document
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Image Lightbox View */}
        <AnimatePresence>
          {lightboxImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxImage(null)}
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              />
              
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 z-10 p-2.5 rounded-xl bg-slate-900/60 text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={lightboxImage}
                alt="Enlarged screenshot view"
                className="max-w-full max-h-[85vh] rounded-2xl border border-white/10 shadow-2xl z-10 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
