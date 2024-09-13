// Trocar miniaturas ativas
document.querySelectorAll('.carousel-thumbnails img').forEach((thumbnail) => {
    thumbnail.addEventListener('click', function () {
      document.querySelector('.carousel-thumbnails img.active-thumbnail').classList.remove('active-thumbnail');
      this.classList.add('active-thumbnail');
    });
  });
  