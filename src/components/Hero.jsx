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

          {/* Coluna Visual: Moldura Editorial com a Logo Vertical */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md lg:max-w-lg">
              
              {/* Efeito de Sombra Luxuosa */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 via-brand-accent/20 to-brand-highlight/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative bg-brand-surface p-8 sm:p-12 lg:p-14 rounded-3xl border border-brand-border shadow-2xl text-center flex flex-col items-center justify-center">
                
                {/* Badge Superior */}
                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-muted text-[11px] font-bold text-brand-textMuted uppercase tracking-wider">
                  <Compass className="w-3 h-3 text-brand-primary" />
                  <span>Atelier DOReMI SOLFÁ</span>
                </div>

                <img
                  src="/imagens/logo-vertical.png"
                  alt="DOReMI SOLFÁ Móveis"
                  className="w-full max-h-[380px] sm:max-h-[460px] object-contain transition-transform duration-500 group-hover:scale-103"
                />

                <div className="mt-6 pt-5 border-t border-brand-border w-full flex items-center justify-between text-xs text-brand-textMuted">
                  <span>Marcenaria Autoral</span>
                  <span className="font-serif font-bold text-brand-dark">Estofaria de Luxo</span>
                  <span>Móveis Exclusivos</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
