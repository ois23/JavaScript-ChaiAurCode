// console.log(2 > 1);         // ture
// console.log(2 == 1);        // false
// console.log(2 != 1);        // true


// console.log("2" > 1);   // true, JS automatice conver the String into Number
// console.log("2" > 5);     // false

// console.log(null < 0);      // false 
// console.log(null > 0);      // false
// console.log(null >= 0);     // ture
// console.log(null == 0);     // false

// comparisons convert null to a number, treating it as 0. that's why 1,2,3 working perfect.
// alway comparison properly done with same data type 

// console.log(undefined == 0);        //false
// console.log(undefined > 0);        //false
// console.log(undefined < 0);        //false

 // ===  strick check

 console.log("2" == 2);         // ture, == check only value not data type, JS assumed "2" as a number
 console.log("2" === 2);        // false, === check value as well as data type 
 console.log("AB" == "BA");        // false
