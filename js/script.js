const field = document.getElementById('name');
const button = document.querySelector('button');
const outputElement = document.getElementById('outputEl');

// se proviamo a leggere qui, sarà sempre vuoto
// const name = field.value; //

// console.log(name);


button.addEventListener('click', () => {
    // recupero il valore inserito dallo user
    const name = field.value.trim();
    console.log(name);

    // ouput 
    if (name) {
        outputElement.innerText = name;
        field.value = "";
    }

});

