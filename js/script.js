// dichiarazione variabile 

// dichiarazione nome utente
let firstName;

// dichiarazione cognome utente
let lastName;



// assegnare nome e cognome utente
firstName = "Emanuela";
lastName = "Verdi";

// variabile di nome completo
// let nomeCompleto = firstName + " " + lastName;

// console.log(nomeCompleto);

// saluto per l'utente
let salutoUser = "Ciao il mio nome è " + firstName + " " + lastName + ", e vi saluto tutti";

let salutoUser2 = `Ciao il mio nome è ${firstName} ${lastName}, e vi saluto tutti `;

console.log(salutoUser2);

// quanti caratteri ci sono nel nome utente
let lunghezzaUserName = firstName.length;

console.log("la lunghezza in caratteri del nome utente è:", lunghezzaUserName);


// prove con i numeri
let somma = 2 + 5;

console.log("il valore di somma è: ", somma);

let sottrazione = somma - 3;

console.log("il valore di sottrazione è: ", sottrazione);

let moltiplicazione = somma * sottrazione;

console.log("il valore di moltiplicazione è: ", moltiplicazione);

// valore fissato
let valorePartenza = 0.12345;
let valoreFissato = valorePartenza.toFixed(2);

console.log("Esempio di valore fissato a 2 unità", valoreFissato);





