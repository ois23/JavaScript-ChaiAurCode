const accountId = 223311;
let accountEmail = "avais@gmail.com";
var accountPassword = "11223344"; // Prefer not to use var, because of issue in block scope and functional scope
accountCity = "Mumbai"; // we can make a variable without define the key but is not good practice

let accountState; // o/p should be "Undefined" cuz we not store any date or value

console.log(accountId, accountEmail, accountPassword, accountCity);

// accountId = 009988 // not allowed
accountEmail = "newavais@gmail.com";
accountPassword = "990022";
accountCity = "Thane";

console.log(accountId, accountEmail, accountPassword, accountCity);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]); //used to print in tabular form
