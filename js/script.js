// creare una funzione che generi un numero random

function generaNumRandomRange(numMax, numMin) {
    const numeroGenerato = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

    return numeroGenerato
}


console.log(generaNumRandomRange(100, 10));

console.log(generaNumRandomRange(20, 5));

