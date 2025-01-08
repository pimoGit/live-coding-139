// data una parola stampare la versione con la prima lettera maiuscola

let userWord = prompt("inserisci una parola");

console.log(capitalizzaTesto(userWord));






// FUNZIONI

function capitalizzaTesto(testo) {
    const paroleMaiuscole = [];

    // trasformo la mia stringa in lista di parole
    const listaParoleTesto = testo.split(' ');
    console.log(listaParoleTesto);


    // ciclo la lista capitalizzando ogni parola
    for (let i = 0; i < listaParoleTesto.length; i++) {
        let stringaIesima = listaParoleTesto[i];
        console.log(stringaIesima);

        // capitalizza parola iesima
        paroleMaiuscole.push(capitalizzaParola(stringaIesima));

    }
    console.log(paroleMaiuscole);


    // trasformo la mia lista di parole nuovamente in stringa
    const stringaParoleMaiuscole = paroleMaiuscole.join(' ');

    // ritorno la stringa finale
    return stringaParoleMaiuscole

}


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
