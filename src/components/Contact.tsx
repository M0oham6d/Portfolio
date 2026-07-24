import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send, Terminal, ShieldAlert } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import { useToast } from './Toast';

export function Contact() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personalInfo.email);
    setCopied(true);
    showToast('Email address copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formState.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please correct validation errors first.', 'error');
      return;
    }

    setIsSubmitting(true);
    showToast('Sending secure payload... Please wait.', 'info');

    // Simulate safe API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Secure message transmitted successfully. Secure handshake completed.', 'success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/20 dark:border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Secure <span className="text-blue-600 dark:text-blue-500">Channel</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400 max-w-md uppercase tracking-wider">
            Initiate Secure Connection
          </p>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Block: Communication parameters */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-lg font-bold font-display text-slate-800 dark:text-white">
              Contact parameters
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans mb-4">
              Feel free to reach out via this secure form or direct coordinates. Whether looking to discuss a SOC automation pipeline, a Microsoft 365 migration deployment, or general threat detection, my channels are open.
            </p>

            <div className="flex flex-col gap-4 font-mono text-xs sm:text-sm">
              {/* Direct coordinates cards */}
              
              {/* Email with copy button */}
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-mono">EMAIL_COORDINATES</span>
                    <span className="text-slate-700 dark:text-slate-300 font-semibold select-all">
                      {portfolioData.personalInfo.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-300 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone if available */}
              <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl">
                <Phone className="w-5 h-5 text-emerald-500" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-mono">PHONE_COORDINATES</span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">
                    {portfolioData.personalInfo.phone}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl">
                <MapPin className="w-5 h-5 text-rose-500" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-mono">LOCATION_STAMP</span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">
                    Cairo, Egypt (Available for remote and international relocation)
                  </span>
                </div>
              </div>
            </div>

            {/* Social links with hover scaling */}
            <div className="flex gap-3 mt-4">
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-105 shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-950 dark:hover:bg-slate-950 hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-105 shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Block: Professional Message Handshake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900/40 border border-slate-200/45 dark:border-slate-800/45 rounded-3xl p-6 sm:p-8 shadow-xl dark:cyber-glow-blue">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-850 pb-3">
                <Terminal className="w-4.5 h-4.5 text-blue-500" />
                <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-200 uppercase">
                  MESSAGE_COMPOSE_MODULE
                </span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans">
                {/* Name field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-600 dark:text-slate-300 font-mono">
                    Sender Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full bg-slate-50 dark:bg-slate-950/50 px-4 py-2.5 rounded-xl border ${
                      errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-800 focus:ring-blue-500'
                    } text-sm focus:outline-none focus:ring-1.5 transition-all text-slate-800 dark:text-slate-100`}
                  />
                  {errors.name && <span className="text-[10px] text-rose-500 font-mono">{errors.name}</span>}
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-600 dark:text-slate-300 font-mono">
                    Sender Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className={`w-full bg-slate-50 dark:bg-slate-950/50 px-4 py-2.5 rounded-xl border ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-800 focus:ring-blue-500'
                    } text-sm focus:outline-none focus:ring-1.5 transition-all text-slate-800 dark:text-slate-100`}
                  />
                  {errors.email && <span className="text-[10px] text-rose-500 font-mono">{errors.email}</span>}
                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-600 dark:text-slate-300 font-mono">
                    Communication Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    placeholder="Subject of message"
                    className={`w-full bg-slate-50 dark:bg-slate-950/50 px-4 py-2.5 rounded-xl border ${
                      errors.subject ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-800 focus:ring-blue-500'
                    } text-sm focus:outline-none focus:ring-1.5 transition-all text-slate-800 dark:text-slate-100`}
                  />
                  {errors.subject && <span className="text-[10px] text-rose-500 font-mono">{errors.subject}</span>}
                </div>

                {/* Message body */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-600 dark:text-slate-300 font-mono">
                    Message payload
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Type your message payload here..."
                    className={`w-full bg-slate-50 dark:bg-slate-950/50 px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-800 focus:ring-blue-500'
                    } text-sm focus:outline-none focus:ring-1.5 transition-all text-slate-800 dark:text-slate-100 resize-none`}
                  />
                  {errors.message && <span className="text-[10px] text-rose-500 font-mono">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500/50 text-white font-semibold text-xs py-3 px-5 rounded-xl flex items-center justify-center gap-2 mt-2 transition-all cursor-pointer shadow-md shadow-blue-500/10"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT SECURE HANDSHAKE'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
