const contenedorDetalle = document.querySelector("#detalle");
const mensajeError = document.querySelector("#mensajeError");

const imagen = document.querySelector("#imagen");
const titulo = document.querySelector("#titulo");
const genero = document.querySelector("#genero");
const clasificacion = document.querySelector("#clasificacion");
const formatos = document.querySelector("#formatos");
const sinopsis = document.querySelector("#sinopsis");
const director = document.querySelector("#director");
const reparto = document.querySelector("#reparto");
const duracion = document.querySelector("#duracion");
const idioma = document.querySelector("#idioma");
const pais = document.querySelector("#pais");
const dias = document.querySelector("#dias");
const horarios = document.querySelector("#horarios");

// TODO 2: reemplazá el texto vacío por window.location.search.
const parametros = new URLSearchParams("");

// TODO 3: obtené el valor del parámetro "id" mediante get().
const idPelicula = "";

// TODO 4: utilizá find() para buscar la película correspondiente.
const peliculaSeleccionada = null;

function mostrarDetalle(pelicula) {
  // TODO 5: completá el contenido utilizando las propiedades de pelicula.
  imagen.src = "";
  imagen.alt = "";
  titulo.textContent = "";
  genero.textContent = "";
  clasificacion.textContent = "";
  formatos.textContent = "";
  sinopsis.textContent = "";
  director.textContent = "";
  reparto.textContent = "";
  duracion.textContent = "";
  idioma.textContent = "";
  pais.textContent = "";
  dias.textContent = "";
  horarios.innerHTML = "";

  contenedorDetalle.classList.remove("d-none");
}

function mostrarError() {
  mensajeError.classList.remove("d-none");
}

if (peliculaSeleccionada) {
  mostrarDetalle(peliculaSeleccionada);
} else {
  mostrarError();
}
