
# Variables in JavaScript

## What are Variables?

Variables are named containers that store values. They allow you to save data and reference it later in your program.

## Declaring Variables

JavaScript provides three ways to declare variables:

### `var` (Legacy)
```javascript
var name = "John";
```
Function-scoped, can be redeclared. Avoid using in modern code.

### `let` (Modern)
```javascript
let age = 25;
```
Block-scoped, cannot be redeclared in the same scope. Preferred for most cases.

### `const` (Modern)
```javascript
const PI = 3.14159;
```
Block-scoped, cannot be reassigned. Use for values that won't change.

## Naming Rules

- Start with letter, underscore, or `$`
- Can contain letters, numbers, underscores, `$`
- Case-sensitive: `name` ≠ `Name`
- Avoid reserved keywords

## Example

```javascript
let firstName = "Alice";     // string
let score = 95;              // number
let isActive = true;         // boolean
const MAX_SIZE = 100;        // constant

console.log(firstName);      // Alice
```

## Best Practices

- Use `const` by default
- Use `let` when reassignment is needed
- Avoid `var`
- Use meaningful, descriptive names
