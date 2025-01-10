// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, 
// il colore del nome deve essere azzurro o rosa a seconda del sesso inserito */


let sexClass;

// selezioniamo l'elemnto di output
const element = document.getElementById("saluto");

console.log(element);



// chiediamo i dati allo User
const nomeUser = prompt("inserisci il tuo nome");
const sesso = prompt("inseisci il tuo sesso, M o F");

console.log(nomeUser, sesso);

// aggiungiamo il nomecome output
element.innerHTML = `Ciao ${nomeUser}`;

// gestiamo il nome della classe da associare in base al sesso
if (sesso === "M") {
    sexClass = "male";
} else {
    sexClass = "female"
}

console.log(sexClass);

// associamo la classe giusta
element.classList.add(sexClass);
