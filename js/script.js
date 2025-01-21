const numeri = [1, 2, 3, 4, 5];

// ricerca di un elemento pari
const primoNumeroPari = numeri.find((numero) => {
    return numero % 2 === 0;
});




// versione for tradizionale
// let primoNumeroPari;

// for (let i = 0; i < numeri.length && primoNumeroPari === undefined; i++) {
//     let numero = numeri[i];
//     if (numero % 2 === 0) {
//         primoNumeroPari = numero;
//     }
// }


console.log(primoNumeroPari); // 2


//  es. di ricerca specifica su array di oggetti
const people = [
    { id: 4, name: 'Paolo', age: 32 },
    { id: 3, name: 'Clelia', age: 34 },
];

// trova la person con id 3
const myPerson = people.find((person) => {
    return person.id === 3;
});

//RISULTATO: { id: 3, name: 'Clelia', age: 34 }

console.log(myPerson, myPerson.name, myPerson.age);

