# live-coding-139
Live coding per la classe 139

Abbiamo una lista di slides
da questa lista vogliamo ricavarci un carosello
che quindi presenti tutte le immagini navigabili con due pulsanti (prev-next)


------ CREAZIONE DINAMICA DELLE SLIDES

LISTA delle slide
- img1 , Titoolo relativo a img1, testo relativo a img2
- img2 , Titoolo relativo a img2, testo relativo a img2
- img1 , Titoolo relativo a img1, testo relativo a img2
- img1 , Titoolo relativo a img1, testo relativo a img2
- img1 , Titoolo relativo a img1, testo relativo a img2

TIRO FUORI OGNI ELEMENTO SLIDE
CICLO (per tutte le slides in lista)<----

tirami fuori il prossimo elemento dalla lista

per ogni elemento slide,  creami un elemento di pagina con il contenuto relativo alla slide che hai estrapolato in questo momento del ciclo e aggiungimelo al precedente 

-->
( alla fine avremo il gruppo di tutti gli elementi)

sull'elemento di pagina nel quale è previsto di inserire gli elementi creati, mettiglieli dentro



--------- GESTIRE LA NAVIGAZIONE TRA LE VARIE SLIDE
possiamo fare affidamento alla posizione degli elementi (indiceElementoListaTag)

selezionando gli elementi creati nel primo macro task
ottengo una lista ordinata delle slides in pagina
LISTA delle slide
- TAG CON DENTRO: img1 , Titoolo relativo a img1, testo relativo a img2
- TAG CON DENTRO: img2 , Titoolo relativo a img2, testo relativo a img2
- TAG CON DENTRO: img1 , Titoolo relativo a img1, testo relativo a img2
- TAG CON DENTRO: img1 , Titoolo relativo a img1, testo relativo a img2
- TAG CON DENTRO: img1 , Titoolo relativo a img1, testo relativo a img2

inizializzo la selezione (che si veda) il primo elemento (slide)
ListaTagSlide-posizione->indiceElementoListaTag

------GESTIONE BOTTONE NEXT
rimani in ascolto del click sul bottone NEXT<------

    TOLGO la selezione all'elemento prima di aggiornare la posizione
    ----ListaTagSlide-posizione->indiceElementoListaTag

    aggiorna indiceElementoListaTag aggiungendo una unità

    AGGIUNGO la selezione all'elemento prima di aggiornare la posizione
    ----ListaTagSlide-posizione->indiceElementoListaTag

----->