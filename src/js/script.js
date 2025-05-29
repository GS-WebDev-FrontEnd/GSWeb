let imagens = [
    'src/assets/imagem1.jpg',
    'src/assets/imagem2.jpg',
    'src/assets/imagem3.jpg',
]
 
let i = 0;
let tempo = 3000;
 
function slideShow() {
    document.getElementById('image').src = imagens[i];
    i++;
    if (i == imagens.length) {
        i = 0;
    }
    setTimeout("slideShow()", tempo)
}
slideShow();
 
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}