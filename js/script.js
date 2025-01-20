// # Fase di preparazione
//  Preparo i dati su cui basare il carosello
const pics = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Scandinavia\'s blend of nature and innovation.',
    }, {
        image: 'img/02.jpg',
        title: 'Norvegia',
        text: 'Fjords, mountains, and coastal charm in Nordic splendor.',
    }, {
        image: 'img/03.jpg',
        title: 'Alaska',
        text: 'Untamed wilderness and rugged beauty in the Last Frontier.',
    }, {
        image: 'img/04.jpg',
        title: 'Gran Canyon',
        text: 'Nature\'s masterpiece, a colorful tapestry of cliffs.',
    }, {
        image: 'img/05.jpg',
        title: "Skyrim",
        text: 'Epic Nordic fantasy with dragons and ancient magic.',
    }
];

// selezione elemento gallery di output slides
const containerGallery = document.querySelector('.gallery');
console.log(containerGallery);
//  selezione elemnto thumbnalis di output
const containerThumbs = document.getElementById('thumbnails');


// generiamo dinamicamente il blocco dei vari elementi di slide

// variabile di accumulo dell'elento di output (stringa)
let galleryElements = '';
// variabile acculumo thumbs
let thumbElements = '';

// ciclo su array e incremento di galleryElement con gli elementi di output
for (let i = 0; i < pics.length; i++) {
    let currentSlide = pics[i];
    // console.log(currentSlide);

    // destrutturazione oggetto slide
    const { title, text, image } = currentSlide;

    // aggiungo ad ogni iterazione una nuova slide
    galleryElements += `
    <figure>
        <figcaption>
            <h2>${title}</h2>
            <h3>${text}</h3>
        </figcaption>
        <img alt="${title}" src="${image}">
    </figure>
    `;
    // console.log(galleryElements);

    // aggiungo ad ogni iterazione una nuova thumb
    thumbElements += `
        <img alt="${title}" src="${image}">
    `;

}

// inserisco le slide dentro gallery
containerGallery.innerHTML = galleryElements;
// inserisco le thumbs dentro contenitore relativo
containerThumbs.innerHTML = thumbElements;


// gestione iniziale dell'indice della slide attiva (gestione active)
// seleziono tutte le slide
const slides = document.querySelectorAll('.gallery figure');
// console.log(slides);
// seleziono le thumbs
const thumbs = document.querySelectorAll('#thumbnails img');
console.log(thumbs);

// variabile di gestione dell'indice per l'active
let currentIndex = 0;
// aggiungo la classe active al prima slide
slides[currentIndex].classList.add('active');
// aggiungo la calsse active alla prima thumb
thumbs[currentIndex].classList.add('active');



// gestione navigazione da pulsanti

// seleziono i bottoni
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
console.log(prevButton, nextButton);

// gestione next
nextButton.addEventListener('click', () => {
    // rimuovo l'active dalla slide corrente
    slides[currentIndex].classList.remove('active');
    // rimuovo l'active dalla thumb corrente
    thumbs[currentIndex].classList.remove('active');


    if (currentIndex < slides.length - 1) {
        // aggiorno il valore dell'indice corrente
        currentIndex = currentIndex + 1;
    } else {
        currentIndex = 0;
    }

    // aggiungo l'active alla slide nuova
    slides[currentIndex].classList.add('active');
    // aggiungo l'active alla thumb nuova
    thumbs[currentIndex].classList.add('active');

}
);

// gestione prev
prevButton.addEventListener('click', () => {
    // rimuovo l'active dalla slide corrente
    slides[currentIndex].classList.remove('active');
    // rimuovo l'active dalla thumb corrente
    thumbs[currentIndex].classList.remove('active');

    if (currentIndex > 0) {
        // aggiorno il valore dell'indice corrente
        currentIndex = currentIndex - 1;
    } else {
        currentIndex = slides.length - 1;
    }

    // aggiungo l'active alla slide nuova
    slides[currentIndex].classList.add('active');
    // aggiungo l'active alla thumb nuova
    thumbs[currentIndex].classList.add('active');

}
);


//  gestione navigazione dalle thumbs

for (let i = 0; i < thumbs.length; i++) {

    let currentThumbnail = thumbs[i];

    console.log(currentThumbnail);

    currentThumbnail.addEventListener('click', () => {
        // rimuovo l'active dalla slide corrente
        slides[currentIndex].classList.remove('active');
        // rimuovo l'active dalla thumb corrente
        thumbs[currentIndex].classList.remove('active');

        // setto il valore di currentIndex
        currentIndex = i;

        // aggiungo l'active alla slide nuova
        slides[currentIndex].classList.add('active');
        // aggiungo l'active alla thumb nuova
        thumbs[currentIndex].classList.add('active');

    });

}
