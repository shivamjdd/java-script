// let userDetails = {
//     name: "Shivam Gupta",
//     age: 22,
//     Designation: "Junior Developer",
//     printDetails: function () {
//         console.log(this.name);
        
//     }
// }

// userDetails.printDetails();


// let userDetails2 = {
//     name: "Sumit Gupta",
//     age: 16,
//     Designation: "Junior Developer",
    
// }

// // function borrowing
// userDetails.printDetails.call(userDetails2);



// Case 2:

let userDetails = {
    name: "Shivam Gupta",
    age: 22,
    Designation: "Junior Developer",
    
}

let printDetails = function (state,country) {
    console.log(this.name +" " +state + " "+ country);
    
}


printDetails.call(userDetails, "Jammu", "India");


let userDetails2 = {
    name: "Sumit Gupta",
    age: 16,
    Designation: "Junior Developer",
    
}

// function borrowing
// printDetails.call(userDetails2, "Delhi","India");
printDetails.apply(userDetails2, ["Delhi","India"]);


// case 3 bind

let newfun = printDetails.call(userDetails, "Jammu", "India");
newfun();
