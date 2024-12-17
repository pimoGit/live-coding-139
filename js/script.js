// gioco di pari e dispari


// INPUT
// l'utente scommette sul risultato (pari/dispari)
let scommessaUser = prompt("scegli se uscirà 'pari' o 'dispari'");

// l'utente inserisce un numero (1-10)
let numeroUser = parseInt(prompt("inserisci un numero tra 1 e 10"));

// il PC ci restituisce un numero (1-10)
let numeroPC = Math.floor(Math.random() * 10) + 1;

console.log(scommessaUser, numeroUser, numeroPC);



// ELABORAZIONE
// sommo i due numeri
let somma = numeroUser + numeroPC;

console.log("la somma è: ", somma);


// verifico il risultato (salvandomi il dato)
let risultato;
// SE somma è divisibile per 2 (pari)
if (somma % 2 === 0) {
    risultato = "pari";
    // ALTRIMENTI è dispari
} else {
    risultato = "dispari";
}

console.log("il risultato è: ", risultato);


// verifico chi ha vinto
// SE scommessa utente corrisponde a segno della somma (risultato)
if (scommessaUser === risultato) {
    // ha vinto utente
    console.log("hai vinto!!");
    // ALTRIMENTI
} else {
    // ha perso l'utente / vince il PC
    console.log("hai perso, ha vinto il PC...");

}



// OUTPUT
// comunichiamo all'utente chi ha vinto