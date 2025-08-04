const monedas = document.querySelectorAll('.coin');
const corazon = document.querySelector('.corazon');
const contadormonedas = document.querySelector('#contador-monedas');
const contadorcorazones = document.querySelector('#contador-corazones');

console.log(monedas,corazon,contadormonedas,contadorcorazones)

monedas.forEach( function(moneda) {
    
    moneda.addEventListener('click', function() {
    moneda.classList.add('saltar');
    } )
})

