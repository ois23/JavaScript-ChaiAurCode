//
//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// Primitive type , all primitive writtent type alway Object

// 7 types : String, Number, Boolean, null, undefined, symbol (to make any value special or unique), BigInt

const score = 98
const scoreValue = 200.98

const isLoggedIn = false
const outSideTemp = null
let userEmail;      // default it "undefined"


// e.g. of Symobol
const id = Symbol('123')
const anotherId = Symbol ('123')

console.log(id == anotherId);       //false, both Symbol value are different
console.log(id === anotherId);      // false




// Reference ( Non Primitive), datatype is Function

// Array, Objects, Functions

const fruit = ["mango", "banana", "apple"];

// Object

let mySelf = {
    name: "Owais",
    age: 39,
}

//Function

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof scoreValue);             //number
console.log(typeof myFunction);             // function
console.log(typeof fruit);                  //object 
console.log(typeof id);             // symbol

// refer  the link 
// https://262.ecma-international.org/5.1/#sec-11.4.3