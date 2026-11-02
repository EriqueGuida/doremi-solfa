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
          
          {/* Logotipo Puramente Tipográfico com Alto Kerning */}
          <a href="#hero" className="flex flex-col group py-1.5 select-none focus:outline-none">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-dark font-normal transition-colors group-hover:text-brand-primary">
              DOREMI <span className="font-light text-brand-dark/70 group-hover:text-brand-primary">SOLFÁ</span>
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.42em] sm:tracking-[0.46em] uppercase text-brand-textMuted font-medium mt-0.5">
              ATELIER DE MOBILIÁRIO
            </span>
          </a>

          {/* Links de Navegação Desktop */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm font-medium text-brand-dark/90 hover:text-brand-primary tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ações (Conta + Minha Seleção Minimalista) */}
          <div className="flex items-center space-x-2.5 sm:space-x-3.5">
            
            {/* Botão de Conta / Cadastro */}
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-textMuted hover:text-brand-dark px-3.5 py-2.5 rounded-full border border-brand-border hover:border-brand-dark/30 bg-brand-surface hover:bg-brand-muted/60 transition-all duration-200"
              title="Acesso e Cadastro"
            >
              <User className="w-4 h-4 stroke-[1.75]" />
              <span className="hidden sm:inline tracking-wide">Conta</span>
            </button>

            {/* Botão Minimalista "Minha Seleção" */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="group relative inline-flex items-center gap-2.5 border border-brand-border bg-brand-surface hover:bg-brand-muted/70 hover:border-brand-dark/30 text-brand-dark px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none"
              aria-label="Abrir Minha Seleção"
            >
              <ShoppingBag className="w-4 h-4 text-brand-dark stroke-[1.75] transition-transform group-hover:scale-105" />
              <span className="hidden sm:inline tracking-wide font-medium">Minha Seleção</span>
              <span className="bg-brand-dark text-white text-[11px] font-semibold min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center">
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
