// chiediamo all'utente due parole e gli indichiamo qual'è la più lunga

// variabile di messaggio/risultato
let risultato;

// richiesta info all'utente (due parole)
let parola1 = prompt("inserisci la prima parola");
let parola2 = prompt("inserisci la seconda parola");

// variabili di lunghezza stringhe
let lunghezzaParola1 = parola1.length;
let lunghezzaParola2 = parola2.length;


console.log(parola1, parola2);


// valutare quale delle due parole è più lunga
// SE che la parola1 è più lunga
if (lunghezzaParola1 > lunghezzaParola2) {
    // setto il risultato su parola1
    // console.log("la parola 1 è più lunga");
    risultato = "la parola 1 è più lunga";
    // SE che  la parola2 è più lunga
} else if (lunghezzaParola2 > lunghezzaParola1) {
    // setto il risultato su parola2
    // console.log("la parola 2 è più lunga");
    risultato = "la parola 2 è più lunga";
    // SE le due prole sono lunghe uguali
} else {
    // setto il risultato su uguali
    // console.log("le parole sono lunghe uguali");
    risultato = "le parole sono lunghe uguali";
}


console.log("altre cose che verranno fatte");



// indicare all'utente la parola più lunga
console.log(risultato);
// alert(risultato);

