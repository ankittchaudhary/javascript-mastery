//forEach
//The forEach() method calls a function (a callback function) once for each array element.

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});


//map
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const numbers2 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers2.map(function(number) {
  return number * number;
});
console.log(squaredNumbers);  //[1, 4, 9, 16, 25]

//filter
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter((number) =>{ return number % 2 === 0;});
console.log(evenNumbers);  //[2, 4]

//reduce
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const numbers4 = [1, 2, 3, 4, 5];
const sum = numbers4.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum);  //15

