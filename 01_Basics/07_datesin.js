// Dates

// let myDate = new Date()

// console.log(myDate.toString());         //Mon Aug 07 2023 14:22:56 GMT+0000 (Coordinated Universal Tim
// console.log(myDate.toString());         //Mon Aug 07 2023 14:22:56 GMT+0000 (Coordinated Universal Tim
// console.log(myDate.toLocaleString());       // 8/7/2023, 2:22:56 PM
// console.log(myDate.toDateString());             //Mon Aug 07 2023

// console.log(typeof myDate);


//---- Creating a Date

// let myCreatedDate = new Date(2023, 0, 20)
                        //    yy  mm, dd - months started from 0
// let myCreatedDate = new Date(2023, 0, 20, 5, 4)                 
// let myCreatedDate = new Date("2023-01-15")                 
// console.log(myCreatedDate);                 // => 2023-01-20T00:00:00.000Z
// console.log(myCreatedDate.toDateString());                 // => Fri Jan 20 2023
// console.log(myCreatedDate.toLocaleDateString());        // => 1/20/2023 
// console.log(myCreatedDate.toDateString());          // => Sun Jan 15 2023
// console.log(myCreatedDate.toLocaleString());          // => 1/15/2023, 12:00:00 AM




//------------------ to find time stamp

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);               // => 1691419367988, the output time in millisecond



let newDate = new Date()
// console.log(newDate);                   //2023-08-07T14:48:47.525Z
// console.log(newDate.getMonth());            // => 7, month is August i.e. 8th but our system date started form "0" so output is '7'
// console.log(newDate.getMonth() + 1);        // => 8, add on to avoid end user confusion
// console.log(newDate.getDay());          // => 1, is Monday

console.log (newDate.toLocaleString('default', {
    weekday : "long",
    // timeZoneName : "long"
    
})
);              // => Monday, we can make customise as per requirement 


