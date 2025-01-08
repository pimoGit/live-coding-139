// creaiamo una funzione
//  che data una parola ci dia la sua versione revertata

let parola = prompt("inserisci una parola");

console.log(revertaParola(parola));


// FUNZIONI

function revertaParola(stringa) {

    // variabile parola revertata
    let parolaRevertata = '';

    // cicliamo la stringa dalla fine, all'inizio anadando a prenderci ad ogni iterazione il carattere iesimo
    for (let i = stringa.length - 1; i >= 0; i--) {
        // let carattereIesimo = stringa[i];
        let carattereIesimo = stringa.charAt(i);

        // console.log(carattereIesimo);

        // aggiungiamo alla var di parola revertata il carattere iesimo
        parolaRevertata = parolaRevertata + carattereIesimo;
        // parolaRevertata += carattereIesimo;

    }


    // ritorniamo il valore della parola revertata
    return parolaRevertata


}


function revertaParola2(stringa) {

    return stringa.split("").reverse().join("");


}