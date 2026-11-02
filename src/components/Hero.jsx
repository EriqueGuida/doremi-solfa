import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-brand-bg border-b border-brand-border">
      {/* Detalhes sutis de iluminação ambiente */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna 1: Manifesto & Texto Editorial (6 colunas no desktop) */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6 sm:space-y-8">
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-serif text-brand-dark leading-[1.08] tracking-tight">
              Móveis com harmonia e alma para o seu lar.
            </h1>

            <p className="text-brand-textMuted text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A elegância atemporal da marcenaria em madeira maciça encontra o conforto supremo dos estofados nobres. Peças autorais concebidas para transcender gerações.
            </p>

            {/* Micro-Linha Editorial Discreta */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm text-brand-textMuted font-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-highlight flex-shrink-0" />
              <p className="italic tracking-wide">
                Peças numeradas e feitas sob encomenda em nosso Atelier no Rio de Janeiro.
              </p>
            </div>

            {/* CTAs com Leveza e Elegância (Respiro Total Abaixo) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#catalogo"
                className="w-full sm:w-auto text-center bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-4 rounded-full font-medium text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explorar Coleção</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#atelier"
                className="w-full sm:w-auto text-center bg-transparent hover:bg-brand-surface/80 text-brand-dark px-7 py-4 rounded-full font-medium text-sm tracking-wide border border-brand-dark/20 hover:border-brand-dark/50 transition-all duration-200"
              >
                Conhecer o Atelier
              </a>
            </div>

          </div>

          {/* Coluna 2: Visual Arquitetônico Monumental com Corte Reto (6 colunas no desktop) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] xl:aspect-[5/6] w-full max-w-xl max-h-[720px] rounded-[6px] overflow-hidden shadow-2xl bg-brand-muted group">
              
              {/* Fotografia Monumental de Arquitetura */}
              <img
                src="/imagens/hero-rebranding-2.jpg"
                alt="Living de Arquitetura Contemporânea com o Sofá Retrô DOReMI SOLFÁ"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-103"
              />

              {/* Vinheta suave inferior para legibilidade da legenda */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

              {/* Legenda Editorial Fina no Rodapé da Imagem */}
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase font-light text-white/80 block">
                    Sala de Estar Integrada
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-normal text-white">
                    Sofá 3 Lugares Retrô em Veludo Nobre
                  </span>
                </div>
                
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/70 hidden sm:block">
                  01 / 08
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
