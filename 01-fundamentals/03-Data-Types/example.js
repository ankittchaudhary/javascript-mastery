
//=========Data Types


//=== Premitive====
/*
- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt
*/

//JS is Dynamic so we do not define data type at time of creating variables

//Number
let age = 23; 

//String
let name = "Ankit";

//boolean
let isLoggedIn = false;


//undefined
let xyz;
console.log(xyz); //undefined

//Null
let nullValue = null;
console.log(nullValue); //null means empty value


// NON_PREMITIVE DATA TYPES
/*
*/

let user = {
    firstName: "Ankit",
    lastName: "Chaudhary",
    isLoggedIn: true, //we are ale to change because we used let and not const :)
}

console.log(typeof user); //object
//            |
//  typeof is used to know the data type of a variable or value

console.log(typeof 4); //number