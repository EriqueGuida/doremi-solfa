import React from 'react';
import { products, CATEGORIES, formatCurrency } from './data/products';
import { CheckCircle2, Sparkles, Layers, Box } from 'lucide-react';

export default function App() {
  const camasCount = products.filter((p) => p.categoria === 'doremi').length;
  const sofasCount = products.filter((p) => p.categoria === 'solfa').length;

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col">
      {/* Header com a Nova Logo Oficial */}
      <header className="border-b border-brand-border bg-brand-surface sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <img
            src="/imagens/logo-horizontal.png"
            alt="DOReMI SOLFÁ Móveis"
            className="h-10 sm:h-12 object-contain"
          />
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-accent/20 text-brand-dark border border-brand-accent/40">
            <Sparkles className="w-3.5 h-3.5 text-brand-highlight" />
            Milestone 1 Concluída
          </span>
        </div>
      </header>

      {/* Conteúdo Central */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 sm:py-16 w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
          <CheckCircle2 className="w-4 h-4" />
          <span>Design System & Modelagem de Dados Integrados</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-brand-dark mb-4 leading-tight">
          Harmonia e Conforto para o seu Lar
        </h1>

        <p className="text-brand-textMuted max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
          Os tokens oficiais de cores, a tipografia (<span className="text-brand-highlight font-serif font-bold">Marcellus</span> & <span className="font-semibold">Plus Jakarta Sans</span>) e os 8 produtos originais da UFF foram estruturados com sucesso.
        </p>

        {/* Status das Categorias Modeladas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
          <div className="bg-brand-surface p-6 rounded-2xl border border-brand-border shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-lg">
                {CATEGORIES.DOREMI.name}
              </span>
              <span className="text-xs text-brand-textMuted">{camasCount} modelos</span>
            </div>
            <h3 className="text-xl font-serif text-brand-dark mb-1">
              {CATEGORIES.DOREMI.subtitle}
            </h3>
            <p className="text-sm text-brand-textMuted">
              {CATEGORIES.DOREMI.description}
            </p>
          </div>

          <div className="bg-brand-surface p-6 rounded-2xl border border-brand-border shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-highlight bg-brand-highlight/10 px-2.5 py-1 rounded-lg">
                {CATEGORIES.SOLFA.name}
              </span>
              <span className="text-xs text-brand-textMuted">{sofasCount} modelos</span>
            </div>
            <h3 className="text-xl font-serif text-brand-dark mb-1">
              {CATEGORIES.SOLFA.subtitle}
            </h3>
            <p className="text-sm text-brand-textMuted">
              {CATEGORIES.SOLFA.description}
            </p>
          </div>
        </div>

        {/* Card Informativo para a Próxima Milestone */}
        <div className="bg-brand-muted border border-brand-border p-6 rounded-2xl max-w-xl mx-auto flex items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-primary text-white rounded-xl">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-wide">
                Próximo Passo
              </div>
              <div className="text-sm font-semibold text-brand-dark">
                Milestone 2: Reconstrução Funcional (v1.0 React)
              </div>
            </div>
          </div>
          <span className="text-xs text-brand-textMuted hidden sm:inline">Pronto para iniciar</span>
        </div>
      </main>

      {/* Rodapé Simples */}
      <footer className="border-t border-brand-border bg-brand-surface py-6 text-center text-xs text-brand-textMuted">
        DOReMI SOLFÁ Móveis — Projeto Acadêmico UFF / SENAI
      </footer>
    </div>
  );
}
