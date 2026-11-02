import React from 'react';
import { MapPin, Phone, Mail, GraduationCap, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border pt-16 pb-12">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-border">
          
          {/* Coluna 1: Marca & Apresentação */}
          <div className="md:col-span-5 space-y-4">
            <img
              src="/imagens/logo-horizontal.png"
              alt="DOReMI SOLFÁ Móveis"
              className="h-12 sm:h-16 w-auto object-contain"
            />
            <p className="text-sm text-brand-textMuted max-w-sm leading-relaxed">
              Móveis com harmonia e conforto. Especialistas em camas de solteiro e casal (Seção DOReMI) e estofados retráteis e sofá-camas (Seção SOLFÁ).
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1.5 rounded-full">
              <GraduationCap className="w-4 h-4" />
              <span>UFF / CEDERJ & SENAI — Tecnologia em Sistemas</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-brand-dark">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-brand-textMuted">
              <li>
                <a href="#hero" className="hover:text-brand-highlight transition-colors">
                  Apresentação
                </a>
              </li>
              <li>
                <a href="#camas" className="hover:text-brand-highlight transition-colors">
                  Seção DOReMI (Camas)
                </a>
              </li>
              <li>
                <a href="#sofas" className="hover:text-brand-highlight transition-colors">
                  Seção SOLFÁ (Sofás)
                </a>
              </li>
              <li>
                <a href="#encomendas" className="hover:text-brand-highlight transition-colors">
                  Orçamentos & Encomendas
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato & Localização da AD1/AD2 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-brand-dark">
              Atendimento & Loja
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-brand-textMuted">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>Tv. La Donna e Mobile, 134 — Rio de Janeiro, RJ</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>(21) 91224-4881</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>contato@doremisolfa.com.br</span>
              </p>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-textMuted">
          <div>
            © {new Date().getFullYear()} DOReMI SOLFÁ Móveis. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            Desenvolvido com <Heart className="w-3.5 h-3.5 text-brand-highlight fill-brand-highlight" /> para o portfólio de estágio em desenvolvimento de software.
          </div>
        </div>

      </div>
    </footer>
  );
}
