const carrusel = document.querySelectorAll('.carousel-item img');
let indice = 0;

const img = document.getElementById('imagen');
const btnSiguiente = document.getElementById('botonSiguiente');
const btnAtras = document.getElementById('botonAtras');


btnSiguiente.addEventListener("click", () => {
  indice = (indice + 1) % carrusel.length;
  img.src = carrusel[indice].getAttribute('src');
});

btnAtras.addEventListener("click", () => {
    indice = (indice - 1 + carrusel.length) % carrusel.length;
    img.src = carrusel[indice].getAttribute('src');
});

