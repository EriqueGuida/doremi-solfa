import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../data/products';
import { X, ShoppingBag, Ruler, Check, ShieldCheck, Truck, Sparkles, MessageSquare } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  const { addToCart, setIsCartOpen } = useCart();
  const [activeImage, setActiveImage] = useState(product?.imagem);

  // Sincroniza imagem ativa quando o produto mudar
  useEffect(() => {
    if (product) {
      setActiveImage(product.imagem);
    }
  }, [product]);

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
  const galeria = product.galeria || [product.imagem];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      
      {/* Container do Modal */}
      <div
        className="relative bg-brand-surface w-full max-w-3xl rounded-[8px] border border-brand-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-brand-surface/90 hover:bg-brand-muted text-brand-dark p-2 rounded-full border border-brand-border transition-colors shadow-sm"
          aria-label="Fechar janela do produto"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Header & Galeria Interativa */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Coluna da Imagem e Miniaturas */}
            <div className="md:col-span-7 space-y-3">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-brand-muted border border-brand-border shadow-xs">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-medium uppercase tracking-[0.2em] px-2.5 py-1 rounded-[4px] shadow-sm backdrop-blur-md bg-brand-dark/90 text-white">
                  {isDoremi ? 'DOReMI' : 'SOLFÁ'}
                </span>
                
                <img
                  src={activeImage || product.imagem}
                  alt={product.nome}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>

              {/* Miniaturas Clicáveis da Galeria */}
              {galeria.length > 1 && (
                <div className="flex gap-2.5">
                  {galeria.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(imgSrc)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === imgSrc
                          ? 'border-brand-highlight scale-102 shadow-sm'
                          : 'border-brand-border opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={`Vista ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Coluna de Preço e Ação */}
            <div className="md:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-semibold text-brand-highlight uppercase tracking-wider">
                  {product.tipo} • {product.estilo || `${product.lugares} Lugares`}
                </span>
                
                <h2 className="text-2xl sm:text-3xl font-serif text-brand-dark mt-1">
                  {product.nome}
                </h2>
              </div>

              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-brand-textMuted block font-medium">
                  Valor sob Encomenda
                </span>
                <div className="text-3xl font-serif font-medium text-brand-dark">
                  {formatCurrency(product.preco)}
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href={`https://wa.me/5521912244881?text=Ol%C3%A1!%20Gostaria%20de%20consultoria%20com%20o%20Concierge%20para%20a%20pe%C3%A7a%20${encodeURIComponent(
                    product.nome
                  )}%20(${encodeURIComponent(formatCurrency(product.preco))}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white py-3.5 px-5 rounded-full font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Concierge VIP</span>
                </a>

                <button
                  onClick={() => {
                    addToCart(product);
                    setIsCartOpen(true);
                    onClose();
                  }}
                  className="w-full bg-transparent hover:bg-brand-muted/70 text-brand-dark border border-brand-border py-3 px-5 rounded-full font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-brand-textMuted" />
                  <span>Salvar em Minha Seleção</span>
                </button>
              </div>

              <div className="pt-2 border-t border-brand-border text-xs text-brand-textMuted space-y-1">
                <div className="flex items-center gap-1.5 text-brand-primary font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Produção sob encomenda: 45 dias úteis</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-brand-textMuted" />
                  <span>Entrega Luva Branca especializada com montagem cortesia</span>
                </div>
              </div>
            </div>

          </div>

          {/* Descrição e Especificações Detalhadas */}
          <div className="pt-4 border-t border-brand-border space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                Descrição da Peça
              </h4>
              <p className="text-sm text-brand-textMuted leading-relaxed">
                {product.descricao}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-brand-muted/60 p-4 rounded-xl text-xs">
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-brand-primary" />
                <span><strong>Dimensões:</strong> {product.dimensoes}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-highlight" />
                <span>
                  <strong>{product.tecido ? 'Revestimento:' : 'Estrutura:'}</strong>{' '}
                  {product.tecido || product.material}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                <span><strong>Garantia:</strong> 5 anos contra defeitos estruturais</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-primary" />
                <span><strong>Montagem:</strong> Realizada por equipe própria</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
