const cars = [
    {
        marca: 'Alfa Romeo',
        modello: 'Giulietta',
        alimentazione: 'benzina',
    },
    {
        marca: 'FIAT',
        modello: 'Doblò',
        alimentazione: 'diesel',
    },
    {
        marca: 'Tesla',
        modello: 'robot',
        alimentazione: 'elettrico',
    },
    {
        marca: 'FIAT',
        modello: 'Panda',
        alimentazione: 'benzina',
    },
    {
        marca: 'FIAT',
        modello: 'Fiorino',
        alimentazione: 'metano',
    },
    {
        marca: 'Ford',
        modello: 'Fiesta',
        alimentazione: 'diesel',
    },
    {
        marca: 'Ford',
        modello: 'Ka',
        alimentazione: 'gpl',
    },
    {
        marca: 'Smart',
        modello: 'Smart',
        alimentazione: 'elettrico',
    },
    {
        marca: 'VW',
        modello: 'California',
        alimentazione: 'diesel',
    },
    {
        marca: 'Reanult',
        modello: 'Twingo',
        alimentazione: 'gpl',
    },
];

const benzinaCars = cars.filter(car => car.alimentazione === 'benzina');
const dieselCars = cars.filter(car => car.alimentazione === 'diesel');
const otherCars = cars.filter(car => car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel');

console.log(benzinaCars);
console.log(dieselCars);
console.log(otherCars);


