// selezioniamo l'elemento di output
const outputEl = document.getElementById('output');

// settiamo i secondi di partenza
let seconds = 10;

// settiamo il set interval
const countDown = setInterval(() => {
    // se sono alla fine 
    if (seconds === 0) {
        // fermo l'esecuzione
        clearInterval(countDown);
        // dico buon anno
        outputEl.innerHTML = "Buon anno!!!";
    } else {
        // decrementiamo il valore di seconds
        seconds = seconds - 1;
        outputEl.innerHTML = seconds;
    }

}, 1000);

faiQualcosa();



// FUNZIONI
function faiQualcosa() {
    console.log("ho fatto qualcosa");

}