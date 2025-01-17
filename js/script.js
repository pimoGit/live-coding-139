//Spred rest ARRAY

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];


const copyArr = [...array1];

const arrTot = [...array1, ...array2];

const copyArr2 = [];
for (let i = 0; i < array1.length; i++) {
    copyArr2.push(array1[i]);
}

console.log(copyArr, arrTot);


