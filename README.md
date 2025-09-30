# HABIT - Layout Responsivo

Este projeto implementa o frontend de uma página web com foco em conteúdo e navegação, utilizando HTML, CSS e JavaScript. Pode ser acessado [aqui](https://ricciow.github.io/Mobile/)

---

## 🚀 Telas Implementadas

O projeto implementa as seguintes telas:

* **Página Principal (Homepage - `index.html`):** Composta por:
    * **Header:** Cabeçalho com logo, navegação principal (menu hambúrguer para mobile), busca e link de perfil.
    * **Introdução (Hero Section):** Seção de apresentação principal com título, texto e imagem.
    * **Categorias Populares:** Galeria de categorias com imagens e texto.
    * **Todas as Categorias:** Seção com uma lista de todas as categorias.
    * **Postagens em Destaque:** Lista de artigos em destaque com imagem e resumo.
    * **Escolhas do Editor:** Lista de links para artigos selecionados.
    * **Footer:** Rodapé com links de redes sociais e copyright.
* **Página de Login (`login.html`):** Formulário para login de usuários.
* **Página de Cadastro (`register.html`):** Formulário para registro de novos usuários.
---

## 🎨 Decisões de Layout

* **Estrutura Principal:** O layout geral da página é construído com **CSS Grid** (`header`, `main`, `footer`). A estrutura `body` utiliza `grid-template-rows: auto 1fr auto;` para garantir que o `main` ocupe o espaço restante disponível.
* **Alinhamento de Componentes:** **Flexbox** é amplamente utilizado para alinhar os elementos internos de cada seção e garantir flexibilidade, como em `.header_nav`, `.introduction_buttons`, `.popular_categories`, `.socials`, `.login_buttons`, `.admin-cards`, `.admin-subbox-extra-inputs`.
* **Header:** O cabeçalho é fixo no topo (`position: sticky`, `z-index: 10000`) e adapta seus elementos de uma única linha (desktop/tablet) para duas (mobile), com um menu hambúrguer funcional que sobrepõe o conteúdo principal quando ativo (`position: fixed`, `z-index: 1000`).
* **Layout Responsivo:** A abordagem é **mobile-first**, adaptando a disposição dos elementos de colunas verticais (mobile) para linhas horizontais (desktop/tablet). Componentes como as categorias populares (`popular_categories_list`) e posts em destaque (`top_post`) mudam de um layout de coluna para linha.
* **Componentes Visuais:**
    * **Cards:** Elementos como imagens, categorias, formulários de login/cadastro e itens de posts utilizam um estilo de cartão com bordas arredondadas (`border-radius`), fundo definido e sombra (`box-shadow`).
    * **Texto sobre Imagem:** O nome da categoria é posicionado sobre a imagem correspondente usando `position: absolute` no texto e `position: relative` no contêiner (`.popular_category`). Um overlay semitransparente (`.popular_category_overlay`) aparece no hover.
    * **Entradas de Formulário:** Inputs e textareas têm estilos base definidos, com bordas sutis e foco visual claro.
    * **Botões:** Estilos distintos para botões primários (`.button`) e invertidos (`.button_inverse`), incluindo efeitos de hover.
* **Reaproveitamento de Estilos:** Cores, tamanhos de fonte, espaçamentos e bordas são definidos utilizando **variáveis CSS (`:root`)** para consistência e fácil manutenção.
* **Layout das Páginas de Administração:**
    * Utilizam **CSS Grid** (`.admin-page`) para organizar a barra lateral, cards de resumo e área de conteúdo principal.
    * Os cards de resumo (`.admin-cards`) usam flexbox com `flex-wrap` para se adaptar a diferentes tamanhos de tela.
    * Tabelas de listagem (como em usuários e revisão) usam **CSS Grid** para alinhar colunas de forma responsiva.

---

## 📐 Breakpoints Utilizados

O layout se adapta nos seguintes pontos de quebra:

* **Mobile:** Estilos base, aplicados até `767px` (`@media (max-width: 767px)`).
* **Tablet:** `@media (min-width: 768px)`
* **Desktop:** `@media (min-width: 1120px)`

---

## ♿ Observações de Acessibilidade

As seguintes práticas de acessibilidade foram implementadas:

* **HTML Semântico:** Uso consistente de tags HTML semânticas (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`, `<h1>` a `<h3>`) para estruturar o conteúdo de forma lógica e compreensível para tecnologias assistivas.
* **Atributos `alt`:** Todas as imagens relevantes possuem atributos `alt` descritivos, fornecendo contexto para usuários com deficiência visual.
* **Atributos ARIA:** Utilização de atributos ARIA para melhorar a navegação e a compreensão para leitores de tela:
    * `aria-label`: Em links (`.logo_link`, `.profile_link`, `popular_category`, `.social_link`) e botões (`.menu_button`, `.search_button`) para descrever a função ou destino do elemento.
    * `aria-expanded` e `aria-controls`: No botão do menu hambúrguer (`.menu_button`) para indicar se o menu está aberto ou fechado e qual elemento ele controla.
    * `role="search"`: No formulário de busca (`.search`) para identificar sua função semântica.
    * `aria-labelledby`: Em seções (`.introduction`, `.popular_categories`, `.categories`, `.top_posts`, `.editor_picks`) para associá-las a seus títulos correspondentes, melhorando a estrutura para navegação por leitores de tela.
* **Navegação por Teclado:** Elementos interativos (links, botões, inputs) são focáveis e operáveis via teclado, garantindo que usuários que não utilizam mouse possam interagir com a página.
* **Contraste de Cores:** As variáveis CSS para texto e fundo (`--text-black`, `--text-gray`, `--bg-color`, `--main-color`) sugerem uma preocupação em manter um contraste adequado, embora a verificação completa deva ser feita com ferramentas específicas.