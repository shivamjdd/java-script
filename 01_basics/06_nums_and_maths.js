const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toFixed(2));

const otherNumber = 23.43431
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); // negative postive aur postive postive rehta hy

// console.log(Math.round(4.4));
// console.log(Math.ceil(4.7)); // 4 sy upar jo bhi ho wo 5 hi lega 
// console.log(Math.floor(4.7));
// console.log(Math.random());

// console.log((Math.random()*10) + 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min +  1 ))+ min )