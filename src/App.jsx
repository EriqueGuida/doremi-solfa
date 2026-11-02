import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { products, CATEGORIES } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import OrderForm from './components/OrderForm';
import RegisterModal from './components/RegisterModal';
import Toast from './components/Toast';
import Footer from './components/Footer';
import { Bed, Sofa } from 'lucide-react';

function MainApp() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const camas = products.filter((p) => p.categoria === 'doremi');
  const sofas = products.filter((p) => p.categoria === 'solfa');

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans selection:bg-brand-highlight selection:text-white">
      {/* 1. Header & Navbar Responsiva Widescreen */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      <main className="flex-1">
        {/* 2. Banner de Apresentação (Hero com a Logo Vertical Proeminente) */}
        <Hero />

        {/* 3. Seção DOReMI — Camas (Widescreen 1560px & Grid Responsivo) */}
        <section id="camas" className="py-16 sm:py-24 w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-5 border-b border-brand-border gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">
                <Bed className="w-4 h-4" />
                <span>{CATEGORIES.DOREMI.name}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
                {CATEGORIES.DOREMI.subtitle}
              </h2>
              <p className="text-brand-textMuted text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                {CATEGORIES.DOREMI.description} Modelos de solteiro e casal com acabamento artesanal e estrutura reforçada.
              </p>
            </div>

            <span className="text-xs sm:text-sm font-semibold text-brand-textMuted bg-brand-surface border border-brand-border px-4 py-2 rounded-xl w-fit shadow-xs">
              {camas.length} Modelos Disponíveis
            </span>
          </div>

          {/* Grid Inteligente: 1 col (mobile), 2 cols (tablet), 3 cols (laptop), 4 cols (widescreen) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {camas.map((cama) => (
              <ProductCard
                key={cama.id}
                product={cama}
                onSelectProduct={setSelectedProduct}
              />
            ))}
          </div>
        </section>

        {/* 4. Seção SOLFÁ — Sofás (Widescreen 1560px & Grid Responsivo) */}
        <section id="sofas" className="py-16 sm:py-24 bg-brand-muted/40 border-t border-brand-border">
          <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-5 border-b border-brand-border gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-highlight/10 text-brand-highlight text-xs font-bold uppercase tracking-wider mb-2">
                  <Sofa className="w-4 h-4" />
                  <span>{CATEGORIES.SOLFA.name}</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
                  {CATEGORIES.SOLFA.subtitle}
                </h2>
                <p className="text-brand-textMuted text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                  {CATEGORIES.SOLFA.description} Linho cru, veludo retrô e mecanismos retráteis articulados de alto conforto.
                </p>
              </div>

              <span className="text-xs sm:text-sm font-semibold text-brand-textMuted bg-brand-surface border border-brand-border px-4 py-2 rounded-xl w-fit shadow-xs">
                {sofas.length} Modelos Disponíveis
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {sofas.map((sofa) => (
                <ProductCard
                  key={sofa.id}
                  product={sofa}
                  onSelectProduct={setSelectedProduct}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Módulo de Encomendas & Pagamento (Substitui Encomendas.html) */}
        <OrderForm onOpenRegister={() => setIsRegisterOpen(true)} />
      </main>

      {/* 6. Rodapé Institucional */}
      <Footer />

      {/* Modais e Painéis Interativos */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <CartDrawer />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
