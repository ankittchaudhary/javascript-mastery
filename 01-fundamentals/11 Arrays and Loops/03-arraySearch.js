//The indexOf() method searches an array for an element value and returns its position.
const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple"))    //0 as it returns the first index of the element
console.log(fruits.indexOf("Mango"))    //3
console.log(fruits.indexOf("Banana"))   //-1 as it is not present in the array

//array.indexOf(item, start)
//item	Required. The item to search for.
//start	Optional. The position to start the search. Default is 0.
const numbers = [2, 5, 9, 2];
console.log(numbers.indexOf(2))      //0
console.log(numbers.indexOf(2, 1))   //3 as it starts searching from index 1 and finds the next occurrence of 2 at index 3

//lastIndexOf() method returns the last index of a specified value in an array, or -1 if it is not found. The array is searched backwards, starting at fromIndex.
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo"))   //3 as it returns the last index of the element
console.log(animals.lastIndexOf("Tiger"))  //1
console.log(animals.lastIndexOf("Monkey")) //-1 as it is not present in the array

//Array.includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const pets = ["Cat", "Dog", "Elephant"];
console.log(pets.includes("Dog"))     //true
console.log(pets.includes("Monkey"))  //false as it is not present in the array

//Array.find() method returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.
const numbers2 = [5, 12, 8, 130, 44];
const found = numbers2.find(element => element > 10);
console.log(found)   //12 as it is the first element that is greater than 10

//Array.findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
const numbers3 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(numbers3.findIndex(isLargeNumber))   //3 as it is the index of the first element that is greater than 13

//Array.findLast() method returns the value of the last element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.
const numbers4 = [5, 12, 8, 130, 44, 10, 19];
const found2 = numbers4.findLast(element => element > 10);
console.log(found2)   //19 as it is the last element that is greater than 10

//Array.findLastIndex() method returns the index of the last element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
const numbers5 = [5, 12, 8, 130, 44, 10, 19];
const isLargeNumber2 = (element) => element > 13;
console.log(numbers5.findLastIndex(isLargeNumber2))   //6 as it is the index of the last element that is greater than 13