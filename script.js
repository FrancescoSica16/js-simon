// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let listaGenerati = [];
let difficolta = 5 ;

while (listaGenerati.length < difficolta) {
    listaGenerati.push(getRandomIntInclusive(1 , 10));
}

console.log(listaGenerati);

alert(listaGenerati);

 setTimeout( function richiediNumeri(difficolta) {}, 10000 )




function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

function richiediNumeri(difficoltaTemp) {

let array = [] ;

while (array.length < difficoltaTemp) {
    
   let num = prompt("inserisci i numeri che ricordi");

   array.push(num);

}
  return array;
}

 // clearTimeout() dove lo uso ?
 