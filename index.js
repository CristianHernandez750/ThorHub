const conteiner = document.getElementById('conteiner');
const boton = document.getElementById('boton');
let nuevoparrafo
let nuevotexto


function funcionIncreible(){
   for(let i = 0; i = -1; i++){
      nuevoparrafo = document.createElement('span');
      nuevotexto = document.createTextNode('ci');

      nuevoparrafo.appendChild(nuevotexto);
      conteiner.appendChild(nuevoparrafo);
   }
}
boton.addEventListener("click", funcionIncreible)

