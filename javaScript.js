const imagenes = [
  "img/fotos/complejoExterior2.jpg",
  "img/fotos/hotelHabitacion.jpg",
  "img/fotos/patioParrilla.jpg",
  "img/fotos/patioPileta.jpg",
  "img/fotos/cochera.jfif",
  "img/fotos/paisaje.jfif"
];//CREAMOS ARRAY CON IMAGENES segun correccion del profe

//const carrusel = document.querySelectorAll('.carousel-item img');
let indice = 0;

const img = document.getElementById('imagen');
const btnSiguiente = document.getElementById('botonSiguiente');
const btnAtras = document.getElementById('botonAtras');


btnSiguiente.addEventListener("click", () => {
  indice = (indice + 1) 

  if (indice >= imagenes.length) { //si indice es igual o mayor al array vuelve de 0
   indice = 0; 
}

img.src = imagenes[indice];
});

btnAtras.addEventListener("click", () => {
    indice = (indice - 1);

    if (indice < 0) {
      indice = imagenes.length -1; //si llega a 0 vuelve a la ultima posicion
    }

    img.src = imagenes[indice];

});

