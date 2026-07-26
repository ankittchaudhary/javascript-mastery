/*
The while loop loops through a block of code as long as a specified condition is true.
while (condition) {
  // code block to be executed
}

The condition is evaluated before executing the code block. If the condition is true, the code block is executed. If the condition is false, the loop ends.

*/

// Example 1: break statement
i = 0;
while (i < 10) {
  console.log(i);
  
  if (i === 5) {
    break;  // exit the loop when i equals 5, so 5 will not be printed
  }
  i++;
}

console.log("Loop ended");

// Example 2: continue statement
// continue skips the current iteration and moves to the next one
i = 0;

while (i < 10) {
  i++;  // increment before continue to avoid infinite loop
  
  if (i === 5) {
    continue;  // skip this iteration when i equals 5, so 5 will not be printed
  }
  
  console.log(i);
}
