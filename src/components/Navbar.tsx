import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
}

const navSections = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ isDarkMode }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for header background, progress bar, and active section intersection
  useEffect(() => {
    const handleScroll = () => {
      // 1. Header transparency
      setScrolled(window.scrollY > 40);

      // 2. Scroll progress ratio
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 3. Highlight current section
      const scrollPosition = window.scrollY + 200; // Offset for header
      
      for (const section of navSections) {
        const element = document.querySelector(section.href);
        if (element instanceof HTMLElement) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(href);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 dark:bg-slate-950/80 bg-white/85 shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-blue-600 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <Shield className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
            <ShieldAlert className="absolute -top-1 -right-1 w-3 h-3 text-emerald-500 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wider font-display text-slate-800 dark:text-slate-100">
              AYMAN<span className="text-blue-500">.SEC</span>
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-widest leading-none">
              ZERO TRUST PORTFOLIO
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/50 dark:bg-slate-900/40 p-1.5 rounded-full border border-slate-200/40 dark:border-slate-800/30 glassmorphism-dark">
          {navSections.map((sect) => {
            const isActive = activeSection === sect.href;
            return (
              <a
                key={sect.href}
                href={sect.href}
                onClick={(e) => handleNavClick(e, sect.href)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                {sect.label}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Burger menu */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition-all duration-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg overflow-hidden"
          >
            <nav className="px-4 pt-3 pb-6 flex flex-col gap-2">
              {navSections.map((sect) => {
                const isActive = activeSection === sect.href;
                return (
                  <a
                    key={sect.href}
                    href={sect.href}
                    onClick={(e) => handleNavClick(e, sect.href)}
                    className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                    }`}
                  >
                    {sect.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
