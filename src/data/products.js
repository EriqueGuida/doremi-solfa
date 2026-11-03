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
  // SEÇÃO DOREMI - CAMAS AUTORAIS
  // ==========================================
  {
    id: 'cama-solteiro-simples',
    legacyId: 'cama1',
    categoria: 'doremi',
    nome: 'Leito Kyoto em Freijó Maciço',
    tipo: 'Cama Plataforma',
    estilo: 'Minimalista',
    dimensoes: '104 x 104 x 202 (AxLxP)',
    material: 'Madeira Maciça Certificada',
    preco: 14800.00,
    imagem: '/imagens/cama-solteiro-simples-1.jpg',
    galeria: [
      '/imagens/cama-solteiro-simples-1.jpg',
      '/imagens/cama-solteiro-simples-2.jpg',
      '/imagens/cama-solteiro-simples-3.jpg',
    ],
    descricao: 'Linhas puras inspiradas no minimalismo japonês em freijó maciço certificado. Estrutura suspensa de marcenaria precisa com encaixes sem parafusos aparentes e acabamento acetinado com óleos naturais.',
    destaque: false,
    disponivel: true,
  },
  {
    id: 'cama-solteiro-bicama',
    legacyId: 'cama2',
    categoria: 'doremi',
    nome: 'Daybed Biarritz em Carvalho Americano',
    tipo: 'Daybed Autoral',
    estilo: 'Versátil',
    dimensoes: '70 x 87 x 193 (AxLxP)',
    material: 'Carvalho Maciço',
    preco: 21500.00,
    imagem: '/imagens/cama-solteiro-bicama-1.jpg',
    galeria: [
      '/imagens/cama-solteiro-bicama-1.jpg',
      '/imagens/cama-solteiro-bicama-2.jpg',
      '/imagens/cama-solteiro-bicama-3.jpg',
    ],
    descricao: 'Peça híbrida concebida para livings multifuncionais e suítes de hóspedes contemporâneas. Estrutura escultural em carvalho americano maciço com módulo inferior retrátil emborrachado de deslize suave.',
    destaque: true,
    disponivel: true,
  },
  {
    id: 'cama-casal-simples',
    legacyId: 'cama3',
    categoria: 'doremi',
    nome: 'Cama Nara em Nogueira Natural',
    tipo: 'Cama de Casal Master',
    estilo: 'Arquitetural',
    dimensoes: '108 x 154 x 210 (AxLxP)',
    material: 'Nogueira Maciça Nobre',
    preco: 24800.00,
    imagem: '/imagens/cama-casal-simples-1.jpg',
    galeria: [
      '/imagens/cama-casal-simples-1.jpg',
      '/imagens/cama-casal-simples-2.jpg',
      '/imagens/cama-casal-simples-3.jpg',
    ],
    descricao: 'Imponência sóbria esculpida em nogueira maciça nobre. Cabeceira ripada de marcenaria milimétrica e proporções baixas que convidam ao descanso com circulação de ar otimizada e veios contínuos da madeira.',
    destaque: false,
    disponivel: true,
  },
  {
    id: 'cama-casal-gavetas',
    legacyId: 'cama4',
    categoria: 'doremi',
    nome: 'Cama Plataforma Linear com Gaveteiros Ocultos',
    tipo: 'Cama com Gaveteiros',
    estilo: 'Linear Oculto',
    dimensoes: '48 x 145 x 195 (AxLxP)',
    material: 'Marcenaria Artesanal',
    preco: 29800.00,
    imagem: '/imagens/cama-casal-gavetas-1.jpg',
    galeria: [
      '/imagens/cama-casal-gavetas-1.jpg',
      '/imagens/cama-casal-gavetas-2.jpg',
      '/imagens/cama-casal-gavetas-3.jpg',
    ],
    descricao: 'Solução arquitetônica contínua sob medida em marcenaria artesanal. Quatro amplos gaveteiros perfeitamente integrados à base com amortecimento alemão Blum® e encaixes chanfrados sem puxadores aparentes.',
    destaque: true,
    disponivel: true,
  },

  // ==========================================
  // SEÇÃO SOLFÁ - SOFÁS & ESTOFADOS DE LUXO
  // ==========================================
  {
    id: 'sofa-2lug-retratil',
    legacyId: 'sofa1',
    categoria: 'solfa',
    nome: 'Sofá Modular Ravello com Chaise Longue',
    tipo: 'Sofá Modular',
    lugares: 2,
    tecido: 'Linho Puro Cru',
    material: 'Linho Puro Cru',
    dimensoes: '95 x 87-126 x 180 (AxPxL)',
    preco: 26500.00,
    imagem: '/imagens/sofa-2lug-retratil-1.jpg',
    galeria: [
      '/imagens/sofa-2lug-retratil-1.jpg',
      '/imagens/sofa-2lug-retratil-2.jpg',
      '/imagens/sofa-2lug-retratil-3.jpg',
    ],
    descricao: 'Proporções generosas para livings de arquitetura contemporânea. Revestimento em linho puro cru importado, com chaise longue acolhedora, extensão telescópica oculta e assentos com molas ensacadas.',
    destaque: false,
    disponivel: true,
  },
  {
    id: 'sofa-cama-2lug',
    legacyId: 'sofa2',
    categoria: 'solfa',
    nome: 'Sofá-Cama Arquitetural Milano',
    tipo: 'Sofá-Cama de Luxo',
    lugares: 2,
    tecido: 'Linho Italiano & Madeira',
    material: 'Linho Italiano & Madeira',
    dimensoes: '95 x 97-150 x 180 (AxPxL)',
    preco: 34800.00,
    imagem: '/imagens/sofa-cama-2lug-1.jpg',
    galeria: [
      '/imagens/sofa-cama-2lug-1.jpg',
      '/imagens/sofa-cama-2lug-2.jpg',
      '/imagens/sofa-cama-2lug-3.jpg',
    ],
    descricao: 'Mecanismo patenteado de articulação contínua com estrutura interna em aço carbono fosco e detalhes em madeira nobre. Converte-se em colchão de casal com espuma viscoelástica sem deformação dos estofos.',
    destaque: true,
    disponivel: true,
  },
  {
    id: 'sofa-3lug-retratil',
    legacyId: 'sofa3',
    categoria: 'solfa',
    nome: 'Sofá Lounge Bergamo com Assentos Deslizantes',
    tipo: 'Lounge Retrátil',
    lugares: 3,
    tecido: 'Bouclé Texturizado',
    material: 'Bouclé Texturizado',
    dimensoes: '108 x 95-155 x 200 (AxPxL)',
    preco: 31500.00,
    imagem: '/imagens/sofa-3lug-retratil-1.jpg',
    galeria: [
      '/imagens/sofa-3lug-retratil-1.jpg',
      '/imagens/sofa-3lug-retratil-2.jpg',
      '/imagens/sofa-3lug-retratil-3.jpg',
    ],
    descricao: 'Imersão de conforto supremo em bouclé texturizado de trama rica. Encostos reclináveis em múltiplos estágios milimétricos, assentos com extensão deslizante suave e almofadas de fibra virgem siliconada hipoalergênica.',
    destaque: true,
    disponivel: true,
  },
  {
    id: 'sofa-3lug-retro',
    legacyId: 'sofa4',
    categoria: 'solfa',
    nome: 'Sofá Escultural Visconti em Veludo Esmeralda',
    tipo: 'Design Autoral Retrô',
    lugares: 3,
    tecido: 'Veludo Nobre Italiano',
    material: 'Veludo Nobre Italiano',
    dimensoes: '90 x 76 x 196 (AxPxL)',
    preco: 27800.00,
    imagem: '/imagens/sofa-3lug-retro-1.jpg',
    galeria: [
      '/imagens/sofa-3lug-retro-1.jpg',
      '/imagens/sofa-3lug-retro-2.jpg',
      '/imagens/sofa-3lug-retro-3.jpg',
    ],
    descricao: 'A peça icônica que celebra a tradição e o requinte da marca. Revestido em suntuoso veludo nobre italiano verde-esmeralda com canelado artesanal profundo, pés torneados em madeira maciça e almofada mostarda.',
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
    category: 'Fibra Natural Nobre',
    image: '/imagens/materia-prima-1.jpg',
    description: 'Fibras vegetais puras com textura rústica e refinada. Proporciona frescor térmico no verão e aconchego acolhedor no inverno.',
    tactile: 'Toque natural, encorpado e altamente respirável.',
  },
  {
    id: 'veludo',
    name: 'Veludo Nobre Italiano',
    category: 'Acabamento Acetinado',
    image: '/imagens/materia-prima-3.jpg',
    description: 'Estrutura aveludada de alta densidade que reflete a luz com elegância discreta. É a assinatura de nobreza do nosso Sofá Retrô.',
    tactile: 'Toque extremamente aveludado, suave e imersivo.',
  },
  {
    id: 'boucle',
    name: 'Bouclé Texturizado',
    category: 'Trama de Alta Costura',
    image: '/imagens/hero-rebranding-1.jpg',
    description: 'Fiação nobre entrelaçada com nós tridimensionais que cria uma superfície escultural, encorpada e de extremo aconchego tátil e visual.',
    tactile: 'Sensação tátil rica com relevo tridimensional e visual arquitetônico acolhedor.',
  },
  {
    id: 'madeira',
    name: 'Madeira Maciça Certificada',
    category: 'Marcenaria de Precisão',
    image: '/imagens/hero-rebranding-4.jpg',
    description: 'Madeiras selecionadas de manejo sustentável com encaixes manuais e tratamento fosco com óleos naturais repelentes de umidade.',
    tactile: 'Acabamento acetinado térmico com encaixes rabo-de-andorinha visíveis.',
  },
];

