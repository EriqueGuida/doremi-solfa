import React, { useState } from 'react';
import { MessageSquare, Sparkles, X } from 'lucide-react';

export default function ConciergeButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl =
    'https://wa.me/5521912244881?text=Ol%C3%A1!%20Gostaria%20de%20uma%20consultoria%20personalizada%20sobre%20os%20m%C3%B3veis%20da%20DOReMI%20SOLF%C3%81.';

  return (
    <aside aria-label="Atendimento Concierge" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip de convite */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-brand-surface border border-brand-border px-4 py-2.5 rounded-2xl shadow-xl text-xs text-brand-dark animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
          <span>Precisa de ajuda com medidas ou tecidos?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-brand-textMuted hover:text-brand-dark ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botão Flutuante Principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center gap-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white px-4 py-3 rounded-full shadow-2xl shadow-brand-primary/30 border border-brand-accent/30 transition-all duration-300 hover:scale-105 active:scale-95"
        title="Falar com o Concierge VIP"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5" />
          {/* Ponto pulsante de disponibilidade imediata */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-accent rounded-full border-2 border-brand-primary animate-pulse" />
        </div>

        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          Concierge VIP
        </span>
      </a>
    </aside>
  );
}
