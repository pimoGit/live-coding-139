const students = ['Paolo', 'Giulia', 'Marco'];

students.forEach((element) => {
    console.log(element);
});


// versione for
// for (let i = 0; i < students.length; i++) {
//     let element = students[i];
//     console.log(element);
// }


const cats = [
    { name: 'Jerry', color: 'Gray' },
    { name: 'Felix', color: 'Black and White' },
    { name: 'Garfield', color: 'Orange' },
];

cats.forEach((cat, posizione) => {
    console.log(`
      ${cat.name}'s color is ${cat.color} and the position is ${posizione}
    `);
});

