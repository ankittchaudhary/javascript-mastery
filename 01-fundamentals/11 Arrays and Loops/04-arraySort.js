//sort()     method sorts an array alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort())   //["Apple", "Banana", "Mango", "Orange"]

//reverse()  method reverses the elements of the array
// ["Apple", "Banana", "Mango", "Orange"]
console.log(fruits.reverse()) 

//By combining sort() and reverse(), you can sort an array in descending order
const nums = [1, 2, 4, 3, 7, 9, 9, 5, -1]
console.log(nums.sort())  //1, 2, 3, 4, 5, 7, 9
console.log(nums.reverse())

//BUT SORT() in numbers create problem if numbers are stored as string so use like this
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)

//But in above sort() the og array is changed
//We can use toSorted()

const months = ["jan", "feb", "march", "april"];
const sorted = months.toSorted();

console.log(sorted)  //april, feb, jan, march

//toReversed() also 