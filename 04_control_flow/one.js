// if
// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 40){
//     console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=, === , !==

// const score = 200
// if (score > 100){
//     const power = 'fly'
//     console.log(`User Power: ${power}`);
// }


// const balance = 1000
// // if (balance > 500) console.log("test"),console.log("test2");;

// if(balance < 500){
//     console.log("balance is less than 500 maintain your balance");
// } else if (balance < 750){
//     console.log("balance is less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("balance is less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedaInFromEmail = true 

if (userLoggedIn && debitCard  ) {
    console.log("Allow to buy Courses");
} if (loggedaInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}