function walkDog() {
    
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            resolve("You walk the dog🦮")
            
          }, 1500);
    })
  }
  
  function CleanKitchen() {
    

    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("You clean the kitchen🍷")
            
          }, 2500);
    })
  }
  
  function takeOutTrash() {
    
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Take out the trash🕸")
          }, 500);
    })
  }
  
  walkDog().then(value => {console.log(value); return CleanKitchen().then(value => {console.log(value); return takeOutTrash().then(value => {console.log(value)})})})