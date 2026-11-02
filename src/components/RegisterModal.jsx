import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Eye, EyeOff, Loader2 } from 'lucide-react';

export default function RegisterModal({ isOpen, onClose }) {
  const { showToast } = useCart();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [senha, setSenha] = useState('');
  const [isTrade, setIsTrade] = useState(false);

  if (!isOpen) return null;

  // Formatação de WhatsApp com máscara (00) 00000-0000
  const handleWhatsappChange = (e) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (raw.length <= 10) {
      setWhatsapp(raw.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3'));
    } else {
      setWhatsapp(raw.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3'));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome.trim() || !email.trim() || !whatsapp.trim() || !senha.trim()) {
      showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    if (senha.length < 6) {
      showToast('A senha deve conter no mínimo 6 caracteres.', 'error');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      showToast(
        isTrade
          ? `Bem-vindo(a) ao Acesso Trade, ${nome}! Cadastro aprovado com benefícios para arquitetura.`
          : `Conta Privée criada com sucesso para ${nome}!`,
        'success'
      );
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Container do Modal */}
      <div
        className="relative bg-[#FAF8F5] w-full max-w-lg rounded-[8px] border border-brand-border shadow-2xl overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header do Modal com Tipografia Editorial */}
        <div className="p-6 sm:p-8 border-b border-brand-border/70 flex items-start justify-between bg-[#FAF8F5]">
          <div className="pr-4 space-y-1">
            <span className="text-[10px] tracking-[0.28em] uppercase text-brand-textMuted font-medium block">
              Atelier DOReMI SOLFÁ
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark font-normal leading-snug">
              Acesso Exclusivo — Atelier DOReMI SOLFÁ
            </h3>
            <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed pt-1">
              Crie sua conta para salvar seleções de projetos, solicitar mostruários físicos e acessar condições exclusivas para especificação.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-brand-textMuted hover:text-brand-dark rounded-full hover:bg-brand-muted/70 transition-colors focus:outline-none flex-shrink-0"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Formulário com Fricção Reduzida */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          
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
              className="w-full px-3.5 py-3 rounded-[4px] border border-brand-border bg-white text-sm text-brand-dark placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-dark transition-all"
            />
          </div>

          {/* Campo 2: E-mail */}
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
              className="w-full px-3.5 py-3 rounded-[4px] border border-brand-border bg-white text-sm text-brand-dark placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-dark transition-all"
            />
          </div>

          {/* Campo 3: WhatsApp VIP */}
          <div>
            <label className="block text-[10px] tracking-wider uppercase text-brand-dark font-medium mb-1.5">
              WhatsApp VIP *
            </label>
            <input
              type="tel"
              required
              value={whatsapp}
              onChange={handleWhatsappChange}
              placeholder="(21) 99999-9999"
              className="w-full px-3.5 py-3 rounded-[4px] border border-brand-border bg-white text-sm text-brand-dark placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-dark transition-all"
            />
          </div>

          {/* Campo 4: Senha com Revelar Olho */}
          <div>
            <label className="block text-[10px] tracking-wider uppercase text-brand-dark font-medium mb-1.5">
              Senha *
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                minLength={6}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Mínimo de 6 caracteres"
                className="w-full pl-3.5 pr-10 py-3 rounded-[4px] border border-brand-border bg-white text-sm text-brand-dark placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-dark transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-brand-textMuted hover:text-brand-dark transition-colors"
                tabIndex={-1}
                aria-label={showPassword ? 'Ocultar senha' : 'Exibir senha'}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 stroke-[1.5]" />
                ) : (
                  <Eye className="w-4 h-4 stroke-[1.5]" />
                )}
              </button>
            </div>
          </div>

          {/* Campo 5: Checkbox Sutil para Arquitetos / Trade */}
          <div className="pt-1.5">
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isTrade}
                onChange={(e) => setIsTrade(e.target.checked)}
                className="w-4 h-4 rounded-[3px] border-brand-border text-brand-dark accent-brand-dark cursor-pointer"
              />
              <span className="text-xs text-brand-dark font-normal">
                Sou Arquiteto / Designer de Interiores (Acesso Trade)
              </span>
            </label>
          </div>

          {/* Botão Principal: Criar Conta Privée */}
          <div className="pt-3 space-y-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white py-4 px-6 rounded-full font-medium text-xs tracking-[0.16em] uppercase flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Criando Acesso Privée...</span>
                </>
              ) : (
                <span>Criar Conta Privée</span>
              )}
            </button>

            <p className="text-[11px] text-brand-textMuted text-center">
              Ao criar a conta, você concorda com os termos de privacidade e curadoria do Atelier.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}
