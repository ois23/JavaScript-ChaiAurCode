const name = "Owais ";
const repoCount = 50;

//   console.log(name + repoCount + " Value");  // not recommended toady its very old method

//Used String Interpolation method
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// const a = 5;
// const b = 10;
// console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

//--------- new String declaration method----------

// const gameName = new String('OwaisAnsari')

// console.log(gameName[1]);       // =>w    . 2nd digit "w" position is 1
// console.log(gameName.charAt(1));
// console.log(gameName.__proto__);

// console.log(gameName.length);                       // find the string length
// console.log(gameName.toLocaleUpperCase());          // change string into upercase

// original string value i.e. "owais" will same never change to upper case bcuz its a Primitive

// console.log(gameName.indexOf('i'));         // => 3

// ------------ Substring method --------------
 // syntax --->     substring(Starting, End)

 
//  const newString = gameName.substring(1, 7)     //starting from 1 i.e "w" and end before 7th i.e. "s"
//  console.log(newString);                //waisAn


 //------ Slice, Syntax --> string.slice(start, end)

// const gameName = "1234567890ABCDEFGH"
//  const anotherString = gameName.slice(2, 8)     // 345678
//  console.log(gameName.slice(-7));           // ==> BCDEFGH --Start from End to start upto 7 digit
    // console.log(gameName.slice(-10, -3));      // ==>  90ABCDE
    // console.log(gameName.slice(2, -8));
//  const anotherString = gameName.slice(-12, 3)
//  console.log(anotherString);



//-------------- trim----------- is used to removed the sapces starting and end
// const newStringOne = "  owais     "
// console.log(newStringOne.trim());       // ==> owais
// console.log(newStringOne.trimStart());       // ==> owais_____
// console.log(newStringOne.trimEnd());       // ==>   ___owais


//-----------replace------
const url = "https://owais@google.com/owais%20ansari%20bhiwandi"

console.log(url.replace('%20', '-'));  // ==> https://owais@google.com/owais-ansari --replace the %20 to -


//---------includes ----- used to find or seacrh
console.log(url.includes('ansari'));            // true , it means ansari is availabe in url string

console.log(url.split('%20'));      // [ 'https://owais@google.com/owais', 'ansari', 'bhiwandi' ]




