// # Primitive (these are call by value ) (Jab bhi hum inko call krte hy inka jo orignal data hy inka reference apko nhi diya 
// jata inko copy krke diya jata hy AUR Change bhi copy mai hota hy uski )

// 7 types : String , Number , Bollean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 525626262662626266262727n

// Reference ( Non Primitive)

// Array , Objects , functions

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name: "Shivam";
    age: 23,
}

const function() = function() {
    // console.log("hello")
}


console.log(typeof outSideTemp);