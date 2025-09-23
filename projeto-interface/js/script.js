const botaoMenu = document.getElementById('menu_hamburguer');

botaoMenu.addEventListener('click', () => {
    botaoMenu.classList.toggle('ativo');
    botaoMenu.setAttribute('aria-expanded', botaoMenu.classList.contains('ativo'));
});