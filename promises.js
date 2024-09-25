// const promiseOne = new Promise(function(resolve, reject){
//     // do an async task 
//     // DB CALLS, CRYPTOGRAPHY , network
//     console.log('Async task is completed');
//     resolve()
// },1000)


// promiseOne.then(function(){
//     console.log("Promise consumed");
// })



// new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:'shivam', email: 'shivam@gmail.com'})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: 'shivam', password: '123'})
//         }else{
//             reject('Error: Something went wrong')
//         }
//     } ,1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//    return user.username
// })
// .then((username)=> {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(() => console.log('promise is either resolve or rejected'))

 
// const promiseFive = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: 'shivam', password: '123'})
//         }else{
//             reject('something went wrong ')
//         }

//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// async function getAllUsers(){
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//     console.log(data);
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
//     return response.json()
// }).then((data)=> {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })






//////////////////////////////########/////////////////////
 
// const promiseOne = new Promise(function (resolve,reject) {
//     // Do am asyn task
//     //Do calls, cryptography , network
//     setTimeout(function (){
//         resolve()
//         console.log('Asyn task is completed');
        
//     },1000)
// })

// promiseOne.then(function () {
//     console.log("Promise consumed");
// })


// new Promise(function (resolve,reject) {
//     setTimeout(function (params) {
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

// const promiseThree = new Promise(function (resolve,reject) {
//     setTimeout(function (params) {
//         resolve({username: "shivam",
//             email: "shivam@mail.com"
//         })
//     },1000)
// })

// promiseThree.then(function (user) {
//     console.log(user);
    
// })


// const promiseFour = new Promise(function(resolve,reject) {
//     setTimeout(function () {
//         let error = false;
//         if(!error){
//             resolve({username: "shivam123",
//                 email: "shiva123m@mail.com"
//             })
//         } else{ reject("ERROR: Something went wrong")}
//     },1000)
// })

// promiseFour.then( (user)=> {
//     console.log(user);
//     return user.username
// }).then((username)=> {
//     console.log(username);
    
// }).catch(function (error) {
//     console.log("404 ERROR!");
    
// }).finally(function () {
//     console.log("Promise is either resolve or rejected");
    
// })


// const promiseFive = new Promise((resolve,reject) => {
//     setTimeout(function () {
//         let error = true;
//         if(!error){
//             resolve({username: "javascript",
//                 email: "javascript@mail.com"
//             })
//         } else{ reject("ERROR: JS went wrong")}
//     },1000)
// })
 
// async function consumePromiseFive() {
//   try {
//     const response =   await promiseFive
//   console.log(response);
  
//   } catch (error) {
//     console.log(error);
    
//   }
// }

// consumePromiseFive()


// async function getAllUser () {
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
   
//   const data =  await response.json()
//   console.log(data);
//    } catch (error) {
//     console.log("E:", error);
    
//    }
  
// }

// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users').then((response)=> {return response.json()
}).then((data)=>{console.log(data);
}).catch((error) => {console.log(error);   
})