const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumber.map((num) => num + 10 )
// console.log(newNums);

// const newNums = []
// myNumber.forEach((num) => { 
//     if(num > 0) {
//         newNums.push(num + 10) 
//     }
// })
// console.log(newNums)

// do this instead of upper one 

// const newNums = [];

// myNumber.forEach((num) => {
//     newNums.push(num + 10);
// });

const newNums = myNumber
        .map( (num) => num * 10 )
        .map( (num) => num + 1)
        .filter((num) => num >= 40)
console.log(newNums);

