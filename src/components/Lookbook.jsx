import React from 'react';
import { LOOKBOOK_DATA, getProductById } from '../data/products';
import { Eye, Compass, ArrowRight } from 'lucide-react';

export default function Lookbook({ onSelectProduct }) {
  return (
    <section id="lookbook" className="py-20 sm:py-28 bg-brand-surface border-b border-brand-border">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Lookbook & Inspiração de Ambientes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
            Espaços com Harmonia e Alma
          </h2>

          <p className="text-brand-textMuted text-sm sm:text-base leading-relaxed">
            Veja como as peças da DOReMI SOLFÁ se integram à arquitetura de interiores contemporânea. Ambientes pensados para inspirar composições completas na sua casa.
          </p>
        </div>

        {/* Grid dos 2 Ambientes Panorâmicos (Proporção 16:9) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {LOOKBOOK_DATA.map((item) => {
            const product = getProductById(item.productLink);

            return (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden border border-brand-border shadow-xl bg-brand-bg flex flex-col"
              >
                {/* Imagem Panorâmica Cinemática 16:9 */}
                <div className="relative aspect-video w-full overflow-hidden bg-brand-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Badge de Ambiente */}
                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                    {item.ambient}
                  </span>
                </div>

                {/* Conteúdo Editorial do Ambiente */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-brand-surface">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold text-brand-textMuted bg-brand-muted px-2.5 py-1 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Botão de Conexão com o Móvel (Shop the Look) */}
                  {product && (
                    <div className="pt-6 mt-6 border-t border-brand-border flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-brand-textMuted font-bold block">
                          Móvel em Destaque:
                        </span>
                        <span className="text-sm font-serif font-bold text-brand-dark">
                          {product.nome}
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectProduct(product)}
                        className="bg-brand-primary hover:bg-brand-primary-hover text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ver Peça</span>
                      </button>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
