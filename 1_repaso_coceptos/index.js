const imagen = document.querySelector('#img1')
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')

//.funciones y eventos

//2. funciones
function blancoynegro () {
console.log("imagen modificada")
imagen.style.filter = "grayscale(100%)"
/* b1.style.background = "blueviolet";
b1.style.color = "white";
b1.style.height = "200px";
b1.borderRadius = "200%"; */
}

//3. eventos




function desenfocar (){
    console.log("imagen modificada")
    imagen.style.filter = "blur(5px)"
}

function rotacion (){
    console.log("imagen modificada")
    imagen.style.transform = "rotate(5deg) scale(1.5)"
}

b1.addEventListener("click", blancoynegro)
b2.addEventListener("click", desenfocar)
b3.addEventListener("click", rotacion)
