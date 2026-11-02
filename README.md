# DOReMI SOLFÁ Móveis — E-Commerce

> **Da base acadêmica ao padrão de mercado**: Projeto de e-commerce de móveis desenvolvido originalmente como avaliação prática na **Universidade Federal Fluminense (UFF / CEDERJ)** e modernizado com **React, Vite e Tailwind CSS** aplicando os conceitos do **SENAI (Técnico em Desenvolvimento de Sistemas)**.

---

## Contexto & Propósito

Este repositório documenta a evolução completa de uma aplicação web, demonstrando a capacidade de:
1. **Trabalhar com código legado**: analisar e isolar a versão original em Vanilla JS mantendo integridade histórica.
2. **Modernizar para ecossistemas modernos**: refatorar a interface para **React** com componentização, arquitetura limpa e alta responsividade.
3. **Seguir boas práticas de Engenharia de Software**: versionamento semântico com commits padronizados, separação de responsabilidades e documentação técnica para processos seletivos de **estágio em desenvolvimento de software**.

**O código e documentação originais da disciplina estão 100% preservados na pasta [`/legacy`](legacy/README.md).**

---

## Comparativo: Código Legado vs. Aplicação Moderna

| Aspecto | Versão 0.0 (Legado UFF) | Versão Moderna (React) |
| :--- | :--- | :--- |
| **Arquitetura** | Arquivos HTML estáticos e scripts soltos | Single Page Application (SPA) componentizada |
| **Tecnologias** | HTML5, CSS3 e JavaScript Vanilla | React 18, Vite, Tailwind CSS, Lucide Icons |
| **Catálogo** | Tabelas rígidas e janelas pop-up (`window.open`) | Cards interativos, filtros rápidos e Modais acessíveis |
| **Orçamento / Pedidos** | Adição em linha para `<textarea>` | Carrinho de compras interativo com Drawer lateral |
| **Formulários** | `alert()` nativo do navegador para erros | Validações em tempo real e feedback visual limpo |
| **Responsividade** | Focado em desktop clássico | Mobile-First (celulares, tablets e desktops) |

---

## Roadmap de Milestones

- [x] **Milestone 0: Preparação da Estrutura & Isolamento do Legado**
  - Isolamento de todo o código da disciplina para a pasta `/legacy` (código acessível e funcional).
  - Configuração do novo ecossistema moderno com **Vite**, **React**, **Tailwind CSS** e **Lucide React**.
  - Criação da nova documentação de acompanhamento e configuração do `.gitignore`.

- [x] **Milestone 1: Identidade Visual, Design System & Modelagem de Dados**
  - Criação do Brand Kit e manual oficial de marca interativo em [`style.html`](style.html).
  - Definição da paleta oficial extraída das novas logos: Verde-Floresta (`#1F563E`), Terracota (`#B34229`), Mostarda (`#DFA034`), Off-White (`#FAF8F5`) e Carvão Escuro (`#1C2521`).
  - Configuração dos tokens tipográficos no Tailwind e Google Fonts (*Marcellus* para títulos e *Plus Jakarta Sans* para interface).
  - Modelagem do catálogo original (8 produtos da UFF: 4 camas e 4 sofás) em [`src/data/products.js`](src/data/products.js) com especificações e funções utilitárias.

- [x] **Milestone 2: Reconstrução Funcional com React (v1.0)**
  - Criação da `Navbar` responsiva com a nova logo horizontal e menu mobile integrado.
  - Seções **DOReMI (Camas)** e **SOLFÁ (Sofás)** recriadas em cards modernos (`ProductCard`) com fotos e medidas.
  - Substituição dos pop-ups legados (`window.open`) por modal moderno e acessível (`ProductModal`).
  - Substituição do `<textarea>` acumulativo por um **Carrinho de Compras Reativo** (`CartDrawer` e `CartContext`) com cálculo em tempo real.
  - Formulário completo de **Encomendas & Pagamento com Cartão** (`OrderForm`), mantendo todos os campos do trabalho acadêmico.
  - Modal de **Cadastro de Clientes** (`RegisterModal`) com validação de senhas em tempo real e sem `alert()` invasivos.
  - Sistema de notificações visuais não-intrusivas (`Toast`).

- [ ] **Milestone 3: Expansão para E-commerce Profissional (v2.0)**
  - Integração com a API do **ViaCEP** para preenchimento de endereço e cálculo de frete.
  - Persistência dos itens do carrinho no `localStorage`.
  - Sistema de busca em tempo real com debounce e filtros de categoria.
  - Notificações visuais elegantes (*toasts*) e deploy automatizado na nuvem.

---

## Tecnologias Utilizadas

- **Core:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Tipografia:** Google Fonts (*Marcellus*, *Plus Jakarta Sans*)

---

## Como Executar o Projeto Moderno

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Gerenciador de pacotes `npm`

### Passos de Instalação e Execução

```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Iniciar o servidor de desenvolvimento local
npm run dev

# 3. Compilar a versão para produção
npm run build
```
