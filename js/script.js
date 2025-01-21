const students = [
    {
        id: 1,
        name: 'Luca Bianchi',
        age: 32,
        class: '3C',
        vote: 9
    },
    {
        id: 2,
        name: 'Andrea Rossi',
        age: 18,
        class: '4A',
        vote: 7
    },
    {
        id: 3,
        name: 'Giovanni Verdi',
        age: 33,
        class: '5B',
        vote: 7
    },
    {
        id: 4,
        name: 'Francesco Esposito',
        age: 25,
        class: '5B',
        vote: 7
    },
    {
        id: 5,
        name: 'Matteo Ferri',
        age: 57,
        class: '5B',
        vote: 10
    },
];

// Stampa in console i nomi di tutti gli studenti
students.forEach((student) => {
    console.log(student.name);
});

// Crea un array con la lista  di tutti i nomi degli studenti
const nomi = students.map((student) => {
    return student.name;
});

console.log(nomi);


// Crea un array che contenga solo gli studenti dai 30 anni in più
const over30 = students.filter((student) => {
    return student.age >= 30;
});

console.log(over30);


// Trova lo studente con id 4
const studente4 = students.find((student) => {
    return student.id === 4;
});

console.log(studente4);
