const element = document.getElementById("saluto");

element.className += " titolo";

// ma se non vogliamo perdere le altre classi...
// element.className = element.classList + " titolo";

// cambio colore senza classe
// element.style.color = "red";


// aggiungere del contenuto HTML
element.innerHTML += '<p class="classetesto">Mio testo</p>';


