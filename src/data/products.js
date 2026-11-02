/**
 * Modelagem de Dados Expandida — DOReMI SOLFÁ Móveis (Boutique de Luxo v2.0)
 * Reúne o catálogo original da UFF com galerias de fotos em alta definição,
 * especificações nobres, atelier artesanal, guia tátil de tecidos e lookbook de ambientes.
 */

export const CATEGORIES = {
  DOREMI: {
    id: 'doremi',
    name: 'Seção DOReMI',
    subtitle: 'Camas & Bicamas Nobres',
    description: 'Marcenaria artesanal em madeira maciça certificada para noites de descanso com serenidade e elegância.',
  },
  SOLFA: {
    id: 'solfa',
    name: 'Seção SOLFÁ',
    subtitle: 'Sofás & Sofás-Camas de Alto Padrão',
    description: 'Estofados ergonômicos revestidos em linho natural, veludo e suede com mecanismos articulados silenciosos.',
  },
};

export const products = [
  // ==========================================
  // SEÇÃO DOREMI - CAMAS
  // ==========================================
  {
    id: 'cama-solteiro-simples',
    legacyId: 'cama1',
    categoria: 'doremi',
    nome: 'Cama de Solteiro Simples',
    tipo: 'Cama de Solteiro',
    estilo: 'Simples',
    dimensoes: '104 x 104 x 202 (AxLxP)',
    material: 'Madeira Maciça',
    preco: 325.00,
    imagem: '/imagens/cama-solteiro-simples-1.jpg',
    galeria: [
      '/imagens/cama-solteiro-simples-1.jpg',
      '/imagens/cama-solteiro-simples-2.jpg',
      '/imagens/cama-solteiro-simples-3.jpg',
    ],
    descricao: 'Cama de solteiro de estética minimalista construída em madeira maciça com encaixes de alta precisão. Acabamento acetinado fosco que ressalta os veios naturais da madeira.',
    destaque: false,
    disponivel: true,
  },
  {
    id: 'cama-solteiro-bicama',
    legacyId: 'cama2',
    categoria: 'doremi',
    nome: 'Cama de Solteiro Bicama',
    tipo: 'Cama de Solteiro',
    estilo: 'Bicama',
    dimensoes: '70 x 87 x 193 (AxLxP)',
    material: 'Madeira Tratada',
    preco: 470.00,
    imagem: '/imagens/cama-solteiro-bicama-1.jpg',
    galeria: [
      '/imagens/cama-solteiro-bicama-1.jpg',
      '/imagens/cama-solteiro-bicama-2.jpg',
      '/imagens/cama-solteiro-bicama-3.jpg',
    ],
    descricao: 'Engenharia inteligente para quartos juvenis e de hóspedes de alto padrão. Cama auxiliar inferior oculta com rodízios emborrachados silenciosos que protegem pisos de madeira.',
    destaque: true,
    disponivel: true,
  },
  {
    id: 'cama-casal-simples',
    legacyId: 'cama3',
    categoria: 'doremi',
    nome: 'Cama de Casal Simples',
    tipo: 'Cama de Casal',
    estilo: 'Simples',
    dimensoes: '108 x 154 x 210 (AxLxP)',
    material: 'Madeira Nobre',
    preco: 680.00,
    imagem: '/imagens/cama-casal-simples-1.jpg',
    galeria: [
      '/imagens/cama-casal-simples-1.jpg',
      '/imagens/cama-casal-simples-2.jpg',
      '/imagens/cama-casal-simples-3.jpg',
    ],
    descricao: 'Presença imponente e linhas calmas para a suíte master. Cabeceira ergonômica com ripas perfeitamente espaçadas e estrado reforçado para suporte de colchões de densidade premium.',
    destaque: false,
    disponivel: true,
  },
  {
    id: 'cama-casal-gavetas',
    legacyId: 'cama4',
    categoria: 'doremi',
    nome: 'Cama de Casal com Gavetas',
    tipo: 'Cama de Casal',
    estilo: 'Com gavetas',
    dimensoes: '48 x 145 x 195 (AxLxP)',
    material: 'Madeira & Gaveteiro',
    preco: 1900.00,
    imagem: '/imagens/cama-casal-gavetas-1.jpg',
    galeria: [
      '/imagens/cama-casal-gavetas-1.jpg',
      '/imagens/cama-casal-gavetas-2.jpg',
      '/imagens/cama-casal-gavetas-3.jpg',
    ],
    descricao: 'Marcenaria sob medida de altíssimo nível. Quatro gaveteiros laterais integrados com corrediças invisíveis de fechamento suave (soft-close), ideais para enxovais nobres.',
    destaque: true,
    disponivel: true,
  },

  // ==========================================
  // SEÇÃO SOLFÁ - SOFÁS
  // ==========================================
  {
    id: 'sofa-2lug-retratil',
    legacyId: 'sofa1',
    categoria: 'solfa',
    nome: 'Sofá 2 Lugares Retrátil',
    tipo: 'Retrátil',
    lugares: 2,
    tecido: 'Linho Cru',
    dimensoes: '95 x 87-126 x 180 (AxPxL)',
    preco: 765.00,
    imagem: '/imagens/sofa-2lug-retratil-1.jpg',
    galeria: [
      '/imagens/sofa-2lug-retratil-1.jpg',
      '/imagens/sofa-2lug-retratil-2.jpg',
      '/imagens/sofa-2lug-retratil-3.jpg',
    ],
    descricao: 'Proporções equilibradas para livings refinados. Revestido em linho cru puro de toque fresco, com assentos retráteis suaves suportados por molas ensacadas e espuma D-28 hipoalergênica.',
    destaque: false,
    disponivel: true,
  },
  {
    id: 'sofa-cama-2lug',
    legacyId: 'sofa2',
    categoria: 'solfa',
    nome: 'Sofá-Cama 2 Lugares',
    tipo: 'Sofá-Cama',
    lugares: 2,
    tecido: 'Linho',
    dimensoes: '95 x 97-150 x 180 (AxPxL)',
    preco: 4160.00,
    imagem: '/imagens/sofa-cama-2lug-1.jpg',
    galeria: [
      '/imagens/sofa-cama-2lug-1.jpg',
      '/imagens/sofa-cama-2lug-2.jpg',
      '/imagens/sofa-cama-2lug-3.jpg',
    ],
    descricao: 'Peça de alta engenharia de design escandinavo. Sistema articulável de acionamento em um único movimento, transformando o sofá em uma generosa cama de casal com conforto de colchão permanente.',
    destaque: true,
    disponivel: true,
  },
  {
    id: 'sofa-3lug-retratil',
    legacyId: 'sofa3',
    categoria: 'solfa',
    nome: 'Sofá 3 Lugares Retrátil',
    tipo: 'Retrátil',
    lugares: 3,
    tecido: 'Suede',
    dimensoes: '108 x 95-155 x 200 (AxPxL)',
    preco: 1900.00,
    imagem: '/imagens/sofa-3lug-retratil-1.jpg',
    galeria: [
      '/imagens/sofa-3lug-retratil-1.jpg',
      '/imagens/sofa-3lug-retratil-2.jpg',
      '/imagens/sofa-3lug-retratil-3.jpg',
    ],
    descricao: 'Conforto supremo para noites em família. Estrutura profunda em suede nobre aveludado, com encostos reclináveis em múltiplos estágios e almofadas de fibra siliconada virgem.',
    destaque: true,
    disponivel: true,
  },
  {
    id: 'sofa-3lug-retro',
    legacyId: 'sofa4',
    categoria: 'solfa',
    nome: 'Sofá 3 Lugares Retrô',
    tipo: 'Retrô',
    lugares: 3,
    tecido: 'Veludo',
    dimensoes: '90 x 76 x 196 (AxPxL)',
    preco: 1200.00,
    imagem: '/imagens/sofa-3lug-retro-1.jpg',
    galeria: [
      '/imagens/sofa-3lug-retro-1.jpg',
      '/imagens/sofa-3lug-retro-2.jpg',
      '/imagens/sofa-3lug-retro-3.jpg',
    ],
    descricao: 'Homenagem à identidade histórica da DOReMI SOLFÁ. Estofamento em veludo nobre verde-floresta com botonê artesanal e pés palito torneados em madeira maciça nobre.',
    destaque: false,
    disponivel: true,
  },
];

