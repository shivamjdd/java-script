const accountId = 14453;
let accountEmail= "user@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";


// accountId = 2; // not allowed
console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/