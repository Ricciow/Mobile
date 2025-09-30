const botaoMenu = document.getElementById('menu_hamburguer');

botaoMenu.addEventListener('click', () => {
    botaoMenu.classList.toggle('ativo');
    botaoMenu.setAttribute('aria-expanded', botaoMenu.classList.contains('ativo'));
});

const params = new URLSearchParams(window.location.search);
const categoria = params.get("category");




if(categoria==="Destaques") {
    document.getElementById("category_page_title").textContent = `${categoria}`;
    document.getElementById("category_filter").style.display='none';
    document.getElementById("load_posts_button").style.display='none';
}
else {
    document.getElementById("category_page_title").textContent = `Categoria: ${categoria}`;
}

const postsContainer = document.getElementById("category_posts");
var postCount = 0;
for (postCount=0; postCount<9; postCount++) {
    const post = document.createElement("a");
    post.className="post card";
    post.href="#";
    post.innerHTML=`
        <img src="assets/design.png" alt="Imagem da postagem ${postCount+1}" class="category_post_image">
        <h2 class="post_title">Título da postagem ${postCount+1}</h2>
        <p class="post_date">31 Jul 2025</p>
      `
    postsContainer.appendChild(post);
}

document.getElementById("load_posts_button").addEventListener('click', function(){
    for (var i=0;i<6;i++) {
        postCount++;
        const post = document.createElement("a");
        post.className="post card";
        post.href="#";
        post.innerHTML=`
            <img src="assets/design.png" alt="Imagem da postagem ${postCount+1}" class="category_post_image">
            <h2 class="post_title">Título da postagem ${postCount+1}</h2>
            <p class="post_date">31 Jul 2025</p>
          `
        postsContainer.appendChild(post);
    }
});