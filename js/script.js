// selezioniamo la lista vuota
const list = document.querySelector(".list");

// array di cui fare l'output
const names = ['Qui', 'Quo', 'Qua', "paperino", "pluto"];


// OUTPUT

// inizializzazione della variabile di accumulo
// let items = '';

// for (let i = 0; i < names.length; i++) {

//     let nomeIesimo = names[i];

//     items += `   <div class="classeNome">
//                 <a href="#">
//                     ${nomeIesimo}
//                 </a>
//             </div>`;

//     console.log("all'iterazione numero: ", i, "items corrisposnde a: ", items);

// }

// // aggiunta reale alla pagina degli elementi
// list.innerHTML = items;



// Versione con createElement
for (let i = 0; i < names.length; i++) {
    const li = document.createElement('li');
    const collegamento = document.createElement('a');
    li.appendChild(collegamento);
    collegamento.append(names[i]);
    list.appendChild(li);
}