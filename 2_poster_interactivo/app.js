const monedas = document.querySelectorAll('.coin');
const corazones = document.querySelectorAll('.corazon');
const contadormonedas = document.querySelector('#contador-monedas');
const contadorcorazones = document.querySelector('#contador-corazones');
let totalmonedas = 0;
let totalcorazones = 0;

/* console.log(monedas,corazon,contadormonedas,contadorcorazones) */

monedas.forEach( function(moneda) {
    
    moneda.addEventListener('click', function() {
    moneda.classList.add('saltar');
    totalmonedas++;
    contadormonedas.textContent = totalmonedas;

    } )

    
})

corazones.forEach( function(corazon){ 

     corazon.addEventListener('click', function() {
        corazon.classList.add('saltar'); 
        totalcorazones++;
        contadorcorazones.textContent = totalcorazones;
    })
})


   
