// data una parola stampare la versione con la prima lettera maiuscola

let userWord = prompt("inserisci una parola");

console.log(capitalizzaParola(userWord));



// FUNZIONI
function capitalizzaParola(parola) {

    // prendiamo il primo carattere e lo facciamo maiuscolo
    // const primaLettera = parola[0];
    // console.log(primaLettera);
    // const upperPrimaLettera = primaLettera.toUpperCase();
    // console.log(upperPrimaLettera);

    const primaLetteraMaiuscola = parola[0].toUpperCase();
    // console.log(primaLetteraMaiuscola);




    // prendiamo il resto della parola
    const restoStringa = parola.substring(1);
    // console.log(restoStringa);


    // concateniamo le due stringhe (la prima lettere + il resto)
    const parolaCapitalizzata = primaLetteraMaiuscola + restoStringa;

    return parolaCapitalizzata;
}
