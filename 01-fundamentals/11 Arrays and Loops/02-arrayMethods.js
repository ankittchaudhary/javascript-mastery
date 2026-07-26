
//BASIC ARRAY METHODS
//.length()                   returns the length (size) of an array
const cars = ["BMW", "Audi", "Porche", "Ford"];
console.log(cars.length) //4

//.toString()                 returns the elements of an array as a comma separated string
console.log(cars.toString())  //BMW,Audi,Porche,Ford

//.at(index)                  same as arr[index]
console.log(cars.at(0))   //BMW

//.join()                     joins all array elements into a string, It behaves just like toString(), but in addition you can specify the separator
console.log(cars.join("*"))   //BMW*Audi*Porche*Ford

//.pop()                      removes the last element from an array and returns the value that was "popped out"
console.log(cars.pop())       //will remove the last element that is Ford and return it
cars.pop()                    //will remove the last element that is Ford
console.log(cars)       //without Ford removed at line 17 and without Porche removed at line 18

//.push()                      adds a new element to an array (at the end)
cars.push("Ferrari")         //Add Ferrari in the last
console.log(cars)

//.shift()                     removes the first array element and "shifts" all other elements to a lower index.
cars.shift()                    //remove the BMW
console.log(cars) 

//.unshift()                 adds a new element to an array (at the beginning), and "unshifts" older elements
cars.unshift("BMW")
console.log(cars)

//Array.isArray()
console.log(Array.isArray(cars)); //true

//delete                       warning Using delete() leaves undefined holes in the array.
delete cars[0]                 //deletes the elem at index 0
console.log(cars)              //we can notice it leaves undefined holes Use pop() or shift() instead to delete

//CONCATENATION
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

//.concat()                    method creates a new array by merging (concatenating) existing arrays
const myChildren = myGirls.concat(myBoys);           //adds into girls array
console.log(myChildren)  

//.concat()  can take any number of array arguments
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const arr4 = arr1.concat(arr2, arr3);
console.log(arr4) 
 
//.concat()   method can also take strings as arguments:
const arr5 = arr1.concat("Peter"); 
console.log(arr5)

//.copyWithin() method copies array elements to another position in an array
//or Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

const chars = ["A", "B", "C", "D", "E"];
//Copy to index 2, all elements from index 0:
/*
        A B C D E
        0 1 2 3 4

        .copyWithin(0, 1 3)
                    |   \ \
              target   start end

              target = 0 means index 0 start 1 means B and end 3 means D so B and C have to copy as end does not include itself index
*/
chars.copyWithin(0, 1, 3);
console.log(chars)     //B C  C D E

const fruits = ["Apple", "Banana", "Grapes", "Guava"]
fruits.copyWithin(0, 1);     //end is not specified so all from index 1
console.log(fruits)   //Banana Grapes Guava Guava


//Flattening an Array
const myArr = [[1,2],[3,4],[5,6]];

//.flat() method creates a new array with sub-array elements concatenated to a specified depth.
const newArr = myArr.flat();
console.log(newArr)  // 1, 2, 3, 4, 5, 6

//.flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myNewArr = [1, 2, 3, 4, 5, 6];
const newArrArr = myNewArr.flatMap(x => [x, x * 10]);
console.log(newArrArr)

//Splicing and Slicing Arrays
//.splice() method adds new items to an array.
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const removed = fruits1.splice(2, 0, "Lemon", "Kiwi");    //add lemon at index 2 
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//removed will have array of items removed
console.log(fruits1)
console.log(removed) //empty as we specified 0

//.slice() method slices out a piece of an array.
fruits1.splice(2, 0, "Lemon", "Kiwi");

//.toSpliced() method as a safe way to splice an array without altering the original array.
//The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

//JavaScript Array slice()
//The slice() method slices out a piece of an array into a new array:
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(1);  //'Orange', 'Lemon', 'Apple', 'Mango' as end not specified so from index 1 to end
const sweet = fruits2.slice(3, 5)

console.log(citrus)
console.log(sweet)
