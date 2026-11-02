import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border pt-16 sm:pt-20 pb-12">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Grid Principal de 4 Colunas com Estética de Grife */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-brand-border">
          
          {/* Coluna 1: Marca & Essência Autoral (4 colunas no desktop) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="block max-w-sm group select-none">
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-dark font-normal block transition-colors group-hover:text-brand-primary">
                DOREMI <span className="font-light text-brand-dark/70 group-hover:text-brand-primary">SOLFÁ</span>
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.42em] sm:tracking-[0.46em] uppercase text-brand-textMuted font-medium block mt-1.5 pb-2">
                ATELIER DE MOBILIÁRIO AUTORAL
              </span>
            </a>

            <p className="text-sm text-brand-textMuted max-w-sm leading-relaxed">
              Atelier especializado em mobiliário autoral de alto padrão. Unimos a nobreza da madeira maciça brasileira, a precisão da alfaiataria em tecidos puros e o conforto ergonômico atemporal.
            </p>
          </div>

          {/* Coluna 2: Coleções & Acervo */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-brand-dark tracking-wide">
              Coleções & Acervo
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-textMuted">
              <li>
                <a href="#camas" className="hover:text-brand-primary transition-colors block">
                  Camas em Madeira Maciça
                </a>
              </li>
              <li>
                <a href="#camas" className="hover:text-brand-primary transition-colors block">
                  Camas Bicamas & Gaveteiros
                </a>
              </li>
              <li>
                <a href="#sofas" className="hover:text-brand-primary transition-colors block">
                  Sofás Retráteis em Linho
                </a>
              </li>
              <li>
                <a href="#sofas" className="hover:text-brand-primary transition-colors block">
                  Sofás-Camas Articulados
                </a>
              </li>
              <li>
                <a href="#sofas" className="hover:text-brand-primary transition-colors block">
                  Sofás Retrô em Veludo Nobre
                </a>
              </li>
              <li>
                <a href="#catalogo" className="font-semibold text-brand-primary hover:text-brand-primary-hover transition-colors block pt-1">
                  Ver Todas as Peças (8) →
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: A Experiência DOReMI SOLFÁ */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-brand-dark tracking-wide">
              A Experiência DOReMI
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-textMuted">
              <li>
                <a href="#atelier" className="hover:text-brand-primary transition-colors block">
                  O Fazer Artesanal do Atelier
                </a>
              </li>
              <li>
                <a href="#materiais" className="hover:text-brand-primary transition-colors block">
                  Guia Tátil de Matérias-Primas
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-brand-primary transition-colors block">
                  Lookbook: Espaços Inspiradores
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-brand-primary transition-colors block">
                  Entrega Luva Branca & Montagem
                </a>
              </li>
              <li>
                <a href="#encomendas" className="hover:text-brand-primary transition-colors block">
                  Módulo de Encomendas & Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Flagship Store & Concierge VIP */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-brand-dark tracking-wide">
              Boutique Flagship & Concierge
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-brand-textMuted">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>Tv. La Donna e Mobile, 134 — Rio de Janeiro, RJ</span>
              </p>
              
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>(21) 91224-4881 (WhatsApp VIP)</span>
              </p>
              
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>concierge@doremisolfa.com.br</span>
              </p>

              <p className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>Segunda a Sábado, das 09h às 19h (Atendimento Agendado Disponível)</span>
              </p>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior Editorial */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-textMuted">
          <div>
            © {new Date().getFullYear()} DOReMI SOLFÁ Móveis Autorais. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 font-medium">
            <span>Atelier no Rio de Janeiro</span>
            <span>•</span>
            <span>Entrega Especializada em Todo o Brasil</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
