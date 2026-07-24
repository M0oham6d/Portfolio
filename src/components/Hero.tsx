import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Terminal, MessageSquare, Download, ArrowRight, ShieldCheck, HardDrive, Key } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export function Hero() {
  const [typedTitle, setTypedTitle] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Cybersecurity Engineer',
    'Cloud Security Engineer',
    'Microsoft Security Engineer',
    'Security Automation Engineer',
    'SOC Analyst'
  ];

  const typingSpeed = 100;
  const deletingSpeed = 60;
  const pauseDuration = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullTitle = titles[currentTitleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedTitle(currentFullTitle.substring(0, typedTitle.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedTitle(currentFullTitle.substring(0, typedTitle.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && typedTitle === currentFullTitle) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && typedTitle === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [typedTitle, isDeleting, currentTitleIndex]);

  const handleScrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Hero Text */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold tracking-wider uppercase"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>ACTIVE DUTY: SECURING AZURE & M365</span>
          </motion.div>

          {/* Greeting and Main Titles */}
          <div className="flex flex-col gap-2">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-sm tracking-widest text-slate-500 dark:text-slate-400 uppercase"
            >
              System.Security.Handshake_
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-tight"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-500">{portfolioData.personalInfo.name}</span>
            </motion.h1>

            {/* Cycling typed title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-10 sm:h-12 flex items-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold font-mono tracking-wide text-slate-700 dark:text-slate-300">
                &gt; <span className="text-blue-600 dark:text-blue-400 typing-caret">{typedTitle}</span>
              </h2>
            </motion.div>
          </div>

          {/* Professional Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-sans"
          >
            {portfolioData.personalInfo.summary}
          </motion.p>

          {/* Actions Button Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <button
              onClick={() => handleScrollToSection('#contact')}
              id="hero-contact-btn"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all duration-300 cursor-pointer group"
            >
              <span>Contact Me</span>
              <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollToSection('#resume')}
              id="hero-resume-btn"
              className="flex items-center gap-2 border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer group"
            >
              <span>View Resume</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Animated Cyber Display Graphic */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative w-72 h-72 sm:w-85 sm:h-85 flex items-center justify-center"
          >
            {/* Pulsing glow backdrops */}
            <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute w-5/6 h-5/6 bg-blue-600/10 dark:bg-blue-400/5 rounded-full blur-2xl animate-spin-slow" />

            {/* Circuit Shield Layer (Aesthetic cyber illustration) */}
            <svg
              className="absolute w-full h-full text-blue-600/10 dark:text-blue-500/10 animate-spin-slow"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="5 10" />
              <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="1.5" />
              <path d="M100 10 L100 25" stroke="currentColor" strokeWidth="2" />
              <path d="M100 175 L100 190" stroke="currentColor" strokeWidth="2" />
              <path d="M10 100 L25 100" stroke="currentColor" strokeWidth="2" />
              <path d="M175 100 L190 100" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* Inner Dashboard Core */}
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full border-2 border-dashed border-blue-500/30 bg-slate-950 dark:bg-slate-900 shadow-2xl flex flex-col items-center justify-center p-6 text-center overflow-hidden">
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="z-10 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/35 flex items-center justify-center mb-3">
                  <Terminal className="w-8 h-8 text-blue-500" />
                </div>
                <span className="font-mono text-xs text-blue-500 font-bold tracking-widest uppercase">M365_SEC_ENG</span>
                <span className="text-[10px] text-slate-500 uppercase mt-1">SYS STATUS: PROTECTED</span>
              </motion.div>

              {/* Floating micro items in the orb */}
              <div className="absolute top-8 left-10 text-[10px] font-mono text-emerald-400 flex items-center gap-1 select-none">
                <ShieldCheck className="w-3 h-3 text-emerald-500" /> PASS
              </div>
              <div className="absolute bottom-8 right-10 text-[10px] font-mono text-blue-400/80 flex items-center gap-1 select-none">
                <HardDrive className="w-3 h-3" /> VM_OK
              </div>
              <div className="absolute bottom-16 left-6 text-[9px] font-mono text-slate-500">
                SENTINEL_OK
              </div>
              <div className="absolute top-16 right-6 text-[9px] font-mono text-slate-500">
                SOAR: AUTO
              </div>

              {/* Radial scanner sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent w-full h-full animate-pulse pointer-events-none" />
            </div>

            {/* Orbiting key icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-md pointer-events-auto">
                <Key className="w-4 h-4 text-amber-500" />
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-md pointer-events-auto">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
