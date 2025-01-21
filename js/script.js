const numeri = [1, 2, 3, 4, 5];

// versione Map
const quadrati = numeri.map((numero) => {
    return numero * numero;
});


// versione For
// const quadrati = [];
// for (let i = 0; i < numeri.length; i++) {
//     let numero = numeri[i];
//     let prodotto = numero * numero;
//     quadrati.push(prodotto);
// }


// console.log(numeri, quadrati); // [1, 4, 9, 16, 25]



//  altro esempio con array di oggetti
const students = [
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Luigi', lastName: 'Verdi' },
    { firstName: 'Margherita', lastName: 'Bianchi' }
];

const arrayNomi = students.map((student) => {
    // console.log(student);
    return `${student.lastName} ${student.firstName}`
});



// versione foreach
// const arrayNomi = [];
// students.forEach((student) => {
//     arrayNomi.push(`${student.lastName} ${student.firstName}`);
// });


console.log(arrayNomi);
