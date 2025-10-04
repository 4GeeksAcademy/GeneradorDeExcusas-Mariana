// Arrays de excusas
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateExcuse() {
  return randomItem(who) + " " + randomItem(action) + " " + randomItem(what) + " " + randomItem(when) + ".";
}

document.addEventListener("DOMContentLoaded", function () {
  let excuseEl = document.getElementById("excuse");
  let btn = document.getElementById("generateBtn");

  excuseEl.textContent = generateExcuse();

  btn.addEventListener("click", function () {
    excuseEl.textContent = generateExcuse();
  });
});
