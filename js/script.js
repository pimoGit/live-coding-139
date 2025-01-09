// funzioni

// cerchiamo se ci sia o meno corrispondenza del valore inserito

// variabile flag

const isInArray = (arrToCcheck, request) => {
    let isPresent = false;

    for (let i = 0; !isPresent && i < arrToCcheck.length; i++) {
        // variabile che salva ogni singolo elemento dell'array ad ogni iterazione del for
        let nomeInvitato = arrToCcheck[i];

        console.log("iterazione numero" + i);


        // verifico se il nomeInvitato è uguale a ciò che ha inserito lo User
        if (request === nomeInvitato) {
            // settiamo la var di flag a true
            isPresent = true;
        }

    }

    return isPresent

}




// lista in cui cercare
const listaInvitati = ["Mario", "Francesca", "Fabrizio", "Marinella"];
const listaNumeri = [3, 7, 4, 5, 8];


console.log(listaInvitati);


// chiediamo allo user un nome da cercare
let richiestaNome = prompt("scrivi il nome da controllare");

console.log(richiestaNome);




// console.log(listaInvitati.includes(richiestaNome));
console.log(isInArray(listaInvitati, richiestaNome));

// console.log(isInArray(listaNumeri, 10));








