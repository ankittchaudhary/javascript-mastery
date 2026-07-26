//new Set()
const letters = new Set(["a", "b", "c", "d"]);

// add()
letters.add("e");

//size

console.log(letters.size)  //5

//.had()
console.log(letters.has("a")) //true

//values()
console.log(letters.values())

//keys()
//A Set has no keys, so keys() returns the same as values()
console.log(letters.keys())

//The entries() method is supposed to return a [key,value] pair from an object.
//A Set has no keys, so the entries() method returns [value,value].
console.log(letters.entries())