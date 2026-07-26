// Basic generator function
function* countUp(max) {
    for (let i = 1; i <= max; i++) {
        yield i;
    }
}

// Using the generator
const counter = countUp(5);

console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: 4, done: false }
console.log(counter.next()); // { value: 5, done: false }
console.log(counter.next()); // { value: undefined, done: true }

// Using generator with for...of loop
console.log("\nUsing for...of:");
for (const num of countUp(3)) {
    console.log(num); // 1, 2, 3
}

// Generator with condition
function* fibonacci(limit) {
    let a = 0, b = 1;
    while (a < limit) {
        yield a;
        [a, b] = [b, a + b];
    }
}

console.log("\nFibonacci sequence:");
for (const num of fibonacci(50)) {
    console.log(num); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
}