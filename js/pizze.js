// selezioniamo gli elemnti di output
const containerCard = document.querySelector('.container');

// console.log(giocatore1, giocatore2, risultato);

// setto l'endpoint e i parametri relativi
const endpoint = `http://localhost:3000/pizzas?ingredient=mozzarella`;

// faccio partire la richiesta Ajax verso l'API per ricevere il numero
axios.get(endpoint)
    .then(responseObj => {
        //codice da eseguire in caso di successo
        const pizzas = responseObj.data;
        console.log(pizzas);

        for (let i = 0; i < pizzas.length; i++) {
            let pizza = pizzas[i];
            console.log(pizza);
            // destrutturo l'oggetto
            const { name, image, ingredients } = pizza;

            // dichiarazione variabile di accumulo li ingredients
            let lista = "";
            // ciclo su array di ingredients
            ingredients.forEach(element => {
                lista += `
                <li>${element}</li>`;
            });

            // // creo le card
            containerCard.innerHTML += `
            <div class="card">
                <h2 class="title">${name}</h2>
                <img src="${image}" alt="${name}" />
                <ul class="iduser">
                    ${lista}
                </ul>
            </div>
            `;

        }



    })
    .catch(error => {
        // codice da eseguire in caso di errore
        let statusCode = error.response.status;
        console.error(statusCode);
        if (statusCode === 500) {
            containerCard.innerHTML = "<h1>Siamo spiacenti il server ha un problemna momentaneo</h1>";
        } else if (statusCode === 404) {
            containerCard.innerHTML = "<h1>L'app ha generato un errore, non è stata trovata la risorsa richiesta</h1>";
        }
    })

