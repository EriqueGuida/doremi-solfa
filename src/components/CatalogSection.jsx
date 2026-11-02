import React, { useState, useMemo, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import {
  Search,
  X,
  ArrowUpDown,
  SlidersHorizontal,
  RotateCcw,
} from 'lucide-react';

const FILTER_CHIPS = [
  { id: 'all', label: 'Todas as Peças' },
  { id: 'leitos-camas', label: 'Leitos & Camas Plataforma' },
  { id: 'daybeds-marcenaria', label: 'Daybeds & Marcenaria Nobre' },
  { id: 'sofas-modulares', label: 'Sofás Autorais & Modulares' },
  { id: 'veludo-esmeralda', label: 'Estofados em Veludo Esmeralda' },
];

export default function CatalogSection({
  onSelectProduct,
  activeFilter: controlledFilter,
  onFilterChange,
}) {
  const [internalFilter, setInternalFilter] = useState('all');
  const activeFilter = controlledFilter !== undefined ? controlledFilter : internalFilter;
  const setActiveFilter = (newFilter) => {
    if (onFilterChange) {
      onFilterChange(newFilter);
    } else {
      setInternalFilter(newFilter);
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Sincroniza com hash da URL (#camas ou #sofas)
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#camas') {
        setActiveFilter('camas');
      } else if (hash === '#sofas') {
        setActiveFilter('sofas');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Reset de todos os filtros
  const handleResetFilters = () => {
    setActiveFilter('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  const isFiltered = activeFilter !== 'all' || searchQuery.trim() !== '' || sortBy !== 'featured';

  // Processamento e Filtragem dos Produtos
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Filtro por Chip Padronizado com as Coleções do Acervo
    if (activeFilter === 'leitos-camas' || activeFilter === 'camas') {
      result = result.filter(
        (p) =>
          p.categoria === 'doremi' &&
          (activeFilter === 'camas' || p.id !== 'cama-solteiro-bicama')
      );
    } else if (activeFilter === 'daybeds-marcenaria') {
      result = result.filter(
        (p) =>
          p.id === 'cama-solteiro-bicama' ||
          p.id === 'cama-casal-gavetas' ||
          (p.material && p.material.toLowerCase().includes('marcenaria')) ||
          (p.material && p.material.toLowerCase().includes('carvalho'))
      );
    } else if (activeFilter === 'sofas-modulares' || activeFilter === 'sofas') {
      result = result.filter((p) => p.categoria === 'solfa');
    } else if (activeFilter === 'veludo-esmeralda' || activeFilter === 'veludo') {
      result = result.filter(
        (p) =>
          p.id === 'sofa-3lug-retro' ||
          (p.tecido && p.tecido.toLowerCase().includes('veludo')) ||
          (p.material && p.material.toLowerCase().includes('veludo'))
      );
    }

    // 2. Busca em Tempo Real
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((p) => {
        const matchName = p.nome.toLowerCase().includes(q);
        const matchDesc = p.descricao && p.descricao.toLowerCase().includes(q);
        const matchTecido = p.tecido && p.tecido.toLowerCase().includes(q);
        const matchTipo = p.tipo && p.tipo.toLowerCase().includes(q);
        const matchMaterial = p.material && p.material.toLowerCase().includes(q);
        const matchDim = p.dimensoes && p.dimensoes.toLowerCase().includes(q);

        // Termos especiais padronizados com as coleções
        const matchCategory =
          (q.includes('cama') && p.categoria === 'doremi') ||
          (q.includes('leito') && p.categoria === 'doremi') ||
          (q.includes('daybed') && (p.id === 'cama-solteiro-bicama' || p.id === 'cama-casal-gavetas')) ||
          (q.includes('marcenaria') && (p.categoria === 'doremi' || (p.material && p.material.toLowerCase().includes('marcenaria')))) ||
          (q.includes('sof') && p.categoria === 'solfa') ||
          (q.includes('modular') && p.categoria === 'solfa') ||
          (q.includes('veludo') && (p.tecido && p.tecido.toLowerCase().includes('veludo'))) ||
          (q.includes('esmeralda') && p.id === 'sofa-3lug-retro') ||
          (q.includes('doremi') && p.categoria === 'doremi') ||
          (q.includes('solfa') && p.categoria === 'solfa');

        return (
          matchName ||
          matchDesc ||
          matchTecido ||
          matchTipo ||
          matchMaterial ||
          matchDim ||
          matchCategory
        );
      });
    }

    // 3. Ordenação por Preço ou Nome
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.preco - b.preco);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.preco - a.preco);
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
    }

    return result;
  }, [activeFilter, searchQuery, sortBy]);

  return (
    <section id="catalogo" className="py-20 sm:py-28 w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
      {/* Âncoras transparentes para links diretos de Camas e Sofás */}
      <div id="camas" className="scroll-mt-32" />
      <div id="sofas" className="scroll-mt-32" />

      {/* Cabeçalho Editorial da Coleção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-brand-border gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Coleção Autoral & Peças Exclusivas</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
            Móveis que Definem Ambientes
          </h2>

          <p className="text-brand-textMuted text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Camas em madeira maciça e sofás com estofamento artesanal de alto padrão. Filtre por tipologia, tecido ou ordene pela faixa de preço desejada.
          </p>
        </div>

        {/* Contador Geral */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-textMuted bg-brand-surface border border-brand-border px-4 py-2.5 rounded-xl w-fit shadow-xs">
          <span>Total no Acervo:</span>
          <span className="font-bold text-brand-dark">8 Modelos Icônicos</span>
        </div>
      </div>

      {/* Barra de Controles: Busca + Ordenação */}
      <div className="bg-brand-surface border border-brand-border rounded-2xl p-4 sm:p-6 mb-8 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          {/* Campo de Busca em Tempo Real */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-textMuted">
              <Search className="w-4 h-4 text-brand-primary" />
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por leitos, daybeds, sofás modulares, linho, veludo esmeralda..."
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-dark placeholder-brand-textMuted/60 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-brand-textMuted hover:text-brand-dark transition-colors"
                title="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Seletor de Ordenação */}
          <div className="flex items-center gap-2 sm:w-auto">
            <label
              htmlFor="sort-select"
              className="text-xs font-bold uppercase tracking-wider text-brand-textMuted flex items-center gap-1.5 whitespace-nowrap hidden sm:flex"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-brand-highlight" />
              <span>Ordenar:</span>
            </label>

            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto py-3 px-4 rounded-xl border border-brand-border bg-brand-bg text-brand-dark text-sm font-semibold focus:outline-none focus:border-brand-primary cursor-pointer transition-all"
            >
              <option value="featured">Curadoria DOReMI SOLFÁ</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
              <option value="name-asc">Ordem Alfabética (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Filtros Editoriais Limpos (Sem Contadores, Microinteração Suave) */}
        <div className="pt-2 border-t border-brand-border/60">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {FILTER_CHIPS.map((chip) => {
              const isActive = activeFilter === chip.id;

              return (
                <button
                  key={chip.id}
                  onClick={() => setActiveFilter(chip.id)}
                  className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-dark text-white border border-brand-dark font-medium shadow-sm scale-[1.02]'
                      : 'bg-transparent text-brand-textMuted hover:text-brand-dark border border-brand-border hover:border-brand-dark/40 font-normal hover:bg-brand-muted/40 hover:scale-[1.01]'
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback de Resultados e Botão Reset */}
        <div className="flex items-center justify-between text-xs text-brand-textMuted pt-1">
          <div>
            Exibindo <strong className="text-brand-dark font-bold">{filteredProducts.length}</strong> de 8 peças
            {searchQuery && (
              <span> para o termo <strong className="text-brand-highlight">"{searchQuery}"</strong></span>
            )}
          </div>

          {isFiltered && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 font-bold text-brand-highlight hover:text-brand-primary transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Limpar Filtros</span>
            </button>
          )}
        </div>

      </div>

      {/* Grid de Produtos ou Estado Vazio */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        <div className="bg-brand-surface rounded-3xl border border-dashed border-brand-border p-12 text-center max-w-xl mx-auto my-8">
          <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary mx-auto flex items-center justify-center mb-4">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-brand-dark mb-2">
            Nenhuma peça encontrada
          </h3>
          <p className="text-xs sm:text-sm text-brand-textMuted mb-6 leading-relaxed">
            Não encontramos nenhum móvel que corresponda aos filtros e termos pesquisados. Tente buscar por outro nome ou tecido.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl shadow-md transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ver Todas as Peças do Acervo</span>
          </button>
        </div>
      )}

    </section>
  );
}
