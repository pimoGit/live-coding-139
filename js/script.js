// DESTRUTTURAZIONE OGGETTO

const student = {
    name: 'Paolo',
    age: 30,
    email: 'paolo@email.it'
};


//    descruturing
const { name, email } = student;

// versione estesa
// const name = student.name;
// const email = student.email;




console.log(name, email);


// REST-SPREAD

// su funzione
function myFunction(...myArguments) {
    console.log(myArguments);
}
myFunction('uno', 3, { name: 'pippo' });
//avremo un array composto da tre elementi

function sommaNumeri(...numeri) {
    let somma = 0;
    for (let i = 0; i < numeri.length; i++) {
        somma += numeri[i];
    }
    return somma;
}

console.log(sommaNumeri(3, 5, 2));


// su oggetti
const obj = { name: 'palla', peso: 50 };

// copia il ref all'obj
const copyObj3 = obj;

// versione compatta
const copyObj = { ...obj, colore: 'blue' };


//  versione estesa
const copyObj2 = {
    name: obj.name,
    peso: obj.peso,
    colore: 'blue'
};


console.log(copyObj);
//{name: "palla", peso: 50, colore: "blue"}
