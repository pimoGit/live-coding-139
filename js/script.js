// creiamo il nostro oggetto
const palla = {
    'colore': ['red', 'blue'],
    'tipo': 'pallina da golf',
    'diametro': 3
};

// const nomePorp = prompt("inserisci il nome di una prop della palla");

// // leggere valori di prop
// console.log(palla[nomePorp], palla.nomePorp);

// sovra scrivere valori di prop
palla.diametro = 5;

console.log(palla);

// aggiungere una prop

palla.materiale = 'plastica';

console.log(palla);

// con un ciclo tiro fuori tutto ciò che mi serve
for (let propPalla in palla) {
    const messaggio = `il valore di  ${propPalla} è ${palla[propPalla]}`
    console.log(messaggio);
}





