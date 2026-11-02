import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X, User } from 'lucide-react';

export default function Navbar({ onOpenRegister, onCategoryClick }) {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 1. Links Centrais Refinados e Padronizados
  const navLinks = [
    { label: 'O Atelier', href: '#atelier' },
    { label: 'Leitos', href: '#camas', category: 'leitos-camas' },
    { label: 'Estofados', href: '#sofas', category: 'sofas-modulares' },
    { label: 'Matérias-Primas', href: '#materiais' },
    { label: 'Lookbook', href: '#lookbook' },
  ];

  const handleLinkClick = (link) => {
    setMobileMenuOpen(false);
    if (link.category && onCategoryClick) {
      onCategoryClick(link.category);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[rgba(246,244,239,0.88)] backdrop-blur-[12px] border-b border-black/[0.04] transition-all">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Logotipo Puramente Tipográfico com Alto Kerning */}
          <a href="#hero" className="flex flex-col group py-1.5 select-none focus:outline-none">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-dark font-normal transition-colors group-hover:text-brand-primary">
              DOREMI <span className="font-light text-brand-dark/70 group-hover:text-brand-primary">SOLFÁ</span>
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.42em] sm:tracking-[0.46em] uppercase text-brand-textMuted font-medium mt-0.5">
              ATELIER DE MOBILIÁRIO
            </span>
          </a>

          {/* 2. Menu Central: Estilo Tipográfico Internacional (11px, Uppercase, 1.8px tracking) */}
          <nav className="hidden xl:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link)}
                className="text-[11px] uppercase tracking-[1.8px] font-medium text-[#2B2B2B] hover:opacity-60 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* 3. Ações da Direita: Limpeza Visual & Quiet Luxury */}
          <div className="flex items-center space-x-5 sm:space-x-6">
            
            {/* Link Textual Limpo: Acesso Privée (Sem Borda/Pílula) */}
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[1.8px] font-medium text-[#2B2B2B] hover:opacity-60 transition-opacity duration-200 focus:outline-none cursor-pointer"
              title="Acesso Privée"
            >
              <User className="w-3.5 h-3.5 stroke-[1.5]" />
              <span className="hidden sm:inline">Acesso Privée</span>
            </button>

            {/* Botão Cápsula "Minha Seleção · X" com Traço Fino e Fundo Transparente */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="group inline-flex items-center gap-2 border border-[#D8D4CD] bg-transparent hover:border-[#2B2B2B]/40 hover:bg-black/[0.02] text-[#2B2B2B] px-4 py-2 rounded-full text-[11px] font-medium tracking-[1.5px] uppercase transition-all duration-200 focus:outline-none cursor-pointer"
              aria-label="Abrir Minha Seleção"
            >
              <ShoppingBag className="w-3.5 h-3.5 stroke-[1.5] transition-transform group-hover:scale-105" />
              <span>Minha Seleção · {totalItems}</span>
            </button>

            {/* Menu Hambúrguer (Mobile e Tablet) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 text-[#2B2B2B] hover:opacity-60 transition-opacity focus:outline-none"
              aria-label="Alternar menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[rgba(246,244,239,0.98)] backdrop-blur-md border-b border-black/[0.04] px-6 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link)}
              className="block px-2 py-2 text-[11px] uppercase tracking-[1.8px] font-medium text-[#2B2B2B] hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="w-full text-left px-2 py-2.5 text-[11px] uppercase tracking-[1.8px] font-medium text-[#2B2B2B] flex items-center gap-2 pt-3 border-t border-black/[0.04]"
          >
            <User className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Acesso Privée</span>
          </button>
        </div>
      )}
    </header>
  );
}
