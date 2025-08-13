
let contadorEstrellas = 0;

const estrella = document.getElementById("estrella");
const contadorSpan = document.getElementById("contador-estrellas");
const mario = document.getElementById("mario");
const huevo = document.getElementById("huevo");


estrella.addEventListener("click", () => {
  contadorEstrellas++;
  contadorSpan.textContent = contadorEstrellas;
  estrella.style.display = "none";
});


mario.addEventListener("click", () => {
  mario.style.animation = "agrandar 0.5s";
  setTimeout(() => {
    mario.style.animation = "";
  }, 500);
});


huevo.addEventListener("click", () => {
  alert("¡Encontraste un huevo, hoy follas!");
  huevo.style.display = "none";
});