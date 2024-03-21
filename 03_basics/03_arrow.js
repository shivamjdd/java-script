const user = {
    username: "shivam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username ="rohan"
// user.welcomeMessage()


// console.log(this);

// function chai(){
//     let username = "shivam";
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "shivam";
//     console.log(this.username);
// }
// chai()

const chai = () => {
         let username = "shivam";
         console.log(this);
     }
    //  chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2    // implesis return ismai {} use nhi krte 
// const addTwo = (num1, num2) => (num1 + num2) // () likha to reurn nhi likhna padega

const addTwo = (num1, num2) => ({username: "shivam"})
console.log(addTwo(1,2));

