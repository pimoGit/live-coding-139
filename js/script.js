// selezioniamo tutti gli elemtni della pagina di input
const titleField = document.getElementById('title-field');
const nameField = document.getElementById('name-field');
const companyField = document.getElementById('company-field');
const roleField = document.getElementById('role-field');
const emailField = document.getElementById('email-field');
const phoneField = document.getElementById('phone-field');
const picField = document.getElementById('company-pic-field');
const form = document.querySelector('form');



// selezioniamo tutti gli elemtni della pagina di output
const title = document.getElementById("title");
const name = document.getElementById('name');
const company = document.getElementById('company');
const role = document.getElementById('role');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const companyPic = document.getElementById('company-pic');

// tramite l'invio del form prendiamo i valori dei campi selezionati e li scriviamo nei blocchi

form.addEventListener('submit', (event) => {
    // Blocco l'invio del form..
    event.preventDefault();

    // Tutto il resto del codice...
    console.log("il form cerca di essere inviato");
    // prendi i selettori di output e scrivi dentro i valori presi dagli input
    title.innerHTML = titleField.value.trim();
    name.innerHTML = nameField.value.trim();
    company.innerHTML = companyField.value.trim();
    role.innerHTML = roleField.value.trim();
    email.innerHTML = emailField.value.trim();
    phone.innerHTML = phoneField.value.trim();
    // scrivo all'interno dell'attributo src del tag img
    companyPic.src = picField.value;
});