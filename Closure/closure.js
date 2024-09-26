// const sum = function (a) {
//    console.log("Hello viewers " + a);
    
//    let c = 5;
//    return function (b) {
//     a + b + c
//    }
// }

// const store =  sum(200);
// console.log(store(7));





const sum = function (a,b,c) {
    
    return {
     getSumTwo: function () {
      return  a + b;
     },
     getSumThree: function() {
      return  a+b+c;
     }
    }
}

const store = sum(3,4,5);
console.log(store.getSumThree());
