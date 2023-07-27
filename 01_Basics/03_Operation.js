let value = 3
let negValue = -value

// console.log(negValue);

// console.log(1+2+"3");           // last value consider as String
// console.log(1+(2+"3"));           // last value consider as String
// console.log("1" + 2 +3);        //all value consider as String

// all this operation done by ECMA standard https://tc39.es/ecma262/#sec-abstract-operations


// console.log(true);      // => true
// console.log(+true);      // => 1
// console.log(true+);      // Syntax Error

let gameCounter = 100
++gameCounter;          // prefix operator , increament and store
gameCounter++;          // postfix operator , store and after increamnet
// to understand prefix and posfix check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

console.log(gameCounter);

//------- Prefix increament e.g. --------------
// let x = 3;
// const y = ++x;
// // x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// x2 is 4n; y2 is 4n


//----------------- Post increament e.g ------------
// let x = 3;
// const y = x++;
// // x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// // x2 is 4n; y2 is 3n