// Array function

const marvel_heros = ["Thor", "IronMan", "SpiderMan"]
const DC_heros = ["SuperMan", "Flash", "batman"]



//---------- try to add or merge both arrays

// marvel_heros.push(DC_heros)
// console.log(marvel_heros);       // [ 'Thor', 'IronMan', 'SpiderMan', [ 'SperMan', 'Flash', 'batman' ] ]
// // result not satisfied 

// console.log(marvel_heros[3]);       // => [ 'SuperMan', 'Flash', 'batman' ]
// //---------- Push method - add 2nd array as last element not each elements of 2nd array
// console.log(marvel_heros[3][2]);        // batman


// const all_heros = marvel_heros.concat(DC_heros)
// console.log(all_heros);             // [ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'batman' ]



// Concat give good result but we have more better and easy method called "spread" method
//---- spread method

//  ---- Syntax of Concat Spread operator         [...1stArray, ...2ndArray, ...3rdArray, ...nthArray]
// console.log([...marvel_heros, ...DC_heros]);


//--------------------- flat() method

const mixed_array = [1, 2, 3, [3,4,5], 6, 7,[8, 9, [10, 11]]]

// const open_array = mixed_array.flat(1)             
// Syntax Array.flat(depth), depth inside the array of array
// console.log(open_array);             //[ 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, [ 10, 11 ] ]

const open_array = mixed_array.flat(2)             
// console.log(open_array);              //[ 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

// const open_array = mixed_array.flat(Infinity)             
// used "Infinity" in depth to easy



// console.log(Array.isArray("Avais"));            //=> false
// used to find array

// ----------------- .from() - convert to array
// console.log(Array.from("Avais"));           // => [ 'A', 'v', 'a', 'i', 's' ] interesting
// console.log(Array.from({name: "Avais"}));           // => []   it give the empty array, interesting



//---------------------------------- .of()
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));    // [ 100, 200, 300 ]
// The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.








