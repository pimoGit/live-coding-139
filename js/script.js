// DESTRUTTURAZIONE OGGETTO
let name;



const student = {
    name: 'Paolo',
    age: 30,
    email: 'paolo@email.it'
};


//    descruturing
const { name: nameStudente, email } = student;

// versione estesa
const nameStudentename = student.name;
const email = student.email;




console.log(nameStudente, email);


