$(document).ready(function () {
  // Inicializar el slider
  $("#carouselExample").carousel();

  // Cambiar automáticamente las imágenes cada 3 segundos
  setInterval(function () {
    $("#carouselExample").carousel("next"); // Cambiar a la siguiente imagen
  }, 3000); // 3000 milisegundos = 3 segundos
});