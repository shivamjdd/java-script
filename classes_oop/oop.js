const user = {
    username: "shivam",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log(`Username: ${this.username}`);
        
    }
}


// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount, isLoggedin) {
    thisusername = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin

    return this
}

const userOne = new User('shivam', 12 , true );
const userTwo = new User('Gupta', 11 , false );
console.log(userOne);


// step 1 - new keyword
// new object generate hota hy new instance 
// constructor function call hota jitne argument wagera pack krta hy
// aur apko deta hy
// this keyword hy jo apne argument likhe hy uske andar inject ho jate hy
// apko mil jate hy function k andar