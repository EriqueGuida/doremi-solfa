# DOReMI SOLFÁ — Atelier de Mobiliário Autoral & E-Commerce

[![Status](https://img.shields.io/badge/Status-Projeto%20Conclu%C3%ADdo-brightgreen.svg)](#-status-e-conclusão-do-projeto)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Origem Acadêmica](https://img.shields.io/badge/Origem-UFF%20%2F%20CEDERJ-005BA2.svg)](legacy/README.md)

> **Deploy Oficial em Produção:** Acesse a experiência completa em [**https://doremi-solfa.vercel.app/**](https://doremi-solfa.vercel.app/)

> **Da base acadêmica ao padrão de mercado**: Aplicação web desenvolvida originalmente como avaliação prática (AD1 e AD2) na disciplina de **Construção de Páginas Web** da **Universidade Federal Fluminense (UFF / CEDERJ)** e progressivamente refatorada para **React, Vite e Tailwind CSS**, incorporando os padrões de Engenharia de Software do **SENAI (Técnico em Desenvolvimento de Sistemas)** e culminando em um posicionamento de **alta curadoria e posicionamento editorial de luxo (*Quiet Luxury*)**.

---

## Status e Conclusão do Projeto

> [!NOTE]
> **PROJETO CONCLUÍDO & ENTREGUE**: O escopo planejado para este projeto foi **100% finalizado**. O objetivo central deste repositório foi comprovar conhecimentos sólidos e práticos em desenvolvimento Front-End moderno (componentização, consumo de APIs REST assíncronas, reatividade, persistência local e UI/UX responsiva), servindo como evidência tangível de domínio técnico interdisciplinar no portfólio.
>
> **Deploy em Produção na Vercel:** [https://doremi-solfa.vercel.app/](https://doremi-solfa.vercel.app/)
>
> Para a documentação técnica detalhada, diagramas de arquitetura e casos de uso, consulte a [**Especificação Técnica Completa (specification.md)**](specification.md).

---

## Contexto, Propósito & Storytelling no Portfólio

Este projeto foi concebido para documentar a jornada prática e técnica de evolução de um software, evidenciando competências valorizadas pelo mercado de tecnologia:

1. **Gestão e Respeito a Código Legado:** Capacidade de ler, interpretar e isolar um código acadêmico original escrito em HTML5/CSS3/Vanilla JS sem perda de integridade histórica (100% preservado e funcional em [`/legacy`](legacy/README.md)).
2. **Modernização Arquitetural Contínua:** Transição de scripts imperativos com acoplamento rígido no DOM para uma **Single Page Application (SPA)** orientada a componentes, reatividade declarativa e gerenciamento de estado global com React Context API.
3. **Refinamento de Produto e UI/UX de Alto Padrão:** Evolução de um simples e-commerce transacional com carrinho estático para uma **experiência digital boutique** de móveis sob encomenda, com atendimento VIP via Concierge, geração de protocolos de reserva e programa exclusivo para arquitetos (*Acesso Trade*).
4. **Boas Práticas de Engenharia:** Versionamento semântico guiado por Git Tags (`v0.0-legado`, `v1.0`, `v2.0` e `v3.0`), commits padronizados (Conventional Commits), máscaras dinâmicas de input, tratamento resiliente de erros em APIs externas (ViaCEP) e persistência síncrona com `localStorage`.

---

### Engenharia Assistida por IA com Google Antigravity
Para acelerar a prototipagem, explorar novas abordagens de interface e superar os vícios estruturais do código acadêmico original da faculdade, utilizei inteligência artificial como um **"Tech Lead / Pair Programmer Virtual"** — especificamente o **Google Antigravity**.

A condução do desenvolvimento não foi passiva nem baseada em geração desassistida de código: estabelecemos um **ciclo rigoroso de engenharia estruturado em Milestones incrementais**, no qual cada transição de arquitetura (do legado imperativo até a curadoria de luxo) foi auditada, compilada com Vite, testada no navegador e versionada com **Git Tags semânticas** (`v0.0-legado`, `v1.0`, `v2.0` e `v3.0`) antes de avançar para a etapa seguinte.

### Transparência Técnica: Base Consolidada vs. Conhecimentos Acelerados

* **O que faz parte da minha base de compreensão (Sala de Aula na UFF & SENAI):**
  * **Fundamentos da Web & Semântica:** Estruturação em HTML5 (`<header>`, `<nav>`, `<section>`, `<article>`, `<fieldset>`, `<address>`), hierarquia semântica de nós e boas práticas de acessibilidade estrutural.
  * **Estilização com CSS3:** Box model, alinhamentos, seletores avançados, especificidade, estilização de formulários e layouts tabulares.
  * **Lógica em JavaScript Puro (Vanilla JS):** Manipulação de DOM nativa (`document.getElementById`), ouvintes de eventos (`click`, `change`, `reset`), parsing numérico (`parseFloat`), acumulação de valores e validações lógicas condicionais (conforme 100% preservado no código original em [`/legacy`](legacy/README.md)).
  * **Padrões de Engenharia de Software:** Versionamento com Git, commits semânticos (Conventional Commits), isolamento de código legado e documentação técnica padronizada.

* **O que foi acelerado e aprofundado com auxílio do Google Antigravity (Em estudo contínuo na grade):**
  * **Ecossistema React 18 & Tooling Moderno:** Configuração de bundling e compilação ágil com **Vite 6**, componentização declarativa, ciclo de vida e Hooks fundamentais (`useState`, `useEffect`, `useMemo`).
  * **Arquitetura de Estado Centralizado:** Implementação do padrão *Single Source of Truth* utilizando **React Context API** (`createContext`, `useContext`) encapsulado no custom hook `useCart()`, gerenciando carrinho, endereço e frete de forma desacoplada.
  * **Integração Assíncrona & APIs REST:** Consumo resiliente do WebService do **ViaCEP** com `fetch`, controle de estados de carregamento (`isCepLoading`), tratamento de erros de rede/CEPs inexistentes, sanitização por expressão regular e fallback editável.
  * **Design System & Tailwind CSS:** Definição de tokens semânticos de cores, tipografia editorial (*Cormorant Garamond* e *Plus Jakarta Sans*), utilitários responsivos e efeitos translúcidos (`backdrop-blur`).
  * **UX de Curadoria & Quiet Luxury:** Substituição do formulário de checkout estático por uma gaveta deslizante (*Slide-Over*), geração dinâmica de protocolo de encomenda (`DS-YYYY-XXXX`) e montagem de *deep link* formatado para atendimento VIP via WhatsApp.

* **Escopo Deliberado (Sem Docker, SSR ou Testes Automatizados E2E):**
  * Como este projeto cumpre rigorosamente o objetivo de validar conhecimentos práticos de Front-End para um perfil prioritariamente focado em Back-End, optei conscientemente por **não inflar a complexidade da infraestrutura** com Docker, frameworks fullstack (Next.js), gerenciadores como Redux ou suítes de testes pesadas (Cypress/Playwright), declarando o projeto como **estável e formalmente concluído na versão v3.0**.

---

## Matriz Comparativa: Da UFF ao Padrão de Mercado

| Pilar de Engenharia | Versão 0.0 (Legado UFF) | Versão 1.0 (React Base) | Versão 2.0 (E-Commerce) | Versão 3.0 (Atelier de Luxo Atual) |
| :--- | :--- | :--- | :--- | :--- |
| **Arquitetura** | Páginas HTML soltas e estáticas | SPA componentizada em React 18 | SPA com seções institucionais expandidas | SPA Editorial com estética *Quiet Luxury* e Slide-Over |
| **Estilização** | CSS3 clássico com tabelas/caixas | Tailwind CSS utilitário com Design System | Tailwind com paleta de marca aprofundada | Tipografia *Cormorant Garamond*, *backdrop-blur* e grid editorial |
| **Catálogo** | Pop-ups via `window.open` e tabelas | Cards interativos e modal acessível | Busca em tempo real e filtros horizontais | Curadoria de 8 peças autorais mapeadas com `legacyId` e fotos HD |
| **Seleção & Pedidos** | Empilhamento de texto em `<textarea>` | Carrinho reativo com `CartContext` | Carrinho persistido com cálculo de fretes | Gaveta *Slide-Over* de Curadoria com Reserva Técnica |
| **Checkout / Contato** | Formulário acadêmico estático | Formulário de pedido com cartão fictício | Formulário completo com CEP e validações | Protocolo único (`DS-YYYY-XXXX`) e envio direto ao WhatsApp VIP |
| **Consumo de APIs** | Nenhuma | Nenhuma | Integração assíncrona ao ViaCEP com loading | ViaCEP integrado com fallback manual e máscaras de CEP/Tel |
| **Cadastro** | `alert()` nativo de inconsistência | Modal com feedback visual dinâmico | Modal com validações visuais não-intrusivas | Modal *Acesso Privée* com suporte a arquitetos (*Acesso Trade*) |
| **Responsividade** | Foco em desktop clássico | Totalmente responsivo para mobile | Widescreen otimizado com grid adaptativo | Experiência fluida para mobile, tablets e telas ultrawide |

---

## Roadmap de Milestones & Tags Git

- [x] **Milestone 0: Preparação da Estrutura & Isolamento do Legado (`tag: v0.0-legado`)**
  - Isolamento integral dos arquivos acadêmicos na pasta [`/legacy`](legacy/README.md) mantendo todas as páginas e assets funcionais.
  - Setup do ferramental moderno: **Vite 6**, **React 18**, **Tailwind CSS 3** e **Lucide React**.
  - Configuração do `.gitignore` e estruturação da documentação inicial.

- [x] **Milestone 1: Identidade Visual, Design System & Modelagem de Dados**
  - Criação do Brand Kit oficial e guia de estilo interativo em [`style.html`](style.html).
  - Configuração dos tokens semânticos: Verde-Floresta (`#1F563E`), Terracota (`#B34229`), Mostarda (`#DFA034`), Off-White (`#FAF8F5`) e Carvão Escuro (`#1C2521`).
  - Modelagem do catálogo original (os 8 produtos avaliados na UFF: 4 camas e 4 sofás) em [`src/data/products.js`](src/data/products.js) com especificações detalhadas e função utilitária `formatCurrency`.

- [x] **Milestone 2: Reconstrução Funcional com React (`tag: v1.0`)**
  - Implementação da `Navbar` responsiva e seções **DOReMI (Camas)** e **SOLFÁ (Sofás)**.
  - Criação do [`ProductModal.jsx`](src/components/ProductModal.jsx) em substituição às janelas pop-up legadas.
  - Criação do [`CartContext.jsx`](src/context/CartContext.jsx) e do sistema de notificações visuais não-intrusivas com [`Toast.jsx`](src/components/Toast.jsx).

- [x] **Milestone 3: Expansão para E-commerce Profissional (`tag: v2.0`)**
  - Integração assíncrona com a API pública do **ViaCEP** com busca automática e máscara de entrada.
  - Persistência síncrona do carrinho e dados de envio no `localStorage`.
  - Sistema de busca em tempo real com filtros por categoria e ordenação por valor e nome em [`CatalogSection.jsx`](src/components/CatalogSection.jsx).
  - Adição de seções conceituais: O Fazer Artesanal ([`AtelierStory.jsx`](src/components/AtelierStory.jsx)), Guia de Matérias-Primas ([`MaterialsGuide.jsx`](src/components/MaterialsGuide.jsx)), Ambientes Inspiradores ([`Lookbook.jsx`](src/components/Lookbook.jsx)) e barra de compromissos ([`LuxuryBar.jsx`](src/components/LuxuryBar.jsx)).

- [x] **Milestone 4: Posicionamento Editorial de Luxo & Curadoria Privée (`tag: v3.0`)**
  - Elevação da identidade visual para o segmento de alto padrão (*Quiet Luxury*): tipografia editorial com *Cormorant Garamond* e *Plus Jakarta Sans*, espaçamento generoso e cabeçalho com efeito de vidro translúcido (`backdrop-blur`).
  - Substituição do checkout tradicional de e-commerce pelo fluxo de **Reserva Técnica de Curadoria** em gaveta deslizante ([`CartDrawer.jsx`](src/components/CartDrawer.jsx)), com geração automática de protocolo exclusivo (`DS-YYYY-XXXX`).
  - Integração via deep link customizado com o **WhatsApp do Concierge VIP**, transmitindo o resumo dos itens, localização e finalidade do projeto.
  - Redesenho do formulário de acesso para **Modal de Acesso Privée** ([`RegisterModal.jsx`](src/components/RegisterModal.jsx)), oferecendo opções de conta pessoal e cadastro para profissionais de arquitetura e design de interiores (*Acesso Trade*).
  - Acervo fotográfico de alta resolução em proporções áureas (edge-to-edge 4:3), com galerias interativas por produto e visual monumental no [`Hero.jsx`](src/components/Hero.jsx).

---

## Estrutura Arquitetural do Repositório

```text
Solfa/
├── docs/                             # Documentos acadêmicos oficiais e capturas
│   ├── AD1_WEB_2026_2.pdf            # Enunciado oficial da avaliação UFF/CEDERJ
│   ├── AD2_WEB_2026-2.pdf            # Enunciado com requisitos de JS e DOM da UFF
│   └── screenshots/                  # Evidências visuais da interface original v0.0
├── legacy/                           # Código acadêmico original 100% preservado
│   ├── Cadastro.html                 # Formulário com validações em Vanilla JS
│   ├── camas.html & Doremi.html      # Catálogo com abertura de pop-ups nativos
│   ├── Solfa.html                    # Tabela interativa de sofás
│   ├── Encomendas.html               # Acumulador em <textarea> via DOM
│   ├── script.js                     # Regras imperativas da UFF
│   ├── style.css                     # Folha de estilo original
│   └── README.md                     # Documentação específica da entrega legada
├── public/                           # Ativos estáticos e acervo fotográfico
│   └── imagens/                      # Fotografias em alta resolução de camas e sofás
├── src/                              # Aplicação moderna em React 18
│   ├── components/                   # Componentes modulares e reutilizáveis
│   │   ├── AtelierStory.jsx          # Narrativa do fazer artesanal e marcenaria
│   │   ├── CartDrawer.jsx            # Slide-over de curadoria e reserva técnica
│   │   ├── CatalogSection.jsx        # Catálogo com busca, filtros e ordenação
│   │   ├── ConciergeButton.jsx       # Botão flutuante para contato direto
│   │   ├── Footer.jsx                # Rodapé editorial com links institucionais
│   │   ├── Hero.jsx                  # Banner monumental com manifesto de marca
│   │   ├── Lookbook.jsx              # Galeria de ambientes inspiradores
│   │   ├── LuxuryBar.jsx             # Barra de serviços de alto padrão (Luva Branca)
│   │   ├── MaterialsGuide.jsx        # Guia tátil de tecidos e madeiras maciças
│   │   ├── Navbar.jsx                # Cabeçalho responsivo translúcido
│   │   ├── ProductCard.jsx           # Card editorial de produto com badges
│   │   ├── ProductModal.jsx          # Modal com galeria de fotos e especificações
│   │   ├── RegisterModal.jsx         # Modal de Acesso Privée e Trade para arquitetos
│   │   └── Toast.jsx                 # Sistema de feedback flutuante não-intrusivo
│   ├── context/                      # Gerenciamento de estado global
│   │   └── CartContext.jsx           # Provider com ViaCEP, localStorage e carrinho
│   ├── data/                         # Camada de dados e regras de negócio
│   │   └── products.js               # Modelagem dos 8 produtos com mapeamento UFF
│   ├── App.jsx                       # Orquestrador principal da aplicação
│   ├── index.css                     # Importações do Tailwind CSS e fontes
│   └── main.jsx                      # Ponto de entrada do React
├── index.html                        # Template HTML com meta tags e Google Fonts
├── style.html                        # Manual da marca interativo e Brand Kit
├── tailwind.config.js                # Tokens tipográficos e paleta de cores
├── vite.config.js                    # Configuração de build do Vite
└── package.json                      # Dependências e scripts do projeto
```

---

## Tecnologias Utilizadas

* **Linguagem & Framework:** [React 18.3](https://react.dev/) com JavaScript moderno (ESModules).
* **Build Tool:** [Vite 6](https://vitejs.dev/) para compilação instantânea e Hot Module Replacement (HMR).
* **Estilização & Design System:** [Tailwind CSS 3.4](https://tailwindcss.com/) e [PostCSS](https://postcss.org/).
* **Iconografia:** [Lucide React](https://lucide.dev/).
* **Tipografia:** Google Fonts ([*Cormorant Garamond*](https://fonts.google.com/specimen/Cormorant+Garamond) e [*Plus Jakarta Sans*](https://fonts.google.com/specimen/Plus+Jakarta+Sans)).
* **APIs Externas:** [ViaCEP WebService](https://viacep.com.br/) para preenchimento automático de endereços.
* **Hospedagem & CI/CD:** [Vercel](https://vercel.com/) com deploy contínuo em produção ([doremi-solfa.vercel.app](https://doremi-solfa.vercel.app/)).

---

## Como Executar o Projeto Localmente

> [!TIP]
> **Acesso Direto Online:** Se preferir experimentar a aplicação em tempo real sem configurar o ambiente local, acesse a versão em produção: [**https://doremi-solfa.vercel.app/**](https://doremi-solfa.vercel.app/)

### Pré-requisitos
* [Node.js](https://nodejs.org/) versão 18.0 ou superior instalada.
* Gerenciador de pacotes `npm`.

### Passo a Passo

```bash
# 1. Clonar o repositório
git clone https://github.com/EriqueGuida/Solfa.git

# 2. Acessar o diretório do projeto
cd Solfa

# 3. Instalar as dependências
npm install

# 4. Iniciar o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no seu navegador para visualizar a aplicação.

### Compilação para Produção

```bash
# Gera o build estático otimizado na pasta /dist
npm run build

# Visualiza localmente o build de produção
npm run preview
```
