function walkDog() {
    
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
          const dogWaled = true;
          if(dogWaled){
            resolve("You walk the dog🦮")
          } else{
            reject("You didn't walk the dog")
          }
            
            
          }, 1500);
    })
  }
  
  function CleanKitchen() {
    

    return new Promise((resolve,reject) => {
        setTimeout(()=>{
          const kitchenCleaned = true;
          if(kitchenCleaned){
            resolve("You clean the kitchen🍷")
          }else{
            reject("You didn't cleaned kitchen")
          }
            
            
          }, 2500);
    })
  }
  
  function takeOutTrash() {
    
    return new Promise((resolve,reject) => {
      
        setTimeout(()=>{
          const trashTakenOut = false;
        if(trashTakenOut){
          resolve("Take out the trash🕸")
        }else{
          reject("You didn't take out trash ")
        }
            
          }, 500);
    })
  }
  
  walkDog().then(value => {console.log(value); return CleanKitchen().then(value => {console.log(value); return takeOutTrash().then(value => {console.log(value); console.log("You done all the tasks") })})})
  .catch((error)=>{console.error(error)});