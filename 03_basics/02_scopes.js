let a = 300

// var c = 30

if(true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "shivamjd"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()
 if (true){
    const username = "iamshivamjd"
    if (username === "iamshivamjd"){
        const website = " google"
       // console.log(username + website);
    }
    // console.log(website);
 }

//  console.log(username);

// +++++++++++++++ interseting +++++++++++++++++++++
console.log(addone(5));

function addone(num){          // agar ap is tarah sy pe addone ko access karenge before initalization ho jayega 
    return num + 1
}

console.log(addtwo(5));  //agar ap is tarah sy access karenge variable decalare krke toh nh hoga cant access addtwo before intali_ 
const addtwo = function(num){
    return num + 2
}

