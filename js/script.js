const numeri = [1, 2, 3, 4, 5];

// filtraggio con filter (array nuovo con soli numeri pari)
const pari = numeri.filter((numero) => {
    if (numero % 2 === 0) {
        return true;
    }
    return false;
});



// versione for tradizionale
// const pari = [];

// for (let i = 0; i < numeri.length; i++) {
//     let numero = numeri[i];

//     if (numero % 2 === 0) {
//         pari.push(numero);
//     }
// }

console.log(pari); // [2, 4]



// 
const students = [
    { id: 1, name: 'Marco', year: 1 },
    { id: 2, name: 'Silvia', year: 2 },
    { id: 3, name: 'Ginevra', year: 1 },
    { id: 4, name: 'Sandro', year: 3 },
];

// otteniamo una lista dei soli studenti che sono al primo anno
const primoAnno = students.filter((student) => {
    // if (student.year === 1) {
    //     return true
    // } else {
    //     return false
    // }

    return student.year === 1;
});

// const primoAnno = students.filter(student => student.year === 1);

console.log(primoAnno);
