# Questions and Answers

# Possible Questions (4 mins)

1. What benefits do you get from using `const`?

Declaring a variable as a constant means that you'll get an error if you try to reset its value. For example:

```javascript
const pizza = true;
pizza = false;
```

This will cause the following error => Uncaught TypeError: Assignment to constant variable.

2. What are the parentheses for after the anonymous function?

Those are used to invoke the function immediately after it is written. It is called an IIFE (an immediately invoked function expression).

3. Where does `window` come from?

`window` is a global object that refers to the browser window and has a bunch of properties and methods on it?

4. Sometimes you use parentheses with the function arguments and sometimes you don't? Why is that?

When an arrow function takes in a single argument, the parentheses are optional. When there's more than one argument, you must wrap the arguments in parentheses.

5. Are there other `console` methods besides `.log()`?

Yes, there are several.

**`console.group`**: This will wrap around several different logs.

```javascript
console.group("console.group() example");
console.log("Line 1");
console.log("Line 2");
console.groupEnd();
```

**`console.table`**: Nice for working with arrays

```javascript
console.table(["one", "two", "three"]);
```

6. Are there any other cool logging techniques to take advantage of?

You can wrap the values you want to log with object braces to quickly label them with a key.

```javascript
let firstName = "Desmond";
let lastName = "Will";

console.log({ firstName, lastName });
```
