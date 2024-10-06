const inputCantidad = document.getElementById("cantidad");
const botonGenerar = document.getElementById("generar");
const inputContrasena = document.getElementById("contrasena");

function generarContrasena(longitud) {
  const caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let contrasena = "";

  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres[randomIndex];
  }

  return contrasena;
}

botonGenerar.addEventListener("click", () => {
  const cantidad = parseInt(inputCantidad.value);

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, ingresa un número válido de caracteres");
    return;
  }

  const contrasena = generarContrasena(cantidad);
  inputContrasena.value = contrasena;
});
