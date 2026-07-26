/*
The for statement creates a loop with 3 optional expressions:
for (expr1; expr2; expr3) {
  // code block to be executed
}

exp1 is executed one time before the execution of the code block.
exp2 defines the condition for executing the code block.
exp3 is executed every time the code block has been executed.
*/

for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

//exp1: let i = 0;  //initialization  one time before the loop starts
//exp2: i < 5;     //condition        defines the condition for executing the code block
//exp3: i++        //increment        executed every time the code block has been executed

