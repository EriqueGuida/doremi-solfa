import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../data/products';
import { X, ShoppingBag, Ruler, Check, ShieldCheck, Truck } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useCart();

  // Fecha com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const isDoremi = product.categoria === 'doremi';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      
      {/* Container do Modal */}
      <div
        className="relative bg-brand-surface w-full max-w-2xl rounded-3xl border border-brand-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-brand-surface/80 hover:bg-brand-muted text-brand-dark p-2 rounded-full border border-brand-border transition-colors"
          aria-label="Fechar janela do produto"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Header & Imagem */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            
            <div className="relative bg-brand-muted rounded-2xl p-6 flex items-center justify-center min-h-[220px]">
              <span
                className={`absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  isDoremi ? 'bg-brand-primary text-white' : 'bg-brand-highlight text-white'
                }`}
              >
                {isDoremi ? 'Seção DOReMI' : 'Seção SOLFÁ'}
              </span>
              <img
                src={product.imagem}
                alt={product.nome}
                className="max-h-48 max-w-full object-contain"
              />
            </div>

            <div>
              <span className="text-xs font-semibold text-brand-highlight uppercase tracking-wider">
                {product.tipo} • {product.estilo || `${product.lugares} Lugares`}
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-serif text-brand-dark mt-1 mb-3">
                {product.nome}
              </h2>

              <div className="text-2xl sm:text-3xl font-bold text-brand-highlight mb-1">
                {formatCurrency(product.preco)}
              </div>
              
              <div className="text-xs text-brand-textMuted mb-4">
                em até 6x de {formatCurrency(product.preco / 6)} sem juros no cartão
              </div>

              <button
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
                className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white py-3 px-5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-200"
              >
                <ShoppingBag className="w-4 h-4" />
                Adicionar à Encomenda
              </button>
            </div>
          </div>

          {/* Descrição e Especificações Detalhadas */}
          <div className="pt-4 border-t border-brand-border space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                Descrição do Móvel
              </h4>
              <p className="text-sm text-brand-textMuted leading-relaxed">
                {product.descricao}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-brand-muted p-4 rounded-xl text-xs">
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-brand-primary" />
                <span><strong>Dimensões:</strong> {product.dimensoes}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-primary" />
                <span>
                  <strong>{product.tecido ? 'Revestimento:' : 'Estrutura:'}</strong>{' '}
                  {product.tecido || product.material}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                <span><strong>Garantia:</strong> 1 ano contra defeitos</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-primary" />
                <span><strong>Entrega:</strong> Montagem especializada inclusa</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
