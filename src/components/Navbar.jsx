import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X, User } from 'lucide-react';

export default function Navbar({ onOpenRegister, onCategoryClick }) {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Apresentação', href: '#hero' },
    { label: 'Atelier', href: '#atelier' },
    { label: 'Camas', href: '#camas' },
    { label: 'Materiais', href: '#materiais' },
    { label: 'Sofás', href: '#sofas' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Encomendas', href: '#encomendas' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (href === '#camas' && onCategoryClick) {
      onCategoryClick('camas');
    } else if (href === '#sofas' && onCategoryClick) {
      onCategoryClick('sofas');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-brand-surface/95 backdrop-blur-md border-b border-brand-border transition-all">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24 sm:h-28">
          
          {/* Logo Horizontal com Tamanho Proeminente e Bem Dimensionado */}
          <a href="#hero" className="flex items-center focus:outline-none py-2">
            <img
              src="/imagens/logo-horizontal.png"
              alt="DOReMI SOLFÁ Móveis"
              className="h-14 sm:h-16 md:h-20 w-auto max-w-[260px] sm:max-w-[380px] object-contain transition-all"
            />
          </a>

          {/* Links de Navegação Desktop */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm font-semibold text-brand-dark hover:text-brand-highlight transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ações (Cadastro + Carrinho de Encomenda) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Botão de Cadastro */}
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-dark hover:text-brand-primary px-3.5 py-2.5 rounded-xl border border-brand-border hover:border-brand-primary bg-brand-surface hover:bg-brand-muted transition-all duration-200"
              title="Cadastro de Cliente"
            >
              <User className="w-4 h-4 text-brand-primary" />
              <span className="hidden sm:inline">Cadastro</span>
            </button>

            {/* Botão do Carrinho Reativo */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 hover:scale-105"
              aria-label="Abrir carrinho de encomendas"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden md:inline">Encomenda</span>
              <span className="bg-brand-accent text-brand-dark px-2.5 py-0.5 rounded-full text-xs font-bold min-w-[22px] text-center shadow-inner">
                {totalItems}
              </span>
            </button>

            {/* Menu Hambúrguer (Mobile e Tablet) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-brand-dark rounded-xl hover:bg-brand-muted focus:outline-none"
              aria-label="Alternar menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-brand-surface border-b border-brand-border px-6 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="block px-4 py-2.5 rounded-xl text-base font-medium text-brand-dark hover:bg-brand-muted hover:text-brand-highlight transition-colors"
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
