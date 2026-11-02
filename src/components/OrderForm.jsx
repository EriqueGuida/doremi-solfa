import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products, formatCurrency } from '../data/products';
import { CreditCard, CheckCircle2, AlertCircle, ShoppingBag, Plus, Trash2 } from 'lucide-react';

export default function OrderForm({ onOpenRegister }) {
  const { cartItems, addToCart, removeFromCart, clearCart, subtotal, showToast } = useCart();

  // Estados dos formulários da AD2
  const [selectedProductId, setSelectedProductId] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  // Dados do Cartão
  const [cardPart1, setCardPart1] = useState('');
  const [cardPart2, setCardPart2] = useState('');
  const [cardPart3, setCardPart3] = useState('');
  const [cardPart4, setCardPart4] = useState('');
  const [valMes, setValMes] = useState('01');
  const [valAno, setValAno] = useState('2026');
  const [parcelas, setParcelas] = useState('1');
  const [bandeira, setBandeira] = useState('Visa');

  // Estados de Validação e Sucesso
  const [errors, setErrors] = useState({});
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Inclusão manual pelo Select (Compatibilidade direta com a AD2)
  const handleIncluirProduto = () => {
    if (!selectedProductId) {
      setErrors((prev) => ({ ...prev, produto: 'Por favor, selecione um produto antes de incluir.' }));
      return;
    }
    const prod = products.find((p) => p.id === selectedProductId || p.legacyId === selectedProductId);
    if (prod) {
      addToCart(prod, 1);
      setSelectedProductId('');
      setErrors((prev) => ({ ...prev, produto: null }));
    }
  };

  // Submissão do Formulário de Encomenda
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) newErrors.email = 'Informe o seu e-mail de identificação.';
    if (!senha) newErrors.senha = 'Informe a sua senha.';
    if (cartItems.length === 0) newErrors.cart = 'Sua lista de compras está vazia. Inclua pelo menos um produto.';

    const fullCardNumber = `${cardPart1}${cardPart2}${cardPart3}${cardPart4}`;
    if (fullCardNumber.length < 16) {
      newErrors.card = 'Preencha os 16 dígitos do cartão de crédito.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast('Por favor, corrija os campos destacados.', 'error');
      return;
    }

    // Sucesso!
    setErrors({});
    setOrderSuccess(true);
    showToast('Encomenda confirmada com sucesso! Enviamos os detalhes por e-mail.');
  };

  const handleLimpar = () => {
    clearCart();
    setSelectedProductId('');
    setEmail('');
    setSenha('');
    setCardPart1('');
    setCardPart2('');
    setCardPart3('');
    setCardPart4('');
    setParcelas('1');
    setBandeira('Visa');
    setErrors({});
    setOrderSuccess(false);
  };

  const valorParcela = subtotal > 0 ? subtotal / parseInt(parcelas, 10) : 0;

  return (
    <section id="encomendas" className="py-16 sm:py-24 bg-brand-bg border-t border-brand-border">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
            Módulo de Encomendas & Orçamento
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark mt-2">
            Finalize a sua Encomenda
          </h2>
          <p className="text-brand-textMuted text-sm mt-2">
            Selecione produtos adicionais, confira seu orçamento calculado e insira os dados de pagamento.
          </p>
        </div>

        {orderSuccess ? (
          <div className="bg-brand-surface border border-brand-primary rounded-3xl p-8 sm:p-12 text-center shadow-lg animate-fade-in">
            <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif text-brand-dark mb-2">
              Encomenda Registrada com Sucesso!
            </h3>
            <p className="text-brand-textMuted text-sm max-w-md mx-auto mb-6">
              Obrigado, <strong>{email}</strong>! Seu pedido de {formatCurrency(subtotal)} foi parcelado em {parcelas}x de {formatCurrency(valorParcela)} no cartão {bandeira}.
            </p>
            <button
              onClick={handleLimpar}
              className="bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              Fazer Nova Encomenda
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            onReset={handleLimpar}
            className="bg-brand-surface rounded-3xl border border-brand-border shadow-xl p-6 sm:p-10 space-y-8"
          >
            {/* =====================================================
                1. IDENTIFICAÇÃO (Campos do Legado)
                ===================================================== */}
            <div className="border border-brand-border rounded-2xl p-5 sm:p-6 bg-brand-muted/40">
              <legend className="font-serif font-bold text-base text-brand-dark px-2">
                1. Identificação do Cliente
              </legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    E-mail:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  {errors.email && (
                    <span className="text-xs text-brand-highlight font-medium mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Senha:
                  </label>
                  <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  {errors.senha && (
                    <span className="text-xs text-brand-highlight font-medium mt-1 block">
                      {errors.senha}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-3 text-xs text-brand-textMuted">
                Ainda não tem conta na DOReMI SOLFÁ?{' '}
                <button
                  type="button"
                  onClick={onOpenRegister}
                  className="text-brand-highlight font-bold hover:underline"
                >
                  Clique aqui para se cadastrar!
                </button>
              </div>
            </div>

            {/* =====================================================
                2. LISTA DE COMPRAS (Combobox da AD2 + Carrinho Ativo)
                ===================================================== */}
            <div className="border border-brand-border rounded-2xl p-5 sm:p-6 bg-brand-muted/40 space-y-4">
              <legend className="font-serif font-bold text-base text-brand-dark px-2">
                2. Lista de Compras & Orçamento
              </legend>

              {/* Inclusão rápida por Combobox (Compatibilidade com a Questão 4 da AD2) */}
              <div className="flex flex-col sm:flex-row gap-3 items-end">
                <div className="flex-1 w-full">
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Produtos Disponíveis:
                  </label>
                  <select
                    value={selectedProductId}
                    onChange={(e) => setSelectedProductId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  >
                    <option value="">Selecione um produto para incluir...</option>
                    <optgroup label="Seção DOReMI (Camas)">
                      {products
                        .filter((p) => p.categoria === 'doremi')
                        .map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.nome} — {formatCurrency(p.preco)}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="Seção SOLFÁ (Sofás)">
                      {products
                        .filter((p) => p.categoria === 'solfa')
                        .map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.nome} ({p.tipo}) — {formatCurrency(p.preco)}
                          </option>
                        ))}
                    </optgroup>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleIncluirProduto}
                  className="w-full sm:w-auto bg-brand-highlight hover:bg-brand-highlight-hover text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Incluir</span>
                </button>
              </div>

              {errors.produto && (
                <span className="text-xs text-brand-highlight font-medium block">
                  {errors.produto}
                </span>
              )}

              {/* Itens Adicionados (Evolução do <textarea>) */}
              <div className="border border-brand-border rounded-xl bg-white p-4 min-h-[120px]">
                {cartItems.length === 0 ? (
                  <div className="text-center py-6 text-xs text-brand-textMuted">
                    Nenhum produto incluído no orçamento ainda.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {cartItems.map(({ product, quantity }) => (
                      <div
                        key={product.id}
                        className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-brand-border/60 last:border-none"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-brand-primary">{quantity}x</span>
                          <span className="text-brand-dark font-medium">{product.nome}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-brand-highlight">
                            {formatCurrency(product.preco * quantity)}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFromCart(product.id)}
                            className="text-brand-textMuted hover:text-brand-highlight"
                            title="Remover"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {errors.cart && (
                <span className="text-xs text-brand-highlight font-medium block">
                  {errors.cart}
                </span>
              )}

              {/* Campo de Valor Acumulado Total */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-bold text-brand-dark">Valor Total (R$):</span>
                <div className="text-2xl font-bold text-brand-highlight bg-white border border-brand-border px-4 py-1.5 rounded-xl">
                  {formatCurrency(subtotal)}
                </div>
              </div>
            </div>

            {/* =====================================================
                3. DADOS DO CARTÃO (Campos do Legado)
                ===================================================== */}
            <div className="border border-brand-border rounded-2xl p-5 sm:p-6 bg-brand-muted/40 space-y-4">
              <legend className="font-serif font-bold text-base text-brand-dark px-2">
                3. Dados do Cartão de Crédito
              </legend>

              {/* 4 Blocos de Número do Cartão */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Número do Cartão (16 Dígitos):
                </label>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  <input
                    type="text"
                    maxLength={4}
                    value={cardPart1}
                    onChange={(e) => setCardPart1(e.target.value.replace(/\D/g, ''))}
                    placeholder="0000"
                    className="w-full text-center px-2 py-2 rounded-xl border border-brand-border bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  <input
                    type="text"
                    maxLength={4}
                    value={cardPart2}
                    onChange={(e) => setCardPart2(e.target.value.replace(/\D/g, ''))}
                    placeholder="0000"
                    className="w-full text-center px-2 py-2 rounded-xl border border-brand-border bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  <input
                    type="text"
                    maxLength={4}
                    value={cardPart3}
                    onChange={(e) => setCardPart3(e.target.value.replace(/\D/g, ''))}
                    placeholder="0000"
                    className="w-full text-center px-2 py-2 rounded-xl border border-brand-border bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  <input
                    type="text"
                    maxLength={4}
                    value={cardPart4}
                    onChange={(e) => setCardPart4(e.target.value.replace(/\D/g, ''))}
                    placeholder="0000"
                    className="w-full text-center px-2 py-2 rounded-xl border border-brand-border bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>
                {errors.card && (
                  <span className="text-xs text-brand-highlight font-medium mt-1 block">
                    {errors.card}
                  </span>
                )}
              </div>

              {/* Validade e Parcelas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Validade:
                  </label>
                  <div className="flex gap-2 items-center">
                    <select
                      value={valMes}
                      onChange={(e) => setValMes(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-brand-border bg-white text-sm"
                    >
                      {Array.from({ length: 12 }, (_, i) => {
                        const m = String(i + 1).padStart(2, '0');
                        return <option key={m} value={m}>{m}</option>;
                      })}
                    </select>
                    <span className="text-brand-textMuted font-bold">/</span>
                    <select
                      value={valAno}
                      onChange={(e) => setValAno(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-brand-border bg-white text-sm"
                    >
                      {['2026', '2027', '2028', '2029', '2030', '2031'].map((ano) => (
                        <option key={ano} value={ano}>{ano}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Parcelamento:
                  </label>
                  <select
                    value={parcelas}
                    onChange={(e) => setParcelas(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-brand-border bg-white text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}x Sem Juros ({formatCurrency(subtotal > 0 ? subtotal / num : 0)})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Bandeira (Radio buttons do legado) */}
              <div className="pt-2">
                <span className="block text-xs font-semibold text-brand-dark mb-2">
                  Bandeira do Cartão:
                </span>
                <div className="flex gap-6">
                  {['Visa', 'Master', 'Elo'].map((band) => (
                    <label
                      key={band}
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand-dark cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="bandeira"
                        value={band}
                        checked={bandeira === band}
                        onChange={(e) => setBandeira(e.target.value)}
                        className="text-brand-primary focus:ring-brand-primary"
                      />
                      <span>{band}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Botões Finais: Confirmar e Limpar */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-brand-border">
              <button
                type="reset"
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-brand-border bg-brand-surface hover:bg-brand-muted text-brand-dark font-semibold text-sm transition-colors"
              >
                Limpar Formulário
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-sm shadow-md transition-all duration-200"
              >
                Confirmar Encomenda
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
