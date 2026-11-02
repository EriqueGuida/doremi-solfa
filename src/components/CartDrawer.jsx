import React from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../data/products';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-surface border-l border-brand-border shadow-2xl flex flex-col">
          
          {/* Header da Gaveta */}
          <div className="p-6 border-b border-brand-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-brand-primary/10 rounded-xl text-brand-primary">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-brand-dark">
                  Lista de Encomendas
                </h3>
                <span className="text-xs text-brand-textMuted">
                  {cartItems.length} {cartItems.length === 1 ? 'item selecionado' : 'itens selecionados'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-brand-textMuted hover:text-brand-dark rounded-lg hover:bg-brand-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lista de Itens (Substitui o Textarea cumulativo da AD2) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 bg-brand-muted text-brand-textMuted rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 opacity-40" />
                </div>
                <h4 className="font-serif text-lg text-brand-dark mb-1">
                  Sua lista de compras está vazia
                </h4>
                <p className="text-xs text-brand-textMuted max-w-xs mx-auto">
                  Navegue pelas seções DOReMI e SOLFÁ para incluir camas e sofás ao seu orçamento.
                </p>
              </div>
            ) : (
              cartItems.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="bg-brand-bg border border-brand-border rounded-xl p-3.5 flex gap-3.5 items-center"
                >
                  <img
                    src={product.imagem}
                    alt={product.nome}
                    className="w-16 h-16 object-contain bg-white rounded-lg p-1 border border-brand-border flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-sm text-brand-dark truncate">
                      {product.nome}
                    </h5>
                    <div className="text-xs text-brand-highlight font-bold mt-0.5">
                      {formatCurrency(product.preco)}
                    </div>

                    {/* Controles de Quantidade */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="p-1 rounded bg-white border border-brand-border text-brand-dark hover:bg-brand-muted"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-semibold text-brand-dark w-5 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="p-1 rounded bg-white border border-brand-border text-brand-dark hover:bg-brand-muted"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remover Item */}
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="p-2 text-brand-textMuted hover:text-brand-highlight transition-colors"
                    title="Remover produto"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Rodapé com Cálculo Acumulado em Tempo Real */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-brand-border bg-brand-surface space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-brand-textMuted">
                  <span>Subtotal da Encomenda</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-brand-textMuted">
                  <span>Frete Especial (RJ)</span>
                  <span className="text-brand-primary font-semibold">Grátis</span>
                </div>
                <div className="flex justify-between font-bold text-base text-brand-dark pt-2 border-t border-brand-border">
                  <span>Total Estimado</span>
                  <span className="text-xl font-bold text-brand-highlight">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={clearCart}
                  className="w-full bg-brand-muted hover:bg-brand-border text-brand-dark text-xs font-semibold py-3 rounded-xl transition-colors"
                >
                  Limpar Lista
                </button>
                <a
                  href="#encomendas"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-semibold py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors text-center"
                >
                  <span>Ir p/ Pagamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
