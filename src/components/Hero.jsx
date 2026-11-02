import React from 'react';
import { Sparkles, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-12 sm:py-16 lg:py-24 bg-brand-bg border-b border-brand-border">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna de Texto Institucional */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-highlight/10 text-brand-highlight text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Coleção Oficial UFF Modernizada em React</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-brand-dark leading-[1.15]">
              Móveis com harmonia e conforto para o seu lar.
            </h1>

            <p className="text-brand-textMuted text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Descubra a tradição e o acabamento nobre das nossas coleções: as <strong>Camas da Seção DOReMI</strong> e os <strong>Sofás & Sofás-Camas da Seção SOLFÁ</strong>. Escolha seus modelos e calcule seu orçamento completo em tempo real.
            </p>

            {/* Informações Institucionais Históricas */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 text-xs sm:text-sm text-brand-textMuted border-t border-brand-border/60">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-primary" />
                Tv. La Donna e Mobile, 134
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-primary" />
                (21) 91224-4881
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-primary" />
                contato@doremisolfa.com.br
              </span>
            </div>

            {/* Botões de Ação */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#camas"
                className="w-full sm:w-auto text-center bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-4 rounded-xl font-semibold text-base shadow-sm hover:shadow-md transition-all duration-200"
              >
                Ver Camas (DOReMI)
              </a>
              <a
                href="#sofas"
                className="w-full sm:w-auto text-center bg-brand-surface hover:bg-brand-muted text-brand-dark border border-brand-border px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
              >
                Ver Sofás (SOLFÁ)
              </a>
            </div>
          </div>

          {/* Coluna Visual com a Logo Vertical em Destaque (Sem tag "Design Oficial") */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-brand-surface p-8 sm:p-12 lg:p-14 rounded-3xl border border-brand-border shadow-xl shadow-black/5 w-full max-w-md lg:max-w-lg text-center flex flex-col items-center justify-center">
              <img
                src="/imagens/logo-vertical.png"
                alt="DOReMI SOLFÁ Móveis"
                className="w-full max-h-[380px] sm:max-h-[460px] object-contain transition-transform hover:scale-102"
              />
              <div className="mt-6 pt-4 border-t border-brand-border/80 w-full text-xs text-brand-textMuted font-medium">
                Seções DOReMI & SOLFÁ • Móveis Residenciais
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
