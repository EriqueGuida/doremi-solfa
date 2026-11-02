import React from 'react';
import { ATELIER_DATA } from '../data/products';
import { Hammer, Scissors, Trees, Sparkles } from 'lucide-react';

const highlightIcons = [
  <Hammer className="w-5 h-5 text-brand-primary" />,
  <Scissors className="w-5 h-5 text-brand-highlight" />,
  <Trees className="w-5 h-5 text-brand-primary" />,
];

export default function AtelierStory() {
  return (
    <section
      id="atelier"
      className="relative py-20 sm:py-28 overflow-hidden bg-brand-surface border-b border-brand-border"
    >
      {/* Textura Tátil de Fundo Sutil */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('/imagens/textura-fundo.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna 1: Narrativa Editorial (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{ATELIER_DATA.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark leading-tight">
                {ATELIER_DATA.title}
              </h2>
              <p className="text-brand-highlight font-serif text-lg sm:text-xl mt-2 italic">
                {ATELIER_DATA.subtitle}
              </p>
            </div>

            <p className="text-brand-textMuted text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {ATELIER_DATA.description}
            </p>

            {/* Destaques do Fazer Artesanal */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left">
              {ATELIER_DATA.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-brand-bg/80 border border-brand-border/70 space-y-2"
                >
                  <div className="p-2.5 rounded-xl bg-white w-fit shadow-xs">
                    {highlightIcons[idx] || <Sparkles className="w-5 h-5 text-brand-primary" />}
                  </div>
                  <h4 className="font-bold text-sm text-brand-dark font-sans">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-textMuted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Coluna 2: Mosaico Fotográfico com as Fotos do Atelier (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Foto 1: Marcenaria */}
            <div className="group relative rounded-3xl overflow-hidden border border-brand-border shadow-lg shadow-black/5 aspect-[4/3]">
              <img
                src={ATELIER_DATA.images[0].src}
                alt={ATELIER_DATA.images[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                  {ATELIER_DATA.images[0].title}
                </span>
                <p className="text-xs text-white/90 mt-1">
                  {ATELIER_DATA.images[0].caption}
                </p>
              </div>
            </div>

            {/* Foto 2: Costura */}
            <div className="group relative rounded-3xl overflow-hidden border border-brand-border shadow-lg shadow-black/5 aspect-[4/3]">
              <img
                src={ATELIER_DATA.images[1].src}
                alt={ATELIER_DATA.images[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                  {ATELIER_DATA.images[1].title}
                </span>
                <p className="text-xs text-white/90 mt-1">
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
