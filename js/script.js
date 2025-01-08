// creare una funzione che dato un numero
// mi dica se il numero è pari oppure dispari


const numeroUser = parseInt(prompt("inserisci un numero"));

console.log(pariODispari(numeroUser));


// FUNZIONI
function pariODispari(numero) {
    // dichiarazione variabile flag
    let risultato;

    if (numero % 2 === 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

    return risultato



    // if (numero % 2 === 0) {
    //     return "pari";
    // } else {
    //     return "dispari";
    // }
}