// ==========================================
// SEÇÃO ATELIER (O NOSSO FAZER ARTESANAL)
// ==========================================
export const ATELIER_DATA = {
  badge: 'Tradição & Maestria',
  title: 'O Fazer Artesanal do Nosso Atelier',
  subtitle: 'Da escolha criteriosa da tora à alfaiataria de cada costura',
  description: 'Cada peça que carrega a marca DOReMI SOLFÁ é moldada por marceneiros e mestres estofadores que dominam técnicas centenárias. Utilizamos apenas madeiras maciças de manejo responsável e tecidos puros para criar móveis que ganham beleza e personalidade com o passar dos anos.',
  highlights: [
    {
      title: 'Marcenaria de Precisão',
      desc: 'Encaixes cavilhados e lixamento manual que evidenciam o calor e a solidez da madeira.',
    },
    {
      title: 'Alfaiataria de Estofados',
      desc: 'Pespontos milimétricos, espumas certificadas e molas ensacadas de retorno suave.',
    },
    {
      title: 'Compromisso com o Futuro',
      desc: '100% dos materiais possuem rastreabilidade de origem e selos socioambientais.',
    },
  ],
  images: [
    {
      src: '/imagens/atelier-1.jpg',
      title: 'Marcenaria Nobre',
      caption: 'Trabalho manual de respingagem e aplainamento da madeira maciça.',
    },
    {
      src: '/imagens/atelier-2.jpg',
      title: 'Costura de Alta Precisão',
      caption: 'Corte e acabamento de tecidos puros em alfaiataria fina.',
    },
  ],
};

