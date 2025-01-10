// selezioni degli elementi
const button = document.getElementById('bottone');

const divSaluto = document.getElementById('saluto');


// gestione dell'evento
button.addEventListener('click', function () {
    // capisco se la classe associata è quella di partenza
    const isUno = divSaluto.classList.contains("saluto-bg1");

    // cambiamo colore di BG all'elemento
    if (isUno) {
        divSaluto.classList.add("saluto-bg2");
        divSaluto.classList.remove("saluto-bg1");
    } else {
        divSaluto.classList.add("saluto-bg1");
        divSaluto.classList.remove("saluto-bg2");
    }


});



