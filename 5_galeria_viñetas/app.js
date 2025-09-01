
const monedas = document.querySelectorAll(".coin");
const corazones = document.querySelectorAll(".corazon");
const contadorMonedas = document.querySelector("#contador-monedas");
const contadorCorazones = document.querySelector("#contador-corazones");
let totalMonedas = 0;
let totalCorazones = 0;

/* console.log(monedas, corazon, contadorMonedas, contadorCorazones); */

monedas.forEach(function (moneda) {

    moneda.addEventListener("click", function () {
        moneda.classList.add("saltar");
        totalMonedas++
        contadorMonedas.textContent = totalMonedas

    })

})

corazones.forEach(function (corazon) {

    corazon.addEventListener("click", function () {
        corazon.classList.add("saltar");
        totalCorazones++;
        contadorCorazones.textContent = totalCorazones;
    })
})

//galeria

const escenas = document.querySelectorAll('.escena');
const btnanterior = document.querySelector('.anterior');
const btnsiguiente = document.querySelector('.siguiente');
const miniaturas = document.querySelectorAll('.miniaturas img');

let indice = 0;

/* console.log(escenas)
console.log(escena[1])
 */
function mostrarEscena(i) {
    console.log(escenas[i])



/* console.log(escenas[1]) */

for (let j = 0; j < escenas.length; j++) {
    escenas[j].classList.remove("activa")
}

escenas[i].classList.add("activa");

indice = i;
}

//boton siguiente

btnsiguiente.addEventListener('click', function() {
  indice = indice + 1;
  if(indice >= escenas.length){ 
    indice = 0;
  }

  mostrarEscena(indice)
})

//boton siguiente

btnanterior.addEventListener('click', function() {
  indice = indice - 1;
  if(indice <= 0){ 
    indice = escenas.length - 1; //para que se vaya a la ultima escena
  }

  mostrarEscena(indice)
})


//miniaturas

miniaturas.forEach( (miniatura, i) => {  
    miniatura.addEventListener("click", function() {
        mostrarEscena(i)
    } )
})


const audios = [
    document.getElementById("audio-escena1"),
    document.getElementById("audio-escena2"),
    document.getElementById("audio-escena3")
];

let audioActivo = null;
let sonidoReproduciendo = false;

function reproducirSonidoEscena(i) {

    if (audioActivo) {
        audioActivo.pause();
        audioActivo.currentTime = 0;
    }
    if (sonidoReproduciendo) {
        audioActivo = audios[i];
        audioActivo.play();
    }

}

const funcionOriginal = mostrarEscena;
mostrarEscena = function(i) {
    funcionOriginal(i);
    reproducirSonidoEscena(i);
}

const btnPlaystop = document.getElementById("play-stop-img3");
btnPlaystop.addEventListener("click", function() {
    sonidoReproduciendo = !sonidoReproduciendo;
    btnPlaystop.textContent = sonidoReproduciendo ? "stop" : "Play";

    if (sonidoReproduciendo) {
        reproducirSonidoEscena(indice);
    } else if (audioActivo) {
        audioActivo.pause();
    }

});
