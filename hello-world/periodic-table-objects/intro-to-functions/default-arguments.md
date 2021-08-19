# Default Function Arguments

One way to solve the problem of values not being passed to a function is to create defaults.

```javascript
function add(a = 0, b = 0) {
  return a + b;
}
```

Try to call the function with no values

```javascript
console.log(add());
```

The result will be `0`!
