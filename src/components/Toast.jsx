import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-brand-primary" />,
    error: <AlertCircle className="w-5 h-5 text-brand-highlight" />,
    info: <Info className="w-5 h-5 text-brand-accent" />,
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-sm w-full">
      <div className="bg-brand-surface border border-brand-border rounded-xl shadow-xl p-4 flex items-center gap-3 backdrop-blur-md bg-opacity-95">
        {icons[toast.type] || icons.success}
        <p className="text-sm font-medium text-brand-dark flex-1">
          {toast.message}
        </p>
      </div>
    </div>
  );
}
