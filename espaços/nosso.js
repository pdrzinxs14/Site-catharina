// Trocar miniaturas ativas quando clicadas
document.querySelectorAll('.carousel-thumbnails img').forEach((thumbnail) => {
  thumbnail.addEventListener('click', function () {
    document.querySelector('.carousel-thumbnails img.active-thumbnail').classList.remove('active-thumbnail');
    this.classList.add('active-thumbnail');
  });
});

// Atualizar miniatura ativa ao mudar slide pelo controle
var carouselElement = document.querySelector('#carouselExample');
carouselElement.addEventListener('slid.bs.carousel', function (event) {
  // Remover a classe 'active-thumbnail' de todas as miniaturas
  document.querySelectorAll('.carousel-thumbnails img').forEach((thumbnail) => {
    thumbnail.classList.remove('active-thumbnail');
  });
  // Adicionar a classe 'active-thumbnail' à miniatura correspondente
  var activeIndex = event.to; // índice do slide atual
  document.querySelector(`.carousel-thumbnails img[data-bs-slide-to="${activeIndex}"]`).classList.add('active-thumbnail');
});