// function sayHello(){
//   console.log("Hello")
// }


// function sayHi(){
//   console.log("hy")
// }





// function add(num1, num2, callback){
//   sayHello();
//   sayHi();
//   console.log(num1 + num2);
//   callback();
// }

// add(10,20 , sayHi)
// // add(10,20, sayHello)



// Callback - a callback is a function or a piece of code that is passed as an argument to another function
// mostly used in asynronous programming


function processData(data){
    console.log("processing..." + data);
  }
  
  function deleteData(data){
    console.log("deleting..." + data);
  }
  
  function func(methodName){
    methodName("John")
  }
  
  func(processData);
  func(deleteData);
  