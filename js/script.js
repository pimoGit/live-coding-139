// selezioniamo gli elemnti di output
const giocatore1 = document.getElementById('p1');
const giocatore2 = document.getElementById('p2');
const risultato = document.getElementById('result');

// console.log(giocatore1, giocatore2, risultato);

// setto l'endpoint e i parametri relativi
const numMin = 1;
const numMax = 6;
const numItems = 2;
const endpoint = `https://flynn.boolean.careers/exercises/api/array/integers?min=${numMin}&max=${numMax}&items=${numItems}`;

// faccio partire la richiesta Ajax verso l'API per ricevere il numero
axios.get(endpoint)
    .then(responseObj => {
        //codice da eseguire in caso di successo
        const numbers = responseObj.data.response;
        console.log(numbers);
        // etraspolo i numeri dall'array
        // const numGiocatore1 = numbers[0];
        // const numGiocatore2 = numbers[1];
        const [numGiocatore1, numGiocatore2] = numbers;
        // const numGiocatore1 = 2;
        // const numGiocatore2 = 2;
        console.log(numGiocatore1, numGiocatore2);

        // output in pagina
        giocatore1.innerHTML = numGiocatore1;
        giocatore2.innerHTML = numGiocatore2;

        let messaggioGioco = "Pareggio!";

        if (numGiocatore1 > numGiocatore2) {
            messaggioGioco = "Ha vinto il primo giocatore";
        } else if (numGiocatore2 > numGiocatore1) {
            messaggioGioco = "Ha vinto il secondo giocatore";
        }

        risultato.innerHTML = messaggioGioco;

    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error)
    })


