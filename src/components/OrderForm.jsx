import React, { useState, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { products, formatCurrency } from '../data/products';
import {
  CreditCard,
  CheckCircle2,
  AlertCircle,
  ShoppingBag,
  Plus,
  Trash2,
  MapPin,
  Truck,
  Loader2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function OrderForm({ onOpenRegister }) {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    subtotal,
    shippingCost,
    totalOrder,
    selectedDelivery,
    setSelectedDelivery,
    DELIVERY_OPTIONS,
    shippingAddress,
    setShippingAddress,
    isCepLoading,
    cepError,
    formatCep,
    fetchAddressByCep,
    showToast,
  } = useCart();

  const numeroInputRef = useRef(null);

  // Estados dos formulários do legado
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

  // Handler de alteração do CEP
  const handleCepChange = async (e) => {
    const formatted = formatCep(e.target.value);
    setShippingAddress((prev) => ({ ...prev, cep: formatted }));

    const numbersOnly = formatted.replace(/\D/g, '');
    if (numbersOnly.length === 8) {
      const ok = await fetchAddressByCep(numbersOnly);
      if (ok && numeroInputRef.current) {
        numeroInputRef.current.focus();
      }
    }
  };

  const handleConsultarCepClick = async () => {
    if (!shippingAddress.cep) {
      setErrors((prev) => ({ ...prev, cep: 'Digite um CEP válido para consulta.' }));
      return;
    }
    const ok = await fetchAddressByCep(shippingAddress.cep);
    if (ok && numeroInputRef.current) {
      numeroInputRef.current.focus();
    }
  };

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

    // 1. Identificação
    if (!email) newErrors.email = 'Informe o seu e-mail de identificação.';
    if (!senha) newErrors.senha = 'Informe a sua senha.';

    // 2. Carrinho
    if (cartItems.length === 0) {
      newErrors.cart = 'Sua lista de compras está vazia. Inclua pelo menos um produto.';
    }

    // 3. Endereço e Frete
    const cleanCep = (shippingAddress.cep || '').replace(/\D/g, '');
    if (cleanCep.length !== 8) {
      newErrors.cep = 'Informe um CEP válido com 8 dígitos numéricos.';
    }
    if (!shippingAddress.logradouro) {
      newErrors.logradouro = 'Preencha o logradouro / endereço de entrega.';
    }
    if (!shippingAddress.numero) {
      newErrors.numero = 'Informe o número do imóvel para a equipe de entrega.';
    }
    if (!shippingAddress.bairro) {
      newErrors.bairro = 'Informe o bairro.';
    }
    if (!shippingAddress.localidade) {
      newErrors.localidade = 'Informe a cidade.';
    }

    // 4. Cartão
    const fullCardNumber = `${cardPart1}${cardPart2}${cardPart3}${cardPart4}`;
    if (fullCardNumber.length < 16) {
      newErrors.card = 'Preencha os 16 dígitos do cartão de crédito.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast('Por favor, verifique os campos obrigatórios destacados.', 'error');
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

  const currentOption = DELIVERY_OPTIONS[selectedDelivery] || DELIVERY_OPTIONS.traditional;
  const valorParcela = totalOrder > 0 ? totalOrder / parseInt(parcelas, 10) : 0;

  return (
    <section id="encomendas" className="py-20 sm:py-28 bg-brand-bg border-t border-brand-border">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-3.5 py-1.5 rounded-full inline-block">
            Módulo de Encomendas & Orçamento
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
            Finalize a sua Encomenda
          </h2>
          <p className="text-brand-textMuted text-sm sm:text-base leading-relaxed">
            Consulte o CEP para preenchimento automático do endereço, selecione a modalidade de entrega com montagem e informe os dados de pagamento.
          </p>
        </div>

        {orderSuccess ? (
          <div className="bg-brand-surface border border-brand-primary rounded-3xl p-8 sm:p-14 text-center shadow-2xl animate-fade-in max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif text-brand-dark mb-3">
              Encomenda Confirmada com Sucesso!
            </h3>

            <p className="text-brand-textMuted text-sm sm:text-base leading-relaxed mb-6">
              Obrigado, <strong className="text-brand-dark">{email}</strong>! Seu pedido foi registrado no sistema DOReMI SOLFÁ Móveis e a confirmação foi enviada para o seu e-mail.
            </p>

            {/* Recibo Resumo */}
            <div className="bg-brand-bg border border-brand-border rounded-2xl p-6 text-left max-w-xl mx-auto mb-8 space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between pb-2 border-b border-brand-border">
                <span className="text-brand-textMuted">Endereço de Entrega:</span>
                <span className="font-semibold text-brand-dark text-right">
                  {shippingAddress.logradouro}, {shippingAddress.numero}
                  {shippingAddress.complemento && ` (${shippingAddress.complemento})`} <br />
                  {shippingAddress.bairro} — {shippingAddress.localidade}/{shippingAddress.uf}
                </span>
              </div>

              <div className="flex justify-between pb-2 border-b border-brand-border">
                <span className="text-brand-textMuted">Modalidade de Frete:</span>
                <span className="font-semibold text-brand-dark text-right">
                  {currentOption.name} ({currentOption.price === 0 ? 'Grátis' : formatCurrency(currentOption.price)})
                </span>
              </div>

              <div className="flex justify-between pb-2 border-b border-brand-border">
                <span className="text-brand-textMuted">Forma de Pagamento:</span>
                <span className="font-semibold text-brand-dark">
                  {parcelas}x de {formatCurrency(valorParcela)} no Cartão {bandeira}
                </span>
              </div>

              <div className="flex justify-between text-base font-bold text-brand-dark pt-1">
                <span>Valor Total da Encomenda:</span>
                <span className="text-xl font-bold text-brand-highlight">
                  {formatCurrency(totalOrder)}
                </span>
              </div>
            </div>

            <button
              onClick={handleLimpar}
              className="bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md"
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
            <div className="border border-brand-border rounded-2xl p-5 sm:p-7 bg-brand-muted/40">
              <legend className="font-serif font-bold text-lg text-brand-dark px-1 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-primary text-white text-xs flex items-center justify-center font-sans font-bold">1</span>
                <span>Identificação do Cliente</span>
              </legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div className="border border-brand-border rounded-2xl p-5 sm:p-7 bg-brand-muted/40 space-y-4">
              <legend className="font-serif font-bold text-lg text-brand-dark px-1 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-primary text-white text-xs flex items-center justify-center font-sans font-bold">2</span>
                <span>Lista de Compras & Orçamento</span>
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
              <div className="border border-brand-border rounded-xl bg-white p-4 min-h-[110px]">
                {cartItems.length === 0 ? (
                  <div className="text-center py-6 text-xs text-brand-textMuted">
                    Nenhum produto incluído no orçamento ainda. Adicione através do catálogo ou do seletor acima.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {cartItems.map(({ product, quantity }) => (
                      <div
                        key={product.id}
                        className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-brand-border/60 last:border-none"
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
                            className="text-brand-textMuted hover:text-brand-highlight transition-colors"
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

              {/* Subtotal dos Produtos */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-semibold text-brand-textMuted">Subtotal dos Móveis:</span>
                <span className="text-lg font-bold text-brand-dark">
                  {formatCurrency(subtotal)}
                </span>
              </div>
            </div>

            {/* =====================================================
                3. ENDEREÇO DE ENTREGA & VIA CEP (Milestone 3.4)
                ===================================================== */}
            <div className="border border-brand-border rounded-2xl p-5 sm:p-7 bg-brand-muted/40 space-y-5">
              <legend className="font-serif font-bold text-lg text-brand-dark px-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-primary text-white text-xs flex items-center justify-center font-sans font-bold">3</span>
                  <span>Endereço de Entrega & Montagem</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-brand-primary font-semibold hidden sm:flex">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Entrega com Montagem Inclusa</span>
                </div>
              </legend>

              {/* Linha do CEP com Consulta Automática */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    CEP de Entrega:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      maxLength={9}
                      value={shippingAddress.cep || ''}
                      onChange={handleCepChange}
                      placeholder="00000-000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                    {isCepLoading && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-brand-primary">
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </div>
                    )}
                  </div>
                  {errors.cep && (
                    <span className="text-xs text-brand-highlight font-medium mt-1 block">
                      {errors.cep}
                    </span>
                  )}
                  {cepError && (
                    <span className="text-xs text-brand-highlight font-medium mt-1 block">
                      {cepError}
                    </span>
                  )}
                </div>

                <div className="sm:col-span-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleConsultarCepClick}
                    disabled={isCepLoading}
                    className="bg-brand-surface hover:bg-brand-muted border border-brand-border text-brand-dark px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Consultar ViaCEP</span>
                  </button>

                  <a
                    href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-brand-textMuted hover:text-brand-dark underline"
                  >
                    Não sei meu CEP
                  </a>
                </div>
              </div>

              {/* Campos de Endereço Preenchidos Automaticamente */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Endereço / Logradouro:
                  </label>
                  <input
                    type="text"
                    value={shippingAddress.logradouro || ''}
                    onChange={(e) =>
                      setShippingAddress((prev) => ({ ...prev, logradouro: e.target.value }))
                    }
                    placeholder="Rua, Avenida, Alameda..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  {errors.logradouro && (
                    <span className="text-xs text-brand-highlight font-medium mt-1 block">
                      {errors.logradouro}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Número:
                  </label>
                  <input
                    ref={numeroInputRef}
                    type="text"
                    value={shippingAddress.numero || ''}
                    onChange={(e) =>
                      setShippingAddress((prev) => ({ ...prev, numero: e.target.value }))
                    }
                    placeholder="Ex: 150"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  {errors.numero && (
                    <span className="text-xs text-brand-highlight font-medium mt-1 block">
                      {errors.numero}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Complemento:
                  </label>
                  <input
                    type="text"
                    value={shippingAddress.complemento || ''}
                    onChange={(e) =>
                      setShippingAddress((prev) => ({ ...prev, complemento: e.target.value }))
                    }
                    placeholder="Apto, Bloco (Opcional)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Bairro:
                  </label>
                  <input
                    type="text"
                    value={shippingAddress.bairro || ''}
                    onChange={(e) =>
                      setShippingAddress((prev) => ({ ...prev, bairro: e.target.value }))
                    }
                    placeholder="Bairro"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  {errors.bairro && (
                    <span className="text-xs text-brand-highlight font-medium mt-1 block">
                      {errors.bairro}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Cidade / UF:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      value={shippingAddress.localidade || ''}
                      onChange={(e) =>
                        setShippingAddress((prev) => ({ ...prev, localidade: e.target.value }))
                      }
                      placeholder="Cidade"
                      className="col-span-2 px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                    <input
                      type="text"
                      maxLength={2}
                      value={shippingAddress.uf || ''}
                      onChange={(e) =>
                        setShippingAddress((prev) => ({ ...prev, uf: e.target.value.toUpperCase() }))
                      }
                      placeholder="UF"
                      className="col-span-1 text-center px-2 py-2.5 rounded-xl border border-brand-border bg-white text-sm font-bold uppercase focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                  {errors.localidade && (
                    <span className="text-xs text-brand-highlight font-medium mt-1 block">
                      {errors.localidade}
                    </span>
                  )}
                </div>
              </div>

              {/* Seletor de Opções de Frete de Luxo */}
              <div className="pt-3 border-t border-brand-border/60 space-y-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Selecione a Modalidade de Entrega:
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.values(DELIVERY_OPTIONS).map((opt) => {
                    const isSelected = selectedDelivery === opt.id;

                    return (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedDelivery(opt.id)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-brand-primary bg-white shadow-md'
                            : 'border-brand-border bg-brand-surface hover:border-brand-primary/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-bold text-brand-primary uppercase tracking-wider bg-brand-primary/10 px-2.5 py-0.5 rounded-full">
                              {opt.badge}
                            </span>
                            <span className="font-bold text-sm text-brand-highlight">
                              {opt.price === 0 ? 'Grátis' : formatCurrency(opt.price)}
                            </span>
                          </div>

                          <h4 className="font-serif font-bold text-sm text-brand-dark mb-1">
                            {opt.name}
                          </h4>

                          <p className="text-xs text-brand-textMuted leading-relaxed">
                            {opt.description}
                          </p>
                        </div>

                        <div className="mt-3 pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs">
                          <span className="font-medium text-brand-textMuted">Prazo: {opt.prazo}</span>
                          <span className={`font-bold ${isSelected ? 'text-brand-primary' : 'text-brand-textMuted'}`}>
                            {isSelected ? '✓ Selecionado' : 'Selecionar'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* =====================================================
                4. DADOS DO CARTÃO (Campos do Legado)
                ===================================================== */}
            <div className="border border-brand-border rounded-2xl p-5 sm:p-7 bg-brand-muted/40 space-y-4">
              <legend className="font-serif font-bold text-lg text-brand-dark px-1 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-primary text-white text-xs flex items-center justify-center font-sans font-bold">4</span>
                <span>Dados do Cartão de Crédito</span>
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
                    className="w-full text-center px-2 py-2.5 rounded-xl border border-brand-border bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  <input
                    type="text"
                    maxLength={4}
                    value={cardPart2}
                    onChange={(e) => setCardPart2(e.target.value.replace(/\D/g, ''))}
                    placeholder="0000"
                    className="w-full text-center px-2 py-2.5 rounded-xl border border-brand-border bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  <input
                    type="text"
                    maxLength={4}
                    value={cardPart3}
                    onChange={(e) => setCardPart3(e.target.value.replace(/\D/g, ''))}
                    placeholder="0000"
                    className="w-full text-center px-2 py-2.5 rounded-xl border border-brand-border bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  <input
                    type="text"
                    maxLength={4}
                    value={cardPart4}
                    onChange={(e) => setCardPart4(e.target.value.replace(/\D/g, ''))}
                    placeholder="0000"
                    className="w-full text-center px-2 py-2.5 rounded-xl border border-brand-border bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-primary"
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
                      className="w-full px-3 py-2.5 rounded-xl border border-brand-border bg-white text-sm"
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
                      className="w-full px-3 py-2.5 rounded-xl border border-brand-border bg-white text-sm"
                    >
                      {['2026', '2027', '2028', '2029', '2030', '2031'].map((ano) => (
                        <option key={ano} value={ano}>{ano}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Opções de Pagamento:
                  </label>
                  <select
                    value={parcelas}
                    onChange={(e) => setParcelas(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-brand-border bg-white text-sm font-semibold"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}x de {formatCurrency(totalOrder > 0 ? totalOrder / num : 0)}
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

            {/* =====================================================
                RESUMO FINAL DE VALORES & TOTAL
                ===================================================== */}
            <div className="bg-brand-bg border border-brand-border rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between text-sm text-brand-textMuted">
                <span>Subtotal dos Móveis:</span>
                <span className="font-semibold text-brand-dark">{formatCurrency(subtotal)}</span>
              </div>

              <div className="flex items-center justify-between text-sm text-brand-textMuted">
                <span>Frete & Montagem ({currentOption.name}):</span>
                <span className={`font-semibold ${currentOption.price === 0 ? 'text-brand-primary' : 'text-brand-dark'}`}>
                  {currentOption.price === 0 ? 'Grátis' : formatCurrency(currentOption.price)}
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-brand-border text-base sm:text-lg font-bold text-brand-dark">
                <span>Valor Total da Encomenda:</span>
                <div className="text-2xl sm:text-3xl font-bold text-brand-highlight">
                  {formatCurrency(totalOrder)}
                </div>
              </div>

              <div className="text-right text-xs text-brand-textMuted">
                em {parcelas}x de {formatCurrency(valorParcela)}
              </div>
            </div>

            {/* Botões Finais: Confirmar e Limpar */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-brand-border">
              <button
                type="reset"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-brand-border bg-brand-surface hover:bg-brand-muted text-brand-dark font-semibold text-sm transition-colors"
              >
                Limpar Formulário
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-sm shadow-md transition-all duration-200"
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
