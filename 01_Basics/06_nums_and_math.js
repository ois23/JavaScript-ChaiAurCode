// const score = 400
// console.log (score);

// const balance = new Number(100)
// console.log(balance);                       //==> [Number: 100]

// console.log(balance.toString().length);     // ==> 3 , show the variable length , length of 100 is 3
// // console.log(balance.toFixed());             // => 100, fixed the digit of fractional values
// console.log(balance.toFixed(2));             // => 100.00, fixed the digit


// const othrNumber = 123.456789

// console.log(othrNumber.toPrecision(5));     // => 123.46 , take precise value / round up the value at given number

// const hundreds = 10000000
// console.log(hundreds.toLocaleString());           // ==> 10,000,000 , used to add commas , default  in US number system
// console.log(hundreds.toLocaleString('en-IN'));          // 1,00,00,000  , en-IN is used to make in US to Indian system



// ++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++
// maths lab is default added in JS

// console.log(Math);
// console.log(Math.abs(-4));      //=> 4, -4 absolute value is 4
// console.log(Math.abs(8));      //=> 8

// console.log(Math.round(7.6));           //=> 8
// console.log(Math.round(7.4));           //=> 7

// console.log(Math.ceil(8.4));        // => 9, its give the upper value i.e. 9
// console.log(Math.floor(8.4));       // => 8
// console.log(Math.min(19,90,78,2,4,));           // 2, we get min value
// console.log(Math.max(19,90,78,2,4,));           // 90, we get min value




        // Random number
// console.log(Math.random());         // we get any number between 0 to 1, i.e. 0.23647862 or 0.092361

    // if we want number between 1 to 10
// console.log(Math.random()*10);     // but we get some fractional number 
// console.log((Math.random()*10)+1);      // we add "1" to avoid result "0"

// console.log(Math.floor((Math.random()*10)+1));      // now we get any random number between 1 to 10



    // to find random number between 10 to 25
const min = 10
const max = 25

// console.log(Math.floor(Math.random()*(max - min + 1)));          // number between 1 to 25

// console.log(Math.floor(Math.random()*(max - min + min)));        // number between 1 to 25

console.log(Math.floor(Math.random()*(max - min + 1))+ min);        // number between 10 to 25
//           get real number        get non zero <25   get bet 10 to 25







