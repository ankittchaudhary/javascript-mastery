/*
Regex Flags

Flags are parameters that can modify how a regex pattern is used, such as making it case-insensitive or global.

/g          Performs Global Search
/i          Performs Case-Insensitive Search
/u          Enables Unicode Support
/m          Performs multiline search
*/

let text = "Is this all there is?";
const pattern = /is/g; // Global search for 'is'

let result = text.match(pattern);
console.log(result); // Output: [ 'is', 'is' ] this, is, not Is because case sensitive