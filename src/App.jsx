import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LuxuryBar from './components/LuxuryBar';
import AtelierStory from './components/AtelierStory';
import MaterialsGuide from './components/MaterialsGuide';
import CatalogSection from './components/CatalogSection';
import Lookbook from './components/Lookbook';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import OrderForm from './components/OrderForm';
import RegisterModal from './components/RegisterModal';
import Toast from './components/Toast';
import Footer from './components/Footer';
import ConciergeButton from './components/ConciergeButton';

function MainApp() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans selection:bg-brand-highlight selection:text-white">
      {/* 1. Header & Navbar Responsiva Widescreen */}
      <Navbar
        onOpenRegister={() => setIsRegisterOpen(true)}
        onCategoryClick={(cat) => setActiveFilter(cat)}
      />

      <main className="flex-1">
        {/* 2. Banner de Apresentação (Hero com a Logo Vertical Proeminente) */}
        <Hero />

        {/* 3. Barra de Compromissos de Luxo (White-Glove Services) */}
        <LuxuryBar />

        {/* 4. Seção Atelier: O Fazer Artesanal & Tradição da Marcenaria */}
        <AtelierStory />

        {/* 5. Guia Tátil de Tecidos & Matérias-Primas Nobres */}
        <MaterialsGuide />

        {/* 6. Catálogo Interativo: Filtros Horizontais, Busca em Tempo Real e Ordenação */}
        <CatalogSection
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onSelectProduct={setSelectedProduct}
        />

        {/* 7. Lookbook: Ambientes Inspiradores com Shop the Look */}
        <Lookbook onSelectProduct={setSelectedProduct} />

        {/* 8. Módulo de Encomendas & Pagamento com Integração de Frete */}
        <OrderForm onOpenRegister={() => setIsRegisterOpen(true)} />
      </main>

      {/* 9. Rodapé Institucional */}
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
      <ConciergeButton />
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
