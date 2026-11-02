import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../data/products';
import {
  X,
  Plus,
  Minus,
  Check,
  Clock,
  MapPin,
  Loader2,
  ArrowRight,
  MessageSquare,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    shippingAddress,
    setShippingAddress,
    isCepLoading,
    cepError,
    formatCep,
    fetchAddressByCep,
    showToast,
  } = useCart();

  // Estados do Formulário de Reserva Privada
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [finalidade, setFinalidade] = useState('Projeto Residencial');
  const [cidadeUf, setCidadeUf] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Fecha gaveta com a tecla Escape e trava scroll do body
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };

    if (isCartOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen, setIsCartOpen]);

  // Sincroniza cidade e UF quando o endereço do ViaCEP for atualizado
  useEffect(() => {
    if (shippingAddress.localidade && shippingAddress.uf) {
      setCidadeUf(`${shippingAddress.localidade} / ${shippingAddress.uf}`);
    }
  }, [shippingAddress.localidade, shippingAddress.uf]);

  if (!isCartOpen) return null;

  // Formatação de WhatsApp com máscara (00) 00000-0000
  const handleWhatsappChange = (e) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (raw.length <= 10) {
      setWhatsapp(raw.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3'));
    } else {
      setWhatsapp(raw.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3'));
    }
  };

  // Submissão da Reserva Privada
  const handleSubmitReserva = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      showToast('Adicione ao menos uma peça à sua seleção.', 'error');
      return;
    }

    if (!nome.trim() || !email.trim() || !whatsapp.trim()) {
      showToast('Por favor, preencha os campos obrigatórios.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const protocolo = `DS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const payload = {
        protocolo,
        nome,
        email,
        whatsapp,
        finalidade,
        cidadeUf: cidadeUf || 'Rio de Janeiro / RJ',
        cep: shippingAddress.cep || '22000-000',
        itens: [...cartItems],
        total: subtotal,
        data: new Date().toLocaleDateString('pt-BR'),
      };

      setSubmittedData(payload);
      setIsSubmitting(false);
      showToast('Reserva técnica enviada com sucesso ao Concierge!', 'success');
    }, 600);
  };

  // Reset e fechamento após conclusão
  const handleConcluir = () => {
    clearCart();
    setSubmittedData(null);
    setNome('');
    setEmail('');
    setWhatsapp('');
    setIsCartOpen(false);
  };

  // Mensagem do WhatsApp VIP com dados da reserva
  const generateWhatsappUrl = () => {
    if (!submittedData) return 'https://wa.me/5521912244881';
    const itemsList = submittedData.itens
      .map((i) => `• ${i.quantity}x ${i.product.nome} (${formatCurrency(i.product.preco * i.quantity)})`)
      .join('%0A');

    const msg = `Olá, Concierge DOReMI SOLFÁ!%0A%0ASolicitei a Reserva sob Encomenda *Protocolo ${submittedData.protocolo}*.%0A%0A*Cliente:* ${encodeURIComponent(submittedData.nome)}%0A*Finalidade:* ${encodeURIComponent(submittedData.finalidade)}%0A*Localização:* ${encodeURIComponent(submittedData.cidadeUf)}%0A%0A*Peças Selecionadas:*%0A${itemsList}%0A%0A*Subtotal:* ${encodeURIComponent(formatCurrency(submittedData.total))}%0A%0AGostaria de dar andamento às amostras físicas e validação técnica.`;

    return `https://wa.me/5521912244881?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop com Leve Desfoque */}
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-[4px] transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Container Slide-over Direito */}
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-full sm:max-w-[480px] md:max-w-[540px] bg-[#FAF8F5] border-l border-brand-border shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-out">
          
          {/* Header da Gaveta */}
          <div className="px-6 sm:px-8 py-6 border-b border-brand-border flex items-center justify-between bg-[#FAF8F5]">
            <div>
              <span className="text-[10px] tracking-[0.28em] uppercase text-brand-textMuted font-medium block">
                Atelier DOReMI SOLFÁ
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-dark font-normal mt-0.5">
                Minha Seleção de Peças
              </h2>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-brand-textMuted hover:text-brand-dark rounded-full hover:bg-brand-muted/70 transition-colors focus:outline-none"
              aria-label="Fechar gaveta"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Conteúdo com Scroll Vertical */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-8">
            
            {/* ESTADO 1: CONFIRMAÇÃO DE RESERVA (FEEDBACK APÓS ENVIO) */}
            {submittedData ? (
              <div className="py-8 space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto shadow-xs">
                  <Check className="w-8 h-8 stroke-[1.75]" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-brand-textMuted font-medium block">
                    Protocolo {submittedData.protocolo}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark font-normal">
                    Solicitação de Reserva Recebida
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-textMuted max-w-md mx-auto leading-relaxed pt-1">
                    Agradecemos, <strong>{submittedData.nome}</strong>. A curadoria do nosso Atelier recebeu sua seleção de mobiliário. Nosso concierge técnico entrará em contato para validação de medidas e envio do kit com amostras de madeiras e tecidos.
                  </p>
                </div>

                {/* Resumo da Curadoria */}
                <div className="bg-white rounded-[4px] border border-brand-border p-5 text-left space-y-3">
                  <div className="text-xs text-brand-textMuted border-b border-brand-border pb-2.5 flex justify-between items-center">
                    <span className="font-medium text-brand-dark uppercase tracking-wider text-[10px]">
                      {submittedData.finalidade}
                    </span>
                    <span>{submittedData.cidadeUf}</span>
                  </div>

                  <div className="space-y-2">
                    {submittedData.itens.map(({ product, quantity }) => (
                      <div key={product.id} className="flex justify-between items-center text-xs">
                        <span className="text-brand-dark font-medium truncate max-w-[240px]">
                          {quantity}x {product.nome}
                        </span>
                        <span className="text-brand-textMuted font-serif">
                          {formatCurrency(product.preco * quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-brand-border flex justify-between items-baseline">
                    <span className="text-xs uppercase tracking-wider text-brand-textMuted font-medium">
                      Subtotal sob Encomenda
                    </span>
                    <span className="text-xl font-serif text-brand-dark font-normal">
                      {formatCurrency(submittedData.total)}
                    </span>
                  </div>
                </div>

                {/* Ações pós-confirmação */}
                <div className="space-y-3 pt-2">
                  <a
                    href={generateWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white py-4 px-6 rounded-full font-medium text-xs tracking-[0.16em] uppercase flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Falar Imediatamente com o Concierge</span>
                  </a>

                  <button
                    onClick={handleConcluir}
                    className="w-full bg-transparent hover:bg-brand-muted/70 text-brand-dark border border-brand-border py-3.5 px-6 rounded-full font-medium text-xs tracking-wider uppercase transition-colors"
                  >
                    Concluir e Continuar Navegando
                  </button>
                </div>
              </div>
            ) : cartItems.length === 0 ? (
              
              /* ESTADO 2: SELEÇÃO VAZIA */
              <div className="text-center py-20 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-muted text-brand-textMuted flex items-center justify-center mx-auto opacity-70">
                  <ShoppingBag className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-brand-dark font-normal">
                    Sua seleção está vazia
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-textMuted max-w-xs mx-auto mt-2 leading-relaxed">
                    Explore nosso acervo de camas em madeira maciça e estofados autorais para compor seu projeto.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    const el = document.getElementById('catalogo');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-full text-xs uppercase tracking-wider font-medium hover:bg-brand-dark/90 transition-all mt-2"
                >
                  <span>Explorar Acervo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              
              /* ESTADO 3: LISTA DE ITENS + FORMULÁRIO DE RESERVA */
              <>
                {/* 1. LISTA DE ITENS SELECIONADOS */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-brand-textMuted font-medium">
                      Mobiliário Selecionado ({cartItems.length})
                    </span>
                    <button
                      onClick={clearCart}
                      className="text-[10px] uppercase tracking-wider text-brand-textMuted hover:text-brand-dark transition-colors"
                    >
                      Esvaziar Seleção
                    </button>
                  </div>

                  <div className="divide-y divide-brand-border/60">
                    {cartItems.map(({ product, quantity }) => (
                      <div key={product.id} className="py-4 first:pt-0 last:pb-0 flex gap-4 items-start">
                        {/* Miniatura com cantos retos (radius: 4px) */}
                        <img
                          src={product.imagem}
                          alt={product.nome}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-[4px] border border-brand-border/80 bg-white flex-shrink-0"
                        />

                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-base sm:text-lg text-brand-dark font-normal leading-snug">
                            {product.nome}
                          </h4>
                          
                          <span className="text-xs text-brand-textMuted block mt-0.5 font-normal">
                            Acabamento: {product.material || product.tecido || product.tipo}
                          </span>

                          {/* Indicador Sutil de Produção */}
                          <div className="text-[10px] text-brand-textMuted flex items-center gap-1.5 mt-1 font-normal">
                            <Clock className="w-3 h-3 text-brand-primary/80 flex-shrink-0" />
                            <span>Produção sob encomenda: 45 dias úteis</span>
                          </div>

                          <div className="flex items-center justify-between mt-2.5">
                            <div className="text-sm font-serif font-medium text-brand-dark">
                              {formatCurrency(product.preco * quantity)}
                            </div>

                            {/* Controles Sutis: Quantidade & Remoção */}
                            <div className="flex items-center gap-3">
                              <div className="flex items-center border border-brand-border rounded-full bg-white px-2 py-0.5">
                                <button
                                  onClick={() => updateQuantity(product.id, -1)}
                                  className="text-brand-textMuted hover:text-brand-dark p-0.5"
                                  title="Diminuir"
                                >
                                  <Minus className="w-2.5 h-2.5" />
                                </button>
                                <span className="text-xs font-medium text-brand-dark px-2">
                                  {quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(product.id, 1)}
                                  className="text-brand-textMuted hover:text-brand-dark p-0.5"
                                  title="Aumentar"
                                >
                                  <Plus className="w-2.5 h-2.5" />
                                </button>
                              </div>

                              <button
                                onClick={() => removeFromCart(product.id)}
                                className="text-[11px] text-brand-textMuted hover:text-brand-dark underline underline-offset-4 font-normal transition-colors"
                              >
                                Remover
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Subtotal Nobre (Sem Cálculo de Parcelas) */}
                  <div className="pt-4 border-t border-brand-border flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-brand-textMuted font-medium block">
                        Subtotal da Seleção
                      </span>
                      <span className="text-[11px] text-brand-textMuted">
                        Peças numeradas com entrega técnica inclusa
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-serif text-brand-dark font-medium">
                      {formatCurrency(subtotal)}
                    </div>
                  </div>
                </div>

                {/* 2. FORMULÁRIO DE RESERVA PRIVADA (SUBSTITUINDO O CHECKOUT ANTIGO) */}
                <form
                  onSubmit={handleSubmitReserva}
                  className="pt-6 border-t border-brand-border space-y-5"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-brand-textMuted font-medium block">
                      Atendimento Sob Demanda
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-brand-dark font-normal">
                      Solicitar Reserva & Atendimento Técnico
                    </h3>
                    <p className="text-xs text-brand-textMuted leading-relaxed">
                      Preencha os dados abaixo para viabilizar o agendamento da produção e o envio de mostruários.
                    </p>
                  </div>

                  {/* Campo 1: Nome Completo */}
                  <div>
                    <label className="block text-[10px] tracking-wider uppercase text-brand-dark font-medium mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Ex: Dra. Helena Vasconcellos"
                      className="w-full px-3.5 py-2.5 rounded-[4px] border border-brand-border bg-white text-sm text-brand-dark placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-dark transition-all"
                    />
                  </div>

                  {/* Campo 2: E-mail e WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[10px] tracking-wider uppercase text-brand-dark font-medium mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contato@exemplo.com"
                        className="w-full px-3.5 py-2.5 rounded-[4px] border border-brand-border bg-white text-sm text-brand-dark placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-dark transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-wider uppercase text-brand-dark font-medium mb-1.5">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={handleWhatsappChange}
                        placeholder="(21) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-[4px] border border-brand-border bg-white text-sm text-brand-dark placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-dark transition-all"
                      />
                    </div>
                  </div>

                  {/* Campo 3: Finalidade (Toggle Discreto) */}
                  <div>
                    <label className="block text-[10px] tracking-wider uppercase text-brand-dark font-medium mb-1.5">
                      Finalidade do Projeto
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Projeto Residencial', 'Especificação de Arquitetura'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFinalidade(option)}
                          className={`py-2 px-3 rounded-[4px] text-xs font-medium text-center transition-all ${
                            finalidade === option
                              ? 'bg-brand-dark text-white border border-brand-dark shadow-xs'
                              : 'bg-white text-brand-textMuted border border-brand-border hover:text-brand-dark hover:border-brand-dark/40'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Campo 4: Cidade / UF e CEP (Viabilidade da Entrega de Luva Branca) */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-[10px] tracking-wider uppercase text-brand-dark font-medium">
                        Localização de Entrega
                      </label>
                      <span className="text-[10px] text-brand-textMuted">
                        Entrega de Luva Branca
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-1">
                        <div className="relative">
                          <input
                            type="text"
                            maxLength={9}
                            value={shippingAddress.cep || ''}
                            onChange={(e) => {
                              const val = formatCep(e.target.value);
                              setShippingAddress((prev) => ({ ...prev, cep: val }));
                              if (val.replace(/\D/g, '').length === 8) {
                                fetchAddressByCep(val);
                              }
                            }}
                            placeholder="CEP (00000-000)"
                            className="w-full px-3 py-2.5 rounded-[4px] border border-brand-border bg-white text-xs font-mono text-brand-dark placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-dark transition-all"
                          />
                          {isCepLoading && (
                            <div className="absolute right-2 top-3">
                              <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-primary" />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-span-2">
                        <input
                          type="text"
                          value={cidadeUf}
                          onChange={(e) => setCidadeUf(e.target.value)}
                          placeholder="Cidade / UF"
                          className="w-full px-3.5 py-2.5 rounded-[4px] border border-brand-border bg-white text-xs text-brand-dark placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-dark transition-all"
                        />
                      </div>
                    </div>

                    {cepError && (
                      <span className="text-[10px] text-brand-highlight block">
                        {cepError}
                      </span>
                    )}

                    <p className="text-[10px] text-brand-textMuted flex items-center gap-1.5 pt-0.5">
                      <MapPin className="w-3 h-3 text-brand-primary/80 flex-shrink-0" />
                      <span>Verificação de viabilidade logística para entrega climatizada e montador nobre.</span>
                    </p>
                  </div>

                  {/* Botão Principal (CTA) */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white py-4 px-6 rounded-full font-medium text-xs tracking-[0.16em] uppercase flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processando Reserva...</span>
                        </>
                      ) : (
                        <>
                          <span>Solicitar Proposta ao Concierge</span>
                          <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-brand-textMuted text-center leading-relaxed mt-2.5">
                      Nosso atendimento entrará em contato para envio de mostruários físicos e confirmação de medidas.
                    </p>
                  </div>
                </form>
              </>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
