import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
const CART_STORAGE_KEY = 'doremi_solfa_cart_v2';
const ADDRESS_STORAGE_KEY = 'doremi_solfa_address_v2';
const DELIVERY_STORAGE_KEY = 'doremi_solfa_delivery_v2';

export const DELIVERY_OPTIONS = {
  traditional: {
    id: 'traditional',
    name: 'Entrega Tradicional com Montagem Cortesia',
    prazo: '5 a 8 dias úteis',
    price: 0,
    badge: 'Cortesia DOReMI SOLFÁ',
    description: 'Montagem profissional artesanal inclusa no local em horário comercial.',
  },
  vip: {
    id: 'vip',
    name: 'Entrega Agendada VIP com Montador Especialista',
    prazo: 'Data e turno agendados (Manhã / Tarde)',
    price: 120.0,
    badge: 'Serviço de Luva Branca',
    description: 'Transporte dedicado climatizado, montador exclusivo e descarte ecológico das embalagens.',
  },
};

export function CartProvider({ children }) {
  // 1. Inicializa o carrinho com os dados persistidos no localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (error) {
      console.warn('Falha ao restaurar o carrinho do localStorage:', error);
    }
    return [];
  });

  // 2. Estado do Endereço e CEP
  const [shippingAddress, setShippingAddress] = useState(() => {
    try {
      const saved = localStorage.getItem(ADDRESS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Falha ao restaurar endereço:', e);
    }
    return {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
    };
  });

  // 3. Opção de Frete Selecionada
  const [selectedDelivery, setSelectedDelivery] = useState(() => {
    try {
      const saved = localStorage.getItem(DELIVERY_STORAGE_KEY);
      if (saved && DELIVERY_OPTIONS[saved]) {
        return saved;
      }
    } catch (e) {
      console.warn('Falha ao restaurar frete:', e);
    }
    return 'traditional';
  });

  const [isCepLoading, setIsCepLoading] = useState(false);
  const [cepError, setCepError] = useState(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Sincroniza o carrinho com localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.warn('Falha ao persistir o carrinho:', error);
    }
  }, [cartItems]);

  // Sincroniza o endereço com localStorage
  useEffect(() => {
    try {
      localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(shippingAddress));
    } catch (error) {
      console.warn('Falha ao persistir endereço:', error);
    }
  }, [shippingAddress]);

  // Sincroniza o frete com localStorage
  useEffect(() => {
    try {
      localStorage.setItem(DELIVERY_STORAGE_KEY, selectedDelivery);
    } catch (error) {
      console.warn('Falha ao persistir frete:', error);
    }
  }, [selectedDelivery]);

  // Exibe mensagem de feedback visual
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Formata CEP com máscara 00000-000
  const formatCep = (value) => {
    const numbers = value.replace(/\D/g, '').slice(0, 8);
    if (numbers.length > 5) {
      return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
    }
    return numbers;
  };

  // Consulta à API pública do ViaCEP
  const fetchAddressByCep = async (rawCep) => {
    const cleanCep = rawCep.replace(/\D/g, '');
    if (cleanCep.length !== 8) {
      setCepError('O CEP deve conter 8 dígitos numéricos.');
      return false;
    }

    setIsCepLoading(true);
    setCepError(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      if (!response.ok) {
        throw new Error('Falha na comunicação com o serviço de CEP.');
      }
      const data = await response.json();

      if (data.erro) {
        setCepError('CEP não localizado no cadastro dos Correios.');
        showToast('CEP não encontrado. Por favor, verifique ou preencha manualmente.', 'error');
        setIsCepLoading(false);
        return false;
      }

      setShippingAddress((prev) => ({
        ...prev,
        cep: formatCep(cleanCep),
        logradouro: data.logradouro || prev.logradouro,
        bairro: data.bairro || prev.bairro,
        localidade: data.localidade || prev.localidade,
        uf: data.uf || prev.uf,
      }));

      showToast(`Endereço localizado: ${data.localidade} - ${data.uf}`, 'success');
      setIsCepLoading(false);
      return true;
    } catch (err) {
      console.error('Erro ViaCEP:', err);
      setCepError('Erro ao consultar o CEP. Você pode preencher os campos manualmente.');
      showToast('Não foi possível consultar o ViaCEP no momento.', 'error');
      setIsCepLoading(false);
      return false;
    }
  };

  // Adiciona item ao carrinho
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prevItems, { product, quantity }];
    });
    showToast(`"${product.nome}" adicionado à sua encomenda!`);
  };

  // Remove produto do carrinho
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removido da encomenda.', 'info');
  };

  // Altera a quantidade de um item
  const updateQuantity = (productId, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Limpa o carrinho
  const clearCart = () => {
    setCartItems([]);
    showToast('Lista de compras reinicializada.', 'info');
  };

  // Cálculos reativos
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.preco * item.quantity, 0);
  const shippingCost = cartItems.length > 0 ? DELIVERY_OPTIONS[selectedDelivery]?.price || 0 : 0;
  const totalOrder = subtotal + shippingCost;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        toast,
        showToast,
        totalItems,
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser utilizado dentro de um CartProvider');
  }
  return context;
}
