// file one
function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// esporto i moduli
module.exports = {
    somma: sum,
    sottrai: subtract,
    moltiplica: multiply,
    dividi: divide
};