// import sumar from "./sumador";

const comando = document.querySelector("#comando");
const form = document.querySelector("#control-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const comando_Mov = Number.toString(comando.value);
  
  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
