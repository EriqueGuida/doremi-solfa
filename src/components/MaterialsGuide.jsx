import React, { useState } from 'react';
import { MATERIALS_DATA } from '../data/products';
import { Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export default function MaterialsGuide() {
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS_DATA[0]);

  return (
    <section id="materiais" className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-highlight/10 text-brand-highlight text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Guia Tátil de Matérias-Primas</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
            A Nobreza dos Nossos Materiais
          </h2>

          <p className="text-brand-textMuted text-sm sm:text-base leading-relaxed">
            A beleza duradoura dos nossos móveis começa na escolha das fibras e madeiras. Conheça as propriedades sensoriais e técnicas de cada elemento da nossa marcenaria e alfaiataria.
          </p>
        </div>

        {/* Grid dos 4 Materiais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MATERIALS_DATA.map((mat) => {
            const isSelected = selectedMaterial.id === mat.id;

            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat)}
                className={`group text-left rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col bg-brand-surface ${
                  isSelected
                    ? 'border-brand-highlight ring-2 ring-brand-highlight/20 shadow-xl -translate-y-1'
                    : 'border-brand-border hover:border-brand-primary/50 hover:shadow-md'
                }`}
              >
                {/* Imagem Macro da Textura (Proporção 1:1 Quadrada) */}
                <div className="relative aspect-square w-full overflow-hidden bg-brand-muted">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-brand-dark shadow-xs backdrop-blur-xs">
                    {mat.category}
                  </span>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-brand-dark group-hover:text-brand-highlight transition-colors mb-1">
                      {mat.name}
                    </h3>
                    <p className="text-xs text-brand-textMuted leading-relaxed line-clamp-3">
                      {mat.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-brand-border flex items-center justify-between text-xs">
                    <span className="text-brand-primary font-semibold">
                      {isSelected ? '✓ Selecionado' : 'Clique para ver'}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-brand-highlight" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detalhe Sensorial do Material Selecionado */}
        {selectedMaterial && (
          <div className="bg-brand-surface border border-brand-border rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row gap-8 items-center animate-fade-in">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden flex-shrink-0 border border-brand-border shadow-xs">
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 space-y-2 text-center lg:text-left">
              <div className="inline-block text-xs font-bold text-brand-highlight uppercase tracking-wider">
                {selectedMaterial.category} • Experiência Tátil
              </div>
              <h4 className="text-2xl font-serif text-brand-dark">
                {selectedMaterial.name}
              </h4>
              <p className="text-sm text-brand-textMuted leading-relaxed">
                {selectedMaterial.description}
              </p>
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-brand-primary">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Sensação ao toque: {selectedMaterial.tactile}</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
