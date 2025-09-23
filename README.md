# HABIT - Layout Responsivo

Este projeto implementa o frontend de uma página web com foco em conteúdo e navegação, utilizando HTML, CSS e JavaScript. Pode ser acessado [aqui](https://ricciow.github.io/Mobile/)

## 🚀 Telas Implementadas

O projeto implementa a tela principal (Homepage), composta pelas seguintes seções:

* **Header:** Cabeçalho com logo, navegação, busca e link de perfil.
* **Introdução (Hero Section):** Seção de apresentação principal.
* **Categorias Populares:** Galeria de categorias com imagens.
* **Footer:** Rodapé com links de redes sociais e copyright.

*(Outras telas a serem implementadas...)*

## 🎨 Decisões de Layout

* **Estrutura Principal:** O layout geral da página é construído com **CSS Grid** (`header`, `main`, `footer`).
* **Alinhamento de Componentes:** **Flexbox** é utilizado para alinhar os elementos internos de cada seção.
* **Header:** O cabeçalho é fixo no topo (`position: sticky`) e adapta seus elementos de uma única linha (desktop) para duas (mobile), com um menu hambúrguer funcional.
* **Layout Responsivo:** A abordagem é mobile-first, adaptando a disposição dos elementos de colunas verticais (mobile) para linhas horizontais (desktop/tablet).
* **Componentes Visuais:**
    * **Cards:** Elementos como imagens e categorias utilizam um estilo de cartão com bordas e fundo definidos.
    * **Texto sobre Imagem:** O nome da categoria é posicionado sobre a imagem correspondente usando `position: absolute` no texto e `position: relative` no contêiner.

## 📐 Breakpoints Utilizados

O layout se adapta nos seguintes pontos de quebra:

* **Mobile:** Estilos base, aplicados até `767px`.
* **Tablet:** `@media (min-width: 768px)`
* **Desktop:** `@media (min-width: 1120px)`

## ♿ Observações de Acessibilidade

As seguintes práticas de acessibilidade foram implementadas:

* Uso de HTML semântico (`<header>`, `<main>`, `<nav>`, `<section>`, etc.).
* Atributos `alt` descritivos para todas as imagens.
* Uso de atributos ARIA (`aria-label`, `aria-expanded`, `aria-controls`, `role`, `aria-labelledby`) para melhorar a navegação para leitores de tela.