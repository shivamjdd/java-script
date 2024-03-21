// Immediately Invoked Function Expressions (IIFE)

(function chai () {     // global sope k pollution sy problem hoti hy us sy bachne k liye iife
   // named iffi hy 
    console.log("DB CONNECTED");
})();

((name) => {
    console.log(`DB COONECTED TWO ${name}`);
}) ("shivamhllo");