import { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Toast Portal Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => {
            let Icon = Info;
            let bgColor = 'bg-slate-900 border-slate-800 text-slate-100';
            let iconColor = 'text-blue-400';
            
            if (toast.type === 'success') {
              Icon = CheckCircle2;
              bgColor = 'bg-emerald-950 border-emerald-800 text-emerald-100';
              iconColor = 'text-emerald-400';
            } else if (toast.type === 'error') {
              Icon = AlertTriangle;
              bgColor = 'bg-rose-950 border-rose-800 text-rose-100';
              iconColor = 'text-rose-400';
            }

            return (
              <motion.div
                key={toast.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-xl ${bgColor} glassmorphism-dark`}
              >
                <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconColor}`} />
                <div className="flex-1 text-sm font-medium leading-relaxed">
                  {toast.message}
                </div>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="p-1 rounded-lg hover:bg-white/10 transition-colors text-white/40 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
