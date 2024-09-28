// function show() {
//   console.log("Hi");
// }
// function abc () {
//   show()
// }

// abc()


function fact(n){
    if(n==0)
    return 1;
    
    else
    
    return n * fact (n-1);
  }
  
  let num = 4;
  let result = fact(num);
  console.log(result)
  