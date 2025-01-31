console.log("Hey sono in Node!!");



// importiamo tutto l'oggetto esportato salvandolo in una variabile
// const myContent = require("./modulotest.js");

// myContent.sum();
// console.log(myContent.user.name);



// importiamo singolarmente le proprietà
// dell'oggetto tramite destructuring 
const { sum, user } = require("./modulotest.js");

// versione ESM
// import { sum, user } from "./modulotest.js"


sum()
console.log(user.name);