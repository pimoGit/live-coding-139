// selezioniamo la lista vuota
const list = document.querySelector(".list");

// array di cui fare l'output
const names = ['Qui', 'Quo', 'Qua', "paperino", "pluto"];


// OUTPUT

// inizializzazione della variabile di accumulo
let items = '';

for (let i = 0; i < names.length; i++) {

    let nomeIesimo = names[i];

    items += `<li>${nomeIesimo}</li>`;

    console.log("all'iterazione numero: ", i, "items corrisposnde a: ", items);

}



list.innerHTML = items;