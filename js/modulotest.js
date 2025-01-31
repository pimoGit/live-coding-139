const user = {
    name: 'John',
    age: 30,
}

function sum() {
    // code
    console.log("Da grande sommerò due numeri!");

}



// esportiamo solo la funzione sum
// module.exports = sum;

// esportiamo sia la funzione 
// sum che l'oggetto contenuto in user
module.exports = {
    sum,
    user
};