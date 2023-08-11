//---------------- Array ------------------------

// Array are "zero-indexd" i.e. start with 0 index#
// Array make Shallow copy , A shallow copy of an object is copy whose properties share the same references as those of the source object from which the copy was made.

const myArray = [1, 2, 3, 4, 5, 6, 7]
const myHeors = ["ironman", "Spiderman", "Hulk"]

const myArray2 = new Array(2, 3, 4)         // we can also write array's elements under "( )"
// console.log(myArray2);                      //=> [ 2, 3, 4]

// console.log(myHeors);                   // => [ 'ironman', 'Spiderman', 'Hulk' ]



// Array methods

//----------- Push method      - used to add element at last position 

myArray.push(3)                 // add new element "3" at the last/End of array
// console.log(myArray);           // => [1, 2, 3, 4, 5, 6, 7, 3]
myArray.push(8) 
// console.log(myArray);           // => [1, 2, 3, 4, 5, 6, 7, 3, 8]

// myArray.push(" Hi")
// console.log(myArray);           // => [1, 2, 3, 4, 5, 6, 7, 3, 'Hi']

    // unshift method       - add at element at Starting position
// myArray.unshift(7)
// console.log(myArray);           // => [7, 1, 2, 3, 4, 5, 6, 7, 3]

// ** this method are not used cuz all elements position will changed.
// So is it not good practice



//----------- POP method   - used to remove last element
// myArray.pop()
// console.log(myArray);            // => [1, 2, 3, 4, 5, 6, 7, 3]
// myArray.pop()
// myArray.pop()                   // removed 2 element
// console.log(myArray);           // => [1, 2, 3, 4, 5, 6]


// shift method             -used to removed 1st element
// myArray.shift()
// console.log(myArray);           // => [ 2, 3, 4, 5, 6 ]



// includes()           - used to find any element in array , boolean output
// console.log(myArray);
// console.log(myArray.includes(5));       //=> true
// console.log(myArray.includes(20));       //=> false

// indexof          - find the element at particular position 
// console.log(myArray.indexOf(6));        // => 5
// console.log(myArray.indexOf(16));        // => -1, bcuz we asked value of beyond the array elements


// join()
// const array3 = myArray.join()               //all elements converted into String
// console.log(myArray);                       // => [1,2,3,4,5,6,7,3,8]
// console.log(array3);                    // => 1,2,3,4,5,6,7,3,8
// console.log(typeof (array3));          // string




//  slice('Start' , 'End before')             cut the array elements 
const myn1 = myArray.slice(1, 4)            // start from 1 index i.e. '2' and end before 4th index i.e. '5'
// const myn1 = myArray.slice(2, 5)            // start from 2nd index i.e. '3' and end before 5th index i.e. '6'
console.log("A", myArray);                       // => [1,2,3,4,5,6,7,3,8]

console.log(myn1);                          // => [2, 3, 4]
console.log("B", myArray);


//--- Splice                    , it will remove the element from original array

const myn2 = myArray.splice(1, 3)
console.log(myn2);                          // [ 2, 3, 4 ]
console.log("C", myArray);                       // [ 1, 5, 6, 7, 3, 8 ] , the original array changed




