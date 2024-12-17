// chiediamo all'utente due ètà e gli indichiamo quella più grande


// creiamo var di risultato
let risultato;

// chiediamo in input le due età (numeri) all'utente
let etaUtente1 = parseInt(prompt("inserisci una età (un numero)"));
let etaUtente2 = parseInt(prompt("inserisci un'altra età (un numero)"));

console.log(etaUtente1, etaUtente2);


// verifichiamo quel'è la più grande
// SE la prima è più grande
if (etaUtente1 > etaUtente2) {
    risultato = "la prima ètà è più grande"
    // SE la seconda è più grande
} else if (etaUtente2 > etaUtente1) {
    risultato = "la seconda ètà è più grande"
    // SE sono uguali
} else {
    risultato = "le età sono uguali"
}


// diamo l'output/risposta all'utente
console.log(risultato);
