/*
An Array is an object type designed for storing data collections.
Key characteristics of JavaScript arrays are:
    -Elements: An array is a list of values, known as elements.
    -Ordered: Array elements are ordered based on their index.
    -Zero indexed: The first element is at index 0, the second at index 1, and so on.
    -Dynamic size: Arrays can grow or shrink as elements are added or removed.
    -Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
*/

//WHY USE?
/*
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

same thing but increase in number of variables we can just simply do
const cars = ["Tata", "Mahindra", "BMW"]

and access each using index
*/

const desicars = ["Tata", "Mahindra"];
console.log(desicars)                          //Return the obj
console.log(typeof desicars)                   //type of obj

//Getting specific index
console.log(desicars[0])                    //Tata

//CREATING ARRAY USING Using the JavaScript Keyword new
const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars[0])