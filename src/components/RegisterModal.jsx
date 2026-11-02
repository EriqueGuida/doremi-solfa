import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, User, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function RegisterModal({ isOpen, onClose }) {
  const { showToast, formatCep } = useCart();
  const [isCepLoading, setIsCepLoading] = useState(false);

  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    nascimento: '',
    sexo: 'Feminino',
    telefone: '',
    cep: '',
    endereco: '',
    email: '',
    senha: '',
    confirmaSenha: '',
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleCepChange = async (e) => {
    const formatted = formatCep(e.target.value);
    setFormData((prev) => ({ ...prev, cep: formatted }));

    const clean = formatted.replace(/\D/g, '');
    if (clean.length === 8) {
      setIsCepLoading(true);
      try {
        const res = await fetch(`https://viacep.com.br/ws/${clean}/json/`);
        const data = await res.json();
        if (!data.erro) {
          setFormData((prev) => ({
            ...prev,
            endereco: `${data.logradouro || ''},  - ${data.bairro || ''}, ${data.localidade || ''}/${data.uf || ''}`,
          }));
          showToast(`Endereço localizado: ${data.localidade}/${data.uf}`);
        } else {
          showToast('CEP não encontrado. Preencha o endereço manualmente.', 'error');
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsCepLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Regra da AD2 em tempo real:
    // Se ambos preenchidos e diferentes -> erro. Se um vazio ou iguais -> limpo.
    if (name === 'senha' || name === 'confirmaSenha') {
      const senhaVal = name === 'senha' ? value : formData.senha;
      const confirmaVal = name === 'confirmaSenha' ? value : formData.confirmaSenha;

      if (senhaVal && confirmaVal && senhaVal !== confirmaVal) {
        setErrors((prev) => ({ ...prev, senha: 'As senhas digitadas estão diferentes.' }));
      } else {
        setErrors((prev) => ({ ...prev, senha: null }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.senha) {
      showToast('Por favor, preencha os campos obrigatórios (*).', 'error');
      return;
    }

    if (formData.senha !== formData.confirmaSenha) {
      setErrors((prev) => ({ ...prev, senha: 'As senhas não coincidem. Corrija antes de enviar.' }));
      showToast('As senhas digitadas não coincidem!', 'error');
      return;
    }

    // Sucesso
    showToast(`Cadastro de ${formData.nome} realizado com sucesso!`);
    onClose();
  };

  // Status visual da confirmação de senha
  const senhasConferem =
    formData.senha &&
    formData.confirmaSenha &&
    formData.senha === formData.confirmaSenha;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative bg-brand-surface w-full max-w-2xl rounded-3xl border border-brand-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header do Modal */}
        <div className="p-6 border-b border-brand-border flex items-center justify-between bg-brand-muted/30">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-brand-primary text-white rounded-xl">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-dark">
                Cadastro de Cliente — DOReMI SOLFÁ
              </h3>
              <p className="text-xs text-brand-textMuted">
                Preencha seus dados para encomendas rápidas e acompanhamento de pedidos.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-brand-textMuted hover:text-brand-dark rounded-lg hover:bg-brand-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formulário com Scroll */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Dados Pessoais */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-3">
              Dados Pessoais
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Nome Completo *:
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-brand-bg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  CPF:
                </label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="000.000.000-00"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-brand-bg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Telefone:
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(21) 90000-0000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-brand-bg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-3">
              Endereço de Entrega
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  CEP:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="cep"
                    maxLength={9}
                    value={formData.cep}
                    onChange={handleCepChange}
                    placeholder="24000-000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-brand-bg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  {isCepLoading && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-brand-primary">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Endereço Completo:
                </label>
                <input
                  type="text"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  placeholder="Rua, número e complemento"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-brand-bg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
            </div>
          </div>

          {/* Dados de Acesso & Validação de Senha (AD2) */}
          <div className="bg-brand-muted/40 p-5 rounded-2xl border border-brand-border space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-highlight">
              Dados de Acesso (Login & Senha)
            </h4>

            <div>
              <label className="block text-xs font-semibold text-brand-dark mb-1">
                E-mail de Acesso *:
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Senha *:
                </label>
                <input
                  type="password"
                  name="senha"
                  required
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Confirmar Senha *:
                </label>
                <input
                  type="password"
                  name="confirmaSenha"
                  required
                  value={formData.confirmaSenha}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    errors.senha
                      ? 'border-brand-highlight focus:ring-brand-highlight bg-red-50/30'
                      : 'border-brand-border bg-white focus:ring-brand-primary'
                  }`}
                />
              </div>
            </div>

            {/* Feedback Visual Sem Alert */}
            {errors.senha && (
              <div className="flex items-center gap-1.5 text-xs text-brand-highlight font-medium">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errors.senha}</span>
              </div>
            )}

            {senhasConferem && (
              <div className="flex items-center gap-1.5 text-xs text-brand-primary font-medium">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Senhas idênticas e validadas com sucesso!</span>
              </div>
            )}
          </div>

          {/* Botões */}
          <div className="flex justify-end gap-3 pt-4 border-t border-brand-border">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-brand-border text-sm font-semibold text-brand-dark hover:bg-brand-muted"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-semibold shadow-sm transition-colors"
            >
              Concluir Cadastro
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
