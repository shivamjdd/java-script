
function sayMyName() {      // function keyword hy saymyname jo hy wo reference hy () syntax hy {} scope or defination
    console.log("h");
    console.log("i");
    console.log("c");

}

// sayMyName()


// function addTwoNumbers(number1 , number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = addTwoNumbers(3,8)
// console.log("Result:", result);

function loginusermessage(username) {
    if(!username){
        console.log("Please enter a useername");
        return
    }
    return `${username} just logged in `

}

// console.log(loginusermessage("Shivam"));

// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200,300,400));

function calculateCartPrice(val1,val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200,300,400,500));

const user = {
    username: "Shivam",
    price: 199,
}

function handleObject(user) {
    console.log(`Userame is ${user.username} and price is ${user.price}`);
}

// handleObject({
//     username: "Chor",
//     price: 399,
// })

// handleObject(user)

const myNewArray = [200,300,500]

function returnSecondValue(myNewArray) {
    return myNewArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,500]))