// array di oggetti
const classi = [
    {
        'nome': 'Classe#1',
        'numeroStudenti': 10,
    },
    {
        'nome': 'Classe#2',
        'numeroStudenti': 12,
    },
    {
        'nome': 'Classe#3',
        'numeroStudenti': 15,
    },
    {
        'nome': 'Classe#4',
        'numeroStudenti': 9,
    },
];

// console.log(classi[1].nome, classi[1].numeroStudenti);

// console.table(classi);

// creo un nuovo oggetto classe
const nuovaClasse = {
    'nome': 'Classe#5',
    'numeroStudenti': 19,
}

// lo aggiungo alla lista delle classi
classi.push(nuovaClasse);

// console.table(classi);




// tiriamo fuori tutto quello che c'è nella lista
for (let i = 0; i < classi.length; i++) {

    // elemento iesimo dell'array
    let classeIesima = classi[i];

    // console.log(classeIesima);

    // estrapolo la prop nome dell'oggeto iesimo
    // let nomeClassse = classeIesima.nome;

    // console.log(nomeClassse);

    // cilco all'interno dell'oggetto iesimo
    for (let chiaveClasse in classeIesima) {
        const mess = `Il valore di ${chiaveClasse} è ${classeIesima[chiaveClasse]}`
        console.log(mess);

    }

}

