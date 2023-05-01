// Recupera todos os links do menu
const links = document.querySelectorAll('nav a');

// Para cada link, adiciona um evento de clique
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Recupera o id da página correspondente
    const target = event.target.hash;

    // Esconde a página atual
    const currentPage = document.querySelector('.page.active');
    currentPage.classList.remove('active');
    currentPage.style.display = 'none';

    // Mostra a nova página
    const newPage = document.querySelector(target);
    newPage.style.display = 'block';
    newPage.classList.add('active');
  });
});
