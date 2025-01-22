// const numero = 7;
// selezioniamo l'elemnto di output
const outputEl = document.getElementById('outputNum');
// console.log(outputEl);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/int';

// faccio partire la richiesta Ajax verso l'API per ricevere il numero
axios.get(endpoint)
    .then(responseObj => {
        //codice da eseguire in caso di successo
        const result = responseObj.data;
        let numero = result.response
        console.log(numero);

        // output in pagina
        outputEl.innerText = numero;

    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error)
    })


