const galeria = document.getElementById("galeria");

const imagenesLocales = [
  "assets/img/imagenf1.jpg",
  "assets/img/imagenf2.jpg",
  "assets/img/imagenf3.jpg"
];

let imagenSeleccionada = null;

function cargarImagenes() {
  imagenesLocales.forEach((ruta) => {
    const img = document.createElement("img");
    img.src = ruta;
    img.alt = "Imagen familiar";

    img.addEventListener("click", () => {
      if (imagenSeleccionada) {
        imagenSeleccionada.classList.remove("seleccionada");
      }
      img.classList.add("seleccionada");
      imagenSeleccionada = img;
    });

    galeria.appendChild(img);
  });
}

cargarImagenes();

document.getElementById("eliminarBtn").addEventListener("click", () => {
  if (imagenSeleccionada) {
    galeria.removeChild(imagenSeleccionada);
    imagenSeleccionada = null;
  } else {
    alert("No hay ninguna imagen seleccionada.");
  }
});
