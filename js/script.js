// selezioniamo gli elemnti di output
const containerCard = document.querySelector('.container');

// console.log(giocatore1, giocatore2, risultato);

// setto l'endpoint e i parametri relativi
const endpoint = `https://jsonplaceholder.typicode.com/users/1/posts`;

// faccio partire la richiesta Ajax verso l'API per ricevere il numero
axios.get(endpoint)
    .then(responseObj => {
        //codice da eseguire in caso di successo
        const posts = responseObj.data;
        // console.log(posts);

        for (let i = 0; i < posts.length; i++) {
            let post = posts[i];
            console.log(post);
            // destrutturo l'oggetto
            const { body, title, userId } = post;
            // creo le card
            containerCard.innerHTML += `
            <div class="card">
                <h2 class="title">${title}</h2>
                <p class="text">${body}</p>
                <span class="iduser">${userId}</span>
            </div>
            `;

        }



    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error)
    })

