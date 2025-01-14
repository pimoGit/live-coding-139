// slezioniamo tutti gli elementi
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

console.log(display, startButton, stopButton);

let timer;

// gestione evento di start cronometro
startButton.addEventListener("click",
    () => {
        let count = 0;
        // avviamo il set interval
        timer = setInterval(() => {
            // count = count + 1;
            // output
            display.innerHTML = ++count;
        }, 1000);

        // gestione abilitazione bottoni
        // startButton.setAttribute("disabled", "");
        startButton.disabled = true;
        // stopButton.setAttribute("");
        stopButton.disabled = false;
    }
);


// gestione evento di stop cronometro
stopButton.addEventListener("click",
    function () {
        // bloccare il set interval
        clearInterval(timer);

        // gestione abilitazione bottoni
        startButton.disabled = false;
        stopButton.disabled = true;

    }
);