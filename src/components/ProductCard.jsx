import React from 'react';
import { formatCurrency } from '../data/products';
import { Eye, Ruler, Sparkles, MessageSquare } from 'lucide-react';

export default function ProductCard({ product, onSelectProduct }) {
  const isDoremi = product.categoria === 'doremi';

  const whatsappConciergeUrl = `https://wa.me/5521912244881?text=Ol%C3%A1!%20Gostaria%20de%20consultoria%20com%20o%20Concierge%20para%20a%20pe%C3%A7a%20${encodeURIComponent(
    product.nome
  )}%20(${encodeURIComponent(formatCurrency(product.preco))}).`;

  return (
    <article className="group bg-brand-surface rounded-[6px] border border-brand-border overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1">
      
      {/* Imagem Editorial Padronizada com Corte Reto (Edge-to-Edge 4:3) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-muted border-b border-brand-border/60">
        <img
          src={product.imagem}
          alt={product.nome}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge da Categoria com Estilo Minimalista (Harmonizado em Tom Escuro Grafite/Verde Musgo) */}
        <span className="absolute top-3 left-3 text-[10px] font-medium uppercase tracking-[0.2em] px-2.5 py-1 rounded-[4px] shadow-sm backdrop-blur-md bg-brand-dark/90 text-white">
          {isDoremi ? 'DOReMI' : 'SOLFÁ'}
        </span>

        {/* Badge de Acabamento / Material */}
        <span className="absolute top-3 right-3 text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-[4px] bg-white/90 text-brand-dark shadow-sm backdrop-blur-md">
          {product.material || product.tecido || product.tipo}
        </span>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6 flex flex-col flex-1 bg-brand-surface justify-between">
        
        <div>
          {/* Título com Altura Mínima Padronizada */}
          <div className="min-h-[3.25rem] flex items-center mb-2">
            <h3 className="font-serif text-xl sm:text-2xl text-brand-dark group-hover:text-brand-primary transition-colors leading-snug font-normal">
              {product.nome}
            </h3>
          </div>

          {/* Especificações Técnicas */}
          <div className="text-xs text-brand-textMuted space-y-2 mb-6 font-normal">
            <p className="flex items-center gap-2">
              <Ruler className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
              <span><strong>Dimensões:</strong> {product.dimensoes}</span>
            </p>
            {product.tecido && (
              <p className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-highlight flex-shrink-0" />
                <span><strong>Tecido:</strong> {product.tecido}</span>
              </p>
            )}
          </div>
        </div>

        {/* Rodapé: Preço de Luxo e Botões Discretos */}
        <div className="pt-4 border-t border-brand-border space-y-4">
          
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-brand-textMuted block font-medium">
              Valor sob Encomenda
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-medium text-brand-dark tracking-tight">
              {formatCurrency(product.preco)}
            </div>
          </div>

          {/* Botões Discretos: Ver Detalhes e Falar com Concierge */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onSelectProduct(product)}
              className="py-2.5 px-3 rounded-full border border-brand-border bg-brand-surface hover:bg-brand-muted/70 text-brand-dark text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              title="Ver especificações e galeria"
            >
              <Eye className="w-3.5 h-3.5 text-brand-textMuted" />
              <span>Detalhes</span>
            </button>

            <a
              href={whatsappConciergeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-full border border-brand-dark/20 hover:border-brand-dark text-brand-dark bg-transparent hover:bg-brand-dark hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all duration-200"
              title="Falar com o Concierge sobre esta peça"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Falar com Concierge</span>
            </a>
          </div>

        </div>

      </div>
    </article>
  );
}
