import React from 'react';
import { LOOKBOOK_DATA, getProductById } from '../data/products';
import { Eye, ArrowUpRight } from 'lucide-react';

export default function Lookbook({ onSelectProduct }) {
  return (
    <section id="lookbook" className="py-20 sm:py-28 bg-brand-surface border-b border-brand-border">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Cabeçalho Editorial da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-[10px] tracking-[0.28em] uppercase text-brand-textMuted font-medium block">
            Curadoria de Espaços
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark font-normal">
            Harmonia com a Arquitetura
          </h2>

          <p className="text-brand-textMuted text-xs sm:text-sm leading-relaxed pt-1 max-w-2xl mx-auto">
            Composições autorais pensadas para dialogar com luz natural farta, madeiras nobres e a calma do design contemporâneo brasileiro.
          </p>
        </div>

        {/* Grid dos Ambientes Panorâmicos com Corte Arquitetônico (Radius: 6px) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {LOOKBOOK_DATA.map((item) => {
            const product = getProductById(item.productLink);

            return (
              <article
                key={item.id}
                className="group relative rounded-[6px] overflow-hidden border border-brand-border shadow-sm hover:shadow-xl hover:shadow-black/5 bg-brand-bg flex flex-col transition-all duration-500"
              >
                {/* Imagem Panorâmica Cinemática 16:9 com Corte Reto */}
                <div className="relative aspect-video w-full overflow-hidden bg-brand-muted border-b border-brand-border/60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-103"
                  />
                  
                  {/* Badge de Ambiente com Traço Reto */}
                  <span className="absolute top-4 left-4 bg-brand-dark/85 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1.5 rounded-[4px] shadow-sm">
                    {item.ambient}
                  </span>
                </div>

                {/* Conteúdo Editorial do Ambiente */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-brand-surface space-y-6">
                  
                  <div className="space-y-4">
                    {/* Metadados Arquitetônicos Discretos (Substituindo Hashtags) */}
                    <div className="space-y-1.5 pb-4 border-b border-brand-border/60 text-xs">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-brand-textMuted font-medium flex-shrink-0">
                          Ambiente:
                        </span>
                        <span className="text-xs text-brand-dark font-medium">
                          {item.ambiente}
                        </span>
                      </div>
                      
                      <div className="flex items-baseline gap-2">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-brand-textMuted font-medium flex-shrink-0">
                          Especificações:
                        </span>
                        <span className="text-xs text-brand-textMuted font-normal">
                          {item.especificacoes}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark font-normal">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <span className="text-xs text-brand-textMuted block font-serif italic mt-0.5">
                          {item.subtitle}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Microinteração de Conexão com o Móvel (Shop the Look) */}
                  {product && (
                    <div className="pt-5 border-t border-brand-border flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-textMuted font-medium block">
                          Peça em Foco
                        </span>
                        <span className="text-sm font-serif text-brand-dark font-normal">
                          {product.nome}
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectProduct(product)}
                        className="py-2.5 px-4 rounded-full border border-brand-dark/20 hover:border-brand-dark text-brand-dark bg-transparent hover:bg-brand-dark hover:text-white text-xs font-medium tracking-wider uppercase flex items-center gap-1.5 transition-all duration-200 cursor-pointer group-hover:border-brand-dark/50"
                        title="Ver especificações da peça"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ver Peça</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </button>
                    </div>
                  )}

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
