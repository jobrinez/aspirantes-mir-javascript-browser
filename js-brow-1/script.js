// Seleccionar elementos del DOM
const input = document.querySelector('#texto');
const boton = document.querySelector('.btn');
const resultado = document.querySelector('#resultadoMayusculas');

// Agregar evento de escucha al botón
boton.addEventListener('click', () => {
  // Obtener el valor del input y convertirlo a mayúsculas
  const texto = input.value.toUpperCase();
  
  // Actualizar el contenido del párrafo con el texto en mayúsculas
  resultado.textContent = texto;
});
