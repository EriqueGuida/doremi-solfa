import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X, User } from 'lucide-react';

export default function Navbar({ onOpenRegister }) {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Apresentação', href: '#hero' },
    { label: 'Camas (DOReMI)', href: '#camas' },
    { label: 'Sofás (SOLFÁ)', href: '#sofas' },
    { label: 'Encomendas', href: '#encomendas' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-brand-surface/95 backdrop-blur-md border-b border-brand-border transition-all">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24 sm:h-28">
          
          {/* Logo Horizontal com Tamanho Proeminente e Bem Dimensionado */}
          <a href="#hero" className="flex items-center focus:outline-none py-2">
            <img
              src="/imagens/logo-horizontal.png"
              alt="DOReMI SOLFÁ Móveis"
              className="h-14 sm:h-16 md:h-20 w-auto max-w-[280px] sm:max-w-[420px] object-contain transition-all"
            />
          </a>

          {/* Links de Navegação Desktop */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-brand-dark hover:text-brand-highlight transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ações (Cadastro + Carrinho de Encomenda) */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            
            {/* Botão de Cadastro */}
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-primary px-4 py-2.5 rounded-xl border border-brand-border hover:border-brand-primary bg-brand-surface hover:bg-brand-muted transition-all duration-200"
              title="Cadastro de Cliente"
            >
              <User className="w-4 h-4 text-brand-primary" />
              <span className="hidden sm:inline">Cadastro</span>
            </button>

            {/* Botão do Carrinho Reativo */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white px-5 py-2.5 sm:py-3 rounded-full text-sm font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 hover:scale-105"
              aria-label="Abrir carrinho de encomendas"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden md:inline">Encomenda</span>
              <span className="bg-brand-accent text-brand-dark px-2.5 py-0.5 rounded-full text-xs font-bold min-w-[22px] text-center shadow-inner">
                {totalItems}
              </span>
            </button>

            {/* Menu Hambúrguer (Mobile e Tablet pequeno) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-brand-dark rounded-xl hover:bg-brand-muted focus:outline-none"
              aria-label="Alternar menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-surface border-b border-brand-border px-6 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-brand-dark hover:bg-brand-muted hover:text-brand-highlight transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-brand-primary flex items-center gap-2 bg-brand-primary/5 hover:bg-brand-primary/10 transition-colors"
          >
            <User className="w-4 h-4" />
            Cadastrar / Minha Conta
          </button>
        </div>
      )}
    </header>
  );
}
