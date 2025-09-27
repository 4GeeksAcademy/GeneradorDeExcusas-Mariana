// Arrays con las partes de la excusa
// Arrays de excusas
var who = ["The dog", "My grandma", "The mailman", "My bird"];
var action = ["ate", "peed", "crushed", "broke"];
var what = ["my homework", "my phone", "the car"];
var when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];

// Función para elegir un elemento aleatorio
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Función que genera excusa completa
function generateExcuse() {
  return randomItem(who) + " " + randomItem(action) + " " + randomItem(what) + " " + randomItem(when) + ".";
}

// Ejecutar cuando el DOM cargue
document.addEventListener("DOMContentLoaded", function () {
  var excuseEl = document.getElementById("excuse");
  var btn = document.getElementById("generateBtn");

  // Mostrar excusa inicial
  excuseEl.textContent = generateExcuse();

  // Evento click para generar nueva excusa
  btn.addEventListener("click", function () {
    excuseEl.textContent = generateExcuse();
  });
});
