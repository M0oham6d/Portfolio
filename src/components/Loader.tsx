import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Terminal, Cpu, Database, Check } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export function Loader({ onComplete }: LoaderProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const terminalSequence = [
    'Initializing secure cryptographic handshake...',
    'Establishing authenticated session tunnel...',
    'Injecting Microsoft 365 Defender policies...',
    'Synchronizing Azure Sentinel data collection rules...',
    'Scanning active telemetry channels for anomalies...',
    'Threat status: 0 critical alerts | Policy: Strict Zero-Trust',
    'Decrypting portfolio manifest payload...',
    'Decryption successful. Authorized access granted.',
  ];

  useEffect(() => {
    let currentLogIndex = 0;
    
    // Stagger logs output
    const logInterval = setInterval(() => {
      if (currentLogIndex < terminalSequence.length) {
        setLogs((prev) => [...prev, terminalSequence[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 280);

    // Continuous progress bar speed up
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500); // Complete after full loading
          return 100;
        }
        // Speed up at the end
        const increment = prev > 70 ? 8 : Math.random() * 5 + 2;
        return Math.min(100, Math.round(prev + increment));
      });
    }, 80);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-slate-950 text-slate-300 font-mono flex flex-col justify-between p-6 md:p-12 z-50 select-none">
      {/* Header Grid */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-4">
        <div className="flex items-center gap-2.5 text-blue-500">
          <Shield className="w-5 h-5 animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-slate-200">AYMAN.SEC // SYSTEM BOOT</span>
        </div>
        <div className="text-[10px] text-slate-500 uppercase flex gap-4">
          <span className="hidden sm:inline">CORES: ACTIVE [08]</span>
          <span>MEM: OK</span>
          <span>UTC: {new Date().toISOString().substring(11, 19)}</span>
        </div>
      </div>

      {/* Terminal Work Log Area */}
      <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full my-6 font-mono text-xs sm:text-sm">
        <div className="bg-slate-900/40 rounded-xl border border-slate-900 p-5 min-h-[280px] flex flex-col gap-2 shadow-2xl glassmorphism-dark">
          <div className="flex items-center gap-2 border-b border-slate-900/60 pb-2 mb-2 text-slate-400">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold">secure-terminal-session@muhammad-ayman:~$</span>
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col gap-1.5 scrollbar-thin scrollbar-thumb-slate-800 pr-1 max-h-[220px]">
            {logs.map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-start gap-2"
              >
                {idx === logs.length - 1 && idx < terminalSequence.length - 1 ? (
                  <span className="text-blue-500 font-bold select-none">&gt;&gt;</span>
                ) : (
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-500" />
                )}
                <span className={idx === logs.length - 1 ? "text-slate-100 font-medium" : "text-slate-400"}>
                  {log}
                </span>
              </motion.div>
            ))}
            <div className="typing-caret" />
          </div>
        </div>
      </div>

      {/* Progress Footer */}
      <div className="max-w-md mx-auto w-full flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-slate-400">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-500 animate-spin-slow" />
            <span>MOUNTING CORE MODULES...</span>
          </div>
          <span>{progress}%</span>
        </div>
        
        {/* Outer Bar */}
        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-900">
          <motion.div
            className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.7)]"
            style={{ width: `${progress}%` }}
            layout
          />
        </div>
        
        <div className="text-[10px] text-slate-600 text-center uppercase tracking-widest mt-1">
          Secure System Interface v2.5 // Developed under Zero Trust Compliance
        </div>
      </div>
    </div>
  );
}
