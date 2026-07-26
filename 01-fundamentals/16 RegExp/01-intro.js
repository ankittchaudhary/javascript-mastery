/*
Regular Expressions
====================
A Regular Expression is a sequence of characters that forms a search pattern.
Regex is a common shorthand for a regular expression.

JavaScript RegExp is an Object for handling Regular Expressions.

RegExp are be used for:

 - Text searching
 - Text replacing
 - Text validation

Regular Expressions (Regex) in JavaScript are used to search, match, validate, and replace text patterns. 
They are extremely useful in form validation, log parsing, search features, and data cleaning.
*/

let text = "Hello World";
let pattern = /World/i; // Regular Expression pattern with 'i' flag for case-insensitive search

/*
/world/ is a regular expression.
world is the pattern we want to search for in the text.

*/

console.log(pattern.test(text)); // Output: true

/*
Syntax of Regular Expressions:
/pattern/modifier flags;


*/

//String Methods
// using match(regex) Returns an array of results
let text1 = "I like India!"
let n = text1.match(/india/i);
console.log(n) //null because case sensitive but using i modifier makes case-insensitive or use /India/ and not /india/

// using replace()
let result = text1.replace(/like/i, "love")
console.log(result); //I love India!

// using search()    -> returns index of first match
console.log(text1.search(/India/i));  //7


//OR
let txt = "Black, white, red, green, blue, yellow.";

let res = txt.match(/red|green|magenta/g); 
console.log(res); //[red green] because no magenta there
