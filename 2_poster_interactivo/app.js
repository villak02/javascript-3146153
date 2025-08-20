const monedas = document.querySelectorAll('.coin');
const corazones = document.querySelectorAll('.corazon');
const contadormonedas = document.querySelector('#contador-monedas');
const contadorcorazones = document.querySelector('#contador-corazones');
let totalmonedas = 0;
let totalcorazones = 0;
const audio1 = document.querySelector('#audio-1');
const audio2 = document.querySelector('#audio-2');
const audio3 = document.querySelector('#audio-3');

/* console.log(monedas,corazon,contadormonedas,contadorcorazones) */

monedas.forEach( function(moneda) {
    
    moneda.addEventListener('click', function() {
    moneda.classList.add('saltar');
    totalmonedas++;
    contadormonedas.textContent = totalmonedas;

    if (audio1.paused) {
        audio1.play();

    } else {
        audio1.pause();
    }

    
})

corazones.forEach( function(corazon){ 

     corazon.addEventListener('click', function() {
        corazon.classList.add('saltar'); 
        totalcorazones++;
        contadorcorazones.textContent = totalcorazones;

        if (audio2.paused) {
            audio2.play();

        } else {
            audio2.pause();
        }
    })
})


   
