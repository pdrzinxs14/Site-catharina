
  function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = direction * 300; // Valor de rolagem por clique
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

