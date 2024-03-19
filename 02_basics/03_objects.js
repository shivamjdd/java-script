// singleton (Literal ki trah sibgle ton nhi bnta  )
// Object.create (isi ko bola jata hy constructor k through and is mai hi singleton bnta hy )

// objects literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Shivam",
    [mySym]: "key1",
    age: 18,
    location: "Jammu",
    email: "shivam@google.com",
    isLoggedIn: false,
    lastDayLogin: ["Monday","Saturday"]

}

// console.log(jsUser.age);
// console.log(jsUser["email"]);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email = "shivam@yahoo.com"
// Object.freeze(jsUser) // ab freezeab koi change nhi ho payega

jsUser.email = "shivam@poken.com"

// console.log(jsUser.email);
// console.log(jsUser);

jsUser.greeting = function () {
    console.log('Hello Js User');
}


jsUser.greetingTwo = function () {
    console.log(`Hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());