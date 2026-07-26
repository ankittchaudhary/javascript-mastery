//A JavaScript Map is an object that can store collections of key-value pairs, similar to a dictionary in other programming languages.
//The Map object in JavaScript allows you to store and manage key-value pairs, where both keys and values can be of any data type. It provides methods for adding, retrieving, and deleting key-value pairs, as well as iterating over the entries in the map. Maps are useful for situations where you need to associate values with unique keys and want to maintain the order of insertion.

//Creating a Map
const myMap = new Map();

/*
MAP CHARACTERISTICS:
1. Maps can have keys of any type, including objects and functions.
2. Maps maintain the order of insertion, meaning that when you iterate over a Map, the entries will be returned in the order they were added.
3. Maps have a size property that returns the number of key-value pairs in the Map.
4. Maps provide methods for adding, retrieving, and deleting key-value
*/

//Adding key-value pairs to the Map
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'New York');