import React from 'react';
import { ATELIER_DATA } from '../data/products';

export default function AtelierStory() {
  return (
    <section
      id="atelier"
      className="relative py-20 sm:py-28 overflow-hidden bg-brand-surface border-b border-brand-border"
    >
      <div className="relative w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna 1: Narrativa Editorial (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            <div>
              <span className="text-[11px] tracking-[0.32em] uppercase text-brand-textMuted font-medium block mb-3">
                {ATELIER_DATA.badge}
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-brand-dark leading-[1.12]">
                {ATELIER_DATA.title}
              </h2>
              <p className="text-brand-textMuted font-serif text-lg sm:text-xl mt-3 italic font-normal">
                {ATELIER_DATA.subtitle}
              </p>
            </div>

            <p className="text-brand-textMuted text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {ATELIER_DATA.description}
            </p>

            {/* Destaques do Fazer Artesanal com Números Editoriais em Serifa */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left border-t border-brand-border/70">
              {ATELIER_DATA.highlights.map((item, idx) => {
                const numberFormatted = String(idx + 1).padStart(2, '0');

                return (
                  <div
                    key={idx}
                    className="flex flex-col space-y-2 pt-2"
                  >
                    {/* Número Editorial em Serifa */}
                    <span className="font-serif text-2xl sm:text-3xl text-brand-dark/40 font-light select-none">
                      {numberFormatted}
                    </span>

                    {/* Título do Pilar em Caixa Alta Pequena */}
                    <h4 className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-brand-dark">
                      {item.title}
                    </h4>

                    <p className="text-xs text-brand-textMuted leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Coluna 2: Mosaico Fotográfico com Corte Arquitetônico (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Foto 1: Marcenaria */}
            <div className="group relative rounded-[6px] overflow-hidden border border-brand-border shadow-lg aspect-[4/3] bg-brand-muted">
              <img
                src={ATELIER_DATA.images[0].src}
                alt={ATELIER_DATA.images[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] tracking-[0.25em] font-medium uppercase text-white/90">
                  {ATELIER_DATA.images[0].title}
                </span>
                <p className="text-xs text-white/80 mt-1 font-light">
                  {ATELIER_DATA.images[0].caption}
                </p>
              </div>
            </div>

            {/* Foto 2: Costura */}
            <div className="group relative rounded-[6px] overflow-hidden border border-brand-border shadow-lg aspect-[4/3] bg-brand-muted">
              <img
                src={ATELIER_DATA.images[1].src}
                alt={ATELIER_DATA.images[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] tracking-[0.25em] font-medium uppercase text-white/90">
                  {ATELIER_DATA.images[1].title}
                </span>
                <p className="text-xs text-white/80 mt-1 font-light">
                  {ATELIER_DATA.images[1].caption}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
