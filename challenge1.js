const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / (johnHeight * johnHeight);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);
