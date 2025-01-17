// dati del team
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// selezione elemento di output
const listTeam = document.querySelector(".team-container");
// console.log(listTeam);


let items = "";
// output temporaneo con LI in UL
for (let i = 0; i < teamMembers.length; i++) {
    let menbroIesimo = teamMembers[i];
    // console.log(menbroIesimo);

    // estrapoliamo i valori delle varie prop dell'oggetto
    // let name = menbroIesimo.name;
    // let role = menbroIesimo.role;
    // let image = menbroIesimo.image;

    // const { name, role, image } = menbroIesimo;

    // console.log(name, role, image);

    items += generaTeamMember(menbroIesimo);

    console.log(items);

}

// ouput
listTeam.innerHTML = items;



// FUNZIONI

function generaTeamMember(oggetto) {

    // destrutturazione dell'oggetto
    const { name, role, image } = oggetto;

    let item = `    
    <div class="team-card">
        <div class="card-image">
            <img src="img/${image}" alt="${name}" />
        </div>
        <div class="card-text">
            <h3>${name}</h3>
            <p>${role}</p>
        </div>
    </div>
    `

    return item


}