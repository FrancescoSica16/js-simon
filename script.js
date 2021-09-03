// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let listaGenerati = [];
let difficolta ;
let numeriScelti = [];

let numeriIndovinati = [];

difficolta = parseInt(prompt("con quanti numeri vuoi giocare?"));

while (listaGenerati.length < difficolta) {
   let num = getRandomIntInclusive(1 , 10);

    if ( !listaGenerati.includes(num) ) {
        listaGenerati.push(num);
    }
}

console.log(listaGenerati);
alert(listaGenerati);

console.log("prima di setTimeout")

setTimeout( function() {
    
    console.log("dentro setTimeout")

    let numeriScelti = richiediNumeri(difficolta);
    console.log(numeriScelti)

    numeriIndovinati = getMatch(numeriScelti, listaGenerati);

    console.log("hai indovinato questi numeri" + " " + numeriIndovinati)

    console.log("il tuo punteggio è" + " " + numeriIndovinati.length)

} , 3000 );

console.log("dopo set timeout")


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

function richiediNumeri(difficoltaTemp) {

    let array = [];
    console.log("dentro richiedi numeri")

    while (array.length < difficoltaTemp) {
        
        let num = parseInt( prompt("inserisci i numeri che ricordi"));
        array.push(num);
    }
     return array;
}

 // clearTimeout() dove lo uso ?

 function getMatch(a, b) {
    var matches = [];

    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
        }
    }
    return matches;
}