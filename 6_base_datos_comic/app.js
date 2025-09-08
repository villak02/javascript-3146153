const titulocomic = document.querySelector(".titulo-comic");
const descripcioncomic = document.querySelector(".descripcion-comic");
const imgcomic = document.querySelector(".img-comic");
const listacaps = document.querySelector(".lista-caps");

//mostrar info  de la base de datos en la pagina
titulocomic.textcontent = comic.nombrecomic;
descripcioncomic.textcontent = comic.descripcion;

//imprimir informacion de capitulos
comic.capítulos.forEach(cap => {
    const li = document.createElement("li");
    li.innerHTML = `
    <p>${cap.nombreCap}</p>
    <img src="${cap.imgPortada}"width="150">
    `


    listacaps.appendChild(li);
});