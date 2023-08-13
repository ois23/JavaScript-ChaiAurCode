// Object literals


//________________ Interview Quiz ?
// Q. ek symbol lo usse object keys me print ker k dedo?  
// Q. how to use Symbol as a key?

const mySym = Symbol ("key1")       // symbol define


const JsUser = {
    // mySym: "mykey1",
    [mySym]: "mykey1",          // correct syntax for Symbol key
    name: "Avais",
    "full name": "Avais Ansari",
    age: 38,
    location: "Mumbai",
    email: "avais@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);           //=> Avais Ansari

// console.log(JsUser.mySym);                  // => mykey1
// console.log(JsUser[mySym]);           // correct method
// console.log(typeof JsUser[mySym]);           // => string   
// more info : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

//----------------- Object value access by "." notation  (e.g.  Object.keys()  )
//-------------- replace the Object value
// JsUser.email = "avais@microsoft.com"
// console.log(JsUser.email);                     // => avais@microsoft.com 


// console.log(JsUser);                //email changed 

// --------------- lock object value / freeze
// Object.freeze(JsUser)
// JsUser.email = "ansari@yahoo.com"
// console.log(JsUser);                        // all remain same before .freeze




//_________________Function__________________
 JsUser.greeting = function(){                      // function define
    console.log("Hello JS user");
 }

 // reference any object   - syntx - (`text ${this.key}`)
JsUser.greeting2 = function(){
    console.log(`Hello JS user, Mr. ${this.name}`);
}
 console.log(JsUser.greeting());                    // function call
 console.log(JsUser.greeting2());                    // function call with object value