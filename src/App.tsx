import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, ChevronUp, Github, Linkedin, ShieldCheck, Mail, ArrowUp } from 'lucide-react';
import { ToastProvider, useToast } from './components/Toast';
import { CyberBackground } from './components/CyberBackground';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { portfolioData } from './portfolioData';

function AppContent() {
  const isDarkMode = true;
  
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Ensure dark class is always applied to document body / html
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Monitor scroll height to show back-to-top button
  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loader key="terminal-loader" onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div
          key="portfolio-layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen relative text-slate-800 dark:text-slate-100 flex flex-col justify-between"
        >
          {/* Animated Cyber Background Canvas */}
          <CyberBackground isDarkMode={isDarkMode} />

          {/* Sticky Header Navbar */}
          <Navbar isDarkMode={isDarkMode} />

          {/* Core Single Screen / Scrollable View Stack */}
          <main className="flex-1">
            <Hero />
            <About />
            <Experience />
            <Skills />
            
            {/* Custom interactive dashboard features */}
            <Projects />
            <Certifications />
            
            <ResumeSection />
            <Contact />
          </main>

          {/* Footer Component */}
          <footer className="bg-slate-100/40 dark:bg-slate-950/40 border-t border-slate-200/50 dark:border-slate-800/50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Brand Logo Stamp */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-sm font-bold tracking-wider font-display text-slate-800 dark:text-slate-100">
                  AYMAN<span className="text-blue-500">.SEC</span>
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-widest mt-1">
                  SECURE ZERO TRUST PORTFOLIO
                </span>
              </div>

              {/* Quick Jump Links */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
                <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
                <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
                <a href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Certifications</a>
              </div>

              {/* Legal and Social Links */}
              <div className="flex flex-col items-center md:items-end gap-2.5">
                <div className="flex gap-4">
                  <a
                    href={portfolioData.personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={portfolioData.personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-[10px] font-mono text-slate-400">
                  &copy; {new Date().getFullYear()} Muhammad Ayman. All rights reserved under SOC rules.
                </p>
              </div>

            </div>
          </footer>

          {/* Floating Back to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                onClick={handleScrollToTop}
                id="back-to-top-btn"
                aria-label="Back to Top"
                className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all cursor-pointer hover:-translate-y-1"
              >
                <ArrowUp className="w-4.5 h-4.5" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}
