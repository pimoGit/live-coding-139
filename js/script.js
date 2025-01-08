


const somma = sommaNumeri(49, 2);

const somma2 = sommaNumeri(12, 22);


const sommaSomme = sommaNumeri(somma, somma2)

console.log(somma, somma2, sommaSomme); // 51

console.log(risultato); // "ReferenceError: risultato is not defined






// FUNCTIONS
function sommaNumeri(num1, num2) {

    const risultato = num1 + num2;

    return risultato;

}