import React, { useState } from 'react';
import { MATERIALS_DATA } from '../data/products';

export default function MaterialsGuide() {
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS_DATA[0]);

  return (
    <section id="materiais" className="py-20 sm:py-28 bg-brand-bg border-b border-brand-border">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] tracking-[0.32em] uppercase text-brand-textMuted font-medium block">
            Guia Tátil de Matérias-Primas
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-brand-dark leading-[1.12]">
            A Nobreza dos Nossos Materiais
          </h2>

          <p className="text-brand-textMuted text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            A beleza duradoura dos nossos móveis começa na seleção rigorosa das fibras e madeiras. Conheça as propriedades sensoriais e técnicas de cada elemento da nossa marcenaria e alfaiataria.
          </p>
        </div>

        {/* Grid dos 4 Materiais com Legenda Minimalista na Base da Foto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {MATERIALS_DATA.map((mat) => {
            const isSelected = selectedMaterial.id === mat.id;

            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat)}
                className={`group text-left rounded-[6px] overflow-hidden border transition-all duration-300 flex flex-col bg-brand-surface focus:outline-none ${
                  isSelected
                    ? 'border-brand-dark shadow-xl -translate-y-1'
                    : 'border-brand-border hover:border-brand-dark/40 hover:shadow-md'
                }`}
              >
                {/* Imagem Macro da Textura (Proporção 1:1 Quadrada com Legenda Minimalista na Base) */}
                <div className="relative aspect-square w-full overflow-hidden bg-brand-muted">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Legenda Minimalista na Base da Foto (Substitui as tags flutuantes) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4">
                    <span className="text-[10px] tracking-[0.22em] uppercase font-light text-white/90">
                      {mat.category}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card Limpo (Sem estrelas e sem texto 'Clique para ver') */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-2">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-brand-dark font-normal transition-colors group-hover:text-brand-primary">
                      {mat.name}
                    </h3>
                    <p className="text-xs text-brand-textMuted leading-relaxed line-clamp-3 mt-1.5 font-normal">
                      {mat.description}
                    </p>
                  </div>

                  {/* Indicador Minimalista de Seleção */}
                  <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-[11px]">
                    <span className="text-brand-textMuted tracking-wider uppercase font-medium">
                      Experiência Sensorial
                    </span>
                    <span className={`font-mono text-xs ${isSelected ? 'text-brand-dark font-semibold' : 'text-brand-textMuted/60'}`}>
                      {isSelected ? '● Ativo' : '○'}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detalhe Sensorial do Material Selecionado */}
        {selectedMaterial && (
          <div className="bg-brand-surface border border-brand-border rounded-[6px] p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row gap-8 items-center animate-fade-in">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-[6px] overflow-hidden flex-shrink-0 border border-brand-border shadow-xs bg-brand-muted">
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 space-y-2 text-center lg:text-left">
              <span className="text-[10px] tracking-[0.25em] font-medium text-brand-textMuted uppercase block">
                {selectedMaterial.category} • Experiência Tátil
              </span>
              <h4 className="text-2xl sm:text-3xl font-serif text-brand-dark font-normal">
                {selectedMaterial.name}
              </h4>
              <p className="text-sm text-brand-textMuted leading-relaxed font-normal">
                {selectedMaterial.description}
              </p>
              <p className="text-xs text-brand-dark font-medium italic pt-1">
                Toque & Propriedade: {selectedMaterial.tactile}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
