/*
Set is a collection of unique values.
Each value can only occur once in a Set.
The values can be of any type, primitive values or objects.
*/

//create set
const letters = new Set(["a", "b", "c"]);
console.log(letters)

//add values
//.add() method is used

letters.add("d");  //d will be added in the end
console.log(letters)

letters.add("a");      //a is already there
console.log(letters)


//listing the elements
//list all Set elements (values) with a for..of loop

for (const l of letters){
    console.log(l);
}

//diff approach using array method
letters.forEach(l => {
    console.log(l);
});

//SETS ARE OBJECTS
console.log(typeof letters) //Obj