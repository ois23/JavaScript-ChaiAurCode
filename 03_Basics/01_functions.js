//  --------- function Syntax 
//      function <function name> (<parameters>) {  
//                  <function scope>
//      }

//      --------------   e.g 1 -------------------
//
function sayMyName () {
        console.log("A");
        console.log("V");
        console.log("A");
        console.log("I");
        console.log("S");
}

// sayMyName ()                // => AVAIS
// sayMyName is reference only  ,  () is execution 


//  --------------- e.g. 02 ------------------
// the value which are used in function define time is called "Parameters"
// value are used at execution or function call time is called "Arguments"

// function addtwoNumber (number1, number2) {
//     console.log(number1 + number2)
// }

// addtwoNumber (8, 3)         // => 11
// addtwoNumber (8, "3")         // => 83      ,bcuz we dont defined the data type of number1 and number2, it convert it into string
// addtwoNumber (8, "w")         // => 8w      ,bcuz we dont defined the data type of number1 and number2
// addtwoNumber (8, null)         // => 8      ,bcuz we dont defined the data type of number1 and number2


        // --- another method

// function addtwoNumber (number1, number2) {
//     console.log(number1 + number2);
// }

// const result = addtwoNumber (7, 2)
// console.log("Result: ",result);             // => "Undefined"  , result dont store any value now

function addtwoNumber (number1, number2) {
    let result = number1 + number2
    console.log("Ansari");              // => Ansari
    // console.log(number1);               // => 8
    return result
    console.log("Avais");               // not run this line bcuz after return function never do any thing
}
const result = addtwoNumber (8, 9)
console.log(result);                    // => 17 , value stored 
