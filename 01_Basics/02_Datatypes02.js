
 let score = true               // number value is 1
//  let score = undefined               //
//  let score = null               //type is Object and Value is Zero
// let score = "abc"
// let score = "34"

// console.log(score);
// console.log(typeof score);
// console.log(typeof (score));

// to conver into Number

// let valueInNumber = Number(score)
// console.log(valueInNumber);                 // => NaN - Not A Number but value not Zero
// console.log(typeof (valueInNumber));


// to conver string

// let valueInString = String(score)       //value convert into String and store in varibale
// console.log(typeof valueInString);      // find the type of datattype
// console.log(valueInString);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


//  to convert into boolean

// let isLoggedIn = true
let isLoggedIn = false

let valueInBoolean = Boolean(isLoggedIn)


console.log(valueInBoolean);                        // false
console.log(typeof valueInBoolean);                 // boolean
console.log( typeof (Number(valueInBoolean)));         // number
console.log(Number(valueInBoolean));                //=> 0