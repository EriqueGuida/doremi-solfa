import React from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../data/products';
import { Eye, Plus, Ruler, Sparkles } from 'lucide-react';

export default function ProductCard({ product, onSelectProduct }) {
  const { addToCart } = useCart();
  const isDoremi = product.categoria === 'doremi';

  return (
    <article className="group bg-brand-surface rounded-2xl border border-brand-border overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1">
      
      {/* Imagem Editorial Padronizada (Edge-to-Edge em Proporção 4:3 Perfeita) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-muted border-b border-brand-border/60">
        <img
          src={product.imagem}
          alt={product.nome}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge da Categoria */}
        <span
          className={`absolute top-3.5 left-3.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${
            isDoremi
              ? 'bg-brand-primary text-white'
              : 'bg-brand-highlight text-white'
          }`}
        >
          {isDoremi ? 'DOReMI' : 'SOLFÁ'}
        </span>

        {/* Badge de Acabamento / Material */}
        <span className="absolute top-3.5 right-3.5 text-[11px] font-bold bg-brand-accent text-brand-dark px-3 py-1 rounded-full shadow-md">
          {product.material || product.tecido || product.tipo}
        </span>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6 flex flex-col flex-1 bg-brand-surface">
        
        {/* Título com Altura Mínima Padronizada */}
        <div className="min-h-[3.25rem] flex items-center mb-2">
          <h3 className="font-serif text-xl sm:text-2xl text-brand-dark group-hover:text-brand-primary transition-colors leading-snug">
            {product.nome}
          </h3>
        </div>

        {/* Especificações Técnicas */}
        <div className="text-xs text-brand-textMuted space-y-2 mb-6">
          <p className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-brand-primary flex-shrink-0" />
            <span><strong>Dimensões:</strong> {product.dimensoes}</span>
          </p>
          {product.tecido && (
            <p className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-highlight flex-shrink-0" />
              <span><strong>Tecido:</strong> {product.tecido}</span>
            </p>
          )}
        </div>

        {/* Rodapé: Preço e Botões */}
        <div className="mt-auto pt-4 border-t border-brand-border space-y-4">
          
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-brand-highlight">
              {formatCurrency(product.preco)}
            </div>
            <div className="text-xs text-brand-textMuted mt-0.5">
              em até 6x de {formatCurrency(product.preco / 6)} sem juros
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onSelectProduct(product)}
              className="py-2.5 px-3 rounded-xl border border-brand-border bg-brand-surface hover:bg-brand-muted text-brand-dark text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors"
              title="Ver especificações e galeria"
            >
              <Eye className="w-4 h-4 text-brand-primary" />
              <span>Detalhes</span>
            </button>

            <button
              onClick={() => addToCart(product)}
              className="py-2.5 px-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all duration-200 hover:scale-102"
              title="Adicionar à encomenda"
            >
              <Plus className="w-4 h-4" />
              <span>Encomendar</span>
            </button>
          </div>

        </div>

      </div>
    </article>
  );
}