// ==========================================
// LOOKBOOK (AMBIENTES DE ARQUITETURA)
// ==========================================
export const LOOKBOOK_DATA = [
  {
    id: 'lookbook-living',
    title: 'Living Contemporâneo',
    subtitle: 'Composição com o Sofá Escultural Visconti em Veludo Esmeralda',
    ambient: 'Sala de Estar Integrada',
    ambiente: 'Residência Joá — Curadoria DóRéMi',
    especificacoes: 'Nogueira maciça, linho belga cru, latão escovado',
    description: 'Uma atmosfera de contemplação com luz natural farta, pisos quentes e elementos em cerâmica orgânica que valorizam o estofado em veludo verde.',
    image: '/imagens/lookbook-2.jpg',
    productLink: 'sofa-3lug-retro',
  },
  {
    id: 'lookbook-suite',
    title: 'Suíte Serenidade',
    subtitle: 'Composição com a Cama Nara em Nogueira Natural',
    ambient: 'Quarto de Casal Master',
    ambiente: 'Residência Joá — Curadoria DóRéMi',
    especificacoes: 'Nogueira natural maciça, linho puro cru, encaixes japoneses ocultos',
    description: 'O silêncio do design atemporal. Linhas horizontais baixas que convidam ao descanso com enxoval em algodão egípcio e cortinas de gaze de linho.',
    image: '/imagens/lookbook-1.jpg',
    productLink: 'cama-casal-simples',
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
