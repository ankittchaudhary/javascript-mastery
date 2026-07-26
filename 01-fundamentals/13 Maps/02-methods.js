//You can create a map by passing an array to the new Map() constructor

// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits); // Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }

//map.get(key) - returns the value associated with the key, or undefined if the key doesn't exist in the map
console.log(fruits.get("apples")); // 500
console.log(fruits.get("grapes")); // undefined

//map.set(key, value) - adds a new key-value pair to the map or updates the value of an existing key
fruits.set("grapes", 400); // Add a new key-value pair
fruits.set("apples", 600); // Update the value of an existing key
console.log(fruits); // Map(4) { 'apples' => 600, 'bananas' => 300, 'oranges' => 200, 'grapes' => 400 }

//map.size - returns the number of key-value pairs in the map
console.log(fruits.size); // 4

//map.delete(key) - removes the key-value pair associated with the specified key from the map
fruits.delete("oranges"); // Remove the key-value pair for "oranges"
console.log(fruits); // Map(3) { 'apples' => 600, 'bananas' => 300, 'grapes' => 400 }


//map.has(key) - returns true if the map contains the specified key, otherwise returns false
console.log(fruits.has("apples")); // false

//map.clear() - removes all key-value pairs from the map
fruits.clear();
console.log(fruits); // Map(0) {}