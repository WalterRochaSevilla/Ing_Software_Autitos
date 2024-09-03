import Control from "./control";

const comandoInput = document.querySelector("#comando");
const form = document.querySelector("#control-form");
const resultadoDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  
  const comandoMov = comandoInput.value.trim(); // Obtenemos la cadena del input

  if (comandoMov) {
    // Crear una instancia de Control y configurar con el comando recibido
    const control = new Control();
    control.setAtr(comandoMov);
    
    // Obtener los detalles del comando
    const [gridSize, startPosition, comandos] = comandoMov.split('/');

    // Obtener el resultado del movimiento
    const resultado = control.mover();
    
    // Mostrar el resultado en la página
    resultadoDiv.innerHTML = `
      <p><strong>Tamaño de la Cuadrícula:</strong> ${gridSize}</p>
      <p><strong>Posición Inicial:</strong> ${startPosition}</p>
      <p><strong>Comando Ejecutado:</strong> ${comandos}</p>
      <p><strong>Posición Final:</strong> X: ${resultado.X}, Y: ${resultado.Y}, O: ${resultado.O}</p>
    `;
  } else {
    resultadoDiv.innerHTML = "<p>Por favor ingresa un comando válido.</p>";
  }
});
