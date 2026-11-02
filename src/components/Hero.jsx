import React from 'react';
import { Sparkles, MapPin, Phone, Mail, ArrowRight, ShieldCheck, Truck, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-14 sm:py-20 lg:py-28 bg-brand-bg border-b border-brand-border">
      {/* Detalhe sutil de iluminação de fundo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna de Texto Institucional */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-brand-dark leading-[1.12] tracking-tight">
              Móveis com harmonia e alma para o seu lar.
            </h1>

            <p className="text-brand-textMuted text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A elegância atemporal da marcenaria em madeira maciça e o conforto supremo dos estofados nobres. Conheça as <strong>Camas da Seção DOReMI</strong> e os <strong>Sofás & Sofás-Camas da Seção SOLFÁ</strong>.
            </p>

            {/* Endereço & Contato da Flagship */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 text-xs sm:text-sm text-brand-textMuted border-t border-brand-border/70">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>Tv. La Donna e Mobile, 134 — RJ</span>
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>(21) 91224-4881</span>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>concierge@doremisolfa.com.br</span>
              </span>
            </div>

            {/* Botões de Ação de Alto Impacto */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#catalogo"
                className="w-full sm:w-auto text-center bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg shadow-brand-primary/15 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explorar Coleção Completa</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#atelier"
                className="w-full sm:w-auto text-center bg-brand-surface hover:bg-brand-muted text-brand-dark border border-brand-border px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
              >
                Conhecer o Atelier
              </a>
            </div>

            {/* Selos Rápidos de Confiança */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-brand-textMuted font-medium">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-brand-highlight" />
                <span>Entrega com Montagem Especializada</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-highlight" />
                <span>Garantia Estrutural de 5 Anos</span>
              </span>
            </div>
          </div>

          {/* Coluna Visual: Vitrine Arquitetônica com Tipografia de Ateliê */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md lg:max-w-lg">
              
              {/* Efeito de Sombra Luxuosa */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 via-brand-accent/20 to-brand-highlight/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-90 transition-opacity duration-700" />

              <div className="relative bg-brand-surface p-4 sm:p-5 rounded-3xl border border-brand-border shadow-2xl overflow-hidden flex flex-col">
                
                {/* Imagem Arquitetônica da Peça em Destaque */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-brand-muted">
                  <img
                    src="/imagens/sofa-3lug-retro-2.jpg"
                    alt="Peça Assinada DOReMI SOLFÁ"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <span className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/20">
                    Peça Assinada • Atelier 2026
                  </span>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-light text-white/80 block">
                      Composição em Veludo Nobre & Madeira Maciça
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-normal">
                      Sofá 3 Lugares Retrô
                    </span>
                  </div>
                </div>

                {/* Placa Tipográfica do Ateliê */}
                <div className="pt-5 pb-2 px-3 text-center space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl tracking-[0.28em] uppercase text-brand-dark font-normal">
                    DOREMI <span className="font-light text-brand-dark/70">SOLFÁ</span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] tracking-[0.42em] uppercase text-brand-textMuted font-medium">
                    ALTA MARCENARIA & ESTOFARIA AUTORAL
                  </div>
                </div>

                {/* Rodapé com Especificações */}
                <div className="mt-3 pt-3 border-t border-brand-border/70 flex items-center justify-between text-[11px] text-brand-textMuted px-2">
                  <span>Madeira Maciça</span>
                  <span>•</span>
                  <span>Costura Manual</span>
                  <span>•</span>
                  <span>Design Exclusivo</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