// ==========================================
// GUIA TÁTIL DE TECIDOS & MATERIAIS
// ==========================================
export const MATERIALS_DATA = [
  {
    id: 'linho',
    name: 'Linho Cru Puro',
    category: 'Tecido Nobre Natural',
    image: '/imagens/materia-prima-1.jpg',
    description: 'Fibras vegetais nobres com textura rústica refinada. Proporciona frescor térmico no verão e aconchego acolhedor no inverno.',
    tactile: 'Toque natural, encorpado e altamente respirável.',
  },
  {
    id: 'veludo',
    name: 'Veludo Nobre Italiano',
    category: 'Tecido Acetinado',
    image: '/imagens/materia-prima-2.jpg',
    description: 'Estrutura aveludada de alta densidade que reflete a luz com elegância discreta. É a assinatura de nobreza do nosso Sofá Retrô.',
    tactile: 'Toque extremamente aveludado, suave e imersivo.',
  },
  {
    id: 'suede',
    name: 'Suede Premium',
    category: 'Microfibra Aveludada',
    image: '/imagens/materia-prima-3.jpg',
    description: 'Trama de alta performance com tratamento protetor contra líquidos e atritos. Conforto tátil incomparável para estofados familiares.',
    tactile: 'Sensação ultra macia similar à camurça natural.',
  },
  {
    id: 'madeira',
    name: 'Madeira Maciça Tratada',
    category: 'Estrutura Sustentável',
    image: '/imagens/materia-prima-4.jpg',
    description: 'Madeiras selecionadas de reflorestamento com secagem em estufa e tratamento fosco com óleos naturais repelentes de umidade.',
    tactile: 'Acabamento acetinado térmico com veios pronunciados.',
  },
];

// ==========================================
// LOOKBOOK (AMBIENTES DE ARQUITETURA)
// ==========================================
export const LOOKBOOK_DATA = [
  {
    id: 'lookbook-living',
    title: 'Living Contemporâneo',
    subtitle: 'Composição com o Sofá 3 Lugares Retrô em Veludo Nobre',
    ambient: 'Sala de Estar Integrada',
    description: 'Uma atmosfera de contemplação com luz natural farta, pisos quentes e elementos em cerâmica orgânica que valorizam o estofado em veludo verde.',
    image: '/imagens/lookbook-2.jpg',
    productLink: 'sofa-3lug-retro',
    tags: ['Iluminação Natural', 'Veludo Nobre', 'Design Calmo'],
  },
  {
    id: 'lookbook-suite',
    title: 'Suíte Serenidade',
    subtitle: 'Composição com a Cama de Casal em Madeira Nobre',
    ambient: 'Quarto de Casal Master',
    description: 'O silêncio do design atemporal. Linhas horizontais baixas que convidam ao descanso com enxoval em algodão egípcio e cortinas de gaze de linho.',
    image: '/imagens/lookbook-1.jpg',
    productLink: 'cama-casal-simples',
    tags: ['Madeira Maciça', 'Minimalismo', 'Conforto Acústico'],
  },
];

// ==========================================
// BARRA DE COMPROMISSOS DE LUXO
// ==========================================
export const LUXURY_COMMITMENTS = [
  {
    id: 'luva-branca',
    iconName: 'Truck',
    title: 'Entrega Luva Branca',
    description: 'Transporte climatizado com montagem especializada e retirada total das embalagens.',
  },
  {
    id: 'garantia',
    iconName: 'ShieldCheck',
    title: 'Garantia Estrutural de 5 Anos',
    description: 'Segurança absoluta na estabilidade das ferragens, da madeira maciça e dos estofados.',
  },
  {
    id: 'autoral',
    iconName: 'Sparkles',
    title: 'Design Autoral Exclusivo',
    description: 'Proporções criadas para harmonizar com a arquitetura contemporânea brasileira.',
  },
  {
    id: 'concierge',
    iconName: 'Headphones',
    title: 'Atendimento de Concierge',
    description: 'Consultoria técnica dedicada para envio de amostras de tecidos e auxílio com medidas.',
  },
];

// ==========================================
// FUNÇÕES UTILITÁRIAS
// ==========================================
export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function getProductById(id) {
  return products.find((p) => p.id === id || p.legacyId === id);
}

export function getProductsByCategory(categoria) {
  return products.filter((p) => p.categoria === categoria);
}
