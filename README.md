# HABIT - Layout Responsivo

Este projeto implementa o frontend de uma página web com foco em conteúdo e navegação, utilizando HTML, CSS e JavaScript. Pode ser acessado [aqui](https://ricciow.github.io/Mobile/)

---

💻 Lista das Telas Implementadas
As seguintes telas (arquivos HTML) foram implementadas no projeto:

Página Inicial (index.html): Tela principal com apresentação do site, categorias populares e lista de posts/artigos.

Página de Posts/Artigos (posts.html): Tela dedicada à listagem de posts.

Página de Login (login.html): Formulário para acesso de usuários, incluindo opção de login social (Google) e links para registro e recuperação de senha.

Página de Cadastro (register.html): Formulário para criação de uma nova conta de usuário.

Página de Newsletter (newsletter.html): Formulário dedicado à assinatura da newsletter do site.

Páginas de Administração: Telas de gerenciamento com menu lateral, painéis de métricas (admin-cards), e área de criação/gestão.

🎨 Decisões de Layout e Design
O projeto adota uma abordagem Mobile-First e utiliza CSS Grid e Flexbox para criar um layout responsivo.

Layout Estrutural
CSS Grid no body: A estrutura básica da página (body) é definida com CSS Grid, garantindo que o header, main e footer ocupem suas respectivas áreas e o main se expanda para preencher o espaço restante (grid-template-rows: auto 1fr auto).

Header Fixo: O cabeçalho é sticky (position: sticky), permanecendo visível no topo da página ao rolar.

Páginas de Administração: Utiliza um layout de duas colunas com admin-aside (menu lateral) e o conteúdo principal (admin-main, admin-cards) organizado por CSS Grid.

Sistema de Design (Design System)
Variáveis CSS (:root): Uso de variáveis CSS para padronizar todo o sistema de design:

Cores: Definidas para fundo (--bg-color), texto (--text-black, --text-gray), botões (--button-primary), e bordas.

Tipografia: Tamanhos de fonte escaláveis (--font-title, --font-normal, etc.).

Espaçamento: Espaçamentos padronizados (--sm a --xl) para consistência em margens e paddings.

Componentes Reutilizáveis:

Cards (.card): Estilo unificado para blocos de conteúdo com sombra, bordas arredondadas (0.5rem), e cor de fundo secundária.

Botões: Estilos para botão primário (.button) e botão secundário/inverso (.button_inverse) com feedback visual no hover.

📱 Breakpoints Utilizados
Os breakpoints de responsividade são definidos via Media Queries no arquivo styles.css:

Tipo de Tela	Breakpoint	Descrição da Mudança de Layout
Padrão/Mobile	< 768px	Layout principal do cabeçalho com menu hambúrguer oculto. A barra de busca ocupa a largura total abaixo do logo/nav.
Tablet/Médio	@media (min-width: 768px)	O menu principal (.header_menu) é exibido de forma horizontal. O cabeçalho reorganiza seus elementos em 3 colunas. A lista de categorias populares passa a exibir 5 colunas. Páginas de Login e Newsletter ganham largura máxima para centralização.
Desktop/Largo	@media (min-width: 1120px)	O cabeçalho se reorganiza em uma única linha principal (Logo, Nav, Busca, Perfil). A seção de introdução da Home (.introduction) adota layout horizontal (flex-direction: row) com texto e imagem lado a lado. A página Admin estabelece uma coluna lateral fixa de 250px.

Exportar para as Planilhas
♿ Observações de Acessibilidade (A11Y)
O projeto demonstra considerações de acessibilidade em vários pontos:

Semântica e ARIA: Uso de atributos ARIA para enriquecer a navegação e a compreensão por tecnologias assistivas:

Uso de aria-label para dar nome descritivo a botões (e.g., "Abrir Menu", "Buscar"), links (e.g., "Ir para a home"), e formulários.

Uso de role="search" no formulário de busca para indicar seu propósito.

Uso de aria-expanded e aria-controls no botão do menu hambúrguer para comunicar seu estado e o elemento que ele controla.

Estrutura de Conteúdo: Utilização de tags semânticas como <header>, <main>, <footer>, <nav> e <section>. Seções de conteúdo são associadas a seus títulos usando o atributo aria-labelledby.

Idioma: O atributo lang="pt-BR" é definido na maioria das páginas para garantir a correta pronúncia por leitores de tela.

Contraste e Interação: Estilos de hover em links e botões provêm feedback visual importante para usuários. Na página de administração, links de navegação possuem uma altura mínima de 44px (min-height: 44px), seguindo a recomendação de área de toque para dispositivos móveis.

Formulários: Todos os campos de formulário importantes parecem estar associados a seus respectivos <label> e utilizam o atributo required quando necessário.
