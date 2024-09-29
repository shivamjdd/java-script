// Rest Operator

// function addNumbers(a,b,c,...other){
//   console.log(other);
//   return a+b+c;
// }
 
// const result = addNumbers(2,5,6,8,9)
// console.log(result)
 
 
 // Spread Operator
 
 let names = ["Shivam", "Ashwin", "Vivek", "Ram"];
 
 function getNames(name1, name2, name3,name4){
   console.log(name1,name2,name3,name4)
 }
 
// getNames(names[0], names[1], names[2])
getNames(...names)


// Object ke sath _ result

let student = {
  name: "Shivam Gupta",
  age: "28",
  hobbies: ["Cricket", "Badminton"]
}

// const age = student.age;
const { ...rest} = student;
console.log(rest)


//Spread

let newStudent = {
  ...student
}

console.log(newStudent)