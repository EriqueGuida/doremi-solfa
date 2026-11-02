/**
 * Modelagem de Dados - DOReMI SOLFÁ Móveis
 * Migração das variáveis, tabelas e arrays do script.js legado (AD1/AD2 UFF)
 * para uma estrutura de dados moderna, tipada e extensível.
 */

export const CATEGORIES = {
  DOREMI: {
    id: 'doremi',
    name: 'Seção DOReMI',
    subtitle: 'Camas e Bicamas',
    description: 'Conforto e qualidade em madeira para noites de sono perfeitas.',
  },
  SOLFA: {
    id: 'solfa',
    name: 'Seção SOLFÁ',
    subtitle: 'Sofás e Sofás-Cama',
    description: 'Design e aconchego para a sala de estar com tecidos selecionados.',
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
    imagem: '/imagens/CamaSolt_150.jpg',
    descricao: 'Cama de solteiro clássica em madeira maciça com design atemporal, perfeita para quartos juvenis e quartos de hóspedes.',
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
    imagem: '/imagens/BicamaSolteiro_150.jpg',
    descricao: 'Praticidade e economia de espaço. Acompanha cama auxiliar inferior retrátil com rodízios de alta resistência.',
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
    imagem: '/imagens/CamaCasalSImples_150.jpg',
    descricao: 'Estrutura robusta e reforçada para colchões de casal padrão. Cabeceira minimalista que combina com qualquer decoração.',
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
    imagem: '/imagens/CamaCasalGavetas_150.jpg',
    descricao: 'Excelente aproveitamento de espaço interno com gaveteiros laterais embutidos para roupas de cama e organizadores.',
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
    imagem: '/imagens/Sofa2lugRetratil150.png',
    descricao: 'Assentos retráteis com espuma D-28 e revestimento nobre em linho cru. Ideal para ambientes compactos e acolhedores.',
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
    imagem: '/imagens/SofaCama2lug150.png',
    descricao: 'Versatilidade máxima. Transforma-se facilmente em uma cama confortável com mecanismo articulável e revestimento em linho.',
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
    imagem: '/imagens/Sofa3lugRetratil150.png',
    descricao: 'Amplo espaço e extremo conforto com encosto reclinável e assentos extensíveis. Revestimento em tecido suede de toque suave.',
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
    imagem: '/imagens/Sofa3lugRetro150.png',
    descricao: 'Inspiração vintage com pés palito em madeira e estofado elegante em veludo acetinado. Charme atemporal para a sua sala.',
    destaque: false,
    disponivel: true,
  },
];

/**
 * Função utilitária para formatação de moeda brasileira (R$)
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Busca produto por ID
 */
export function getProductById(id) {
  return products.find((p) => p.id === id || p.legacyId === id);
}

/**
 * Busca produtos por categoria ('doremi' | 'solfa')
 */
export function getProductsByCategory(categoria) {
  return products.filter((p) => p.categoria === categoria);
}
