/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero. 
 Il programma stampa la somma di tutti i numeri inseriti. 
 
*/

// setto la variabile che conterrà la somma
let sommaFor = 0;

// Chiedo per 5 volte unnumero all'utente
for (let i = 0; i < 5; i++) {
    const nuovoNumero = parseInt(prompt('Inserisci un numero'));

    // output numeri inseriti con relativo indice
    console.log(nuovoNumero, i);


    // aggiungo al valore di somma il nuovo numero ad ogni giro del for (iterazione)
    sommaFor += nuovoNumero;
    // sommaFor = sommaFor + nuovoNumero;
}

// output
console.log('La somma dei numeri inseriti è ' + sommaFor);