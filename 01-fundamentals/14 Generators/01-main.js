/*
NEED FOR GENERATORS
A JavaScript Function can only return one value.

 - A JavaScript Generator can return multiple values, one by one.
 - A JavaScript Generator can yield a stream of data.
 - A JavaScript Generator can be paused and resumed.
*/

//A Generator Function is defined using the function* syntax:
function* generator() {
  yield 'Hello';
  yield 'World';
  return '!';
}

//The yield keyword is used to pause and resume a generator function. When a generator function is called, it returns an iterator object that can be used to iterate through the values produced by the generator.
const gen = generator();
console.log(gen.next()); // { value: 'Hello', done: false }
console.log(gen.next()); // { value: 'World', done: false }
console.log(gen.next()); // { value: '!', done: true }

//GENERATOR OBJECT METHODS
//The generator object returned by a generator function has three methods: next(), return(), and throw().
//The next() method is used to resume the generator function and retrieve the next value produced by the generator. It returns an object with two properties: value and done. The value property contains the value produced by the generator, and the done property indicates whether the generator has finished producing values.
const gen2 = generator();
console.log(gen2.next()); // { value: 'Hello', done: false }
console.log(gen2.next()); // { value: 'World', done: false }
console.log(gen2.next()); // { value: '!', done: true }

//The return() method is used to stop the generator function and return a value. It takes a single argument, which is the value to be returned. When the return() method is called, the generator function is stopped, and the value passed to return() is returned as the value of the next() method.
const gen3 = generator();
console.log(gen3.next()); // { value: 'Hello', done: false }
console.log(gen3.return('Goodbye')); // { value: 'Goodbye', done: true }

//The throw() method is used to throw an error inside the generator function. It takes a single argument, which is the error to be thrown. When the throw() method is called, the generator function is stopped, and the error passed to throw() is thrown as an exception.
const gen4 = generator();
console.log(gen4.next()); // { value: 'Hello', done: false }
console.log(gen4.throw(new Error('Something went wrong'))); // Uncaught Error: Something went wrong