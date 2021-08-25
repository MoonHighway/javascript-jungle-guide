# Function Arguments

Many functions will have dynamic values called function arguments passed to them. A function like `add` takes in `a` and `b`.

When we call this function, we'll pass in two numbers to be added.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
```

<Info>
This is the first time we've returned a value from a function. Notice that we have to wrap the add function in a console.log to retrieve its value.
</Info>

<Error>
If you don't pass any values to the function, you'll see an error (not a number).
</Error>

```javascript
console.log(typeof add());
console.log(add());
```
