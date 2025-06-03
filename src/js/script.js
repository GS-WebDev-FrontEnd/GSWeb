let imagens = [
    'src/assets/imagem1.jpg',
    'src/assets/imagem2.jpg',
    'src/assets/imagem3.jpg'
  ];
  
  let i = 0;
  let tempo = 3000;
  
  function slideShow() {
    const heroSection = document.querySelector('.hero');
    heroSection.style.backgroundImage = `url(${imagens[i]})`;
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center';
  
    i = (i + 1) % imagens.length;
  
    setTimeout(slideShow, tempo);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    slideShow();
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', toggleMenu);
  });

  function mostrarMapaWindy() {
    const mapa = document.getElementById("windy-widget");
    mapa.style.display = "block";
    mapa.scrollIntoView({ behavior: "smooth" });
  }
  